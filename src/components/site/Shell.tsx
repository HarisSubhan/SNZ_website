import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Parallax } from "./Parallax";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/30">
      <Nav />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-gold">
      {children}
    </span>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-serif text-4xl md:text-5xl leading-[1.1] tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image?: string;
}) {
  if (image) {
    return (
      <section className="relative overflow-hidden border-b border-foreground/5">
        <div className="absolute inset-0">
          <Parallax speed={0.18} className="w-full h-[120%] -mt-[10%]">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </Parallax>
          <div className="absolute inset-0 hero-vignette" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-28 text-white">
          <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-gold animate-reveal">{eyebrow}</span>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl animate-reveal" style={{ animationDelay: "120ms" }}>
            {title}
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed animate-reveal" style={{ animationDelay: "240ms" }}>{lede}</p>
        </div>
      </section>
    );
  }
  return (
    <section className="pt-24 pb-20 px-6 border-b border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
          {title}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-slate max-w-2xl leading-relaxed">{lede}</p>
      </div>
    </section>
  );
}