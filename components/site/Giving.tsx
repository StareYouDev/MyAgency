import Image from "next/image";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { giving } from "@/lib/copy";

/** Cell widths taken from the reference: 373/131 then 260/244, 7px gutter. */
const ROW_A = "grid grid-cols-[373fr_131fr] gap-[7px]";
const ROW_B = "grid grid-cols-[260fr_244fr] gap-[7px]";

export function Giving() {
  return (
    <section className="border-b border-line bg-paper px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1000px] gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_512px] lg:items-center lg:gap-[110px] lg:py-[94px]">
        {/* ---- Copy ---- */}
        <div className="max-w-[420px] lg:max-w-[360px]">
          <SplitReveal as="p" mode="words" y={10} className="eyebrow text-ink">
            {giving.eyebrow}
          </SplitReveal>

          <SplitReveal
            as="h2"
            mode="words"
            stagger={0.055}
            y={24}
            className="h-display mt-5 text-[34px] text-ink sm:text-[44px] lg:text-[54px] lg:leading-[1.1]"
          >
            {giving.heading}
          </SplitReveal>

          <ScrollFade y={16}>
            <p className="mt-7 font-display text-[16.5px] font-medium leading-[1.45] text-ink/80">
              {giving.bodyA}
              <a
                href={giving.href}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline underline-offset-4 hover:text-ink"
              >
                {giving.bodyLink}
              </a>
              {giving.bodyB}
            </p>
          </ScrollFade>

          <ScrollFade y={16} delay={0.08}>
            <a
              href={giving.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border-[1.5px] border-ink bg-ink px-5 py-2.5 font-display text-[12px] font-bold uppercase tracking-[0.06em] text-paper transition-colors hover:bg-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              {giving.cta}
              <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-paper text-ink">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h9M8.4 4.4 12 8l-3.6 3.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </ScrollFade>
        </div>

        {/* ---- Collage ---- */}
        <div className="space-y-[17px]">
          <ScrollFade y={24} className={ROW_A}>
            {[0, 1].map((i) => (
              <div key={i} className="relative h-[168px] overflow-hidden rounded-[6px] sm:h-[224px]">
                <Image
                  src={giving.images[i]}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 373px"
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </ScrollFade>

          <ScrollFade y={24} delay={0.08} className={ROW_B}>
            {[2, 3].map((i) => (
              <div key={i} className="relative h-[168px] overflow-hidden rounded-[6px] sm:h-[224px]">
                <Image
                  src={giving.images[i]}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 260px"
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}
