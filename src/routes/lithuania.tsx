import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, Eyebrow, SectionTitle } from "@/components/site/Shell";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { FAQ } from "@/components/site/FAQ";
import { TabPanel } from "@/components/site/TabPanel";
import { StepFlow } from "@/components/site/StepFlow";
import { Parallax } from "@/components/site/Parallax";
import { FanStack } from "@/components/site/FanStack";
import heroImg from "@/assets/hero-lithuania.jpg";

export const Route = createFileRoute("/lithuania")({
  head: () => ({
    meta: [
      { title: "Company Formation & Accounting in Lithuania · SNZ Ventures" },
      { name: "description", content: "Register your Lithuanian company in 48 hours and run it end to end with one provider. UAB and MB incorporation, legal address, accounting, VAT, payroll and corporate secretarial services from SNZ in Vilnius." },
      { property: "og:title", content: "Company Formation & Accounting · SNZ Ventures" },
      { property: "og:description", content: "From UAB incorporation to monthly bookkeeping, payroll and VAT · one Vilnius team for your entire EU back office." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: LithuaniaPage,
});

const services = [
  { t: "Company Formation", b: "UAB, MB, branch and representative office incorporation. We act under power of attorney so founders do not have to travel." },
  { t: "Legal Address & Virtual Office", b: "Registered Vilnius CBD address, mail handling, scan-to-inbox and on-demand meeting rooms." },
  { t: "Accounting & Bookkeeping", b: "Monthly close to Lithuanian GAAP or IFRS, year-end reports filed with Registrų centras and the State Tax Inspectorate." },
  { t: "Tax Compliance & VAT", b: "VAT registration, monthly returns, OSS, IOSS, EORI, reverse charge handling and corporate income tax filings." },
  { t: "Payroll & HR Administration", b: "Sodra registration, contracts, payslips, sick leave, holiday accruals, work rules and onboarding for resident and non-resident staff." },
  { t: "Corporate Secretarial", b: "UBO filings, JADIS submissions, share transfers, director changes, AGM minutes and statutory record-keeping." },
];

const entities = [
  {
    id: "uab",
    label: "UAB",
    content: (
      <EntityDetail
        name="UAB · Private Limited Company"
        suits="Most foreign founders, fintech operators, holding structures and substance-backed EU expansions."
        capital="EUR 1,000 minimum share capital, payable in cash or in kind."
        people="One director and one shareholder minimum. Both may be non-resident and the same person."
        timeline="48 working hours once notarised documents are in order."
        role="We draft the articles, coordinate notary, handle Registrų centras filings, open the share-capital account and register VAT and EORI."
      />
    ),
  },
  { id: "mb", label: "MB", content: <EntityDetail name="MB · Small Partnership" suits="Solo founders and small teams under five members who want a lighter regulatory footprint." capital="No minimum share capital." people="Between one and ten members, all must be natural persons." timeline="48 working hours, can be formed fully remotely with qualified e-signature." role="We assess fit versus a UAB, draft the partnership agreement and file the formation pack end to end." /> },
  { id: "branch", label: "Branch", content: <EntityDetail name="Branch of a Foreign Company" suits="Established foreign companies extending operations into Lithuania without a separate legal entity." capital="No separate capital requirement, parent company is fully liable." people="A registered branch manager based in Lithuania." timeline="Two to three weeks including translation and legalisation of parent documents." role="We legalise and translate parent statutes, draft the branch establishment act and register the branch and its manager." /> },
  { id: "rep", label: "Representative Office", content: <EntityDetail name="Representative Office" suits="Companies running market research, liaison or non-trading activity in Lithuania." capital="No capital, no trading permitted." people="One appointed representative resident in Lithuania." timeline="Two weeks including documentation legalisation." role="Full setup, representative onboarding and ongoing accounting for permitted activity." /> },
  { id: "holding", label: "Holding", content: <EntityDetail name="Lithuanian Holding Structure" suits="Founders consolidating EU subsidiaries or planning an EU IP-holding layer." capital="UAB base with EUR 1,000 minimum, structured around participation exemption rules." people="Director resident anywhere, beneficial-owner filings via JADIS." timeline="Two to four weeks including substance planning." role="We model the structure with tax counsel, incorporate the holding, document substance and coordinate downstream subsidiaries." /> },
];

function EntityDetail({ name, suits, capital, people, timeline, role }: { name: string; suits: string; capital: string; people: string; timeline: string; role: string }) {
  return (
    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
      <div>
        <h3 className="font-serif text-3xl md:text-4xl">{name}</h3>
        <p className="mt-4 text-slate">{suits}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
        {[
          { l: "Share Capital", v: capital },
          { l: "Directors & Shareholders", v: people },
          { l: "Typical Timeline", v: timeline },
          { l: "Our Role", v: role },
        ].map((row) => (
          <div key={row.l} className="bg-background p-6">
            <div className="text-[10px] tracking-[0.25em] uppercase text-gold">{row.l}</div>
            <div className="mt-2 text-sm leading-relaxed">{row.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const timeline = [
  { n: "01", t: "Briefing", b: "Goal, structure, beneficial owners and target sector mapped in a private call." },
  { n: "02", t: "Documentation", b: "Power of attorney, passports, beneficial-owner declarations and articles drafted." },
  { n: "03", t: "Notary", b: "Founders sign in person or via apostilled power of attorney. SNZ attends on your behalf." },
  { n: "04", t: "Registrų Centras", b: "Filing with the Centre of Registers, JAR entry and company code issued." },
  { n: "05", t: "Tax & VAT", b: "Corporate income tax, VAT, EORI and OSS registrations with the State Tax Inspectorate." },
  { n: "06", t: "Banking", b: "Introductions to local banks and EMI partners, account opening coordinated end to end." },
  { n: "07", t: "Accounting Setup", b: "Cloud accounting onboarding, chart of accounts and reporting cadence agreed." },
  { n: "08", t: "Operating", b: "Ongoing bookkeeping, payroll, VAT returns and statutory filings under one team." },
];

const ongoing = [
  { q: "Monthly bookkeeping", a: "Cloud-based accounting with monthly close, supplier and customer reconciliations, expense categorisation and management reports." },
  { q: "VAT, OSS and IOSS returns", a: "Monthly VAT submissions, reverse-charge handling, OSS for EU B2C sellers and IOSS for low-value imports." },
  { q: "Year-end and annual report", a: "Statutory financial statements prepared and filed with Registrų centras and the State Tax Inspectorate within statutory deadlines." },
  { q: "Payroll runs", a: "Monthly payroll, Sodra contributions, personal income tax withholding, electronic payslips and year-end income certificates." },
  { q: "Employee onboarding", a: "Contracts, work rules, NDAs, equipment policies and Sodra registration for resident and posted workers." },
  { q: "EORI and customs setup", a: "EORI registration for cross-border trade and coordination with customs brokers for imports and exports." },
];

const addons = [
  "Banking introductions",
  "EMI account opening",
  "Nominee director",
  "Mailbox & call answering",
  "GDPR & DPO services",
  "Trademark filing",
];

function LithuaniaPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Company Formation & Accounting · Vilnius"
        title={<>Open and operate your <span className="italic text-gold">EU company</span> · in 48 hours.</>}
        lede="Incorporation, legal address, accounting, VAT, payroll and corporate secretarial services from one Vilnius-based team. We open the entity, file the returns and run the back office · you focus on the business."
        image={heroImg}
      />

      <section className="bg-midnight text-midnight-foreground py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:border-l lg:border-gold/40 lg:pl-6"><StatCounter value={400} suffix="+" label="Companies formed" /></div>
          <div className="lg:border-l lg:border-gold/40 lg:pl-6"><StatCounter value={48} suffix="h" label="UAB incorporation" /></div>
          <div className="lg:border-l lg:border-gold/40 lg:pl-6"><StatCounter value={5} suffix="%" label="Reduced corporate tax" /></div>
          <div className="lg:border-l lg:border-gold/40 lg:pl-6"><StatCounter value={3} label="Languages supported" /></div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Service Surface</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">
            Six pillars that cover the full corporate lifecycle.
          </SectionTitle>
          <p className="mt-5 text-sm text-slate max-w-xl">Hover a card to fan the stack · or tap on mobile to expand.</p>
          <div className="mt-12">
            <FanStack items={services.map((s) => ({ title: s.t, body: s.b }))} />
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Choose Your Entity</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">Five legal structures, one decision.</SectionTitle>
          <p className="mt-6 text-slate max-w-2xl">
            Most foreign founders form a UAB. Solo operators may prefer the lighter MB. Multinationals often
            choose a branch or a holding structure. The right answer depends on liability, tax and substance.
          </p>
          <div className="mt-12">
            <TabPanel tabs={entities} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-foreground/10">
        <div className="absolute inset-0">
          <Parallax speed={0.2} className="w-full h-[140%] -mt-[20%]">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
          </Parallax>
          <div className="absolute inset-0 bg-midnight/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-white">
          <Eyebrow>Formation Timeline</Eyebrow>
          <SectionTitle className="mt-6 text-white max-w-3xl">Eight steps from briefing to first invoice.</SectionTitle>
          <div className="mt-14">
            <StepFlow variant="dark" steps={timeline.map((t) => ({ title: t.t, body: t.b }))} />
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Eyebrow>Ongoing Services</Eyebrow>
          <SectionTitle className="mt-6">Bookkeeping, payroll and statutory filings, monthly.</SectionTitle>
          <div className="mt-12 border-t border-foreground/10">
            {ongoing.map((it) => (
              <details key={it.q} className="border-b border-foreground/10 group">
                <summary className="py-5 flex items-center justify-between cursor-pointer list-none">
                  <span className="font-serif text-lg group-hover:text-gold transition-colors">{it.q}</span>
                  <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-5 pr-12 text-slate leading-relaxed">{it.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center">
          <div>
            <Eyebrow>Add-On Services</Eyebrow>
            <SectionTitle className="mt-6">Everything else a Lithuanian company eventually needs.</SectionTitle>
            <p className="mt-6 text-slate max-w-md">
              We add these as your operations scale. None are mandatory, each is scoped per request.
            </p>
          </div>
          <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
            {addons.map((s, i) => (
              <li key={s} className="group flex items-center gap-6 py-5 hover:pl-3 transition-[padding] duration-300">
                <span className="text-gold font-serif italic text-3xl w-12 shrink-0">0{i + 1}</span>
                <span className="font-serif text-lg flex-1 group-hover:text-gold transition-colors">{s}</span>
                <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 px-6 bg-midnight text-midnight-foreground">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Why Lithuania</Eyebrow>
          <SectionTitle className="mt-6 text-white max-w-3xl">Four reasons founders pick Lithuania for an EU entity.</SectionTitle>
          <div className="mt-12 grid md:grid-cols-4 gap-10 md:gap-12">
            {[
              { v: "EU + EUR", l: "Full single-market access" },
              { v: "48h", l: "Fastest EU incorporation" },
              { v: "EN", l: "English-fluent regulators" },
              { v: "5–15%", l: "Corporate tax band" },
            ].map((s) => (
              <div key={s.l} className="border-t border-gold/50 pt-5">
                <div className="font-serif text-4xl text-gold">{s.v}</div>
                <div className="mt-3 text-[10px] tracking-[0.25em] uppercase text-white/55">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        title="Forming and running a Lithuanian company."
        items={[
          { q: "UAB or MB, which fits me?", a: "A UAB suits most foreign founders, fintech operators and anyone planning to take on investment. An MB is lighter and cheaper to run but capped at ten members and only available to natural persons." },
          { q: "Do I need to travel to Lithuania to incorporate?", a: "No. We act under apostilled power of attorney for the notary and registry filings. Founders can sign remotely with a Lithuanian qualified e-signature or in person at any Lithuanian consulate." },
          { q: "Can I hand over an existing company to SNZ for accounting?", a: "Yes. We onboard mid-year, take over the chart of accounts, reconcile opening balances and assume statutory filings without disruption." },
          { q: "What are the audit thresholds?", a: "A statutory audit is required when a company exceeds two of three thresholds: assets above EUR 1.8M, revenue above EUR 3.5M or 50 employees on average. We coordinate the audit with licensed partner firms." },
          { q: "What is the VAT registration threshold?", a: "Mandatory VAT registration applies once turnover exceeds EUR 45,000 in any twelve-month period. Companies trading B2B across the EU often register voluntarily from day one." },
          { q: "Can a non-EU national be the sole director?", a: "Yes. Director residency is not required for a UAB. Beneficial-owner filings in JADIS are mandatory regardless of nationality." },
          { q: "How are beneficial owners filed?", a: "We file the ultimate beneficial owner data in the JADIS register at incorporation and update it on any change in ownership or control within statutory deadlines." },
          { q: "Can I keep a dormant company alive?", a: "Yes. A dormant UAB requires reduced bookkeeping, an annual report and minimal Sodra filings if there are no employees. We run dormant maintenance as a standing service." },
          { q: "How do I dissolve a company if I no longer need it?", a: "We coordinate the full liquidation: shareholder resolution, liquidator appointment, creditor notice, final accounts, tax clearance and removal from Registrų centras." },
          { q: "Can I switch from another provider to SNZ?", a: "Yes. We manage the handover with your previous accountant, recover prior books and continue filings without missing a deadline." },
        ]}
      />

      <ConsultationCTA
        eyebrow="Formation Briefing"
        title="Start your Lithuanian company in 48 hours."
        body="Tell us your structure, sector and timing. We will return a documentation checklist, formation plan and a first call with the team that will run your back office."
      />
    </Shell>
  );
}