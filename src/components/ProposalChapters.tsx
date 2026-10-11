// Hello World
import React from "react";
import type {
  ProposalChapter,
  ProposalContentBlock,
} from "@/data/proposals/types";

interface ProposalChaptersProps {
  chapters: ProposalChapter[];
  accentColor: string;
  id?: string;
}

// Superfície levemente tingida com a cor da marca (5%), legível em tela e impressão
const TINTED_SURFACE =
  "bg-[color-mix(in_srgb,var(--brand-accent)_5%,white)] border-[color-mix(in_srgb,var(--brand-accent)_22%,white)]";

function stepsGridClass(count: number): string {
  if (count === 3) return "sm:grid-cols-3";
  if (count >= 2) return "sm:grid-cols-2";
  return "";
}

function ContentBlock({
  block,
  accentColor,
}: {
  block: ProposalContentBlock;
  accentColor: string;
}) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed text-pretty">
          {block.text}
        </p>
      );

    case "statement":
      return (
        <div className="py-2">
          {block.label && (
            <p className="text-sm font-medium text-zinc-500 mb-2">{block.label}</p>
          )}
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 leading-snug text-balance">
            {block.text}
          </p>
        </div>
      );

    case "quote":
      return (
        <figure
          className="border-l-4 pl-5 sm:pl-6 py-1 print-avoid-break"
          style={{ borderColor: accentColor }}
        >
          {block.label && (
            <figcaption className="text-sm font-medium text-zinc-500 mb-2">
              {block.label}
            </figcaption>
          )}
          <blockquote className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 leading-snug text-balance">
            &ldquo;{block.text}&rdquo;
          </blockquote>
        </figure>
      );

    case "list":
      return (
        <div>
          {block.intro && (
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-4">
              {block.intro}
            </p>
          )}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-zinc-800">
                <span
                  aria-hidden="true"
                  className="mt-[0.6em] h-0.5 w-3 shrink-0 rounded-sm"
                  style={{ backgroundColor: accentColor }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "tags":
      return (
        <div>
          {block.intro && (
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-4">
              {block.intro}
            </p>
          )}
          <ul className="flex flex-wrap gap-2">
            {block.items.map((item) => (
              <li
                key={item}
                className="px-3 py-1.5 text-sm font-medium text-zinc-800 bg-zinc-50 border border-zinc-200/80 rounded-sm"
              >
                {item}
              </li>
            ))}
          </ul>
          {block.caption && (
            <p className="mt-3 text-sm text-zinc-500">{block.caption}</p>
          )}
        </div>
      );

    case "facts":
      return (
        <div className="print-avoid-break">
          {block.label && (
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              {block.label}
            </p>
          )}
          <dl className="grid grid-cols-3 gap-3 sm:gap-4">
            {block.items.map((fact) => (
              <div
                key={fact.value}
                className="flex flex-col-reverse justify-end p-4 rounded-sm bg-zinc-50/80 border border-zinc-200/70"
              >
                <dt className="mt-1 text-xs sm:text-sm font-medium text-zinc-700">
                  {fact.label}
                </dt>
                <dd
                  className="text-xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: accentColor }}
                >
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "formula": {
      const detailed = block.items.filter((item) => item.text);
      return (
        <div className="print-avoid-break">
          {block.intro && (
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-3">
              {block.intro}
            </p>
          )}
          <p
            className={`flex flex-wrap items-center gap-x-3 gap-y-2 p-5 sm:p-6 rounded-md border text-lg sm:text-2xl font-extrabold tracking-tight text-zinc-950 ${TINTED_SURFACE}`}
          >
            {block.items.map((item, idx) => (
              <React.Fragment key={item.title}>
                {idx > 0 && (
                  <span className="font-light" style={{ color: accentColor }}>
                    +
                  </span>
                )}
                <span>{item.title}</span>
              </React.Fragment>
            ))}
          </p>
          {block.caption && (
            <p className="mt-3 text-base sm:text-lg text-zinc-700 leading-relaxed">
              {block.caption}
            </p>
          )}
          {detailed.length > 0 && (
            <dl className={`mt-4 grid grid-cols-1 gap-4 ${stepsGridClass(detailed.length)}`}>
              {detailed.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-md bg-white border border-zinc-200/80"
                >
                  <dt className="text-base font-bold text-zinc-950">{item.title}</dt>
                  <dd className="mt-1.5 text-sm text-zinc-600 leading-relaxed">{item.text}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      );
    }

    case "steps":
      return (
        <div className="print-avoid-break">
          {block.title && (
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-zinc-950 mb-2">
              {block.title}
            </h3>
          )}
          {block.intro && (
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-4">
              {block.intro}
            </p>
          )}
          <ol className={`grid grid-cols-1 gap-4 ${stepsGridClass(block.items.length)}`}>
            {block.items.map((step, idx) => (
              <li
                key={step.title}
                className="p-5 rounded-md bg-zinc-50/70 border border-zinc-200/80 border-t-2"
                style={{ borderTopColor: accentColor }}
              >
                <span
                  className="block font-mono text-xs font-bold"
                  style={{ color: accentColor }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="block mt-2 text-base font-bold text-zinc-950">
                  {step.title}
                </span>
                {step.text && (
                  <span className="block mt-1.5 text-sm text-zinc-600 leading-relaxed">
                    {step.text}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      );

    case "cards":
      return (
        <div className="grid grid-cols-1 gap-4">
          {block.items.map((card) => (
            <article
              key={card.title}
              className="p-5 sm:p-6 rounded-md bg-white border border-zinc-200/80 shadow-2xs print-avoid-break"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">{card.title}</h3>
                {card.meta && (
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: accentColor }}
                  >
                    {card.meta}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      );

    case "feature":
      return (
        <div
          className={`p-6 sm:p-8 rounded-md border border-t-4 print-avoid-break ${TINTED_SURFACE}`}
          style={{ borderTopColor: accentColor }}
        >
          {block.label && (
            <p
              className="text-xs font-mono font-semibold uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              {block.label}
            </p>
          )}
          <p className="mt-2 text-2xl sm:text-4xl font-black tracking-tight text-zinc-950 leading-tight text-balance">
            {block.title}
          </p>
          {block.description && (
            <p className="mt-3 text-base sm:text-lg font-medium text-zinc-800 leading-relaxed text-pretty">
              {block.description}
            </p>
          )}
          {block.caption && (
            <p className="mt-4 pt-4 border-t border-zinc-200/80 text-sm text-zinc-600">
              {block.caption}
            </p>
          )}
        </div>
      );
  }
}

export function ProposalChapters({ chapters, accentColor, id }: ProposalChaptersProps) {
  return (
    <section id={id} className="border-b border-zinc-200/80 bg-white">
      {chapters.map((chapter, idx) => {
        const headingId = `capitulo-${idx + 1}`;
        return (
          <article
            key={chapter.title}
            aria-labelledby={headingId}
            className={`py-16 sm:py-24 ${idx > 0 ? "border-t border-zinc-200/80" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
              {/* Coluna de contexto (38.2%) — número e título fixos durante a leitura */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
                <h2
                  id={headingId}
                  className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] text-balance"
                >
                  {chapter.number && (
                    <span
                      className="block font-mono text-5xl sm:text-7xl font-extrabold tracking-tighter mb-4 sm:mb-6"
                      style={{ color: accentColor }}
                    >
                      {chapter.number}
                    </span>
                  )}
                  <span className="block">{chapter.title}</span>
                </h2>
                {chapter.kicker && (
                  <p className="mt-4 text-sm font-mono font-semibold uppercase tracking-wider text-zinc-500">
                    {chapter.kicker}
                  </p>
                )}
                <span
                  aria-hidden="true"
                  className="hidden lg:block mt-8 h-0.5 w-16 rounded-sm"
                  style={{ backgroundColor: accentColor }}
                />
              </div>

              {/* Coluna narrativa dominante (61.8%) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-7 min-w-0">
                {chapter.blocks.map((block, blockIdx) => (
                  <ContentBlock key={blockIdx} block={block} accentColor={accentColor} />
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
