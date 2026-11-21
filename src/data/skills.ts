import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Software Engineering",
    subcategories: [
      {
        name: "Web Development",
        skills: [
          { name: "React" },
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "HTML" },
          { name: "CSS" },
          { name: "Tailwind CSS" },
          { name: "Node.js" },
          { name: "Zustand" },
          { name: "Redux" },
          { name: "jQuery" },
        ],
      },
      {
        name: "Programming & CS Foundations",
        skills: [
          { name: "Java" },
          { name: "Python" },
          { name: "C" },
          { name: "Data Structures & Algorithms" },
          { name: "Compiler Design" },
          { name: "Automata Theory" },
          { name: "Operating Systems" },
          { name: "Software Testing" },
        ],
      },
    ],
  },
  {
    category: "AI & Automation",
    subcategories: [
      {
        name: "AI & Automation",
        skills: [
          { name: "Prompt Engineering" },
          { name: "n8n Workflow Automation" },
          { name: "AI-assisted Development" },
        ],
      },
      {
        name: "Data & Information",
        skills: [{ name: "Information Retrieval" }, { name: "Data Mining" }],
      },
    ],
  },
  {
    category: "Tools & Collaboration",
    subcategories: [
      {
        name: "Development & Design",
        skills: [{ name: "Git" }, { name: "Figma" }],
      },
      {
        name: "Leadership & Collaboration",
        skills: [
          { name: "Team Leadership" },
          { name: "Cross-functional Collaboration" },
          { name: "Budget Management" },
          { name: "Event Organizing" },
        ],
      },
    ],
  },
];
