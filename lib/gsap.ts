import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Register once, at module scope, before any component runs GSAP.
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

// Respect the OS-level motion preference before any tween is created.
if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.globalTimeline.timeScale(100);
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
