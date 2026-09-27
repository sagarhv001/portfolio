import { content } from "../../../app.js";

const PIPELINE = [
  ["Collect", "scrape & ingest"],
  ["Process", "score & enrich"],
  ["Serve", "APIs & dashboards"],
];

export default function Hero() {
  const { role, focus, tagline, intro, location, experience, links } = content;
  const now = experience[0];

  return (
    // scrolls internally like every Section — on phones the two columns stack taller than the screen
    <section
      id="home"
      className="no-scrollbar mx-auto grid h-[100dvh] w-full max-w-6xl items-center gap-12 overflow-y-auto overscroll-contain px-6 pb-28 pt-20 sm:pt-24 lg:grid-cols-2 lg:py-0"
    >
      <div className="text-center lg:text-left">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 sm:text-sm sm:tracking-[0.3em]">
          {role} / {focus}
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">{tagline}</h1>
        <p className="mt-4 text-lg text-white/60">{intro}</p>

        {/* SectionSwitcher intercepts these "#id" links and switches sections like the dock does */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <a href="#work" className="glass px-6 py-3 font-medium">
            Explore selected work ↘
          </a>
          <a href="#contact" className="px-2 py-3 text-white/70 hover:text-white">
            Start a conversation ↗
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-3 text-sm lg:justify-start">
          {[
            ["GitHub", links.github],
            ["LinkedIn", links.linkedin],
            ["Email", links.email],
          ].map(([label, href]) => (
            <a key={label} href={href} className="glass px-5 py-2">
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="glass-card flex flex-col gap-10 p-6 sm:p-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/40">
          <span>Currently</span>
          <span className="glass px-3 py-1 normal-case tracking-normal text-white/70">{location}</span>
        </div>

        <div>
          <p className="text-2xl font-semibold">{now.role}</p>
          <p className="text-white/60">
            {now.org} · {now.date}
          </p>
        </div>

        <ol className="grid grid-cols-3 gap-3">
          {PIPELINE.map(([label, sub], i) => (
            <li key={label} className="glass-card p-3">
              <p className="text-xs text-white/40">0{i + 1}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider">{label}</p>
              <p className="text-xs text-white/50">{sub}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
