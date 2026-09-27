import { content } from "../../../app.js";
import ContactForm from "@/components/ContactForm";
import { Section } from "./Section";

export default function Contact() {
  const { links, services, web3formsKey } = content;

  return (
    <Section id="contact" title="05 / Contact">
      {/* CTA banner: pitch + email on the left, what I can help with on the right */}
      <div className="glass-card grid gap-8 p-6 sm:p-10 md:grid-cols-[1.6fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">Open to the right problem</p>
          <p className="mt-4 text-3xl font-bold sm:text-5xl">Have a process worth automating?</p>
          <p className="mt-4 text-white/60">Tell me what you’re building, what’s getting in the way, and where you want to take it.</p>
          <a href={links.email} className="glass mt-8 inline-block px-6 py-3 font-medium">
            {links.email.replace("mailto:", "")} ↗
          </a>
        </div>

        <div className="md:border-l md:border-white/10 md:pl-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">How I can help</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <ContactForm accessKey={web3formsKey} />
      </div>
    </Section>
  );
}
