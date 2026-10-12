import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { certificates, seasons } from "@/content/site";

export const metadata: Metadata = {
  title: "Trajetória",
  description: "Temporada por temporada: formação, primeiro sistema de verdade e próximos passos.",
};

export default function TrajetoriaPage() {
  return (
    <div className="px-4 pb-16 pt-28 sm:px-10">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Minha trajetória</h1>
        <p className="mt-3 text-lg text-muted">Temporada por temporada.</p>
      </Reveal>

      <ol className="relative mt-12 max-w-3xl space-y-10 border-l border-white/10 pl-8">
        {seasons.map((s, i) => (
          <li key={s.code} className="relative">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent ring-4 ring-background" />
            <Reveal delay={i * 0.05}>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {[`Temporada ${s.code.replace("T", "")}`, s.period].filter(Boolean).join(" · ")}
              </p>
              <h2 className="mt-1 text-2xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-lg leading-relaxed text-foreground/80">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <section aria-labelledby="extras" className="mt-16">
        <h2 id="extras" className="text-2xl font-semibold">Extras: certificados</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full rounded-md bg-surface p-5">
                <h3 className="font-semibold">{c.title}</h3>
                {(c.issuer || c.detail) && (
                  <p className="mt-1 text-sm text-muted">{[c.issuer, c.detail].filter(Boolean).join(" · ")}</p>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
