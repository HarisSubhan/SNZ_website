import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, Eyebrow } from "@/components/site/Shell";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Student Portal Login · SNZ Ventures" },
      { name: "description", content: "Sign in to the SNZ Ventures student portal to upload documents, track your application and message your consultant." },
      { property: "og:title", content: "Student Portal · SNZ Ventures" },
      { property: "og:description", content: "Secure access to your SNZ student application workspace." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Shell>
      <section className="min-h-[calc(100vh-5rem)] grid lg:grid-cols-2">
        <div className="bg-midnight text-midnight-foreground p-12 lg:p-20 flex flex-col justify-between gap-12">
          <Link to="/" className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold w-fit">
            ← SNZ Ventures
          </Link>
          <div>
            <Eyebrow>Student Portal</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05]">
              Your entire European application, in one private workspace.
            </h1>
            <ul className="mt-12 space-y-4 text-white/70">
              {[
                "Document vault with encryption at rest",
                "Application stage tracking and milestones",
                "Direct consultant messaging",
                "Offer-letter, visa and arrival updates",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 size-1.5 bg-gold shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">
            Confidential · Encrypted · For SNZ students only
          </p>
        </div>
        <div className="p-12 lg:p-20 flex items-center">
          <div className="w-full max-w-md mx-auto">
            {submitted ? (
              <div>
                <Eyebrow>Portal preview</Eyebrow>
                <h2 className="mt-6 font-serif text-3xl">
                  The full student portal is being prepared for you.
                </h2>
                <p className="mt-6 text-slate">
                  Your SNZ consultant will email you secure credentials within one working day.
                  In the meantime, you can begin a conversation below.
                </p>
                <Link
                  to="/contact"
                  className="mt-10 inline-flex px-7 py-4 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight transition-colors"
                >
                  Talk to a consultant
                </Link>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <Eyebrow>Sign in</Eyebrow>
                <h2 className="font-serif text-4xl leading-tight">Welcome back.</h2>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-background border border-foreground/10 px-4 py-3 text-sm focus:border-gold outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate">Password</label>
                  <input
                    type="password"
                    required
                    className="w-full bg-background border border-foreground/10 px-4 py-3 text-sm focus:border-gold outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-7 py-4 bg-midnight text-midnight-foreground text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-gold hover:text-midnight transition-colors"
                >
                  Enter Portal
                </button>
                <p className="text-xs text-slate text-center">
                  No account yet?{" "}
                  <Link to="/contact" className="text-midnight underline underline-offset-4 decoration-gold">
                    Request access through your consultant.
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Shell>
  );
}