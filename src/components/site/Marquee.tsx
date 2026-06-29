export function Marquee({ items, eyebrow = "Trusted network" }: { items: string[]; eyebrow?: string }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="relative border-y border-foreground/10 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-6">
        <div className="text-[9px] tracking-[0.35em] uppercase text-slate/70 md:border-r md:border-foreground/10 md:pr-6">
          {eyebrow}
        </div>
        <div
          className="relative overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
        >
          <div className="flex gap-10 whitespace-nowrap animate-marquee will-change-transform">
            {loop.map((it, i) => (
              <span key={i} className="flex items-center gap-10 text-[11px] font-semibold tracking-[0.25em] uppercase text-foreground/55">
                <span>{it}</span>
                <span className="block w-1 h-1 rounded-full bg-gold/70" aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}