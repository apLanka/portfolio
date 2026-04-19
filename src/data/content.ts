import { links, mailto } from "@/config/pasindu/links"

export function getMarkdownContent(time: string) {
  return `# Pasindu Lanka
/pəˈsɪnduː ˈlɑːŋkə/ • noun • ${time || "00:00:00"} IST

## About

Software engineer based in Colombo, focused on full-stack delivery and system design — APIs, data modeling, caching, and shipping reliably.

At **Metarune Labs**: Software Engineer (Apr 2023 – present), previously Trainee Software Engineer (Feb – Apr 2023). Undergraduate at **SLIIT**, B.Sc. (Hons) in Software Engineering, expected **2027**.

## Experience

### Metarune Labs
**Software Engineer** — 04.2023 – Present  
**Trainee Software Engineer** — 02.2023 – 04.2023

### SLIIT
**BSc (Hons) in Software Engineering** — 2023 – 2027 (expected)

## Tech stack

Next.js, TypeScript, Node.js, PostgreSQL, Redis, Docker, AWS, Tailwind CSS

## Get in touch

[LinkedIn](${links.linkedin}) · [Email](${mailto})

**Links:** [GitHub](${links.github}) · [X](${links.x}) · [Medium](${links.medium})
`
}
