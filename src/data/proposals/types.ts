// Hello World
export interface ProposalPillar {
  number: string;
  title: string;
  description: string;
  tag?: string;
}

export interface ProposalScopeGroup {
  title: string;
  items: string[];
  highlight?: string;
}

export interface ProposalMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface ProposalPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export interface ProposalTitledItem {
  title: string;
  text?: string;
}

export interface ProposalCard {
  title: string;
  meta?: string;
  text: string;
}

/** Ponto de auditoria: o que foi encontrado (com a prova) e como será corrigido. */
export interface ProposalFinding {
  severity: "critico" | "importante" | "ajuste";
  title: string;
  evidence: string;
  fix: string;
}

/** Nota medida (Lighthouse, Core Web Vitals) com leitura qualitativa. */
export interface ProposalScore {
  value: string;
  label: string;
  detail?: string;
  status: "ruim" | "regular" | "bom";
  bar?: number; // 0–100: preenchimento da régua sob o valor
}

/** Peça da logo com cor ou entrada própria na abertura. */
export interface PartnerLogoGlyph {
  d: string;
  fill?: string; // Padrão: color da logo
  gradient?: boolean; // Preenche com o degradê da logo
  from?: { x: number; y: number }; // Desliza deste deslocamento em vez de subir pela máscara
  reveal?: "wipe"; // Desenhada do canto inferior esquerdo ao superior direito
}

export interface PartnerLogoGradient {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stops: { offset: number; color: string }[];
}

/** Recorte do viewBox para mostrar só uma parte da logo. */
export interface PartnerLogoBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Logo vetorial da marca parceira, separada por glifo para a animação de abertura.
 * Cada string é o `d` de um glifo (contorno e miolos juntos, regra nonzero).
 */
export interface PartnerLogoVector {
  width: number;
  height: number;
  color: string;
  strokeWidth?: number;
  wordmark: (string | PartnerLogoGlyph)[];
  rule?: { x1: number; x2: number; y: number };
  caption?: string[];
  gradient?: PartnerLogoGradient;
  maskBottom?: number; // Base da máscara dos glifos (padrão: filete ou altura total)
  introWidth?: number; // Largura máxima na abertura, em px
  markBox?: PartnerLogoBox; // Só o símbolo (wordmark)
  captionBox?: PartnerLogoBox; // Só a legenda
  headerPart?: "mark" | "full"; // O que o cabeçalho mostra (padrão: full)
}

/** Marca que assina a proposta (abertura, cabeçalho, rodapé e favicon). */
export type ProposalHost = "prx" | "viraweb";

export interface CalculatorService {
  id: string;
  name: string;
  description: string;
  benefit?: string; // O que o módulo resolve para este cliente
  setup: number; // R$ inteiros
  monthly: number; // R$ inteiros por mês
}

export interface CalculatorDiscountTier {
  minItems: number;
  setupRate: number; // 0.1 = 10%
  monthlyRate: number;
  label: string;
}

/** Oferta de preço único: valor cheio, valor desta proposta e formas de pagamento. */
export interface ProposalOffer {
  label?: string;
  title: string;
  description?: string;
  name: string;
  priceFrom: number; // R$ com centavos (ex.: 1797.7)
  price: number;
  payment: string[];
  includes: string[];
  ctaText?: string;
  footnote?: string;
}

/** Vídeo do portfólio: arquivo completo, loop curto sem som e pôster. */
export interface PortfolioVideo {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
  loop: string;
  poster: string;
  duration: string; // "0:54"
}

/** Página de prévia (ex.: /previa): exemplo do site que a proposta entrega. */
export interface PortfolioPreview {
  path: string;
  icon?: string; // Favicon da prévia (padrão: ViraWeb)
  owner: string;
  role: string;
  title: string;
  description: string;
  headline: string;
  headlineHighlight?: string; // Trecho da headline no degradê da marca
  subheadline: string;
  videos: PortfolioVideo[];
  services: ProposalTitledItem[];
  process: ProposalTitledItem[];
  about: { title: string; paragraphs: string[] };
  contact: { title: string; text: string; cta: string; note?: string; message: string };
}

