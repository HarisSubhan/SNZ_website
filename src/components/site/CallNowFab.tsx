import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

export function CallNowFab() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div className="bg-background border border-foreground/15 shadow-[0_24px_60px_-20px_oklch(0.22_0.06_265/0.35)] w-72 p-5 animate-reveal">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">Talk to SNZ</div>
          <div className="font-serif text-lg leading-snug">
            A senior advisor, one ring away.
          </div>
          <p className="mt-2 text-xs text-slate">Mon to Fri · 09:00 to 18:00 EET</p>
          <div className="mt-4 grid gap-2">
            <a
              href="tel:+37060305146"
              className="px-4 py-3 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.2em] uppercase text-center hover:bg-gold hover:text-midnight transition-colors"
            >
              Call +370 603 05146
            </a>
            <a
              href="https://wa.me/37060305146"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-foreground/15 text-[11px] font-bold tracking-[0.2em] uppercase text-center hover:border-gold hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:info@snzventures.eu"
              className="px-4 py-3 border border-foreground/15 text-[11px] font-bold tracking-[0.2em] uppercase text-center hover:border-gold hover:text-gold transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Call SNZ Ventures"
        className={
          "size-14 rounded-full bg-gold text-midnight shadow-[0_14px_34px_-10px_oklch(0.72_0.18_135/0.6)] grid place-items-center hover:scale-105 transition-all " +
          (visible ? "opacity-100" : "opacity-0 pointer-events-none translate-y-3")
        }
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M18 6 6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
        )}
      </button>
    </div>
  );
}