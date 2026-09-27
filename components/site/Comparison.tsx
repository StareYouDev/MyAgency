"use client";

import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { CheckCircle, CrossCircle, ScribbleArrow } from "@/components/ui/icons";
import { comparison } from "@/lib/copy";
import { comparisonRows } from "@/lib/content";
import { cn } from "@/lib/utils";

const COLS: { key: "projectone" | "agency" | "freelancer" | "diy"; label: string }[] = [
  { key: "projectone", label: comparison.columns[0] },
  { key: "agency", label: comparison.columns[1] },
  { key: "freelancer", label: comparison.columns[2] },
  { key: "diy", label: comparison.columns[3] },
];

/** 150px label + 4 × 1fr columns with a 56px gutter — solved from the reference. */
const GRID =
  "grid grid-cols-[150px_repeat(4,1fr)] gap-x-[56px]";

export function Comparison() {
  return (
    <section className="bg-cream px-4 sm:px-6 lg:px-10 lg:pt-[92px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Hairline that opens the block */}
        <div className="border-t border-line" />

        {/* ---- Head (centred) ---- */}
        <div className="pt-16 lg:pt-24">
          <div className="relative mx-auto max-w-[592px] text-center">
            <SplitReveal as="p" mode="words" y={10} className="eyebrow text-ink">
              {comparison.eyebrow}
            </SplitReveal>

            <SplitReveal
              as="h2"
              mode="words"
              stagger={0.06}
              y={26}
              className="h-display mx-auto mt-6 max-w-[524px] text-[40px] text-ink sm:text-[54px] lg:text-[61px] lg:leading-[67px]"
            >
              {comparison.heading}
            </SplitReveal>

            <ScrollFade y={16}>
              <p className="mx-auto mt-4 max-w-[565px] font-display text-[16px] font-bold leading-[1.3] text-ink sm:text-[18px]">
                {comparison.description}
              </p>
            </ScrollFade>

            {/* Handwritten aside — hangs off the right of the centred column */}
            <div className="pointer-events-none mt-8 flex flex-col items-center rotate-[-18deg] lg:absolute lg:left-[95%] lg:top-[74px] lg:mt-0 lg:w-[180px] lg:items-start">
              <p className="w-[118px] text-center font-hand text-[17px] leading-[1.35] text-ink">
                {comparison.annotation[0]}
                <br />
                {comparison.annotation[1]}
              </p>
              <ScribbleArrow className="-ml-1 mt-1 h-14 w-14 text-ink" />
            </div>
          </div>
        </div>

        {/* ---- Table ---- */}
        <div className="mt-14 overflow-x-auto scrollbar-none lg:mt-[100px]">
          <div className="min-w-[1182px]">
            {/* Header */}
            <div className={cn(GRID, "items-center pb-4")}>
              <div />
              {COLS.map((c) => (
                <div key={c.key}>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-[4px] px-3 py-1.5 font-display text-[11px] font-bold uppercase leading-none tracking-[0.04em]",
                      c.key === "projectone" ? "bg-lime text-ink" : "bg-ink text-paper",
                    )}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <ScrollFade
                key={row.label}
                y={14}
                delay={i * 0.05}
                className={cn(GRID, "items-center border-t border-line py-5")}
              >
                <div className="pl-5 font-display text-[11px] font-bold uppercase tracking-[0.07em] text-ink/60">
                  {row.label}
                </div>

                {COLS.map((c) => {
                  const text = row[c.key as "projectone" | "agency" | "freelancer" | "diy"];
                  const win = c.key === "projectone";
                  return (
                    <div key={c.key} className="flex items-center gap-2">
                      {win ? <CheckCircle /> : <CrossCircle />}
                      <span
                        className={cn(
                          "font-display text-[15.5px] leading-tight",
                          win ? "font-bold text-ink" : "font-medium text-ink/70",
                        )}
                      >
                        {text}
                      </span>
                    </div>
                  );
                })}
              </ScrollFade>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>

        {/* ---- Closing CTA ---- */}
        <ScrollFade y={22} className="mt-14 text-center lg:mt-20">
          <p className="mx-auto max-w-[260px] font-display text-[18px] font-bold leading-6 text-ink lg:text-[20px]">
            Ready for a design partner that makes it simple?
          </p>

          <a
            href="#contact"
            className="btn-hard mt-8 inline-flex items-center gap-[15px] rounded-[10px] border-[1.5px] border-ink bg-lime py-2 pl-[25px] pr-[9px] font-display text-[12px] font-bold uppercase leading-none tracking-[0.04em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            {comparison.cta}
            <span className="grid h-8 w-8 place-items-center rounded-[4px] bg-ink text-paper">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M3 8h9M8.4 4.4 12 8l-3.6 3.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </ScrollFade>

        <div className="pb-24 lg:pb-[93px]" />
      </div>
    </section>
  );
}
