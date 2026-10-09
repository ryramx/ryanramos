import Link from "next/link";
import { profile } from "@/content/site";
import { Reveal } from "./reveal";

/** "Quem é o Ryan": o trailer. */
export function About() {
  const { about } = profile;
  return (
    <section className="px-4 py-16 sm:px-10" aria-labelledby="sobre">
      <Reveal className="max-w-3xl">
        <h2 id="sobre" className="text-3xl font-bold tracking-tight sm:text-4xl">
          {about.title}
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/80">
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
