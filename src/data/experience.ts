// ============================================================
// data/experience.ts
// Professional, internship, and student-job experience.
// Leadership is folded in via leadershipNote where relevant.
// Ordered most recent first.
// ============================================================
// ============================================================
import type { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "foroushyar",
    role: "Front-end Developer",
    company: "Foroushyar — Atena Tech Smart Data Processing Co.",
    location: "Mashhad, IRAN",
    duration: "Dec 2024 – Dec 2025",
    startDate: "2024-12",
    endDate: "2025-12",
    type: "full-time",
    industry: "AI / Chatbot Services",
    bullets: [
      "Led the complete redevelopment of the Foroushyar platform's front-end from scratch using React, TypeScript, Tailwind CSS, and Zustand",
      "Accurately translated detailed Figma designs into a fully responsive, user-friendly interface",
      "Integrated backend REST APIs to ensure reliable and consistent data flow across the platform",
      "Collaborated with a cross-functional team to enhance user experience and implement new features",
      "Debugged production issues and improved overall code maintainability",
      "Created visual content for social media using Figma to communicate product features and user flows",
    ],
    supervisorQuote:
      "Her rate of improvement exceeded expectations for a junior developer. She evolved into a dependable contributor who could independently handle assigned tasks with care and precision.",
  },
  {
    id: "carsc-treasurer",
    role: "Treasurer",
    company: "CARSC — Cultural, Artistic, Religious & Social Clubs Council",
    location: "Ferdowsi University of Mashhad, IRAN",
    duration: "Dec 2022 – Dec 2023",
    startDate: "2022-12",
    endDate: "2023-12",
    type: "student-job",
    bullets: [
      "Managed all financial transactions and allocated the annual budget across 17 university associations",
      "Negotiated with ~6 sponsors — including prominent Mashhad business figures — to raise funds for student-led events",
      "Maintained professional relationships with industry and business leaders",
      "Administered financial affairs for some of the largest student-organized events at FUM",
    ],
    leadershipNote:
      "Appointed to this paid role directly by the CARSC Coordinator based on leadership capabilities demonstrated as Music Club President — a direct recognition of organizational and interpersonal skills.",
  },
  {
    id: "mci-internship",
    role: "Software Engineer Intern",
    company: "Hamrahe Aval (MCI — Mobile Telecommunications Company of IRAN)",
    location: "Mashhad, IRAN",
    duration: "Jul 2022 – Sep 2022",
    startDate: "2022-07",
    endDate: "2022-09",
    type: "internship",
    bullets: [
      "Studied the configuration of mobile networks with a focus on 2G and 3G technologies",
      "Developed a Java-based desktop application to automate the review of final site survey reports",
      "The application identified and flagged updates and changes in network configurations, improving accuracy and speed of the review process",
      "Worked independently as a solo project from requirements to delivery",
    ],
  },
];

// ------------------------------------------------------------
// Voluntary & Leadership Experience
// Folded into About section as a narrative callout,
// and referenced in the Experience timeline via leadershipNote.
// Full detail available here for any component that needs it.
// ------------------------------------------------------------
export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  duration: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export const leadershipRoles: LeadershipRole[] = [
  {
    id: "music-club-president",
    role: "President — Music Student Association",
    organization: "Ferdowsi University of Mashhad",
    duration: "Oct 2021 – Oct 2022",
    startDate: "2021-10",
    endDate: "2022-10",
    highlights: [
      "Arranged weekly team sessions, assigned tasks, and monitored progress",
      "Negotiated with music teachers and held 21 music workshops",
      "Coordinated communications between the music club team (6 members) and other clubs and university associations",
      "Trained more than 30 new members and assigned tasks to grow the club",
      "Edited articles for Arghanoon magazine of the music club",
    ],
  },
  {
    id: "music-club-treasurer",
    role: "Board Member & Treasurer — Music Student Association",
    organization: "Ferdowsi University of Mashhad",
    duration: "Nov 2022 – Sep 2023",
    startDate: "2022-11",
    endDate: "2023-09",
    highlights: [
      "Managed the club's annual budget and allocated financial resources for activities",
      "Negotiated with sponsors to raise funds for club events",
      "Planned and held music festivals",
      "Edited articles for Arghanoon magazine of the music club",
    ],
  },
  {
    id: "music-club-board",
    role: "Board Member — Music Student Association",
    organization: "Ferdowsi University of Mashhad",
    duration: "Aug 2020 – Sep 2021",
    startDate: "2020-08",
    endDate: "2021-09",
    highlights: [
      "Researched and chose appropriate topics for weekly music discussion meetings",
      "Selected and invited professional Iranian musicians as guest speakers",
      "Conducted Instagram Live discussions with more than 800 viewers per session",
    ],
  },
];