"use client";

import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { Marquee } from "@/components/motion/Marquee";
import { ScribbleArrow } from "@/components/ui/icons";
import { process as sprint } from "@/lib/copy";
import { badgeMarquee, processSteps, timelineTabs } from "@/lib/content";

/** Column geometry solved from the reference: 5 × 231px with an 11px gutter. */
const COL_START = ["0%", "20.17%", "40.33%", "60.5%", "80.67%"];
const COL_W = "19.25%";
const COL_W2 = "39.42%";

/** Offsets are relative to the top of the tab row (tabs are 24px tall). */
const layout = [
  { left: COL_START[0], width: COL_W, top: 72 },
  { left: COL_START[1], width: COL_W2, top: 141 },
  { left: COL_START[2], width: COL_W, top: 251 },
  { left: COL_START[3], width: COL_W, top: 251 },
  { left: COL_START[3], width: COL_W, top: 379 },
  { left: COL_START[4], width: COL_W, top: 392 },
];

function StepCard({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="relative rounded-[5px] border-[1.5px] border-ink bg-lime p-4 shadow-hard">
      <span
        aria-hidden
        className="absolute -right-2 -top-2 grid h-[26px] w-[26px] place-items-center rounded-full border-[1.5px] border-ink bg-ink font-display text-[12px] font-bold text-lime"
      >
        {n}
      </span>
      <p className="font-display text-[17px] font-bold leading-tight text-ink">{title}</p>
      <p className="mt-2 font-display text-[13.5px] leading-[1.35] font-medium text-ink/80">{body}</p>
    </div>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-paper">
      <div className="relative overflow-clip rounded-t-[24px] bg-panel px-4 pb-16 pt-16 sm:px-6 lg:px-10 lg:pb-24 lg:pt-24">
        <div className="relative mx-auto max-w-[1200px]">
          {/* ---------- Heading ---------- */}
          <div className="text-center">
            <SplitReveal as="p" mode="words" stagger={0.03} y={10} className="eyebrow text-ink">
              {sprint.eyebrow}
            </SplitReveal>

            <SplitReveal
              as="h2"
              mode="words"
              stagger={0.06}
              y={24}
              className="h-display mx-auto mt-6 max-w-[16ch] text-[46px] text-ink sm:text-[68px] lg:text-[90px] lg:leading-[0.95]"
            >
              {sprint.headingA} <span className="mark-lime">{sprint.headingMark}</span>
            </SplitReveal>

            <ScrollFade y={18}>
              <p className="mx-auto mt-7 max-w-[560px] font-display text-[17px] font-medium leading-[1.35] text-ink sm:text-[20px]">
                {sprint.description}
              </p>
            </ScrollFade>

            {/* Guarantee pills */}
            <ScrollFade y={16} stagger={0.07} targets="li" as="ul" className="mx-auto mt-8 flex max-w-[560px] flex-wrap justify-center gap-2.5">
              {sprint.pills.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 rounded-[8px] bg-ink-700 px-3.5 py-2.5 font-display text-[13px] font-bold text-paper"
                >
                  <span aria-hidden className="h-2 w-2 shrink-0 rounded-[2px] bg-lime" />
                  {p}
                </li>
              ))}
            </ScrollFade>
          </div>

          {/* Handwritten annotation pointing at the board */}
          <div className="pointer-events-none absolute right-[2%] top-[330px] hidden rotate-[-14deg] lg:block">
            <p className="font-hand text-[17px] leading-[1.35] text-ink">
              {sprint.annotation[0]}
              <br />
              {sprint.annotation[1]}
            </p>
            <ScribbleArrow className="absolute -left-12 top-6 h-14 w-12 text-ink" />
          </div>

          {/* ---------- Desktop board ---------- */}
          <div className="relative mt-16 hidden h-[510px] lg:block">
            {/* Column rules */}
            <div aria-hidden className="absolute inset-0 grid grid-cols-5 gap-[11px]">
              {timelineTabs.map((t) => (
                <div key={t} className="border-l border-[#dcdcdc] first:border-l-0" />
              ))}
            </div>

            {/* Phase tabs */}
            <div className="absolute inset-x-0 top-0 grid grid-cols-5 gap-[11px]">
              {timelineTabs.map((t) => (
                <div
                  key={t}
                  className="grid h-6 place-items-center rounded-[6px] bg-[#eaeaea] px-2 text-center font-display text-[9.5px] font-bold uppercase leading-none tracking-[0.04em] text-ink"
                >
                  {t}
                </div>
              ))}
            </div>

            {/* Staggered step cards */}
            {processSteps.map((s, i) => (
              <div
                key={s.n}
                className="absolute"
                style={{ left: layout[i].left, width: layout[i].width, top: layout[i].top }}
              >
                <ScrollFade y={26} delay={i * 0.05}>
                  <StepCard n={s.n} title={s.title} body={s.body} />
                </ScrollFade>
              </div>
            ))}
          </div>

          {/* ---------- Mobile / tablet: simple vertical steps ---------- */}
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
            {processSteps.map((s) => (
              <li key={s.n}>
                <ScrollFade y={22}>
                  <StepCard n={s.n} title={s.title} body={s.body} />
                </ScrollFade>
              </li>
            ))}
          </ol>

          {/* ---------- Badge strip closing out the timeline ---------- */}
          <div className="mt-14 border-t border-[#dcdcdc] pt-8 lg:mt-16 lg:pt-9">
            <Marquee duration={34} className="overflow-hidden">
              {badgeMarquee.map((b) => (
                <span
                  key={b}
                  className="mx-8 flex items-center gap-8 font-display text-[16px] font-bold uppercase tracking-[0.02em] text-ink-800 sm:text-[20px]"
                >
                  {b}
                  <span aria-hidden className="h-2 w-2 rotate-45 bg-lime ring-1 ring-ink" />
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
