"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type Mode = "words" | "chars" | "lines";

interface SplitRevealProps {
  children: ReactNode;
  /** What to stagger over. */
  mode?: Mode;
  /** Delay before the reveal starts (seconds). */
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number;
  /** ScrollTrigger start position, e.g. "top 85%". */
  start?: string;
  /** Reveal immediately on mount instead of on scroll. */
  immediate?: boolean;
  as?: ElementType;
  className?: string;
}

/**
 * Framer-style text reveal: splits the node into words/chars/lines and tweens
 * each unit from `y: 15, opacity: 0.001` → rest, matching the reference's
 * per-word spans (opacity 0.001 + translateY(15px)).
 */
export function SplitReveal({
  children,
  mode = "words",
  delay = 0,
  stagger = 0.035,
  duration = 0.7,
  y = 15,
  start = "top 88%",
  immediate = false,
  as: Tag = "div",
  className,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      let split: SplitText | undefined;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduced) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      split = SplitText.create(el, {
        type: mode,
        linesClass: "sr-line",
        wordsClass: "sr-word",
        charsClass: "sr-char",
        aria: "auto",
      });

      const targets =
        mode === "chars" ? split.chars : mode === "lines" ? split.lines : split.words;

      const tween = gsap.fromTo(
        targets,
        { opacity: 0.001, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          delay,
          stagger,
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: el,
                  start,
                  once: true,
                },
              }),
        },
      );

      return () => {
        split?.revert();
        tween.scrollTrigger?.kill();
      };
    },
    { scope: ref, dependencies: [mode, delay, immediate] },
  );

  return (
    <Tag ref={ref} className={cn("split-reveal", className)}>
      {children}
    </Tag>
  );
}
