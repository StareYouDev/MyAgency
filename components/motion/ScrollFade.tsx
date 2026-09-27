"use client";

import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface ScrollFadeProps {
  children: ReactNode;
  y?: number;
  opacity?: number;
  delay?: number;
  duration?: number;
  start?: string;
  stagger?: number;
  /** Target child selectors instead of the root (scoped to this node). */
  targets?: string;
  as?: ElementType;
  className?: string;
}

/** Generic scroll-in fade/up applied to the node or its scoped children. */
export function ScrollFade({
  children,
  y = 24,
  opacity = 0,
  delay = 0,
  duration = 0.75,
  start = "top 87%",
  stagger,
  targets,
  as: Tag = "div",
  className,
}: ScrollFadeProps) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      const items: Element[] = targets
        ? Array.from(el.querySelectorAll(targets))
        : [el];

      if (!items.length) return;

      const tween = gsap.fromTo(
        items,
        { opacity, y },
        {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          delay,
          ...(stagger != null ? { stagger } : {}),
          scrollTrigger: { trigger: el, start, once: true },
        },
      );

      return () => tween.scrollTrigger?.kill();
    },
    { scope: ref, dependencies: [targets, delay] },
  );

  return (
    <Tag ref={ref} className={cn("scroll-fade", className)}>
      {children}
    </Tag>
  );
}
