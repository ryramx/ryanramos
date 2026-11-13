import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/site";
import { Reveal } from "./reveal";

/** Topo da página inicial: quem é o Ryan, em uma frase. */
export function Intro({ live, building }: { live: number; building: number }) {
  const { about } = profile;
  return (
    <section className="px-4 pb-12 pt-24 sm:px-10 sm:pb-16 sm:pt-32" aria-labelledby="inicio">
      <div className="mx-auto grid max-w-5xl items-center gap-6 sm:grid-cols-[160px_1fr] sm:gap-10">
        <Reveal className="w-28 sm:w-40">
          <div className="relative aspect-square overflow-hidden rounded-full ring-4 ring-surface">
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              fill
              priority
              sizes="160px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            {profile.availability}
          </span>
          <h1 id="inicio" className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>
          <p className="mt-3 text-sm text-muted">
            <strong className="font-semibold text-foreground">{live}</strong> {live === 1 ? "sistema" : "sistemas"} no ar ·{" "}
            <strong className="font-semibold text-foreground">{building}</strong> em desenvolvimento
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#projetos"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-on-ink transition hover:opacity-90"
            >
              Ver projetos
            </Link>
            <Link
              href="/contato"
              className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold transition hover:border-foreground/30"
            >
              Vamos conversar
            </Link>
            {about.resumeUrl && (
              <a
                href={about.resumeUrl}
                download
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-muted transition hover:text-foreground"
              >
                Baixar currículo
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
