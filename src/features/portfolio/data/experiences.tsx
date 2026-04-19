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
        description: `- Design and deliver features on a multi-tenant web platform — data modeling, APIs, and UI — using Next.js, Node.js, PostgreSQL, and Redis.
- Work across service boundaries with a focus on caching strategy, reliability, and maintainable release cadence.
- Help operate deployment pipelines (Docker, cloud infrastructure) and raise the bar on code review and lightweight architecture notes.`,
        skills: [
          "Next.js",
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "Docker",
          "AWS",
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
        description: `- Onboarded to the product codebase and delivery process; contributed to small features and fixes alongside the engineering team.
- Built familiarity with the full path from database and API layers through to frontend and deployment.`,
        skills: ["Next.js", "TypeScript", "PostgreSQL"],
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
        title: "BSc (Hons) in Software Engineering",
        employmentPeriod: {
          start: "2023",
          end: "2027",
        },
        employmentType: "Undergraduate",
        icon: <GraduationCapIcon />,
        description:
          "Sri Lanka Institute of Information Technology (SLIIT). Coursework spans data structures & algorithms, software engineering, databases, networking, and object-oriented design — **expected graduation 2027**.",
        skills: ["Software Engineering", "Computer Science"],
      },
    ],
  },
]
