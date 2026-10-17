// Hello World
"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const currentLocation = () => `${window.location.pathname}${window.location.search}`;

/**
 * Link interno de uma proposta que funciona nos três modos de acesso:
 * subdomínio (fullcriative.viraweb.dev.br/previa), rota direta
 * (/propostas/fullcriative/previa) e simulação local (/?subdomain=fullcriative).
 * No servidor, devolve o caminho do subdomínio.
 */
export function useProposalHref(subdomain: string, path: string): string {
  const location = useSyncExternalStore(subscribe, currentLocation, () => "");
  if (location.startsWith("/propostas/")) {
    return `/propostas/${subdomain}${path === "/" ? "" : path}`;
  }
  if (new URLSearchParams(location.split("?")[1] ?? "").has("subdomain")) {
    return `${path}?subdomain=${subdomain}`;
  }
  return path;
}
