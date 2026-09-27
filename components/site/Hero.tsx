import Image from "next/image";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { ArrowChip, CheckCircle, ScribbleArrow } from "@/components/ui/icons";
import { hero, heroCards } from "@/lib/copy";
import { heroImages } from "@/lib/content";

/** Captions were transcribed in DOM order; pair each one with its image. */
const cardImages: Record<string, string> = {
  "Afternoon Adventures": heroImages[0],
  "Clover Coach": heroImages[1],
  "Golden Hour": heroImages[2],
  "Winston Moore": heroImages[4],
};

function PolaroidCard({
  caption,
  left,
  top,
  rotate,
}: {
  caption: string;
  left: string;
  top: string;
  rotate: number;
}) {
  return (
    <figure
      className="absolute hidden lg:block"
      style={{ left, top, transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
    >
      <div className="rounded-[10px] border-[1.5px] border-ink bg-card p-[10px] pb-3 shadow-hard">
        <div className="relative h-[170px] w-[170px] overflow-hidden rounded-[5px] bg-white">
          <Image
            src={cardImages[caption]}
            alt={caption}
            fill
            sizes="193px"
            className="object-cover"
          />
        </div>
        <figcaption className="px-1 pt-2.5 font-display text-[12px] font-bold text-ink">
          {caption}
        </figcaption>
      </div>
    </figure>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-clip bg-paper">
      {/* Soft disc that sits behind the hero copy */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[80px] h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-panel lg:h-[760px] lg:w-[760px]"
      />

      {/* Scattered polaroid cards — desktop composition only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {heroCards.map((c) => (
          <PolaroidCard key={c.caption} {...c} />
        ))}

        {/* Handwritten annotation with its curved arrow */}
        <div
          className="absolute"
          style={{ left: "73%", top: "76%", transform: "translate(-50%, -50%) rotate(-14deg)" }}
        >
          <div className="relative">
            <p className="font-hand text-[19px] leading-[1.35] text-ink">
              {hero.annotation[0]}
              <br />
              {hero.annotation[1]}
            </p>
            <ScribbleArrow className="absolute -left-14 -top-12 h-16 w-14 -scale-x-100 text-ink" />
          </div>
        </div>
      </div>

      {/* Centred hero copy */}
      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 pb-16 pt-32 text-center sm:pb-20 sm:pt-36 lg:pb-[83px] lg:pt-[155px]">
        <ScrollFade y={14} delay={0.05}>
          <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 font-display text-[12px] font-medium text-paper">
            {hero.badge}
          </span>
        </ScrollFade>

        <ScrollFade y={14} delay={0.14}>
          <p className="eyebrow mt-10 text-ink lg:mt-[52px]">{hero.eyebrow}</p>
        </ScrollFade>

        <SplitReveal
          as="h1"
          mode="words"
          delay={0.2}
          stagger={0.06}
          y={20}
          immediate
          className="h-display mt-6 max-w-[15ch] text-[42px] leading-[1.0] text-ink sm:text-[58px] lg:text-[76px] lg:leading-[76px]"
        >
          {hero.heading}
        </SplitReveal>

        <SplitReveal
          as="p"
          mode="words"
          delay={0.55}
          stagger={0.012}
          y={10}
          immediate
          className="mt-6 max-w-[470px] font-display text-[16px] font-bold leading-[1.22] text-ink sm:text-[18px]"
        >
          {hero.description}
        </SplitReveal>

        <ScrollFade y={16} delay={0.05}>
          <a
            href="#pricing"
            className="btn-hard mt-10 inline-flex items-center gap-3 rounded-[10px] border-[1.5px] border-ink bg-lime px-5 py-2.5 font-display text-[12px] font-bold uppercase tracking-[0.04em] text-ink transition-colors hover:bg-lime-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            {hero.cta}
            <ArrowChip />
          </a>
        </ScrollFade>

        <ScrollFade y={12} delay={0.14}>
          <p className="mt-6 flex items-center justify-center gap-1.5 font-display text-[12px] font-medium text-ink">
            <CheckCircle className="h-4 w-4" />
            {hero.guarantee}
          </p>
        </ScrollFade>

        {/* Mobile: a pair of cards under the guarantee so the composition still reads */}
        <div className="pointer-events-none mt-14 flex w-full items-start justify-between gap-4 lg:hidden">
          <figure
            className="w-[45%] rounded-[8px] border-[1.5px] border-ink bg-card p-1.5 pb-2 shadow-hard-sm"
            style={{ transform: "rotate(-5deg)" }}
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[4px] bg-white">
              <Image src={heroImages[3]} alt="" fill sizes="45vw" className="object-cover" />
            </div>
          </figure>
          <figure
            className="w-[45%] rounded-[8px] border-[1.5px] border-ink bg-card p-1.5 pb-2 shadow-hard-sm"
            style={{ transform: "rotate(5deg)" }}
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[4px] bg-white">
              <Image src={heroImages[2]} alt="" fill sizes="45vw" className="object-cover" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
