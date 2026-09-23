import { content } from "../../../app.js";
import { Section, SubHeading, Entry } from "./Section";

export default function Education() {
  const { education, certifications } = content;

  return (
    <Section id="education" title="Education">
      <ul className="space-y-4">
        {education.map((e) => (
          <Entry key={e.role + e.org} {...e} />
        ))}
      </ul>

      <SubHeading>Certifications</SubHeading>
      <ul className="space-y-3 text-white/70">
        {certifications.map((c) => (
          <li key={c} className="glass-card p-4">
            {c}
          </li>
        ))}
      </ul>
    </Section>
  );
}
