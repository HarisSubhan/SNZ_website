import { Link } from "@tanstack/react-router";
import { MagneticLink } from "./MagneticButton";

export function ConsultationCTA({
  eyebrow = "Begin",
  title = "Every expansion is bespoke.",
  body = "Share your objectives and our team will prepare a preliminary compliance and market-entry assessment · without packages, tiers, or pricing presumptions.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-stone py-24 px-6 border-y border-foreground/5">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-gold">
          {eyebrow}
        </span>
        <h2 className="mt-6 font-serif italic text-4xl md:text-5xl leading-tight">{title}</h2>
        <p className="mt-6 text-slate max-w-2xl mx-auto">{body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticLink
            to="/contact"
            className="px-7 py-4 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight"
          >
            Schedule a Briefing
          </MagneticLink>
          <a
            href="tel:+37060305146"
            className="px-7 py-4 border border-foreground/15 text-[11px] font-bold tracking-[0.25em] uppercase hover:border-midnight transition-colors inline-flex items-center gap-2"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
            Call +370 603 05146
          </a>
          <Link
            to="/lithuania"
            className="px-7 py-4 border border-foreground/15 text-[11px] font-bold tracking-[0.25em] uppercase hover:border-midnight transition-colors"
          >
            Company Formation
          </Link>
        </div>
      </div>
    </section>
  );
}