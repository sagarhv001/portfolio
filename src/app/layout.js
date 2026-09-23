import { Inter } from "next/font/google";
import "./globals.css";
import config from "../../app.js";
import Hyperspeed from "@/components/Hyperspeed/Hyperspeed";

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
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="fixed inset-0 -z-10">
          <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
        </div>
        {children}
      </body>
    </html>
  );
}
