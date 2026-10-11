// Hello World
import { ProposalData } from "./types";
import { queirozSilveiraProposal } from "./queirozsilveira";
import { boticarioProposal } from "./boticario";
import { madrugaProposal } from "./madruga";
import { motoChefeProposal } from "./motochefe";
import { juistreetProposal } from "./juistreet";
import { rauppWakeProposal } from "./rauppwake";

// Dicionário mestre indexado pelo subdomínio
export const proposalsRegistry: Record<string, ProposalData> = {
  queirozsilveira: queirozSilveiraProposal,
  "queiroz-silveira": queirozSilveiraProposal,
  boticario: boticarioProposal,
  perfumes: boticarioProposal,
  madruga: madrugaProposal,
  motochef: motoChefeProposal,
  motochefe: motoChefeProposal,
  juistreet: juistreetProposal,
  rauppwake: rauppWakeProposal,
  raupp: rauppWakeProposal,
  wake: rauppWakeProposal,
};

/**
 * Retorna a proposta associada a um subdomínio específico
 */
export function getProposalBySubdomain(subdomain: string): ProposalData | null {
  if (!subdomain) return null;
  const normalized = subdomain.toLowerCase().trim();
  return proposalsRegistry[normalized] || null;
}

/**
 * Retorna todas as propostas ativas no sistema
 */
export function getAllProposals(): ProposalData[] {
  // Retorna sem duplicatas de aliases
  const uniqueSubdomains = new Set<string>();
  const list: ProposalData[] = [];

  for (const proposal of Object.values(proposalsRegistry)) {
    if (!uniqueSubdomains.has(proposal.subdomain)) {
      uniqueSubdomains.add(proposal.subdomain);
      list.push(proposal);
    }
  }

  return list;
}

/**
 * Retorna todos os subdomínios cadastrados
 */
export function getAllSubdomains(): string[] {
  return Object.keys(proposalsRegistry);
}
