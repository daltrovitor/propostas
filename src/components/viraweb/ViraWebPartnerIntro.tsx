// Hello World
"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import type { PartnerLogoVector } from "@/data/proposals/types";
import { VIRAWEB_POLYGONS, VIRAWEB_VECTORS, VIRAWEB_VIEWBOX } from "./ViraWebLogo";

interface ViraWebPartnerIntroProps {
  partnerName: string;
  partnerLogo?: PartnerLogoVector;
  partnerCaption?: string;
  title?: string;
  eyebrow?: string;
  tagline?: string;
  quote?: string;
  onExitStart?: () => void;
  onComplete?: () => void;
}

// Linha do tempo (ms)
const AUTO_EXIT_AT = 5000;
const EXIT_DURATION = 900;
const MARK_AT = 850; // estilhaços do símbolo ViraWeb
const WORD_AT = 1350; // "ViraWeb" sobe pela máscara
const X_AT = 1250; // conector ✕
const GLYPHS_AT = 1500; // "daíne vargas" letra a letra
const GLYPH_STEP = 60;

const INK = "#0f1f33";
const BRAND = "#1958a5";

// Atraso de cada animação via custom property --d
const at = (ms: number, extra?: Record<string, string>): React.CSSProperties =>
  ({ "--d": `${ms}ms`, ...extra }) as React.CSSProperties;

// "✕" montado por estilhaços nas cores do símbolo ViraWeb
const SHARDS = [
  { points: "6,10 10,6 38,34", fill: "#132a46", dx: -150, dy: -90, rot: -75 },
  { points: "6,10 38,34 34,38", fill: "#1958a5", dx: -70, dy: 130, rot: 100 },
  { points: "34,6 38,10 10,38", fill: "#3aa7d4", dx: 140, dy: -110, rot: 125 },
  { points: "34,6 10,38 6,34", fill: "#edb00e", dx: 160, dy: 80, rot: -115 },
] as const;

function flight(dx: number, dy: number, rot: number, delay: number): React.CSSProperties {
  return at(delay, { "--dx": `${dx}px`, "--dy": `${dy}px`, "--rot": `${rot}deg` });
}

/**
 * Abertura ViraWeb ✕ Marca: palco branco do viraweb.dev.br, símbolo montado por
 * estilhaços, logo vetorial da parceira escrita letra a letra (glifos sobem pela
 * máscara, filete se abre do centro, legenda entra em sequência) e saída em cortina.
 */
