import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { certificates, seasons } from "@/content/site";

export const metadata: Metadata = {
  title: "Trajetória",
  description: "Da formação ao primeiro sistema de verdade, e os próximos passos.",
};

export default function TrajetoriaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-28 sm:px-10">
      <Reveal>
        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">Minha trajetória</h1>
        <p className="mt-3 text-lg text-muted">Da gestão ao código, um passo de cada vez.</p>
      </Reveal>

      <ol className="relative mt-12 max-w-3xl space-y-10 border-l-2 border-line pl-8">
        {seasons.map((s, i) => (
          <li key={s.code} className="relative">
            <span className={`absolute -left-[42px] top-1 h-4 w-4 rounded-full border-[3px] border-accent ${s.current ? "bg-accent" : "bg-background"}`} />
            <Reveal delay={i * 0.05}>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {[s.label, s.place].filter(Boolean).join(" · ")}
              </p>
              <h2 className="mt-1 font-display text-2xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-lg leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <section aria-labelledby="extras" className="mt-16">
        <h2 id="extras" className="font-display text-2xl font-semibold">Certificados</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full rounded-xl border border-line bg-surface p-5">
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
