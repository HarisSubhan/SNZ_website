import { Reveal } from "./Reveal";

export type EditorialItem = { title: string; body: string };

export function EditorialList({
  items,
  variant = "light",
}: {
  items: EditorialItem[];
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <div className="relative">
      {items.map((it, i) => {
        const right = i % 2 === 1;
        return (
          <Reveal key={it.title} delay={i * 90}>
            <div
              className={
                "group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-b " +
                (dark ? "border-white/10" : "border-foreground/10")
              }
            >
              <div className={"md:col-span-3 " + (right ? "md:order-2 md:text-right" : "")}>
                <span
                  className={
                    "font-serif italic text-[88px] md:text-[140px] leading-none tracking-tight transition-colors " +
                    (dark ? "text-white/15 group-hover:text-gold" : "text-foreground/10 group-hover:text-gold")
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={"md:col-span-8 md:col-start-4 flex flex-col justify-center " + (right ? "md:col-start-1 md:row-start-1" : "")}>
                <h4 className={"font-serif text-2xl md:text-3xl mb-3 " + (dark ? "text-white" : "")}>{it.title}</h4>
                <p className={"max-w-xl text-[15px] leading-relaxed " + (dark ? "text-white/65" : "text-slate")}>{it.body}</p>
                <span className={"mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase " + (dark ? "text-gold" : "text-gold")}>
                  <span className="block h-px w-8 bg-gold transition-all duration-500 group-hover:w-20" />
                  Detail
                </span>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}