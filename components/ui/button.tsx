import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type Variant = "lime" | "ink" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  lime: "bg-lime text-ink border-ink hover:bg-lime-deep",
  ink: "bg-ink text-paper-white border-ink hover:bg-ink-800",
  outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper-white",
  ghost: "bg-transparent text-ink border-transparent hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-[52px] px-8 text-[15px]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, asChild = false, variant = "lime", size = "md", ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "btn-hard inline-flex items-center justify-center gap-2 rounded-[10px] border-[1.5px]",
          "font-display font-bold uppercase tracking-[0.04em] leading-none",
          "select-none whitespace-nowrap transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
          "disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
