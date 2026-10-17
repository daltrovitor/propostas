// Hello World
"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import type { PartnerLogoVector, PortfolioPreview } from "@/data/proposals/types";
import { LoopVideo, PhoneFrame } from "./PortfolioVideo";
import { Headline, Lockup, brandGradient } from "./PortfolioBrand";
import { useProposalHref } from "@/lib/proposalHref";

interface PortfolioShowcaseProps {
  portfolio: PortfolioPreview;
  brandName: string;
  logo?: PartnerLogoVector;
  subdomain: string;
  siteLabel: string; // Domínio exibido na barra do navegador
  accentColor: string;
  caption?: string;
}

/**
 * A prévia dentro da proposta: uma janela de navegador com o topo do portfólio
 * e os criativos tocando em loop, e o link para abrir a página completa.
 */
export function PortfolioShowcase({
  portfolio,
  brandName,
  logo,
  subdomain,
  siteLabel,
  accentColor,
  caption,
}: PortfolioShowcaseProps) {
  const href = useProposalHref(subdomain, portfolio.path);
  const textGradient = brandGradient(logo, accentColor, 0.25);

  return (
    <figure className="print-avoid-break">
      <div className="overflow-hidden rounded-md border border-zinc-200/80 bg-white shadow-xs">
        {/* Barra do navegador */}
        <div className="flex items-center gap-3 border-b border-zinc-200/80 bg-zinc-50 px-3 sm:px-4 py-2.5">
          <span aria-hidden="true" className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
          </span>
          <span className="min-w-0 flex-1 truncate rounded-sm border border-zinc-200/80 bg-white px-3 py-1 text-center font-mono text-[11px] text-zinc-600">
            {siteLabel}
          </span>
        </div>

        {/* Topo da página */}
        <div className="px-4 sm:px-8 pt-4 sm:pt-6 pb-6 sm:pb-8">
          <div className="flex items-center justify-between gap-3">
            <Lockup
              logo={logo}
              brandName={brandName}
              markClassName="h-6 sm:h-7 w-auto"
              captionClassName="hidden sm:block h-[7px] w-auto"
            />
            <span aria-hidden="true" className="rounded-full bg-zinc-950 px-3 py-1 text-[10px] font-semibold text-white">
              Orçamento
            </span>
          </div>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
            {portfolio.owner} · {brandName}
          </p>
          <p className="mt-2 max-w-md text-xl sm:text-3xl font-extrabold tracking-tight leading-[1.05] text-zinc-950 text-balance">
            <Headline text={portfolio.headline} highlight={portfolio.headlineHighlight} gradient={textGradient} />
          </p>
        </div>

        {/* Palco escuro com os criativos */}
        <div className="bg-[#0b0b10] px-4 sm:px-8 py-5 sm:py-7">
          <ul className="grid grid-cols-3 gap-2.5 sm:gap-4">
            {portfolio.videos.slice(0, 3).map((video) => (
              <li key={video.id} className="min-w-0">
                <PhoneFrame className="rounded-[18px] p-[3px] [&>div]:rounded-[15px]">
                  <LoopVideo src={video.loop} poster={video.poster} className="absolute inset-0 h-full w-full object-cover" />
                </PhoneFrame>
                <p className="mt-2 truncate text-[11px] sm:text-xs font-semibold text-white">{video.title}</p>
                <p className="truncate text-[10px] sm:text-[11px] text-zinc-400">{video.category.split(" · ").pop()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {caption && <figcaption className="mt-3 text-sm text-zinc-500">{caption}</figcaption>}

      <a
        href={href}
        className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm sm:text-base font-bold text-white cursor-pointer shadow-sm transition-opacity hover:opacity-95"
        style={{ backgroundColor: accentColor }}
      >
        <span>Abrir a prévia completa</span>
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
    </figure>
  );
}
