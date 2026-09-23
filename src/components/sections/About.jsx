import { content } from "../../../app.js";
import { Section, SubHeading } from "./Section";

export default function About() {
  const { about, skills } = content;

  return (
    <Section id="about" title="About">
      <p className="glass-card block p-6 text-lg leading-relaxed text-white/80">{about}</p>

      <SubHeading>Skills</SubHeading>
      <ul className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <li key={s} className="glass px-4 py-1.5 text-sm">
            {s}
          </li>
        ))}
      </ul>
    </Section>
  );
}
