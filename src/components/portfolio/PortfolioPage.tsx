// Hello World
"use client";

import React from "react";
import { ArrowLeft, ArrowUpRight, MessageCircle, Play } from "lucide-react";
import type { PartnerLogoVector, PortfolioPreview } from "@/data/proposals/types";
import { PartnerLogoSvg } from "@/components/viraweb/PartnerLogoSvg";
import { ViraWebLogo, ViraWebMark } from "@/components/viraweb/ViraWebLogo";
import { LoopVideo, PhoneFrame, PortfolioVideoCard } from "./PortfolioVideo";
import { Headline, Lockup, brandGradient } from "./PortfolioBrand";
import { useProposalHref } from "@/lib/proposalHref";

interface PortfolioPageProps {
  portfolio: PortfolioPreview;
  brandName: string;
  logo?: PartnerLogoVector;
  subdomain: string;
  accentColor: string;
  whatsappPhone: string;
}

const NAV = [
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
];

function Eyebrow({ children, gradient, tone = "light" }: { children: React.ReactNode; gradient: string; tone?: "light" | "dark" }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.3em] ${
        tone === "dark" ? "text-zinc-400" : "text-zinc-500"
      }`}
    >
      <span aria-hidden="true" className="h-0.5 w-8 rounded-sm" style={{ background: gradient }} />
      {children}
    </p>
  );
}

/**
 * Prévia da landing page de portfólio: o site que a proposta entrega, já com a
 * logo da marca e os vídeos reais. Fica em /previa no subdomínio da proposta.
 */
export function PortfolioPage({ portfolio, brandName, logo, subdomain, accentColor, whatsappPhone }: PortfolioPageProps) {
  const backHref = useProposalHref(subdomain, "/");
  const gradient = brandGradient(logo, accentColor);
  const textGradient = brandGradient(logo, accentColor, 0.25);
  const whatsappHref = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(portfolio.contact.message)}`;
  const categories = Array.from(new Set(portfolio.videos.map((video) => video.category.split(" · ").pop())));

  return (
    <div
      className="min-h-screen bg-white text-zinc-950 selection:bg-(--brand-accent) selection:text-white"
      style={{ "--brand-accent": accentColor } as React.CSSProperties}
    >
      {/* Faixa da prévia: avisa que é um exemplo e volta para a proposta */}
      <div className="bg-zinc-950 text-zinc-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 text-xs">
          <p className="flex min-w-0 items-center gap-2">
            <ViraWebMark className="w-5 h-auto" />
            <span className="truncate">
              <strong className="font-semibold text-white">Prévia ViraWeb</strong>
              <span className="hidden sm:inline"> · textos de exemplo, escritos com você na versão final</span>
            </span>
          </p>
          <a
            href={backHref}
            className="inline-flex min-h-12 shrink-0 items-center gap-1.5 font-semibold text-white cursor-pointer hover:underline underline-offset-4"
          >
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
            Voltar à proposta
          </a>
        </div>
      </div>

      {/* Navegação */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          <a href="#inicio" aria-label={`${brandName}: início`} className="flex min-h-12 items-center cursor-pointer">
            <Lockup logo={logo} brandName={brandName} />
          </a>
          <nav aria-label="Seções" className="flex items-center gap-1 sm:gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden md:inline-flex min-h-12 items-center px-3 text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-zinc-950 px-5 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Orçamento
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Topo: apresentação e os criativos em celulares */}
        <section id="inicio" className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full opacity-[0.12] blur-3xl"
            style={{ background: gradient }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            <div className="lg:col-span-6">
              <Eyebrow gradient={gradient}>
                {portfolio.owner} · {brandName}
              </Eyebrow>
              <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.02] text-balance">
                <Headline text={portfolio.headline} highlight={portfolio.headlineHighlight} gradient={textGradient} />
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-600 text-pretty">
                {portfolio.subheadline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#trabalhos"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-zinc-950 px-6 text-sm sm:text-base font-semibold text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <Play aria-hidden="true" className="h-4 w-4 fill-current" />
                  Ver trabalhos
                </a>
                <a
                  href="#contato"
                  className="inline-flex min-h-12 items-center rounded-full border border-zinc-300 px-6 text-sm sm:text-base font-semibold text-zinc-900 hover:border-zinc-950 transition-colors cursor-pointer"
                >
                  Pedir orçamento
                </a>
              </div>
              <ul aria-label="Nichos no portfólio" className="mt-10 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-xs font-medium text-zinc-700"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div aria-hidden="true" className="lg:col-span-6">
              <div className="mx-auto flex max-w-[520px] items-center justify-center">
                {portfolio.videos.slice(0, 3).map((video, idx, list) => {
                  const side = idx - Math.floor(list.length / 2);
                  return (
                    <div
                      key={video.id}
                      className={`w-[34%] shrink-0 ${side === 0 ? "relative z-10" : "relative z-0 opacity-95"}`}
                      style={{
                        transform: `translateY(${side === 0 ? -8 : 22}px) rotate(${side * 7}deg) scale(${side === 0 ? 1.08 : 0.94})`,
                        marginInline: side === 0 ? "-3%" : 0,
                      }}
                    >
                      <PhoneFrame className="shadow-[0_40px_70px_-30px_rgba(17,17,17,0.55)]">
                        <LoopVideo
                          src={video.loop}
                          poster={video.poster}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </PhoneFrame>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Trabalhos: palco escuro para os vídeos */}
        <section id="trabalhos" className="bg-[#0b0b10] text-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <Eyebrow gradient={gradient} tone="dark">
                  Trabalhos
                </Eyebrow>
                <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
                  Criativos recentes
                </h2>
              </div>
              <p className="max-w-sm text-sm sm:text-base text-zinc-400">
                Toque no play para assistir com som. Cada vídeo carrega só quando você dá o play.
              </p>
            </div>

            <div className="mt-12 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
              {portfolio.videos.map((video) => (
                <div key={video.id} className="w-[78%] shrink-0 snap-center sm:w-[46%] md:w-auto">
                  <PortfolioVideoCard video={video} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Eyebrow gradient={gradient}>Serviços</Eyebrow>
              <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
                O que eu faço
              </h2>
            </div>
            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {portfolio.services.map((service, idx) => (
                <li key={service.title} className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6">
                  <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5" style={{ background: gradient }} />
                  <span className="font-mono text-xs font-bold text-zinc-400">{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight">{service.title}</h3>
                  {service.text && <p className="mt-2 text-sm leading-relaxed text-zinc-600">{service.text}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Como funciona */}
        <section className="border-y border-zinc-200/80 bg-zinc-50 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Eyebrow gradient={gradient}>Como funciona</Eyebrow>
              <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
                Do briefing ao criativo no ar
              </h2>
            </div>
            <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {portfolio.process.map((step, idx) => (
                <li key={step.title} className="border-t border-zinc-300 pt-5">
                  <span
                    className="bg-clip-text font-mono text-sm font-bold text-transparent"
                    style={{ backgroundImage: textGradient }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight">{step.title}</h3>
                  {step.text && <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.text}</p>}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              {logo ? (
                <PartnerLogoSvg logo={logo} title={brandName} className="w-full max-w-[320px] h-auto" />
              ) : (
                <span className="text-4xl font-black uppercase">{brandName}</span>
              )}
            </div>
            <div className="lg:col-span-7">
              <Eyebrow gradient={gradient}>Sobre</Eyebrow>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-balance">
                {portfolio.about.title}
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-zinc-600">
                {portfolio.about.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="relative overflow-hidden bg-[#0b0b10] py-20 sm:py-28 text-center text-white">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px" style={{ background: gradient }} />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {logo && (
              <PartnerLogoSvg
                logo={logo}
                title={brandName}
                part="mark"
                color="#ffffff"
                decorative
                className="mx-auto h-12 w-auto"
              />
            )}
            <h2 className="mt-8 text-3xl sm:text-5xl font-extrabold tracking-tight text-balance">
              {portfolio.contact.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-400 text-pretty">{portfolio.contact.text}</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-bold text-zinc-950 hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
              {portfolio.contact.cta}
            </a>
            {portfolio.contact.note && <p className="mt-4 text-xs text-zinc-400">{portfolio.contact.note}</p>}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200/80 bg-white py-10 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
            <Lockup logo={logo} brandName={brandName} />
            <p className="font-mono">
              © {new Date().getFullYear()} {brandName} · {portfolio.owner}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span>Desenvolvido por</span>
            <ViraWebLogo />
          </div>
        </div>
      </footer>
    </div>
  );
}
