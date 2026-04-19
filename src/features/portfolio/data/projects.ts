import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    period: {
      start: "04.2025",
    },
    link: "https://github.com/apLanka/portfolio",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Design systems",
    ],
    description:
      "Personal site and resume — structured as architecture case studies, projects, and an agent-readable profile.",
    isExpanded: true,
  },
]
