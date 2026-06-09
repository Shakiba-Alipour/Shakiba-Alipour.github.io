// ============================================================
// data/experience.ts
// Professional, internship, and student-job experience.
// Leadership is folded in via leadershipNote where relevant.
// Ordered most recent first.
// ============================================================
import type { Experience } from "../types";
import HamraheAvalLogo from "../assets/hamrahe_aval_logo.png";
import MusicClubLogo from "../assets/Music_Club.jpg";
import KanoonLogo from "../assets/shora_kanoon.png";
import ForoushyarLogo from "../assets/Foroushyar.png";

export const experiences: Experience[] = [
  {
    id: "foroushyar",
    role: "Front-end Engineer",
    company: "Foroushyar — Atena Tech Smart Data Processing Co.",
    location: "Mashhad, IRAN",
    duration: "Dec 2024 – Dec 2025",
    startDate: "2024-12",
    endDate: "2025-12",
    type: "full-time",
    industry: "AI / Chatbot Services",
    bullets: [
      "Led the complete redevelopment of the Foroushyar platform's front-end from scratch using React, TypeScript, Zustand, and Tailwind CSS",
      "Accurately translated detailed Figma designs into a fully responsive, user-friendly interface",
      "Collaborated with a cross-functional team to enhance user experience and implement new features",
    ],
    logo: ForoushyarLogo,
    url: "https://foroush-yar.ir/",
  },
  {
    id: "carsc-treasurer",
    role: "Treasurer",
    company:
      "CARSC — Cultural, Artistic, Religious & Social Associations Council",
    location: "Ferdowsi University of Mashhad, IRAN",
    duration: "Dec 2022 – Dec 2023",
    startDate: "2022-12",
    endDate: "2023-12",
    type: "student-job",
    bullets: [
      "Managed all financial transactions and allocated the annual budget across 17 university associations",
      "Negotiated with sponsors — including prominent Mashhad business figures — to raise funds for student-led events",
      "Administered financial affairs for some of the largest student-organized events at FUM",
    ],
    logo: KanoonLogo,
    url: "https://www.instagram.com/kanoonnews/",
  },
  {
    id: "mci-internship",
    role: "Software Engineer",
    company: "Hamrahe Aval (MCI — Mobile Telecommunications Company of IRAN)",
    location: "Mashhad, IRAN",
    duration: "Jul 2022 – Sep 2022",
    startDate: "2022-07",
    endDate: "2022-09",
    type: "internship",
    bullets: [
      "Studied the configuration of mobile networks with a focus on 2G and 3G technologies",
      "Developed a Java-based desktop application to automate the review of final site survey reports",
    ],
    logo: HamraheAvalLogo,
    url: "https://mci.ir/",
  },
];

// ------------------------------------------------------------
// Voluntary & Leadership Experience
// Folded into About section as a narrative callout,
// and referenced in the Experience timeline via leadershipNote.
// Full detail available here for any component that needs it.
// ------------------------------------------------------------
export interface VoluntaryRole {
  id: string;
  role: string;
  organization: string;
  duration: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  logo: string;
  url?: string;
}

export const voluntaryRoles: VoluntaryRole[] = [
  {
    id: "music-club-treasurer",
    role: "Editor",
    organization:
      "Music Student Association - Ferdowsi University of Mashhad, IRAN",
    duration: "Sep 2023 – Jun 2024",
    startDate: "2023-09",
    endDate: "2024-06",
    highlights: ["Edited articles for Arghanoon magazine of the music club"],
    logo: MusicClubLogo,
    url: "https://www.instagram.com/ferdowsi_music_club/",
  },
  {
    id: "music-club-treasurer",
    role: "Board Member & Treasurer",
    organization:
      "Music Student Association - Ferdowsi University of Mashhad, IRAN",
    duration: "Nov 2022 – Sep 2023",
    startDate: "2022-11",
    endDate: "2023-09",
    highlights: [
      "Managed the club's annual budget and allocated financial resources for activities",
      "Negotiated with sponsors to raise funds for club events",
      "Planned and held music festivals",
      "Edited articles for Arghanoon magazine of the music club",
    ],
    logo: MusicClubLogo,
    url: "https://www.instagram.com/ferdowsi_music_club/",
  },
  {
    id: "music-club-president",
    role: "President",
    organization:
      "Music Student Association - Ferdowsi University of Mashhad, IRAN",
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
    logo: MusicClubLogo,
    url: "https://www.instagram.com/ferdowsi_music_club/",
  },
  {
    id: "music-club-board",
    role: "Board Member",
    organization:
      "Music Student Association - Ferdowsi University of Mashhad, IRAN",
    duration: "Aug 2020 – Sep 2021",
    startDate: "2020-08",
    endDate: "2021-09",
    highlights: [
      "Researched and chose appropriate topics for weekly music discussion meetings",
      "Selected and invited professional Iranian musicians as guest speakers",
      "Conducted Instagram Live discussions with more than 800 viewers per session",
    ],
    logo: MusicClubLogo,
    url: "https://www.instagram.com/ferdowsi_music_club/",
  },
];
