// Hello World
import { ProposalData } from "./types";
import { VIRAWEB_PACKAGE_PHONE } from "./constants";
import { FULL_CRIATIVE_LOGO } from "./logos/fullcriative";

/**
 * Landing page de portfólio do Rafael (Full Criative), proposta pela ViraWeb.
 * A prévia em /previa usa a logo vetorizada e os três criativos enviados,
 * recomprimidos para a web (720 × 1280, 92 MB → 24 MB) com loops de 6 s e pôsteres.
 */
export const fullCriativeProposal: ProposalData = {
  subdomain: "fullcriative",
  host: "viraweb",
  clientBrand: {
    name: "Full Criative",
    logoVector: FULL_CRIATIVE_LOGO,
    tagline: "Portfólio do Rafael",
  },
  intro: {
    eyebrow: "Proposta Digital · Portfólio",
    title: "ViraWeb ✕ Full Criative",
    tagline: "Rafael · Landing page de portfólio",
    quote: "Seus criativos já prendem a atenção. Agora eles ganham uma vitrine à altura.",
  },
  accentColor: "#6231f7", // Violeta do meio do degradê da logo (contraste 6,4:1 com branco)
  meta: {
    title: "ViraWeb ✕ Full Criative | Proposta do Portfólio do Rafael",
    description:
      "Proposta da landing page de portfólio do Rafael, da Full Criative: prévia com os criativos em vídeo, escopo, etapas e investimento de R$ 997,90 no Pix ou no cartão.",
    date: "Outubro de 2026",
  },
  hero: {
    badge: "Proposta · Landing page de portfólio",
    headline: "Seus criativos já vendem. Agora eles precisam de uma vitrine.",
    subheadline:
      "Uma landing page de portfólio para o Rafael, com a identidade da Full Criative: os vídeos tocando direto na página, rápida no celular e com o WhatsApp a um toque. Abaixo estão a prévia já no ar, o que entra no projeto e a condição desta proposta.",
    dateFormatted: "Outubro de 2026",
    primaryCta: "Aprovar Proposta",
    secondaryCta: "Ver a Prévia",
    panelLabel: "Proposta",
    panelStatus: "Prévia no ar",
  },
  metrics: [
    { value: "3", label: "Criativos na prévia", detail: "Tocando direto na página" },
    { value: "9:16", label: "Vitrine vertical", detail: "No formato em que foram editados" },
    { value: "1 toque", label: "Até o seu WhatsApp", detail: "Com a mensagem pronta" },
    { value: "44%", label: "De desconto", detail: "De R$ 1.797,70 por R$ 997,90" },
  ],
  executiveSummary: {
    label: "Resumo da proposta",
    title: "Quem contrata edição quer ver o vídeo rodando — não uma lista de serviços.",
    paragraph1:
      "Um criativo se prova nos primeiros segundos. A landing page reúne os trabalhos do Rafael em um só endereço, com a logo e o degradê da Full Criative, pronta para mandar no direct, no WhatsApp ou colocar na bio.",
    paragraph2:
      "Para você ver antes de decidir, montamos uma prévia com três criativos seus — Leitura de Tarot, Focus Kids e Reviva PIC. Os vídeos foram recomprimidos para a web: os três passaram de 92 MB para 24 MB e cada um só carrega quando a pessoa dá o play, então a página abre rápido mesmo no 4G.",
    paragraph3:
      "A seguir: a prévia, o que entra na página, como vamos trabalhar e a condição desta proposta — de R$ 1.797,70 por R$ 997,90, no Pix ou no cartão.",
  },
  chapters: [
    {
      number: "01",
      title: "A prévia",
      kicker: "fullcriative.viraweb.dev.br/previa",
      blocks: [
        {
          type: "paragraph",
          text: "A prévia já está no ar, com a logo da Full Criative e os seus três criativos. Abra no celular, dê o play e veja o seu trabalho do jeito que um cliente vai ver.",
        },
        {
          type: "showcase",
          caption: "Prévia com textos de exemplo. Na versão final, os textos, os trabalhos e os contatos são definidos com você.",
        },
      ],
    },
    {
      number: "02",
      title: "O que entra na página",
      kicker: "Escopo da landing page",
      blocks: [
        {
          type: "list",
          intro: "Uma página única, feita para mostrar vídeo:",
          items: [
            "Design exclusivo com a logo e o degradê azul → roxo da Full Criative",
            "Galeria de criativos verticais com play na própria página",
            "Vídeos comprimidos para a web, carregados só no play",
            "Seções de apresentação, trabalhos, serviços, como funciona e contato",
            "Botão de WhatsApp com mensagem pronta",
            "Layout responsivo, conferido no celular e no computador",
            "Título, descrição e prévia do link ao compartilhar",
            "Publicação no ar, com o link pronto para divulgar",
          ],
        },
        {
          type: "facts",
          items: [
            { value: "−74%", label: "no peso dos vídeos da prévia" },
            { value: "100%", label: "código e acessos seus" },
            { value: "1 link", label: "para bio, direct e WhatsApp" },
          ],
        },
      ],
    },
    {
      number: "03",
      title: "Como vamos trabalhar",
      kicker: "Do sim à página no ar",
      blocks: [
        {
          type: "steps",
          items: [
            {
              title: "Aprovação",
              text: "Você aprova a proposta pelo WhatsApp e escolhe pagar no Pix ou no cartão.",
            },
            {
              title: "Material",
              text: "Você envia os criativos que quer mostrar, os textos e os contatos. A compressão dos vídeos fica com a gente.",
            },
            {
              title: "Design e desenvolvimento",
              text: "Partimos da prévia, ajustamos com você e construímos a página em Next.js, a mesma tecnologia do viraweb.dev.br.",
            },
            {
              title: "Publicação",
              text: "Página no ar, conferida no celular, com o link pronto para divulgar.",
            },
          ],
        },
      ],
    },
  ],
  pillarsSection: {
    label: "Por que uma landing page",
    title: "Mostrar, convencer e converter — em uma página só.",
    description: "Três funções que a página cumpre por você, todos os dias.",
    statement: {
      lead: ["Tudo isso por um valor único:"],
      emphasis: "De R$ 1.797,70 por R$ 997,90.",
      trail: ["No Pix ou no cartão."],
    },
  },
  pillars: [
    {
      number: "01",
      title: "Mostrar",
      tag: "Vitrine de vídeo",
      description:
        "Os criativos tocam na página, no formato vertical em que foram editados. Quem chega vê o trabalho antes de ler qualquer coisa.",
    },
    {
      number: "02",
      title: "Convencer",
      tag: "Serviços e processo",
      description:
        "Serviços, nichos já atendidos e o seu jeito de trabalhar, organizados para o cliente entender o que está contratando.",
    },
    {
      number: "03",
      title: "Converter",
      tag: "WhatsApp",
      description: "Botão de WhatsApp com mensagem pronta: do vídeo à conversa em um toque.",
    },
  ],
  offer: {
    label: "Investimento",
    title: "Landing page de portfólio",
    description: "Valor único para criar e publicar a página do Rafael com a identidade da Full Criative.",
    name: "Landing Page Portfólio · Full Criative",
    priceFrom: 1797.7,
    price: 997.9,
    payment: ["Pix", "Cartão de crédito"],
    includes: [
      "Design exclusivo a partir da prévia",
      "Galeria de vídeos otimizados para a web",
      "Botão de WhatsApp com mensagem pronta",
      "Celular, tablet e computador",
      "Prévia do link ao compartilhar",
      "Publicação no ar",
    ],
    footnote: "Proposta válida por 30 dias.",
  },
  portfolio: {
    path: "/previa",
    icon: "/logos/full-criative-icon.svg",
    owner: "Rafael",
    role: "Criativos em vídeo para anúncios",
    title: "Rafael · Full Criative | Criativos em vídeo para anúncios",
    description:
      "Portfólio do Rafael, da Full Criative: criativos em vídeo para anúncios, com gancho forte, legenda dinâmica e chamada para ação.",
    headline: "Criativos em vídeo que param o scroll.",
    headlineHighlight: "param o scroll",
    subheadline:
      "Sou o Rafael, da Full Criative. Edito anúncios verticais — UGC, depoimentos e cortes de podcast — com gancho forte, legenda dinâmica e uma chamada clara para a ação.",
    videos: [
      {
        id: "tarot",
        title: "Leitura de Tarot",
        category: "Anúncio · Quiz de leitura",
        description:
          "Gancho em primeira pessoa, uma cena para cada tema — amor, dinheiro, trabalho — e a chamada para responder às perguntas e começar a leitura.",
        src: "/portfolio/fullcriative/tarot.mp4",
        loop: "/portfolio/fullcriative/tarot-loop.mp4",
        poster: "/portfolio/fullcriative/tarot.webp",
        duration: "0:54",
      },
      {
        id: "focus-kids",
        title: "Focus Kids",
        category: "Anúncio UGC · Suplemento infantil",
        description:
          "Mãe e filha na câmera, a rotina real da criança e os diferenciais do produto na legenda — zero açúcares e sem glúten — e a chamada final para conhecer o produto.",
        src: "/portfolio/fullcriative/focus-kids.mp4",
        loop: "/portfolio/fullcriative/focus-kids-loop.mp4",
        poster: "/portfolio/fullcriative/focus-kids.webp",
        duration: "0:59",
      },
      {
        id: "reviva-pic",
        title: "Reviva PIC",
        category: "Anúncio · Corte de podcast",
        description:
          "Corte de podcast que intercala a história com as fotos de família, tipografia que acompanha a emoção da fala e fechamento no WhatsApp.",
        src: "/portfolio/fullcriative/reviva-pic.mp4",
        loop: "/portfolio/fullcriative/reviva-pic-loop.mp4",
        poster: "/portfolio/fullcriative/reviva-pic.webp",
        duration: "1:07",
      },
    ],
    services: [
      {
        title: "Criativos para anúncios",
        text: "Vídeos verticais para Reels, Stories e TikTok, com gancho, desenvolvimento e chamada para ação.",
      },
      {
        title: "UGC e depoimentos",
        text: "Edição de gravações de clientes e criadores, com ritmo de conversa e cortes que seguram a atenção.",
      },
      {
        title: "Legendas dinâmicas",
        text: "Palavras-chave em destaque, como nos criativos acima, para quem assiste sem som.",
      },
      {
        title: "Cortes de podcast",
        text: "Trechos de entrevista que viram anúncio, com imagens de apoio e tipografia que acompanha a fala.",
      },
    ],
    process: [
      { title: "Briefing", text: "Produto, público e oferta: o que o anúncio precisa vender." },
      { title: "Roteiro e gancho", text: "Os primeiros segundos e a ordem das cenas, definidos antes de editar." },
      { title: "Edição", text: "Cortes, legendas, trilha e cor no formato de cada plataforma." },
      { title: "Entrega", text: "Arquivos prontos para subir na plataforma de anúncios." },
    ],
    about: {
      title: "Full Criative é o estúdio do Rafael.",
      paragraphs: [
        "Criativos em vídeo para marcas que anunciam na internet — de suplementos a serviços digitais.",
        "Cada vídeo é editado para um objetivo: prender a atenção, explicar o produto e levar ao clique, no formato vertical em que vai rodar.",
      ],
    },
    contact: {
      title: "Vamos fazer o próximo criativo da sua marca?",
      text: "Me chama no WhatsApp com o produto e o objetivo da campanha.",
      cta: "Chamar no WhatsApp",
      note: "Na prévia, este botão fala com a ViraWeb. No site final, ele abre o WhatsApp do Rafael.",
      message: "Olá ViraWeb! Vi a prévia do portfólio do Rafael — Full Criative (fullcriative.viraweb.dev.br/previa).",
    },
  },
  closing: {
    headline: "Vamos colocar os seus criativos na vitrine?",
    brandLine: "ViraWeb ✕ Full Criative",
    lines: [
      { title: "A prévia já está no ar", text: "Abra no celular e veja como fica." },
      { title: "Feita para vídeo", text: "Cada criativo carrega só no play." },
      { title: "Código e acessos seus", text: "Propriedade total, sem amarras." },
      { title: "Pix ou cartão", text: "De R$ 1.797,70 por R$ 997,90." },
    ],
    description:
      "Toque abaixo para aprovar pelo WhatsApp. Respondemos com a lista do que precisamos para começar.",
    signature: "ViraWeb — Engenharia Digital",
  },
  whatsapp: {
    phone: VIRAWEB_PACKAGE_PHONE,
    defaultMessage:
      "Olá ViraWeb! Vi a proposta da landing page de portfólio do Rafael — Full Criative (fullcriative.viraweb.dev.br).",
  },
};
