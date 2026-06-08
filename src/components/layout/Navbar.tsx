/* ============================================================
Responsibilities:
  - Sticky navigation bar at the top of the page
  - Transparent at top, solid + shadow after scrolling
  - Active link highlighting based on scroll position
  - Collapsible mobile menu (hamburger)
  - Smooth scroll to sections on link click
 ============================================================ */

import { useState, useEffect, useCallback } from "react";
import { navLinks, siteConfig } from "../../data/navigation";

/* ------------------------------------------------------------
Types
activeSection is the id of the section currently in view
e.g. "about", "projects", "contact"
------------------------------------------------------------*/
interface NavbarProps {
  activeSection: string;
}

// ------------------------------------------------------------
// Inner component — a single nav link
// Extracted to avoid repeating the same className logic 7 times
// ------------------------------------------------------------
interface NavItemProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ href, label, isActive, onClick }: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        relative text-sm font-medium tracking-wide transition-colors duration-200
        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
        after:origin-left after:scale-x-0 after:bg-accent after:transition-transform
        after:duration-200 hover:after:scale-x-100
        ${
          isActive
            ? "text-primary-700 after:scale-x-100"
            : "text-text-secondary hover:text-primary-700"
        }
      `}
    >
      {label}
    </a>
  );
}

// ------------------------------------------------------------
// Main Navbar component
// ------------------------------------------------------------
export default function Navbar({ activeSection }: NavbarProps) {
  // Is the page scrolled past the hero? Controls background style
  const [isScrolled, setIsScrolled] = useState(false);

  // Is the mobile menu open?
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener — runs once on mount, cleans up on unmount
  // useCallback prevents this function from being recreated on
  // every render, which would cause the effect to re-run unnecessarily
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup: remove the listener when the component unmounts
    // Without this, you'd accumulate listeners on every re-render
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when a link is clicked
  function handleNavClick() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-surface shadow-sm border-b border-border py-3"
            : "bg-transparent py-5"
        }
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* ---- Logo / Name ---- */}
        {/* Clicking the name scrolls back to the top of the page */}
        <a
          href="#hero"
          className="font-display font-bold text-lg text-primary tracking-tight
                     hover:text-primary-700 transition-colors duration-200"
        >
          {siteConfig.name}
        </a>

        {/* ---- Desktop Navigation ---- */}
        {/* Hidden on mobile (hidden), shown as flex row on md+ screens (md:flex) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              // Strip the "#" from "#about" to compare with "about"
              isActive={activeSection === link.href.replace("#", "")}
              onClick={handleNavClick}
            />
          ))}
        </div>

        {/* ---- Hamburger Button (mobile only) ---- */}
        {/* Visible only on small screens (md:hidden) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-text-secondary
                     hover:text-primary-700 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {/* Three lines that animate to an X when open */}
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300
              ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300
              ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300
              ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* ---- Mobile Menu Dropdown ---- */}
      {/* Slides down when isMobileMenuOpen is true */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          bg-surface border-t border-border
        `}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.href.replace("#", "")}
              onClick={handleNavClick}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
