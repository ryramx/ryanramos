import { stack } from "@/content/site";

/** As ferramentas, agrupadas numa lista compacta. */
export function Stack() {
  return (
    <section className="border-t border-line px-4 py-16 sm:px-10" aria-labelledby="ferramentas">
      <div className="mx-auto max-w-5xl">
        <h2 id="ferramentas" className="font-display text-2xl font-semibold sm:text-3xl">
          Ferramentas
        </h2>
        <p className="mt-2 text-muted">O que eu uso para construir.</p>
        <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {stack.map((group) => (
            <div key={group.title} className="border-b border-line pb-4">
              <dt className="text-sm font-semibold">{group.title}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-surface px-2.5 py-0.5 text-xs text-muted ring-1 ring-line">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
