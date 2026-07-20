/* ============================================================
Responsibilities:
  - Tell Shakiba's story as a narrative (not a resume dump)
  - Quick facts card for scannable key info
  - Leadership callout (folded in from Experience)
  - Alternating background color to visually separate sections
============================================================ */

import SectionTitle from "../ui/SectionTitle";
import { siteConfig } from "../../data/siteConfig";

// ------------------------------------------------------------
// Quick facts data
// Defined locally — this is display-only info, not reused
// elsewhere, so it doesn't need to live in /data
// ------------------------------------------------------------
const quickFacts = [
  { label: "Degree", value: "B.Sc. Computer Engineering" },
  { label: "University", value: "Ferdowsi University of Mashhad, IRAN" },
  { label: "Location", value: "Mashhad, Iran" },
  { label: "English", value: "IELTS Band 7" },
  { label: "Available for", value: "Full-time roles & Graduate programs" },
];

// ------------------------------------------------------------
// Leadership stats — shown in the callout block
// ------------------------------------------------------------
const leadershipStats = [
  { value: "40+", label: "Association members led" },
  { value: "700+", label: "Event attendees" },
  { value: "4", label: "National awards" },
];

export default function About() {
  return (
    // Alternating background: surface-50 (very light grey)
    // This creates visual rhythm as the user scrolls
    <section id="about" className="bg-surface-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle tag="About Me" title="The person behind the pixels" />

        {/* ---- Two-column layout: story + quick facts ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* ---- Story: takes up 2/3 of the grid ---- */}
          <div
            className="lg:col-span-2 space-y-5 text-text-secondary
                          leading-relaxed text-base"
          >
            {/* Paragraph 1 — Foundation */}
            <p>
              I graduated with a B.Sc. in Computer Engineering from{" "}
              <span className="text-text-primary font-medium">
                Ferdowsi University of Mashhad, IRAN
              </span>
              , where I built a strong theoretical foundation across compilers,
              automata theory, data mining, information retrieval, and software
              testing. Engineering taught me how to think about problems — not
              just solve them.
            </p>

            {/* Paragraph 2 — Self-directed growth */}
            <p>
              What the curriculum didn't cover, I taught myself. React,
              TypeScript, Tailwind CSS, Zustand, Node.js — I picked up the
              entire modern front-end stack independently, driven by genuine
              curiosity and a need to build real things. There's something
              genuinely thrilling about turning a design into something you can
              hover, click, and scroll through. My{" "}
              <span className="text-text-primary font-medium">
                bachelor's thesis
              </span>{" "}
              — a weather forecast website built with JavaScript and Node.js —
              was my first proof of that: written without a mentor, entirely
              from scratch.
            </p>

            {/* Paragraph 3 — Production proof */}
            <p>
              That self-directed approach carried into my professional work. At{" "}
              <span className="text-text-primary font-medium">Foroushyar</span>,
              I led the complete front-end redevelopment of an AI-powered sales
              platform — from blank canvas to production. I translated Figma
              designs into responsive interfaces, integrated backend APIs, and
              managed state across a growing application.
            </p>

            {/* Paragraph 4 — The human side */}
            <p>
              Outside of code, I spent three years as the board member of the{" "}
              <span className="text-text-primary font-medium">
                Music Student Association at FUM
              </span>{" "}
              — eventually as president. I organized festivals, mentored new
              members, and negotiated sponsorships. Those experiences shaped how
              I work on teams: with ownership, communication, and care.
            </p>

            {/* Paragraph 5 — Looking forward */}
            <p>
              I'm currently looking for opportunities where I can grow as an
              engineer — whether that's a challenging technical role or a
              graduate program that deepens my foundation. I work best in
              environments that take quality seriously and give people room to
              own their work.
            </p>
          </div>

          {/* ---- Quick Facts Card: takes up 1/3 of the grid ---- */}
          <div className="lg:col-span-1">
            <div
              className="bg-surface rounded-xl border border-border
                            p-6 shadow-sm sticky top-24"
            >
              {/* sticky top-24 keeps the card visible as you scroll
                  through the longer text column on the left */}

              <h3
                className="font-display font-semibold text-lg
                             text-primary mb-5"
              >
                Quick Facts
              </h3>

              <dl className="space-y-4">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-border pb-3
                                                   last:border-0 last:pb-0"
                  >
                    {/* dt = definition term (the label) */}
                    <dt
                      className="text-xs font-medium tracking-wide
                                   text-text-muted uppercase mb-1"
                    >
                      {fact.label}
                    </dt>
                    {/* dd = definition description (the value) */}
                    <dd className="text-sm text-text-primary font-medium">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Contact shortcut */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 block w-full text-center py-2.5 px-4
                           bg-primary-700 text-white text-sm font-medium
                           rounded-lg hover:bg-primary-600 transition-colors
                           duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* ---- Leadership Callout ---- */}
        {/* A visually distinct block that folds in the leadership story */}
        <div className="bg-primary-700 rounded-xl p-8 text-white">
          <div
            className="flex flex-col md:flex-row md:items-center
                          gap-6 mb-8"
          >
            <div>
              <h3 className="font-display font-bold text-xl mb-2 text-white">
                Leadership Beyond the Keyboard
              </h3>
              <p className="text-primary-100 text-sm leading-relaxed max-w-2xl">
                Technical skills are only part of the picture. For three years
                at FUM, I built the kind of leadership, communication, and
                organizational skills that most engineers only develop a decade
                into their careers.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {leadershipStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display font-extrabold text-3xl
                                text-white mb-1"
                >
                  {stat.value}
                </div>
                <div
                  className="text-primary-100 text-xs uppercase
                                tracking-wide"
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
