// Hello World
import type { ProposalHost } from "@/data/proposals/types";

export interface HostBrand {
  name: string;
  site: string;
  siteLabel: string;
  icon: string;
  confetti: string[];
}

// Identidade de quem assina a proposta: PRX (parcerias) ou ViraWeb (projetos digitais)
export const HOST_BRANDS: Record<ProposalHost, HostBrand> = {
  prx: {
    name: "PRX",
    site: "https://prx.app.br",
    siteLabel: "prx.app.br",
    icon: "/icon.svg",
    confetti: ["#7607FD", "#0BD9FD", "#ffffff"],
  },
  viraweb: {
    name: "ViraWeb",
    site: "https://viraweb.dev.br",
    siteLabel: "viraweb.dev.br",
    icon: "/viraweb-icon.svg",
    confetti: ["#1958a5", "#3aa7d4", "#edb00e", "#ffffff"],
  },
};

export function hostBrand(host: ProposalHost = "prx"): HostBrand {
  return HOST_BRANDS[host];
}
