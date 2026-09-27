"use client";

import Image from "next/image";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { Counter } from "@/components/motion/Counter";
import { ScribbleArrow } from "@/components/ui/icons";
import { Testimonials } from "@/components/site/Testimonials";
import { about, jamieAvatar, trust } from "@/lib/copy";
import { gallery, stats, team } from "@/lib/content";

/** The 4x4 board: 8 gallery shots, 4 stat photos and 4 lime stat cards. */
type Cell = { kind: "photo"; src: string } | { kind: "stat"; index: number };

const board: Cell[] = [
  { kind: "photo", src: gallery[0] },
  { kind: "photo", src: gallery[1] },
  { kind: "stat", index: 0 },
  { kind: "photo", src: stats[0].image },

  { kind: "stat", index: 1 },
  { kind: "photo", src: stats[1].image },
  { kind: "photo", src: gallery[2] },
  { kind: "photo", src: gallery[3] },

  { kind: "photo", src: gallery[4] },
  { kind: "photo", src: gallery[5] },
  { kind: "photo", src: gallery[6] },
  { kind: "stat", index: 2 },

  { kind: "photo", src: stats[2].image },
  { kind: "stat", index: 3 },
  { kind: "photo", src: stats[3].image },
  { kind: "photo", src: gallery[7] },
];

function StatCard({ index }: { index: number }) {
  const s = stats[index];
  return (
    <div className="flex h-full flex-col rounded-[10px] border-[1.5px] border-ink bg-lime p-6">
      <p className="font-display text-[46px] font-black leading-none tracking-[-0.03em] text-ink">
        <Counter value={Number(s.value)} />
        {s.suffix}
      </p>
      <p className="mt-3 font-display text-[15px] font-bold leading-tight text-ink">{s.label}</p>
      <p className="mt-auto pt-4 font-display text-[13px] font-medium leading-snug text-ink/70">
        {s.detail}
      </p>
    </div>
  );
}

export function Trust() {
  return (
    <section id="why-us" className="bg-ink-800 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* ---------------- Header ---------------- */}
        <div className="grid gap-8 pt-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pt-[112px]">
          <div>
            <SplitReveal as="p" mode="words" y={10} className="font-display text-[16px] font-medium leading-[19px] text-paper">
              {trust.eyebrow}
            </SplitReveal>
            <SplitReveal
              as="h2"
              mode="words"
              stagger={0.055}
              y={26}
              className="h-display mt-6 max-w-[418px] text-[32px] text-paper sm:text-[39px] lg:leading-[43px]"
            >
              {trust.heading}
            </SplitReveal>
          </div>

          <ScrollFade y={18} className="lg:pt-[11px]">
            <p className="max-w-[484px] font-display text-[18px] font-bold leading-[27px] text-paper">
              {trust.body.split("{Jamie Windell}")[0]}
              <span className="inline-flex items-center gap-1.5 align-middle">
                <Image
                  src={jamieAvatar}
                  alt="Jamie Windell"
                  width={22}
                  height={22}
                  unoptimized
                  className="h-[22px] w-[22px] rounded-full object-cover ring-1 ring-lime"
                />
                <span className="font-bold text-lime">Jamie Windell</span>
              </span>
              {trust.body.split("{Jamie Windell}")[1]}
            </p>
          </ScrollFade>
        </div>

        {/* ---------------- 4x4 board ---------------- */}
        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:mt-[72px] lg:grid-cols-4 lg:gap-8">
          {board.map((cell, i) =>
            cell.kind === "stat" ? (
              <ScrollFade key={`s${i}`} y={26} delay={(i % 4) * 0.05} className="aspect-square">
                <StatCard index={cell.index} />
              </ScrollFade>
            ) : (
              <ScrollFade key={`p${i}`} y={26} delay={(i % 4) * 0.05} className="aspect-square">
                <div className="h-full w-full overflow-hidden rounded-[10px] border-[1.5px] border-ink/10">
                  <Image
                    src={cell.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 277px"
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
              </ScrollFade>
            ),
          )}
        </div>

        {/* ---------------- About ---------------- */}
        <div className="mt-24 grid gap-12 border-t border-white/10 pt-24 lg:mt-[92px] lg:grid-cols-[1.42fr_1fr] lg:gap-[146px] lg:pt-[92px]">
          <div className="relative">
            <SplitReveal
              as="h2"
              mode="words"
              stagger={0.055}
              y={26}
              className="h-display max-w-[620px] text-[32px] text-paper sm:text-[39px] lg:leading-[43px]"
            >
              {about.headingLead} <span className="mark-lime">{about.headingMark}</span>{" "}
              {about.headingTail}
            </SplitReveal>

            {/* Handwritten pointer at the avatar stack */}
            <div className="pointer-events-none relative mt-14 h-[142px] sm:mt-16">
              <div className="absolute left-1 top-[94px] flex items-center">
                {team.map((m, i) => (
                  <span
                    key={m.name}
                    className="group relative block"
                    style={{ marginLeft: i === 0 ? 0 : -11 }}
                  >
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={46}
                      height={46}
                      unoptimized
                      className="h-[46px] w-[46px] rounded-full object-cover ring-[2.5px] ring-lime"
                    />
                    {/* Hover tooltip, matching the reference's dark chip */}
                    <span className="pointer-events-none absolute -top-[78px] left-1/2 z-10 hidden w-[154px] -translate-x-1/2 rounded-[3px] bg-ink-700 px-3 py-2.5 text-left opacity-0 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] transition-opacity duration-200 group-hover:block group-hover:opacity-100 lg:block lg:group-hover:opacity-100">
                      <span className="block font-display text-[12px] font-bold leading-tight text-paper">
                        {m.name}
                      </span>
                      <span className="mt-0.5 block font-display text-[12px] leading-tight text-grey-400">
                        {m.role}
                      </span>
                    </span>
                  </span>
                ))}
              </div>

              <div className="pointer-events-none absolute left-[236px] top-0 rotate-[-18deg] sm:left-[260px]">
                <p className="font-hand text-[15px] leading-[1.35] text-lime">
                  {about.subheadingA}
                  <br />
                  {about.subheadingB}
                </p>
                <ScribbleArrow className="absolute -left-8 top-8 h-16 w-14 rotate-[38deg] text-lime" />
              </div>
            </div>
          </div>

          <div>
            <ScrollFade y={18}>
              <p className="font-display text-[18px] font-bold leading-[21.6px] text-paper">
                {about.bodyA}
              </p>
            </ScrollFade>
            <ScrollFade y={18} delay={0.08}>
              <p className="mt-6 font-display text-[18px] font-bold leading-[21.6px] text-paper">
                {about.bodyB}
              </p>
            </ScrollFade>
            <ScrollFade y={18} delay={0.16}>
              <a
                href="#contact"
                className="btn-hard mt-9 inline-flex items-center gap-3 rounded-[10px] border-[1.5px] border-ink bg-lime px-6 py-4 font-display text-[13px] font-bold uppercase tracking-[0.03em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800"
              >
                {about.cta}
                <span className="grid h-7 w-7 place-items-center rounded-[4px] bg-ink text-paper">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M3 8h9M8.4 4.4 12 8l-3.6 3.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </ScrollFade>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 lg:mt-24" />

        <Testimonials />

        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}
