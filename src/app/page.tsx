import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { PosterCard, TextCard } from "@/components/poster-card";
import { Row } from "@/components/row";
import { Stack } from "@/components/stack";
import { Workflow } from "@/components/workflow";
import {
  featuredProjectSlug,
  getProject,
  projects,
  seasons,
  services,
  statusLabel,
} from "@/content/site";

export default function Home() {
  const featured = getProject(featuredProjectSlug)!;
  const episodes = featured.episodes?.filter((e) => e.featured) ?? [];
  const inProgress = projects.filter((p) => p.status !== "no-ar");

  return (
    <>
      <Hero project={featured} />

      <div className="relative z-10 -mt-10 space-y-2">
        <Row id="projetos" title={`Em cartaz: dentro do ${featured.shortTitle}`} subtitle="Cada tela é um episódio.">
          {episodes.map((ep, i) => (
            <PosterCard
              key={ep.image}
              index={i}
              title={ep.title}
              line={ep.line}
              image={ep.image}
              href={`/projetos/${featured.slug}#episodios`}
            />
          ))}
        </Row>

        <About />

        <Row id="em-desenvolvimento" title="Em desenvolvimento" subtitle="O que estou construindo agora.">
          {inProgress.map((p, i) => (
            <PosterCard
              key={p.slug}
              index={i}
              title={p.shortTitle}
              line={p.tagline}
              image={p.cover}
              badge={statusLabel[p.status]}
              href={`/projetos/${p.slug}`}
            />
          ))}
        </Row>

        <Row id="trajetoria" title="Minha trajetória" subtitle="Temporada por temporada.">
          {seasons.map((s, i) => (
            <TextCard
              key={s.code}
              index={i}
              eyebrow={[s.code, s.period].filter(Boolean).join(" · ")}
              title={s.title}
              body={s.body}
            />
          ))}
        </Row>

        <Row id="servicos" title="Como posso te ajudar">
          {services.map((s, i) => (
            <TextCard key={s.title} index={i} title={s.title} body={s.body} footer={s.audience} />
          ))}
        </Row>

        <Workflow />
        <Stack />
        <ContactSection />
      </div>
    </>
  );
}
