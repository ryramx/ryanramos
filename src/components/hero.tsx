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
      className="relative flex flex-col overflow-hidden pb-6 pt-14 sm:min-h-[94svh] sm:justify-end sm:pb-8 sm:pt-24"
      aria-roledescription="carrossel"
      aria-label="Projetos em destaque"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Celular: a tela do projeto aparece inteira, sem sombra por cima, acima do texto. */}
      <div className="relative aspect-[16/10] w-full overflow-hidden sm:hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={project.slug}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
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
              alt={`Tela do ${project.shortTitle}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="pointer-events-none object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background to-transparent" />
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key={project.slug}
          className="absolute inset-0 hidden sm:block"
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

      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-background from-30% via-background/75 via-50% to-background/10 sm:block" />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-background/20 to-transparent sm:block" />

      <div className="relative z-10 mt-4 max-w-2xl px-4 sm:mt-0 sm:min-h-[340px] sm:px-10">
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
            <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-5xl">{project.title}</h1>
            <p className="mt-3 hidden text-sm text-muted sm:block">{project.meta.join(" · ")}</p>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/85 sm:mt-5 sm:line-clamp-none sm:text-lg">
              {project.tagline}
            </p>

            <div className="mt-5 flex gap-2 sm:mt-8 sm:gap-3">
              <Link
                href={`/projetos/${project.slug}`}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-foreground/85 sm:px-6 sm:py-3 sm:text-base"
              >
                <span aria-hidden>▶</span> Ver projeto
              </Link>
              <Link
                href={`/contato?assunto=${encodeURIComponent("Orçamento de projeto")}`}
                className="inline-flex items-center whitespace-nowrap rounded-md bg-white/15 px-4 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/25 sm:px-6 sm:py-3 sm:text-base"
              >
                <span className="sm:hidden">Pedir orçamento</span>
                <span className="hidden sm:inline">Quero um sistema assim</span>
              </Link>
            </div>

            {project.imageNote && <p className="mt-6 hidden text-xs text-muted/80 sm:block">{project.imageNote}</p>}
          </motion.div>
        </AnimatePresence>
      </div>

      {projects.length > 1 && (
        <div className="relative z-10 mt-8 hidden items-end gap-3 px-10 sm:flex">
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

      {projects.length > 1 && (
        <div className="relative z-10 mt-6 flex justify-center gap-2 sm:hidden">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Mostrar ${p.shortTitle}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/40"}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
