import { content } from "../../../app.js";
import HeroBadge from "../HeroBadge";

export default function Hero() {
  const { name, headline, tagline, location, links } = content;

  return (
    <section
      id="home"
      className="mx-auto grid min-h-[100dvh] w-full max-w-6xl items-center px-6 pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="text-center lg:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">{name}</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">{tagline}</h1>
        <p className="mt-4 text-lg text-white/60">{headline}</p>
        <p className="mt-1 text-sm text-white/40">{location}</p>
        <div className="mt-8 flex justify-center gap-4 lg:justify-start">
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

      <div className="flex justify-center py-12 lg:-translate-y-10 lg:translate-x-10 lg:justify-end">
        <HeroBadge name={name} headline={headline} location={location} links={links} />
      </div>
    </section>
  );
}
