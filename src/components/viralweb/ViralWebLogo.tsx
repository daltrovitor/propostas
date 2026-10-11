// Hello World
import React from "react";

interface ViralWebLogoProps {
  className?: string;
  href?: string;
}

export function ViralWebLogo({
  className = "h-5 w-auto",
  href = "https://viralweb.online",
}: ViralWebLogoProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Viral Web (abre em nova aba)"
      title="Viral Web — Engenharia de Software & IA"
      className="inline-flex min-h-12 items-center gap-2 px-2.5 py-1.5 rounded-sm hover:bg-zinc-100 transition-colors cursor-pointer text-zinc-900 group"
    >
      {/* Símbolo Vectorial da Viral Web / ViraWeb */}
      <svg
        viewBox="0 0 120 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Logo Viral Web"
      >
        {/* Ícone geométrico da marca */}
        <path
          d="M6 8L16 24L26 8H20.5L16 15.5L11.5 8H6Z"
          fill="#8e1529"
        />
        <path
          d="M13 8L19.5 18.5L26 8"
          stroke="#0d233e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tipografia "ViralWeb" */}
        <text
          x="34"
          y="21"
          fill="#09090b"
          style={{
            fontFamily: "var(--font-sans, system-ui, sans-serif)",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          Viral<tspan fill="#8e1529">Web</tspan>
        </text>
      </svg>
    </a>
  );
}
