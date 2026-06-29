import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, Eyebrow, SectionTitle } from "@/components/site/Shell";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { Marquee } from "@/components/site/Marquee";
import heroImg from "@/assets/hero-about.jpg";
import womenImg from "@/assets/about-women.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SNZ Ventures · Woman-Owned European Advisory" },
      { name: "description", content: "SNZ Ventures is a woman-owned European consulting ecosystem based in Vilnius, combining business expansion, fintech, recruitment, relocation and student placement." },
      { property: "og:title", content: "About SNZ Ventures" },
      { property: "og:description", content: "Mission, vision and values of a woman-owned European advisory." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Integrity", b: "Every recommendation is the one we would make for our own capital." },
  { t: "Innovation", b: "We treat regulation, recruitment and relocation as design problems." },
  { t: "Transparency", b: "Bespoke scopes, no packages, and no surprises in the second invoice." },
  { t: "Empowerment", b: "We back founders, professionals and students under-served by legacy advisors." },
  { t: "Excellence", b: "Senior practitioners on every mandate · no junior hand-offs." },
  { t: "Impact", b: "Measured in companies launched, careers built and graduates placed." },
];

const milestones = [
  { y: "2019", t: "Vilnius office opens", b: "SNZ Ventures founded as a woman-owned advisory focused on EU market entry." },
  { y: "2021", t: "Fintech division launches", b: "First EMI mandates secured with the Bank of Lithuania." },
  { y: "2022", t: "Recruitment corridor opens", b: "South Asia and MENA sourcing partnerships go live for European employers." },
  { y: "2023", t: "Student consultancy launches", b: "Private student portal and partnerships with EU universities formalised." },
  { y: "2025", t: "Integrated ecosystem", b: "Six service verticals operating under a single coordinated advisory roof." },
];

function AboutPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="About SNZ Ventures"
        title={<>A woman-owned European advisory built as an <span className="italic text-gold">ecosystem</span>, not a consultancy.</>}
        lede="We exist to remove the administrative borders that prevent capital, talent and ambition from flowing into Europe, and to do so under a single advisory roof."
        image={heroImg}
      />

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <Reveal>
            <Eyebrow>Mission</Eyebrow>
            <p className="mt-6 font-serif text-2xl leading-snug">
              Empowering entrepreneurs, investors, professionals and students through accessible, supervised pathways into Europe.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Vision</Eyebrow>
            <p className="mt-6 font-serif text-2xl leading-snug">
              To become Europe's most trusted gateway for business expansion, talent mobility and international education.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--rose-soft) 0%, var(--stone) 65%, var(--background) 100%)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-foreground/10 shadow-[0_30px_80px_-30px_oklch(0.55_0.18_5/0.35)]">
              <img src={womenImg} alt="Woman-led leadership at SNZ Ventures" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/30 via-transparent to-transparent" />
            </div>
          </Reveal>
          <div>
            <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-rose-deep">Women in Leadership</span>
            <h2 className="mt-6 font-serif italic text-4xl md:text-5xl leading-[1.05]">
              A woman-led firm, by design, not by accident.
            </h2>
            <p className="mt-8 text-foreground/80 leading-relaxed max-w-xl">
              SNZ Ventures was founded by women and continues to be led by women. We back female founders crossing borders, women re-entering the workforce after relocation, and girls applying to European universities from regions where that pathway is still uncommon. We believe access to capital, education and mobility should not depend on a passport or a postcode.
            </p>
            <p className="mt-6 text-foreground/80 leading-relaxed max-w-xl">
              Every senior practitioner you meet at SNZ has a voice in how we run our mandates · and an obligation to widen the door for the next professional behind them.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 max-w-xl">
              <div className="bg-background p-5">
                <div className="font-serif text-2xl text-rose-deep">100%</div>
                <div className="mt-1 text-[10px] tracking-[0.2em] uppercase text-slate">Woman-owned</div>
              </div>
              <div className="bg-background p-5">
                <div className="font-serif text-2xl text-rose-deep">62%</div>
                <div className="mt-1 text-[10px] tracking-[0.2em] uppercase text-slate">Senior team women</div>
              </div>
              <div className="bg-background p-5">
                <div className="font-serif text-2xl text-rose-deep">50/50</div>
                <div className="mt-1 text-[10px] tracking-[0.2em] uppercase text-slate">Mandate parity goal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Bridging Academia & Industry</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.1]">
            SNZ Ventures has been bridging the gap between <span className="italic text-gold">academia and industry</span> since day one.
          </h2>
          <p className="mt-8 text-slate max-w-3xl mx-auto text-lg leading-relaxed">
            We sit at the table with universities, employers, regulators and students. We move graduates into European jobs, place researchers into industry mandates and seed companies with the very talent we helped relocate. The result is a closed loop between European education, European employment and European entrepreneurship · one we are proud to have helped build.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-midnight text-midnight-foreground">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Core Values</Eyebrow>
          <SectionTitle className="mt-6 text-white max-w-3xl">
            Six commitments we measure ourselves against.
          </SectionTitle>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 60}>
                <div className="bg-midnight p-8 h-full">
                  <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-serif text-xl mb-3">{v.t}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Milestones</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">A short history.</SectionTitle>
          <div className="mt-16 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-foreground/10 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <Reveal key={m.y} delay={i * 60}>
                  <div className="grid md:grid-cols-[120px_1fr] gap-6 items-start">
                    <div className="relative">
                      <div className="size-12 grid place-items-center bg-gold text-midnight font-serif text-sm">{m.y}</div>
                    </div>
                    <div className="border-b border-foreground/10 pb-8">
                      <h4 className="font-serif text-2xl">{m.t}</h4>
                      <p className="mt-3 text-slate max-w-2xl">{m.b}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Social Impact</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">
            Connecting academia, industry and underrepresented talent.
          </SectionTitle>
          <p className="mt-8 max-w-2xl text-slate">
            SNZ Ventures actively partners with universities, employer groups and
            civic initiatives to widen access to European opportunity, particularly
            for women in technology, first-generation founders and students from
            emerging economies.
          </p>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
            <div className="bg-background p-8"><StatCounter value={60} suffix="%" label="Mandates from emerging markets" /></div>
            <div className="bg-background p-8"><StatCounter value={100} suffix="%" label="Woman-owned and operated" /></div>
            <div className="bg-background p-8"><StatCounter value={6} label="Service lines, one ecosystem" /></div>
            <div className="bg-background p-8"><StatCounter value={27} label="EU member states served" /></div>
          </div>
        </div>
      </section>

      <Marquee items={["Bank of Lithuania", "Invest Lithuania", "Vilnius Tech Park", "Startup Lithuania", "Enterprise Europe Network", "EU Blue Card Network", "Erasmus+"]} />

      <ConsultationCTA />
    </Shell>
  );
}