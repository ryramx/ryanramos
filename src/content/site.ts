/**
 * Todo o texto do site mora aqui. Para trocar um título, um card ou um link,
 * edite este arquivo; os componentes só leem estes dados.
 *
 * Textos baseados no rascunho "Roteiro de conteúdo do portfólio" (etapa 1).
 */
import type {
  Certificate,
  ContactLink,
  Project,
  Season,
  Service,
  StackGroup,
} from "./types";

const acpbImg = (file: string) => `/projetos/acpb/${file}`;

export const profile = {
  name: "Ryan Filipe",
  role: "Desenvolvedor Full Stack",
  location: "São Lourenço da Mata, PE",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Portfólio de Ryan Filipe, desenvolvedor full stack em Pernambuco. Sistemas web sob medida, do primeiro bate-papo até a publicação.",
  about: {
    title: "Oi, eu sou o Ryan.",
    paragraphs: [
      "Sou desenvolvedor full stack em Pernambuco e estou na reta final de Análise e Desenvolvimento de Sistemas. Gosto de pegar um processo bagunçado, entender como as pessoas realmente trabalham e transformar isso num sistema simples de usar.",
      "Meu projeto mais importante até hoje está no ar e é usado de verdade: o sistema de gestão de uma associação social, que eu construí do zero, do primeiro bate-papo com a equipe até a publicação.",
      "Estou aberto a vagas e a projetos freelancer.",
    ],
    photo: { src: "/ryan/ryan-retrato.jpg", alt: "Ryan de terno cinza e gravata verde, num jardim" },
    /** Caminho do currículo em /public. Deixe vazio para esconder o botão. */
    resumeUrl: "",
  },
};

export const nav = [
  { label: "Início", href: "/" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Trajetória", href: "/trajetoria" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Contato", href: "/contato" },
];

