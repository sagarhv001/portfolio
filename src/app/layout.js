import { Inter } from "next/font/google";
import "./globals.css";
import config from "../../app.js";
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";
import SideRays from "@/components/SideRays/SideRays";

const inter = Inter({ subsets: ["latin"] });

// module-level so the object identity is stable — it is a useEffect dep in Hyperspeed
// turbulentDistortion is the reactbits demo preset: symmetric, level horizon.
// deepDistortion's pow() term on Y bends the far road up and skews the orientation.
const HYPERSPEED_OPTIONS = { distortion: "turbulentDistortion" };

export const metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the inline script sets data-theme before React hydrates
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* runs before paint so a saved day theme never flashes night first */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: light)").matches?"day":"night");if(t==="day")document.documentElement.dataset.theme="day"}catch(e){}`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        {/* screen blend: rays only add light, so no dark smudges on the day theme */}
        {/* <div className="fixed inset-0 -z-20 mix-blend-screen">
          <SideRays intensity={4} falloff={1.2} />
        </div> */}
        <div className="fixed inset-0 -z-10">
          <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
        </div>
        {children}
      </body>
    </html>
  );
}
