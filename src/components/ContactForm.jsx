"use client";

import { useState } from "react";

export default function ContactForm({ accessKey }) {
  // ponytail: one status beats three booleans that can disagree
  const [status, setStatus] = useState("idle");

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.target;
    const body = Object.fromEntries(new FormData(form));
    body.access_key = accessKey;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  // ponytail: ::before doesn't render on <input>, so fields get the glass minus the rim
  const field =
    "glass-card w-full px-4 py-3 outline-none placeholder:text-white/30 focus:ring-1 focus:ring-white/50";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {/* web3forms honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

      <input name="name" required placeholder="Your name" className={field} />
      <input name="email" type="email" required placeholder="Your email" className={field} />
      <textarea name="message" rows={5} required placeholder="What would you like to discuss?" className={`${field} resize-y`} />

      <button type="submit" disabled={status === "sending"} className="glass self-start px-6 py-3 disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      <p aria-live="polite" className="text-sm">
        {status === "sent" && <span className="text-emerald-400">Thanks — message sent.</span>}
        {status === "error" && <span className="text-red-400">Something went wrong. Email me directly instead.</span>}
      </p>
    </form>
  );
}
