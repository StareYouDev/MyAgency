"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { testimonials as copy } from "@/lib/copy";
import { testimonials } from "@/lib/content";

function Stars() {
  return (
    <span className="flex items-center gap-[3px]" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-[15px] w-[15px] text-lime" fill="currentColor">
          <path d="M10 1.6l2.47 5.2 5.53.72-4.06 3.88 1.06 5.6L10 14.4l-4.99 2.6 1.07-5.6L2 7.52l5.53-.72L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

function NavBtn({
  dir,
  onClick,
  primary,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      className={
        "grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-colors " +
        (primary
          ? "border-lime bg-lime text-ink hover:bg-lime-deep"
          : "border-white/20 bg-ink text-paper hover:border-white/45")
      }
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d={dir === "next" ? "M3 8h9M8.4 4.4 12 8l-3.6 3.6" : "M13 8H4M7.6 4.4 4 8l3.6 3.6"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((n) => (n - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((n) => (n + 1) % testimonials.length);

  return (
    <section className="pb-24 lg:pb-28">
      <ScrollFade y={24}>
        <div className="rounded-[16px] border border-white/[0.12] bg-ink-700 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="flex items-center gap-3">
              <Stars />
              <span className="font-display text-[13px] font-bold text-grey-400">{copy.reviewLabel}</span>
            </div>
            <div className="flex items-center gap-3">
              <NavBtn dir="prev" onClick={prev} />
              <NavBtn dir="next" onClick={next} primary />
            </div>
          </div>

          <blockquote
            key={i}
            className="mt-7 max-w-[26ch] font-display text-[22px] font-bold leading-[1.3] text-paper sm:text-[26px] lg:text-[30px]"
          >
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <hr className="my-7 border-0 border-t border-white/[0.12]" />

          <div className="flex items-center gap-3.5">
            <Image
              src={t.image}
              alt={t.name}
              width={44}
              height={44}
              unoptimized
              className="h-11 w-11 rounded-full object-cover ring-1 ring-lime"
            />
            <p className="font-display text-[15px] font-bold text-paper">
              {t.name} <span className="font-medium text-grey-400">| {t.company}</span>
            </p>
          </div>
        </div>
      </ScrollFade>

      {/* Progress dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, n) => (
          <button
            key={n}
            type="button"
            onClick={() => setI(n)}
            aria-label={`Go to testimonial ${n + 1}`}
            className={
              "h-1.5 rounded-full transition-all " +
              (n === i ? "w-6 bg-lime" : "w-1.5 bg-white/25 hover:bg-white/50")
            }
          />
        ))}
      </div>
    </section>
  );
}
