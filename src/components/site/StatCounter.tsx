import { useEffect, useRef, useState } from "react";

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);
  return (
    <div ref={ref}>
      <div className="font-serif text-4xl md:text-5xl tracking-tight">
        {prefix}{n.toLocaleString()}{suffix}
      </div>
      <div className="mt-3 text-[10px] tracking-[0.25em] uppercase text-slate">{label}</div>
    </div>
  );
}