import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, Eyebrow, SectionTitle } from "@/components/site/Shell";
import { ConsultationCTA } from "@/components/site/ConsultationCTA";
import { Reveal } from "@/components/site/Reveal";
import { StatCounter } from "@/components/site/StatCounter";
import { FAQ } from "@/components/site/FAQ";
import { TabPanel } from "@/components/site/TabPanel";
import heroImg from "@/assets/hero-fintech.jpg";

export const Route = createFileRoute("/fintech")({
  head: () => ({
    meta: [
      { title: "Fintech Establishment in Lithuania · SNZ Ventures" },
      { name: "description", content: "EMI, PI, specialised bank and crypto licensing in Lithuania. Regulatory liaison with the Bank of Lithuania, compliance frameworks, MLRO sourcing, SEPA setup and accounting under one advisor." },
      { property: "og:title", content: "Fintech Establishment · SNZ Ventures" },
      { property: "og:description", content: "Lithuania is the EU's leading fintech hub. SNZ is your direct conduit." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: FintechPage,
});

const licences = [
  {
    id: "emi",
    label: "EMI Licence",
    content: (
      <LicenceDetail
        title="Electronic Money Institution"
        who="Founders building wallets, cards, neobanks, embedded finance and B2B payment platforms across the EU."
        capital="Indicative minimum initial capital of EUR 350,000, held in a Lithuanian credit institution before authorisation."
        timeline="Typical authorisation window of three to six months from substantively complete application."
        role="We coordinate the full application: business plan, programme of operations, governance, AML/CFT, ICAAP, outsourcing and IT security."
        deliverables={["Authorisation pack accepted by the Bank of Lithuania", "MLRO and DPO sourced", "SEPA gateway and IBAN issuance live", "Audit-ready accounting from day one"]}
      />
    ),
  },
  {
    id: "pi",
    label: "Payment Institution",
    content: (
      <LicenceDetail
        title="Payment Institution"
        who="Operators focused on payment initiation, account information, money remittance or merchant acquiring without holding client funds as e-money."
        capital="Indicative minimum initial capital of EUR 20,000 to 125,000 depending on the regulated services requested."
        timeline="Typical authorisation window of three to four months."
        role="Scoping the correct PSD2 service set, drafting the regulatory file, building the compliance programme and onboarding banking rails."
        deliverables={["PI authorisation issued", "PSD2 service permissions defined", "Outsourcing register and ICT-risk framework", "Reporting templates for the Bank of Lithuania"]}
      />
    ),
  },
  {
    id: "bank",
    label: "Specialised Bank",
    content: (
      <LicenceDetail
        title="Specialised Bank"
        who="Ambitious operators ready for a deposit-taking, lending and payment licence with a reduced minimum capital relative to a full bank."
        capital="Indicative minimum initial capital of EUR 1,000,000 and full SREP capital adequacy thereafter."
        timeline="Typical authorisation window of nine to twelve months with structured ECB consultation."
        role="Full institutional set-up: board, three lines of defence, ICAAP/ILAAP, recovery plan and core banking selection."
        deliverables={["Specialised banking authorisation", "Capital adequacy framework", "Treasury, credit and operational risk policies", "Audit, internal audit and compliance functions"]}
      />
    ),
  },
  {
    id: "casp",
    label: "Crypto / CASP",
    content: (
      <LicenceDetail
        title="Crypto-Asset Service Provider (MiCA)"
        who="Exchanges, custodians, brokers and token issuers preparing for MiCA authorisation under the Lithuanian competent authority."
        capital="Indicative minimum own funds of EUR 50,000 to 150,000 depending on services."
        timeline="Typical authorisation window of four to six months under transitional MiCA arrangements."
        role="MiCA gap analysis, white paper review, governance build, AML/CFT alignment and ICT-resilience documentation."
        deliverables={["CASP authorisation pack", "MiCA-aligned policies", "Travel rule and KYT integrations", "Custody and segregation framework"]}
      />
    ),
  },
];

function LicenceDetail({
  title,
  who,
  capital,
  timeline,
  role,
  deliverables,
}: {
  title: string;
  who: string;
  capital: string;
  timeline: string;
  role: string;
  deliverables: string[];
}) {
  return (
    <div className="grid lg:grid-cols-[1fr_1fr] gap-12">
      <div>
        <h3 className="font-serif text-3xl md:text-4xl leading-tight">{title}</h3>
        <p className="mt-6 text-slate leading-relaxed">{who}</p>
        <div className="mt-10 space-y-6">
          {[
            { l: "Capital", v: capital },
            { l: "Timeline", v: timeline },
            { l: "Our Role", v: role },
          ].map((row) => (
            <div key={row.l} className="border-l-2 border-gold pl-5">
              <div className="text-[10px] tracking-[0.25em] uppercase text-gold">{row.l}</div>
              <div className="mt-2 text-foreground/85">{row.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-stone border border-foreground/5 p-8">
        <div className="text-[10px] tracking-[0.25em] uppercase text-slate mb-6">Deliverables</div>
        <ul className="space-y-4">
          {deliverables.map((d) => (
            <li key={d} className="flex items-start gap-3 text-sm">
              <span className="mt-2 size-1.5 bg-gold shrink-0" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const services = [
  { t: "Fintech Company Formation", b: "UAB structuring, registered address, founder agreements and capital deposit tailored to the licence pathway." },
  { t: "Regulatory Guidance", b: "Direct liaison with the Bank of Lithuania for EMI, PI, specialised bank and CASP authorisations." },
  { t: "Compliance Framework", b: "AML/CFT manuals, KYC, transaction monitoring, MLRO sourcing and outsourcing register design." },
  { t: "Corporate Structuring", b: "Holding and operating splits, IP migration, transfer pricing and substance planning across the EU." },
  { t: "Operational Setup", b: "Banking partners, SEPA gateway integration, card scheme onboarding and core ledger selection." },
  { t: "Accounting & Reporting", b: "IFRS-grade accounting, regulatory reporting, capital adequacy monitoring and audit preparation." },
];

const process = [
  { n: "01", t: "Scoping Brief", b: "Confidential intake: product, geographies, target authorisation and timing." },
  { n: "02", t: "Pre-Application", b: "Business plan, governance, capital and operational architecture drafted with our specialists." },
  { n: "03", t: "Incorporation", b: "UAB formed, capital deposited, registered office and bank account opened in Vilnius." },
  { n: "04", t: "Regulatory Filing", b: "Authorisation pack submitted to the Bank of Lithuania with our liaison handling responses." },
  { n: "05", t: "Compliance Build", b: "Policies operationalised, MLRO/DPO onboarded, transaction monitoring configured." },
  { n: "06", t: "Banking & SEPA", b: "Correspondent banking, SEPA gateway and card scheme onboarding executed in parallel." },
  { n: "07", t: "Authorisation", b: "Licence granted; final fit-and-proper, IT and ICAAP confirmations completed." },
  { n: "08", t: "Go Live", b: "First transaction supported, ongoing reporting calendar and quarterly governance in place." },
];

function FintechPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Flagship Service"
        title={<>Establish a regulated fintech <span className="italic text-gold">in the EU's leading hub</span>.</>}
        lede="Lithuania licenses more fintech entities than any other EU member state and supervises them in English. SNZ Ventures provides the full establishment ecosystem from incorporation to first transaction."
        image={heroImg}
      />

      <section className="py-20 px-6 bg-stone">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          <div className="bg-background p-8"><StatCounter value={270} suffix="+" label="Licensed fintechs in LT" /></div>
          <div className="bg-background p-8"><StatCounter value={27} label="EU passporting reach" /></div>
          <div className="bg-background p-8"><StatCounter value={48} suffix="h" label="UAB registration" /></div>
          <div className="bg-background p-8"><StatCounter value={6} suffix=" mo" label="Avg EMI timeline" /></div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Licence Pathways</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">
            Four authorisation routes, one advisor across the build.
          </SectionTitle>
          <div className="mt-14">
            <TabPanel tabs={licences} />
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>Service Surface</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">
            A single advisor across the entire fintech build.
          </SectionTitle>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <div className="bg-background p-8 h-full">
                  <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-serif text-lg mb-3">{s.t}</h4>
                  <p className="text-sm text-slate leading-relaxed">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Eyebrow>The Process</Eyebrow>
          <SectionTitle className="mt-6 max-w-3xl">Eight stages, fully coordinated.</SectionTitle>
          <div className="mt-16 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-foreground/10 hidden md:block" />
            <div className="space-y-8">
              {process.map((p, i) => (
                <Reveal key={p.n} delay={i * 40}>
                  <div className="grid md:grid-cols-[80px_1fr] gap-6 items-start group">
                    <div className="relative">
                      <div className="size-12 grid place-items-center bg-midnight text-gold font-serif text-sm border border-gold/40 group-hover:bg-gold group-hover:text-midnight transition-colors">
                        {p.n}
                      </div>
                    </div>
                    <div className="border-b border-foreground/10 pb-8">
                      <h4 className="font-serif text-2xl">{p.t}</h4>
                      <p className="mt-3 text-slate max-w-2xl">{p.b}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="Fintech licensing questions, answered."
        items={[
          { q: "Why Lithuania over Estonia, Ireland or Malta?", a: "Lithuania combines the EU's deepest fintech regulator capacity, an English-speaking supervisor, direct SEPA gateway access via the Bank of Lithuania CENTROlink, and the fastest UAB incorporation in the EU." },
          { q: "Can I operate from outside Lithuania once licensed?", a: "Yes, a Lithuanian EMI or PI passports across all 27 EU member states. Substance requirements must still be met in Lithuania, which we structure as part of the build." },
          { q: "Do I need to be in Lithuania for incorporation?", a: "No. We can complete incorporation by power of attorney. We do recommend a Vilnius visit during the regulatory dialogue stage." },
          { q: "Will you serve as my MLRO or DPO?", a: "We source and onboard qualified MLROs and DPOs from our network. For early-stage operators we can also coordinate an outsourced compliance function under Bank of Lithuania expectations." },
          { q: "What is the indicative end-to-end timeline?", a: "An EMI typically completes in three to six months from scoping to authorisation, depending on application quality, beneficial-owner profile and regulator dialogue." },
          { q: "How do you price fintech mandates?", a: "Privately. Every mandate is bespoke; we share a fixed-scope proposal after the initial briefing. There are no published tiers." },
        ]}
      />

      <ConsultationCTA
        eyebrow="Fintech Briefing"
        title="Map your licensing pathway with a specialist."
        body="Every fintech build is bespoke. Tell us about your product, your geographies and your target authorisation. We will return a preliminary regulatory and operational roadmap."
      />
    </Shell>
  );
}