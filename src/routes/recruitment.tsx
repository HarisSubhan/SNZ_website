import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageHero, Eyebrow, SectionTitle } from "@/components/site/Shell";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { FAQ } from "@/components/site/FAQ";
import { Tilt3D } from "@/components/site/Tilt3D";
import { Parallax } from "@/components/site/Parallax";
import { StepFlow } from "@/components/site/StepFlow";
import heroImg from "@/assets/hero-recruitment.jpg";

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: "Jobs in Europe for South Asian & Middle Eastern Talent · SNZ Ventures" },
      { name: "description", content: "White-collar and blue-collar placement across Europe for candidates from South Asia and the Middle East. Drivers, electricians, welders, nurses, engineers, IT and finance roles with visa, relocation and language support." },
      { property: "og:title", content: "European Jobs for Global Talent · SNZ Ventures" },
      { property: "og:description", content: "From skilled trades to senior engineers, settle and work legally in Europe with end-to-end SNZ support." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: RecruitmentPage,
});

const whiteCollar = [
  { t: "IT & Software", b: "Engineers, DevOps, QA, data and AI specialists across product and services companies." },
  { t: "Finance & Accounting", b: "Accountants, controllers, financial analysts and audit professionals for European groups." },
  { t: "Healthcare", b: "Nurses, doctors, caregivers and allied health professionals for hospitals and elder-care providers." },
  { t: "Engineering", b: "Mechanical, electrical, civil and process engineers for industrial and infrastructure projects." },
  { t: "Hospitality Management", b: "Restaurant managers, hotel supervisors and front-of-house leaders for chains and boutique groups." },
  { t: "Sales & Marketing", b: "Multilingual sales executives, marketing managers and business development professionals." },
];

const blueCollar = [
  { t: "CE & CE+E Drivers", b: "International truck drivers with CE category licences for logistics operators across the EU." },
  { t: "Welders & Fabricators", b: "MIG, TIG, MAG welders and metal fabricators with EN-certified credentials." },
  { t: "Electricians", b: "Industrial and residential electricians, low and medium voltage, for construction and maintenance." },
  { t: "Construction", b: "Carpenters, masons, plumbers, plasterers and finishers for residential and commercial projects." },
  { t: "Warehouse & Logistics", b: "Pickers, packers, forklift operators and warehouse leads for e-commerce and 3PL operators." },
  { t: "Factory & Production", b: "Assembly operators, machinists and production technicians for automotive and electronics plants." },
];

const funnel = [
  { n: "01", t: "Profile Assessment", b: "CV review, skills mapping, language level and target country preferences." },
  { n: "02", t: "Verification", b: "Document, qualification and reference checks. Diploma recognition where required." },
  { n: "03", t: "Employer Match", b: "Shortlisting against active European employer mandates aligned to your profile." },
  { n: "04", t: "Offer & Contract", b: "Employer interviews, offer negotiation and bilingual contract review." },
  { n: "05", t: "Visa & Work Permit", b: "Embassy file preparation, work-permit filing and pre-departure briefing." },
  { n: "06", t: "First 90 Days", b: "Airport pickup, housing, bank account, residence registration and language onboarding." },
];

const visas = [
  { t: "EU Blue Card", b: "Salaried specialists with a recognised degree and a qualifying salary, valid across most EU states with family reunification." },
  { t: "National D Visa", b: "Long-stay work and residence pathway for skilled workers, including blue-collar roles outside Blue Card thresholds." },
  { t: "ICT Permit", b: "Intra-corporate transferees relocating within a multinational group across the EU." },
  { t: "Seasonal Worker Permit", b: "Short-term agricultural, hospitality and logistics employment with structured re-entry options." },
  { t: "Lithuanian TRP for Employment", b: "Temporary residence permit for employment in Lithuania, including fast-track for shortage occupations." },
];

const sourceRegions = [
  { region: "South Asia", countries: ["India", "Pakistan", "Bangladesh", "Nepal", "Sri Lanka"] },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Egypt", "Jordan", "Iraq", "Lebanon"] },
];

const destinations = ["Lithuania", "Germany", "Poland", "Netherlands", "Czech Republic", "Slovakia", "Spain", "Italy", "Romania"];