export const projects: Project[] = [
  {
    slug: "acpb",
    title: "Sistema de Gestão da Associação Cristã Pau-Brasil",
    shortTitle: "Sistema ACPB",
    status: "no-ar",
    badge: "Em produção · Projeto real",
    tagline:
      "Uma associação que cuidava de pessoas, projetos sociais e dinheiro em cadernos, planilhas e conversas de WhatsApp. Hoje tudo isso está num só lugar, que funciona no computador e no celular.",
    meta: ["2026", "Do primeiro rascunho ao ar", "Usado todo dia pela associação"],
    cover: acpbImg("01-painel-resumo-do-dia.jpg"),
    heroImages: [
      acpbImg("01-painel-resumo-do-dia.jpg"),
      acpbImg("03-voluntarios.jpg"),
      acpbImg("07-painel-financeiro.jpg"),
      acpbImg("05-agenda-calendario.jpg"),
    ],
    imageNote:
      "As telas mostram nomes e valores fictícios, para proteger quem é atendido pela associação.",
    story: [
      {
        title: "O começo",
        body: "A ACPB atende famílias, organiza projetos sociais e eventos, e presta contas de cada real que entra. Só que essas informações viviam espalhadas, e cada pessoa da equipe tinha a sua versão. Sentei com os responsáveis, entendi como a associação funciona de verdade e desenhei um sistema que segue essa rotina, e não o contrário.",
      },
      {
        title: "Do jeito que eu trabalhei",
        body: "Fiz o projeto de ponta a ponta: conversei com a associação para entender as regras, desenhei o banco de dados, construí o sistema, testei, coloquei no ar e continuo cuidando dele. Contei com uma pessoa dedicada a testar cada entrega e usei inteligência artificial como apoio no dia a dia, sempre revisando e validando cada decisão.",
      },
    ],
    outcomes: [
      {
        title: "Cada pessoa é cadastrada uma vez só.",
        body: "Quem é membro e também voluntário não aparece duplicado, e o telefone fica certo em todo lugar.",
      },
      {
        title: "O dinheiro ficou transparente.",
        body: "Entradas, saídas, saldo em caixa e o comprovante anexado em cada lançamento, prontos para a prestação de contas.",
      },
      {
        title: "A agenda organiza as inscrições sozinha.",
        body: "O sistema não deixa passar do limite de vagas de um evento.",
      },
      {
        title: "Cada um vê só o que precisa.",
        body: "O tesoureiro vê o financeiro; a secretaria, os cadastros. Dados de quem é atendido ficam protegidos.",
      },
      {
        title: "Tudo fica registrado.",
        body: "Quem criou, alterou ou apagou cada informação, e quando.",
      },
      {
        title: "Relatórios com um clique",
        body: "Em Excel, PDF ou planilha, para fechar o mês.",
      },
    ],
    numbers: [
      { value: "15+", label: "módulos" },
      { value: "120+", label: "funções do sistema conectadas (endpoints)" },
      { value: "450+", label: "testes automáticos a cada mudança" },
      { value: "Diário", label: "backup criptografado dos dados" },
    ],
    techDetails:
      "API REST em Python com FastAPI e SQLAlchemy; front-end em React 19, TypeScript, Vite e Tailwind CSS; banco PostgreSQL com cerca de 25 entidades e migrations Alembic. Autenticação JWT, senhas com Argon2, limite de tentativas de login, recuperação de senha por e-mail e controle de acesso por perfis (RBAC). CI no GitHub Actions com 210+ testes Pytest (PostgreSQL em container) e 240+ testes Vitest, checagem de tipos e build a cada push. Deploy no Render, banco no Neon, arquivos em S3 (Supabase), monitoramento com Sentry e health check.",
    nextChapters: [
      "Controle de estoque de alimentos e materiais",
      "Área própria para doações",
      "Cadastro de novos cargos pela própria associação",
    ],
    episodes: [
      { title: "O resumo do dia", line: "Membros, eventos da semana e saldo em caixa logo na primeira tela.", image: acpbImg("01-painel-resumo-do-dia.jpg"), featured: true },
      { title: "No bolso", line: "O mesmo sistema no celular, sem instalar nada.", image: acpbImg("02-celular.jpg"), featured: true },
      { title: "Voluntários", line: "Encontre quem sabe fazer o quê e chame no WhatsApp com um toque.", image: acpbImg("03-voluntarios.jpg"), featured: true },
      { title: "Projetos sociais", line: "Cada ação com sua equipe, seus eventos e quanto já custou.", image: acpbImg("04-projetos-sociais.jpg"), featured: true },
      { title: "A agenda", line: "Mês, semana ou dia, com os eventos da associação.", image: acpbImg("05-agenda-calendario.jpg"), featured: true },
      { title: "Inscrições", line: "Vagas, inscritos e quem ainda falta confirmar.", image: acpbImg("06-inscricoes-evento.jpg") },
      { title: "O dinheiro, às claras", line: "Entradas, saídas e o saldo de cada mês num só gráfico.", image: acpbImg("07-painel-financeiro.jpg"), featured: true },
      { title: "De onde vem, para onde vai", line: "Receitas e despesas por categoria, com os últimos lançamentos.", image: acpbImg("08-receitas-despesas-categoria.jpg") },
      { title: "Patrimônio", line: "Cada bem com código, local e responsável.", image: acpbImg("09-patrimonio.jpg") },
      { title: "Relatórios", line: "Excel, PDF ou planilha para a prestação de contas.", image: acpbImg("10-relatorios.jpg"), featured: true },
      { title: "Quem pode o quê", line: "Seis perfis de acesso, cada um com o que precisa.", image: acpbImg("11-perfis-de-acesso.jpg"), featured: true },
      { title: "Histórico de tudo", line: "Quem mudou o quê, quando, e como estava antes.", image: acpbImg("12-auditoria.jpg") },
      { title: "A ficha da pessoa", line: "Todos os dados de um membro numa tela só.", image: acpbImg("13-ficha-membro.jpg") },
    ],
    // Links ainda aguardam confirmação do Ryan antes de aparecer no site.
    links: [],
  },
  {
    slug: "patotinha",
    title: "Sistema de Pedidos da Patotinha da Vovó",
    shortTitle: "Patotinha da Vovó",
    status: "em-desenvolvimento",
    badge: "Em desenvolvimento",
    tagline:
      "Um sistema de balcão para a lanchonete: registra cada pedido, calcula o total sozinho, guarda a forma de pagamento e mostra o histórico e o resumo das vendas.",
    meta: ["2026", "Em desenvolvimento", "Web"],
    cover: "/projetos/patotinha/01-fila-de-preparo.jpg",
    imageNote: "As telas usam nomes e pedidos fictícios.",
    episodes: [
      { title: "A fila da cozinha", line: "O chef vê cada comanda chegar e avança do aguardando ao pronto.", image: "/projetos/patotinha/01-fila-de-preparo.jpg" },
      { title: "Pedido no celular", line: "No balcão, quem atende monta o pedido e o total aparece na hora.", image: "/projetos/patotinha/02-novo-pedido-celular.jpg" },
      { title: "Quem pode o quê", line: "Administrador, gerente, chef e funcionário, cada um com o que precisa.", image: "/projetos/patotinha/03-perfis-e-permissoes.jpg" },
      { title: "Equipe cadastrada", line: "Novo usuário em segundos, já com o perfil certo.", image: "/projetos/patotinha/04-novo-usuario.jpg" },
    ],
    techDetails:
      "API REST em Node.js com Fastify e Prisma; telas em React, Vite, Tailwind CSS e TanStack Query; esquemas Zod compartilhados entre tela e API. Banco PostgreSQL 16 com CHECKs e gatilhos, total do pedido calculado no servidor e login com JWT. Testes unitários e de integração contra PostgreSQL real, ponta a ponta com Playwright e CI no GitHub Actions com lint, checagem de tipos e npm audit. Roda com Docker Compose.",
  },
  {
    slug: "portfolio",
    title: "Este portfólio",
    shortTitle: "Este portfólio",
    status: "em-desenvolvimento",
    badge: "Em desenvolvimento",
    tagline: "Construído do zero, aberto no GitHub. Você está assistindo agora.",
    meta: ["2026", "Next.js", "Framer Motion"],
    cover: acpbImg("02-celular.jpg"),
    links: [{ label: "Código no GitHub", href: "https://github.com/ryramx/ryanramos" }],
  },
  {
    slug: "acpb-proximos-capitulos",
    title: "ACPB: próximos capítulos",
    shortTitle: "ACPB: próximos capítulos",
    status: "planejado",
    badge: "Em breve",
    tagline: "Estoque, doações e cargos: o que estou construindo a seguir.",
    meta: ["2026", "Continuação do Sistema ACPB"],
    cover: acpbImg("09-patrimonio.jpg"),
    nextChapters: [
      "Controle de estoque de alimentos e materiais",
      "Área própria para doações",
      "Cadastro de novos cargos pela própria associação",
    ],
  },
];

