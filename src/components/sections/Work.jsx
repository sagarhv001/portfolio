import { content } from "../../../app.js";
import { Section, SubHeading, Entry } from "./Section";

export default function Work() {
  const { experience, projects } = content;

  return (
    <Section id="work" title="Work">
      <ul className="space-y-4">
        {experience.map((e) => (
          <Entry key={e.role + e.org} {...e} />
        ))}
      </ul>

      <SubHeading>Projects</SubHeading>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.title}>
            <a href={p.link} className="glass-card group block p-6">
              <p className="font-medium group-hover:underline">{p.title}</p>
              <p className="mt-2 text-white/60">{p.desc}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
