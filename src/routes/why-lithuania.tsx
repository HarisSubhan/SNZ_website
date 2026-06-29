import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageHero, Eyebrow, SectionTitle } from "@/components/site/Shell";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { FAQ } from "@/components/site/FAQ";
import { Parallax } from "@/components/site/Parallax";
import { MagneticLink } from "@/components/site/MagneticButton";
import heroImg from "@/assets/why-lt-hero.jpg";
import bizImg from "@/assets/lt-business.jpg";
import fintechImg from "@/assets/lt-fintech-hub.jpg";
import cultureImg from "@/assets/lt-culture.jpg";
import studentImg from "@/assets/lt-student-life.jpg";

export const Route = createFileRoute("/why-lithuania")({
  head: () => ({
    meta: [
      { title: "Why Lithuania · The EU's Best-Kept Gateway · SNZ Ventures" },
      { name: "description", content: "Why founders, fintech operators, students and families pick Lithuania for their European chapter. Eurozone, Schengen, English-fluent regulators, fastest EU incorporation and a fintech capital in Vilnius." },
      { property: "og:title", content: "Why Lithuania · SNZ Ventures" },
      { property: "og:description", content: "Business environment, fintech leadership, talent, lifestyle and culture · the case for Lithuania in one place." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: WhyLithuaniaPage,
});

const pillars = [
  { t: "Eurozone & Schengen", b: "Full EU member, eurozone since 2015 and Schengen since 2007. One currency, one passport-free travel zone, single-market access from day one." },
  { t: "Fastest EU Incorporation", b: "A UAB is registered in 48 working hours. The Centre of Registers, notaries and the State Tax Inspectorate all operate in English." },
  { t: "English-Fluent Regulators", b: "The Bank of Lithuania, FCIS and Migration Department all process foreign applications in English with documented service times." },
  { t: "Fintech Capital of the EU", b: "The largest licensed fintech population in the Union per capita, an English-language regulatory sandbox and direct SEPA access." },
  { t: "Talent & Languages", b: "98% of under-30s speak English. Strong STEM pipelines from Vilnius University, KTU and VILNIUS TECH feed a deep developer market." },
  { t: "Cost-Effective EU Base", b: "Vilnius offers western-European quality of life at central-European cost. Office rents, salaries and living costs sit well below Berlin or Amsterdam." },
];

const lifestyle = [
  { t: "Business District", img: bizImg, b: "A compact, walkable CBD with glass towers, embassies, banks and EMI head offices on either side of the Neris river." },
  { t: "Fintech & Coworking", img: fintechImg, b: "Vilnius Tech Park, Rise Vilnius and dozens of independent coworking spaces host the EU's densest fintech community." },
  { t: "Old Town & Culture", img: cultureImg, b: "A UNESCO baroque old town, year-round festivals, a serious coffee culture and one of Europe's safest capital cities." },
  { t: "Student & Academic Life", img: studentImg, b: "Five universities, 60,000 students and historic campuses that have shaped Lithuanian science and humanities since 1579." },
];

const fintechReasons = [
  { t: "Direct EMI & PI Authorisation", b: "Lithuania authorises Electronic Money Institutions and Payment Institutions directly with EU-wide passporting." },
  { t: "Regulatory Sandbox", b: "The Bank of Lithuania operates an English-language sandbox for live testing under supervisory comfort." },
  { t: "SEPA & CENTROlink", b: "Non-bank fintechs gain direct access to SEPA via CENTROlink, the Bank of Lithuania's payment rails." },
  { t: "CASP Authorisation", b: "Crypto-Asset Service Provider authorisations are issued domestically with MiCA-aligned supervision." },
];

const studentReasons = [
  { t: "Lowest EU Tuition Bands", b: "Programs across Vilnius University, KTU and VGTU sit at a fraction of UK or Dutch tuition." },
  { t: "12-Month Post-Study Permit", b: "Graduates can stay 12 months to find work, with seamless transition to a single permit." },
  { t: "English-Taught BA and MSc", b: "Hundreds of English programs across engineering, medicine, business and ICT." },
  { t: "Schengen & EU Residency", b: "Student residency includes Schengen travel and the right to work part-time during studies." },
];

function WhyLithuaniaPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Why Lithuania"
        title={<>The EU's <span className="italic text-gold">best-kept gateway</span> for business, fintech and study.</>}
        lede="A founding eurozone member with the EU's fastest incorporation, the Union's densest fintech population per capita, a young and English-fluent workforce and a UNESCO capital that is consistently ranked among Europe's safest. Lithuania is where SNZ chose to base its work · and where we believe most of our clients should base theirs."
        image={heroImg}
      />

      <section className="relative bg-midnight text-midnight-foreground py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.72 0.18 135 / 0.25), transparent 55%), radial-gradient(circle at 80% 70%, oklch(0.72 0.16 5 / 0.18), transparent 55%)" }} />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <Eyebrow>Lithuania at a glance</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl max-w-2xl">Four numbers that explain why founders, fintechs and families pick Vilnius.</h2>
            </div>
            <p className="text-sm text-white/55 max-w-xs border-l border-gold pl-5">Sources · Bank of Lithuania, Invest Lithuania, Eurostat (2024).</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
            {[
              { v: 48, s: "h", l: "UAB incorporation" },
              { v: 270, s: "+", l: "Licensed fintech entities" },
              { v: 98, s: "%", l: "Under-30s speak English" },
              { v: 5, s: "%", l: "Reduced corporate tax band" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="relative pt-6 group"
                style={{ animation: `reveal-up 0.9s ${i * 90}ms cubic-bezier(0.16,1,0.3,1) both` }}
              >
                <span className="absolute top-0 left-0 h-px w-12 bg-gold transition-all duration-500 group-hover:w-full" />
                <span className="absolute top-2 right-0 text-[9px] tracking-[0.3em] text-white/30 font-mono">0{i + 1}</span>
                <StatCounter value={s.v} suffix={s.s} label={s.l} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Business Environment</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">Six pillars that put Lithuania ahead of larger EU capitals.</SectionTitle>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 60}>
                <div className="group relative">
                  <span className="block h-px w-16 bg-gold mb-6 transition-all duration-500 group-hover:w-32" />
                  <div className="font-serif italic text-5xl text-foreground/15 leading-none mb-4 group-hover:text-gold transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-serif text-xl mb-3 group-hover:translate-x-1 transition-transform">{p.t}</h4>
                  <p className="text-sm text-slate leading-relaxed max-w-sm">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Living & Working</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">A capital that is small enough to know and serious enough to scale in.</SectionTitle>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {lifestyle.map((l, i) => (
              <Reveal key={l.t} delay={i * 80}>
                <div className="group relative aspect-[4/3] overflow-hidden border border-foreground/10">
                  <img src={l.img} alt={l.t} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{String(i + 1).padStart(2, "0")}</div>
                    <div className="font-serif text-2xl">{l.t}</div>
                    <p className="mt-2 text-sm text-white/80 max-w-sm">{l.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-foreground/10">
        <div className="absolute inset-0">
          <Parallax speed={0.18} className="w-full h-[140%] -mt-[20%]">
            <img src={fintechImg} alt="" className="w-full h-full object-cover" />
          </Parallax>
          <div className="absolute inset-0 bg-midnight/88" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-white">
          <Eyebrow>For Fintech Operators</Eyebrow>
          <SectionTitle className="mt-6 text-white max-w-3xl">Why Europe's payment and crypto firms incorporate in Vilnius.</SectionTitle>
          <ol className="mt-14 relative grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {fintechReasons.map((f, i) => (
              <li key={f.t} className="relative group pt-5">
                <span className="absolute top-0 left-0 h-px w-10 bg-gold transition-all duration-500 group-hover:w-full" />
                <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h4 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">{f.t}</h4>
                <p className="text-sm text-white/65 leading-relaxed">{f.b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <MagneticLink to="/fintech" className="px-7 py-4 bg-gold text-midnight text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-white">
              Fintech Establishment
            </MagneticLink>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-foreground/10">
              <img src={studentImg} alt="Vilnius student life" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Eyebrow>For Students</Eyebrow>
            <SectionTitle className="mt-6">A serious academic tradition, at an honest price.</SectionTitle>
            <p className="mt-6 text-slate max-w-xl">
              Vilnius University was founded in 1579 and remains one of Northern Europe's oldest. Today Lithuania hosts five major universities, a vibrant English-taught program offering and a graduate work pathway that lets you stay and build a career in the EU.
            </p>
            <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {studentReasons.map((r, i) => (
                <li key={r.t} className="group border-l border-foreground/15 hover:border-gold transition-colors pl-5">
                  <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">{String(i + 1).padStart(2, "0")}</div>
                  <h4 className="font-serif text-base mb-2">{r.t}</h4>
                  <p className="text-sm text-slate leading-relaxed">{r.b}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticLink to="/study-abroad" className="px-7 py-4 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight">
                Study Abroad
              </MagneticLink>
              <Link to="/lithuania" className="px-7 py-4 border border-foreground/15 text-[11px] font-bold tracking-[0.25em] uppercase hover:border-midnight transition-colors">
                Set up a company
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Quality of Life</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">Numbers behind a quietly excellent quality of life.</SectionTitle>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="border-t border-gold/40 pt-5"><StatCounter value={3} label="Hours flight to most EU capitals" /></div>
            <div className="border-t border-gold/40 pt-5"><StatCounter value={1} prefix="#" label="Safest capital in CEE" /></div>
            <div className="border-t border-gold/40 pt-5"><StatCounter value={60} suffix="%" label="Green cover in Vilnius" /></div>
            <div className="border-t border-gold/40 pt-5"><StatCounter value={4} label="International schools in Vilnius" /></div>
          </div>
        </div>
      </section>

      <FAQ
        title="What people ask before moving to Lithuania."
        items={[
          { q: "Is Lithuania part of the European Union and the eurozone?", a: "Yes. Lithuania is a full EU member, joined the eurozone in 2015 and the Schengen area in 2007." },
          { q: "Do I need to speak Lithuanian?", a: "No. English is widely spoken in business, government and universities. Lithuanian is welcome but not required to live, work or study." },
          { q: "How safe is Vilnius?", a: "Vilnius is consistently ranked among the safest capital cities in Central and Eastern Europe with very low violent-crime rates." },
          { q: "Can my family join me if I relocate?", a: "Yes. Family reunification is part of every residency pathway, from EU Blue Card to investor visas and student dependents." },
          { q: "What about healthcare?", a: "Lithuania has universal public healthcare for residents and a well-developed private healthcare sector concentrated in Vilnius and Kaunas." },
          { q: "What does it cost to live in Vilnius?", a: "Cost of living is roughly 30 to 45% lower than Berlin or Amsterdam with comparable quality of housing, dining and services." },
        ]}
      />

      <ConsultationCTA
        eyebrow="Talk to SNZ"
        title="See if Lithuania fits your plan."
        body="Tell us whether you are setting up a company, applying for a fintech licence or sending a child to university in Europe. We will return a tailored next step within one working day."
      />
    </Shell>
  );
}