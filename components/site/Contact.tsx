"use client";

import { useState } from "react";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { CheckCircle } from "@/components/ui/icons";
import { contact as copy } from "@/lib/copy";

const fieldBase =
  "w-full rounded-[10px] border-[1.5px] border-ink bg-card px-5 font-display text-[15px] text-ink placeholder:text-ink/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-lime";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-paper px-4 sm:px-6 lg:px-10">
      {/* Soft panel behind the form — the reference bows the top edge with a wide arc */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 top-[509px] bg-panel"
        style={{ borderRadius: "50% 50% 0 0 / 52px 52px 0 0" }}
      />

      <div className="relative mx-auto max-w-[1200px] pb-28 pt-[92px] lg:pb-32">
        {/* ---------------- Head ---------------- */}
        <div className="text-center">
          <ScrollFade y={12}>
            <span className="eyebrow inline-flex items-center gap-2 text-ink">
              <span aria-hidden className="h-2 w-2 rounded-full bg-lime ring-1 ring-ink" />
              {copy.eyebrow}
            </span>
          </ScrollFade>

          <SplitReveal
            as="h2"
            mode="words"
            stagger={0.05}
            y={26}
            className="h-display mx-auto mt-6 max-w-[815px] text-[36px] text-ink sm:text-[48px] lg:text-[61px] lg:leading-[67px]"
          >
            {copy.heading}
          </SplitReveal>

          <ScrollFade y={16}>
            <p className="mx-auto mt-6 max-w-[560px] font-display text-[17px] font-medium leading-[1.45] text-ink/75">
              {copy.description}
            </p>
          </ScrollFade>
        </div>

        {/* ---------------- Form ---------------- */}
        <ScrollFade y={30} className="mx-auto mt-20 max-w-[791px] lg:mt-24">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-[16px] border-[1.5px] border-ink bg-lime p-6 shadow-hard sm:px-8 sm:pb-8 sm:pt-8"
          >
            <h3 className="font-display text-[26px] font-black leading-none tracking-[-0.02em] text-ink sm:text-[30px]">
              {copy.formHeading}
            </h3>

            <label className="mt-8 block">
              <span className="sr-only">{copy.fields.name}</span>
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                placeholder={copy.fields.name}
                className={`${fieldBase} h-[50px]`}
              />
            </label>

            <label className="mt-[18px] block">
              <span className="sr-only">{copy.fields.email}</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder={copy.fields.email}
                className={`${fieldBase} h-[50px]`}
              />
            </label>

            <label className="mt-[22px] block">
              <span className="sr-only">{copy.fields.message}</span>
              <textarea
                name="message"
                placeholder={copy.fields.message}
                className={`${fieldBase} h-[100px] resize-y py-3.5`}
              />
            </label>

            <div className="mt-[22px] flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="btn-hard inline-flex items-center gap-2.5 rounded-[10px] border-[1.5px] border-ink bg-ink px-4 py-2 font-display text-[12px] font-bold uppercase leading-none tracking-[0.05em] text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-lime"
              >
                {sent ? "Sent ✓" : copy.submit}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-paper text-ink">
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 8h9M8.4 4.4 12 8l-3.6 3.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <p className="flex items-start gap-1.5 font-display text-[13px] font-bold leading-[1.15] text-ink">
                <CheckCircle className="mt-[1px] h-4 w-4 shrink-0" />
                <span className="max-w-[155px]">100% Money-Back Satisfaction Guarantee</span>
              </p>
            </div>
          </form>
        </ScrollFade>
      </div>
    </section>
  );
}
