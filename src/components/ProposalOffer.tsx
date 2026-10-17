// Hello World
"use client";

import React from "react";
import { Check, CreditCard, QrCode } from "lucide-react";
import type { ProposalOffer as ProposalOfferData } from "@/data/proposals/types";
import { formatBRL } from "@/lib/calculator";

interface ProposalOfferProps {
  offer: ProposalOfferData;
  accentColor: string;
  whatsappPhone: string;
  messageIntro: string;
  onApprove?: () => void;
  id?: string;
}

/**
 * Oferta de preço único: valor cheio riscado, valor da proposta e um botão por
 * forma de pagamento, cada um com a aprovação pré-formatada para o WhatsApp.
 */
export function ProposalOffer({
  offer,
  accentColor,
  whatsappPhone,
  messageIntro,
  onApprove,
  id = "investimento",
}: ProposalOfferProps) {
  const saved = offer.priceFrom - offer.price;
  const discount = Math.round((saved / offer.priceFrom) * 100);

  const approvalHref = (method: string) =>
    `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      `${messageIntro}
Quero aprovar: ${offer.name}
Valor: ${formatBRL(offer.price)} (de ${formatBRL(offer.priceFrom)})
Forma de pagamento: ${method}`
    )}`;

  return (
    <section id={id} className="py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {offer.label && (
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">{offer.label}</p>
          )}
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 text-balance">
            {offer.title}
          </h2>
          {offer.description && (
            <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed text-pretty">{offer.description}</p>
          )}
        </div>

        <div
          className="mt-10 grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-md bg-white border border-zinc-200/80 border-t-4 print-avoid-break"
          style={{ borderTopColor: accentColor }}
        >
          {/* O que está incluído */}
          <div className="lg:col-span-7 p-6 sm:p-10">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: accentColor }}>
              {offer.name}
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
              {offer.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-zinc-800">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-xs text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preço e formas de pagamento */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-zinc-50/80 border-t lg:border-t-0 lg:border-l border-zinc-200/80">
            <span
              className="inline-block px-2.5 py-1 rounded-sm text-[11px] font-mono font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: accentColor }}
            >
              {discount}% off nesta proposta
            </span>
            <p className="mt-5 text-sm sm:text-base text-zinc-500">
              De <span className="tabular-nums line-through">{formatBRL(offer.priceFrom)}</span>
            </p>
            <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
              <span className="text-base font-semibold text-zinc-700">por</span>
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums text-zinc-950 whitespace-nowrap">
                {formatBRL(offer.price)}
              </span>
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              Economia de <strong className="font-semibold text-zinc-950">{formatBRL(saved)}</strong>.
            </p>

            <p className="mt-8 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
              Aprovar e pagar com
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              {offer.payment.map((method, idx) => {
                const Icon = /pix/i.test(method) ? QrCode : CreditCard;
                return (
                  <a
                    key={method}
                    href={approvalHref(method)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onApprove}
                    className={`inline-flex min-h-12 items-center justify-center gap-2 px-4 py-3.5 rounded-sm text-sm sm:text-base font-bold cursor-pointer transition-opacity hover:opacity-95 ${
                      idx === 0 ? "text-white shadow-sm" : "bg-white text-zinc-900 border border-zinc-300 hover:border-zinc-900"
                    }`}
                    style={idx === 0 ? { backgroundColor: accentColor } : undefined}
                    aria-label={`Aprovar no WhatsApp e pagar com ${method}`}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                    <span>{method}</span>
                  </a>
                );
              })}
            </div>

            {offer.footnote && (
              <p className="mt-4 text-[11px] sm:text-xs text-zinc-500 leading-relaxed">{offer.footnote}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
