// Hello World
"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface PrxPartnerIntroProps {
  partnerName: string;
  partnerLogoSvg?: string;
  partnerLogoPng?: string; // Versão da logo legível sobre fundo escuro
  partnerLogoWidth?: number;
  partnerLogoHeight?: number;
  partnerLogoShape?: "wordmark" | "badge";
  partnerCaption?: string;
  title?: string;
  tagline?: string;
  quote?: string;
  onExitStart?: () => void;
  onComplete?: () => void;
}

// Linha do tempo (ms)
const AUTO_EXIT_AT = 4600;
const EXIT_DURATION = 900;
const EYEBROW = "Proposta de Parceria Estratégica";

// Atraso de cada animação via custom property --d
const at = (ms: number): React.CSSProperties => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// "✕" montado por estilhaços que voam e se encaixam (mecânica da viraweb.dev.br)
const SHARDS = [
  { points: "6,10 10,6 38,34", fill: "#7607FD", dx: -150, dy: -90, rot: -75 },
  { points: "6,10 38,34 34,38", fill: "#6430FA", dx: -70, dy: 130, rot: 100 },
  { points: "34,6 38,10 10,38", fill: "#3C9CFD", dx: 140, dy: -110, rot: 125 },
  { points: "34,6 10,38 6,34", fill: "#0BD9FD", dx: 160, dy: 80, rot: -115 },
] as const;

function shardStyle(dx: number, dy: number, rot: number, delay: number): React.CSSProperties {
  return {
    "--dx": `${dx}px`,
    "--dy": `${dy}px`,
    "--rot": `${rot}deg`,
    "--d": `${delay}ms`,
  } as React.CSSProperties;
}

