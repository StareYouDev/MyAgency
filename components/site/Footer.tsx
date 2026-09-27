import { Logo } from "@/components/brand/Logo";
import { footer } from "@/lib/copy";
import { footerNav, footerResources } from "@/lib/content";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.7c0-3.1-1.66-4.55-3.87-4.55-1.78 0-2.58.98-3.02 1.67V8.5H10.2V20h2.92v-6.06c0-1.6.3-3.15 2.29-3.15 1.96 0 1.99 1.83 1.99 3.25V20H20v-6.3Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-[210px] pt-16 sm:px-6 lg:px-10 lg:pt-[88px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
          {/* ---- Brand block ---- */}
          <div className="max-w-[420px]">
            <Logo dark className="h-[30px] w-auto" />

            <p className="mt-8 font-display text-[15.5px] font-bold text-paper">{footer.blurbLead}</p>
            <p className="mt-2 max-w-[330px] font-display text-[15px] font-medium leading-[1.45] text-grey-400">
              {footer.blurb}
            </p>

            <a
              href="#contact"
              className="btn-hard mt-8 inline-flex items-center gap-3 rounded-[10px] border-[1.5px] border-ink bg-lime px-5 py-3.5 font-display text-[13px] font-bold uppercase tracking-[0.04em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {footer.cta}
              <span className="grid h-7 w-7 place-items-center rounded-[4px] bg-ink text-paper">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M3 8h9M8.4 4.4 12 8l-3.6 3.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          {/* ---- Links ---- */}
          <div className="flex gap-14 sm:gap-24">
            <nav aria-label="Footer">
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-grey-500">
                {footer.navTitle}
              </p>
              <ul className="mt-5 space-y-3.5">
                {footerNav.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-display text-[15px] font-bold text-paper transition-colors hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.12em] text-grey-500">
                {footer.socialsTitle}
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-[7px] border border-white/15 bg-ink-700 text-paper transition-colors hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <LinkedInIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="mt-12 flex flex-col items-start gap-5 text-[13px] text-grey-500 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <p className="font-display font-medium">{footer.copyright}</p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerResources.map((r) => (
              <li key={r.label}>
                <a
                  href={r.href}
                  className="font-display font-medium transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  {r.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <p className="font-display font-medium">{footer.crafted}</p>
          </div>
        </div>
      </div>

      {/* ---- Oversized wordmark, cropped by the footer edge ---- */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 select-none">
        <p className="translate-y-[24%] text-center font-display text-[18vw] font-black leading-[0.78] tracking-[-0.045em] text-ink-700">
          StareYou
        </p>
      </div>
    </footer>
  );
}
