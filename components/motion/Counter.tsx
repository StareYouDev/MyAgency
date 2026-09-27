"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface CounterProps {
  /** Numeric value to count up to. */
  value: number;
  /** Rendered after the number, e.g. "+", "k+". */
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Count-up driven by ScrollTrigger, matching the reference stat blocks. */
export function Counter({ value, suffix = "", duration = 1.8, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplay(String(value));
        return;
      }

      const obj = { n: 0 };
      const tween = gsap.to(obj, {
        n: value,
        duration,
        ease: "power2.out",
        snap: { n: 1 },
        onUpdate: () => setDisplay(String(Math.round(obj.n))),
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });

      return () => tween.scrollTrigger?.kill();
    },
    { scope: ref, dependencies: [value] },
  );

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
