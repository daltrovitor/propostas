// Hello World
"use client";

import React, { useState } from "react";
import { ProposalData } from "@/data/proposals/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PrxPartnerIntro } from "./prx/PrxPartnerIntro";
import { ViraWebPartnerIntro } from "./viraweb/ViraWebPartnerIntro";
import { ProposalChapters } from "./ProposalChapters";
import { ProposalCalculator } from "./ProposalCalculator";
import { ProposalOffer } from "./ProposalOffer";
import { hostBrand } from "./brand/hosts";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileCheck,
} from "lucide-react";
import confetti from "canvas-confetti";

interface ProposalViewProps {
  proposal: ProposalData;
}

function pillarsGridClass(count: number): string {
  if (count === 3) return "md:grid-cols-3";
  if (count === 2) return "md:grid-cols-2";
  return "md:grid-cols-2 lg:grid-cols-4";
}

export function ProposalView({ proposal }: ProposalViewProps) {
  const [introFinished, setIntroFinished] = useState(false);
  const [heroRevealing, setHeroRevealing] = useState(false);
  const hasChapters = !!proposal.chapters && proposal.chapters.length > 0;
  const hasScope = !!proposal.scope && proposal.scope.length > 0;
  const detailsAnchor = hasScope ? "#escopo" : "#proposta";
  const host = proposal.host ?? "prx";
  const brand = hostBrand(host);
  const isViraWeb = host === "viraweb";

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: [proposal.accentColor, ...brand.confetti],
    });
  };

  const handleWhatsApp = (context: string) => {
    triggerConfetti();
    const msg = `${proposal.whatsapp.defaultMessage} [Assunto: ${context}]`;
    const url = `https://wa.me/${proposal.whatsapp.phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Intro Animada Mandatória: ViraWeb ✕ Marca ou PRX ✕ Marca */}
      {!introFinished && isViraWeb && (
        <ViraWebPartnerIntro
          partnerName={proposal.clientBrand.name}
          partnerLogo={proposal.clientBrand.logoVector}
          partnerCaption={proposal.clientBrand.tagline}
          eyebrow={proposal.intro?.eyebrow}
          title={proposal.intro?.title}
          tagline={proposal.intro?.tagline}
          quote={proposal.intro?.quote ?? proposal.hero.headline}
          onExitStart={() => setHeroRevealing(true)}
          onComplete={() => setIntroFinished(true)}
        />
      )}
      {!introFinished && !isViraWeb && (
        <PrxPartnerIntro
          partnerName={proposal.clientBrand.name}
          partnerLogoSvg={proposal.clientBrand.logoSvg}
          partnerLogoPng={proposal.clientBrand.logoPngOnDark ?? proposal.clientBrand.logoPng}
          partnerLogoWidth={proposal.clientBrand.logoWidth}
          partnerLogoHeight={proposal.clientBrand.logoHeight}
          partnerLogoShape={proposal.clientBrand.logoShape}
          partnerCaption={proposal.clientBrand.tagline}
          title={proposal.intro?.title}
          tagline={proposal.intro?.tagline}
          quote={proposal.intro?.quote ?? proposal.hero.headline}
          onExitStart={() => setHeroRevealing(true)}
          onComplete={() => setIntroFinished(true)}
        />
      )}

      <div
        className="min-h-screen bg-white text-zinc-900 flex flex-col selection:bg-(--brand-accent) selection:text-white"
        style={
          {
            "--brand-accent": proposal.accentColor,
          } as React.CSSProperties
        }
      >
        {/* Cabeçalho */}
        <Header
          host={host}
          partnerName={proposal.clientBrand.name}
          partnerLogoVector={proposal.clientBrand.logoVector}
          partnerLogoSvg={proposal.clientBrand.logoSvg}
          partnerLogoPng={proposal.clientBrand.logoPng}
          partnerLogoWidth={proposal.clientBrand.logoWidth}
          partnerLogoHeight={proposal.clientBrand.logoHeight}
          partnerLogoShape={proposal.clientBrand.logoShape}
          accentColor={proposal.accentColor}
          dateFormatted={proposal.hero.dateFormatted}
          whatsappPhone={proposal.whatsapp.phone}
          whatsappMessage={proposal.whatsapp.defaultMessage}
          ctaLabel={isViraWeb ? "Aprovar Proposta" : undefined}
          ctaShortLabel={isViraWeb ? "Aprovar" : undefined}
        />

        <main className="flex-1">
          {/* Seção Hero: Composição em Proporção Áurea */}
          <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-zinc-200/80 overflow-hidden">
            {/* Linhas de grade sutis no background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Coluna Dominante (61.8% / 7 cols) - Narrativa e Título */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-zinc-100 border border-zinc-200/80 text-xs font-mono text-zinc-700">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: proposal.accentColor }}
                    />
                    <span>{proposal.hero.badge}</span>
                  </div>

                  <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.08] text-balance">
                    {proposal.hero.headline.split(" ").map((word, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && " "}
                        <span
                          className={`hero-word inline-block ${heroRevealing ? "is-revealing" : ""}`}
                          style={{ "--d": `${120 + idx * 45}ms` } as React.CSSProperties}
                        >
                          {word}
                        </span>
                      </React.Fragment>
                    ))}
                  </h1>

                  <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl text-pretty">
                    {proposal.hero.subheadline}
                  </p>

                  <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleWhatsApp("Aprovação da Proposta")}
                      style={{ backgroundColor: proposal.accentColor }}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-4 min-h-12 text-sm sm:text-base font-bold text-white rounded-sm cursor-pointer shadow-sm hover:opacity-95 active:scale-[0.99] transition-all"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>{proposal.hero.primaryCta ?? "Formalizar Parceria"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={detailsAnchor}
                      className="inline-flex items-center justify-center gap-2 px-5 py-4 min-h-12 text-sm sm:text-base font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200/80 rounded-sm cursor-pointer transition-colors"
                    >
                      <span>{proposal.hero.secondaryCta ?? "Ver Escopo e Detalhes"}</span>
                    </a>
                  </div>
                </div>

                {/* Coluna Complementar (38.2% / 5 cols) - Card de Parceria e Métricas */}
                <div className="lg:col-span-5">
                  <div className="rounded-md border border-zinc-200/80 bg-zinc-50/80 p-6 sm:p-8 shadow-xs">
                    <div className="flex items-center justify-between pb-5 border-b border-zinc-200/60">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                          {proposal.hero.panelLabel ?? "Ecossistema"}
                        </span>
                        <p className="text-base font-bold text-zinc-900 mt-0.5">
                          {brand.name} ✕ {proposal.clientBrand.name}
                        </p>
                      </div>
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-sm bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        {proposal.hero.panelStatus ?? "Ativa"}
                      </span>
                    </div>

                    {/* Métricas e Indicadores de Impacto */}
                    {proposal.metrics && proposal.metrics.length > 0 && (
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        {proposal.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-sm bg-white border border-zinc-200/70"
                          >
                            <span
                              className="text-2xl sm:text-3xl font-extrabold tracking-tight block"
                              style={{ color: proposal.accentColor }}
                            >
                              {metric.value}
                            </span>
                            <span className="text-xs font-semibold text-zinc-800 block mt-1">
                              {metric.label}
                            </span>
                            {metric.detail && (
                              <span className="text-[11px] text-zinc-500 block mt-0.5">
                                {metric.detail}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 pt-5 border-t border-zinc-200/60 flex items-center justify-between text-xs text-zinc-500">
                      <span>Validade da Proposta</span>
                      <span className="font-semibold text-zinc-800">
                        30 dias a partir da emissão
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção Resumo Executivo */}
          <section className="py-16 sm:py-20 bg-zinc-50/50 border-b border-zinc-200/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                {proposal.executiveSummary.label ?? "01 • Diagnóstico & Oportunidade"}
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 text-balance">
                {proposal.executiveSummary.title}
              </h2>

              <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-700 leading-relaxed">
                <p>{proposal.executiveSummary.paragraph1}</p>
                {proposal.executiveSummary.paragraph2 && (
                  <p>{proposal.executiveSummary.paragraph2}</p>
                )}
                {proposal.executiveSummary.paragraph3 && (
                  <p>{proposal.executiveSummary.paragraph3}</p>
                )}
              </div>

              {proposal.executiveSummary.quote && (
                <blockquote
                  className="mt-8 p-5 sm:p-6 border-l-4 bg-white rounded-r-md shadow-2xs italic text-zinc-800 text-base sm:text-lg"
                  style={{ borderColor: proposal.accentColor }}
                >
                  &ldquo;{proposal.executiveSummary.quote}&rdquo;
                </blockquote>
              )}
            </div>
          </section>

          {/* Capítulos Narrativos da Proposta */}
          {hasChapters && proposal.chapters && (
            <ProposalChapters
              id="proposta"
              chapters={proposal.chapters}
              accentColor={proposal.accentColor}
              showcase={
                proposal.portfolio && {
                  portfolio: proposal.portfolio,
                  brandName: proposal.clientBrand.name,
                  logo: proposal.clientBrand.logoVector,
                  subdomain: proposal.subdomain,
                  siteLabel: `${proposal.subdomain}.${brand.siteLabel}${proposal.portfolio.path}`,
                }
              }
            />
          )}

          {/* Seção Pilares Estratégicos */}
          <section
            id={!hasChapters && !hasScope ? "proposta" : undefined}
            className={`py-16 sm:py-24 border-b border-zinc-200/80 ${
              hasChapters ? "bg-zinc-50/50" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                  {proposal.pillarsSection?.label ?? "02 • Arquitetura de Entrega"}
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 text-balance">
                  {proposal.pillarsSection?.title ?? "Pilares de Atuação da Parceria"}
                </h2>
                {(proposal.pillarsSection?.description || !proposal.pillarsSection) && (
                  <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
                    {proposal.pillarsSection?.description ??
                      "Estrutura desenhada para garantir tração imediata, retenção de base e conversão mensurável."}
                  </p>
                )}
              </div>

              <div
                className={`mt-12 grid grid-cols-1 gap-6 ${pillarsGridClass(proposal.pillars.length)}`}
              >
                {proposal.pillars.map((pillar) => (
                  <article
                    key={pillar.number}
                    className={`p-6 rounded-md border border-zinc-200/80 hover:bg-white hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between print-avoid-break ${
                      hasChapters ? "bg-white" : "bg-zinc-50/50"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="font-mono text-sm font-bold px-2 py-0.5 rounded-sm bg-white border border-zinc-200"
                          style={{ color: proposal.accentColor }}
                        >
                          {pillar.number}
                        </span>
                        {pillar.tag && (
                          <span className="text-[11px] font-mono text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded-sm">
                            {pillar.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-zinc-950 mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Manifesto de fechamento da seção */}
              {proposal.pillarsSection?.statement && (
                <div className="mt-14 sm:mt-20 max-w-3xl print-avoid-break">
                  {proposal.pillarsSection.statement.lead?.map((line) => (
                    <p
                      key={line}
                      className="text-lg sm:text-xl text-zinc-700 leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                  <p
                    className="mt-4 text-3xl sm:text-5xl font-black tracking-tight leading-[1.08] text-balance"
                    style={{ color: proposal.accentColor }}
                  >
                    {proposal.pillarsSection.statement.emphasis}
                  </p>
                  {proposal.pillarsSection.statement.trail && (
                    <div className="mt-6 space-y-1">
                      {proposal.pillarsSection.statement.trail.map((line) => (
                        <p
                          key={line}
                          className="text-lg sm:text-xl font-semibold text-zinc-900 leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* Seção de Escopo Detalhado */}
          {hasScope && proposal.scope && (
          <section id="escopo" className="py-16 sm:py-24 border-b border-zinc-200/80 bg-zinc-50/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                  03 • Escopo Cirúrgico
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                  Entregas e Responsabilidades
                </h2>
                <p className="mt-3 text-base text-zinc-600">
                  Cada componente detalhado com precisão de engenharia para evitar ruídos de alinhamento.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {proposal.scope.map((group, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-md bg-white border border-zinc-200/80 shadow-2xs"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <FileCheck className="w-5 h-5 text-zinc-400" />
                      <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                        {group.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-zinc-700">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: proposal.accentColor }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {group.highlight && (
                      <div className="mt-6 pt-4 border-t border-zinc-100 text-xs font-medium text-zinc-500">
                        ★ {group.highlight}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          )}

          {/* Calculadora do pacote: preço conforme os módulos escolhidos */}
          {proposal.calculator && (
            <ProposalCalculator
              calculator={proposal.calculator}
              accentColor={proposal.accentColor}
              whatsappPhone={proposal.whatsapp.phone}
              messageIntro={proposal.whatsapp.defaultMessage}
              onApprove={triggerConfetti}
            />
          )}

          {/* Oferta de preço único com pagamento por Pix ou cartão */}
          {proposal.offer && (
            <ProposalOffer
              offer={proposal.offer}
              accentColor={proposal.accentColor}
              whatsappPhone={proposal.whatsapp.phone}
              messageIntro={proposal.whatsapp.defaultMessage}
              onApprove={triggerConfetti}
            />
          )}

          {/* Seção de Investimento e Planos */}
          {proposal.investment && proposal.investment.plans.length > 0 && (
            <section className="py-16 sm:py-24 border-b border-zinc-200/80 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                    04 • Modelo Comercial
                  </span>
                  <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                    {proposal.investment.title || "Condições de Parceria e Investimento"}
                  </h2>
                  <p className="mt-3 text-base text-zinc-600">
                    {proposal.investment.description ||
                      "Formatos flexíveis ajustados à maturidade da integração e ao volume da base de clientes."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                  {proposal.investment.plans.map((plan, idx) => (
                    <div
                      key={idx}
                      className={`relative p-7 sm:p-8 rounded-md flex flex-col justify-between transition-all ${
                        plan.highlighted
                          ? "bg-white border-2 shadow-lg"
                          : "bg-zinc-50/60 border border-zinc-200/80"
                      }`}
                      style={{
                        borderColor: plan.highlighted ? proposal.accentColor : undefined,
                      }}
                    >
                      {plan.highlighted && (
                        <span
                          className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-sm text-[11px] font-bold uppercase tracking-wider text-white shadow-2xs"
                          style={{ backgroundColor: proposal.accentColor }}
                        >
                          Recomendado
                        </span>
                      )}

                      <div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-2">
                          {plan.name}
                        </h3>

                        <div className="my-6">
                          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                            {plan.price}
                          </span>
                          <span className="text-xs text-zinc-500 ml-2">
                            / {plan.period}
                          </span>
                        </div>

                        <ul className="space-y-3 mb-8 text-sm text-zinc-700">
                          {plan.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5">
                              <CheckCircle2
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: proposal.accentColor }}
                              />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleWhatsApp(`Plano: ${plan.name}`)}
                        className={`w-full py-3.5 px-4 min-h-12 text-sm font-bold rounded-sm cursor-pointer transition-all flex items-center justify-center gap-2 ${
                          plan.highlighted
                            ? "text-white shadow-xs hover:opacity-95"
                            : "bg-white border border-zinc-200 text-zinc-800 hover:bg-zinc-100"
                        }`}
                        style={{
                          backgroundColor: plan.highlighted ? proposal.accentColor : undefined,
                        }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{plan.ctaText || "Selecionar Este Formato"}</span>
                      </button>
                    </div>
                  ))}
                </div>

                {proposal.investment.guaranteeText && (
                  <p className="mt-8 text-center text-xs text-zinc-500 font-mono">
                    ★ {proposal.investment.guaranteeText}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* CTA Final de Fechamento */}
          <section className="py-20 sm:py-28 bg-zinc-50/70 border-b border-zinc-200/80 text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <span
                className="w-3 h-3 rounded-full inline-block mb-4"
                style={{ backgroundColor: proposal.accentColor }}
              />
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 leading-tight text-balance">
                {proposal.closing?.headline ?? "Vamos construir o próximo nível juntos?"}
              </h2>
              {proposal.closing?.brandLine && (
                <p className="mt-4 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-zinc-500">
                  {proposal.closing.brandLine}
                </p>
              )}

              {proposal.closing?.lines && proposal.closing.lines.length > 0 && (
                <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                  {proposal.closing.lines.map((line) => (
                    <div
                      key={line.title}
                      className="p-5 rounded-md bg-white border border-zinc-200/80 border-l-4"
                      style={{ borderLeftColor: proposal.accentColor }}
                    >
                      <dt className="text-base font-extrabold tracking-tight text-zinc-950">
                        {line.title}
                      </dt>
                      {line.text && (
                        <dd className="mt-1 text-sm sm:text-base text-zinc-600">{line.text}</dd>
                      )}
                    </div>
                  ))}
                </dl>
              )}

              <p className="mt-8 text-base sm:text-lg text-zinc-600 max-w-xl mx-auto">
                {proposal.closing?.description ??
                  "Clique abaixo para falar diretamente com a liderança da PRX e formalizar o início da operação."}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => handleWhatsApp("Aprovação Direta")}
                  style={{ backgroundColor: proposal.accentColor }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 min-h-12 text-base font-bold text-white rounded-sm cursor-pointer shadow-sm hover:opacity-95 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Aprovar Proposta Agora</span>
                </button>
              </div>

              {proposal.closing?.signature && (
                <p className="mt-12 text-sm font-semibold tracking-wide text-zinc-900">
                  {proposal.closing.signature}
                </p>
              )}
            </div>
          </section>
        </main>

        {/* Rodapé Mandatório Desenvolvido por ViraWeb */}
        <Footer partnerName={proposal.clientBrand.name} host={host} />
      </div>
    </>
  );
}
