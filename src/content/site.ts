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
const compozeImg = (file: string) => `/projetos/compoze/${file}`;
const sendImg = (file: string) => `/projetos/send/${file}`;

/** APK mais recente do Compoze, publicado pelo CI nos Releases do GitHub. */
const compozeApk = "https://github.com/ryramx/Compoze_app/releases/latest/download/Compoze.apk";

export const profile = {
  name: "Ryan Ramos",
  role: "Desenvolvedor Full Stack",
  location: "São Lourenço da Mata, PE",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Portfólio de Ryan Ramos, desenvolvedor full stack em Pernambuco. Sistemas web sob medida, do primeiro bate-papo até a publicação.",
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
    slug: "compoze",
    title: "Compoze, o caderno de quem compõe",
    shortTitle: "Compoze",
    status: "em-desenvolvimento",
    badge: "Em desenvolvimento · App Android",
    tagline:
      "Letra, cifra e coautoria no mesmo caderno. Duas pessoas escrevem a mesma canção ao mesmo tempo, até sem internet, e o app junta tudo sem perder um verso. Em volta do caderno, uma roda de quem compõe: seguir, conversar e receber avisos no celular.",
    meta: ["2026", "Web, celular e Android", "Funciona sem internet"],
    cover: compozeImg("01-mesa.jpg"),
    heroImages: [compozeImg("01-mesa.jpg"), compozeImg("02-editor.jpg"), compozeImg("05-projetos.jpg")],
    imageNote: "As telas mostram a demonstração do app, com pessoas e canções fictícias.",
    story: [
      {
        title: "A ideia",
        body: "Canção boa nasce em qualquer lugar: no ônibus, no ensaio, no estúdio sem sinal. E quase sempre a quatro mãos. O Compoze é um caderno compartilhado para isso: a letra com a cifra em cima, quem escreveu cada trecho, a divisão da coautoria e o caminho da ideia até a gravação.",
      },
      {
        title: "O desafio técnico",
        body: "Duas pessoas editando o mesmo verso, uma delas offline, sem nenhuma perder texto. Resolvi com um documento colaborativo (CRDT) por canção, que guarda tudo no aparelho e sincroniza quando a rede volta, e uma fila de envio para o resto dos dados. O app instala no celular e abre sem internet.",
      },
      {
        title: "A roda",
        body: "Parceria se acha conversando. Por isso o Compoze ganhou uma camada social: buscar qualquer pessoa pelo @, seguir e seguir de volta, um mural para mostrar no que você está trabalhando e conversas a dois que chegam na hora. Com o app fechado, a mensagem, o convite ou o seguidor novo viram notificação no celular.",
      },
    ],
    outcomes: [
      { title: "Escrita a quatro mãos, ao vivo.", body: "Cada pessoa vê onde a outra está escrevendo, e o app marca quem escreveu cada verso." },
      { title: "Funciona sem internet.", body: "Criar e editar canções offline; tudo sobe sozinho quando a rede volta." },
      { title: "Coautoria combinada.", body: "A divisão dos direitos fica na própria canção e precisa fechar em 100% antes do registro." },
      { title: "Registro com prova.", body: "Cada versão registrada ganha uma impressão digital (SHA-256) encadeada à anterior." },
      { title: "Convites como numa rede social.", body: "Busque a pessoa pelo @ e ela aceita ou recusa. Quem não tem conta recebe um link." },
      { title: "Instala no celular.", body: "App para Android e instalável pelo navegador no Android e no iPhone." },
      { title: "Gente que compõe.", body: "Seguidores e quem você segue numa lista, com Mensagem e Seguir de volta. Conversas a dois chegam na hora." },
      { title: "Avisos no celular.", body: "Mensagem, convite e seguidor novo viram notificação, no Android e no navegador. O app pede a permissão ao abrir." },
      { title: "Memo de voz e apoio por PIX.", body: "A melodia gravada dentro da canção e projetos com meta de financiamento, pagos direto na chave PIX da artista." },
    ],
    episodes: [
      { title: "A mesa", line: "Onde você parou, a esteira das canções e o que a roda está fazendo.", image: compozeImg("01-mesa.jpg"), featured: true },
      { title: "O caderno", line: "Letra com a cifra em cima, estágio, tom e a divisão da coautoria.", image: compozeImg("02-editor.jpg"), featured: true },
      { title: "No bolso", line: "O mesmo caderno no celular, inclusive sem sinal.", image: compozeImg("03-celular.jpg"), featured: true },
      { title: "De madrugada", line: "Tema escuro para quem compõe tarde.", image: compozeImg("04-editor-escuro.jpg"), featured: true },
      { title: "O mural", line: "O que está saindo do caderno de quem você acompanha, com a canção citada.", image: compozeImg("07-mural.jpg") },
      { title: "Conversas", line: "Mensagens a dois, ao vivo, em todos os aparelhos.", image: compozeImg("08-conversas.jpg") },
      { title: "Seguidores", line: "Quem segue você e quem você segue, com Mensagem e Seguir de volta.", image: compozeImg("09-seguidores.jpg") },
      { title: "Projetos", line: "Singles, EPs e álbuns com as faixas em ordem e o andamento.", image: compozeImg("05-projetos.jpg") },
      { title: "A entrada", line: "Dá para experimentar tudo no modo demonstração, sem criar conta.", image: compozeImg("06-entrada.jpg") },
    ],
    techDetails:
      "Monorepo com front-end em React 19, TypeScript, Vite e Tailwind CSS (design system próprio) e API em Node.js 24 com Fastify, Zod e Drizzle sobre PostgreSQL 18. Edição colaborativa em tempo real com Yjs (CRDT) e Hocuspocus, cópia local no IndexedDB e fila de escritas offline com chaves de idempotência. PWA com service worker e app Android com Capacitor, assinado e publicado pelo GitHub Actions. Mensagens ao vivo por Server-Sent Events e notificações por Web Push (VAPID) e Firebase Cloud Messaging. Áudio e imagens guardados no próprio PostgreSQL e apoio a projetos por PIX (BR Code). Autenticação própria com JWT e refresh rotativo, testes com Vitest e PostgreSQL real em container, decisões registradas em ADRs. Staging no Render com banco no Neon.",
    nextChapters: ["Publicar nas lojas Google Play e App Store", "Carimbo de tempo de terceiros no registro das obras", "Planos de assinatura"],
    links: [
      { label: "Código no GitHub", href: "https://github.com/ryramx/Compoze_app" },
      { label: "Baixar para Android", href: compozeApk },
      // No navegador, o Compoze também instala como app no Android e no iPhone.
      { label: "Abrir no navegador", href: "https://compoze-web-staging.onrender.com" },
    ],
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
    slug: "send",
    title: "Sistema de Gestão de uma empresa de software",
    shortTitle: "Gestão de software house",
    status: "em-desenvolvimento",
    badge: "Em desenvolvimento · Projeto real",
    tagline:
      "Uma empresa que cria sistemas sob medida e cobra o suporte por mensalidade precisava saber, num só lugar, quem são os clientes, o que cada contrato cobre e quem está em dia. Construí esse sistema para ela.",
    meta: ["2026", "Projeto real para cliente", "Web, no computador e no celular"],
    cover: sendImg("01-capa.jpg"),
    pageCover: sendImg("02-fundo.jpg"),
    imageNote: "O código e as telas são do cliente, por isso aqui aparecem só os módulos, sem dados reais.",
    story: [
      {
        title: "O começo",
        body: "A empresa acompanha cada cliente da reunião de negócios até a implantação e o suporte, que é cobrado por mensalidade e atendido pelo WhatsApp. Contratos, cobranças e acessos aos sistemas dos clientes ficavam espalhados. Comecei pela base, com login, perfis e empresas, e fui entregando um módulo por vez.",
      },
      {
        title: "Do jeito que eu trabalhei",
        body: "Levantei as regras com o dono da empresa, escrevi um plano por etapas e fui registrando cada decisão. Usei inteligência artificial como apoio na construção, revisando cada entrega com testes automáticos antes de seguir para a próxima.",
      },
    ],
    outcomes: [
      { title: "Contratos completos.", body: "Vários contratos por cliente, renovação automática, reajuste por índice aprovado pelo gestor e o contrato em PDF." },
      { title: "Mensalidade que se calcula sozinha.", body: "Primeiro e último mês proporcionais e um lançamento por cliente somando todos os contratos." },
      { title: "Cobrança sem esquecer ninguém.", body: "Contas a receber com multa e juros, régua de lembretes por e-mail e botão para cobrar no WhatsApp." },
      { title: "Banco conferido.", body: "O extrato do banco (OFX) é importado e cada pagamento é ligado à sua fatura." },
      { title: "Os sistemas dos clientes sob controle.", body: "Licenças, domínios, certificados e servidores, com aviso quando um site sai do ar ou um certificado vai vencer." },
      { title: "Senhas guardadas com segurança.", body: "Um cofre cifrado para os acessos de cada cliente." },
      { title: "A saúde do negócio.", body: "Receita recorrente (MRR e ARR), previsão, inadimplência e uma nota de saúde para cada cliente." },
      { title: "Cada um vê só o que precisa.", body: "Perfis de Admin, Gestor, Comercial, Financeiro, Suporte e Desenvolvimento, com ferramentas de LGPD." },
    ],
    techDetails:
      "PHP 8 puro, sem framework, com MySQL/MariaDB; telas em JavaScript vanilla e Tailwind CSS compilado. Arquitetura multiempresa, com um banco de segurança e um banco por empresa. Controle de acesso por perfis, cofre de senhas cifrado com chave da aplicação, envio de e-mail por SMTP, importação de extrato OFX, monitoramento de links e rotinas agendadas (contratos, cobrança e monitoramento). Testes automáticos a cada módulo e publicação em VPS por GitHub Actions com SSH, sem Docker.",
    nextChapters: ["Publicação na VPS da empresa", "Portal do cliente", "CRM de negócios", "Projetos e desenvolvimento"],
    // Repositório privado do cliente: sem link.
    links: [],
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
export const featuredProjectSlugs = ["acpb", "compoze", "patotinha"];

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
  { title: "O que você vê na tela", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Angular"] },
  { title: "O que roda por trás", items: ["Python", "FastAPI", "Node.js", "Express", "PHP"] },
  { title: "Onde os dados moram", items: ["PostgreSQL", "MySQL / MariaDB"] },
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
