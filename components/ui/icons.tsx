import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/** The square arrow chip that sits inside every primary button. */
export function ArrowChip({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span
      className={
        "grid h-7 w-7 shrink-0 place-items-center rounded-[4px] transition-colors " +
        (invert ? "bg-lime text-ink" : "bg-ink text-paper")
      }
      aria-hidden
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 8h9M8.4 4.4 12 8l-3.6 3.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function ArrowRight(props: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden {...props}>
      <path d="M3 8h9M8.4 4.4 12 8l-3.6 3.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon(props: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden {...props}>
      <path d="m3.5 8.4 3 3 6-6.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckCircle(props: P) {
  return (
    <span
      className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-ink text-lime"
      aria-hidden
    >
      <CheckIcon className="h-2.5 w-2.5" />
    </span>
  );
}

export function CrossCircle(props: P) {
  return (
    <span
      className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#d7d7d3] text-[#8a8a86]"
      aria-hidden
    >
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-2.5 w-2.5">
        <path d="m5 5 6 6M11 5l-6 6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/** Two-lobe review glyph used beside "Google review". */
export function ReviewGlyph(props: P) {
  return (
    <svg viewBox="0 0 20 18" fill="currentColor" aria-hidden {...props}>
      <path d="M0 8.4255V0h8.48v8.4255c.018 2.991-1.652 9.093-8.48 9.574v-3.939c3.545-.438 4.14-3.94 3.994-5.635H0Z" />
      <path d="M11.293 8.4255V0h8.48v8.4255c.018 2.991-1.652 9.093-8.48 9.574v-3.939c3.545-.438 4.14-3.94 3.994-5.635h-3.994Z" />
    </svg>
  );
}

export function ChevronDown(props: P) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden {...props}>
      <path d="m4.5 6.5 3.5 3.5 3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DotsIcon(props: P) {
  return (
    <svg viewBox="0 0 20 4" fill="currentColor" aria-hidden {...props}>
      <circle cx="2" cy="2" r="1.6" />
      <circle cx="10" cy="2" r="1.6" />
      <circle cx="18" cy="2" r="1.6" />
    </svg>
  );
}

/** Empty checkbox used by every row of the problem checklist. */
export function CheckboxIcon(props: P) {
  return (
    <span
      className="grid h-[13px] w-[13px] shrink-0 place-items-center rounded-[3px] border border-grey-500"
      aria-hidden
    />
  );
}

export function InfoIcon(props: P) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden {...props}>
      <path d="M10 5.5v5" strokeLinecap="round" />
      <circle cx="10" cy="14.2" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StarIcon(props: P) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden {...props}>
      <path d="m10 1.6 2.47 5.28 5.53.74-4.06 3.93 1.03 5.65L10 14.4l-4.97 2.8 1.03-5.65L2 7.62l5.53-.74L10 1.6Z" />
    </svg>
  );
}

export function LinkedInIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.32 8.4h4.34V24H.32V8.4Zm7.1 0h4.16v2.13h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.22 2.9 5.22 6.67V24h-4.34v-7.6c0-1.81-.03-4.15-2.53-4.15-2.53 0-2.92 1.98-2.92 4.02V24H7.42V8.4Z" />
    </svg>
  );
}

/** Hand-drawn curved arrow used beside the handwritten annotations. */
export function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 61 70" fill="none" aria-hidden className={className}>
      <path
        d="M58.8758 10.1991C52.9007 21.8603 32.7603 47.5897 0 57.2177M14.0438 60.3139C10.778 58.1499 3.32051 57.3481 0 57.2177C0.73001 56.8367 2.47858 54.7658 3.63278 49.5306"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
