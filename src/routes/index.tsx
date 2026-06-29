import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Eyebrow, SectionTitle } from "@/components/site/Shell";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { FAQ } from "@/components/site/FAQ";
import { Marquee } from "@/components/site/Marquee";
import { MagneticLink } from "@/components/site/MagneticButton";
import { Parallax } from "@/components/site/Parallax";
import { EditorialList } from "@/components/site/EditorialList";
import { CaseRail } from "@/components/site/CaseRail";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-home.jpg";
import lithuaniaImg from "@/assets/hero-lithuania.jpg";
import recruitImg from "@/assets/hero-recruitment.jpg";
import studentsImg from "@/assets/hero-students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SNZ Ventures · European Gateway for Business, Fintech & Talent" },
      { name: "description", content: "Woman-owned European consulting ecosystem based in Vilnius. Company formation, fintech licensing in Lithuania, investor relocation, international recruitment and student placement." },
      { property: "og:title", content: "SNZ Ventures · European Gateway" },
      { property: "og:description", content: "Bespoke pathways into Europe · one ecosystem, not multiple providers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Shell>
      <Hero />
      <PartnerStrip />
      <Ecosystem />
      <FintechBand />
      <TalentCorridor />
      <StudentStrip />
      <Differentiators />
      <CaseStudies />
      <HomeFAQ />
      <MissionBand />
      <ConsultationCTA />
    </Shell>
  );
}

