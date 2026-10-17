// Hello World
import React, { useId } from "react";
import type {
  PartnerLogoBox,
  PartnerLogoGlyph,
  PartnerLogoGradient,
  PartnerLogoVector,
} from "@/data/proposals/types";

interface PartnerLogoSvgProps {
  logo: PartnerLogoVector;
  title: string;
  className?: string;
  part?: "full" | "mark" | "caption"; // "mark" e "caption" usam markBox/captionBox
  color?: string; // Substitui a cor sólida (ex.: versão clara sobre fundo escuro)
  decorative?: boolean; // Oculta dos leitores de tela quando o nome já está ao lado
}

/** Glifo normalizado: aceita o `d` puro (logos antigas) ou a peça com cor própria. */
export function logoGlyph(glyph: string | PartnerLogoGlyph): PartnerLogoGlyph {
  return typeof glyph === "string" ? { d: glyph } : glyph;
}

/** Degradê da logo em coordenadas do viewBox. */
export function LogoGradient({ id, gradient }: { id: string; gradient: PartnerLogoGradient }) {
  return (
    <linearGradient
      id={id}
      gradientUnits="userSpaceOnUse"
      x1={gradient.x1}
      y1={gradient.y1}
      x2={gradient.x2}
      y2={gradient.y2}
    >
      {gradient.stops.map((stop) => (
        <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
      ))}
    </linearGradient>
  );
}

function viewBoxOf(logo: PartnerLogoVector, box?: PartnerLogoBox): string {
  const b = box ?? { x: 0, y: 0, width: logo.width, height: logo.height };
  return `${b.x} ${b.y} ${b.width} ${b.height}`;
}

/** Logo vetorial da marca parceira em versão estática (cabeçalho, rodapé, impressão). */
export function PartnerLogoSvg({
  logo,
  title,
  className = "h-8 w-auto",
  part = "full",
  color,
  decorative = false,
}: PartnerLogoSvgProps) {
  const gradientId = `logo-grad-${useId().replace(/:/g, "")}`;
  const solid = color ?? logo.color;
  const stroke = logo.strokeWidth ?? 0;
  const showMark = part !== "caption";
  const showCaption = part !== "mark";
  const box = part === "mark" ? logo.markBox : part === "caption" ? logo.captionBox : undefined;

  return (
    <svg
      viewBox={viewBoxOf(logo, box)}
      xmlns="http://www.w3.org/2000/svg"
      className={`block shrink-0 overflow-visible ${className}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative || undefined}
      focusable="false"
    >
      {logo.gradient && showMark && (
        <defs>
          <LogoGradient id={gradientId} gradient={logo.gradient} />
        </defs>
      )}
      {showMark && (
        <g fill={solid} stroke={solid} strokeWidth={stroke}>
          {logo.wordmark.map((raw) => {
            const glyph = logoGlyph(raw);
            const fill = glyph.gradient ? `url(#${gradientId})` : glyph.fill;
            return <path key={glyph.d} d={glyph.d} fill={fill} stroke={fill} />;
          })}
        </g>
      )}
      {logo.rule && part === "full" && (
        <rect
          x={logo.rule.x1}
          y={logo.rule.y - 0.25}
          width={logo.rule.x2 - logo.rule.x1}
          height={0.5}
          fill={solid}
        />
      )}
      {logo.caption && showCaption && (
        <g fill={solid}>
          {logo.caption.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      )}
    </svg>
  );
}
