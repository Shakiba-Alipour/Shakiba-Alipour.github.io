import type { Project } from "../types/index";

export const projects: Project[] = [
  {
    id: "foroushyar-platform",
    title: "Foroushyar Platform",
    shortDescription:
      "Complete front-end redevelopment of an AI-powered chatbot sales platform.",
    longDescription:
      "Led the full redevelopment of the Foroushyar platform's front-end from scratch during my year-long role at Atena Tech. The platform is an AI-driven chatbot service for businesses. I was responsible for translating detailed Figma designs into a production-ready, fully responsive interface, integrating backend APIs, and managing state across the application.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    type: "professional",
    featured: true,
    highlights: [
      "Led complete front-end rebuild from scratch — sole front-end developer",
      "Translated Figma designs pixel-accurately into responsive UI",
      "Integrated backend REST APIs for reliable data flow across the platform",
      "Implemented global state management with Zustand",
      "Improved platform responsiveness, usability, and code maintainability",
      "Supervisor noted growth 'exceeded expectations for a junior developer'",
    ],
  },
  {
    id: "hasht-group",
    title: "HashtGroup — Educational Quiz Platform",
    shortDescription:
      "Responsive quiz platform with leaderboard and scoring system for a private school.",
    longDescription:
      "Freelance project for a private educational institution. Built a fully responsive quiz website from scratch as the sole front-end developer, working from Figma designs provided by the client. The platform supports multiple courses, tracks scores, and displays a leaderboard for competitive engagement among students.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Shakiba-Alipour/HashtGroup",
    type: "freelance",
    featured: true,
    highlights: [
      "Sole front-end developer on a client-facing production project",
      "Implemented quizzes across multiple courses with a scoring engine",
      "Built a live leaderboard for student engagement",
      "Delivered fully responsive UI from Figma designs",
    ],
  },
  {
    id: "weather-forecast",
    title: "Weather Forecast Website",
    shortDescription:
      "B.Sc. thesis project — weather app integrating third-party APIs, self-taught from scratch.",
    longDescription:
      "My bachelor's thesis project, supervised by Dr. Mostafa Nouri Baygi at Ferdowsi University. This was my first hands-on experience with JavaScript, Node.js, and third-party API integration — entirely self-taught with no mentor guidance. The project demonstrates my ability to learn new technologies independently and deliver a working product under academic supervision.",
    tech: ["JavaScript", "Node.js", "HTML", "CSS"],
    github: "https://github.com/Shakiba-Alipour/Weather-Forecast-Website",
    type: "thesis",
    featured: true,
    highlights: [
      "First project using JavaScript, Node.js, and REST APIs — fully self-taught",
      "Integrated a third-party weather API for real-time forecast data",
      "Completed and defended as official B.Sc. thesis",
      "Supervised by Dr. Mostafa Nouri Baygi, Dept. of Computer Engineering, FUM",
    ],
  },
  {
    id: "programming-language-antlr",
    title: "Custom Programming Language",
    shortDescription:
      "Designed and implemented a basic programming language with grammar rules and a parser using Antlr4.",
    longDescription:
      "Team project for the Design and Implementation of Programming Languages course at FUM. Designed a basic programming language from scratch, defining grammar rules and building a working parser using Antlr4 and Java. This project deepened my understanding of language theory, lexical analysis, and syntax parsing.",
    tech: ["Antlr4", "Java"],
    github:
      "https://github.com/Shakiba-Alipour/A-Simple-Programming-Language-Using-Antlr",
    type: "academic",
    featured: false,
    highlights: [
      "Designed full grammar rules for a custom language",
      "Implemented lexer and parser using Antlr4",
      "Built as part of the Programming Languages Design & Implementation course",
    ],
  },
  {
    id: "turing-machine",
    title: "Turing Machine Simulator",
    shortDescription:
      "Java implementation of a Turing Machine simulator for the Automata Theory course.",
    longDescription:
      "Solo academic project for the Theory of Languages and Automata course. Implemented a fully functional Turing Machine simulator in Java, reinforcing theoretical understanding of computation models and formal languages.",
    tech: ["Java"],
    github: "https://github.com/Shakiba-Alipour/Turing-Machine-Simulator",
    type: "academic",
    featured: false,
    highlights: [
      "Solo implementation of a Turing Machine in Java",
      "Supports custom tape input and state transitions",
      "Part of Theory of Languages and Automata coursework",
    ],
  },
  {
    id: "data-mining",
    title: "Data Mining — University of Twente",
    shortDescription:
      "Web crawling, frequent pattern extraction, preprocessing, and clustering on a real-world dataset.",
    longDescription:
      "Pair project for the Data Mining course at FUM. Performed end-to-end data mining on the University of Twente's website: crawled the site, extracted frequent patterns, preprocessed the data, and applied clustering algorithms. Implemented entirely in Python.",
    tech: ["Python"],
    github: "https://github.com/Shakiba-Alipour/Data-Mining-Project",
    type: "academic",
    featured: false,
    highlights: [
      "Web crawling and data collection from a real institutional website",
      "Frequent pattern extraction and data preprocessing pipeline",
      "Applied clustering algorithms and evaluated results",
    ],
  },
  {
    id: "software-testing",
    title: "Software Testing Projects",
    shortDescription:
      "Unit and integration testing for two Java/Python applications using JUnit and Selenium.",
    longDescription:
      "Two separate testing projects completed as part of the Software Testing course at FUM. Wrote comprehensive unit and integration tests for a Money Tracker app and an Employee Management System, using JUnit for unit tests and Selenium for UI/integration testing.",
    tech: ["Java", "Python", "JUnit", "Selenium"],
    github: "https://github.com/Shakiba-Alipour/Money-Tracker",
    type: "academic",
    featured: false,
    highlights: [
      "Wrote unit tests with JUnit for a Money Tracker application",
      "Wrote integration tests with Selenium for an Employee Management System",
      "Part of the Software Testing university course",
    ],
  },
];
