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

/**
 * Logo vetorial da marca parceira, separada por glifo para a animação de abertura.
 * Cada string é o `d` de um glifo (contorno e miolos juntos, regra nonzero).
 */
export interface PartnerLogoVector {
  width: number;
  height: number;
  color: string;
  strokeWidth?: number;
  wordmark: string[];
  rule?: { x1: number; x2: number; y: number };
  caption?: string[];
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
  | { type: "feature"; title: string; label?: string; description?: string; caption?: string };

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
  closing?: ProposalClosing;
  whatsapp: {
    phone: string;
    defaultMessage: string;
  };
}
