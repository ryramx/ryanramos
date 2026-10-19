"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/** Card de "episódio": a imagem surge com fade e zoom e, ao passar o mouse, a legenda aparece. */
export function PosterCard({
  title,
  line,
  image,
  href,
  badge,
  index = 0,
}: {
  title: string;
  line?: string;
  image: string;
  href?: string;
  badge?: string;
  index?: number;
}) {
  const body = (
    <motion.article
      className="group relative aspect-video w-[64vw] shrink-0 snap-start overflow-hidden rounded-md bg-surface sm:w-[340px]"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.06 }}
      whileHover={{ y: -4 }}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 640px) 340px, 64vw"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      {badge && (
        <span className="absolute left-2 top-2 rounded bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          {badge}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
        {line && (
          <p className="mt-1 max-h-0 overflow-hidden text-sm text-foreground/80 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 group-focus-within:max-h-20 group-focus-within:opacity-100">
            {line}
          </p>
        )}
      </div>
    </motion.article>
  );

  return href ? (
    <Link href={href} className="shrink-0 snap-start rounded-md focus-visible:outline-2 focus-visible:outline-accent">
      {body}
    </Link>
  ) : (
    body
  );
}

/** Card sem imagem, para temporadas, serviços e certificados. */
export function TextCard({
  eyebrow,
  title,
  body,
  footer,
  index = 0,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  footer?: string;
  index?: number;
}) {
  return (
    <motion.article
      className="flex w-[72vw] shrink-0 snap-start flex-col rounded-md border border-white/5 bg-gradient-to-br from-surface-2 to-surface p-4 sm:w-[340px] sm:p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index, 6) * 0.06 }}
      whileHover={{ y: -4 }}
    >
      {eyebrow && <span className="text-xs font-semibold uppercase tracking-wider text-accent">{eyebrow}</span>}
      <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
      {body && <p className="mt-2 text-sm leading-relaxed text-foreground/75">{body}</p>}
      {footer && <p className="mt-auto pt-4 text-xs text-muted">{footer}</p>}
    </motion.article>
  );
}
