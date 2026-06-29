import { useState, type ReactNode } from "react";
import { Eyebrow, SectionTitle } from "./Shell";

export type FaqItem = { q: string; a: ReactNode };

export function FAQ({ eyebrow = "Questions", title, items }: { eyebrow?: string; title: string; items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle className="mt-6 max-w-3xl">{title}</SectionTitle>
        <div className="mt-14 border-t border-foreground/10">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-foreground/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                >
                  <span className="font-serif text-lg md:text-xl group-hover:text-gold transition-colors">{it.q}</span>
                  <span className={"shrink-0 size-8 grid place-items-center border border-foreground/20 transition-transform " + (isOpen ? "rotate-45 border-gold text-gold" : "")}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 0.4s ease, opacity 0.3s ease",
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-14 text-slate leading-relaxed">{it.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}