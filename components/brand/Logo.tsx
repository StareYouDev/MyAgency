import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("inline-flex h-full w-auto items-center gap-1.5", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="h-full w-auto shrink-0"
        fill="#FF5E00"
      >
        <circle cx="50" cy="50" r="22" />
        <rect
          x="85"
          y="25"
          width="44"
          height="150"
          rx="22"
          ry="22"
          transform="rotate(32 107 100)"
        />
      </svg>
      <span className={cn("font-display text-[18px] font-black leading-none", dark ? "text-paper" : "text-ink")}>
        StareYou
      </span>
    </span>
  );
}