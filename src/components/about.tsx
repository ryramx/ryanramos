import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/site";
import { Reveal } from "./reveal";

/** "Quem é o Ryan": o trailer. */
export function About() {
  const { about } = profile;
  return (
    <section
      className="grid items-center gap-8 px-4 py-10 sm:gap-10 sm:px-10 sm:py-16 md:grid-cols-[minmax(0,320px)_1fr] lg:gap-16"
      aria-labelledby="sobre"
    >
      <Reveal className="mx-auto w-full max-w-[220px] sm:max-w-[320px]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-white/10">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            fill
            sizes="(min-width: 768px) 320px, 90vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </Reveal>
      <Reveal delay={0.1} className="max-w-3xl">
        <h2 id="sobre" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {about.title}
        </h2>
        <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground/80 sm:mt-6 sm:space-y-4 sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/#projetos" className="rounded-md bg-foreground px-5 py-2.5 font-semibold text-background hover:bg-foreground/85">
            Ver projetos
          </Link>
          {about.resumeUrl && (
            <a href={about.resumeUrl} download className="rounded-md bg-white/10 px-5 py-2.5 font-semibold hover:bg-white/20">
              Baixar currículo
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
