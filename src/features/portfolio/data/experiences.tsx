import { CodeXmlIcon, GraduationCapIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "metarunelabs",
    companyName: "MetaruneLabs",
    companyWebsite: "https://metarunelabs.com",
    positions: [
      {
        id: "1",
        title: "Full-Stack Software Engineer",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        isExpanded: true,
        description: `- Designed and built the core platform architecture — a multi-tenant web application serving multiple client products from shared infrastructure using Next.js, Node.js, and PostgreSQL.
- Owned end-to-end feature delivery from database schema through API to frontend, including data modeling, Redis caching, and service boundaries.
- Set up CI/CD with Docker and AWS, improving release confidence across the team.
- Introduced structured code review and architectural documentation.`,
        skills: [
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Redis",
          "Docker",
          "AWS",
          "TypeScript",
        ],
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
        },
        employmentType: "Undergraduate",
        icon: <GraduationCapIcon />,
        description:
          "Studying software engineering with a focus on systems, architecture, and full-stack development.",
        skills: ["Software Engineering", "Computer Science"],
      },
    ],
  },
]
