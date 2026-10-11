// Hello World
import React from "react";

interface PrxLogoProps {
  className?: string;
  variant?: "full" | "symbol";
  fillColor?: string;
}

export function PrxLogo({
  className = "h-8 w-auto text-zinc-900",
  variant = "full",
  fillColor = "currentColor",
}: PrxLogoProps) {
  if (variant === "symbol") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 318.5 318.5"
        className={className}
        role="img"
        aria-label="Logo PRX"
      >
        <defs>
          <radialGradient
            id="prx-symbol-grad"
            gradientUnits="userSpaceOnUse"
            cx="330"
            cy="172"
            r="140"
          >
            <stop offset="0" stopColor="#7607FD" />
            <stop offset="0.42" stopColor="#6430FA" />
            <stop offset="0.7" stopColor="#3C9CFD" />
            <stop offset="1" stopColor="#0BD9FD" />
          </radialGradient>
        </defs>
        <g transform="translate(-180.0 -23.25)">
          <path
            fill={fillColor}
            d="M214 119H312L340 147.8H282.2L333.7 199.7L261.2 272.7H221L293.5 199Z"
          />
          <path
            fill="url(#prx-symbol-grad)"
            d="M414 92H464.5L383.3 173L458.2 253.2H359.5L332 223.2H389.5L339.2 167.8Z"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 776.5 181"
      className={className}
      role="img"
      aria-label="PRX · The Next Pays"
    >
      <defs>
        <radialGradient
          id="prx-full-grad-symbol"
          gradientUnits="userSpaceOnUse"
          cx="330"
          cy="172"
          r="140"
        >
          <stop offset="0" stopColor="#7607FD" />
          <stop offset="0.42" stopColor="#6430FA" />
          <stop offset="0.7" stopColor="#3C9CFD" />
          <stop offset="1" stopColor="#0BD9FD" />
        </radialGradient>
        <linearGradient
          id="prx-full-grad-x"
          gradientUnits="userSpaceOnUse"
          x1="450"
          y1="310"
          x2="570"
          y2="405"
        >
          <stop offset="0" stopColor="#7C04F0" />
          <stop offset="0.4" stopColor="#6420F9" />
          <stop offset="0.55" stopColor="#4F80FE" />
          <stop offset="1" stopColor="#06E4F9" />
        </linearGradient>
        <clipPath id="prx-full-clip-letters">
          <rect x="90" y="296" width="500" height="112" />
        </clipPath>
        <clipPath id="prx-full-clip-tag">
          <rect x="0" y="0" width="776.5" height="181" />
        </clipPath>
      </defs>

      {/* Símbolo do cristal / chevron */}
      <g transform="translate(-214 -92)">
        <path
          fill={fillColor}
          d="M214 119H312L340 147.8H282.2L333.7 199.7L261.2 272.7H221L293.5 199Z"
        />
        <path
          fill="url(#prx-full-grad-symbol)"
          d="M414 92H464.5L383.3 173L458.2 253.2H359.5L332 223.2H389.5L339.2 167.8Z"
        />
      </g>

      {/* Letras P, R, X */}
      <g transform="translate(205.0 -290.78)">
        <g clipPath="url(#prx-full-clip-letters)">
          {/* Letra P */}
          <path
            fill={fillColor}
            fillRule="evenodd"
            d="M101 306.2H174A31.3 31.3 0 0 1 174 368.8H118.5V405.6H101ZM118.5 320.8H172A15.8 16.7 0 0 1 172 354.2H118.5Z"
          />
          {/* Letra R */}
          <path
            fill={fillColor}
            fillRule="evenodd"
            d="M279.2 306.2H350.5A32.5 31.6 0 0 1 350.5 369.4H348L383.5 405.6H361.2L324.2 369.4H296.8V405.6H279.2ZM296.8 321H350.5A16 16.95 0 0 1 350.5 354.9H296.8Z"
          />
          {/* Letra X */}
          <path
            fill="url(#prx-full-grad-x)"
            d="M447.5 306.5H471.5L570.6 405.6H546.6L508.4 367.5L469.8 405.6H447L496 355.5Z"
          />
        </g>
        <path
          fill="url(#prx-full-grad-x)"
          d="M548 306.5H571.5L527 351L515.5 339.5Z"
        />
      </g>

      {/* Tagline "the next pays" */}
      <g clipPath="url(#prx-full-clip-tag)">
        <text
          x="541"
          y="153"
          textAnchor="middle"
          fill={fillColor}
          style={{
            fontFamily: "var(--font-sans, system-ui, sans-serif)",
            fontSize: "21px",
            fontWeight: 500,
            letterSpacing: "0.28em",
          }}
        >
          the next pays
        </text>
      </g>
    </svg>
  );
}
