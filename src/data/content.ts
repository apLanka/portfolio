import { links, mailto } from "@/config/pasindu/links"

export function getMarkdownContent(time: string) {
  return `# Pasindu Lanka
/pəˈsɪnduː ˈlɑːŋkə/ • noun • ${time || "00:00:00"} IST

## About

Software engineer focused on system design and architecture. I build full-stack platforms and care about data modeling, service boundaries, caching strategy, and deployment pipelines.

Currently engineering at **MetaruneLabs** and studying Software Engineering at **SLIIT**.

## Experience

### MetaruneLabs
**Full-Stack Software Engineer** — 2023 – Present

### SLIIT
**BSc (Hons) in Software Engineering**

## Tech stack

Next.js, TypeScript, Node.js, PostgreSQL, Redis, Docker, AWS, Tailwind CSS

## Get in touch

[LinkedIn](${links.linkedin}) · [Email](${mailto})

**Links:** [GitHub](${links.github}) · [X](${links.x}) · [Medium](${links.medium})
`
}
