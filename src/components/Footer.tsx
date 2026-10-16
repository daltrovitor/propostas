// Hello World
import React from "react";
import { ViraWebLogo, ViraWebMark } from "./viraweb/ViraWebLogo";
import { PrxLogo } from "./prx/PrxLogo";
import { hostBrand } from "./brand/hosts";
import type { ProposalHost } from "@/data/proposals/types";

interface FooterProps {
  partnerName?: string;
  host?: ProposalHost;
}

export function Footer({ partnerName, host = "prx" }: FooterProps) {
  const isViraWeb = host === "viraweb";
  const brand = hostBrand(host);

  return (
    <footer className="mt-20 border-t border-zinc-200/80 bg-white py-12 text-zinc-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Lado Esquerdo: Marca anfitriã & Parceria */}
          <div className="flex items-center gap-3">
            {isViraWeb ? (
              <ViraWebMark className="w-7 h-auto" />
            ) : (
              <PrxLogo className="h-6 w-auto text-zinc-900" variant="symbol" />
            )}
            <span className="text-zinc-300 font-light" aria-hidden="true">
              |
            </span>
            <span className="font-medium text-zinc-800">
              {isViraWeb ? "ViraWeb" : "PRX Ecosystem"} {partnerName ? `✕ ${partnerName}` : ""}
            </span>
          </div>

          {/* Centro / Direita: Mandatório 'Desenvolvido por ViraWeb' + Logo horizontal + Link */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs">
            <span className="text-zinc-500 font-normal">Desenvolvido por</span>
            <ViraWebLogo />
          </div>
        </div>

        {/* Linha Inferior com Copyright e Metadados */}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500 font-mono">
          <p>
            © {new Date().getFullYear()}{" "}
            {isViraWeb ? "ViraWeb · Engenharia Digital" : "PRX · The Next Pays"}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {!isViraWeb && (
              <>
                <a
                  href={brand.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center hover:text-zinc-800 transition-colors cursor-pointer"
                >
                  {brand.siteLabel}
                </a>
                <span aria-hidden="true">•</span>
              </>
            )}
            <a
              href="https://viraweb.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center hover:text-zinc-800 transition-colors cursor-pointer"
            >
              viraweb.dev.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
