/* ============================================================
Responsibilities:
  - First section of the page, full viewport height
  - Two-column layout: text left, photo right (stacked on mobile)
  - Staggered fade-up entrance animations
  - Two CTA buttons: View My Work, Download CV
  - Subtle background pattern for visual depth
============================================================ */

import { siteConfig } from "../../data/siteConfig";

function ProfilePhoto() {
  return (
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
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-2/3 relative flex items-left overflow-hidden"
    >

      {/* ---- Main Content ---- */}
      <div className="relative max-w-max mx-auto py-24 w-full">
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
            
            {/* Tagline — the human hook */}
            <p
              className="animate-fade-up delay-400 text-text-muted text-lg
                         max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed"
            >
              {siteConfig.tagline}
            </p>
          </div>

          {/* ---- Right Column: Photo ---- */}
          {/* <ProfilePhoto /> */}
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
