// Hello World
import Link from "next/link";
import { getAllProposals } from "@/data/proposals";
import { PrxLogo } from "@/components/prx/PrxLogo";
import { Footer } from "@/components/Footer";
import { hostBrand } from "@/components/brand/hosts";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const proposals = getAllProposals();

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      {/* Cabeçalho */}
      <header className="border-b border-zinc-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PrxLogo className="h-7 w-auto text-zinc-950" variant="full" />
            <span className="text-zinc-300 font-light select-none" aria-hidden="true">
              |
            </span>
            <span className="text-xs font-mono font-medium text-zinc-600 bg-zinc-100 px-2 py-1 rounded-sm">
              Propostas Hub
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://prx.app.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              prx.app.br
            </a>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* Seção Hero */}
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-b border-zinc-200/80 bg-zinc-50/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-purple-50 border border-purple-200/70 text-purple-700 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sistema Unificado Multi-Subdomínio</span>
            </div>

            <h1 className="mt-6 text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 leading-tight">
              Central de Propostas de Parceria PRX
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto">
              Todas as propostas comerciais reunidas em um único repositório e projeto Vercel. Cada proposta é servida automaticamente no seu subdomínio dedicado.
            </p>
          </div>
        </section>

        {/* Lista de Propostas Ativas */}
        <section className="py-16 border-b border-zinc-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950">
                  Propostas Cadastradas
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                  Acesse diretamente ou simule o subdomínio correspondente.
                </p>
              </div>

              <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-sm">
                {proposals.length} propostas ativas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {proposals.map((proposal) => (
                <article
                  key={proposal.subdomain}
                  className="p-6 rounded-md border border-zinc-200/80 bg-zinc-50/50 hover:bg-white hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: proposal.accentColor }}
                      />
                      <span className="font-mono text-xs text-zinc-500 bg-white border border-zinc-200 px-2 py-0.5 rounded-sm">
                        subdomínio: {proposal.subdomain}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-950">
                      {hostBrand(proposal.host).name} ✕ {proposal.clientBrand.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 line-clamp-2">
                      {proposal.hero.subheadline}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-400">
                      {proposal.meta.date}
                    </span>

                    <Link
                      href={`/propostas/${proposal.subdomain}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-purple-600 transition-colors"
                    >
                      <span>Visualizar Proposta</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Guia de Como Solicitar uma Nova Proposta */}
        <section className="py-16 bg-zinc-50/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-md bg-white border border-zinc-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-zinc-950 font-bold text-lg mb-4">
                <Terminal className="w-5 h-5 text-purple-600" />
                <h2>Como pedir uma nova proposta pelo chat</h2>
              </div>

              <p className="text-sm text-zinc-600 mb-6">
                Sempre que você quiser criar uma nova proposta, basta enviar um prompt simples como este:
              </p>

              <div className="p-4 rounded-sm bg-zinc-950 text-zinc-100 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto selection:bg-purple-600 selection:text-white">
                <code>
                  &ldquo;Faça uma proposta de parceria no subdomínio{" "}
                  <span className="text-emerald-400">[nome-da-marca]</span> para a empresa{" "}
                  <span className="text-cyan-400">[Nome da Marca]</span> com o seguinte texto:{" "}
                  <span className="text-yellow-300">[coloque o texto/escopo aqui]</span>.
                  Use o modelo padrão com animação da logo da PRX e da marca.&rdquo;
                </code>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Não precisa criar outro repositório nem projeto na Vercel</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Subdomínio configurado via Wildcard (*.seudominio.com)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Todas as outras propostas continuam no ar intactas</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
