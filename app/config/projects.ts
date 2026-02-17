/**
 * Project configuration for the portfolio.
 * Each project is a mini case study: problem, architecture decisions, and outcome.
 * Update these values to showcase your work.
 */

export interface Project {
  name: string;
  description: string;
  problem: string;
  decisions: string[];
  outcome: string;
  url: string;
  year: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: "Project Name",
    description: "A one-liner of what this project does.",
    problem: "Describe the core problem or challenge this project solves.",
    decisions: [
      "Chose X over Y because of Z tradeoff",
      "Designed the data layer as A to handle B",
    ],
    outcome: "What was the measurable result or current state.",
    url: "https://github.com/apLanka/project",
    year: "2025",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  // add more projects here
];
