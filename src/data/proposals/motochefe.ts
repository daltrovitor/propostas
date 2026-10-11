// Hello World
import { ProposalData } from "./types";

export const motoChefeProposal: ProposalData = {
  subdomain: "motochef",
  clientBrand: {
    name: "Moto Chefe",
    logoPng: "/logos/moto-chefe.png",
    logoWidth: 478,
    logoHeight: 193,
    logoShape: "wordmark",
    tagline: "Mobilidade elétrica",
  },
  accentColor: "#c2410c", // Laranja de Engenharia / Mobilidade em movimento
  meta: {
    title: "PRX ✕ Moto Chefe Brasil | Proposta de Parceria",
    description:
      "Mobilidade, independência e experiências para a próxima geração. Três meses de conteúdo, ativações, PRX Founders e benefícios exclusivos no PRX PASS.",
    date: "Outubro de 2026",
  },
  hero: {
    badge: "PRX ✕ Moto Chefe Brasil",
    headline: "Mobilidade, independência e experiências para a próxima geração.",
    subheadline:
      "Durante três meses, vamos conectar conteúdo, experiências presenciais, empreendedorismo e benefícios exclusivos, transformando a Moto Chefe em uma das primeiras marcas parceiras do ecossistema PRX.",
    dateFormatted: "Outubro de 2026",
  },
  metrics: [
    {
      value: "3 meses",
      label: "De parceria",
      detail: "Conteúdo, eventos e PASS",
    },
    {
      value: "12 vídeos",
      label: "VLOG proprietário",
      detail: "1 vídeo por semana",
    },
    {
      value: "2/mês",
      label: "PRX Nights",
      detail: "Antonieta Gastro Bar",
    },
    {
      value: "4",
      label: "Pontos de contato",
      detail: "Conteúdo, eventos, experiências e app",
    },
  ],
  executiveSummary: {
    label: "Introdução",
    title: "A conquista da independência.",
    paragraph1:
      "A PRX nasce para conectar a Geração Z a marcas que façam sentido no momento de vida que esses jovens estão começando a construir.",
    paragraph2:
      "Por isso, minha proposta para a Moto Chefe vai além de estar presente no PRX PASS. Quero posicionar a marca em um território extremamente relevante para esse público: a conquista da independência.",
    paragraph3:
      "Durante três meses, vamos conectar conteúdo, experiências presenciais, empreendedorismo e benefícios exclusivos, transformando a Moto Chefe em uma das primeiras marcas parceiras do ecossistema PRX.",
  },
  chapters: [
    {
      number: "01",
      title: "VLOG — Histórias de independência",
      blocks: [
        {
          type: "paragraph",
          text: "Criação de um VLOG proprietário nas minhas redes sociais, conectando histórias reais de adolescentes ao conceito de independência.",
        },
        {
          type: "paragraph",
          text: "A moto entra como símbolo dessa nova fase: começar a fazer as próprias escolhas, conquistar autonomia, administrar dinheiro, assumir responsabilidades e ganhar liberdade.",
        },
        {
          type: "statement",
          text: "O conteúdo não será uma publicidade tradicional da Moto Chefe. Vamos contar histórias nas quais a marca faça parte da narrativa.",
        },
        {
          type: "facts",
          label: "Formato",
          items: [
            { value: "3 meses", label: "de contrato" },
            { value: "1 vídeo", label: "por semana" },
            { value: "12 vídeos", label: "no total" },
          ],
        },
        {
          type: "list",
          intro: "Podemos explorar histórias como:",
          items: [
            "O jovem que começou a trabalhar",
            "Quem abriu seu primeiro negócio",
            "Quem está juntando dinheiro para a primeira grande compra",
            "A relação entre pais e filhos na conquista da autonomia",
            "E, naturalmente, a experiência do primeiro veículo",
          ],
        },
        {
          type: "quote",
          label: "Conceito editorial",
          text: "Qual foi a primeira coisa que fez você se sentir independente?",
        },
        {
          type: "paragraph",
          text: "A Moto Chefe passa a ser associada não apenas à mobilidade elétrica, mas a um sentimento extremamente desejado por essa geração: liberdade.",
        },
      ],
    },
    {
      number: "02",
      title: "Ativações PRX ✕ Moto Chefe",
      blocks: [
        {
          type: "paragraph",
          text: "Durante os três meses de parceria, a Moto Chefe estará presente também nas experiências presenciais da PRX.",
        },
        {
          type: "cards",
          items: [
            {
              title: "Cocktail de lançamento — Moto Chefe ✕ PRX",
              meta: "Na loja",
              text: "Evento na própria loja para adolescentes convidados, creators, parceiros e famílias. Apresentaremos oficialmente a parceria, os modelos, as vantagens PRX PASS e a experiência da marca dentro do aplicativo.",
            },
            {
              title: "Evento PRX — Arena T-3",
              meta: "Novembro",
              text: "Encontro voltado a estudantes, com presença e exposição da Moto Chefe. A proposta é criar uma experiência de Test Ride Moto Chefe, com percurso previamente definido no entorno da quadra do Goiânia Shopping e acompanhamento de profissional da marca, observadas todas as exigências de segurança, idade, habilitação e circulação aplicáveis a cada modelo.",
            },
            {
              title: "PRX Nights — Antonieta Gastro Bar",
              meta: "2 eventos por mês",
              text: "Ativação integrada ao próprio aplicativo. Na compra do ingresso, cada participante recebe uma chave digital Moto Chefe. Durante a festa, promoters utilizam o PRX para revelar quais chaves foram premiadas com benefícios do evento, como bebidas e combos para participantes legalmente aptos ao consumo, além de outros prêmios e experiências que podemos definir.",
            },
          ],
        },
        {
          type: "statement",
          text: "Assim, a Moto Chefe deixa de ser apenas uma logomarca no evento e passa a fazer parte da diversão.",
        },
      ],
    },
    {
      number: "03",
      title: "Moto Chefe apresenta: PRX Founders ✕ Link",
      blocks: [
        {
          type: "paragraph",
          text: "Quero que a Moto Chefe esteja associada também a outro tipo de independência: a de quem começa a construir o próprio futuro.",
        },
        {
          type: "paragraph",
          text: "A proposta é realizarmos o primeiro PRX FOUNDERS com a participação do Álvaro, da Link, criando uma competição entre projetos desenvolvidos por estudantes.",
        },
        {
          type: "paragraph",
          text: "Os jovens apresentam suas ideias, recebem provocações e feedbacks e o Álvaro participa da avaliação.",
        },
        {
          type: "paragraph",
          text: "A intenção é construirmos com a Link uma premiação em que o projeto selecionado tenha acesso a uma oportunidade acadêmica na instituição, conforme formato, critérios de admissão e condições previamente aprovados pela própria Link.",
        },
        {
          type: "feature",
          label: "Moto Chefe apresenta",
          title: "PRX FOUNDERS ✕ LINK",
          description: "Ideias que colocam uma geração em movimento.",
          caption: "A Moto Chefe entra como marca apresentadora da primeira edição.",
        },
        {
          type: "paragraph",
          text: "É uma associação direta da marca com empreendedorismo, educação, inovação e futuro.",
        },
      ],
    },
    {
      number: "04",
      title: "Moto Chefe no PRX PASS",
      blocks: [
        {
          type: "paragraph",
          text: "A Moto Chefe entra oficialmente no clube de benefícios da PRX com uma oferta criada exclusivamente para os nossos usuários.",
        },
        {
          type: "formula",
          intro: "Minha proposta é trabalharmos três camadas simultaneamente:",
          items: [
            {
              title: "Desconto",
              text: "Cria percepção imediata de economia.",
            },
            {
              title: "Condição exclusiva",
              text: "Cria diferenciação — podendo envolver financiamento, entrada, parcelamento, upgrade, acessórios ou outra vantagem definida pela Moto Chefe.",
            },
            {
              title: "Brinde",
              text: "Transforma a compra em experiência: capacete, acessório, personalização, primeira revisão ou um PRX Rider Kit, por exemplo.",
            },
          ],
        },
        {
          type: "quote",
          label: "A comunicação dentro do aplicativo precisa deixar uma mensagem muito clara:",
          text: "Ser PRX faz sua primeira Moto Chefe começar diferente.",
        },
      ],
    },
  ],
  pillarsSection: {
    label: "Uma parceria",
    title: "Uma parceria. Quatro pontos de contato.",
    description:
      "Em três meses, a Moto Chefe estará presente no conteúdo que o adolescente assiste, nos eventos que frequenta, nas experiências que deseja e no aplicativo que utiliza para acessar benefícios.",
    statement: {
      lead: [
        "Não quero construir uma campanha em que a PRX simplesmente anuncie motos.",
        "Quero construir uma associação.",
      ],
      emphasis: "Moto Chefe = independência.",
      trail: [
        "A PRX apresenta uma nova geração à Moto Chefe.",
        "A Moto Chefe ajuda essa geração a começar a se mover sozinha.",
      ],
    },
  },
  pillars: [
    {
      number: "01",
      title: "O conteúdo que assiste",
      description: "VLOG Histórias de Independência: 12 vídeos em 3 meses, um por semana.",
      tag: "Conteúdo",
    },
    {
      number: "02",
      title: "Os eventos que frequenta",
      description: "Cocktail de lançamento, Arena T-3 com Test Ride e duas PRX Nights por mês.",
      tag: "Eventos",
    },
    {
      number: "03",
      title: "As experiências que deseja",
      description: "Moto Chefe apresenta a primeira edição do PRX Founders ✕ Link.",
      tag: "Experiências",
    },
    {
      number: "04",
      title: "O app que utiliza",
      description: "Desconto + condição exclusiva + brinde para usuários PRX PASS.",
      tag: "Aplicativo",
    },
  ],
  closing: {
    headline: "A independência começa em movimento.",
    brandLine: "PRX ✕ Moto Chefe Brasil",
    signature: "PRX — the next pays.",
  },
  whatsapp: {
    phone: "5562984638578",
    defaultMessage: "Olá! Gostaria de avançar na proposta de parceria PRX ✕ Moto Chefe Brasil.",
  },
};
