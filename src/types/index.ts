// ============================================================
// types/index.ts
// Single source of truth for all TypeScript interfaces.
// Every component and data file imports from here.
// ============================================================

import type { IconType } from "react-icons";

export type ProjectType =
  | "freelance"
  | "professional"
  | "academic"
  | "thesis"
  | "personal";

export type SkillLevel = "professional" | "intermediate" | "academic";

export type ExperienceType =
  | "full-time"
  | "internship"
  | "student-job"
  | "voluntary";

export type AwardRank = "1st" | "2nd" | "3rd" | "special";

export type AwardScope = "university" | "national";

// ------------------------------------------------------------
// Project
// Used by: Projects section, ProjectModal
// ------------------------------------------------------------
export interface Project {
  id: string;
  title: string;
  shortDescription: string; // shown on card
  longDescription: string; // shown in modal
  tech: string[];
  github?: string;
  live?: string;
  type: ProjectType;
  highlights: string[]; // bullet points in modal
  image?: string; // path to screenshot, e.g. "/assets/projects/hasht.png"
  featured: boolean; // show prominently on projects grid
}

// ------------------------------------------------------------
// Experience
// Used by: Experience section (timeline)
// Leadership context is folded in via leadershipNote
// ------------------------------------------------------------
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  logo: string;
  url?: string;
  startDate: string; // ISO format for sorting, e.g. "2024-12"
  endDate: string; // "present" or ISO format
  type: ExperienceType;
  industry?: string;
  bullets: string[];
  leadershipNote?: string; // folded-in leadership highlight, shown as a subtle callout
  supervisorQuote?: string; // optional pull quote from recommendation letter
}

// ------------------------------------------------------------
// Skill
// Used by: Skills section
// ------------------------------------------------------------
export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  category: string;
  icon?: string; // optional icon name from react-icons
  skills: Skill[];
}

// ------------------------------------------------------------
// Education
// Used by: Education section
// ------------------------------------------------------------
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  gpaNotes?: string; // e.g. "out of 20 (Iranian grading system)"
  thesis?: {
    title: string;
    supervisor: string;
    github?: string;
    description: string;
  };
  notableCourses?: string[];
  logo: string;
  url?: string;
}

// ------------------------------------------------------------
// Award
// Used by: Awards section
// ------------------------------------------------------------
export interface Award {
  year: number;
  title: string;
  event: string;
  organization: string;
  rank: AwardRank;
  scope: AwardScope;
  emoji: string;
}

// ------------------------------------------------------------
// Certificate
// Used by: Education section or standalone Certificates section
// ------------------------------------------------------------
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  credits?: string; // e.g. "2 ECTS"
}

// ------------------------------------------------------------
// NavLink
// Used by: Navbar
// ------------------------------------------------------------
export interface NavLink {
  label: string;
  href: string; // anchor id, e.g. "#projects"
}

// ------------------------------------------------------------
// SocialLink
// Used by: SocialAccounts
// ------------------------------------------------------------
export interface SocialLink {
  label: string;
  icon: IconType;
  href: string;
}
