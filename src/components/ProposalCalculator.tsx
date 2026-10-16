// Hello World
"use client";

import React, { useMemo, useState } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import type { ProposalCalculator as ProposalCalculatorData } from "@/data/proposals/types";
import { formatBRL, percent, quote, quoteMessage } from "@/lib/calculator";

interface ProposalCalculatorProps {
  calculator: ProposalCalculatorData;
  accentColor: string;
  whatsappPhone: string;
  messageIntro: string;
  onApprove?: () => void;
  id?: string;
}

/**
 * Calculadora do pacote: o cliente escolhe os módulos e vê setup e mensalidade
 * com o desconto progressivo aplicado na hora. O pacote montado segue
 * pré-formatado para o WhatsApp.
 */
export function ProposalCalculator({
  calculator,
  accentColor,
  whatsappPhone,
  messageIntro,
  onApprove,
  id = "investimento",
}: ProposalCalculatorProps) {
  const allIds = useMemo(() => calculator.services.map((s) => s.id), [calculator.services]);
  const [selected, setSelected] = useState<string[]>(allIds);

  const result = quote(calculator, selected);
  const fullPackage = quote(calculator, allIds);
  const sortedTiers = [...calculator.tiers].sort((a, b) => a.minItems - b.minItems);
  const fullTier = sortedTiers[sortedTiers.length - 1];

  const toggle = (serviceId: string) => {
    setSelected((prev) =>
      prev.includes(serviceId) ? prev.filter((item) => item !== serviceId) : [...prev, serviceId]
    );
  };

  const href = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    quoteMessage(calculator, result, messageIntro)
  )}`;

  return (
    <section id={id} className="py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {calculator.label && (
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
              {calculator.label}
            </p>
          )}
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 text-balance">
            {calculator.title}
          </h2>
          {calculator.description && (
            <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed text-pretty">
              {calculator.description}
            </p>
          )}
        </div>

        {/* Condição do pacote completo */}
        {fullTier && (
          <div
            className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-md bg-white border border-zinc-200/80 border-t-4 print-avoid-break"
            style={{ borderTopColor: accentColor }}
          >
            <div className="lg:col-span-7">
              <p
                className="text-xs font-mono font-semibold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                {calculator.packageName} completo
              </p>
              <p className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-950 text-balance">
                Os {calculator.services.length} módulos juntos: {percent(fullTier.setupRate)} de desconto no setup e{" "}
                {percent(fullTier.monthlyRate)} na mensalidade.
              </p>
              <p className="mt-2 text-sm sm:text-base text-zinc-600">
                Economia de {formatBRL(fullPackage.setupSaved)} no setup e{" "}
                {formatBRL(fullPackage.monthlySaved)} por mês.
              </p>
            </div>
            <dl className="lg:col-span-5 grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-4 self-center">
              <div>
                <dt className="text-xs text-zinc-500">Setup único</dt>
                <dd className="mt-1 font-mono">
                  <span className="block text-xs text-zinc-500 line-through">
                    {formatBRL(fullPackage.setupGross)}
                  </span>
                  <span className="block text-lg sm:text-2xl font-bold text-zinc-950">
                    {formatBRL(fullPackage.setup)}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-zinc-500">Mensalidade</dt>
                <dd className="mt-1 font-mono">
                  <span className="block text-xs text-zinc-500 line-through">
                    {formatBRL(fullPackage.monthlyGross)}/mês
                  </span>
                  <span className="block text-lg sm:text-2xl font-bold" style={{ color: accentColor }}>
                    {formatBRL(fullPackage.monthly)}
                    <span className="text-xs font-normal text-zinc-500">/mês</span>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        )}

        {/* Regras de desconto progressivo */}
        <div
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-l-2 bg-white py-3 px-4 text-xs sm:text-sm text-zinc-600"
          style={{ borderLeftColor: accentColor }}
        >
          <span className="font-semibold text-zinc-900">Desconto progressivo:</span>
          <span>1 módulo: valor cheio</span>
          {sortedTiers.map((tier) => (
            <span key={tier.minItems}>{tier.label}</span>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Módulos */}
          <fieldset className="lg:col-span-7 flex flex-col gap-3 min-w-0">
            <legend className="sr-only">Módulos do {calculator.packageName}</legend>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                Módulos selecionados ({result.count}/{calculator.services.length})
              </span>
              {!result.isFullPackage && fullTier && (
                <button
                  type="button"
                  onClick={() => setSelected(allIds)}
                  className="inline-flex min-h-12 items-center text-xs sm:text-sm font-semibold cursor-pointer hover:underline underline-offset-4"
                  style={{ color: accentColor }}
                >
                  Selecionar todos ({percent(fullTier.setupRate)} + {percent(fullTier.monthlyRate)} OFF)
                </button>
              )}
            </div>

            {calculator.services.map((service) => {
              const checked = selected.includes(service.id);
              return (
                <label
                  key={service.id}
                  className={`group relative flex cursor-pointer items-start gap-4 p-5 rounded-sm border bg-white transition-colors select-none has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-(--brand-accent) ${
                    checked ? "border-zinc-900 shadow-xs" : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggle(service.id)}
                  />
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-xs border transition-colors ${
                      checked ? "text-white" : "border-zinc-300 bg-white text-transparent"
                    }`}
                    style={checked ? { backgroundColor: accentColor, borderColor: accentColor } : undefined}
                  >
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <span className="text-sm sm:text-base font-bold text-zinc-950">{service.name}</span>
                      <span className="font-mono text-xs text-zinc-600">
                        Setup <strong className="font-semibold text-zinc-900">{formatBRL(service.setup)}</strong>
                        <span aria-hidden="true" className="mx-1.5 text-zinc-300">|</span>
                        <strong className="font-semibold text-zinc-900">{formatBRL(service.monthly)}</strong>/mês
                      </span>
                    </span>
                    <span className="mt-1.5 block text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {service.description}
                    </span>
                    {service.benefit && (
                      <span className="mt-2 block text-xs sm:text-sm text-zinc-900 leading-relaxed">
                        <span className="font-semibold" style={{ color: accentColor }}>
                          Para o consultório:{" "}
                        </span>
                        {service.benefit}
                      </span>
                    )}
                  </span>
                </label>
              );
            })}
          </fieldset>

          {/* Resumo em tempo real */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 p-6 sm:p-7 rounded-sm border border-zinc-200 bg-white shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-4">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-zinc-900">
                Resumo do pacote
              </h3>
              {result.tier && (
                <span className="text-[11px] font-mono font-semibold" style={{ color: accentColor }}>
                  {percent(result.tier.setupRate)}
                  {result.tier.monthlyRate > 0 ? ` + ${percent(result.tier.monthlyRate)}` : ""} OFF
                </span>
              )}
            </div>

            <div aria-live="polite">
              <ul className="mt-4 min-h-[72px] divide-y divide-zinc-100">
                {result.items.length === 0 ? (
                  <li className="py-6 text-center text-sm text-zinc-500">
                    Selecione ao menos um módulo para calcular o investimento.
                  </li>
                ) : (
                  result.items.map((item) => (
                    <li
                      key={item.id}
                      className="py-2.5 first:pt-0 flex items-baseline justify-between gap-3 text-xs sm:text-sm"
                    >
                      <span className="text-zinc-700 font-medium min-w-0">{item.name}</span>
                      <span className="font-mono text-zinc-500 shrink-0">
                        {formatBRL(item.setup)} + {formatBRL(item.monthly)}/m
                      </span>
                    </li>
                  ))
                )}
              </ul>

              <div className="mt-6 border-t border-zinc-200 pt-5 space-y-3">
                {result.tier && (
                  <p className="bg-zinc-50 border border-zinc-200 p-3 text-xs sm:text-sm text-zinc-700">
                    Desconto aplicado: economia de{" "}
                    <strong className="font-semibold text-zinc-950">{formatBRL(result.setupSaved)}</strong> no setup
                    {result.monthlySaved > 0 && (
                      <>
                        {" "}e <strong className="font-semibold text-zinc-950">{formatBRL(result.monthlySaved)}/mês</strong>
                      </>
                    )}
                    .
                  </p>
                )}

                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-xs sm:text-sm text-zinc-600">
                  <span>Setup único (implantação)</span>
                  <span className="text-right font-mono whitespace-nowrap">
                    {result.setupSaved > 0 && (
                      <span className="mr-2 text-xs text-zinc-500 line-through">{formatBRL(result.setupGross)}</span>
                    )}
                    <span className="text-base sm:text-lg font-bold text-zinc-950">{formatBRL(result.setup)}</span>
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-xs sm:text-sm text-zinc-600 border-t border-zinc-100 pt-3">
                  <span>Mensalidade (hospedagem & gestão)</span>
                  <span className="text-right font-mono whitespace-nowrap">
                    {result.monthlySaved > 0 && (
                      <span className="mr-2 text-xs text-zinc-500 line-through">
                        {formatBRL(result.monthlyGross)}
                      </span>
                    )}
                    <span className="text-lg sm:text-xl font-bold" style={{ color: accentColor }}>
                      {formatBRL(result.monthly)}
                    </span>
                    <span className="text-xs text-zinc-500">/mês</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {result.count > 0 ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onApprove}
                  className="w-full inline-flex min-h-12 items-center justify-center gap-2 px-5 py-3.5 rounded-sm text-sm sm:text-base font-bold text-white cursor-pointer transition-opacity hover:opacity-95"
                  style={{ backgroundColor: accentColor }}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Aprovar este pacote no WhatsApp</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full inline-flex min-h-12 items-center justify-center px-5 py-3.5 rounded-sm text-sm sm:text-base font-bold text-zinc-600 bg-zinc-100 border border-zinc-200 cursor-not-allowed"
                >
                  Selecione um módulo
                </button>
              )}
            </div>

            {calculator.footnote && (
              <p className="mt-3 text-center text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                {calculator.footnote}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
