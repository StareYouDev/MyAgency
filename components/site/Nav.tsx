"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { ArrowChip } from "@/components/ui/icons";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Fixed top nav: wordmark left, dark pill menu right, dark CTA with a lime
 * arrow chip far right. The wordmark keeps its dark fill at every scroll
 * position — matching the reference, where it recedes over the dark bands.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-10">
      <nav
        className={cn(
          "mx-auto flex max-w-[1200px] items-center justify-between gap-4",
          "transition-all duration-300",
        )}
        aria-label="Main"
      >
        {/* Logo */}
        <a
          href="#top"
          className="group flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          aria-label="StareYou home"
        >
          <Logo className="h-[30px] w-auto sm:h-8" />
        </a>

        {/* Right cluster: menu pill + CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop menu pill */}
          <div
            className={cn(
              "hidden items-center gap-1 rounded-[10px] bg-ink p-1.5 lg:flex",
              "transition-shadow duration-300",
              scrolled && "shadow-[0_6px_24px_-12px_rgba(19,19,17,0.6)]",
            )}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-[7px] px-3.5 py-2 font-display text-[12px] font-bold uppercase tracking-[0.02em]",
                  "text-paper transition-colors hover:bg-white/10",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime",
                )}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            className={cn(
              "btn-hard hidden items-center gap-2 rounded-[10px] border-[1.5px] border-ink bg-ink px-3 py-2.5 sm:inline-flex",
              "font-display text-[12px] font-bold uppercase tracking-[0.02em] text-paper",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
            )}
          >
            reserve spot
            <ArrowChip invert />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-[10px] border-[1.5px] border-ink bg-ink lg:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
            )}
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-full bg-paper transition-transform duration-300",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-full bg-paper transition-transform duration-300",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-4 top-[80px] rounded-[14px] border-[1.5px] border-ink bg-paper p-3 shadow-hard",
            "transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          )}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-[9px] px-4 py-3.5 font-display text-[15px] font-bold uppercase text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-ink bg-lime px-5 py-3.5 font-display text-[13px] font-bold uppercase text-ink"
          >
            reserve spot
            <ArrowChip />
          </a>
        </div>
      </div>
    </header>
  );
}
