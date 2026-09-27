import { content } from "../../../app.js";
import HeroBadge from "../HeroBadge";
import { Section, SubHeading, Entry, Chips } from "./Section";

export default function About() {
  const { name, headline, location, links, about, skills, experience } = content;

  return (
    <Section id="about" title="02 / A little about me" heading="Curious about what's under the hood.">
      {/* card on the left, story + experience on the right */}
      <div className="grid items-start gap-6 md:grid-cols-3">
        {/* card sizes by aspect-ratio off the column width instead of its fixed svh height;
            wrapper + shell need an explicit width too, else w-full resolves against a 0-wide flex item */}
        <div className="mx-auto flex w-full max-w-xs items-center md:max-w-none [&_.pc-card-shell]:w-full [&_.pc-card-wrapper]:w-full [&_.pc-card]:h-auto [&_.pc-card]:max-h-none [&_.pc-card]:w-full">
          <HeroBadge name={name} headline={headline} location={location} links={links} />
        </div>

        <div className="space-y-4 md:col-span-2">
          <p className="glass-card p-6 leading-relaxed text-white/80">{about}</p>
          <ul className="space-y-4">
            {experience.map((e) => (
              <Entry key={e.role + e.org} {...e} />
            ))}
          </ul>
        </div>
      </div>

      <SubHeading>03 / Toolkit — what I bring to the build</SubHeading>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <li key={s.group} className="glass-card p-6">
            <div className="flex justify-between">
              <p className="font-medium">{s.group}</p>
              <span className="text-xs text-white/35">0{i + 1}</span>
            </div>
            <div className="mt-4 border-t border-white/10 pt-4">
              <Chips items={s.items} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
