# Portfólio · Ryan Ramos

Site de portfólio em estilo catálogo de streaming: destaque grande no topo, fileiras de cards que deslizam, página de detalhe de cada projeto, trajetória em "temporadas" e contato.

Feito com **Next.js 16** (App Router, TypeScript), **Tailwind CSS 4** e **Framer Motion**. O formulário de contato envia e-mail pelo **Resend**.

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha se quiser testar o formulário
npm run dev
```

Abra http://localhost:3000.

## Onde trocar os textos

Todo o conteúdo fica em [`src/content/site.ts`](src/content/site.ts): perfil, projetos, episódios (telas), temporadas, certificados, serviços, ferramentas e contatos. Os componentes só leem esse arquivo, então dá para mudar textos sem mexer no visual.

Imagens dos projetos ficam em `public/projetos/<projeto>/`.

Para adicionar um projeto, inclua um item em `projects` com um `slug` novo; a página `/projetos/<slug>` é gerada sozinha.

## Estrutura

```
src/
  app/
    page.tsx                 início (destaque + fileiras)
    projetos/[slug]/page.tsx detalhe do projeto
    trajetoria/page.tsx      temporadas e certificados
    contato/page.tsx         contato (aceita ?assunto=...)
    api/contato/route.ts     envio do formulário via Resend
  components/                hero, fileiras, cards, navbar, formulário...
  content/                   textos e tipos
```

## Formulário de contato

Variáveis de ambiente (veja `.env.example`):

| Variável | Para quê |
|---|---|
| `RESEND_API_KEY` | Chave da conta Resend |
| `CONTACT_TO_EMAIL` | E-mail que recebe as mensagens |
| `CONTACT_FROM_EMAIL` | Remetente; sem domínio próprio use `onboarding@resend.dev` (só entrega para o dono da conta Resend) |
| `NEXT_PUBLIC_SITE_URL` | Endereço público do site, usado em SEO e sitemap |

Sem a chave, o formulário responde que ainda não está ativo e indica WhatsApp e e-mail.

## Publicando na Vercel

1. Crie a conta em https://vercel.com com o GitHub.
2. **Add New → Project** e importe `ryramx/ryanramos`. A Vercel detecta Next.js sozinha.
3. Em **Environment Variables**, cadastre as variáveis acima.
4. **Deploy**. Cada push na `main` publica de novo.
