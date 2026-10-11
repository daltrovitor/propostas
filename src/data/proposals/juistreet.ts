// Hello World
import { ProposalData } from "./types";

export const juistreetProposal: ProposalData = {
  subdomain: "juistreet",
  clientBrand: {
    name: "Juistreet",
    logoPng: "/logos/juistreet.png",
    logoWidth: 592,
    logoHeight: 109,
    logoShape: "wordmark",
    tagline: "Juice bar & wellness",
  },
  accentColor: "#15803d", // Verde Floresta / Wellness e alimentação saudável
  meta: {
    title: "PRX ✕ Juistreet Goiânia | Proposta de Parceria",
    description:
      "Wellness que sai do discurso e entra na rotina. Conteúdo, experiências e recorrência através do PRX PASS com a Juistreet Goiânia.",
    date: "Outubro de 2026",
  },
  hero: {
    badge: "PRX ✕ Juistreet Goiânia",
    headline: "Wellness que sai do discurso e entra na rotina.",
    subheadline:
      "Uma parceria em três frentes — conteúdo, experiências e recorrência através do PRX PASS — para uma geração que se diverte, treina, se cuida e entende que saúde também pode ser lifestyle.",
    dateFormatted: "Outubro de 2026",
  },
  metrics: [
    {
      value: "3 frentes",
      label: "De atuação",
      detail: "Conteúdo, experiências e PASS",
    },
    {
      value: "VLOG",
      label: "Geração em movimento",
      detail: "Gravado na Juistreet Goiânia",
    },
    {
      value: "Arena T-3",
      label: "Ponto de degustação",
      detail: "Evento PRX · Novembro",
    },
    {
      value: "Secret",
      label: "PRX Secret Menu",
      detail: "Liberado só pelo app",
    },
  ],
  executiveSummary: {
    label: "Introdução",
    title: "Saúde também pode ser lifestyle.",
    paragraph1:
      "A proposta da parceria entre PRX e Juistreet Goiânia é conectar a marca a um comportamento que queremos estimular dentro do nosso ecossistema: uma geração que se diverte, treina, se cuida e entende que saúde também pode ser lifestyle.",
    paragraph2:
      "Por ser uma rede de juice bar focada em alimentação saudável e universo wellness, a Juistreet tem uma conexão natural com o público PRX.",
    paragraph3:
      "A proposta é trabalhar essa parceria em três frentes: conteúdo, experiências e recorrência através do PRX PASS.",
  },
  chapters: [
    {
      number: "01",
      title: "VLOG — PRX ✕ Juistreet",
      kicker: "Geração em movimento",
      blocks: [
        {
          type: "paragraph",
          text: "Criação de um VLOG nas minhas redes sociais, gravado na Juistreet Goiânia, transformando a loja em cenário para conversas com adolescentes que praticam esportes e adotam hábitos saudáveis.",
        },
        {
          type: "tags",
          items: ["Futvôlei", "Corrida", "Tênis", "Academia", "Natação", "Futebol", "Vôlei"],
          caption: "Esses e outros universos podem passar pela mesa.",
        },
        {
          type: "statement",
          text: "Mas a conversa vai além do esporte.",
        },
        {
          type: "paragraph",
          text: "Quero falar sobre rotina, disciplina, corpo, alimentação, pressão estética, redes sociais, equilíbrio, competição e saúde mental, sempre com linguagem jovem e descontraída.",
        },
        {
          type: "paragraph",
          text: "Enquanto conversamos, experimentamos produtos Juistreet relacionados àquele lifestyle.",
        },
        {
          type: "quote",
          label: "A ideia é criar uma associação natural:",
          text: "Juistreet não é apenas onde o jovem compra um suco. É onde uma geração saudável se encontra.",
        },
      ],
    },
    {
      number: "02",
      title: "Lançamento — PRX ✕ Juistreet",
      kicker: "Cocktail wellness",
      blocks: [
        {
          type: "paragraph",
          text: "A parceria pode começar oficialmente com um cocktail wellness na própria Juistreet, reunindo adolescentes convidados, jovens atletas, creators e parceiros PRX.",
        },
        {
          type: "paragraph",
          text: "Uma experiência leve, visual e social, com degustação de produtos, apresentação da parceria e liberação oficial do benefício Juistreet no PRX PASS.",
        },
        {
          type: "statement",
          text: "Além de lançar a parceria, o evento gera conteúdo e apresenta a loja para novos consumidores.",
        },
      ],
    },
    {
      number: "03",
      title: "PRX Experience — Arena T-3",
      kicker: "Parceira oficial de wellness · Novembro",
      blocks: [
        {
          type: "paragraph",
          text: "No evento da PRX para estudantes, em novembro, a Juistreet entra como parceira oficial de wellness, com um ponto de degustação dentro da arena.",
        },
        {
          type: "formula",
          items: [
            { title: "Futvôlei" },
            { title: "Música" },
            { title: "Jovens" },
            { title: "Alimentação saudável" },
          ],
          caption: "Cria uma associação extremamente coerente para a marca.",
        },
        {
          type: "paragraph",
          text: "Além da degustação, podemos disponibilizar via QR Code um benefício especial para levar aqueles jovens da experiência para a loja posteriormente.",
        },
        {
          type: "steps",
          items: [
            { title: "Experimenta no evento." },
            { title: "Desbloqueia no PRX." },
            { title: "Consome na Juistreet." },
          ],
        },
      ],
    },
    {
      number: "04",
      title: "Juistreet ✕ PRX PASS",
      kicker: "Desconto + experiência",
      blocks: [
        {
          type: "paragraph",
          text: "Os usuários PRX terão desconto exclusivo na Juistreet Goiânia, incentivando frequência e recorrência.",
        },
        {
          type: "paragraph",
          text: "Mas quero acrescentar uma experiência que transforme o benefício em pertencimento. Minha sugestão é criar:",
        },
        {
          type: "feature",
          label: "Liberado somente pelo app",
          title: "PRX SECRET MENU — by Juistreet",
          description:
            "Além do desconto, usuários PRX passam a ter acesso a um produto/composição secreta que não aparece no cardápio convencional, liberado somente através do aplicativo.",
          caption: "Periodicamente, podemos lançar uma nova combinação.",
        },
        {
          type: "quote",
          label: "O jovem chega e mostra no PRX:",
          text: "Quero o Secret.",
        },
        {
          type: "paragraph",
          text: "Isso cria uma pequena sensação de clube — quem é PRX sabe; quem não é, pergunta.",
        },
        {
          type: "steps",
          title: "CREATE THE NEXT",
          intro: "E podemos levar isso para um segundo nível.",
          items: [
            {
              title: "Sugere",
              text: "A cada período, usuários PRX podem sugerir uma nova combinação Juistreet.",
            },
            {
              title: "Testa",
              text: "As melhores são testadas pela marca e uma delas se transforma no próximo item do PRX Secret Menu.",
            },
            {
              title: "Cria",
              text: "O vencedor participa da criação, dá nome ao produto e protagoniza conteúdo de lançamento nas redes.",
            },
          ],
        },
        {
          type: "statement",
          text: "Assim, o adolescente deixa de ser apenas consumidor e passa a participar da marca.",
        },
      ],
    },
  ],
  pillarsSection: {
    label: "Conclusão",
    title: "A proposta une três objetivos.",
    statement: {
      lead: [
        "Não quero simplesmente apresentar a Juistreet para a Geração Z.",
        "Quero ajudar a criar uma geração que diga:",
      ],
      emphasis: "“Esse é o nosso lugar.”",
    },
  },
  pillars: [
    {
      number: "01",
      title: "Conteúdo",
      description: "Coloca a Juistreet no centro de conversas sobre esporte e wellness.",
      tag: "VLOG",
    },
    {
      number: "02",
      title: "Eventos",
      description: "Permitem que centenas de jovens experimentem a marca.",
      tag: "Experiências",
    },
    {
      number: "03",
      title: "PRX PASS",
      description:
        "Transforma experimentação em recorrência através de desconto, exclusividade e pertencimento.",
      tag: "Recorrência",
    },
  ],
  closing: {
    headline: "A próxima geração também escolhe se cuidar.",
    brandLine: "PRX ✕ Juistreet",
    signature: "PRX — the next pays.",
  },
  whatsapp: {
    phone: "5562984638578",
    defaultMessage: "Olá! Gostaria de avançar na proposta de parceria PRX ✕ Juistreet Goiânia.",
  },
};
