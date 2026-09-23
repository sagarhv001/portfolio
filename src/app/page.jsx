import SectionSwitcher from "@/components/SectionSwitcher";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  // server-rendered sections, handed to the client switcher which shows one at a time
  const sections = {
    home: <Hero />,
    work: <Work />,
    about: <About />,
    education: <Education />,
    contact: <Contact />,
  };

  return (
    <main className="relative">
      <SectionSwitcher sections={sections} />
    </main>
  );
}