export function ViraWebPartnerIntro({
  partnerName,
  partnerLogo,
  partnerCaption,
  title,
  eyebrow = "Diagnóstico & Proposta Digital",
  tagline,
  quote,
  onExitStart,
  onComplete,
}: ViraWebPartnerIntroProps) {
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

  const introTitle = title ?? `ViraWeb ✕ ${partnerName}`;
  const clipWordmark = `vw-clip-${uid}`;
  const glyphCount = partnerLogo?.wordmark.length ?? 0;
  const ruleAt = GLYPHS_AT + glyphCount * GLYPH_STEP + 120;
  const captionAt = ruleAt + 260;
  const captionCount = partnerLogo?.caption?.length ?? 0;
  const quoteAt = Math.max(2600, captionAt + captionCount * 28 + 200);

  return (
    <aside
      aria-label={`Abertura da proposta ${introTitle}`}
      className={`vw-intro fixed inset-0 z-50 overflow-hidden bg-white text-[#0f1f33] select-none ${
        isExiting ? "is-exiting pointer-events-none" : ""
      }`}
    >
      {/* Pular introdução */}
      <div className="pi pi-fade absolute top-4 right-4 sm:top-8 sm:right-8 z-20" style={at(300)}>
        <button
          type="button"
          onClick={startExit}
          className="group inline-flex min-h-12 items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium text-[#33415a] hover:text-[#0f1f33] border border-[#cfd4dc] hover:border-[#0f1f33] bg-white rounded-sm cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1958a5]"
          aria-label="Pular introdução e abrir a proposta"
        >
          <span>Pular introdução</span>
          <ArrowRight
            aria-hidden="true"
            className="w-3.5 h-3.5 text-[#1958a5] transition-transform group-hover:translate-x-0.5"
          />
        </button>
      </div>

      <div className="vw-intro-stage relative z-10 flex h-full w-full flex-col items-center justify-center px-5 sm:px-6 py-20 text-center">
        <div className="w-full max-w-5xl flex flex-col items-center">
          {/* Sobretítulo revelado letra a letra */}
          <p className="text-[10px] sm:text-sm font-mono font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#5a6577]">
            <span className="sr-only">{eyebrow}</span>
            {eyebrow.split(" ").map((word, wordIdx, words) => {
              const offset = words.slice(0, wordIdx).join(" ").length + (wordIdx > 0 ? 1 : 0);
              return (
                <React.Fragment key={`${word}-${wordIdx}`}>
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
              className="pi pi-rise block text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] text-balance text-[#0f1f33]"
              style={at(480)}
            >
              {introTitle}
            </span>
          </p>

          {tagline && (
            <p
              className="pi pi-fade-up mt-2 text-[11px] sm:text-sm font-mono uppercase tracking-widest text-[#1958a5]"
              style={at(780)}
            >
              {tagline}
            </p>
          )}

          {/* ViraWeb ✕ Marca parceira */}
          <div className="mt-10 sm:mt-14 w-full flex flex-row items-center justify-center gap-4 sm:gap-10 md:gap-16">
            {/* ViraWeb: estilhaços se encaixam e o nome sobe pela máscara */}
            <div className="flex flex-1 flex-col items-center justify-center max-w-[300px] min-w-0">
              <svg
                viewBox={`0 0 ${VIRAWEB_VIEWBOX.width} ${VIRAWEB_VIEWBOX.height}`}
                className="w-14 sm:w-20 md:w-24 h-auto overflow-visible"
                role="img"
                aria-label="ViraWeb"
              >
                {VIRAWEB_POLYGONS.map((polygon, idx) => {
                  const vector = VIRAWEB_VECTORS[idx];
                  return (
                    <polygon
                      key={polygon.points}
                      className="pi pi-shard"
                      points={polygon.points}
                      fill={polygon.fill}
                      stroke={polygon.fill}
                      strokeWidth={1}
                      strokeLinejoin="round"
                      style={flight(
                        vector.x * 900,
                        vector.y * 900,
                        (idx % 2 === 0 ? -1 : 1) * (60 + idx * 11),
                        MARK_AT + idx * 38
                      )}
                    />
                  );
                })}
              </svg>
              <p
                aria-hidden="true"
                className="mt-3 sm:mt-4 overflow-hidden pb-0.5 text-xl sm:text-3xl md:text-4xl leading-none tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-montserrat), var(--font-sans), sans-serif" }}
              >
                {Array.from("ViraWeb").map((char, idx) => (
                  <span
                    key={idx}
                    className={`pi pi-rise inline-block ${idx < 4 ? "font-bold" : "font-light"}`}
                    style={at(WORD_AT + idx * 45)}
                  >
                    {char}
                  </span>
                ))}
              </p>
              <span
                className="pi pi-fade mt-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#1958a5]"
                style={at(2150)}
              >
                Engenharia digital
              </span>
            </div>

            {/* Conector ✕ em estilhaços */}
            <svg
              viewBox="0 0 44 44"
              className="w-6 sm:w-9 h-auto shrink-0 overflow-visible"
              role="img"
              aria-label="em parceria com"
            >
              {SHARDS.map((shard, idx) => (
                <polygon
                  key={shard.points}
                  className="pi pi-shard"
                  points={shard.points}
                  fill={shard.fill}
                  style={flight(shard.dx, shard.dy, shard.rot, X_AT + idx * 70)}
                />
              ))}
            </svg>

            {/* Marca parceira: glifos sobem pela máscara, filete abre do centro, legenda em sequência */}
            <div className="flex flex-1 flex-col items-center justify-center max-w-[340px] min-w-0">
              {partnerLogo ? (
                <svg
                  viewBox={`0 0 ${partnerLogo.width} ${partnerLogo.height}`}
                  className="w-full h-auto overflow-visible"
                  role="img"
                  aria-label={partnerName}
                >
                  <defs>
                    <clipPath id={clipWordmark}>
                      <rect x="-4" y="-4" width={partnerLogo.width + 8} height={(partnerLogo.rule?.y ?? partnerLogo.height) - 2} />
                    </clipPath>
                  </defs>
                  <g clipPath={`url(#${clipWordmark})`}>
                    <g
                      fill={partnerLogo.color}
                      stroke={partnerLogo.color}
                      strokeWidth={partnerLogo.strokeWidth ?? 0}
                    >
                      {partnerLogo.wordmark.map((d, idx) => (
                        <path
                          key={d}
                          d={d}
                          className="pi vw-glyph"
                          style={at(GLYPHS_AT + idx * GLYPH_STEP)}
                        />
                      ))}
                    </g>
                  </g>
                  {partnerLogo.rule && (
                    <rect
                      className="pi vw-rule"
                      style={at(ruleAt)}
                      x={partnerLogo.rule.x1}
                      y={partnerLogo.rule.y - 0.25}
                      width={partnerLogo.rule.x2 - partnerLogo.rule.x1}
                      height={0.5}
                      fill={BRAND}
                    />
                  )}
                  {partnerLogo.caption && (
                    <g fill={partnerLogo.color}>
                      {partnerLogo.caption.map((d, idx) => (
                        <path
                          key={d}
                          d={d}
                          className="pi vw-caption"
                          style={at(captionAt + idx * 28)}
                        />
                      ))}
                    </g>
                  )}
                </svg>
              ) : (
                <span
                  className="pi pi-fade-up text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-balance"
                  style={at(GLYPHS_AT)}
                >
                  {partnerName}
                </span>
              )}
              {partnerCaption && (
                <span
                  className="pi pi-fade mt-3 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#5a6577]"
                  style={at(2150)}
                >
                  {partnerCaption}
                </span>
              )}
            </div>
          </div>

          {/* Frase de efeito e assinatura */}
          {quote && (
            <div className="mt-10 sm:mt-14 flex flex-col items-center gap-3">
              <p
                className="pi pi-fade-up max-w-2xl text-base sm:text-xl font-medium leading-relaxed text-[#33415a] text-balance"
                style={at(quoteAt)}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div className="pi pi-fade-up flex items-center gap-3" style={at(quoteAt + 250)}>
                <span className="text-[11px] sm:text-sm font-mono font-semibold tracking-widest text-[#1958a5]">
                  VIRAWEB — ENGENHARIA DIGITAL
                </span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#cfd4dc]" />
                <span className="px-2.5 py-0.5 rounded-sm bg-[#1958a5] text-white font-mono font-bold text-[11px] sm:text-xs">
                  2026
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Linha de progresso + dica de teclado */}
      <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-10 flex flex-col items-center gap-3">
        <div aria-hidden="true" className="h-px w-32 sm:w-40 bg-[#e4e7ec] overflow-hidden">
          <div
            className="pi pi-progress h-px w-full"
            style={{ ...at(0), animationDuration: `${AUTO_EXIT_AT}ms`, backgroundColor: INK }}
          />
        </div>
        <p
          className="pi pi-fade hidden sm:block text-xs text-[#5a6577] tracking-wide"
          style={at(600)}
        >
          Pressione{" "}
          <kbd className="px-1.5 py-0.5 border border-[#cfd4dc] rounded-sm bg-[#f6f7f9] text-[10px] text-[#33415a]">
            Esc
          </kbd>{" "}
          ou{" "}
          <kbd className="px-1.5 py-0.5 border border-[#cfd4dc] rounded-sm bg-[#f6f7f9] text-[10px] text-[#33415a]">
            Espaço
          </kbd>{" "}
          para pular
        </p>
      </div>
    </aside>
  );
}
