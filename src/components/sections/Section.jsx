// Shared chrome for every content section.
// The page itself never scrolls — each section fills the viewport and overflows internally.
// Phones: dock is at the bottom, so the padding flips (pt clears the theme toggle, pb clears the dock).

// title = small numbered eyebrow, heading = optional big line under it, aside = optional blurb on the right
export function Section({ id, title, heading, aside, children }) {
  return (
    <section
      id={id}
      className="mx-auto flex h-[100dvh] w-full max-w-6xl flex-col justify-center px-4 pb-24 pt-16 sm:px-6 sm:pb-6 sm:pt-24"
    >
      {/* no panel — the glass items carry the surface, so they refract the trails directly */}
      <div className="no-scrollbar max-h-full overflow-y-auto overscroll-contain px-2 py-2">
        <div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/50">{title}</h2>
            {heading && <p className="mt-4 text-3xl font-bold sm:text-5xl">{heading}</p>}
          </div>
          {aside && <p className="max-w-md text-white/60 lg:justify-self-end">{aside}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function SubHeading({ children }) {
  return <h3 className="mb-6 mt-14 text-xs uppercase tracking-[0.25em] text-white/35">{children}</h3>;
}

export function Entry({ role, org, date, desc, points }) {
  return (
    <li className="glass-card p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <p className="font-medium">{role}</p>
        <p className="text-sm text-white/40">{date}</p>
      </div>
      <p className="text-white/60">{org}</p>
      {desc && <p className="mt-2 text-white/70">{desc}</p>}
      {points && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Chips({ items }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="glass px-3 py-1 text-xs">
          {s}
        </li>
      ))}
    </ul>
  );
}
