import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { ArrowChip, CheckIcon } from "@/components/ui/icons";
import { Logo } from "@/components/brand/Logo";
import { solution } from "@/lib/copy";
import { solutionBullets } from "@/lib/content";

/** Alternating fills follow the reference: lime, light, lime, light, lime, ink. */
const fills = ["bg-lime", "bg-card", "bg-lime", "bg-card", "bg-lime", "bg-ink-700"] as const;

function Card({ label, fill, index }: { label: string; fill: string; index: number }) {
  const dark = index === 5;
  return (
    <div
      className={`relative flex h-[158px] flex-col justify-between rounded-[10px] border-[1.5px] border-ink p-4 shadow-hard sm:h-[175px] ${fill}`}
    >
      <span
        className={`grid h-[26px] w-[26px] place-items-center rounded-full ${
          dark ? "bg-ink-600 text-lime" : "bg-ink-700 text-paper"
        }`}
        aria-hidden
      >
        <CheckIcon className="h-3 w-3" />
      </span>

      {dark ? (
        <div className="flex justify-center pb-1">
          <Logo dark className="h-6 w-auto" />
        </div>
      ) : (
        <p className="font-display text-[16px] font-bold leading-[1.18] text-ink sm:text-[17px]">
          {label}
        </p>
      )}
    </div>
  );
}

export function Solution() {
  return (
    <section id="solution" className="bg-paper px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,1fr)_590px] lg:items-center lg:gap-16">
        {/* Left: heading + CTA */}
        <div>
          <SplitReveal as="p" mode="words" stagger={0.03} y={10} className="eyebrow text-ink">
            {solution.eyebrow}
          </SplitReveal>

          <SplitReveal
            as="h2"
            mode="words"
            stagger={0.04}
            y={16}
            className="h-display mt-5 max-w-[13ch] text-[34px] text-ink sm:text-[44px] lg:text-[52px] lg:leading-[1.05]"
          >
            {solution.heading}
          </SplitReveal>

          <ScrollFade y={16} delay={0.08}>
            <a
              href="#pricing"
              className="btn-hard mt-8 inline-flex items-center gap-3 rounded-[10px] border-[1.5px] border-ink bg-lime px-5 py-3 font-display text-[12px] font-bold uppercase tracking-[0.04em] text-ink transition-colors hover:bg-lime-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              {solution.cta}
              <ArrowChip />
            </a>
          </ScrollFade>
        </div>

        {/* Right: 3 × 2 card grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {solutionBullets.map((b, i) => (
            <ScrollFade key={b} y={22} delay={0.06 * i} stagger={0.08}>
              <Card label={b} fill={fills[i]} index={i} />
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
