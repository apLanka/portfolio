import { links, mailto } from "@/config/pasindu/links"

export function getMarkdownContent(time: string) {
  return `# Pasindu Lanka
/pəˈsɪnduː ˈlɑːŋkə/ • noun • ${time || "00:00:00"} IST

## About

Software engineer with **3+ years** designing and scaling **distributed systems** for real-time applications at **100K+** user scale and **$10M+** revenue impact. Focused on **event-driven** architectures, **serverless** systems, and **real-time communication** on **AWS** and modern full-stack stacks — leading teams, driving architecture, and shipping under production constraints. Based in **Colombo**.

At **Metarune Labs**: **Software Engineer** (Apr 2023 – present); **Trainee Software Engineer** (Feb – Apr 2023). **SLIIT** — **B.Sc. in Software Engineering**, expected **2027**.

## Experience

### Metarune Labs
**Software Engineer** — 04.2023 – Present  
**Trainee Software Engineer** — 02.2023 – 04.2023

Real-time chat platform at scale; AWS Lambda & SQS; frontend team leadership (7+); React Native; Unity (C#) & Node.js; Jest, Vitest, Playwright.

### SLIIT
**B.Sc. in Software Engineering** — 2023 – 2027 (expected)

## Tech stack

Languages: JavaScript, TypeScript, Python, Java, C# · Frontend: React, Next.js, React Native, Tailwind CSS · Backend: Node.js, Express, NestJS, Spring Boot, .NET · Databases: PostgreSQL, MySQL, MongoDB, Redis, Pinecone · Cloud: AWS (Lambda, SQS, S3), Docker, Kubernetes, Nginx, GitHub Actions · Testing: Jest, Vitest, Prometheus, Grafana, Playwright · AI: LangChain, LangGraph, LangSmith, RAG

## Get in touch

[LinkedIn](${links.linkedin}) · [Email](${mailto})

**Links:** [GitHub](${links.github}) · [X](${links.x}) · [Medium](${links.medium})
`
}
