import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { navLinks } from "./data/navigation";

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
      <main>
        {/* Sections go here — each needs an id matching its nav link */}
        <section
          id="hero"
          className="min-h-screen bg-surface-50 
          flex items-center justify-center"
        >
          <h1 className="font-display text-primary text-4xl">Hero</h1>
        </section>
        <section
          id="about"
          className="min-h-screen bg-surface 
          flex items-center justify-center"
        >
          <h1 className="font-display text-primary text-4xl">About</h1>
        </section>
      </main>
    </>
  );
}

export default App;
