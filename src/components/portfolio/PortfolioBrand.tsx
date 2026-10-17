// Hello World
import React from "react";
import type { PartnerLogoVector } from "@/data/proposals/types";
import { PartnerLogoSvg } from "@/components/viraweb/PartnerLogoSvg";

/** Degradê da marca em CSS; `fromOffset` corta o início claro quando vira cor de texto. */
export function brandGradient(logo: PartnerLogoVector | undefined, fallback: string, fromOffset = 0): string {
  const stops = logo?.gradient?.stops.filter((stop) => stop.offset >= fromOffset) ?? [];
  if (stops.length < 2) return fallback;
  return `linear-gradient(90deg, ${stops.map((stop) => stop.color).join(", ")})`;
}

/** Headline com o trecho de destaque no degradê da marca. */
export function Headline({ text, highlight, gradient }: { text: string; highlight?: string; gradient: string }) {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <span className="bg-clip-text text-transparent" style={{ backgroundImage: gradient }}>
        {highlight}
      </span>
      {text.slice(at + highlight.length)}
    </>
  );
}

/** Símbolo + nome lado a lado (versão horizontal da logo). */
export function Lockup({
  logo,
  brandName,
  color,
  markClassName = "h-8 sm:h-9 w-auto",
  captionClassName = "hidden min-[400px]:block h-2 sm:h-[11px] w-auto",
}: {
  logo?: PartnerLogoVector;
  brandName: string;
  color?: string;
  markClassName?: string;
  captionClassName?: string;
}) {
  if (!logo?.markBox || !logo.captionBox) {
    return <span className="text-base font-extrabold uppercase tracking-[0.2em]">{brandName}</span>;
  }
  return (
    <span className="flex items-center gap-3">
      <PartnerLogoSvg logo={logo} title={brandName} part="mark" color={color} className={markClassName} />
      <PartnerLogoSvg logo={logo} title={brandName} part="caption" color={color} decorative className={captionClassName} />
    </span>
  );
}
