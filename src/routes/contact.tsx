import { createFileRoute } from "@tanstack/react-router";
import { Shell, PageHero, Eyebrow } from "@/components/site/Shell";
import { FAQ } from "@/components/site/FAQ";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Schedule a Confidential Briefing · SNZ Ventures" },
      { name: "description", content: "Request a private consultation with SNZ Ventures on business expansion, fintech licensing, recruitment, relocation or student placement. Based in Vilnius, Lithuania." },
      { property: "og:title", content: "Schedule a Briefing · SNZ Ventures" },
      { property: "og:description", content: "Every expansion is bespoke. Begin with a confidential briefing." },
    ],
  }),
  component: ContactPage,
});

const interests = [
  { id: "formation", label: "Company Formation", icon: "🏛", hint: "Tell us your structure, sector and target launch date." },
  { id: "fintech", label: "Fintech Licence", icon: "💳", hint: "EMI, PI, CASP or specialised bank · share your stage." },
  { id: "talent", label: "Hire Talent", icon: "👷", hint: "Role family, headcount and destination country." },
  { id: "study", label: "Study Abroad", icon: "🎓", hint: "Field of study, intake and current academic stage." },
  { id: "relocation", label: "Relocation", icon: "✈️", hint: "Country of origin, family size and timing." },
  { id: "other", label: "Something Else", icon: "✦", hint: "Briefly describe what you have in mind." },
] as const;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [intent, setIntent] = useState<(typeof interests)[number]["id"] | null>(null);
  const current = interests.find((i) => i.id === intent);
  return (
    <Shell>
      <PageHero
        eyebrow="Schedule a Briefing"
        title={<>Begin with a <span className="italic text-gold">private conversation</span>.</>}
        lede="Tell us about your objective. A senior practitioner will respond within one working day with a confidential preliminary assessment. No packages, no tiers, no obligations."
      />
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            <Eyebrow>Vilnius Headquarters</Eyebrow>
            <div className="mt-6 border-l-2 border-gold pl-5">
              <div className="font-serif text-2xl">Vilnius, Lithuania</div>
              <div className="mt-2 text-sm text-foreground/80">European Union · Eurozone · Schengen</div>
              <div className="mt-1 text-sm text-slate">Working hours · Monday to Friday, 09:00 to 18:00 EET</div>
            </div>
            <div className="mt-10 pt-8 border-t border-foreground/10 grid gap-3">
              <div className="text-[10px] tracking-[0.25em] uppercase text-slate mb-1">Talk now</div>
              <a href="tel:+37060305146" className="px-5 py-4 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight transition-colors flex items-center justify-between">
                <span>Call +370 603 05146</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a href="https://wa.me/37060305146" target="_blank" rel="noopener noreferrer" className="px-5 py-4 border border-foreground/15 text-[11px] font-bold tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors flex items-center justify-between">
                <span>WhatsApp</span>
                <span>↗</span>
              </a>
              <a href="mailto:info@snzventures.eu" className="px-5 py-4 border border-foreground/15 text-[11px] font-bold tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-colors flex items-center justify-between">
                <span>info@snzventures.eu</span>
                <span>↗</span>
              </a>
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=54.6872&mlon=25.2797#map=13/54.6872/25.2797"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 relative block aspect-[4/3] overflow-hidden bg-midnight text-midnight-foreground"
            >
              {/* parchment grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* radial glow under pin */}
              <div
                className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-100 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 58% 38%, hsl(var(--gold) / 0.28), transparent 45%)",
                }}
              />
              {/* stylised Lithuania outline */}
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <path
                  d="M70 140 Q90 95 145 88 Q190 80 215 100 Q255 80 295 92 Q335 105 340 140 Q345 175 320 200 Q300 225 255 230 Q210 240 175 225 Q135 230 100 210 Q70 190 70 140 Z"
                  stroke="hsl(var(--gold))"
                  strokeWidth="1.25"
                  strokeDasharray="3 4"
                  className="opacity-70"
                />
                {/* rivers */}
                <path d="M120 160 Q170 175 210 155 Q255 140 295 165" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
                {/* other cities */}
                <g className="text-white/40" fill="currentColor">
                  <circle cx="270" cy="195" r="2" />
                  <text x="276" y="199" fontSize="8" fontFamily="ui-sans-serif" letterSpacing="2">KAUNAS</text>
                  <circle cx="310" cy="225" r="2" />
                  <text x="316" y="229" fontSize="8" fontFamily="ui-sans-serif" letterSpacing="2">KLAIPĖDA</text>
                </g>
                {/* Vilnius pin */}
                <g transform="translate(232,114)">
                  <circle r="22" fill="hsl(var(--gold) / 0.15)">
                    <animate attributeName="r" values="14;30;14" dur="2.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="2.6s" repeatCount="indefinite" />
                  </circle>
                  <circle r="6" fill="hsl(var(--gold))" />
                  <circle r="2" fill="hsl(var(--midnight))" />
                </g>
              </svg>
              {/* corner brackets */}
              <span className="absolute top-3 left-3 w-4 h-4 border-l border-t border-gold/70" />
              <span className="absolute top-3 right-3 w-4 h-4 border-r border-t border-gold/70" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-gold/70" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-gold/70" />
              {/* header */}
              <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-[9px] tracking-[0.3em] uppercase">
                <span className="text-gold">N 54°41′13″</span>
                <span className="text-white/50">Lat / Lon</span>
                <span className="text-gold">E 25°16′47″</span>
              </div>
              {/* footer */}
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-white/50">Headquarters</div>
                  <div className="font-serif text-2xl mt-1">Vilnius<span className="text-gold">.</span></div>
                </div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-gold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                  Open Map ↗
                </div>
              </div>
            </a>
            <div className="mt-8 pt-6 border-t border-foreground/10">
              <div className="text-[10px] tracking-[0.25em] uppercase text-slate mb-3">Response Promise</div>
              <p className="text-sm text-foreground/80">A senior advisor responds to every enquiry within one working day. All briefings are confidential and senior-led.</p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-stone border border-foreground/5 p-10"
          >
            {sent ? (
              <div className="py-16 text-center">
                <Eyebrow>Received</Eyebrow>
                <h3 className="mt-6 font-serif text-3xl">Thank you. A specialist will respond within one working day.</h3>
                <p className="mt-6 text-slate">Your enquiry has been logged confidentially.</p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <a href="tel:+37060305146" className="px-6 py-3 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight transition-colors">Call now</a>
                  <a href="https://wa.me/37060305146" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-foreground/15 text-[11px] font-bold tracking-[0.25em] uppercase hover:border-gold transition-colors">WhatsApp</a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-slate mb-3">Step 1 · Pick your intent</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {interests.map((i) => (
                      <button
                        type="button"
                        key={i.id}
                        onClick={() => setIntent(i.id)}
                        className={
                          "px-3 py-3 text-left text-xs font-semibold tracking-wide border transition-all " +
                          (intent === i.id
                            ? "bg-midnight text-midnight-foreground border-midnight"
                            : "bg-background border-foreground/10 hover:border-gold")
                        }
                      >
                        <span className="block text-lg leading-none mb-2">{i.icon}</span>
                        {i.label}
                      </button>
                    ))}
                  </div>
                  {current ? (
                    <p className="mt-3 text-xs text-slate italic">{current.hint}</p>
                  ) : null}
                </div>
                <div className="h-px bg-foreground/10" />
                <div className="text-[10px] tracking-[0.25em] uppercase text-slate">Step 2 · Your details</div>
                <Field label="Full Name" name="name" />
                <Field label="Business Email" name="email" type="email" />
                <Field label="Company / Organisation" name="company" required={false} />
                <Field label="Country of Residence" name="country" required={false} />
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate">Project Context</label>
                  <textarea
                    rows={5}
                    required
                    placeholder={current ? current.hint : "Briefly describe your objective, geography and timing."}
                    className="w-full bg-background border border-foreground/10 px-4 py-3 text-sm focus:border-gold outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!intent}
                  className="w-full px-7 py-4 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight transition-colors"
                >
                  Request Confidential Briefing
                </button>
                <p className="text-xs text-slate text-center">
                  Submissions are handled by senior advisors only. We never share enquiries with third parties.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      <FAQ
        title="Before you write."
        items={[
          { q: "How quickly will I get a response?", a: "Within one working day. Senior advisors triage every enquiry personally." },
          { q: "Is there any cost for the initial briefing?", a: "No. Initial briefings are complimentary and held under confidentiality." },
          { q: "Can we meet in person in Vilnius?", a: "Yes. After the initial briefing call we routinely host clients at our Vilnius office for deeper sessions." },
          { q: "Do you work with clients outside the EU?", a: "Yes. The majority of our clients are non-EU founders, employers and investors planning a European move." },
        ]}
      />
    </Shell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-foreground/10 px-4 py-3 text-sm focus:border-gold outline-none"
      />
    </div>
  );
}