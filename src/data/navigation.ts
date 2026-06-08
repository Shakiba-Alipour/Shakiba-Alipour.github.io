// ============================================================
// data/navigation.ts
// Navbar links and site-wide config.
// Adjust href values to match your section IDs in App.tsx.
// ============================================================

import type { NavLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

// ------------------------------------------------------------
// Site-wide personal config
// Update these values — they're used across multiple components
// ------------------------------------------------------------
export const siteConfig = {
  name: "Shakiba Alipour",
  title: "Computer Engineer",
  subtitle: "Computer Engineer · Front-end Specialist · FUM Graduate",
  tagline: "Self-taught. Production-proven. Leadership-driven.",
  email: "alipour.sh79@gmail.com",
  phone: "+98 915 007 3665",
  location: "Mashhad, Iran",
  portfolio: "https://shakiba.dev",
  linkedin: "https://www.linkedin.com/in/shakiba-alipour/",
  github: "https://github.com/Shakiba-Alipour",
  cvPath: "/assets/Shakiba_Alipour_CV.pdf", // place your CV PDF in public/assets/
  profileImagePath: "/assets/profile.jpg", // place your photo in public/assets/
};
