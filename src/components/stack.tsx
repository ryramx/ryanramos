import { stack } from "@/content/site";
import { Reveal } from "./reveal";

/** "Bastidores": ferramentas agrupadas com uma legenda simples. */
export function Stack() {
  return (
    <section className="px-4 py-10 sm:px-10" aria-labelledby="bastidores">
      <h2 id="bastidores" className="text-xl font-semibold tracking-tight sm:text-2xl">
        Bastidores
      </h2>
      <p className="mt-1 text-sm text-muted">As ferramentas que uso para construir.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-md border border-white/5 bg-surface p-5">
              <h3 className="text-sm font-semibold text-foreground/90">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
