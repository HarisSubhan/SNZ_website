import { useState } from "react";

export type CaseItem = {
  tag: string;
  title: string;
  challenge: string;
  outcome: string;
};

export function CaseRail({ cases }: { cases: CaseItem[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      {/* Desktop: expand-on-hover rail */}
      <div className="hidden lg:flex h-[440px] gap-0 relative">
        {cases.map((c, i) => {
          const isActive = i === active;
          return (
            <button
              type="button"
              key={c.title}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={
                "relative h-full text-left overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] " +
                (isActive ? "flex-[6]" : "flex-[1]") +
                (i > 0 ? " border-l border-white/10" : "")
              }
            >
              <div
                aria-hidden
                className={
                  "absolute inset-0 transition-opacity duration-700 " +
                  (isActive ? "opacity-100" : "opacity-0")
                }
                style={{
                  background:
                    "radial-gradient(circle at 20% 30%, oklch(0.72 0.18 135 / 0.18), transparent 55%), radial-gradient(circle at 80% 80%, oklch(0.72 0.16 5 / 0.12), transparent 55%)",
                }}
              />
              {/* Collapsed spine */}
              {!isActive && (
                <div className="absolute inset-0 flex items-end justify-center p-5">
                  <span className="origin-bottom-left -rotate-90 translate-y-2 text-[10px] tracking-[0.3em] uppercase text-gold whitespace-nowrap">
                    {c.tag}
                  </span>
                </div>
              )}
              {/* Expanded panel */}
              <div
                className={
                  "relative h-full p-10 xl:p-14 flex flex-col transition-opacity duration-500 " +
                  (isActive ? "opacity-100 delay-200" : "opacity-0 pointer-events-none")
                }
              >
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6">{c.tag}</div>
                <h3 className="font-serif text-3xl xl:text-4xl leading-tight max-w-xl mb-10">{c.title}</h3>
                <div className="mt-auto grid grid-cols-2 gap-10 text-sm max-w-3xl">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Challenge</div>
                    <p className="text-white/85 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-2">Outcome</div>
                    <p className="text-white/85 leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile: snap rail */}
      <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-4">
        {cases.map((c) => (
          <article key={c.title} className="snap-start shrink-0 w-[85%] py-8">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">{c.tag}</div>
            <h3 className="font-serif text-2xl leading-tight mb-8">{c.title}</h3>
            <div className="space-y-5 text-sm border-l-2 border-gold pl-5">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1">Challenge</div>
                <p className="text-white/85">{c.challenge}</p>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-1">Outcome</div>
                <p className="text-white/85">{c.outcome}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}