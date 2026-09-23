// Shared chrome for every content section.
// The page itself never scrolls — each section fills the viewport and overflows internally.

export function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="mx-auto flex h-[100dvh] w-full max-w-4xl flex-col justify-center px-4 pb-6 pt-24 sm:px-6"
    >
      {/* no panel — the glass items carry the surface, so they refract the trails directly */}
      <div className="no-scrollbar max-h-full overflow-y-auto overscroll-contain px-2 py-2">
        <h2 className="mb-10 text-sm uppercase tracking-[0.3em] text-white/50">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function SubHeading({ children }) {
  return <h3 className="mb-6 mt-14 text-xs uppercase tracking-[0.25em] text-white/35">{children}</h3>;
}

export function Entry({ role, org, date, desc }) {
  return (
    <li className="glass-card p-5">
      <p className="font-medium">{role}</p>
      <p className="text-white/60">{org}</p>
      <p className="text-sm text-white/40">{date}</p>
      {desc && <p className="mt-2 text-white/70">{desc}</p>}
    </li>
  );
}
