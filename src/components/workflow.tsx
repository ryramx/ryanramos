import { workflow } from "@/content/site";
import { Reveal } from "./reveal";

export function Workflow() {
  return (
    <section className="px-4 py-10 sm:px-10" aria-labelledby="como-funciona">
      <h2 id="como-funciona" className="text-xl font-semibold tracking-tight sm:text-2xl">
        Como funciona
      </h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-3">
        {workflow.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 0.1} className="h-full rounded-md bg-surface p-5">
              <span className="text-4xl font-bold text-accent/80">{i + 1}</span>
              <h3 className="mt-2 font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-foreground/75">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
