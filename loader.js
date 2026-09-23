'use client'

import config from "./app.js";

export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pexels.com")) {
    return src
  }
  return `${config.siteUrl}/${src}?w=${width}&q=${quality || 75}`
}
