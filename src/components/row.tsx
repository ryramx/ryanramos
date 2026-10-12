"use client";

import { useRef } from "react";
import { SectionHeading } from "./section-heading";

/** Fileira horizontal de cards, com setas no desktop e deslize por toque no celular. */
export function Row({
  title,
  subtitle,
  id,
  children,
}: {
  title: string;
  subtitle?: string;
  id?: string;
  children: React.ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="group/row relative py-6" aria-labelledby={id}>
      <SectionHeading title={title} subtitle={subtitle} id={id} />
      <div className="relative">
        <button
          type="button"
          aria-label="Voltar"
          onClick={() => scroll(-1)}
          className="absolute inset-y-0 left-0 z-20 hidden w-10 items-center justify-center bg-gradient-to-r from-background to-transparent text-3xl opacity-0 transition-opacity group-hover/row:opacity-100 sm:flex"
        >
          ‹
        </button>
        <div
          ref={track}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-4 px-4 pb-4 sm:scroll-px-10 sm:px-10"
        >
          {children}
        </div>
        <button
          type="button"
          aria-label="Avançar"
          onClick={() => scroll(1)}
          className="absolute inset-y-0 right-0 z-20 hidden w-10 items-center justify-center bg-gradient-to-l from-background to-transparent text-3xl opacity-0 transition-opacity group-hover/row:opacity-100 sm:flex"
        >
          ›
        </button>
      </div>
    </section>
  );
}