export interface ProposalCalculator {
  label?: string;
  title: string;
  description?: string;
  packageName: string;
  services: CalculatorService[];
  tiers: CalculatorDiscountTier[];
  footnote?: string;
}

/**
 * Blocos de conteúdo narrativo de um capítulo da proposta.
 * União discriminada por `type`: cada bloco tem uma renderização própria.
 */
export type ProposalContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "statement"; text: string; label?: string }
  | { type: "quote"; text: string; label?: string }
  | { type: "list"; items: string[]; intro?: string }
  | { type: "tags"; items: string[]; intro?: string; caption?: string }
  | { type: "facts"; items: ProposalMetric[]; label?: string }
  | {
      type: "formula";
      items: ProposalTitledItem[];
      intro?: string;
      caption?: string;
      separator?: "+" | "→";
    }
  | { type: "table"; columns: string[]; rows: string[][]; caption?: string }
  | { type: "steps"; items: ProposalTitledItem[]; title?: string; intro?: string }
  | { type: "cards"; items: ProposalCard[] }
  | { type: "findings"; items: ProposalFinding[] }
  | { type: "scores"; items: ProposalScore[]; caption?: string }
  | { type: "feature"; title: string; label?: string; description?: string; caption?: string }
  | { type: "showcase"; caption?: string }; // Janela com a prévia do portfólio (proposal.portfolio)

export interface ProposalChapter {
  number?: string;
  title: string;
  kicker?: string;
  blocks: ProposalContentBlock[];
}

export interface ProposalStatement {
  lead?: string[];
  emphasis: string;
  trail?: string[];
}

export interface ProposalClosing {
  headline: string;
  brandLine?: string;
  lines?: ProposalTitledItem[];
  description?: string;
  signature?: string;
}

export interface ProposalData {
  subdomain: string;
  host?: ProposalHost; // Padrão: "prx"
  clientBrand: {
    name: string;
    logoVector?: PartnerLogoVector; // Logo vetorial animada letra a letra na abertura
    logoSvg?: string;
    logoPng?: string; // Imagem raster da logo (PNG ou WebP) servida a partir de /public
    logoPngOnDark?: string; // Versão clara da logo para a abertura em fundo escuro
    logoWidth?: number; // Dimensões intrínsecas da imagem (evita layout shift)
    logoHeight?: number;
    logoShape?: "wordmark" | "badge"; // "badge" para logos quadradas/circulares
    website?: string;
    tagline?: string;
  };
  intro?: {
    eyebrow?: string; // Sobretítulo da abertura ViraWeb (padrão: "Diagnóstico & Proposta Digital")
    title?: string; // Título da abertura (padrão: "<Marca> ✕ PRX")
    tagline?: string; // Linha mono abaixo do título
    quote?: string; // Frase de efeito (padrão: hero.headline)
  };
  accentColor: string; // Cor principal de destaque da marca (ex: #7607fd, #8e1529, #c59b27, etc.)
  accentColorSecondary?: string;
  meta: {
    title: string;
    description: string;
    date: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    dateFormatted: string;
    primaryCta?: string; // Padrão: "Formalizar Parceria"
    secondaryCta?: string; // Padrão: "Ver Escopo e Detalhes"
    panelLabel?: string; // Rótulo do cartão lateral (padrão: "Ecossistema")
    panelStatus?: string; // Selo do cartão lateral (padrão: "Ativa")
  };
  executiveSummary: {
    label?: string;
    title: string;
    paragraph1: string;
    paragraph2?: string;
    paragraph3?: string;
    quote?: string;
  };
  chapters?: ProposalChapter[];
  pillarsSection?: {
    label?: string;
    title: string;
    description?: string;
    statement?: ProposalStatement;
  };
  pillars: ProposalPillar[];
  scope?: ProposalScopeGroup[];
  metrics?: ProposalMetric[];
  investment?: {
    title?: string;
    description?: string;
    plans: ProposalPlan[];
    guaranteeText?: string;
  };
  calculator?: ProposalCalculator;
  offer?: ProposalOffer;
  portfolio?: PortfolioPreview;
  closing?: ProposalClosing;
  whatsapp: {
    phone: string;
    defaultMessage: string;
  };
}
