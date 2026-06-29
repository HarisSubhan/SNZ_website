import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import logoAsset from "@/assets/snz-logo.png.asset.json";

const links = [
  { to: "/lithuania", label: "Company Formation" },
  { to: "/fintech", label: "Fintech" },
  { to: "/recruitment", label: "Talent" },
  { to: "/study-abroad", label: "Study Abroad" },
  { to: "/why-lithuania", label: "Why Lithuania" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  const showLogin = pathname.startsWith("/study-abroad") || pathname.startsWith("/login");
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
          <img src={logoAsset.url} alt="SNZ Ventures" className="size-9 sm:size-10 rounded-full shrink-0" />
          <span className="font-serif text-base sm:text-lg font-bold tracking-tight uppercase text-foreground truncate">SNZ Ventures</span>
        </Link>
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-[10.5px] font-semibold tracking-[0.14em] uppercase whitespace-nowrap">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-slate hover:text-gold transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          {showLogin ? (
            <Link to="/login" className="text-slate hover:text-gold transition-colors">
              Student Login
            </Link>
          ) : null}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggle}
            className="size-9 grid place-items-center border border-foreground/15 hover:border-gold hover:text-gold transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <Link
            to="/contact"
            className="hidden sm:inline-flex px-4 lg:px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase bg-gold text-white hover:bg-midnight hover:text-midnight-foreground transition-all"
          >
            Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden size-9 grid place-items-center border border-foreground/15 hover:border-gold"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            ) : (
              <span className="block w-4 h-px bg-foreground relative before:absolute before:inset-x-0 before:-top-1.5 before:h-px before:bg-foreground after:absolute after:inset-x-0 after:top-1.5 after:h-px after:bg-foreground" />
            )}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-20 z-50 bg-background border-b border-foreground/10 shadow-[0_24px_40px_-20px_rgba(0,0,0,0.25)] animate-reveal">
          <div className="px-6 py-6 flex flex-col divide-y divide-foreground/10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-slate hover:text-gold transition-colors flex items-center justify-between"
              >
                <span>{l.label}</span>
                <span className="text-gold">→</span>
              </Link>
            ))}
            {showLogin ? (
              <Link to="/login" onClick={() => setOpen(false)} className="py-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-slate hover:text-gold flex items-center justify-between">
                <span>Student Login</span><span className="text-gold">→</span>
              </Link>
            ) : null}
            <div className="pt-4 flex flex-col gap-3">
              <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex justify-center px-5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase bg-gold text-white">
                Book a Consultation
              </Link>
              <a href="tel:+37060305146" className="inline-flex justify-center px-5 py-3 text-[10px] font-bold tracking-[0.2em] uppercase border border-foreground/15 hover:border-gold hover:text-gold transition-colors">
                Call +370 603 05146
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}