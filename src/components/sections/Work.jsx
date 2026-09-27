import { content } from "../../../app.js";
import { Section, SubHeading, Chips } from "./Section";

// front: the pitch. back (on hover / tap): resume bullets, stack and the link.
function FlipCard({ p, n }) {
  return (
    <li className="h-full">
      {/* label + hidden checkbox = a native toggle, no JS; relative keeps the sr-only input inside the card
          so focusing it never scrolls the section */}
      <label className="flip relative block h-full cursor-pointer">
        <input type="checkbox" className="sr-only" aria-label={`Flip ${p.title} card for details`} />
        <div className="flip-inner">
          <div className="flip-face glass-card flex flex-col p-6">
            {/* ponytail: plain <img> — next/image's custom loader points at the live site, so local previews would 404.
                generic stock photos for now, swap for real screenshots later */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt="" loading="lazy" className="mb-5 h-40 w-full rounded-xl object-cover opacity-90" />
            <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-white/40">
              <span>{p.kind}</span>
              <span>/0{n}</span>
            </div>
            <p className="mt-4 text-xl font-medium">{p.title}</p>
            <p className="mt-2 text-white/60">{p.desc}</p>
            <div className="mt-auto pt-6">
              {p.outcome && (
                <div className="flex justify-between border-y border-white/10 py-3 text-sm">
                  <span className="uppercase tracking-[0.15em] text-white/40">{p.outcome[0]}</span>
                  <span className="font-medium">{p.outcome[1]}</span>
                </div>
              )}
              {/* <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/35">Hover to flip ↻</p> */}
            </div>
          </div>
  
          <div className="flip-face flip-back glass-card flex flex-col p-6">
            <p className="font-medium">{p.title}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="text-white/35">→</span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Chips items={p.stack} />
              <a href={p.link} target="_blank" rel="noreferrer" className="glass mt-5 inline-block px-5 py-2 text-sm font-medium">
                View project ↗
              </a>
            </div>
          </div>
        </div>
      </label>
    </li>
  );
}

export default function Work() {
  const featured = content.projects.slice(0, 3);
  const more = content.projects.slice(3);

  return (
    <Section
      id="work"
      title="01 / Selected work"
      heading="Built for real problems."
      aside="A few of the systems I've built: automation pipelines, fine-tuned models and real-time vision, each shipped end to end."
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <FlipCard key={p.title} p={p} n={i + 1} />
        ))}
      </ul>

      <SubHeading>Also built</SubHeading>
      <ul className="grid gap-4 md:grid-cols-2">
        {more.map((p, i) => (
          <FlipCard key={p.title} p={p} n={featured.length + i + 1} />
        ))}
      </ul>
    </Section>
  );
}
