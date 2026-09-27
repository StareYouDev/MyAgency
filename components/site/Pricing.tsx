"use client";

import { useState } from "react";
import Image from "next/image";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { CheckCircle, InfoIcon } from "@/components/ui/icons";
import { hero as heroCopy, pricing, currencies, prices, pricingImages } from "@/lib/copy";
import { carePlusFeatures, includedFeatures, workProjects } from "@/lib/content";
import { cn } from "@/lib/utils";

const SYMBOL: Record<string, string> = { USD: "$", EUR: "€", CAD: "C$", GBP: "£" };

function Badge({ children, tone }: { children: React.ReactNode; tone: "lime" | "ink" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[6px] px-2.5 py-1.5 font-display text-[11px] font-bold uppercase leading-none tracking-[0.04em]",
        tone === "lime" ? "bg-lime text-ink" : "bg-ink text-paper",
      )}
    >
      {children}
    </span>
  );
}

export function Pricing() {
  const [currency, setCurrency] = useState<string>("USD");

  return (
    <section className="relative overflow-clip bg-ink-800">
      {/* ---------------- Dark headline block ---------------- */}
      <div className="relative z-10 px-4 pb-[170px] pt-[136px] sm:px-6 lg:px-10 lg:pt-[150px]">
        <div className="relative mx-auto max-w-[1200px] text-center">
          <SplitReveal as="p" mode="words" y={10} className="eyebrow text-grey-400">
            {pricing.eyebrow}
          </SplitReveal>

          <SplitReveal
            as="h2"
            mode="words"
            stagger={0.055}
            y={26}
            className="h-display mx-auto mt-7 max-w-[712px] text-[34px] text-paper sm:text-[46px] lg:text-[61px] lg:leading-[1.1]"
          >
            {pricing.heading}
          </SplitReveal>

          <ScrollFade y={18}>
            <p className="mx-auto mt-7 max-w-[470px] font-display text-[17px] font-bold leading-[1.35] text-paper sm:text-[19px]">
              {pricing.description}
            </p>
          </ScrollFade>

          {/* Floating mockups either side of the headline */}
          <ScrollFade
            y={30}
            className="pointer-events-none absolute -left-2 top-[250px] hidden w-[220px] rotate-[-6deg] xl:block"
          >
            <Image
              src={pricingImages[1]}
              alt="StareYou site on a phone"
              width={220}
              height={220}
              unoptimized
              className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
            />
          </ScrollFade>
          <ScrollFade
            y={30}
            delay={0.1}
            className="pointer-events-none absolute -right-2 top-[302px] hidden w-[199px] rotate-[7deg] xl:block"
          >
            <Image
              src={pricingImages[2]}
              alt="StareYou site on a laptop"
              width={199}
              height={199}
              unoptimized
              className="h-auto w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
            />
          </ScrollFade>
        </div>
      </div>

      {/* ---------------- Cream field (huge ellipse, as in the reference) ------- */}
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[3600px] w-[3600px] -translate-x-1/2 rounded-full bg-cream"
        />

        <div className="relative z-10 px-4 pb-24 pt-[150px] sm:px-6 lg:px-10 lg:pb-32">
          <div className="mx-auto max-w-[1200px]">
            {/* ---- Section head ---- */}
            <div id="pricing" className="scroll-mt-20 text-center">
              <ScrollFade y={14}>
                <span className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-ink px-3.5 py-1.5 font-display text-[12px] font-bold text-paper">
                  {heroCopy.badge}
                </span>
              </ScrollFade>

              <SplitReveal
                as="h3"
                mode="words"
                stagger={0.06}
                y={24}
                className="h-display mt-6 text-[38px] text-ink sm:text-[50px] lg:text-[61px]"
              >
                {pricing.heading2}
              </SplitReveal>

              <ScrollFade y={16}>
                <p className="mx-auto mt-6 max-w-[340px] font-display text-[19px] font-bold leading-[1.3] text-ink sm:text-[22px]">
                  {pricing.description2}
                </p>
              </ScrollFade>

              <ScrollFade y={14} delay={0.08}>
                <span className="mt-7 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-paper px-4 py-2 font-display text-[13px] font-medium text-ink">
                  <span aria-hidden className="h-2 w-2 rounded-full bg-lime ring-1 ring-ink/25" />
                  {pricing.scarcity}
                </span>
              </ScrollFade>
            </div>

            {/* ---- Three cards ---- */}
            <div className="mt-16 grid items-start gap-6 lg:grid-cols-[370fr_370fr_416fr] lg:gap-[22px]">
              {/* ---- Price card ---- */}
              <ScrollFade y={30} className="rounded-[16px] border-[1.5px] border-ink bg-ink p-7 text-paper sm:p-8">
                <Badge tone="lime">{pricing.planLabel}</Badge>

                <div className="mt-7 flex items-start justify-between gap-4">
                  <div>
                    <p className="flex items-start gap-1">
                      <span className="font-display text-[46px] font-black leading-none tracking-[-0.02em] text-paper">
                        {SYMBOL[currency]}
                        {prices[currency]}
                      </span>
                      <span className="mt-1 font-display text-[13px] font-bold uppercase text-paper">
                        {currency}
                      </span>
                    </p>
                    <p className="mt-2.5 font-display text-[14px] font-bold text-paper">
                      {pricing.cadence}
                    </p>
                  </div>

                  <div className="grid shrink-0 grid-cols-2 gap-2">
                    {currencies.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCurrency(c)}
                        aria-pressed={currency === c}
                        className={cn(
                          "rounded-full px-3 py-1.5 font-display text-[12px] font-bold text-paper",
                          "bg-ink-700 transition-colors hover:bg-ink-600",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime",
                          currency === c && "ring-1 ring-lime",
                        )}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className={cn(
                    "btn-hard mt-7 flex w-full items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-ink bg-lime px-5 py-4",
                    "font-display text-[13px] font-bold uppercase tracking-[0.03em] text-ink",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
                  )}
                >
                  {pricing.cta}
                </a>

                <p className="mt-4 text-center font-display text-[14px] font-medium text-paper">
                  {pricing.questionsLead}{" "}
                  <a href="#contact" className="font-bold underline underline-offset-2 hover:text-lime">
                    {pricing.questionsLink}
                  </a>
                </p>

                <hr className="my-7 border-0 border-t border-ink-700" />

                <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-grey-500">
                  {pricing.includedTitle}
                </p>

                <ul className="mt-5 space-y-3.5">
                  {includedFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-display text-[15px] font-bold leading-tight text-paper">
                      <CheckCircle />
                      {f}
                    </li>
                  ))}
                </ul>
              </ScrollFade>

              {/* ---- Care+ card + ownership note ---- */}
              <div className="flex flex-col gap-[22px]">
                <ScrollFade y={30} className="relative rounded-[16px] border-[1.5px] border-ink bg-lime p-7 sm:p-8">
                  <span className="absolute -top-[18px] left-[58%] flex -translate-x-1/2 items-baseline gap-1 rounded-full border-[1.5px] border-ink bg-ink px-3.5 py-2">
                    <span className="font-display text-[15px] font-black leading-none text-paper">
                      {pricing.carePrice}
                    </span>
                    <span className="font-display text-[10px] font-bold uppercase leading-none text-grey-400">
                      {pricing.careCurrency}
                    </span>
                    <span className="font-display text-[10px] font-bold uppercase leading-none text-grey-400">
                      {pricing.careCadence}
                    </span>
                  </span>

                  <Badge tone="ink">{pricing.careLabel}</Badge>

                  <p className="mt-6 font-display text-[15px] font-bold leading-[1.45] text-ink">
                    {pricing.careBody}
                  </p>

                  <ul className="mt-6 space-y-3.5">
                    {carePlusFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-3 font-display text-[15px] font-bold leading-tight text-ink">
                        <CheckCircle />
                        {f}
                      </li>
                    ))}
                  </ul>
                </ScrollFade>

                <ScrollFade y={30} className="rounded-[16px] border-[1.5px] border-ink bg-white p-7 sm:p-8">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-ink ring-[1.5px] ring-ink">
                    <InfoIcon className="h-4 w-4" />
                  </span>
                  <p className="mt-5 font-display text-[14.5px] font-medium leading-[1.5] text-ink/85">
                    {pricing.careNote}
                  </p>
                </ScrollFade>
              </div>

              {/* ---- See Work card ---- */}
              <ScrollFade y={30} className="rounded-[16px] border-[1.5px] border-ink bg-ink p-7 text-paper sm:p-8">
                <h3 className="font-display text-[38px] font-black leading-none tracking-[-0.02em] text-paper sm:text-[46px]">
                  {pricing.workTitle}
                </h3>
                <p className="mt-5 max-w-[250px] font-display text-[15px] font-bold leading-[1.4] text-paper">
                  {pricing.workSub}
                </p>

                <ul className="mt-9 flex flex-wrap gap-2.5">
                  {workProjects.map((w) => (
                    <li key={w.name}>
                      <a
                        href={w.image}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-[8px] border border-ink-600 px-3.5 py-2.5",
                          "font-display text-[12px] font-bold uppercase tracking-[0.03em] text-paper",
                          "transition-colors hover:border-lime hover:text-lime",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime",
                        )}
                      >
                        {w.name}
                        <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </ScrollFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
