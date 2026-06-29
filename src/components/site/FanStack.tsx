import { useState, type ReactNode } from "react";

export type FanItem = {
  title: string;
  body: string;
  icon?: ReactNode;
};

export function FanStack({ items }: { items: FanItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div>
      {/* Desktop fan */}
      <div className="hidden md:block relative h-[440px]">
        <div className="absolute inset-0 flex justify-center items-start">
          {items.map((it, i) => {
            const n = items.length;
            const center = (n - 1) / 2;
            const offset = i - center;
            const isActive = active === i;
            const base = `translateX(${offset * 130}px) rotate(${offset * 3.2}deg)`;
            const hover = `translateX(${offset * 150}px) translateY(-18px) rotate(${offset * 2}deg)`;
            return (
              <button
                type="button"
                key={it.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="absolute top-0 w-[280px] h-[400px] text-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom"
                style={{
                  transform: isActive ? hover : base,
                  zIndex: isActive ? 50 : i,
                }}
              >
                <div
                  className={
                    "relative h-full p-8 bg-background transition-shadow duration-500 " +
                    (isActive
                      ? "shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
                      : "shadow-[0_18px_40px_-24px_rgba(0,0,0,0.25)]")
                  }
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)",
                  }}
                >
                  <span className="absolute top-0 right-0 w-[22px] h-[22px] bg-gold" />
                  <div className="font-serif text-5xl text-gold mb-8 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {it.icon ? <div className="mb-5 text-midnight">{it.icon}</div> : null}
                  <h4 className="font-serif text-xl mb-3">{it.title}</h4>
                  <p className="text-sm text-slate leading-relaxed">{it.body}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile accordion */}
      <ul className="md:hidden divide-y divide-foreground/10 border-y border-foreground/10">
        {items.map((it, i) => (
          <li key={it.title} className="group">
            <details className="px-2">
              <summary className="list-none cursor-pointer py-5 flex items-start gap-4">
                <span className="font-serif text-3xl text-gold leading-none w-12 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg flex-1 group-open:text-gold transition-colors">{it.title}</span>
                <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="pb-5 pl-16 pr-4 text-sm text-slate leading-relaxed">{it.body}</p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}