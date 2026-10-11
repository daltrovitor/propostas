// Hello World
import Link from "next/link";
import { PrxLogo } from "@/components/prx/PrxLogo";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between">
      <header className="border-b border-zinc-200/80 p-4 sm:px-8">
        <PrxLogo className="h-6 w-auto text-zinc-950" variant="symbol" />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center py-20">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
          Erro 404
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-zinc-950">
          Proposta não encontrada
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-md">
          O subdomínio solicitado não possui uma proposta ativa cadastrada ou o link pode ter expirado.
        </p>

        <Link
          href="/"
          className="mt-8 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold rounded-sm cursor-pointer transition-colors"
        >
          Ir para a Central de Propostas
        </Link>
      </main>

      <Footer />
    </div>
  );
}
