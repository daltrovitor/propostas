// Hello World
import { ProposalData } from "./types";

export const madrugaProposal: ProposalData = {
  subdomain: "madruga",
  clientBrand: {
    name: "Açaí do Madruga Marista",
    logoPng: "/logos/acai-do-madruga.webp",
    logoWidth: 345,
    logoHeight: 363,
    logoShape: "badge",
    tagline: "Desde 1995",
  },
  accentColor: "#9d1460", // Magenta Açaí (extraído da logo)
  meta: {
    title: "PRX PASS ✕ Açaí do Madruga Marista | Proposta de Parceria",
    description:
      "Quanto mais você curte, mais você faz parte. Desconto exclusivo PRX PASS e a campanha Meu Açaí no Cardápio na unidade Marista.",
    date: "Outubro de 2026",
  },
  hero: {
    badge: "PRX PASS ✕ Açaí do Madruga Marista",
    headline: "Quanto mais você curte, mais você faz parte.",
    subheadline:
      "Desconto exclusivo PRX PASS no Açaí do Madruga Marista e, todo mês, o maior consumidor PRX cria uma receita que entra no cardápio com o nome dele.",
    dateFormatted: "Outubro de 2026",
  },
  metrics: [
    {
      value: "PASS",
      label: "Desconto exclusivo",
      detail: "Computado no app PRX",
    },
    {
      value: "Mensal",
      label: "Campeão PRX",
      detail: "Quem mais usou o benefício",
    },
    {
      value: "1 receita",
      label: "Com o nome do campeão",
      detail: "No cardápio do mês seguinte",
    },
    {
      value: "Marista",
      label: "Unidade participante",
      detail: "Açaí do Madruga",
    },
  ],
  executiveSummary: {
    label: "Introdução",
    title: "Um benefício de alta recorrência transformado em pertencimento.",
    paragraph1:
      "A proposta da parceria entre PRX PASS e Açaí do Madruga Marista é transformar um benefício simples e de alta recorrência em uma experiência de pertencimento.",
    paragraph2:
      "Além de oferecer uma vantagem financeira exclusiva para usuários PRX, queremos usar o próprio consumo para aproximar os adolescentes da marca.",
    quote: "Não é só desconto. É desconto que pode colocar seu nome no cardápio.",
  },
  chapters: [
    {
      title: "Campanha — Meu Açaí no Cardápio",
      kicker: "O maior consumidor PRX do mês vira creator do Madruga",
      blocks: [
        {
          type: "paragraph",
          text: "Durante a parceria, usuários PRX terão um desconto exclusivo no Açaí do Madruga Marista, identificado e computado através do benefício disponível no PRX PASS.",
        },
        {
          type: "paragraph",
          text: "Ao final de cada mês, identificaremos o usuário PRX que mais utilizou o benefício na unidade Marista.",
        },
        {
          type: "statement",
          label: "E aí vem a experiência:",
          text: "O maior consumidor PRX do mês vira creator do Madruga.",
        },
        {
          type: "paragraph",
          text: "Ele será convidado para desenvolver, junto com a equipe do Açaí do Madruga, uma combinação exclusiva de açaí + acompanhamentos com seu nome e identidade.",
        },
        {
          type: "paragraph",
          text: "A criação entra oficialmente no cardápio da unidade Marista durante o mês seguinte.",
        },
        {
          type: "feature",
          label: "Exemplo",
          title: "O PEDRO",
          description: "Açaí + morango + leite Ninho + creme de avelã + paçoca.",
          caption: "Criado por Pedro, campeão PRX do mês.",
        },
        {
          type: "paragraph",
          text: "A experiência pode ainda gerar um vídeo curto para as redes da PRX e do Açaí do Madruga mostrando a criação da receita, degustação e lançamento.",
        },
        {
          type: "steps",
          title: "O ciclo de cada mês",
          items: [
            {
              title: "Usa o desconto",
              text: "Benefício exclusivo computado pelo PRX PASS na unidade Marista.",
            },
            {
              title: "Vira campeão",
              text: "O usuário PRX que mais utilizou o benefício no mês.",
            },
            {
              title: "Cria a receita",
              text: "Combinação exclusiva com seu nome e identidade, junto à equipe do Madruga.",
            },
            {
              title: "Entra no cardápio",
              text: "Oficialmente na unidade Marista durante o mês seguinte.",
            },
          ],
        },
        {
          type: "statement",
          text: "No mês seguinte, um novo campeão, uma nova receita.",
        },
        {
          type: "paragraph",
          text: "Isso cria um ciclo contínuo de consumo, competição saudável, conteúdo e novidade.",
        },
      ],
    },
  ],
  pillarsSection: {
    label: "Conclusão",
    title: "O que a parceria entrega para cada lado.",
  },
  pillars: [
    {
      number: "01",
      title: "Para o usuário",
      description: "Economia + diversão + status + pertencimento.",
      tag: "Usuário PRX",
    },
    {
      number: "02",
      title: "Para o Açaí do Madruga",
      description:
        "O desconto deixa de ser apenas redução de preço e se transforma em ferramenta de recorrência e fidelização, incentivando o jovem a escolher a unidade Marista repetidamente.",
      tag: "Recorrência",
    },
    {
      number: "03",
      title: "Para a PRX",
      description:
        "Reforça exatamente o que queremos construir no PASS: benefícios que não terminam no caixa.",
      tag: "PRX PASS",
    },
  ],
  closing: {
    headline: "Seu desconto pode virar seu sabor.",
    brandLine: "PRX PASS ✕ Açaí do Madruga Marista",
    signature: "PRX — the next pays.",
  },
  whatsapp: {
    phone: "5562984638578",
    defaultMessage:
      "Olá! Gostaria de avançar na proposta de parceria PRX PASS ✕ Açaí do Madruga Marista.",
  },
};