export function PrxPartnerIntro({
  partnerName,
  partnerLogoSvg,
  partnerLogoPng,
  partnerLogoWidth,
  partnerLogoHeight,
  partnerLogoShape = "wordmark",
  partnerCaption,
  title,
  tagline,
  quote,
  onExitStart,
  onComplete,
}: PrxPartnerIntroProps) {
  const uid = useId().replace(/:/g, "");
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const exitStarted = useRef(false);

  const startExit = useCallback(() => {
    if (exitStarted.current) return;
    exitStarted.current = true;
    setIsExiting(true);
    onExitStart?.();
    window.setTimeout(() => {
      setIsDone(true);
      document.documentElement.classList.remove("intro-lock");
      onComplete?.();
    }, EXIT_DURATION);
  }, [onExitStart, onComplete]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("intro-lock");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(startExit, reduceMotion ? 1200 : AUTO_EXIT_AT);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        startExit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      root.classList.remove("intro-lock");
    };
  }, [startExit]);

  if (isDone) return null;

  const introTitle = title ?? `${partnerName} ✕ PRX`;
  const gradSymbol = `pi-sym-${uid}`;
  const gradX = `pi-x-${uid}`;
  const clipLetters = `pi-clip-${uid}`;

  return (
    <aside
      aria-label={`Abertura da proposta de parceria ${introTitle}`}
      className={`prx-intro fixed inset-0 z-50 overflow-hidden bg-[#0B0B10] text-white select-none ${
        isExiting ? "is-exiting pointer-events-none" : ""
      }`}
    >
      {/* Atmosfera: brilho radial roxo do palco */}
      <div
        aria-hidden="true"
        className="pi pi-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1e1035_0%,#0B0B10_55%,#050508_100%)] opacity-90"
        style={at(0)}
      />

      {/* Pular introdução */}
      <div className="pi pi-fade absolute top-4 right-4 sm:top-8 sm:right-8 z-20" style={at(300)}>
        <button
          type="button"
          onClick={startExit}
          className="group inline-flex min-h-12 items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 bg-slate-900/80 rounded-sm cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0BD9FD]"
          aria-label="Pular introdução e abrir a proposta"
        >
          <span>Pular introdução</span>
          <ArrowRight
            aria-hidden="true"
            className="w-3.5 h-3.5 text-[#0BD9FD] transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>

      <div className="prx-intro-stage relative z-10 flex h-full w-full flex-col items-center justify-center px-5 sm:px-6 py-20 text-center">
        <div className="w-full max-w-5xl flex flex-col items-center">
          {/* Sobretítulo revelado letra a letra */}
          <p
            aria-label={EYEBROW}
            className="text-[10px] sm:text-sm font-mono font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-slate-400"
          >
            {EYEBROW.split(" ").map((word, wordIdx, words) => {
              const offset = words.slice(0, wordIdx).join(" ").length + (wordIdx > 0 ? 1 : 0);
              return (
                <React.Fragment key={word}>
                  {wordIdx > 0 && " "}
                  <span aria-hidden="true" className="inline-block overflow-hidden whitespace-nowrap align-bottom">
                    {word.split("").map((char, charIdx) => (
                      <span
                        key={charIdx}
                        className="pi pi-rise inline-block"
                        style={at(150 + (offset + charIdx) * 18)}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </React.Fragment>
              );
            })}
          </p>

          {/* Título monumental em máscara */}
          <p className="mt-2 sm:mt-3 overflow-hidden pb-1">
            <span
              className="pi pi-rise block text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] text-balance bg-linear-to-r from-white via-slate-100 to-[#0BD9FD] bg-clip-text text-transparent"
              style={at(520)}
            >
              {introTitle}
            </span>
          </p>

          {tagline && (
            <p
              className="pi pi-fade-up mt-2 text-[11px] sm:text-sm font-mono uppercase tracking-widest text-[#0BD9FD]"
              style={at(820)}
            >
              {tagline}
            </p>
          )}

          {/* Marca parceira ✕ PRX */}
          <div className="mt-10 sm:mt-14 w-full flex flex-row items-center justify-center gap-4 sm:gap-10 md:gap-16">
            {/* Marca parceira */}
            <div className="flex flex-1 flex-col items-center justify-center max-w-[340px] min-w-0">
              <div className="pi pi-logo-in flex items-center justify-center" style={at(1450)}>
                {partnerLogoSvg ? (
                  <div
                    className="w-full flex items-center justify-center [&>svg]:max-h-16 [&>svg]:w-auto"
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
                      partnerLogoShape === "badge"
                        ? "h-20 sm:h-28 md:h-32"
                        : "h-9 sm:h-14 md:h-16 drop-shadow-[0_4px_20px_rgba(255,255,255,0.18)]"
                    }`}
                  />
                ) : (
                  <span className="text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-white text-balance">
                    {partnerName}
                  </span>
                )}
              </div>
              {partnerCaption && (
                <span
                  className="pi pi-fade mt-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400"
                  style={at(2150)}
                >
                  {partnerCaption}
                </span>
              )}
            </div>

            {/* Conector ✕ em estilhaços */}
            <svg
              viewBox="0 0 44 44"
              className="w-7 sm:w-10 h-auto shrink-0 overflow-visible"
              role="img"
              aria-label="em parceria com"
            >
              {SHARDS.map((shard, idx) => (
                <polygon
                  key={shard.points}
                  className="pi pi-shard"
                  points={shard.points}
                  fill={shard.fill}
                  style={shardStyle(shard.dx, shard.dy, shard.rot, 1000 + idx * 70)}
                />
              ))}
            </svg>

            {/* PRX: metades do símbolo se encontram e as letras sobem pela máscara */}
            <div className="flex flex-1 flex-col items-center justify-center max-w-[340px] min-w-0">
              <svg
                viewBox="0 0 776.5 181"
                className="w-full h-auto overflow-visible drop-shadow-[0_4px_16px_rgba(118,7,253,0.35)]"
                role="img"
                aria-label="PRX · the next pays"
              >
                <defs>
                  <radialGradient id={gradSymbol} gradientUnits="userSpaceOnUse" cx="330" cy="172" r="140">
                    <stop offset="0" stopColor="#7607FD" />
                    <stop offset="0.42" stopColor="#6430FA" />
                    <stop offset="0.7" stopColor="#3C9CFD" />
                    <stop offset="1" stopColor="#0BD9FD" />
                  </radialGradient>
                  <linearGradient id={gradX} gradientUnits="userSpaceOnUse" x1="450" y1="310" x2="570" y2="405">
                    <stop offset="0" stopColor="#7C04F0" />
                    <stop offset="0.4" stopColor="#6420F9" />
                    <stop offset="0.55" stopColor="#4F80FE" />
                    <stop offset="1" stopColor="#06E4F9" />
                  </linearGradient>
                  <clipPath id={clipLetters}>
                    <rect x="90" y="296" width="500" height="112" />
                  </clipPath>
                </defs>

                <g className="pi pi-symbol-shift" style={at(1350)}>
                  <g className="pi pi-piece-left" style={at(700)}>
                    <g transform="translate(-214 -92)">
                      <path fill="#FFFFFF" d="M214 119H312L340 147.8H282.2L333.7 199.7L261.2 272.7H221L293.5 199Z" />
                    </g>
                  </g>
                  <g className="pi pi-piece-right" style={at(780)}>
                    <g transform="translate(-214 -92)">
                      <path
                        fill={`url(#${gradSymbol})`}
                        d="M414 92H464.5L383.3 173L458.2 253.2H359.5L332 223.2H389.5L339.2 167.8Z"
                      />
                    </g>
                  </g>
                </g>

                <g transform="translate(205.0 -290.78)">
                  <g clipPath={`url(#${clipLetters})`}>
                    <path
                      className="pi pi-letter"
                      style={at(1500)}
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      d="M101 306.2H174A31.3 31.3 0 0 1 174 368.8H118.5V405.6H101ZM118.5 320.8H172A15.8 16.7 0 0 1 172 354.2H118.5Z"
                    />
                    <path
                      className="pi pi-letter"
                      style={at(1610)}
                      fill="#FFFFFF"
                      fillRule="evenodd"
                      d="M279.2 306.2H350.5A32.5 31.6 0 0 1 350.5 369.4H348L383.5 405.6H361.2L324.2 369.4H296.8V405.6H279.2ZM296.8 321H350.5A16 16.95 0 0 1 350.5 354.9H296.8Z"
                    />
                    <path
                      className="pi pi-letter"
                      style={at(1720)}
                      fill={`url(#${gradX})`}
                      d="M447.5 306.5H471.5L570.6 405.6H546.6L508.4 367.5L469.8 405.6H447L496 355.5ZM548 306.5H571.5L527 351L515.5 339.5Z"
                    />
                  </g>
                </g>

                <g className="pi pi-fade-up" style={at(2000)}>
                  <text
                    x="541"
                    y="153"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    style={{
                      fontFamily: "var(--font-sans, system-ui, sans-serif)",
                      fontSize: "21px",
                      fontWeight: 600,
                      letterSpacing: "0.28em",
                    }}
                  >
                    the next pays
                  </text>
                </g>
              </svg>
              <span
                className="pi pi-fade mt-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#0BD9FD]"
                style={at(2150)}
              >
                Comunidade &amp; próxima geração
              </span>
            </div>
          </div>

          {/* Frase de efeito e assinatura */}
          {quote && (
            <div className="mt-10 sm:mt-14 flex flex-col items-center gap-3">
              <p
                className="pi pi-fade-up max-w-2xl text-base sm:text-xl font-medium leading-relaxed text-slate-200 text-balance"
                style={at(2500)}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div className="pi pi-fade-up flex items-center gap-3" style={at(2750)}>
                <span className="text-[11px] sm:text-sm font-mono font-semibold tracking-widest text-[#0BD9FD]">
                  PRX — THE NEXT PAYS
                </span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                <span className="px-2.5 py-0.5 rounded-sm bg-[#7607FD] text-white font-mono font-bold text-[11px] sm:text-xs">
                  2026
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Linha de progresso + dica de teclado */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-10 flex flex-col items-center gap-3">
        <div aria-hidden="true" className="h-px w-32 sm:w-40 bg-slate-800 overflow-hidden">
          <div
            className="pi pi-progress h-px w-full bg-[#0BD9FD]"
            style={{ ...at(0), animationDuration: `${AUTO_EXIT_AT}ms` }}
          />
        </div>
        <p
          className="pi pi-fade hidden sm:block text-xs text-slate-500 tracking-wide"
          style={at(600)}
        >
          Pressione{" "}
          <kbd className="px-1.5 py-0.5 border border-slate-700 rounded-sm bg-slate-900 text-[10px] text-slate-300">
            Esc
          </kbd>{" "}
          ou{" "}
          <kbd className="px-1.5 py-0.5 border border-slate-700 rounded-sm bg-slate-900 text-[10px] text-slate-300">
            Espaço
          </kbd>{" "}
          para pular
        </p>
      </div>
    </aside>
  );
}
