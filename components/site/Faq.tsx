"use client";

import { useState } from "react";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { faq as copy } from "@/lib/copy";
import { faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative bg-paper pt-10">
      {/* Dark backdrop behind the top of the panel — matches the reference's shape */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[672px] bg-ink-800" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="rounded-[20px] border-[1.5px] border-ink bg-lime px-6 pb-10 pt-14 shadow-hard sm:px-10 sm:pt-16 sm:pb-12">
          <SplitReveal
            as="h2"
            mode="words"
            stagger={0.06}
            y={24}
            className="h-display text-[46px] text-ink sm:text-[61px]"
          >
            {copy.heading}
          </SplitReveal>

          <div className="mt-9 sm:mt-11">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className={cn(i > 0 && "border-t border-ink/15")}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
                    >
                      <span className="font-display text-[17px] font-bold leading-snug text-ink-800 sm:text-[20px]">
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-lime transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden
                      >
                        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 6.5 8 10.5l4-4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[70ch] pb-6 pr-10 font-display text-[15.5px] font-medium leading-[1.55] text-ink/75 sm:text-[16.5px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ---- Ask AI block closing out the panel ---- */}
          <div className="mt-12 border-t border-ink/15 pt-9">
            <h3 className="font-display text-[26px] font-black leading-none tracking-[-0.02em] text-ink sm:text-[31px]">
              {copy.askHeading}
            </h3>

            <div className="mt-6 flex flex-wrap gap-4">
              {copy.askLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center gap-2.5 rounded-[8px] bg-ink px-4 font-display text-[17px] font-bold text-paper transition-colors hover:bg-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-lime"
                >
                  {l.label}
                  <svg viewBox="0 0 16 16" className="h-[21px] w-[21px]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <path d="M4.5 11.5 11.5 4.5M5.6 4.5h5.9v5.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
