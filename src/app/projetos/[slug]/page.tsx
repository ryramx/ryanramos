import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getProject, projects, statusLabel } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.shortTitle,
    description: project.tagline,
    openGraph: { images: [project.cover] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article>
      <header className="relative flex min-h-[70svh] items-end overflow-hidden pb-12 pt-24">
        <Image src={project.pageCover ?? project.cover} alt="" fill priority sizes="100vw" className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <Reveal className="relative z-10 max-w-3xl px-4 sm:px-10">
          <span className="inline-block rounded bg-accent-soft px-2 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {statusLabel[project.status]}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-3 text-sm text-muted">{project.meta.join(" · ")}</p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">{project.tagline}</p>
        </Reveal>
      </header>

      <div className="space-y-16 px-4 py-12 sm:px-10">
        {project.story?.map((block) => (
          <Reveal key={block.title} className="max-w-3xl">
            <h2 className="text-2xl font-semibold">{block.title}</h2>
            <p className="mt-3 text-lg leading-relaxed text-foreground/80">{block.body}</p>
          </Reveal>
        ))}

        {project.outcomes && (
          <section aria-labelledby="mudancas">
            <h2 id="mudancas" className="text-2xl font-semibold">O que mudou para eles</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.outcomes.map((o, i) => (
                <li key={o.title}>
                  <Reveal delay={(i % 3) * 0.08} className="h-full rounded-md bg-surface p-5">
                    <h3 className="font-semibold">{o.title}</h3>
                    <p className="mt-1 text-sm text-foreground/75">{o.body}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.numbers && (
          <section aria-labelledby="numeros">
            <h2 id="numeros" className="text-2xl font-semibold">Em números</h2>
            <dl className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {project.numbers.map((n, i) => (
                <Reveal key={n.label} delay={i * 0.08} className="rounded-md border border-white/5 bg-surface p-5">
                  <dt className="sr-only">{n.label}</dt>
                  <dd className="text-3xl font-bold text-accent">{n.value}</dd>
                  <dd className="mt-1 text-sm text-foreground/75">{n.label}</dd>
                </Reveal>
              ))}
            </dl>
          </section>
        )}

        {project.episodes && (
          <section aria-labelledby="episodios">
            <h2 id="episodios" className="scroll-mt-24 text-2xl font-semibold">Episódios</h2>
            {project.imageNote && <p className="mt-1 text-sm text-muted">{project.imageNote}</p>}
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.episodes.map((ep, i) => (
                <li key={ep.image}>
                  <Reveal delay={(i % 3) * 0.08}>
                    <figure className="group overflow-hidden rounded-md bg-surface">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={ep.image}
                          alt={ep.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <figcaption className="p-4">
                        <span className="text-xs text-muted">Episódio {i + 1}</span>
                        <h3 className="font-semibold">{ep.title}</h3>
                        <p className="mt-1 text-sm text-foreground/75">{ep.line}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.techDetails && (
          <details className="group max-w-3xl rounded-md bg-surface p-5">
            <summary className="cursor-pointer font-semibold marker:text-accent">Ver detalhes técnicos</summary>
            <p className="mt-4 leading-relaxed text-foreground/80">{project.techDetails}</p>
          </details>
        )}

        {project.nextChapters && (
          <section aria-labelledby="proximos" className="max-w-3xl">
            <h2 id="proximos" className="text-2xl font-semibold">Próximos capítulos</h2>
            <ul className="mt-4 list-inside list-disc space-y-1 text-foreground/80">
              {project.nextChapters.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="flex flex-wrap gap-3">
          {project.links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="rounded-md bg-white/10 px-5 py-2.5 font-semibold hover:bg-white/20">
              {l.label}
            </a>
          ))}
          <Link
            href={`/contato?assunto=${encodeURIComponent("Orçamento de projeto")}`}
            className="rounded-md bg-accent px-5 py-2.5 font-semibold text-white hover:brightness-110"
          >
            Quero um sistema assim
          </Link>
          <Link href="/" className="rounded-md px-5 py-2.5 font-semibold text-muted hover:text-foreground">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </article>
  );
}
