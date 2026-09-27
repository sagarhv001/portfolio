import { content } from "../../../app.js";
import { Section, Entry } from "./Section";

export default function Education() {
  const { education, certifications } = content;

  return (
    <Section id="education" title="04 / Education" heading="Foundations.">
      <div className="grid gap-6 md:grid-cols-2">
        <ul className="space-y-4">
          {education.map((e) => (
            <Entry key={e.role + e.org} {...e} />
          ))}
        </ul>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.25em] text-white/35">Certifications</h3>
          <ul className="space-y-3 text-white/70">
            {certifications.map((c) => (
              <li key={c} className="glass-card p-4">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
