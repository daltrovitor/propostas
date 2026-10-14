// Hello World
import { ProposalData } from "./types";
import { PRX_APPROVAL_PHONE } from "./constants";

export const yunoProposal: ProposalData = {
  subdomain: "yuno",
  clientBrand: {
    name: "Yuno Consultoria Financeira",
    logoPng: "/logos/yuno.png",
    logoPngOnDark: "/logos/yuno-white.png",
    logoWidth: 493,
    logoHeight: 230,
    logoShape: "wordmark",
    tagline: "Consultoria financeira",
  },
  intro: {
    title: "Yuno ✕ PRX",
    tagline: "PRX INVEST",
  },
  accentColor: "#140361", // Índigo Yuno (extraído da logo)
  meta: {
    title: "PRX ✕ Yuno Consultoria Financeira | Proposta de Parceria",
    description:
      "Uma nova geração de investidores começa antes do patrimônio. PRX INVEST e Yuno: investimento por objetivos, educação financeira e relacionamento com a próxima geração.",
    date: "Outubro de 2026",
  },
  hero: {
    badge: "PRX ✕ Yuno Consultoria Financeira",
    headline: "Uma nova geração de investidores começa antes do patrimônio.",
    subheadline:
      "Uma jornada construída com a Yuno para transformar jovens consumidores em jovens investidores — falando de dinheiro a partir dos seus objetivos, da sua linguagem e do futuro que desejam construir.",
    dateFormatted: "Outubro de 2026",
  },
  metrics: [
    {
      value: "9 linhas",
      label: "Objetivos de vida",
      detail: "Do PRX START ao PRX RETIRE",
    },
    {
      value: "R$ 100",
      label: "PRX FIRST 100",
      detail: "O primeiro investimento",
    },
    {
      value: "Anti-bet",
      label: "Menos aposta",
      detail: "Mais patrimônio",
    },
    {
      value: "LTV",
      label: "Da próxima geração",
      detail: "Relacionamento antes do patrimônio",
    },
  ],
  executiveSummary: {
    label: "A oportunidade",
    title: "De jovens consumidores a jovens investidores.",
    paragraph1:
      "A PRX nasce como um ecossistema digital desenvolvido para a Geração Z, conectando benefícios, experiências, empreendedorismo, serviços financeiros, investimentos, saúde mental e novas formas de relacionamento.",
    paragraph2:
      "Dentro desse ecossistema, o PRX INVEST será a vertical dedicada à construção da vida financeira e patrimonial dos jovens.",
    paragraph3:
      "Nossa proposta não é criar mais uma prateleira de investimentos. É construir, junto à Yuno, uma jornada capaz de transformar jovens consumidores em jovens investidores — falando de dinheiro a partir dos seus objetivos, da sua linguagem e do futuro que desejam construir.",
  },
  chapters: [
    {
      number: "01",
      title: "PRX INVEST ✕ Yuno",
      kicker: "Inteligência e planejamento financeiro",
      blocks: [
        {
          type: "paragraph",
          text: "A proposta é avaliar a Yuno como parceira estratégica de inteligência e planejamento financeiro do PRX INVEST, participando da construção da jornada financeira oferecida à comunidade PRX.",
        },
        {
          type: "formula",
          intro: "A PRX entra com:",
          items: [
            { title: "Audiência" },
            { title: "Comunidade" },
            { title: "Tecnologia" },
            { title: "Linguagem" },
            { title: "Distribuição" },
            { title: "Experiência Gen Z" },
          ],
        },
        {
          type: "formula",
          intro: "A Yuno entra com:",
          items: [
            { title: "Expertise financeira" },
            { title: "Planejamento" },
            { title: "Curadoria" },
            { title: "Metodologia" },
            { title: "Estrutura e parceiros habilitados para os serviços aplicáveis" },
          ],
        },
        {
          type: "paragraph",
          text: "A distribuição e execução de produtos de investimento deverão ocorrer por meio das instituições devidamente habilitadas e dentro das exigências regulatórias aplicáveis.",
        },
      ],
    },
    {
      number: "02",
      title: "Investimento por objetivos, não por “financês”",
      blocks: [
        {
          type: "statement",
          text: "Queremos inverter a lógica tradicional do mercado.",
        },
        {
          type: "paragraph",
          text: "O jovem não entra no PRX INVEST procurando “renda fixa”, “ETF” ou “previdência”.",
        },
        {
          type: "tags",
          intro: "Ele entra pensando:",
          items: [
            "Quero viajar.",
            "Quero meu primeiro carro.",
            "Quero meu primeiro apartamento.",
            "Quero empreender.",
            "Quero investir globalmente.",
            "Quero independência financeira.",
          ],
        },
        {
          type: "paragraph",
          text: "Em vez da linguagem tradicional — renda fixa, multimercado, RV, previdência — eu criaria “objetivos de vida” e, por trás deles, o parceiro financeiro disponibilizaria os produtos adequados.",
        },
        {
          type: "table",
          caption: "Linhas PRX INVEST por objetivo de vida e produtos possíveis por trás de cada uma",
          columns: ["Linha PRX", "Conceito", "Produtos possíveis por trás"],
          rows: [
            ["PRX START", "Meu primeiro investimento", "Tesouro, CDB, fundos conservadores"],
            ["PRX TRIP", "Minha próxima viagem", "Renda fixa de curto/médio prazo"],
            ["PRX CAR", "Meu primeiro carro", "Renda fixa + carteira por objetivo"],
            ["PRX HOME", "Meu primeiro apê", "Carteira de longo prazo"],
            ["PRX GLOBAL", "Quero investir no mundo", "ETFs/fundos internacionais"],
            ["PRX TECH", "Quero investir no futuro", "ETFs/fundos ligados a tecnologia e inovação"],
            ["PRX GREEN", "Dinheiro + impacto", "Fundos/ativos ESG, quando adequados"],
            ["PRX FREEDOM", "Independência financeira", "Carteira diversificada de longo prazo"],
            ["PRX RETIRE", "Começar cedo muda tudo", "Previdência/investimentos de longo prazo"],
          ],
        },
        {
          type: "paragraph",
          text: "A sacada é: o adolescente não acorda pensando “quero comprar um ETF”. Ele pensa “quero viajar”, “quero meu primeiro carro”, “quero ficar rico cedo”, “quero ter liberdade”.",
        },
        {
          type: "statement",
          text: "A PRX transforma o objetivo em porta de entrada para educação financeira e investimento.",
        },
      ],
    },
    {
      number: "03",
      title: "PRX FIRST 100",
      kicker: "Jornada proprietária de entrada",
      blocks: [
        {
          type: "paragraph",
          text: "Propomos ainda uma jornada proprietária de entrada:",
        },
        {
          type: "feature",
          label: "PRX FIRST 100",
          title: "Seus primeiros R$ 100 investidos.",
          description:
            "Uma experiência de educação financeira que ensina, de maneira simples, conceitos como risco, diversificação, juros compostos, reserva financeira e visão de longo prazo.",
        },
        {
          type: "formula",
          intro: "A evolução pode ser transformada em milestones:",
          separator: "→",
          items: [
            { title: "R$ 100" },
            { title: "R$ 1 mil" },
            { title: "R$ 5 mil" },
            { title: "R$ 10 mil" },
          ],
        },
        {
          type: "statement",
          text: "Não queremos gamificar especulação. Queremos gamificar disciplina financeira.",
        },
      ],
    },
    {
      number: "04",
      title: "Do anti-bet ao investidor",
      blocks: [
        {
          type: "paragraph",
          text: "Este é um dos territórios mais importantes da PRX.",
        },
        {
          type: "paragraph",
          text: "Enquanto boa parte da economia digital disputa a atenção do jovem oferecendo gratificação imediata, queremos construir uma narrativa na direção oposta:",
        },
        {
          type: "feature",
          label: "A narrativa",
          title: "menos aposta. mais patrimônio.",
        },
        {
          type: "paragraph",
          text: "Dentro do ecossistema PRX, comportamentos financeiros positivos poderão gerar reconhecimento, benefícios e experiências, sempre respeitando as regras regulatórias aplicáveis.",
        },
        {
          type: "statement",
          label: "A mensagem é simples:",
          text: "não gastar pode valer. poupar pode valer. investir no próprio futuro pode valer.",
        },
      ],
    },
    {
      number: "05",
      title: "Educação financeira Yuno ✕ PRX",
      blocks: [
        {
          type: "paragraph",
          text: "A parceria também pode extrapolar o aplicativo. A Yuno poderá participar de conteúdos e experiências proprietárias voltadas à nova geração:",
        },
        {
          type: "cards",
          items: [
            {
              title: "PRX MONEY TALKS",
              meta: "Conteúdo",
              text: "Conversas rápidas sobre dinheiro, investimentos e decisões financeiras.",
            },
            {
              title: "PRX MONEY SESSIONS",
              meta: "Presencial",
              text: "Encontros presenciais com jovens sobre planejamento financeiro e construção de patrimônio.",
            },
            {
              title: "Yuno Experts ✕ PRX",
              meta: "Especialistas",
              text: "Especialistas traduzindo temas complexos para uma linguagem que faça sentido para um jovem de 16, 18 ou 20 anos.",
            },
          ],
        },
        {
          type: "statement",
          text: "O objetivo não é transformar o conteúdo financeiro em uma aula. É transformar educação financeira em cultura jovem.",
        },
      ],
    },
    {
      number: "06",
      title: "PRX FOUNDERS ✕ Yuno",
      kicker: "Uma segunda conexão estratégica",
      blocks: [
        {
          type: "paragraph",
          text: "O PRX FOUNDERS será a vertical dedicada à identificação e conexão de jovens empreendedores.",
        },
        {
          type: "paragraph",
          text: "Founders poderão cadastrar seus negócios, apresentar seus modelos e participar de processos de curadoria para experiências, mentorias e networking.",
        },
        {
          type: "tags",
          intro: "A Yuno poderá participar desse ecossistema oferecendo conteúdo e inteligência sobre temas como:",
          items: [
            "Finanças pessoais do founder",
            "Organização patrimonial",
            "Planejamento",
            "Valuation",
            "Captação",
            "Relação entre patrimônio pessoal e empresarial",
          ],
        },
        {
          type: "statement",
          text: "Estamos formando não apenas futuros investidores. Estamos nos aproximando também de futuros empresários e futuros clientes de alta renda.",
        },
      ],
    },
  ],
  pillarsSection: {
    label: "A tese",
    title: "Relacionamento antes do patrimônio.",
    description:
      "O jovem de hoje pode ainda não possuir grande patrimônio. Mas esse não é o ponto. Ele pode ser o empresário, executivo, profissional liberal, investidor ou founder de alta renda dos próximos dez anos.",
    statement: {
      lead: [
        "Por isso, acreditamos que existe uma oportunidade de construir relacionamento antes do patrimônio.",
        "Não queremos disputar apenas o AUM de hoje.",
      ],
      emphasis: "Queremos construir o LTV da próxima geração.",
    },
  },
  pillars: [
    {
      number: "01",
      title: "A Yuno possui",
      description: "Conhecimento financeiro.",
      tag: "Yuno",
    },
    {
      number: "02",
      title: "A PRX possui",
      description: "Acesso, linguagem e conexão com essa geração.",
      tag: "PRX",
    },
    {
      number: "03",
      title: "Juntos",
      description:
        "Podemos começar a formar o cliente do futuro antes que o mercado financeiro comece a disputá-lo.",
      tag: "Parceria",
    },
  ],
  closing: {
    headline: "We don't sell investments to Gen Z. We build Gen Z investors.",
    brandLine: "PRX ✕ Yuno",
    signature: "PRX — the next pays.",
  },
  whatsapp: {
    phone: PRX_APPROVAL_PHONE,
    defaultMessage:
      "Olá! Gostaria de avançar na proposta de parceria PRX ✕ Yuno Consultoria Financeira.",
  },
};
