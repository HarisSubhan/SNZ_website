import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageHero, Eyebrow, SectionTitle } from "@/components/site/Shell";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { FAQ } from "@/components/site/FAQ";
import { TabPanel } from "@/components/site/TabPanel";
import { StepFlow } from "@/components/site/StepFlow";
import { MagneticLink } from "@/components/site/MagneticButton";
import uniVilnius from "@/assets/uni-vilnius.jpg";
import uniKtu from "@/assets/uni-ktu.jpg";
import uniVgtu from "@/assets/uni-vgtu.jpg";
import uniTum from "@/assets/uni-tum.jpg";
import uniRwth from "@/assets/uni-rwth.jpg";
import uniTub from "@/assets/uni-tub.jpg";
import uniElte from "@/assets/uni-elte.jpg";
import uniCorvinus from "@/assets/uni-corvinus.jpg";
import uniUb from "@/assets/uni-ub.jpg";
import uniIe from "@/assets/uni-ie.jpg";
import uniPolimi from "@/assets/uni-polimi.jpg";
import uniBocconi from "@/assets/uni-bocconi.jpg";
import heroImg from "@/assets/hero-students.jpg";

export const Route = createFileRoute("/study-abroad")({
  head: () => ({
    meta: [
      { title: "Study Abroad in Europe · University Placement · SNZ Ventures" },
      { name: "description", content: "End-to-end university placement, visa and settlement support across every major European study destination. Eight spotlight countries, open access to any accredited European university." },
      { property: "og:title", content: "Study Abroad in Europe · SNZ Ventures" },
      { property: "og:description", content: "From counselling to graduation, study at any major European university with SNZ." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: StudyAbroadPage,
});

const journey = [
  { title: "Discovery Call", body: "Aspirations, academic record, budget and target country mapped together in a private call." },
  { title: "University Shortlist", body: "A curated, ranked shortlist across our eight spotlight countries and any institution on request." },
  { title: "Application Pack", body: "SOPs, LORs, transcripts, attestation and submission tracked in your private SNZ portal." },
  { title: "Offer & Finance", body: "Offer negotiation, scholarship guidance and financial documentation for the embassy file." },
  { title: "Visa & Travel", body: "Embassy briefing, mock interview, accommodation booking and pre-departure orientation." },
  { title: "Arrival & Beyond", body: "On-ground settlement, registration, banking, language onboarding and graduate career planning." },
];

const portalFeatures = [
  "Secure document upload and vault",
  "Real-time application tracking",
  "Direct consultant messaging",
  "Milestone and deadline reminders",
  "Offer-letter and visa status updates",
  "Pre-departure checklist",
];

const countries = [
  { id: "lt", label: "Lithuania", content: <CountryDetail name="Lithuania" fields="Engineering, ICT, Business, Medicine" intake="Sep · Feb" lang="English-taught BA and MSc programs" work="Post-study residence permit for 12 months" cost="Among the lowest in the EU" /> },
  { id: "de", label: "Germany", content: <CountryDetail name="Germany" fields="Engineering, CS, Business, Natural Sciences" intake="Oct · Apr" lang="English MSc; German BA more common" work="18-month job-seeker visa post-graduation" cost="Public universities are tuition-free" /> },
  { id: "nl", label: "Netherlands", content: <CountryDetail name="Netherlands" fields="Business, CS, Engineering, Life Sciences" intake="Sep · Feb" lang="Largest English BSc and MSc catalogue in the EU" work="Orientation Year visa for 12 months" cost="Moderate, scholarships widely available" /> },
  { id: "hu", label: "Hungary", content: <CountryDetail name="Hungary" fields="Medicine, Business, Engineering" intake="Sep" lang="English-taught programs across all levels" work="9-month job-seeker residence permit" cost="Affordable cost of living in Central Europe" /> },
  { id: "pl", label: "Poland", content: <CountryDetail name="Poland" fields="Medicine, Business, Engineering, ICT" intake="Oct · Feb" lang="Extensive English-taught programs in Warsaw and Krakow" work="9-month post-study residence permit" cost="Among the most affordable in the EU" /> },
  { id: "es", label: "Spain", content: <CountryDetail name="Spain" fields="Business, Architecture, International Relations" intake="Sep · Jan" lang="English MSc; Spanish BA strong option" work="2-year post-study work permit" cost="Mediterranean lifestyle, moderate cost" /> },
  { id: "it", label: "Italy", content: <CountryDetail name="Italy" fields="Design, Architecture, Engineering, Business" intake="Sep · Mar" lang="Extensive English MSc programs" work="12-month post-study permit" cost="Strong scholarship coverage available" /> },
  { id: "fr", label: "France", content: <CountryDetail name="France" fields="Business, Engineering, Fashion, Hospitality" intake="Sep · Jan" lang="English programs at Grandes Écoles and most MSc" work="12-month post-study residence permit" cost="Strong public scholarship system" /> },
];

function CountryDetail({ name, fields, intake, lang, work, cost }: { name: string; fields: string; intake: string; lang: string; work: string; cost: string }) {
  return (
    <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
      <div>
        <h3 className="font-serif text-4xl">{name}</h3>
        <p className="mt-4 text-slate">Why students pick {name} for European studies.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {[
          { l: "Top Fields", v: fields },
          { l: "Intakes", v: intake },
          { l: "Language", v: lang },
          { l: "Post-Study Work", v: work },
          { l: "Cost of Living", v: cost },
        ].map((row) => (
          <div key={row.l} className="bg-background p-6">
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold">{row.l}</div>
            <div className="mt-2 text-sm">{row.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

type Uni = {
  name: string;
  country: "Lithuania" | "Germany" | "Hungary" | "Spain" | "Italy";
  rank: string;
  strength: string;
  programs: string;
  intake: string;
  language: string;
  img: string;
  about: string;
};

const universities: Uni[] = [
  { name: "Vilnius University", country: "Lithuania", rank: "Top 500 QS", strength: "Humanities · Medicine · IT", programs: "180+ degree programs", intake: "Sep · Feb", language: "English & Lithuanian", img: uniVilnius, about: "Founded in 1579, Vilnius University is one of the oldest universities in Northern Europe with a historic baroque campus and 19,000 students." },
  { name: "Kaunas University of Technology", country: "Lithuania", rank: "Top 700 QS", strength: "Engineering · Informatics · Design", programs: "120+ programs, STEM-led", intake: "Sep · Feb", language: "English & Lithuanian", img: uniKtu, about: "KTU is Lithuania's leading technology university, known for tight industry partnerships and English-language MSc programs in AI, electronics and industrial design." },
  { name: "VILNIUS TECH (VGTU)", country: "Lithuania", rank: "Top 1000 QS", strength: "Architecture · Civil · Mechatronics", programs: "Bachelor and Masters in EN", intake: "Sep", language: "English & Lithuanian", img: uniVgtu, about: "Vilnius Gediminas Technical University is the country's flagship for the built environment and applied engineering." },
  { name: "TU Munich", country: "Germany", rank: "#28 QS World", strength: "Engineering · CS · Natural Sciences", programs: "Tuition-free public university", intake: "Oct · Apr", language: "English MSc, German BA", img: uniTum, about: "Germany's top-ranked technical university and a magnet for international STEM postgraduates." },
  { name: "RWTH Aachen", country: "Germany", rank: "Top 100 QS", strength: "Mechanical · Electrical · Materials", programs: "Industry-linked research", intake: "Oct · Apr", language: "English MSc, German BA", img: uniRwth, about: "RWTH Aachen sits at the heart of Europe's industrial engineering ecosystem with deep corporate partnerships." },
  { name: "TU Berlin", country: "Germany", rank: "Top 200 QS", strength: "CS · AI · Urban Sciences", programs: "Capital-city campus", intake: "Oct · Apr", language: "English MSc available", img: uniTub, about: "A strong CS and AI focus combined with the cultural depth of Berlin." },
  { name: "Eötvös Loránd University", country: "Hungary", rank: "Top 600 QS", strength: "Sciences · Humanities · Law", programs: "Largest in Hungary", intake: "Sep", language: "English & Hungarian", img: uniElte, about: "Hungary's largest research university with a 380-year history in central Budapest." },
  { name: "Corvinus University", country: "Hungary", rank: "Business top 250", strength: "Economics · Business · Public Policy", programs: "Strong English MBA", intake: "Sep · Feb", language: "English & Hungarian", img: uniCorvinus, about: "Central Europe's leading business school with deep networks across CEE finance and consulting." },
  { name: "University of Barcelona", country: "Spain", rank: "Top 150 QS", strength: "Medicine · Economics · Linguistics", programs: "Largest research output in Spain", intake: "Sep · Jan", language: "English MSc; Spanish/Catalan BA", img: uniUb, about: "Spain's most research-intensive institution with a wide English MSc catalogue and Mediterranean campus life." },
  { name: "IE University", country: "Spain", rank: "Business top 50 FT", strength: "Business · International Relations", programs: "Madrid and Segovia campuses", intake: "Sep · Jan", language: "English & Spanish", img: uniIe, about: "Globally ranked private institution famous for English-taught business and international relations programs." },
  { name: "Politecnico di Milano", country: "Italy", rank: "Top 130 QS", strength: "Engineering · Architecture · Design", programs: "Italy's leading STEM university", intake: "Sep · Mar", language: "English MSc broadly available", img: uniPolimi, about: "Italy's flagship for engineering, architecture and design with a dense industry pipeline." },
  { name: "Bocconi University", country: "Italy", rank: "Business top 10 EU", strength: "Economics · Finance · Management", programs: "English-taught MSc tracks", intake: "Sep", language: "English & Italian", img: uniBocconi, about: "One of Europe's top business and economics schools in Milan with a tight Italian corporate network." },
];

const uniFilters = ["All", "Lithuania", "Germany", "Hungary", "Spain", "Italy"] as const;

function StudyAbroadPage() {
  const [filter, setFilter] = useState<(typeof uniFilters)[number]>("All");
  const [open, setOpen] = useState<Uni | null>(null);
  const visible = filter === "All" ? universities : universities.filter((u) => u.country === filter);
  return (
    <Shell>
      <PageHero
        eyebrow="Study Abroad · EU · UK · Switzerland"
        title={<>Your path to a <span className="italic text-gold">European degree</span>, fully supervised.</>}
        lede="From the first counselling call to graduation in Europe, SNZ supports students applying to universities across the European Union, the United Kingdom and Switzerland. Eight spotlight countries with deep advisory, open access to any accredited European institution on request."
        image={heroImg}
      />

      <section className="py-20 px-6 bg-stone">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          <div className="bg-background p-8"><StatCounter value={8} label="Spotlight countries" /></div>
          <div className="bg-background p-8"><StatCounter value={40} suffix="+" label="Partner universities" /></div>
          <div className="bg-background p-8"><StatCounter value={30} suffix="+" label="EU institutions on request" /></div>
          <div className="bg-background p-8"><StatCounter value={96} suffix="%" label="Visa success rate" /></div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16">
          <div>
            <Eyebrow>The Journey</Eyebrow>
            <SectionTitle className="mt-6">Six stages, fully supervised.</SectionTitle>
            <p className="mt-6 text-slate max-w-lg">
              One consultant from your first call to your first week on campus. Every stage tracked in your private portal.
            </p>
            <div className="mt-12">
              <StepFlow steps={journey} />
            </div>
          </div>
          <div className="bg-midnight text-midnight-foreground p-10 border border-foreground/5 h-fit lg:sticky lg:top-28">
            <Eyebrow>SNZ Student Portal</Eyebrow>
            <h3 className="mt-6 font-serif text-3xl leading-tight">Your entire application, in one private workspace.</h3>
            <ul className="mt-10 space-y-4">
              {portalFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 size-1.5 bg-gold shrink-0" />
                  <span className="text-white/80">{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/login" className="mt-10 inline-flex px-7 py-4 bg-gold text-midnight text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-white transition-colors">
              Enter the Portal
            </Link>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Countries We Serve</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">Eight spotlight destinations across Europe.</SectionTitle>
          <p className="mt-6 text-slate max-w-2xl">
            The eight countries where SNZ has the deepest university partnerships and embassy track record. We support applications to any accredited European university on request.
          </p>
          <div className="mt-12">
            <TabPanel tabs={countries} />
          </div>
          <div className="mt-16 border-t border-foreground/10 pt-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Plus open access to</div>
            <div className="flex flex-wrap gap-2">
              {["United Kingdom", "Ireland", "Switzerland", "Austria", "Belgium", "Sweden", "Denmark", "Portugal", "Czech Republic"].map((c) => (
                <span key={c} className="px-4 py-2 bg-background border border-foreground/10 text-sm">{c}</span>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate max-w-2xl">
              Targeting an institution not listed here? Send us the program and we will return a candid admission assessment within one working day.
            </p>
          </div>
        </div>
      </section>

      <section id="universities" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Spotlight Universities</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">Twelve institutions SNZ actively places students into.</SectionTitle>
          <p className="mt-6 text-slate max-w-2xl">
            A spotlight on the universities where we have the deepest partnerships. Tap a card for fields, intakes and program detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {uniFilters.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={
                  "px-5 py-2.5 text-[10px] font-bold tracking-[0.25em] uppercase border transition-colors " +
                  (filter === c
                    ? "bg-midnight text-midnight-foreground border-midnight"
                    : "border-foreground/15 hover:border-midnight")
                }
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((u, i) => (
              <Reveal key={u.name} delay={i * 40}>
                <button onClick={() => setOpen(u)} className="text-left bg-background border border-foreground/10 group overflow-hidden w-full hover:border-gold transition-colors">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={u.img} alt={u.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-midnight/85 text-white text-[10px] tracking-[0.2em] uppercase">{u.country}</div>
                    <div className="absolute top-3 right-3 px-3 py-1 bg-gold/90 text-midnight text-[10px] tracking-[0.2em] uppercase font-bold">{u.rank}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl leading-tight group-hover:text-gold transition-colors">{u.name}</h3>
                    <p className="mt-3 text-sm text-slate">{u.strength}</p>
                    <p className="mt-2 text-xs tracking-wide uppercase text-foreground/60">{u.programs}</p>
                    <span className="mt-5 inline-flex text-[10px] tracking-[0.25em] uppercase text-gold">Explore →</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-50 bg-midnight/80 backdrop-blur-md grid place-items-center p-4 animate-reveal">
          <div onClick={(e) => e.stopPropagation()} className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-foreground/10">
            <div className="relative aspect-[16/9] overflow-hidden">
              <img src={open.img} alt={open.name} className="w-full h-full object-cover" />
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 size-10 grid place-items-center bg-midnight text-white hover:bg-gold hover:text-midnight transition-colors" aria-label="Close">✕</button>
            </div>
            <div className="p-10">
              <div className="flex items-center gap-3 mb-4">
                <Eyebrow>{open.country}</Eyebrow>
                <span className="text-[10px] tracking-[0.2em] uppercase text-slate">{open.rank}</span>
              </div>
              <h2 className="font-serif text-4xl leading-tight">{open.name}</h2>
              <p className="mt-6 text-slate leading-relaxed">{open.about}</p>
              <div className="mt-10 grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
                {[
                  { l: "Strengths", v: open.strength },
                  { l: "Programs", v: open.programs },
                  { l: "Intake", v: open.intake },
                  { l: "Language", v: open.language },
                ].map((row) => (
                  <div key={row.l} className="bg-background p-5">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-gold">{row.l}</div>
                    <div className="mt-2 text-sm">{row.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticLink to="/contact" className="px-7 py-4 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight">
                  Request Counselling
                </MagneticLink>
                <a href="tel:+37060305146" className="px-7 py-4 border border-foreground/15 text-[11px] font-bold tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors">
                  Call +370 603 05146
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <FAQ
        title="Studying in Europe with SNZ."
        items={[
          { q: "Do you only work with these eight countries?", a: "No. The eight spotlight countries are where we have the deepest partnerships, but we support applications to any accredited university across the European Union, the United Kingdom and Switzerland." },
          { q: "When should I start the application process?", a: "Ideally 9 to 12 months before your intended intake. Earlier engagement maximises scholarship opportunities and visa appointment availability." },
          { q: "Do you offer scholarships?", a: "SNZ does not award scholarships directly, but we guide students through every available university, government and Erasmus+ funding scheme." },
          { q: "What is your visa success rate?", a: "Over 96% of SNZ-prepared visa files are approved at first sitting. We brief every student on embassy expectations and conduct mock interviews." },
          { q: "Can I work while studying?", a: "Yes. Every destination country permits 20 hours per week during term and full time in vacation periods, subject to local rules." },
          { q: "What happens after I graduate?", a: "We continue with post-study work-permit applications, employer introductions and, where relevant, hand over to our recruitment division." },
        ]}
      />

      <ConsultationCTA
        eyebrow="Student Briefing"
        title="Start with a free counselling call."
        body="Tell us your discipline, your aspirations and your timing. We will return a shortlist of European universities aligned to your profile and a clear next step."
      />
    </Shell>
  );
}