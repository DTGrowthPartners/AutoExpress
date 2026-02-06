# Auto Express Cartagena — Landing Page

Landing page de conversión para **Auto Express Cartagena**: taller especializado en colisión, pintura, protecciones y detailing.

## Cómo correr

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Para build de producción:

```bash
pnpm build
pnpm start
```

## Dónde cambiar el número de WhatsApp

Archivo: **`src/lib/whatsapp.ts`**

Cambia la constante `WHATSAPP_NUMBER` (formato: código de país + número sin espacios ni símbolos):

```ts
const WHATSAPP_NUMBER = "573100000000"; // ← tu número aquí
```

También actualiza el número visible en **`src/components/ContactFooter.tsx`** (busca `+57 310 000 0000`).

## Dónde poner imágenes

Reemplaza los archivos placeholder en `public/assets/`:

```
public/assets/
├── brand/
│   └── logo.svg              ← Logo del negocio
├── hero/
│   ├── hero.mp4              ← Video hero (loop, sin audio)
│   └── hero.jpg              ← Imagen fallback hero
├── services/
│   ├── colision.jpg           ← Foto servicio colisión
│   ├── pintura.jpg            ← Foto servicio pintura
│   ├── protecciones.jpg       ← Foto servicio protecciones
│   └── detailing.jpg          ← Foto servicio detailing
├── results/
│   ├── antes1.jpg / despues1.jpg  ← Par antes/después #1
│   ├── antes2.jpg / despues2.jpg  ← Par antes/después #2
│   └── antes3.jpg / despues3.jpg  ← Par antes/después #3
└── og/
    └── og.jpg                 ← Imagen OpenGraph (1200x630px)
```

Busca `// TODO: reemplazar` en el código para encontrar todas las referencias.

## Cómo activar Meta Pixel / Google Analytics

En **`src/app/layout.tsx`**, descomenta los bloques de script correspondientes y reemplaza:

- `TU_PIXEL_ID` → tu ID de Meta Pixel
- `TU_GA_ID` → tu ID de Google Analytics (G-XXXXXXX)

El tracking de eventos (Lead al hacer click en WhatsApp) está preparado en **`src/lib/track.ts`**. Descomenta las líneas de `fbq` y `gtag` una vez actives los scripts.

## Cómo editar copy

- **Hero**: `src/components/Hero.tsx` — H1, subtítulo, micro-trust
- **Servicios**: `src/components/Services.tsx` — array `SERVICES` con títulos, descripciones y mensajes WA
- **Antes/Después**: `src/components/BeforeAfter.tsx` — array `COMPARISONS` con títulos y contexto
- **Por qué nosotros**: `src/components/WhyUs.tsx` — array `REASONS` y card de garantía
- **Proceso**: `src/components/Process.tsx` — array `STEPS`
- **CTA grande**: `src/components/BigCTA.tsx` — headline
- **Contacto**: `src/components/ContactFooter.tsx` — dirección, horarios, teléfono, Instagram
- **SEO/Meta**: `src/app/layout.tsx` — metadata object

## Otros TODOs

- Reemplazar `favicon.ico` con el favicon real
- Actualizar `metadataBase` en layout.tsx con la URL del dominio final
- Actualizar link de Instagram en ContactFooter.tsx
- Insertar iframe de Google Maps en ContactFooter.tsx

## Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- lucide-react (iconos)
- clsx

## Estructura de componentes

```
src/
├── app/
│   ├── layout.tsx        ← Layout raíz, SEO, fonts
│   ├── page.tsx          ← Página principal (ensambla secciones)
│   └── globals.css       ← Estilos globales
├── components/
│   ├── Header.tsx        ← Header sticky + mobile menu
│   ├── Hero.tsx          ← Hero con video/imagen + CTAs
│   ├── SocialProof.tsx   ← Banda de métricas
│   ├── Services.tsx      ← Grid de 5 servicios
│   ├── BeforeAfter.tsx   ← Comparador slider antes/después
│   ├── WhyUs.tsx         ← Razones + card de garantía
│   ├── Process.tsx       ← 4 pasos del proceso
│   ├── BigCTA.tsx        ← CTA fuerte de conversión
│   ├── ContactFooter.tsx ← Contacto + footer
│   └── WhatsAppButtonSticky.tsx ← Botón WA flotante (mobile)
└── lib/
    ├── whatsapp.ts       ← Generador de links WA
    └── track.ts          ← Tracking de CTAs
```
