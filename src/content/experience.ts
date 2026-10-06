export interface TimelineEntry {
  id: string
  period: string
  title: string
  org?: string
  kind: "focus" | "work" | "education" | "credential"
  summary: string
  points?: string[]
  tags?: string[]
  verifyUrl?: string
}

export const timeline: TimelineEntry[] = [
  {
    id: "focus",
    period: "Now",
    title: "AI Engineering",
    kind: "focus",
    summary:
      "Moving the systems instincts I built in production — latency, retries, cost, failure modes — into LLM applications, agents and evaluation. Building and writing up the patterns that make AI features dependable.",
    tags: ["LLM apps", "Agents", "RAG", "Evaluation", "LLMOps"],
  },
  {
    id: "metarune",
    period: "Apr 2023 — Present",
    title: "Software Engineer",
    org: "Metarune Labs",
    kind: "work",
    summary:
      "Full-stack and distributed-systems engineer on a real-time platform serving 100K+ users with $10M+ revenue impact.",
    points: [
      "Architected full-stack features for a real-time chat platform and event-driven serverless workflows (AWS Lambda, SQS) built for reliability under load.",
      "Led a frontend team of 7+ engineers: PR standards, code quality and mentoring.",
      "Designed shared-schema multi-tenancy on PostgreSQL serving several client products from one platform.",
      "Shipped LLM-backed features with provider abstraction, caching and cost controls.",
      "Cross-platform mobile with React Native; gameplay and backend work in Unity (C#) and Node.js; testing with Jest, Vitest and Playwright.",
    ],
    tags: ["AWS", "TypeScript", "Node.js", "PostgreSQL", "Redis", "React Native"],
  },
  {
    id: "trainee",
    period: "Feb — Apr 2023",
    title: "Trainee Software Engineer",
    org: "Metarune Labs",
    kind: "work",
    summary:
      "Full-stack work across web, backend and mobile while learning the team's engineering standards.",
  },
  {
    id: "sliit",
    period: "2023 — 2027",
    title: "B.Sc. Software Engineering",
    org: "SLIIT",
    kind: "education",
    summary:
      "Distributed Systems, Software Architecture, Application Frameworks, Data Structures & Algorithms.",
  },
  {
    id: "azure-ai",
    period: "Certified",
    title: "Azure AI Apps and Agents Developer Associate",
    org: "Microsoft",
    kind: "credential",
    summary: "Building AI applications and agents on Azure.",
    verifyUrl: "https://learn.microsoft.com/en-gb/users/aplanka/credentials/8fb730fde6244178",
  },
]
