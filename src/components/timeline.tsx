import Image from "next/image";
import Link from "next/link";
import type { Project, Season } from "@/content/types";
import { Reveal } from "./reveal";
import { StatusPill } from "./status-pill";

/**
 * A trajetória de cima para baixo. Os projetos entram na etapa em que nasceram,
 * então trajetória e projetos viram uma coisa só.
 */
export function Timeline({
  seasons,
  projects,
  projectsSeasonCode,
}: {
  seasons: Season[];
  projects: Project[];
  projectsSeasonCode: string;
}) {
  return (
    <section id="trajetoria" className="scroll-mt-20 px-4 pb-16 sm:px-10" aria-label="Trajetória e projetos">
      <ol className="relative mx-auto max-w-5xl">
        {/* A linha vertical: à esquerda no celular, depois da coluna de datas no computador. */}
        <span
          aria-hidden
          className="absolute bottom-2 top-2 left-[7px] w-0.5 bg-line sm:left-[171px]"
        />
        {seasons.map((s) => (
          <li
            key={s.code}
            className="relative grid gap-1 pb-10 pl-9 sm:grid-cols-[140px_1fr] sm:gap-12 sm:pl-0"
          >
            <span
              aria-hidden
              className={`absolute left-0 top-1 h-4 w-4 rounded-full border-[3px] border-accent sm:left-[164px] ${
                s.current ? "bg-accent shadow-[0_0_0_6px_var(--accent-soft)]" : "bg-background"
              }`}
            />
            <div className="sm:pt-0.5 sm:text-right">
              <p className="font-display text-sm font-semibold">{s.label}</p>
              {s.place && <p className="text-xs text-muted">{s.place}</p>}
            </div>
            <div className="min-w-0">
              <Reveal>
                <h2 className="font-display text-xl font-semibold sm:text-2xl">{s.title}</h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">{s.body}</p>
              </Reveal>
              {s.code === projectsSeasonCode && projects.length > 0 && <ProjectList projects={projects} />}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectList({ projects }: { projects: Project[] }) {
  const [main, ...rest] = projects;
  return (
    <div id="projetos" className="mt-6 scroll-mt-24">
      <h3 className="sr-only">Projetos</h3>
      <Reveal>
        <Link
          href={`/projetos/${main.slug}`}
          className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition hover:border-foreground/25 hover:shadow-lg md:grid-cols-[1.1fr_1fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
            <Image
              src={main.cover}
              alt={`Tela do ${main.shortTitle}`}
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col gap-2 p-5 sm:p-6">
            <StatusPill status={main.status} className="self-start" />
            <span className="font-display text-xl font-semibold sm:text-2xl">{main.shortTitle}</span>
            <span className="text-sm leading-relaxed text-muted">{main.summary ?? main.tagline}</span>
            {main.numbers && (
              <span className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                {main.numbers.slice(0, 3).map((n) => (
                  <span key={n.label}>
                    <strong className="font-display font-semibold">{n.value}</strong>{" "}
                    <span className="text-muted">{n.label.replace(/ \(.*\)$/, "")}</span>
                  </span>
                ))}
              </span>
            )}
            <span className="mt-auto pt-2 text-sm font-semibold text-accent">Ver o projeto →</span>
          </div>
        </Link>
      </Reveal>

      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {rest.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={(i % 2) * 0.06} className="h-full">
              <Link
                href={`/projetos/${p.slug}`}
                className="group grid h-full grid-cols-[96px_1fr] items-center gap-3 rounded-xl border border-line bg-surface p-2.5 transition hover:border-foreground/25 hover:shadow-md sm:grid-cols-[120px_1fr]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-2">
                  <Image
                    src={p.cover}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 py-1 pr-1">
                  <StatusPill status={p.status} />
                  <p className="mt-1 font-display font-semibold">{p.shortTitle}</p>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-muted sm:text-[13px]">
                    {p.summary ?? p.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
