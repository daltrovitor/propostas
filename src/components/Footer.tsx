// Hello World
import React from "react";
import { ViralWebLogo } from "./viralweb/ViralWebLogo";
import { PrxLogo } from "./prx/PrxLogo";

interface FooterProps {
  partnerName?: string;
}

export function Footer({ partnerName }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-zinc-200/80 bg-white py-12 text-zinc-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Lado Esquerdo: PRX & Parceria */}
          <div className="flex items-center gap-3">
            <PrxLogo className="h-6 w-auto text-zinc-900" variant="symbol" />
            <span className="text-zinc-300 font-light" aria-hidden="true">
              |
            </span>
            <span className="font-medium text-zinc-800">
              PRX Ecosystem {partnerName ? `✕ ${partnerName}` : ""}
            </span>
          </div>

          {/* Centro / Direita: Mandatório 'Desenvolvido por Viral Web' + Logo + Link */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs">
            <span className="text-zinc-500 font-normal">Desenvolvido por</span>
            <ViralWebLogo href="https://viralweb.online" className="h-5 w-auto" />
          </div>
        </div>

        {/* Linha Inferior com Copyright e Metadados */}
        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400 font-mono">
          <p>
            © {new Date().getFullYear()} PRX · The Next Pays. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://prx.app.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-700 transition-colors cursor-pointer"
            >
              prx.app.br
            </a>
            <span>•</span>
            <a
              href="https://viralweb.online"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-700 transition-colors cursor-pointer"
            >
              viralweb.online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
