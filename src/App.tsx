import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { navLinks } from "./data/navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/experiences/Experience";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // IntersectionObserver watches all sections and tells us
    // which one is currently most visible in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // rootMargin: trigger when section hits 30% from the top
      { threshold: 0.3 },
    );

    // Observe every section that has an id matching a nav link
    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main className="flex flex-col items-center justify-center">
        {/* Sections go here — each needs an id matching its nav link */}
          <Hero />
          <About />
          <Experience />
      </main>
    </>
  );
}

export default App;