function RecruitmentPage() {
  const [audience, setAudience] = useState<"candidate" | "employer">("candidate");
  const [track, setTrack] = useState<"white" | "blue">("white");
  return (
    <Shell>
      <PageHero
        eyebrow="Talent & Recruitment"
        title={<>Work and settle in <span className="italic text-gold">Europe</span>, from skilled trades to senior engineering.</>}
        lede="SNZ places candidates from South Asia and the Middle East into white-collar and blue-collar roles across the European Union. From CE drivers to nurses, electricians to software engineers, with visa, relocation and language support handled end to end."
        image={heroImg}
      />

      <section className="py-12 px-6 bg-stone border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate text-sm">Choose your view to see how we work with you.</p>
          <div className="inline-flex bg-background border border-foreground/10">
            {(["candidate", "employer"] as const).map((a) => (
              <button
                key={a}
                onClick={() => setAudience(a)}
                className={
                  "px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase transition-colors " +
                  (audience === a ? "bg-midnight text-midnight-foreground" : "hover:bg-stone")
                }
              >
                I'm {a === "candidate" ? "a Candidate" : "an Employer"}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-midnight text-midnight-foreground">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {audience === "candidate" ? (
            <>
              <Reveal>
                <Eyebrow>For Candidates</Eyebrow>
                <SectionTitle className="mt-6 text-white">
                  A supervised pathway from application to your first month in Europe.
                </SectionTitle>
                <p className="mt-6 text-white/70 max-w-md">
                  We work with applicants from South Asia and the Middle East across white-collar and
                  blue-collar professions. SNZ handles employer matching, contract review, visa
                  documentation, flights, airport pickup, housing and the first three months on the ground.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                {["CV Review", "Skills Verification", "Employer Matching", "Interview Coaching", "Offer & Contract", "Visa & Work Permit", "Language Onboarding", "Housing & Settlement"].map((s, i) => (
                  <div key={s} className="bg-midnight p-6">
                    <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3">{String(i + 1).padStart(2, "0")}</div>
                    <div className="font-serif text-base">{s}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <Reveal>
                <Eyebrow>For Employers</Eyebrow>
                <SectionTitle className="mt-6 text-white">
                  Pre-screened, work-permit-ready talent for shortage occupations.
                </SectionTitle>
                <p className="mt-6 text-white/70 max-w-md">
                  We supply European employers with vetted candidates across logistics, construction,
                  industrial, healthcare and technology. Every candidate arrives with documents verified,
                  work permit filed and a settlement plan agreed.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                {["Mandate Brief", "Targeted Sourcing", "Skills Testing", "Work-Permit Filing", "Bilingual Contracts", "Payroll Setup", "Retention Programme", "Pipeline Reporting"].map((s, i) => (
                  <div key={s} className="bg-midnight p-6">
                    <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3">{String(i + 1).padStart(2, "0")}</div>
                    <div className="font-serif text-base">{s}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          <div className="bg-background p-8"><StatCounter value={11} label="Source countries" /></div>
          <div className="bg-background p-8"><StatCounter value={9} label="EU destination markets" /></div>
          <div className="bg-background p-8"><StatCounter value={12} label="Job families covered" /></div>
          <div className="bg-background p-8"><StatCounter value={90} suffix="d" label="Average time to start" /></div>
        </div>
      </section>

      <section className="py-28 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Job Families</Eyebrow>
              <SectionTitle className="mt-6 max-w-3xl">Twelve professions, two collars, one route into Europe.</SectionTitle>
            </div>
            <div className="inline-flex bg-background border border-foreground/10">
              {(["white", "blue"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTrack(t)}
                  className={
                    "px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase transition-colors " +
                    (track === t ? "bg-midnight text-midnight-foreground" : "hover:bg-stone")
                  }
                >
                  {t === "white" ? "White-Collar" : "Blue-Collar"}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(track === "white" ? whiteCollar : blueCollar).map((s, i) => (
              <Reveal key={s.t} delay={i * 50}>
                <Tilt3D className="h-full">
                  <div className="bg-background border border-foreground/10 p-8 h-full hover:border-gold transition-colors group">
                    <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-5">
                      {String(i + 1).padStart(2, "0")} · {track === "white" ? "White-Collar" : "Blue-Collar"}
                    </div>
                    <h4 className="font-serif text-xl mb-3 group-hover:text-gold transition-colors">{s.t}</h4>
                    <p className="text-sm text-slate leading-relaxed">{s.b}</p>
                  </div>
                </Tilt3D>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-foreground/10">
        <div className="absolute inset-0">
          <Parallax speed={0.18} className="w-full h-[140%] -mt-[20%]">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
          </Parallax>
          <div className="absolute inset-0 bg-midnight/88" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white grid lg:grid-cols-[1.2fr_1fr] gap-16">
          <div>
            <Eyebrow>Source to Destination</Eyebrow>
            <SectionTitle className="mt-6 text-white max-w-2xl">From South Asia and the Middle East, into the European Union.</SectionTitle>
            <p className="mt-6 text-white/70 max-w-lg">
              We work primarily with candidates who already speak the destination language or are
              willing to learn German, Polish, Dutch, Lithuanian or the local language before departure.
              Free pre-departure language onboarding is included for every placement.
            </p>
          </div>
          <div className="space-y-8">
            {sourceRegions.map((r) => (
              <div key={r.region}>
                <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3">{r.region}</div>
                <div className="flex flex-wrap gap-2">
                  {r.countries.map((c) => (
                    <span key={c} className="px-3 py-1.5 bg-white/10 text-sm">{c}</span>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-3">European Destinations</div>
              <div className="flex flex-wrap gap-2">
                {destinations.map((c) => (
                  <span key={c} className="px-3 py-1.5 bg-gold text-midnight text-sm font-medium">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Candidate Funnel</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">Six supervised stages, from application to settled life.</SectionTitle>
          <div className="mt-16">
            <StepFlow steps={funnel.map((f) => ({ title: f.t, body: f.b }))} />
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Visa & Mobility</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">Five legal pathways into European work.</SectionTitle>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {visas.map((v, i) => (
              <div key={v.t} className="bg-background p-8">
                <div className="text-gold font-serif text-3xl mb-4">0{i + 1}</div>
                <h4 className="font-serif text-xl mb-3">{v.t}</h4>
                <p className="text-sm text-slate leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        title="Working in Europe, answered."
        items={[
          { q: "Do I need to speak the local language?", a: "Many roles, especially in IT, healthcare and international logistics, accept English. For most blue-collar and customer-facing roles you will need basic German, Polish, Dutch or the destination language. SNZ provides free pre-departure language onboarding for every placement." },
          { q: "Can I bring my family?", a: "Yes. EU Blue Card and most national work permits allow family reunification. We coordinate spouse and child visas, schooling and housing in parallel." },
          { q: "Who pays for the visa and flights?", a: "It varies by employer. Many of our partners cover the work-permit filing, flights and initial housing. We confirm the package in writing before you accept any offer." },
          { q: "Will my diploma be recognised?", a: "We coordinate qualification recognition for regulated professions such as nursing, medicine and engineering. For most blue-collar and IT roles, employer-side skills assessment is sufficient." },
          { q: "Is the relocation halal and family friendly?", a: "Yes. We brief candidates on prayer facilities, halal food access, mosques and community networks in every destination city before departure." },
          { q: "What kind of salary can I expect?", a: "Salaries align to the destination country's market rate for the role and the legal minimum required for the chosen visa category. Every offer is reviewed with you before signing." },
          { q: "How long are the contracts?", a: "Most permanent work permits start with a one-year contract that renews annually. EU Blue Card holders gain long-term residence rights after 33 months, reduced to 21 months with B1 language." },
          { q: "Can I switch employer after I arrive?", a: "After an initial qualifying period that varies by country, most permits allow you to change employer within the same occupation. We brief every candidate on the rules for their destination." },
        ]}
      />

      <ConsultationCTA
        eyebrow="Talent Briefing"
        title="Start your move to Europe."
        body="Send your CV, your target country and the language you are willing to learn. A senior recruiter will respond within one working day with an honest assessment and the next steps."
      />
    </Shell>
  );
}