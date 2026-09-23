import { content } from "../../../app.js";
import ContactForm from "@/components/ContactForm";
import { Section } from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <ContactForm accessKey={content.web3formsKey} />
    </Section>
  );
}
