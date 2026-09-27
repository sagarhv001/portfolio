"use client";

import ProfileCard from "./ProfileCard/ProfileCard";

// data comes in as props: app.js pulls in child_process, so it must stay out of client bundles
// GitHub Pages base path ("" locally) — plain public/ paths don't get it automatically
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function HeroBadge({ name, headline, location, links }) {
  return (
    <ProfileCard
      className="pc-glass"
      innerGradient="none"
      behindGlowColor="rgba(255, 255, 255, 0.18)"
      name={name}
      title={headline.split(" — ")[0]}
      handle="sagarhv001"
      status={location}
      contactText="Contact"
      avatarUrl={`${BASE}/avatar.png`}
      iconUrl={`${BASE}/icon-pattern.svg`}
      grainUrl={`${BASE}/grain.svg`}
      onContactClick={() => (window.location.href = links.email)}
    />
  );
}