/** Projetos que se revezam no carrossel do topo, na ordem em que aparecem. */
export const featuredProjectSlugs = ["acpb", "patotinha"];

export const seasons: Season[] = [
  {
    code: "T1",
    title: "O começo pela gestão",
    body: "Fiz o técnico em Administração no Grau Técnico. Foi ali que aprendi como uma organização funciona por dentro, e isso me ajuda até hoje a conversar com quem vai usar o sistema.",
  },
  {
    code: "T2",
    title: "Virando desenvolvedor",
    body: "Entrei em Análise e Desenvolvimento de Sistemas na Estácio, hoje na reta final. Comecei pelo básico e fui montando a base de front-end, back-end e banco de dados.",
  },
  {
    code: "T3",
    title: "O primeiro sistema de verdade",
    period: "2026 – hoje",
    body: "Assumi o sistema da Associação Cristã Pau-Brasil de ponta a ponta. Foi a temporada em que mais aprendi: ouvir o cliente, decidir, testar e manter algo que as pessoas usam todo dia.",
  },
  {
    code: "T4",
    title: "Próximo destino: nuvem e IA",
    body: "Estou fazendo a Formação AWS Cloud Foundations e o Java AI Copilot (DIO + CI&T), e estudei fundamentos de IA moderna e engenharia de prompts.",
  },
];

