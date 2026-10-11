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
  | { type: "formula"; items: ProposalTitledItem[]; intro?: string; caption?: string }
  | { type: "steps"; items: ProposalTitledItem[]; title?: string; intro?: string }
  | { type: "cards"; items: ProposalCard[] }
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
  clientBrand: {
    name: string;
    logoSvg?: string;
    logoPng?: string; // Imagem raster da logo (PNG ou WebP) servida a partir de /public
    logoWidth?: number; // Dimensões intrínsecas da imagem (evita layout shift)
    logoHeight?: number;
    logoShape?: "wordmark" | "badge"; // "badge" para logos quadradas/circulares
    website?: string;
    tagline?: string;
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
  closing?: ProposalClosing;
  whatsapp: {
    phone: string;
    defaultMessage: string;
  };
}
