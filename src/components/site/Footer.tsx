import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/snz-logo.png";

export function Footer() {
  return (
    <footer className="bg-midnight text-midnight-foreground pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoAsset} alt="SNZ Ventures" className="size-10 rounded-full bg-white" />
              <span className="font-serif text-lg font-bold uppercase">SNZ Ventures</span>
            </div>
            <p className="font-serif italic text-xl leading-snug max-w-sm text-white/80">
              Architecting European legacies for entrepreneurs, investors, professionals and students.
            </p>
            <p className="mt-8 text-[10px] tracking-[0.25em] uppercase text-gold">Woman-Owned Enterprise</p>
          </div>
          <FooterCol title="Ecosystem" items={[
            { to: "/lithuania", label: "Company Formation" },
            { to: "/fintech", label: "Fintech Establishment" },
            { to: "/recruitment", label: "International Recruitment" },
            { to: "/study-abroad", label: "Study Abroad" },
          ]} />
          <FooterCol title="Expansion" items={[
            { to: "/why-lithuania", label: "Why Lithuania" },
            { to: "/login", label: "Student Portal" },
            { to: "/about", label: "About SNZ" },
            { to: "/contact", label: "Begin a Briefing" },
          ]} />
          <div className="lg:col-span-3">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6">Headquarters</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Vilnius<br />
              Lithuania
            </p>
            <a href="mailto:info@snzventures.eu" className="mt-6 inline-block text-sm border-b border-gold pb-0.5">
              info@snzventures.eu
            </a>
            <a href="tel:+37060305146" className="mt-2 block text-sm text-white/70 hover:text-white">
              +370 603 05146
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">
            Designed & developed by{" "}
            <a
              href="https://origami99.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors border-b border-gold/40 hover:border-white pb-0.5"
            >
              Origami99
            </a>
          </p>
          <div className="flex gap-8 text-[10px] tracking-[0.25em] uppercase text-white/40">
            <span>Based in Vilnius, Lithuania</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div className="lg:col-span-2">
      <h4 className="text-[10px] tracking-[0.25em] uppercase text-gold mb-6">{title}</h4>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-sm text-white/70 hover:text-white transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}