export const certificates: Certificate[] = [
  { title: "Formação AWS Cloud Foundations", issuer: "DIO", detail: "48h · em andamento" },
  { title: "Java AI Copilot", issuer: "DIO + CI&T", detail: "em andamento" },
  { title: "Fundamentos da IA Moderna: Machine Learning, LLMs, IA Generativa e Agentes" },
  { title: "Introdução à Engenharia de Prompts" },
  { title: "Estruturas de Controle em Java" },
];

export const services: Service[] = [
  {
    title: "Sistema de gestão sob medida",
    audience: "Associações, ONGs, igrejas, pequenas empresas",
    body: "Cadastros, agenda, financeiro e relatórios num só lugar, do jeito que sua equipe já trabalha.",
  },
  {
    title: "Site ou página para o seu negócio",
    audience: "Quem precisa aparecer na internet",
    body: "Uma página rápida, bonita no celular e com um botão claro para o cliente falar com você.",
  },
  {
    title: "Organizar planilhas que viraram bagunça",
    audience: "Quem controla tudo no Excel",
    body: "Transformo suas planilhas num sistema simples, com acesso por perfil e histórico de alterações.",
  },
  {
    title: "Melhorias e manutenção",
    audience: "Quem já tem um sistema",
    body: "Correções, novas telas, relatórios e integrações em sistemas web existentes.",
  },
];

export const workflow = [
  { title: "A gente conversa.", body: "Você me conta o problema, sem precisar saber nada de tecnologia." },
  { title: "Eu te mostro um caminho.", body: "Uma proposta com o que vai ser feito, prazo e valor." },
  { title: "Construo junto com você.", body: "Entregas por partes, para você ir testando e opinando." },
];

export const stack: StackGroup[] = [
  { title: "O que você vê na tela", items: ["React", "TypeScript", "Tailwind CSS", "Angular"] },
  { title: "O que roda por trás", items: ["Python", "FastAPI", "Node.js", "Express"] },
  { title: "Onde os dados moram", items: ["PostgreSQL"] },
  { title: "Como eu garanto que funciona", items: ["Pytest", "Vitest", "Testing Library", "GitHub Actions"] },
  { title: "Onde o sistema vive", items: ["Docker", "Render", "Neon", "Supabase", "Sentry"] },
  { title: "Como protejo os dados", items: ["Login seguro (JWT)", "Senhas criptografadas (Argon2)", "Acesso por perfil", "Histórico de alterações"] },
];

/** Número no formato internacional, só dígitos, usado nos links do WhatsApp. */
export const whatsappNumber = "5581998164466";

/** Link que abre a conversa no WhatsApp já com a mensagem escrita. */
export function whatsappLink(text: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const contact = {
  title: "Bora conversar?",
  body: "Seja uma vaga, um projeto ou só uma troca de ideias, me chama. Respondo por aqui mesmo.",
  links: [
    { kind: "whatsapp", label: "WhatsApp", value: "(81) 99816-4466", href: whatsappLink("Oi, Ryan! Vi seu portfólio e quero conversar.") },
    { kind: "email", label: "E-mail", value: "ramos04K@proton.me", href: "mailto:ramos04K@proton.me" },
    { kind: "linkedin", label: "LinkedIn", value: "linkedin.com/in/ryramx", href: "https://www.linkedin.com/in/ryramx" },
    { kind: "github", label: "GitHub", value: "github.com/ryramx", href: "https://github.com/ryramx" },
  ] satisfies ContactLink[],
  subjects: [
    "Vaga de emprego",
    "Orçamento de projeto",
    "Contratar um serviço",
    "Só quero trocar uma ideia",
  ],
  messagePlaceholder: "Me conta um pouco do que você precisa",
  success: "Recebi! Te respondo em breve.",
};

export const footer = {
  line: `${profile.name} · ${profile.location} · Feito do zero por mim.`,
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const statusLabel: Record<Project["status"], string> = {
  "no-ar": "No ar",
  "em-desenvolvimento": "Em desenvolvimento",
  planejado: "Em breve",
};
