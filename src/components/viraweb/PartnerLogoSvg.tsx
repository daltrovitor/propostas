// Hello World
import React from "react";
import type { PartnerLogoVector } from "@/data/proposals/types";

interface PartnerLogoSvgProps {
  logo: PartnerLogoVector;
  title: string;
  className?: string;
}

/** Logo vetorial da marca parceira em versão estática (cabeçalho, rodapé, impressão). */
export function PartnerLogoSvg({ logo, title, className = "h-8 w-auto" }: PartnerLogoSvgProps) {
  const stroke = logo.strokeWidth ?? 0;
  return (
    <svg
      viewBox={`0 0 ${logo.width} ${logo.height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 overflow-visible ${className}`}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <g fill={logo.color} stroke={logo.color} strokeWidth={stroke}>
        {logo.wordmark.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {logo.rule && (
        <rect
          x={logo.rule.x1}
          y={logo.rule.y - 0.25}
          width={logo.rule.x2 - logo.rule.x1}
          height={0.5}
          fill={logo.color}
        />
      )}
      {logo.caption && (
        <g fill={logo.color}>
          {logo.caption.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      )}
    </svg>
  );
}
