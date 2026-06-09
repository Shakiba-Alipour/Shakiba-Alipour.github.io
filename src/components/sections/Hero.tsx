/* ============================================================
Responsibilities:
  - First section of the page, full viewport height
  - Two-column layout: text left, photo right (stacked on mobile)
  - Staggered fade-up entrance animations
  - Two CTA buttons: View My Work, Download CV
  - Subtle background pattern for visual depth
============================================================ */

import { siteConfig } from "../../data/navigation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-surface overflow-hidden"
    >
      {/* ---- Subtle Background Decoration ---- */}
      {/* A large faint circle in the top-right corner adds depth  */}
      {/* without distracting from the content                     */}
      <div
        className="absolute -top-32 -right-32 w-150 h-150 rounded-full
                   bg-primary-100 opacity-40 blur-3xl pointer-events-none"
      />
      {/* A smaller circle bottom-left for balance */}
      <div
        className="absolute -bottom-20 -left-20 w-75 h-75 rounded-full
                   bg-accent opacity-10 blur-3xl pointer-events-none"
      />

      {/* ---- Main Content ---- */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* ---- Left Column: Text ---- */}
          {/* flex-1 means it takes up remaining space after the photo column */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting line — small, subtle, appears first */}
            <p
              className="animate-fade-up delay-100 text-accent font-medium
                         tracking-widest text-sm uppercase mb-4 before:content-['']
                         before:inline-block before:w-9 before:h-px before:bg-accent before:mr-2 "
            >
              Available for opportunities
            </p>

            {/* Name — the biggest element on the page */}
            <h1
              className="animate-fade-up delay-200 font-display font-extrabold
                         text-5xl md:text-6xl lg:text-7xl text-primary
                         leading-tight mb-4"
            >
              {siteConfig.name}
            </h1>

            {/* Title — slightly smaller, uses accent underline trick */}
            <h2
              className="animate-fade-up delay-300 font-display font-semibold
                         text-2xl md:text-3xl text-text-secondary mb-6"
            >
              {/* The span creates a highlight under "Computer Engineer" */}
              <span className="relative inline-block">
                Computer Engineer
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5
                             bg-accent opacity-60"
                />
              </span>
            </h2>

            {/* Tagline — the human hook */}
            <p
              className="animate-fade-up delay-400 text-text-muted text-lg
                         max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              {siteConfig.tagline}
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-fade-up delay-500 flex flex-col sm:flex-row
                            gap-4 justify-center md:justify-start"
            >
              {/* Primary CTA — View My Work */}
              {/* Solid blue button, scrolls to projects section */}
              <a
                href="#projects"
                className="px-8 py-3 bg-primary-700 text-white font-medium
                           rounded-full hover:bg-primary-600 transition-colors
                           duration-200 text-center shadow-sm"
              >
                View My Work →
              </a>

              {/* Secondary CTA — Download CV */}
              <a
                href={siteConfig.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary-700 text-primary-700
                           font-medium rounded-full hover:bg-primary-100
                           transition-colors duration-200 text-center"
              >
                Download CV
              </a>
            </div>

            {/* Social Links Row */}
            <div
              className="animate-fade-up delay-500 flex items-center gap-6
                            justify-center md:justify-start mt-8 mx-14"
            >
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary-700
                           transition-colors duration-200 text-sm font-medium"
              >
                LinkedIn
              </a>
              <span className="text-border-strong">|</span>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary-700
                           transition-colors duration-200 text-sm font-medium"
              >
                GitHub
              </a>
              <span className="text-border-strong">|</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-text-muted hover:text-primary-700
                           transition-colors duration-200 text-sm font-medium"
              >
                Email
              </a>
            </div>
          </div>

          {/* ---- Right Column: Photo ---- */}
          <div className="animate-fade-up delay-200 shrink-0">
            <div className="relative">
              {/* Decorative border ring behind the photo */}
              <div
                className="absolute inset-0 rounded-full border-2
                           border-primary-400 opacity-30 scale-110"
              />

              {/* Decorative filled ring — offset for depth effect */}
              <div
                className="absolute -inset-3 rounded-full border-2
                           border-dashed border-primary-400 opacity-20
                           animate-spin [animation-duration:20s]"
              />

              {/* Photo container */}
              {/* w-56/h-56 on mobile, w-72/h-72 on desktop */}
              <div
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full
                           overflow-hidden border-4 border-surface shadow-xl"
              >
                <img
                  src={siteConfig.profileImagePath}
                  alt={`${siteConfig.name} — Computer Engineer`}
                  className="w-full h-full object-cover"
                  // Fallback: shows initials if image hasn't been added yet
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add(
                        "bg-primary-100",
                        "flex",
                        "items-center",
                        "justify-center",
                      );
                      parent.innerHTML = `
                        <span class="font-display font-bold text-4xl text-primary-700">
                          SA
                        </span>`;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---- Scroll Indicator ---- */}
        {/* Subtle animated arrow at the bottom, signals there's more below */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2
                        flex flex-col items-center gap-1 text-text-subtle"
        >
          <span className="text-xs tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-linear-to-b from-text-subtle to-transparent" />
        </div>
      </div>
    </section>
  );
}
