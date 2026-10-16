// Hello World
import type {
  CalculatorDiscountTier,
  CalculatorService,
  ProposalCalculator,
} from "@/data/proposals/types";

export interface CalculatorQuote {
  items: CalculatorService[];
  count: number;
  tier: CalculatorDiscountTier | null;
  setupGross: number;
  monthlyGross: number;
  setup: number;
  monthly: number;
  setupSaved: number;
  monthlySaved: number;
  isFullPackage: boolean;
}

/**
 * Formata reais inteiros como "R$ 1.600,00" sem depender do ICU do ambiente,
 * para o servidor e o navegador renderizarem exatamente o mesmo texto.
 * O espaço após "R$" é inquebrável: o símbolo nunca se separa do valor.
 */
export function formatBRL(value: number): string {
  const sign = value < 0 ? "-" : "";
  const integer = Math.round(Math.abs(value))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}R$\u00a0${integer},00`;
}

/** Faixa de desconto aplicável: a de maior `minItems` que a seleção alcança. */
export function resolveTier(
  tiers: CalculatorDiscountTier[],
  count: number
): CalculatorDiscountTier | null {
  return (
    [...tiers]
      .sort((a, b) => b.minItems - a.minItems)
      .find((tier) => count >= tier.minItems) ?? null
  );
}

/** Mesma regra do Pacote ViraWeb: soma bruta, desconto da faixa e arredondamento ao real. */
export function quote(calculator: ProposalCalculator, selectedIds: string[]): CalculatorQuote {
  const items = calculator.services.filter((service) => selectedIds.includes(service.id));
  const count = items.length;
  const tier = resolveTier(calculator.tiers, count);

  const setupGross = items.reduce((sum, item) => sum + item.setup, 0);
  const monthlyGross = items.reduce((sum, item) => sum + item.monthly, 0);
  const setup = Math.round(setupGross * (1 - (tier?.setupRate ?? 0)));
  const monthly = Math.round(monthlyGross * (1 - (tier?.monthlyRate ?? 0)));

  return {
    items,
    count,
    tier,
    setupGross,
    monthlyGross,
    setup,
    monthly,
    setupSaved: setupGross - setup,
    monthlySaved: monthlyGross - monthly,
    isFullPackage: count > 0 && count === calculator.services.length,
  };
}

export function percent(rate: number): string {
  return `${Math.round(rate * 100)}%`;
}

/** Mensagem pré-formatada enviada ao WhatsApp com o pacote montado. */
export function quoteMessage(
  calculator: ProposalCalculator,
  result: CalculatorQuote,
  intro: string
): string {
  const lines = result.items.map((item) => `- ${item.name}`);
  const discount = result.tier ? `\n${result.tier.label}` : "";
  const setupSaved = result.setupSaved > 0 ? ` (economia de ${formatBRL(result.setupSaved)})` : "";
  const monthlySaved =
    result.monthlySaved > 0 ? ` (economia de ${formatBRL(result.monthlySaved)}/mês)` : "";

  return `${intro}${discount}
Módulos do ${calculator.packageName}:
${lines.join("\n")}

Setup: ${formatBRL(result.setup)}${setupSaved}
Mensalidade: ${formatBRL(result.monthly)}/mês${monthlySaved}

Gostaria de dar andamento.`;
}
