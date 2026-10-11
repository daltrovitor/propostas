// Hello World
"use client";

import React from "react";
import { PrxLogo } from "./prx/PrxLogo";
import { Printer, MessageCircle, Calendar } from "lucide-react";
import confetti from "canvas-confetti";

interface HeaderProps {
  partnerName: string;
  partnerLogoSvg?: string;
  partnerLogoPng?: string;
  partnerLogoWidth?: number;
  partnerLogoHeight?: number;
  partnerLogoShape?: "wordmark" | "badge";
  accentColor: string;
  dateFormatted?: string;
  whatsappPhone: string;
  whatsappMessage: string;
}

export function Header({
  partnerName,
  partnerLogoSvg,
  partnerLogoPng,
  partnerLogoWidth,
  partnerLogoHeight,
  partnerLogoShape = "wordmark",
  accentColor,
  dateFormatted = "Outubro de 2026",
  whatsappPhone,
  whatsappMessage,
}: HeaderProps) {
  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.2 },
      colors: [accentColor, "#7607FD", "#0BD9FD", "#ffffff"],
    });
  };

  const handleWhatsApp = () => {
    triggerConfetti();
    const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logos da Parceria: PRX ✕ Marca Parceira */}
        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <a
            href="https://prx.app.br"
            target="_blank"
            rel="noopener noreferrer"
            title="PRX · The Next Pays"
            className="flex items-center min-h-12 min-w-12 transition-opacity hover:opacity-85 cursor-pointer"
          >
            <PrxLogo className="h-6 sm:h-8 w-auto text-zinc-950" variant="full" />
          </a>

          <span className="text-zinc-300 font-light select-none" aria-hidden="true">
            ✕
          </span>

          <div className="flex items-center min-w-0">
            {partnerLogoSvg ? (
              <div
                className="max-h-6 sm:max-h-8 w-auto flex items-center [&>svg]:max-h-7 [&>svg]:w-auto"
                dangerouslySetInnerHTML={{ __html: partnerLogoSvg }}
              />
            ) : partnerLogoPng ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={partnerLogoPng}
                alt={partnerName}
                width={partnerLogoWidth}
                height={partnerLogoHeight}
                decoding="async"
                className={`w-auto max-w-full object-contain ${
                  partnerLogoShape === "badge" ? "h-10 sm:h-14" : "h-5 sm:h-8"
                }`}
              />
            ) : (
              <span className="font-bold text-sm sm:text-base text-zinc-900 truncate">
                {partnerName}
              </span>
            )}
          </div>
        </div>

        {/* Ações Rápidas no Cabeçalho */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-sm">
            <Calendar className="w-3.5 h-3.5" style={{ color: accentColor }} />
            <span>{dateFormatted}</span>
          </span>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 min-h-12 text-xs sm:text-sm font-medium text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-sm cursor-pointer transition-colors shadow-2xs"
            aria-label="Salvar proposta de parceria em formato PDF"
          >
            <Printer className="w-4 h-4 text-zinc-500" />
            <span className="hidden sm:inline">Salvar PDF</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            style={{ backgroundColor: accentColor }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 min-h-12 text-xs sm:text-sm font-semibold text-white rounded-sm cursor-pointer transition-opacity hover:opacity-90 shadow-2xs"
            aria-label="Avançar com a proposta de parceria via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Avançar Parceria</span>
            <span className="sm:hidden">Avançar</span>
          </button>
        </div>
      </div>
    </header>
  );
}
