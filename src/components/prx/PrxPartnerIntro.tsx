// Hello World
"use client";

import React, { useEffect, useState, useCallback } from "react";
import { PrxLogo } from "./PrxLogo";

interface PrxPartnerIntroProps {
  partnerName: string;
  partnerLogoSvg?: string;
  partnerLogoPng?: string;
  partnerLogoWidth?: number;
  partnerLogoHeight?: number;
  partnerLogoShape?: "wordmark" | "badge";
  accentColor?: string;
  onComplete?: () => void;
}

export function PrxPartnerIntro({
  partnerName,
  partnerLogoSvg,
  partnerLogoPng,
  partnerLogoWidth,
  partnerLogoHeight,
  partnerLogoShape = "wordmark",
  accentColor = "#7607FD",
  onComplete,
}: PrxPartnerIntroProps) {
  // Passos de animação:
  // 0: PRX entra
  // 1: Símbolo '✕' entra
  // 2: Logo da Marca Parceira entra
  // 3: Texto 'Proposta de Parceria' revela
  // 4: Finalização suave
  const [step, setStep] = useState<number>(0);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  const handleFinish = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsDone(true);
      if (onComplete) onComplete();
    }, 600);
  }, [onComplete]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Linha do tempo refinada e elegante (total de ~3.6s antes de abrir automaticamente)
    timers.push(setTimeout(() => setStep(1), 700)); // Revela o 'X'
    timers.push(setTimeout(() => setStep(2), 1400)); // Revela a Marca Parceira
    timers.push(setTimeout(() => setStep(3), 2100)); // Revela 'Proposta de Parceria'
    timers.push(setTimeout(() => handleFinish(), 3600)); // Conclui e revela a página

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        handleFinish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleFinish]);

  if (isDone) return null;

  return (
    <aside
      aria-label="Apresentação animada da proposta de parceria PRX"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white select-none transition-all duration-700 ${
        isClosing ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Botão de Pular no canto superior direito para máxima acessibilidade */}
      <div className="absolute top-6 right-6 z-20">
        <button
          type="button"
          onClick={handleFinish}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 rounded-sm cursor-pointer transition-colors"
          aria-label="Pular introdução e abrir proposta imediatamente"
        >
          <span>Pular introdução</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Grade geométrica de fundo muito sutil (Modelo Padrão) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-40"
      />

      {/* Conteúdo Central: Animação PRX ✕ Marca */}
      <div className="w-full max-w-4xl px-6 flex flex-col items-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {/* Logo PRX */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: step >= 0 ? 1 : 0,
              transform: step >= 0 ? "scale(1) translateY(0)" : "scale(0.85) translateY(20px)",
            }}
          >
            <div className="p-4 sm:p-5 rounded-md border border-zinc-200/80 bg-zinc-50/60 shadow-xs">
              <PrxLogo className="h-10 sm:h-14 w-auto text-zinc-950" variant="full" />
            </div>
          </div>

          {/* Símbolo de Parceria '✕' */}
          <div
            className="transition-all duration-500 ease-out"
            style={{
              opacity: step >= 1 ? 1 : 0,
              transform: step >= 1 ? "scale(1) rotate(0deg)" : "scale(0.5) rotate(-90deg)",
            }}
          >
            <span
              className="text-2xl sm:text-3xl font-light text-zinc-400 select-none"
              aria-label="em parceria com"
            >
              ✕
            </span>
          </div>

          {/* Logo da Marca Parceira */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: step >= 2 ? 1 : 0,
              transform: step >= 2 ? "scale(1) translateY(0)" : "scale(0.85) translateY(20px)",
            }}
          >
            <div
              className={`rounded-md border border-zinc-200/80 bg-zinc-50/60 shadow-xs flex items-center justify-center min-w-[140px] sm:min-w-[180px] h-[72px] sm:h-[94px] ${
                partnerLogoPng && partnerLogoShape === "badge" ? "p-1.5 sm:p-2" : "p-4 sm:p-5"
              }`}
            >
              {partnerLogoSvg ? (
                <div
                  className="max-h-10 sm:max-h-14 w-auto max-w-[180px] flex items-center justify-center [&>svg]:max-h-12 [&>svg]:w-auto"
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
                  className={`w-auto max-w-[200px] sm:max-w-[240px] object-contain ${
                    partnerLogoShape === "badge" ? "h-[60px] sm:h-[78px]" : "h-9 sm:h-12"
                  }`}
                />
              ) : (
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900">
                    {partnerName}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Linha Divisória e Tipografia de Revelação */}
        <div
          className="mt-10 sm:mt-12 transition-all duration-700"
          style={{
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div
            className="h-0.5 w-16 mx-auto mb-4 transition-all duration-500"
            style={{ backgroundColor: accentColor }}
          />
          <h2 className="text-sm sm:text-base font-semibold tracking-widest uppercase text-zinc-900">
            Proposta de Parceria Estratégica
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-mono">
            PRX ✕ {partnerName}
          </p>
        </div>

        {/* Linha de progresso no rodapé da intro */}
        <div className="mt-8 flex items-center gap-1.5">
          {[0, 1, 2, 3].map((idx) => (
            <span
              key={idx}
              className="h-1 transition-all duration-500 rounded-sm"
              style={{
                width: step >= idx ? "24px" : "6px",
                backgroundColor: step >= idx ? accentColor : "#e4e4e7",
              }}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
