import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type Step = {
  title: string;
  body: string;
  icon?: ReactNode;
  image?: string;
};

export function StepFlow({
  steps,
  variant = "light",
}: {
  steps: Step[];
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <div className="relative">
      {/* Horizontal scroll rail */}
      <div className="relative overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* The gold rail */}
        <div
          aria-hidden
          className={
            "absolute left-6 right-6 top-[88px] h-px " +
            (dark ? "bg-white/15" : "bg-foreground/10")
          }
        />
        <ol className="relative flex gap-10 min-w-max">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <li className="group relative w-[260px] snap-start">
                {/* Node */}
                <div className="relative h-[120px] flex flex-col items-start">
                  <span
                    className={
                      "font-serif italic text-6xl leading-none transition-colors " +
                      (dark ? "text-white/80 group-hover:text-gold" : "text-foreground group-hover:text-gold")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      "absolute left-0 top-[88px] size-3 rounded-full -translate-y-1/2 ring-4 transition-all " +
                      (dark
                        ? "bg-gold ring-midnight group-hover:scale-125"
                        : "bg-gold ring-background group-hover:scale-125")
                    }
                  />
                </div>
                <div className="pt-6">
                  <h4
                    className={
                      "font-serif text-lg mb-2 group-hover:text-gold transition-colors " +
                      (dark ? "text-white" : "")
                    }
                  >
                    {s.title}
                  </h4>
                  <p className={"text-sm leading-relaxed " + (dark ? "text-white/65" : "text-slate")}>
                    {s.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
      <div className={"mt-3 text-[10px] tracking-[0.3em] uppercase " + (dark ? "text-white/40" : "text-slate")}>Scroll →</div>
    </div>
  );
}