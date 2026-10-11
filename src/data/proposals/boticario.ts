// Hello World
import { ProposalData } from "./types";
import { PRX_APPROVAL_PHONE } from "./constants";

export const boticarioProposal: ProposalData = {
  subdomain: "boticario",
  clientBrand: {
    name: "Grupo Boticário",
    tagline: "Beleza, Inovação e Sustentabilidade",
    website: "https://grupoboticario.com.br",
  },
  intro: {
    title: "Grupo Boticário ✕ PRX",
  },
  accentColor: "#b48328", // Dourado Nobre / Alta Perfumaria
  accentColorSecondary: "#1f2937",
  meta: {
    title: "Proposta de Parceria Estratégica | PRX ✕ Grupo Boticário",
    description:
      "Integração do ecossistema de alta perfumaria e cosméticos aos benefícios PRX para a Geração Z e Alpha.",
    date: "Outubro de 2026",
  },
  hero: {
    badge: "PRX ✕ Grupo Boticário • Parceria Estratégica",
    headline: "Conectando o maior ecossistema de beleza do país à nova geração de consumidores.",
    subheadline:
      "Uma parceria com foco em retenção hiper-engajada: acúmulo de PRX Coins em cada compra, experiências exclusivas em eventos e campanhas imersivas de gamificação.",
    dateFormatted: "Outubro de 2026",
  },
  executiveSummary: {
    title: "Engajamento Contínuo com as Gerações Z e Alpha",
    paragraph1:
      "As novas gerações buscam conexões autênticas com marcas que ofereçam recompensas imediatas e ecossistemas gamificados. A PRX reúne uma comunidade jovem, vibrante e digitalmente nativa em busca das melhores marcas de perfumaria e autocuidado.",
    paragraph2:
      "Ao integrar o Grupo Boticário ao PRX Pass e PRX Live, transformamos compras rotineiras em pontos dinâmicos e acesso a lançamentos exclusivos de fragrâncias e coleções limitadas.",
    quote:
      "A fidelidade da nova geração não se conquista com cartões plásticos, mas com valorização real de cada momento e pertencimento comunitário.",
  },
  pillars: [
    {
      number: "01",
      title: "Cashback em PRX Coins",
      description:
        "Cada compra em lojas físicas e e-commerce gera PRX Coins multiplicados para subir de nível no app.",
      tag: "Recompensas",
    },
    {
      number: "02",
      title: "PRX Live & Festivais",
      description:
        "Presença de fragrâncias exclusivas e ativações sensoriais de beleza nos maiores eventos da PRX.",
      tag: "Experiências",
    },
    {
      number: "03",
      title: "Early Access a Lançamentos",
      description:
        "Acesso prioritário a linhas exclusivas de perfumaria autoral para membros do nível Diamante PRX.",
      tag: "Exclusividade",
    },
    {
      number: "04",
      title: "Social Commerce Integrado",
      description:
        "Comunidade de criadores recomendando produtos com links nativos de compra direta.",
      tag: "Conversão Digital",
    },
  ],
  scope: [
    {
      title: "Integração Técnica da API",
      items: [
        "Conexão do checkout Boticário com o ledger de benefícios da PRX",
        "Validação de QR Code no PDV em lojas físicas",
        "Sincronização em tempo real de pontos e PRX Coins",
      ],
      highlight: "APIs RESTful seguras com SLA de 99.98%",
    },
    {
      title: "Co-Marketing e Divulgação",
      items: [
        "Banner de destaque na home do aplicativo PRX",
        "Notificações push personalizadas com gatilhos de geolocalização perto de lojas",
        "Conteúdos editoriais exclusivos no canal PRX Culture",
      ],
      highlight: "Alcance estimado de mais de 250.000 jovens",
    },
    {
      title: "Analytics e Métricas de Vendas",
      items: [
        "Dashboard gerencial com taxa de conversão e ticket médio",
        "Mapeamento de preferências olfativas por faixa etária",
        "Relatórios mensais de ROI e LTV dos clientes impactados",
      ],
      highlight: "Painel transparente de business intelligence",
    },
  ],
  metrics: [
    {
      value: "250k+",
      label: "Membros da Base",
      detail: "Jovens Z e Alpha hiperativos",
    },
    {
      value: "28%",
      label: "Aumento de Recompra",
      detail: "Com incentivo em PRX Coins",
    },
    {
      value: "100%",
      label: "Omnichannel",
      detail: "Integrado em lojas e web",
    },
    {
      value: "24h",
      label: "Liquidação de Benefício",
      detail: "Crédito instantâneo no app",
    },
  ],
  investment: {
    title: "Formatos de Parceria Comercial",
    description: "Formatos estruturados por modelo de performance e presença no ecossistema.",
    plans: [
      {
        name: "Parceiro Afiliado",
        price: "100% Performance",
        period: "comissão sobre vendas",
        features: [
          "Listagem no catálogo de parceiros PRX Pass",
          "Acúmulo de PRX Coins padrão para clientes",
          "Suporte técnico para integração de API",
        ],
        highlighted: false,
        ctaText: "Aderir por Performance",
      },
      {
        name: "Parceiro Estratégico VIP",
        price: "R$ 7.500",
        period: "mensal + comissão reduzida",
        features: [
          "Destaque na tela principal do app PRX",
          "Notificações push geolocalizadas próximas às lojas",
          "Multiplicador 2x de PRX Coins em datas especiais",
          "Painel de Analytics avançado e consultoria quinzenal",
        ],
        highlighted: true,
        ctaText: "Selecionar Parceria VIP",
      },
      {
        name: "Co-Branding & Eventos Live",
        price: "Customizado",
        period: "por circuito de eventos",
        features: [
          "Estande de experiências em festivais PRX Live",
          "Fragrância oficial dos eventos PRX",
          "Linha exclusiva co-branded",
          "Equipe de ativação dedicada",
        ],
        highlighted: false,
        ctaText: "Falar com Diretor de Parcerias",
      },
    ],
    guaranteeText: "Cancelamento livre a qualquer momento com aviso prévio de 30 dias.",
  },
  whatsapp: {
    phone: PRX_APPROVAL_PHONE,
    defaultMessage:
      "Olá! Gostaria de avançar na Proposta de Parceria Estratégica do Grupo Boticário com a PRX.",
  },
};
