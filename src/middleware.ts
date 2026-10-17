// Hello World
import { NextRequest, NextResponse } from "next/server";
import { getProposalBySubdomain } from "./data/proposals";
import type { ProposalData } from "./data/proposals/types";

// A prévia do portfólio fica no próprio subdomínio (ex.: fullcriative.viraweb.dev.br/previa);
// qualquer outro caminho continua abrindo a proposta
function proposalRoute(subdomain: string, proposal: ProposalData, pathname: string): string {
  const subpage = proposal.portfolio && pathname === proposal.portfolio.path ? pathname : "";
  return `/propostas/${subdomain.toLowerCase()}${subpage}`;
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Ignorar arquivos estáticos, rotas internas do Next.js e ícones
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".") // favicon.ico, icon.svg, imagens, etc.
  ) {
    return NextResponse.next();
  }

  // 1. Verificar se há parâmetro explícito de subdomínio via query (ótimo para testes locais e previews)
  const querySubdomain = url.searchParams.get("subdomain");
  const queryProposal = querySubdomain ? getProposalBySubdomain(querySubdomain) : null;
  if (querySubdomain && queryProposal) {
    return NextResponse.rewrite(new URL(proposalRoute(querySubdomain, queryProposal, url.pathname), req.url));
  }

  // 2. Extrair subdomínio a partir do host (ex: queirozsilveira.seusite.com, boticario.localhost:3000)
  // Remover porta se houver
  const hostWithoutPort = hostname.split(":")[0];
  const parts = hostWithoutPort.split(".");

  // Se tiver pelo menos 2 partes no localhost (sub.localhost) ou 3 em domínio comum (sub.dominio.com)
  let extractedSubdomain: string | null = null;

  if (hostWithoutPort.endsWith("localhost") && parts.length >= 2) {
    extractedSubdomain = parts[0];
  } else if (parts.length >= 3) {
    extractedSubdomain = parts[0];
  }

  // Evitar subdomínios padrão como 'www', 'app', 'propostas' caso queiram que caiam na home
  if (
    extractedSubdomain &&
    !["www", "propostas", "app", "admin"].includes(extractedSubdomain.toLowerCase())
  ) {
    const proposal = getProposalBySubdomain(extractedSubdomain);
    if (proposal) {
      // Reescreve a URL internamente para a página da proposta sem alterar a barra de endereços do cliente
      return NextResponse.rewrite(new URL(proposalRoute(extractedSubdomain, proposal, url.pathname), req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
