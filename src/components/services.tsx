import { services, workflow } from "@/content/site";
import { Reveal } from "./reveal";

/** Para quem quer contratar: o que eu faço e como a gente trabalha. */
export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-10" aria-labelledby="servicos-titulo">
      <div className="mx-auto max-w-5xl">
        <h2 id="servicos-titulo" className="font-display text-2xl font-semibold sm:text-3xl">
          Como posso te ajudar
        </h2>
        <p className="mt-2 max-w-2xl text-muted">Para o seu negócio, a sua associação ou o sistema que você já tem.</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={(i % 2) * 0.06} className="h-full rounded-xl border border-line bg-surface p-5">
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                <p className="mt-3 text-xs font-medium text-accent">{s.audience}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {workflow.map((step, i) => (
            <li key={step.title} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-on-ink">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-0.5 text-sm text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