function Hero() {
  const words = ["business", "fintech", "talent", "education", "residency"];
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-vignette" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-32 grid lg:grid-cols-12 gap-12 items-end text-white">
        <div className="lg:col-span-8 animate-reveal">
          <Eyebrow>Woman-Owned · European Advisory · Based in Vilnius</Eyebrow>
          <h1 className="mt-8 font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.98] tracking-tight">
            Your European gateway for
            <br />
            <span key={i} className="italic text-gold inline-block min-w-[6ch] animate-reveal">
              {words[i]}.
            </span>
          </h1>
          <p className="mt-10 text-xl text-white/85 max-w-2xl leading-relaxed">
            One advisory ecosystem for company formation, fintech licensing in
            Lithuania, international recruitment, investor relocation and student
            placement across the European Union.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <MagneticLink to="/contact" className="px-7 py-4 bg-gold text-midnight text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-white">
              Book a Confidential Briefing
            </MagneticLink>
            <MagneticLink to="/fintech" className="px-7 py-4 border border-white/40 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-white hover:text-midnight">
              Explore Fintech Flagship
            </MagneticLink>
          </div>
        </div>
        <div className="lg:col-span-4 relative h-full min-h-[280px]">
          {[
            { v: "400+", l: "Entities Formed", x: "0%", y: "0%", rot: -2, delay: "0ms" },
            { v: "27", l: "EU Markets Served", x: "55%", y: "10%", rot: 3, delay: "120ms" },
            { v: "12", l: "Talent Source Hubs", x: "8%", y: "55%", rot: 2, delay: "240ms" },
            { v: "6", l: "Service Verticals", x: "58%", y: "62%", rot: -3, delay: "360ms" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="absolute w-[44%] animate-reveal animate-float"
              style={{ left: s.x, top: s.y, transform: `rotate(${s.rot}deg)`, animationDelay: s.delay, animationDuration: `${7 + i}s` }}
            >
              <div className="relative bg-white/8 backdrop-blur-xl border border-white/20 p-5 text-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] hover:bg-white/15 hover:border-gold/60 transition-colors">
                <span className="absolute -top-px left-0 h-px w-12 bg-gold" />
                <div className="font-serif text-3xl md:text-4xl tracking-tight">{s.v}</div>
                <div className="mt-3 text-[9px] tracking-[0.3em] uppercase text-white/65">{s.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerStrip() {
  return (
    <Marquee
      items={[
        "Bank of Lithuania",
        "Invest Lithuania",
        "Vilnius Tech Park",
        "Startup Lithuania",
        "Enterprise Europe Network",
        "EU Blue Card Network",
        "Erasmus+",
      ]}
    />
  );
}

const pillars = [
  { n: "01", title: "Company Formation & Accounting", to: "/lithuania", body: "UAB and MB incorporation, legal address, VAT, EORI, payroll, accounting and corporate secretarial · one Vilnius team for your full back office." },
  { n: "02", title: "Fintech Establishment", to: "/fintech", body: "EMI, PI, specialised bank and crypto licensing in Lithuania, with compliance frameworks, MLRO sourcing and SEPA gateway setup." },
  { n: "03", title: "Investor Relocation", to: "/contact", body: "Residence permits, family migration, real estate, tax planning and concierge settlement for founders and high-net-worth individuals." },
  { n: "04", title: "International Recruitment", to: "/recruitment", body: "White-collar and blue-collar placement across Europe for talent from South Asia and the Middle East, with visa, housing and language support." },
  { n: "05", title: "Study Abroad", to: "/study-abroad", body: "University placement, visa, scholarships and settlement across every major European study destination · eight spotlight country desks." },
  { n: "06", title: "Why Lithuania", to: "/why-lithuania", body: "The business environment, fintech leadership, lifestyle and culture that make Lithuania the EU's best-kept gateway." },
] as const;

function Ecosystem() {
  return (
    <section className="bg-midnight text-midnight-foreground py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-2xl">
            <Eyebrow>Integrated Ecosystem</Eyebrow>
            <SectionTitle className="mt-6 text-white">
              Six disciplines. One coordinated entry into Europe.
            </SectionTitle>
          </div>
          <p className="text-white/60 text-sm max-w-xs border-l border-gold pl-6">
            Every solution is custom-architected. We do not publish packages, tiers or pricing · we publish results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, idx) => (
            <Reveal key={p.n} delay={idx * 80}>
              <Link
                to={p.to}
                className="group relative block p-10 lg:p-12 h-full overflow-hidden hover:bg-white/[0.04] transition-colors"
              >
                <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10 group-hover:bg-gold transition-colors" />
                <span aria-hidden className="pointer-events-none absolute left-0 top-10 h-0 w-px bg-gold group-hover:h-[calc(100%-5rem)] transition-[height] duration-700" />
                <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-10">{p.n}</div>
                <h3 className="font-serif text-2xl md:text-3xl mb-5 leading-tight group-hover:translate-x-1 transition-transform duration-500">
                  {p.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{p.body}</p>
                <span className="mt-8 text-[10px] tracking-[0.3em] uppercase text-gold inline-flex items-center gap-3">
                  Explore
                  <span className="block h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FintechBand() {
  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <Eyebrow>Flagship · Lithuania</Eyebrow>
          <SectionTitle className="mt-6">
            The digital finance capital of the <span className="italic text-gold">Eurozone</span>.
          </SectionTitle>
          <p className="mt-8 text-slate leading-relaxed max-w-xl">
            Lithuania hosts the largest licensed fintech population in the European Union,
            operates a regulatory sandbox in English, and offers a 48-hour business
            registration window. SNZ Ventures is your direct conduit to the Bank of
            Lithuania, the Vilnius tech district and the Baltic talent pipeline.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-foreground/10 pt-8">
            <StatCounter value={1} prefix="#" label="Fintech hub in EU per capita" />
            <StatCounter value={48} suffix="h" label="Registration lead-time" />
            <StatCounter value={270} suffix="+" label="Licensed fintech entities" />
          </div>
          <Link to="/fintech" className="mt-12 inline-flex px-7 py-4 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight transition-colors">
            Fintech Establishment Services
          </Link>
        </div>
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden border border-foreground/10 group">
            <img src={lithuaniaImg} alt="Vilnius skyline" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold mb-2">Vilnius · Capital</div>
              <div className="font-serif text-3xl">Where Europe's fintech is licensed.</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TalentCorridor() {
  const sources = ["India", "Pakistan", "Bangladesh", "Nepal", "UAE", "Saudi Arabia", "Egypt", "Jordan"];
  const destinations = ["Lithuania", "Germany", "Poland", "Netherlands", "Spain", "Italy", "Czech Rep.", "Romania"];
  return (
    <section className="bg-stone py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center mb-20">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden border border-foreground/10">
              <img src={recruitImg} alt="Diverse engineering team" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Eyebrow>Talent Mobility</Eyebrow>
            <SectionTitle className="mt-6">
              A corridor between global talent and European growth.
            </SectionTitle>
            <p className="mt-6 text-slate leading-relaxed max-w-lg">
              SNZ Recruitment places candidates from South Asia and the Middle East into
              European jobs across both white-collar and blue-collar professions, from
              CE drivers and electricians to nurses, engineers and software talent.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center">
          <Column eyebrow="Source markets" items={sources} variant="light" />
          <div className="hidden lg:block">
            <svg width="120" height="180" viewBox="0 0 120 180">
              {[20, 55, 90, 125, 160].map((y, i) => (
                <path
                  key={i}
                  d={`M 0 ${y} C 60 ${y - 20 + i * 10}, 60 ${y + 20 - i * 10}, 120 ${y}`}
                  stroke="oklch(0.72 0.12 80)"
                  strokeWidth="1"
                  fill="none"
                  opacity={0.4 + i * 0.1}
                />
              ))}
            </svg>
          </div>
          <Column eyebrow="Destination employers" items={destinations} variant="dark" />
        </div>
        <div className="mt-12 flex justify-center">
          <Link to="/recruitment" className="px-7 py-4 border border-midnight text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-midnight hover:text-midnight-foreground transition-colors">
            Recruitment Division
          </Link>
        </div>
      </div>
    </section>
  );
}

function Column({ eyebrow, items, variant }: { eyebrow: string; items: string[]; variant: "light" | "dark" }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-slate mb-6">{eyebrow}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <span
            key={i}
            className={
              variant === "dark"
                ? "px-4 py-2 bg-midnight text-midnight-foreground text-sm tracking-wide"
                : "px-4 py-2 bg-background border border-foreground/10 text-sm tracking-wide"
            }
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function StudentStrip() {
  const stages = [
    { n: "01", t: "University Selection", b: "Curated shortlist across Lithuania, Germany, Hungary, Spain and Italy." },
    { n: "02", t: "Application & Documents", b: "Drafting, verification, attestation and apostille coordination." },
    { n: "03", t: "Admission & Visa", b: "Offer-letter negotiation, financial preparation, embassy briefing." },
    { n: "04", t: "Arrival & Settlement", b: "Accommodation, registration, banking and onboarding once in Europe." },
  ];
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end mb-16">
          <div className="max-w-2xl">
            <Eyebrow>Student Consultancy</Eyebrow>
            <SectionTitle className="mt-6">
              Study, relocate and build your future in Europe.
            </SectionTitle>
            <p className="mt-6 text-slate max-w-lg">
              From statement of purpose and visa to housing and the first week on
              campus · one consultant, one private portal, one accountable plan.
            </p>
            <Link to="/study-abroad" className="mt-8 inline-flex text-[11px] font-bold tracking-[0.25em] uppercase border-b border-gold pb-1 hover:text-gold transition-colors">
              Student Services →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-foreground/10">
            <img src={studentsImg} alt="University courtyard" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 relative">
          {stages.map((s, i) => (
            <li key={s.n} className="relative pl-6">
              <span className="absolute left-0 top-1 bottom-0 w-px bg-foreground/10" />
              <span className="absolute left-[-3px] top-1 size-[7px] rounded-full bg-gold" />
              <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3">{s.n}</div>
              <h4 className="font-serif text-lg mb-2">{s.t}</h4>
              <p className="text-sm text-slate leading-relaxed">{s.b}</p>
              {i < stages.length - 1 && <span aria-hidden className="hidden lg:block absolute top-3 -right-4 text-gold/40">→</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    { t: "Senior on every mandate", b: "No junior hand-offs. The advisor you brief is the advisor on your file." },
    { t: "One ecosystem, not a chain", b: "Company, licence, talent, visa and settlement under one roof, not a broker daisy-chain." },
    { t: "Bespoke, not packaged", b: "We do not publish tiers or pricing. Every scope is engineered to your objective." },
    { t: "Lithuania-rooted, EU-wide", b: "A Vilnius base for the EU's fastest regulator, partnerships across 27 member states." },
  ];
  return (
    <section className="py-28 px-6 bg-stone">
      <div className="max-w-7xl mx-auto">
        <Eyebrow>Why SNZ</Eyebrow>
        <SectionTitle className="mt-6 max-w-3xl">
          Four reasons clients consolidate their European work with us.
        </SectionTitle>
        <div className="mt-10">
          <EditorialList items={items.map((i) => ({ title: i.t, body: i.b }))} />
        </div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  return (
    <FAQ
      title="The questions clients ask before the first call."
      items={[
        { q: "Do you publish prices or service packages?", a: "No. Every mandate is scoped from a private briefing. You receive a written proposal with deliverables, timing and fees before any engagement begins." },
        { q: "Are you only active in Lithuania?", a: "Lithuania is our base and our flagship corridor for fintech licensing. We deliver company formation, recruitment, relocation and student placement across the entire EU." },
        { q: "Who is the typical SNZ client?", a: "Founders entering Europe, fintech operators seeking authorisation, employers hiring senior engineering talent, investors relocating with family, and students applying to EU universities." },
        { q: "How fast can you respond to a new enquiry?", a: "A senior advisor replies within one working day with a preliminary assessment and proposed next steps." },
        { q: "Do you work with first-time founders or only established firms?", a: "Both. We specifically support first-generation founders and underrepresented operators alongside scaled enterprises." },
        { q: "Is SNZ Ventures regulated?", a: "We coordinate regulated work through licensed partners (auditors, law firms, MLROs). SNZ acts as the integrated programme advisor on every mandate." },
      ]}
    />
  );
}

function CaseStudies() {
  const cases = [
    {
      tag: "Talent · Pakistan → Lithuania",
      title: "Senior ML engineer placed at a Vilnius EMI within 47 days.",
      challenge: "Sponsoring an experienced ML lead with a non-EU degree into a regulated fintech employer.",
      outcome: "Blue Card approval, relocation logistics and family settlement coordinated end-to-end.",
    },
    {
      tag: "Fintech · UK → Lithuania",
      title: "EMI licensure secured for a cross-border payments founder.",
      challenge: "Reauthorising a post-Brexit payments business with European passporting and SEPA access.",
      outcome: "Lithuanian EMI granted; corporate structure, compliance and accounting onboarded by SNZ.",
    },
    {
      tag: "Education · India → Germany",
      title: "Graduate engineering cohort admitted to TU-network universities.",
      challenge: "Twelve applicants requiring credential evaluation, financing and visa interview preparation.",
      outcome: "All twelve admitted; nine progressed into industry placements within their first year.",
    },
  ];
  return (
    <section className="bg-midnight text-midnight-foreground py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Eyebrow>Case Audits</Eyebrow>
          <SectionTitle className="mt-6 text-white">
            Outcomes our clients return for.
          </SectionTitle>
          <p className="mt-5 text-sm text-white/50 max-w-md">Hover a case to expand · the others collapse to vertical spines.</p>
        </div>
        <CaseRail cases={cases} />
      </div>
    </section>
  );
}

function MissionBand() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Eyebrow>Mission</Eyebrow>
        <p className="mt-8 font-serif italic text-3xl md:text-5xl leading-[1.15] text-balance">
          "We believe geography should not be a barrier to ambition.
          SNZ Ventures dismantles the borders between European opportunity
          and the people best equipped to seize it."
        </p>
        <p className="mt-10 text-[10px] tracking-[0.3em] uppercase text-slate">
          Founder &amp; Managing Partner · Woman-Owned Enterprise
        </p>
      </div>
    </section>
  );
}