export interface Post {
  title: string
  description: string
  url: string
  date: string
}

export const posts: Post[] = [
  {
    title: "Three Signs Your Application Needs Caching (and Two Signs It Doesn't)",
    description:
      "When caching helps reliability and performance — and when it hides problems or adds complexity.",
    url: "https://medium.com/@pasindulanka/three-signs-your-application-needs-caching-and-two-signs-it-doesnt-8552e5609ae8",
    date: "2025-03",
  },
  {
    title: "Caching Everything: Why More Cache Doesn't Mean Better Performance",
    description:
      "Diminishing returns, stale data and operational cost when you cache without a strategy.",
    url: "https://medium.com/@pasindulanka/caching-everything-why-more-cache-doesnt-mean-better-performance-ce29b43d1f1a",
    date: "2025-02",
  },
  {
    title: "How Caching Changes Your Debugging Experience",
    description:
      "Why intermittent bugs and confusing traces often come down to what is cached, and where.",
    url: "https://medium.com/@pasindulanka/how-caching-changes-your-debugging-experience-f01b872707c8",
    date: "2025-01",
  },
  {
    title: "REST vs GraphQL vs gRPC: What Actually Works in Production",
    description:
      "Choosing an API style for real teams: contracts, tooling, latency and operational reality.",
    url: "https://medium.com/@pasindulanka/rest-vs-graphql-vs-grpc-what-actually-works-in-production-8b87eff3f5b4",
    date: "2024-11",
  },
]

export const experiments = [
  {
    title: "ShiftGain",
    body: "Image and PDF tooling that runs entirely in the browser — WASM, Web Workers, zero uploads.",
    stack: "Next.js · WASM · pdf-lib",
  },
  {
    title: "Blooso",
    body: "Booking platform for beauty and wellness businesses in a Turborepo monorepo.",
    stack: "NestJS · Prisma · Stripe",
  },
  {
    title: "SustainSite",
    body: "Construction project lifecycle, sustainability metrics and compliance documents.",
    stack: "Express · MongoDB · React",
  },
] as const
