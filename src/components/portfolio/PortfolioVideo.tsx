// Hello World
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import type { PortfolioVideo } from "@/data/proposals/types";

// Avisa os outros cartões quando um vídeo começa a tocar com som
const PLAY_EVENT = "portfolio:play";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Toca o loop curto (sem som) só enquanto o vídeo está visível.
 * `active` permite que o cartão desligue o observador depois do play com som.
 */
function useLoopWhileVisible(ref: React.RefObject<HTMLVideoElement | null>, src: string, active = true) {
  useEffect(() => {
    const video = ref.current;
    if (!video || !active) return;
    video.muted = true;
    video.loop = true;
    if (!video.getAttribute("src")) video.src = src;
    if (prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [ref, src, active]);
}

/** Loop decorativo sem som (ex.: celulares do topo da página). */
export function LoopVideo({ src, poster, className = "" }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useLoopWhileVisible(ref, src);
  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className={className}
    />
  );
}

/** Moldura de celular para vídeos verticais. */
export function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[26px] bg-zinc-950 p-[5px] ring-1 ring-black/5 ${className}`}>
      <div className="relative aspect-[9/16] overflow-hidden rounded-[21px] bg-zinc-900">{children}</div>
    </div>
  );
}

/**
 * Cartão do portfólio: mostra o loop sem som e, no play, troca para o vídeo
 * completo com som no mesmo elemento (o play acontece dentro do toque, como o
 * Safari do iPhone exige).
 */
export function PortfolioVideoCard({ video }: { video: PortfolioVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [withSound, setWithSound] = useState(false);
  useLoopWhileVisible(ref, video.loop, !withSound);

  useEffect(() => {
    const pauseIfOther = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== video.id) ref.current?.pause();
    };
    window.addEventListener(PLAY_EVENT, pauseIfOther);
    return () => window.removeEventListener(PLAY_EVENT, pauseIfOther);
  }, [video.id]);

  const playWithSound = () => {
    const element = ref.current;
    if (!element) return;
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: video.id }));
    element.loop = false;
    element.muted = false;
    element.controls = true;
    element.src = video.src;
    void element.play().catch(() => {});
    setWithSound(true);
  };

  return (
    <article className="group">
      <PhoneFrame className="shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
        <video
          ref={ref}
          poster={video.poster}
          muted
          playsInline
          preload="none"
          aria-label={`${video.title}: ${video.category}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {!withSound && (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
            />
            <button
              type="button"
              onClick={playWithSound}
              className="absolute inset-0 flex cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
              aria-label={`Assistir ${video.title} com som (${video.duration})`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-zinc-950 shadow-lg transition-transform duration-300 group-hover:scale-110">
                <Play aria-hidden="true" className="h-6 w-6 translate-x-0.5 fill-current" />
              </span>
            </button>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                {video.category}
              </p>
              <div className="mt-1 flex items-baseline justify-between gap-3">
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">{video.title}</h3>
                <span className="font-mono text-xs text-white/75">{video.duration}</span>
              </div>
            </div>
          </>
        )}
      </PhoneFrame>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400 text-pretty">{video.description}</p>
    </article>
  );
}
