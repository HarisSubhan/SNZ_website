import { useState, type ReactNode } from "react";

export type Tab = { id: string; label: string; content: ReactNode };

export function TabPanel({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];
  return (
    <div>
      <div className="flex flex-wrap gap-1 border-b border-foreground/10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={
              "px-5 py-3 text-[10px] font-bold tracking-[0.25em] uppercase border-b-2 -mb-px transition-colors " +
              (active === t.id ? "border-gold text-foreground" : "border-transparent text-slate hover:text-foreground")
            }
          >
            {t.label}
          </button>
        ))}
      </div>
      <div key={current?.id} className="pt-10 animate-reveal">{current?.content}</div>
    </div>
  );
}