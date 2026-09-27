"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  /** Scroll left (default) or right. */
  reverse?: boolean;
  /** Pause on hover. */
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Seamless horizontal marquee. Children are duplicated once and the track is
 * tweened by -50% so the seam never shows.
 */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  pauseOnHover = false,
  className,
}: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const track = el.querySelector<HTMLElement>("[data-marquee-track]");
      if (!track) return;

      const tween = gsap.to(track, {
        xPercent: reverse ? 50 : -50,
        duration,
        ease: "none",
        repeat: -1,
        ...(reverse ? { startAt: { xPercent: -50 } } : {}),
      });

      if (pauseOnHover) {
        const onEnter = () => gsap.to(tween, { timeScale: 0, duration: 0.4 });
        const onLeave = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
        return () => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
          tween.kill();
        };
      }

      return () => tween.kill();
    },
    { scope: ref, dependencies: [duration, reverse] },
  );

  return (
    <div ref={ref} className={cn("marquee-lane", className)}>
      <div data-marquee-track className="marquee-track">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
