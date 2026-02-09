/**
 * Favicon Generator for Auto Express
 *
 * Usage:
 *   node scripts/generate-favicons.js [path-to-logo]
 *
 * Defaults to: public/assets/hero/autoexpresslogo-sin-fondo.png
 *
 * Generates square favicons in multiple sizes and places them in:
 *   - src/app/          → favicon.ico, icon.png, apple-icon.png (Next.js App Router conventions)
 *   - public/favicons/  → all PNG sizes for manual <link> usage
 */

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SIZES = [16, 32, 48, 64, 96, 128, 180, 192, 512];

const ROOT = path.resolve(__dirname, "..");
const DEFAULT_LOGO = path.join(
  ROOT,
  "public/assets/hero/autoexpresslogo-sin-fondo.png"
);

const INPUT = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_LOGO;

const OUTPUT_PUBLIC = path.join(ROOT, "public/favicons");
const OUTPUT_APP = path.join(ROOT, "src/app");

// Transparent background
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

async function generateFavicons() {
  // Ensure output dirs exist
  fs.mkdirSync(OUTPUT_PUBLIC, { recursive: true });

  if (!fs.existsSync(INPUT)) {
    console.error(`Logo not found at: ${INPUT}`);
    process.exit(1);
  }

  console.log(`Reading logo from: ${INPUT}`);

  // Get original image metadata
  const metadata = await sharp(INPUT).metadata();
  console.log(`Original size: ${metadata.width}x${metadata.height}`);

  // Trim transparent edges so the logo fills as much space as possible
  const trimmed = await sharp(INPUT).trim().ensureAlpha().png().toBuffer();
  const trimMeta = await sharp(trimmed).metadata();
  console.log(`After trim: ${trimMeta.width}x${trimMeta.height}`);

  // Add a small padding (8% per side) then fit into a square
  const maxSide = Math.max(trimMeta.width, trimMeta.height);
  const padding = Math.round(maxSide * 0.08);
  const canvasSize = maxSide + padding * 2;

  const squareBase = await sharp(trimmed)
    .resize({
      width: canvasSize,
      height: canvasSize,
      fit: "contain",
      background: TRANSPARENT,
    })
    .ensureAlpha()
    .png()
    .toBuffer();

  console.log(`\nGenerating ${SIZES.length} favicon sizes...\n`);

  const results = [];

  for (const size of SIZES) {
    const filename = `favicon-${size}x${size}.png`;
    const outputPath = path.join(OUTPUT_PUBLIC, filename);

    await sharp(squareBase)
      .resize(size, size, { fit: "contain", background: TRANSPARENT })
      .png()
      .toFile(outputPath);

    results.push({ size, path: outputPath });
    console.log(`  ✓ ${filename}`);
  }

  // Copy key sizes to src/app/ for Next.js App Router auto-detection
  // icon.png → 32x32 (general favicon)
  await sharp(squareBase)
    .resize(32, 32, { fit: "contain", background: TRANSPARENT })
    .png()
    .toFile(path.join(OUTPUT_APP, "icon.png"));
  console.log(`  ✓ src/app/icon.png (32x32)`);

  // apple-icon.png → 180x180 (Apple touch icon)
  await sharp(squareBase)
    .resize(180, 180, { fit: "contain", background: TRANSPARENT })
    .png()
    .toFile(path.join(OUTPUT_APP, "apple-icon.png"));
  console.log(`  ✓ src/app/apple-icon.png (180x180)`);

  // Generate ICO (contains 16, 32, 48 in one file)
  // ICO is essentially a container with multiple BMP/PNG images
  // We'll create a simple ICO with the 32x32 PNG
  const ico32 = await sharp(squareBase)
    .resize(32, 32, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

  const ico16 = await sharp(squareBase)
    .resize(16, 16, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

  const ico48 = await sharp(squareBase)
    .resize(48, 48, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

  const icoBuffer = createIco([ico16, ico32, ico48], [16, 32, 48]);
  const icoPath = path.join(OUTPUT_APP, "favicon.ico");
  fs.writeFileSync(icoPath, icoBuffer);
  console.log(`  ✓ src/app/favicon.ico (16+32+48 multi-size)`);

  // Generate web manifest icons info
  const manifest = {
    icons: [192, 512].map((size) => ({
      src: `/favicons/favicon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    })),
  };

  fs.writeFileSync(
    path.join(OUTPUT_PUBLIC, "manifest-icons.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`\nDone! Generated ${SIZES.length + 3} files.`);
  console.log(`\nNext.js App Router will auto-detect:`);
  console.log(`  - src/app/favicon.ico`);
  console.log(`  - src/app/icon.png`);
  console.log(`  - src/app/apple-icon.png`);
  console.log(`\nAll PNG sizes available at: public/favicons/`);
}

/**
 * Creates a minimal ICO file buffer from PNG buffers.
 * ICO format: Header + Directory entries + Image data
 */
function createIco(pngBuffers, sizes) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;
  let dataOffset = headerSize + dirSize;

  // ICO Header: reserved(2) + type(2) + count(2)
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(numImages, 4); // image count

  // Directory entries
  const dirEntries = Buffer.alloc(dirSize);
  const offsets = [];

  for (let i = 0; i < numImages; i++) {
    const size = sizes[i];
    const pngBuf = pngBuffers[i];
    const entryOffset = i * dirEntrySize;

    dirEntries.writeUInt8(size < 256 ? size : 0, entryOffset); // width
    dirEntries.writeUInt8(size < 256 ? size : 0, entryOffset + 1); // height
    dirEntries.writeUInt8(0, entryOffset + 2); // color palette
    dirEntries.writeUInt8(0, entryOffset + 3); // reserved
    dirEntries.writeUInt16LE(1, entryOffset + 4); // color planes
    dirEntries.writeUInt16LE(32, entryOffset + 6); // bits per pixel
    dirEntries.writeUInt32LE(pngBuf.length, entryOffset + 8); // image size
    dirEntries.writeUInt32LE(dataOffset, entryOffset + 12); // data offset

    offsets.push(dataOffset);
    dataOffset += pngBuf.length;
  }

  return Buffer.concat([header, dirEntries, ...pngBuffers]);
}

generateFavicons().catch((err) => {
  console.error("Error generating favicons:", err);
  process.exit(1);
});
