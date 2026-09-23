"use client";

import { useEffect, useState } from "react";
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

const BLUR_MS = 500;

export default function SectionSwitcher({ sections }) {
  const [active, setActive] = useState("home");
  const [small, setSmall] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const sync = () => setSmall(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function go(id) {
    if (id === active) return;

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

  const items = NAV.map((s) => ({
    ...s,
    onClick: () => go(s.id),
    className: s.id === active ? "is-active" : "",
  }));

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
        <Dock
          items={items}
          baseItemSize={small ? 36 : 50}
          magnification={small ? 52 : 70}
          distance={small ? 120 : 200}
          panelHeight={small ? 52 : 68}
        />
      </div>

      <div id="content">{sections[active]}</div>
    </>
  );
}
