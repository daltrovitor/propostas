// Hello World
import React from "react";

interface ViraWebLogoProps {
  className?: string;
  href?: string;
}

export const VIRAWEB_VIEWBOX = { width: 766, height: 621 } as const;

// Símbolo oficial da ViraWeb (V low-poly com seta) — viraweb.dev.br
export const VIRAWEB_POLYGONS: ReadonlyArray<{ points: string; fill: string }> = [
  { points: "2,93.5 84.7,239.5 223.5,92.5", fill: "#132a46" },
  { points: "307,243.5 223.5,92.5 84.7,239.5", fill: "#113f73" },
  { points: "84.7,239.5 200.5,446 307,243.5", fill: "#2965ae" },
  {
    points: "307,243.5 200.5,446 245,527.5 184,527.5 299,616.5 415,525.5 352,524 386.7,465.5 409,421.5",
    fill: "#132a46",
  },
  { points: "489,286.5 409,421.5 386.7,465.5 474,465 529,377", fill: "#f2bf12" },
  { points: "386.7,465.5 430.5,534 474,465", fill: "#e4a009" },
  { points: "529,377 474,465 568.3,465.2", fill: "#edb00e" },
  { points: "386.7,465.5 352,524 415,525.5 299,616.5 480.5,619 430.5,534", fill: "#edb00e" },
  { points: "568.3,465.2 474,465 430.5,534 480.5,619", fill: "#e39907" },
  { points: "585.5,286.2 489,286.5 529,377", fill: "#3aa7d4" },
  { points: "585.5,286.2 529,377 568.3,465.2 637,344", fill: "#246ba6" },
  { points: "763,2 493,99.5 567,151.5 489,286.5 585.5,286.2", fill: "#266ca6" },
  { points: "763,2 585.5,286.2 637,344 696,242.5 764,291.5", fill: "#1958a5" },
];

/** Vetor unitário do centro do símbolo até o centroide de cada polígono (estilhaços da abertura). */
export const VIRAWEB_VECTORS = VIRAWEB_POLYGONS.map(({ points }) => {
  const coords = points.split(" ").map((pair) => pair.split(",").map(Number));
  const cx = coords.reduce((sum, [x]) => sum + x, 0) / coords.length;
  const cy = coords.reduce((sum, [, y]) => sum + y, 0) / coords.length;
  const dx = cx - VIRAWEB_VIEWBOX.width / 2;
  const dy = cy - VIRAWEB_VIEWBOX.height / 2;
  const length = Math.hypot(dx, dy) || 1;
  return { x: dx / length, y: dy / length };
});

/** "ViraWeb" na tipografia da marca (Vira em negrito, Web em light). */
export function ViraWebWordmarkText({ className = "" }: { className?: string }) {
  return (
    <span
      className={`leading-none tracking-[-0.02em] text-[#0f1f33] ${className}`}
      style={{ fontFamily: "var(--font-montserrat), var(--font-sans), sans-serif" }}
    >
      <span className="font-bold">Vira</span>
      <span className="font-light">Web</span>
    </span>
  );
}

export function ViraWebMark({ className = "w-8 h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 766 621"
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 overflow-visible ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      {VIRAWEB_POLYGONS.map((poly) => (
        <polygon
          key={poly.points}
          points={poly.points}
          fill={poly.fill}
          stroke={poly.fill}
          strokeWidth={1}
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

export function ViraWebLogo({ className = "", href = "https://viraweb.dev.br" }: ViraWebLogoProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="ViraWeb (abre em nova aba)"
      title="ViraWeb — Engenharia de Software, Sistemas Personalizados & IA"
      className={`inline-flex min-h-12 items-center gap-2.5 px-2.5 py-1.5 rounded-sm hover:bg-zinc-100 transition-colors cursor-pointer ${className}`}
    >
      <ViraWebMark className="w-7 sm:w-8 h-auto" />
      <ViraWebWordmarkText className="text-[1.05rem] sm:text-[1.15rem]" />
    </a>
  );
}
