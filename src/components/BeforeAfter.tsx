"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import StaggerWords from "@/components/motion/StaggerWords";
import AccentLine from "@/components/motion/AccentLine";

interface ComparisonItem {
  title: string;
  context: string;
  before: string;
  after: string;
}

const COMPARISONS: ComparisonItem[] = [
  {
    title: "Reparación de golpe lateral",
    context: "Puerta y guardafango — pintura + enderezado",
    before: "/assets/results/Dañado 1.png",
    after: "/assets/results/Reparado1.png",
  },
  {
    title: "Pintura completa de capó",
    context: "Corrección de color y sellado cerámico",
    before: "/assets/results/Dañado2.png",
    after: "/assets/results/Reparado2.png",
  },
  {
    title: "Detailing interior profundo",
    context: "Limpieza profunda de tapicería y tablero",
    before: "/assets/results/antes3.jpg",
    after: "/assets/results/despues3.jpg",
  },
];

function ComparisonSlider({ item }: { item: ComparisonItem }) {
  const [position, setPosition] = useState(50);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPosition(Number(e.target.value));
    },
    []
  );

  return (
    <div className="bg-surface border border-border rounded-card overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden select-none bg-black">
        {/* After image (full background) */}
        <Image
          src={item.after}
          alt={`${item.title} — después`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.title} — antes`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-lg">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-base"
            >
              <path
                d="M4 8L1 8M1 8L3 6M1 8L3 10M12 8L15 8M15 8L13 6M15 8L13 10"
                stroke="#0B0D10"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded z-10">
          Antes
        </span>
        <span className="absolute top-3 right-3 bg-accent/90 text-white text-xs font-semibold px-2.5 py-1 rounded z-10">
          Después
        </span>

        {/* Range input (accessible) */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={handleChange}
          aria-label={`Comparar antes y después: ${item.title}`}
          className="before-after-slider absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold">{item.title}</h3>
        <p className="text-xs text-muted mt-1">{item.context}</p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="resultados" className="py-20 lg:py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <StaggerWords
            text="Antes / Después"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold"
          />
          <AccentLine />
          <FadeIn delay={0.3}>
            <p className="mt-4 text-text-secondary text-base max-w-md mx-auto">
              No prometemos milagros. Mostramos <span className="text-white font-semibold">resultados</span>.
            </p>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPARISONS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <ComparisonSlider item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
