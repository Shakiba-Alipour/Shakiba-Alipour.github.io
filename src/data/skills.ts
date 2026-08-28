// ============================================================
// data/skills.ts
// Skills grouped by category for the Skills section.
// Keep levels honest — this is a professional document.
// ============================================================

import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "professional" },
      { name: "TypeScript", level: "professional" },
      { name: "JavaScript", level: "professional" },
      { name: "HTML", level: "professional" },
      { name: "CSS", level: "professional" },
      { name: "Tailwind CSS", level: "professional" },
    ],
  },
  {
    category: "State & Tools",
    skills: [
      { name: "Zustand", level: "beginner" },
      { name: "Redux", level: "intermediate" },
      { name: "Git", level: "professional" },
      { name: "Figma", level: "beginner" },
      { name: "Node.js", level: "intermediate" },
      { name: "jQuery", level: "intermediate" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Java", level: "professional" },
      { name: "Python", level: "intermediate" },
      { name: "C", level: "academic" },
    ],
  },
  {
    category: "CS Fundamentals",
    skills: [
      { name: "Data Structures & Algorithms", level: "academic" },
      { name: "Compiler Design", level: "academic" },
      { name: "Automata Theory", level: "academic" },
      { name: "Information Retrieval", level: "academic" },
      { name: "Data Mining", level: "academic" },
      { name: "Operating Systems", level: "academic" },
      { name: "Software Testing", level: "academic" },
    ],
  },
  {
    category: "AI & Emerging",
    skills: [
      { name: "Prompt Engineering", level: "intermediate" },
      { name: "n8n Workflow Automation", level: "intermediate" },
      { name: "AI-assisted Development", level: "intermediate" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Team Leadership", level: "professional" },
      { name: "Cross-functional Collaboration", level: "professional" },
      { name: "Technical Communication", level: "professional" },
      { name: "Mentoring", level: "professional" },
      { name: "Budget Management", level: "professional" },
      { name: "Event Organizing", level: "professional" },
    ],
  },
];

// ------------------------------------------------------------
// Level descriptions — used in UI tooltips or legends
// ------------------------------------------------------------
export const levelDescriptions: Record<string, string> = {
  professional: "Used in production — professional, day-to-day experience",
  intermediate: "Solid working knowledge — coursework and/or personal projects",
  academic: "Studied formally — strong theoretical foundation",
};
