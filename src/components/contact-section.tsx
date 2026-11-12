import { Suspense } from "react";
import { contact } from "@/content/site";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

/** Fechamento com atalhos de contato e formulário curto. */
export function ContactSection({ asPage = false }: { asPage?: boolean }) {
  const Heading = asPage ? "h1" : "h2";
  return (
    <section id="contato" className="scroll-mt-20 border-t border-line px-4 py-16 sm:px-10" aria-labelledby="contato-titulo">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
        <Reveal>
          <Heading id="contato-titulo" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.title}
          </Heading>
          <p className="mt-4 max-w-md text-lg text-muted">{contact.body}</p>
          <ul className="mt-8 space-y-3">
            {contact.links.map((link) => (
              <li key={link.kind}>
                <a
                  href={link.href}
                  target={link.kind === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-line bg-surface px-4 py-3 transition hover:border-foreground/25"
                >
                  <span className="text-sm text-muted">{link.label}</span>
                  <span className="font-medium group-hover:text-accent">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <Suspense fallback={<div className="h-[460px] rounded-md bg-surface" />}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
