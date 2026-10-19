import { Resend } from "resend";
import { contact } from "@/content/site";

const LIMITS = { nome: 120, retorno: 160, mensagem: 4000 } as const;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function fail(error: string, status: number) {
  return Response.json({ error }, { status });
}

/**
 * Recebe o formulário de contato e envia por e-mail via Resend.
 *
 * Variáveis de ambiente:
 * - RESEND_API_KEY (obrigatória): chave da conta Resend.
 * - CONTACT_TO_EMAIL (obrigatória): para onde as mensagens vão.
 * - CONTACT_FROM_EMAIL (opcional): remetente verificado no Resend.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail("Não entendi a mensagem enviada.", 400);
  }

  // Campo isca preenchido: é robô. Responde como sucesso para não dar pista.
  if (clean(body.site, 200)) return Response.json({ ok: true });

  const nome = clean(body.nome, LIMITS.nome);
  const retorno = clean(body.retorno, LIMITS.retorno);
  const mensagem = clean(body.mensagem, LIMITS.mensagem);
  const assuntoBruto = clean(body.assunto, 80);
  const assunto = contact.subjects.includes(assuntoBruto) ? assuntoBruto : contact.subjects[0];

  if (!nome || !retorno || !mensagem) {
    return fail("Preencha nome, contato e mensagem.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[contato] RESEND_API_KEY ou CONTACT_TO_EMAIL não configurados.");
    return fail("O envio por e-mail ainda não está ativo. Use o botão \"Enviar pelo WhatsApp\".", 503);
  }

  const from = process.env.CONTACT_FROM_EMAIL || "Portfólio <onboarding@resend.dev>";
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(retorno) ? retorno : undefined;

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo,
    subject: `[Portfólio] ${assunto}: ${nome}`.replace(/[\r\n]+/g, " "),
    text: [`Nome: ${nome}`, `Contato: ${retorno}`, `Assunto: ${assunto}`, "", mensagem].join("\n"),
  });

  if (error) {
    console.error("[contato] Falha no Resend:", error);
    return fail("Não consegui enviar agora. Tenta de novo ou me chama no WhatsApp.", 502);
  }

  return Response.json({ ok: true });
}
