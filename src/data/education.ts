// ============================================================
// data/education.ts
// Education history and certificates.
// ============================================================

import type { Education, Certificate } from "../types";

export const educationHistory: Education[] = [
  {
    id: "fum-bsc",
    degree: "Bachelor of Science — Computer Engineering",
    institution: "Ferdowsi University of Mashhad (FUM)",
    location: "Mashhad, Iran",
    duration: "Sep 2018 – Sep 2023",
    startDate: "2018-09",
    endDate: "2023-09",
    gpa: "16.44",
    gpaNotes: "out of 20 (Iranian grading system)",
    thesis: {
      title: "Weather Forecast Website",
      supervisor: "Dr. Mostafa Nouri Baygi",
      github: "https://github.com/Shakiba-Alipour/Weather-Forecast-Website",
      description:
        "First hands-on project using JavaScript, Node.js, and third-party APIs. Entirely self-taught with no mentor guidance — demonstrates independent learning ability and initiative.",
    },
    notableCourses: [
      "Software Engineering I & II",
      "Software Testing",
      "Design and Implementation of Programming Languages",
      "Compiler Design",
      "Theory of Languages and Automata",
      "Data Mining",
      "Information Retrieval",
      "Operating Systems",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "faradars-os",
    title: "Operating System Fundamentals",
    issuer: "FaraDars",
    date: "Jan 2026",
    credentialUrl: "https://faradars.org/verify/D1495957",
    credentialId: "D1495957",
  },
  {
    id: "helsinki-java2",
    title: "Java Programming II",
    issuer: "University of Helsinki (mooc.fi)",
    date: "Feb 2021",
    credentialUrl: "https://certificates.mooc.fi/validate/r8gucgdxot",
    credits: "2 ECTS",
  },
  {
    id: "helsinki-java1",
    title: "Java Programming I",
    issuer: "University of Helsinki (mooc.fi)",
    date: "Jan 2021",
    credentialUrl: "https://certificates.mooc.fi/validate/8vzbgkitw2j",
    credits: "5 ECTS",
  },
  {
    id: "helsinki-ai",
    title: "Elements of AI",
    issuer: "University of Helsinki (mooc.fi)",
    date: "Feb 2020",
    credentialUrl: "https://certificates.mooc.fi/validate/79uy1upio86",
    credits: "2 ECTS",
  },
  {
    id: "duke-java2",
    title: "Java Programming: Arrays, Lists, and Structured Data",
    issuer: "Duke University (Coursera)",
    date: "May 2020",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/A3B3THATQ8KA",
  },
  {
    id: "duke-java1",
    title: "Java Programming: Solving Problems with Software",
    issuer: "Duke University (Coursera)",
    date: "Mar 2020",
    credentialUrl: "https://coursera.org/verify/DYC3R52SZLDV",
  },
  {
    id: "ibm-design",
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    date: "Apr 2020",
    credentialUrl: "https://www.credly.com/go/2Hs8lDVC",
  },
];
