export interface Stage {
  name: string
  note: string
}

export interface Decision {
  title: string
  body: string
  rejected?: string
}

export interface Project {
  slug: string
  title: string
  kicker: string
  year: string
  role: string
  context: string
  problem: string
  built: string
  pipeline: Stage[]
  decisions: Decision[]
  impact: { value?: string; text: string }[]
  stack: string[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: "llm-without-lock-in",
    title: "An LLM layer that never owns the architecture",
    kicker: "LLM applications",
    year: "In production",
    role: "Design & implementation",
    context: "Metarune Labs · multi-tenant platform",
    problem:
      "Product wanted AI summarisation. Engineering's question was how to ship it without making a slow, non-deterministic, swappable third-party API a load-bearing dependency of every request.",
    built:
      "A single LLM service interface that feature code calls, with provider adapters behind it, hard timeouts with deterministic fallbacks, output validation before anything reaches a user, and prompts stored as versioned config.",
    pipeline: [
      { name: "Feature code", note: "calls one interface" },
      { name: "LLM service", note: "timeout · retries" },
      { name: "Provider adapter", note: "OpenAI / Anthropic" },
      { name: "Validator", note: "length · format · rules" },
      { name: "Fallback", note: "truncated source text" },
    ],
    decisions: [
      {
        title: "Timeouts are a product feature",
        body: "If the model has not answered in 3 seconds, the request returns a deterministic fallback instead of blocking. Users take a slightly worse result over an unbounded spinner.",
        rejected:
          "Calling the model inline: 2–5 seconds added to every request and no behaviour when the provider is slow or down.",
      },
      {
        title: "Validate before you surface",
        body: "Model output is treated as untrusted input. Length, format and content rules run before anything is shown, and failures route to the same fallback path.",
      },
      {
        title: "Prompts are versioned config, not code",
        body: "Prompts live in versioned files so they can iterate without a deploy, and a regression can be traced to a prompt version and rolled back.",
        rejected:
          "Fine-tuning our own model: operational cost and complexity that a well-prompted general model did not justify.",
      },
    ],
    impact: [
      {
        text: "Switching provider for cost reasons meant changing one implementation, not dozens of call sites.",
      },
      { text: "No request path blocks on the model for more than 3 seconds." },
    ],
    stack: ["TypeScript", "Node.js", "Redis", "OpenAI", "Anthropic"],
    links: [],
  },
  {
    slug: "ai-cost-control",
    title: "Token budgets and caching for AI-backed features",
    kicker: "LLMOps · cost",
    year: "In production",
    role: "Design & implementation",
    context: "Metarune Labs · multi-tenant platform",
    problem:
      "After the first LLM feature shipped, API spend spiked. Some tenants were heavy users, most barely touched it, and identical requests kept hitting the provider. There was no visibility into who was spending what.",
    built:
      "Per-tenant cost tracking first, then Redis response caching, per-tenant monthly token budgets with graceful degradation, and routing of simple tasks to smaller, cheaper models.",
    pipeline: [
      { name: "Request", note: "tenant-scoped" },
      { name: "Cache lookup", note: "normalised-input hash" },
      { name: "Budget check", note: "tenant token budget" },
      { name: "Model router", note: "task complexity" },
      { name: "Usage ledger", note: "cost per tenant" },
    ],
    decisions: [
      {
        title: "Measure before optimising",
        body: "Cost-per-tenant tracking went in before any optimisation. Only then did it become visible that a large share of traffic was cacheable duplicates.",
        rejected:
          "Hard per-user rate limits: they frustrate power users and ignore the real cause, duplicate requests.",
      },
      {
        title: "Budgets as a product surface",
        body: "When a tenant exhausts its budget, it receives cached or fallback responses and a notification, not a surprise bill or a hard failure. Visible usage makes tenants self-regulate.",
      },
      {
        title: "Exact-match hashing now, embeddings later",
        body: "Normalised-input hashing captured most of the win. True embedding-based semantic similarity adds complexity that was not yet earned, so it stays on the roadmap.",
        rejected:
          "Self-hosting a smaller open model: GPU cost and quality trade-offs outweighed managed APIs at this scale.",
      },
    ],
    impact: [
      {
        value: "~20%",
        text: "of requests turned out to be cacheable duplicates once cost was measured per tenant.",
      },
      { text: "Predictable spend per tenant, with no hard failures at the limit." },
    ],
    stack: ["Node.js", "TypeScript", "Redis", "PostgreSQL"],
    links: [],
  },
  {
    slug: "human-in-the-loop-review",
    title: "A human-in-the-loop review pipeline for AI drafts",
    kicker: "Agentic workflow",
    year: "In production",
    role: "Design & implementation",
    context: "Metarune Labs · multi-tenant platform",
    problem:
      "AI-generated drafts were not accurate enough to ship directly, and one bad output in front of a client would damage trust. Reviewing everything by hand, though, would create a permanent backlog.",
    built:
      "A queue-backed pipeline where every generated item carries a confidence score. High-confidence items auto-approve against a per-tenant threshold; the rest enter a review dashboard, and every human edit is captured as an (original, edited) pair.",
    pipeline: [
      { name: "Generate", note: "draft + confidence" },
      { name: "Queue", note: "PostgreSQL-backed" },
      { name: "Threshold", note: "per-tenant, e.g. ≥ 0.9" },
      { name: "Review UI", note: "approve · edit · reject" },
      { name: "Feedback store", note: "original ↔ edit pairs" },
    ],
    decisions: [
      {
        title: "Confidence thresholds are a product decision",
        body: "Each tenant tunes its own auto-approval threshold to its risk tolerance. Stricter and looser tenants run on the same pipeline with no code changes.",
        rejected:
          "Fully automated or fully manual. The first risks trust; the second creates a backlog for outputs that were mostly fine.",
      },
      {
        title: "Capture feedback before you know how you'll use it",
        body: "Every edit stores the delta between model output and human correction. These pairs became the most useful input for prompt iteration.",
      },
      {
        title: "Invest in the reviewer's tool",
        body: "A slow review UI makes reviewers avoid the queue. The dashboard was built to be fast and clear because the human step is the bottleneck.",
      },
    ],
    impact: [
      {
        text: "Review effort is spent only on the edge cases, not on every generated item.",
      },
      { text: "A growing corpus of corrections that feeds prompt improvements." },
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL"],
    links: [],
  },
  {
    slug: "wallflox",
    title: "Wallflox — orchestrated AI image generation",
    kicker: "Generative AI · product",
    year: "2025",
    role: "Solo build, end to end",
    context: "Independent project",
    problem:
      "Single-model image generators put the burden of prompt-craft on the user. The goal was a product where a rough idea becomes a finished wallpaper without the user needing to know the prompt dialect.",
    built:
      "A wallpaper generation platform that orchestrates Google Gemini and Leonardo Phoenix in one flow, with a Convex real-time backend, Clerk auth and Cloudflare R2 storage, delivered through a Next.js 16 front end.",
    pipeline: [
      { name: "Idea", note: "user input" },
      { name: "Gemini", note: "prompt shaping" },
      { name: "Leonardo Phoenix", note: "image generation" },
      { name: "Cloudflare R2", note: "asset storage" },
      { name: "Convex", note: "real-time state" },
    ],
    decisions: [
      {
        title: "Compose models by strength",
        body: "Two models are chained so each does what it is best at — language on the way in, image synthesis on the way out — rather than asking one model to do both.",
      },
      {
        title: "Real-time state over polling",
        body: "Generation is slow and asynchronous. Convex pushes progress and results to the client, so the UI reflects the job's actual state without bespoke polling code.",
      },
      {
        title: "Keep binaries out of the database",
        body: "Generated images live in R2 object storage; the application database holds metadata and references only.",
      },
    ],
    impact: [{ text: "Live, publicly accessible product." }],
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Gemini",
      "Leonardo AI",
      "Cloudflare R2",
    ],
    links: [{ label: "Live demo", href: "https://wallflox-2opr.vercel.app/" }],
  },
  {
    slug: "realtime-platform",
    title: "The real-time platform underneath it all",
    kicker: "Distributed systems",
    year: "2023 — now",
    role: "Software Engineer · frontend team lead",
    context: "Metarune Labs",
    problem:
      "A real-time chat platform serving 100K+ users had to stay reliable under bursty load, while one small team onboarded multiple client products onto the same codebase.",
    built:
      "Full-stack features for the chat platform, event-driven serverless workflows on AWS Lambda and SQS, and shared-schema multi-tenancy on PostgreSQL — with the frontend team (7+ engineers) held to consistent review and testing standards.",
    pipeline: [
      { name: "Client", note: "web · React Native" },
      { name: "API layer", note: "tenant context injected" },
      { name: "SQS", note: "buffering under load" },
      { name: "Lambda", note: "event-driven workers" },
      { name: "PostgreSQL + Redis", note: "tenant_id scoped" },
    ],
    decisions: [
      {
        title: "Row-level tenancy over schema-per-tenant",
        body: "A tenant_id on every tenant-owned row, enforced by middleware from the authenticated session. Simple to reason about, with a central tenants table for flags, limits and branding.",
        rejected:
          "Schema- or database-per-tenant: N migrations for N tenants and operational overhead the team could not afford yet.",
      },
      {
        title: "Queues absorb the spikes",
        body: "Work that does not need to complete in the request path moves through SQS to Lambda workers, so load spikes degrade latency gracefully instead of failing outright.",
      },
      {
        title: "Cache only what you can invalidate",
        body: "A small set of entities are cached in Redis with tenant-prefixed keys and invalidate-on-write. Live data is never cached.",
      },
    ],
    impact: [
      { value: "100K+", text: "users served." },
      { value: "$10M+", text: "revenue impact." },
      { value: "7+", text: "engineers led on the frontend." },
    ],
    stack: [
      "AWS Lambda",
      "SQS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "React Native",
      "Playwright",
    ],
    links: [],
  },
  {
    slug: "reliable-queue",
    title: "Reliable Queue — open-source task execution",
    kicker: "Open source · infrastructure",
    year: "2025",
    role: "Author & maintainer",
    context: "@aplanka/reliable-queue · MIT",
    problem:
      "Agentic and LLM workloads are made of flaky, rate-limited async calls. Teams keep hand-rolling retry and concurrency logic around them, and getting it subtly wrong.",
    built:
      "A zero-dependency task queue for JavaScript and TypeScript with retries, concurrency limits, priorities, persistence, an event stream and React hooks.",
    pipeline: [
      { name: "Enqueue", note: "priority · metadata" },
      { name: "Scheduler", note: "concurrency limit" },
      { name: "Worker", note: "retry · backoff" },
      { name: "Persistence", note: "survives reloads" },
      { name: "Events", note: "React hooks" },
    ],
    decisions: [
      {
        title: "Zero dependencies",
        body: "A reliability primitive should not drag a dependency tree behind it. Small surface, easy to audit, safe to embed.",
      },
      {
        title: "Events as the observability seam",
        body: "Every state transition emits an event, so logging, tracing and UI progress are layered on from the outside instead of baked in.",
      },
    ],
    impact: [{ text: "Published to npm under an MIT licence, with a public demo." }],
    stack: ["TypeScript", "React", "npm", "Browser APIs"],
    links: [{ label: "Live demo", href: "https://reliable-queue-web.vercel.app/" }],
  },
]

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug)

export const featured = projects
