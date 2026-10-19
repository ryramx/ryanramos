"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/content/types";
import { statusLabel } from "@/content/site";

const SLIDE_MS = 8000;
const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Destaque do topo em carrossel, como a vitrine de um catálogo de filmes:
 * cada projeto em destaque ocupa a tela inteira e eles se revezam sozinhos.
 */
export function Hero({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = projects[index];

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + projects.length) % projects.length),
    [projects.length],
  );

  useEffect(() => {
    if (paused || projects.length < 2) return;
    const id = setTimeout(() => go(1), SLIDE_MS);
    return () => clearTimeout(id);
  }, [index, paused, go, projects.length]);

  return (
    <section
      className="relative flex min-h-[88svh] flex-col justify-end overflow-hidden pb-8 pt-24 sm:min-h-[94svh]"
      aria-roledescription="carrossel"
      aria-label="Projetos em destaque"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={project.slug}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: SLIDE_MS / 1000 + 1, ease: "linear" } }}
          drag={projects.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) go(1);
            else if (info.offset.x > 60) go(-1);
          }}
        >
          <Image
            src={project.cover}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="pointer-events-none object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/45" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      <div className="relative z-10 min-h-[340px] max-w-2xl px-4 sm:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease }}
            aria-live="polite"
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
        </AnimatePresence>
      </div>

      {projects.length > 1 && (
        <div className="relative z-10 mt-8 flex items-end gap-3 overflow-x-auto px-4 no-scrollbar sm:px-10">
          {projects.map((p, i) => {
            const active = i === index;
            return (
              <button
                key={p.slug}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Mostrar ${p.shortTitle}`}
                aria-current={active}
                className={`group relative aspect-video w-36 shrink-0 overflow-hidden rounded-md text-left ring-2 transition-all sm:w-48 ${
                  active ? "ring-foreground" : "opacity-60 ring-transparent hover:opacity-100"
                }`}
              >
                <Image src={p.cover} alt="" fill sizes="192px" className="object-cover object-top" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <span className="absolute inset-x-2 bottom-2.5 text-xs font-semibold leading-tight sm:text-sm">
                  {p.shortTitle}
                  <span className="block text-[10px] font-normal text-foreground/70">{statusLabel[p.status]}</span>
                </span>
                <span className="absolute inset-x-0 bottom-0 h-1 bg-white/15">
                  {active && !paused && (
                    <motion.span
                      key={p.slug}
                      className="block h-full bg-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
