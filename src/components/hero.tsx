"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/content/types";

const SLIDE_MS = 6000;

/** Banner gigante do topo: alterna as telas do projeto em destaque, como um trailer. */
export function Hero({ project }: { project: Project }) {
  const images = project.heroImages?.length ? project.heroImages : [project.cover];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden pb-16 pt-24 sm:min-h-[92svh]">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[index]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: SLIDE_MS / 1000 + 1.2, ease: "linear" } }}
        >
          <Image
            src={images[index]}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <motion.div
        className="relative z-10 max-w-2xl px-4 sm:px-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-block rounded bg-accent-soft px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
          {project.badge}
        </span>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-3 text-sm text-muted">{project.meta.join(" · ")}</p>
        <p className="mt-5 text-base leading-relaxed text-foreground/85 sm:text-lg">{project.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/projetos/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 font-semibold text-background transition hover:bg-foreground/85"
          >
            <span aria-hidden>▶</span> Conhecer o projeto
          </Link>
          <Link
            href={`/contato?assunto=${encodeURIComponent("Orçamento de projeto")}`}
            className="inline-flex items-center rounded-md bg-white/15 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/25"
          >
            Quero um sistema assim
          </Link>
        </div>

        {project.imageNote && <p className="mt-6 text-xs text-muted/80">{project.imageNote}</p>}
      </motion.div>

      {images.length > 1 && (
        <div className="absolute bottom-6 right-4 z-10 flex gap-2 sm:right-10">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Mostrar imagem ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all ${i === index ? "w-8 bg-foreground" : "w-4 bg-foreground/40"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
