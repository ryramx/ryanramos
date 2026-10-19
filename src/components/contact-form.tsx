"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { contact } from "@/content/site";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

const field =
  "w-full rounded-md border border-white/10 bg-surface px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none";

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("assunto");
  const initialSubject = preset && contact.subjects.includes(preset) ? preset : contact.subjects[0];
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Não consegui enviar agora.");
      form.reset();
      setState({ kind: "sent" });
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "Não consegui enviar agora." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-md bg-surface-2/60 p-5 sm:p-6">
      <div>
        <label htmlFor="nome" className="mb-1 block text-sm text-muted">Nome</label>
        <input id="nome" name="nome" required maxLength={120} autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="retorno" className="mb-1 block text-sm text-muted">E-mail ou WhatsApp</label>
        <input id="retorno" name="retorno" required maxLength={160} autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="assunto" className="mb-1 block text-sm text-muted">Assunto</label>
        <select id="assunto" name="assunto" defaultValue={initialSubject} className={field}>
          {contact.subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mensagem" className="mb-1 block text-sm text-muted">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          maxLength={4000}
          placeholder={contact.messagePlaceholder}
          className={field}
        />
      </div>
      {/* Campo isca contra robôs: pessoas não veem nem preenchem. */}
      <input type="text" name="site" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <button
        type="submit"
        disabled={state.kind === "sending"}
        className="w-full rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
      >
        {state.kind === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>

      <AnimatePresence mode="wait">
        {(state.kind === "sent" || state.kind === "error") && (
          <motion.p
            key={state.kind}
            role="status"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={state.kind === "sent" ? "text-sm text-emerald-400" : "text-sm text-accent"}
          >
            {state.kind === "sent" ? contact.success : state.message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
