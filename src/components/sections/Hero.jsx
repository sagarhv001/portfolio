import { content } from "../../../app.js";

export default function Hero() {
  const { name, headline, tagline, location, links } = content;

  return (
    <section
      id="home"
      className="mx-auto flex h-[100dvh] w-full max-w-3xl flex-col items-center justify-center px-6 text-center"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-white/50">{name}</p>
      <h1 className="mt-4 text-4xl font-bold sm:text-6xl">{tagline}</h1>
      <p className="mt-4 text-lg text-white/60">{headline}</p>
      <p className="mt-1 text-sm text-white/40">{location}</p>
      <div className="mt-8 flex justify-center gap-4">
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
    </section>
  );
}
