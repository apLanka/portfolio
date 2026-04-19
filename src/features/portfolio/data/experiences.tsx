import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GraduationCapIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "metarunelabs",
    companyName: "Metarune Labs",
    companyWebsite: "https://metarunelabs.com",
    positions: [
      {
        id: "1",
        title: "Software Engineer",
        employmentPeriod: {
          start: "04.2023",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        isExpanded: true,
        description: `- Architected and delivered full-stack features for a **real-time chat** platform serving **100K+** users, contributing to **$10M+** revenue impact.
- Designed and implemented **event-driven serverless** workflows (**AWS Lambda**, **SQS**) to improve scalability and reliability under high load.
- **Led a frontend team of 7+** engineers — PR standards, code quality, and mentoring junior developers.
- **React Native** cross-platform mobile apps; **Unity (C#)** and **Node.js** for gameplay and backend systems.
- **Jest**, **Vitest**, and **Playwright** for unit and end-to-end testing across frontend and backend.`,
        skills: [
          "AWS",
          "React",
          "React Native",
          "Next.js",
          "Node.js",
          "TypeScript",
          "Unity",
          "C#",
          "PostgreSQL",
          "Redis",
          "Jest",
          "Vitest",
          "Playwright",
        ],
      },
      {
        id: "2",
        title: "Trainee Software Engineer",
        employmentPeriod: {
          start: "02.2023",
          end: "04.2023",
        },
        employmentType: "Traineeship",
        icon: <BriefcaseBusinessIcon />,
        isExpanded: false,
        description: `- Supported **full-stack** development across **web**, **backend**, and **mobile** projects while onboarding to team workflows and engineering standards.`,
        skills: ["Next.js", "TypeScript", "Node.js", "React Native"],
      },
    ],
    isCurrentEmployer: true,
  },
]

export const EDUCATION: Experience[] = [
  {
    id: "sliit",
    companyName: "SLIIT",
    companyWebsite: "https://www.sliit.lk",
    positions: [
      {
        id: "1",
        title: "B.Sc. in Software Engineering",
        employmentPeriod: {
          start: "2023",
          end: "2027",
        },
        employmentType: "Undergraduate (expected 2027)",
        icon: <GraduationCapIcon />,
        description:
          "**Sri Lanka Institute of Information Technology (SLIIT).** Relevant coursework: Distributed Systems, Software Architecture, Application Frameworks, Data Structures & Algorithms.",
        skills: [
          "Distributed Systems",
          "Software Architecture",
          "Algorithms",
          "Software Engineering",
        ],
      },
    ],
  },
]
