import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { StatusPill } from "@/components/status-pill";
import { getProject, projects } from "@/content/site";

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
      <header className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-24 sm:px-10 sm:pt-32 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <Link href="/#projetos" className="text-sm font-semibold text-muted hover:text-foreground">
            ← Todos os projetos
          </Link>
          <div className="mt-6">
            <StatusPill status={project.status} />
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-3 text-sm text-muted">{project.meta.join(" · ")}</p>
          <p className="mt-5 text-lg leading-relaxed text-muted">{project.tagline}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-xl shadow-ink/10">
            <Image src={project.cover} alt={`Tela do ${project.shortTitle}`} fill priority sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-top" />
          </div>
        </Reveal>
      </header>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 pt-4 sm:px-10">
        {project.story?.map((block) => (
          <Reveal key={block.title} className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold">{block.title}</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">{block.body}</p>
          </Reveal>
        ))}

        {project.outcomes && (
          <section aria-labelledby="mudancas">
            <h2 id="mudancas" className="font-display text-2xl font-semibold">O que muda na prática</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.outcomes.map((o, i) => (
                <li key={o.title}>
                  <Reveal delay={(i % 3) * 0.08} className="h-full rounded-xl border border-line bg-surface p-5">
                    <h3 className="font-semibold">{o.title}</h3>
                    <p className="mt-1 text-sm text-muted">{o.body}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.numbers && (
          <section aria-labelledby="numeros">
            <h2 id="numeros" className="font-display text-2xl font-semibold">Em números</h2>
            <dl className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {project.numbers.map((n, i) => (
                <Reveal key={n.label} delay={i * 0.08} className="rounded-xl border border-line bg-surface p-5">
                  <dt className="sr-only">{n.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-accent">{n.value}</dd>
                  <dd className="mt-1 text-sm text-muted">{n.label}</dd>
                </Reveal>
              ))}
            </dl>
          </section>
        )}

        {project.episodes && (
          <section aria-labelledby="telas">
            <h2 id="telas" className="scroll-mt-24 font-display text-2xl font-semibold">Telas do sistema</h2>
            {project.imageNote && <p className="mt-1 text-sm text-muted">{project.imageNote}</p>}
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.episodes.map((ep, i) => (
                <li key={ep.image}>
                  <Reveal delay={(i % 3) * 0.08}>
                    <figure className="group overflow-hidden rounded-xl border border-line bg-surface">
                      <div className="relative aspect-video overflow-hidden bg-surface-2">
                        <Image
                          src={ep.image}
                          alt={ep.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <figcaption className="p-4">
                                                <h3 className="font-semibold">{ep.title}</h3>
                        <p className="mt-1 text-sm text-muted">{ep.line}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.techDetails && (
          <details className="group max-w-3xl rounded-xl border border-line bg-surface p-5">
            <summary className="cursor-pointer font-semibold marker:text-accent">Ver detalhes técnicos</summary>
            <p className="mt-4 leading-relaxed text-muted">{project.techDetails}</p>
          </details>
        )}

        {project.nextChapters && (
          <section aria-labelledby="proximos" className="max-w-3xl">
            <h2 id="proximos" className="font-display text-2xl font-semibold">Próximos passos</h2>
            <ul className="mt-4 list-inside list-disc space-y-1 text-muted">
              {project.nextChapters.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        <div className="flex flex-wrap gap-3">
          {project.links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line bg-surface px-5 py-2.5 font-semibold hover:border-foreground/30">
              {l.label}
            </a>
          ))}
          <Link
            href={`/contato?assunto=${encodeURIComponent("Orçamento de projeto")}`}
            className="rounded-full bg-ink px-5 py-2.5 font-semibold text-on-ink hover:opacity-90"
          >
            Quero um sistema assim
          </Link>
          <Link href="/" className="rounded-full px-5 py-2.5 font-semibold text-muted hover:text-foreground">
            ← Voltar ao início
          </Link>
        </div>
      </div>
    </article>
  );
}
