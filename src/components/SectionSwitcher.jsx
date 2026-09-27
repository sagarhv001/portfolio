"use client";

import { useEffect, useRef, useState } from "react";
import Dock from "./Dock/Dock";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" };

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" {...S} aria-hidden="true">
    {children}
  </svg>
);

const NAV = [
  { id: "home", label: "Home", icon: <Svg><path d="M3 10.5 12 3l9 7.5" /><path d="M5.5 9.5V21h13V9.5" /></Svg> },
  { id: "work", label: "Work", icon: <Svg><rect x="3" y="7.5" width="18" height="13" rx="2" /><path d="M9 7.5V5.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></Svg> },
  { id: "about", label: "About", icon: <Svg><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></Svg> },
  { id: "education", label: "Education", icon: <Svg><path d="m12 4 9 4.5-9 4.5-9-4.5Z" /><path d="M7 11v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5" /></Svg> },
  { id: "contact", label: "Contact", icon: <Svg><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" /></Svg> },
];

const SUN = <Svg><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Svg>;
const MOON = <Svg><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" /></Svg>;

const BLUR_MS = 500;

export default function SectionSwitcher({ sections }) {
  const [active, setActive] = useState("home");
  const [small, setSmall] = useState(false);
  // the layout's inline script already applied the theme; this just mirrors it for the icon
  const [day, setDay] = useState(false);

  useEffect(() => setDay(document.documentElement.dataset.theme === "day"), []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const sync = () => setSmall(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // the URL hash is the router: /#contact deep-links, back/forward and href="#work" links all switch sections.
  // ref so the listener never sees a stale `go`
  const goRef = useRef();
  useEffect(() => {
    // deep link: show it straight away, no warp on first paint
    const id = location.hash.slice(1);
    if (sections[id]) setActive(id);

    // back/forward (in-page links are intercepted below, so they never reach the browser's own hash jump)
    const onPop = () => goRef.current(location.hash.slice(1) || "home", false);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [sections]);

  function go(id, push = true) {
    if (id === active || !sections[id]) return;
    if (push) history.pushState(null, "", id === "home" ? location.pathname : `#${id}`);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(id);
      return;
    }

    document.body.dataset.warping = "1";
    window.dispatchEvent(new Event("hyperspeed:warp"));

    // swap at the midpoint, while the old section is fully faded out
    setTimeout(() => {
      setActive(id);
      delete document.body.dataset.warping;
    }, BLUR_MS);
  }

  goRef.current = go;

  // href="#work" links inside a section go through the dock's path instead of native hash navigation
  function onContentClick(e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    go(a.getAttribute("href").slice(1) || "home");
  }

  function toggleTheme() {
    const next = day ? "night" : "day";
    if (next === "day") document.documentElement.dataset.theme = "day";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage blocked (private mode): the toggle still works, it just won't be remembered
    }
    setDay(!day);
  }

  const items = NAV.map((s) => ({
    ...s,
    onClick: () => go(s.id),
    className: s.id === active ? "is-active" : "",
  }));

  const size = small ? 36 : 50;

  return (
    <>
      {/* reuses .dock-item styling so it matches the dock without joining it */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={day ? "Night mode" : "Day mode"}
        title={day ? "Night mode" : "Day mode"}
        className="dock-item z-50 [&>svg]:h-[45%] [&>svg]:w-[45%]"
        // inline: .dock-item sets position: relative, which would beat a `fixed` class
        // top 1rem lines it up with the dock's icons (panel top 0.5rem + padding 0.5rem)
        style={{ position: "fixed", top: "1rem", left: "0.5rem", width: size, height: size }}
      >
        {day ? MOON : SUN}
      </button>

      {/* phones: dock sits at the bottom where thumbs reach, and no magnify — there is no hover on touch */}
      <div className={`pointer-events-none fixed inset-x-0 z-50 flex justify-center ${small ? "bottom-0 items-end" : "top-0"}`}>
        <Dock
          items={items}
          baseItemSize={small ? 36 : 50}
          magnification={small ? 36 : 70}
          distance={small ? 120 : 200}
          panelHeight={small ? 52 : 68}
          className={small ? "dock-bottom" : ""}
        />
      </div>

      <div id="content" onClick={onContentClick}>
        {sections[active]}
      </div>
    </>
  );
}
