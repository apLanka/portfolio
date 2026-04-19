/**
 * External blog posts (e.g. Medium). Shown on /blog; /blog/[slug] redirects to `url`.
 * `image` — cover art from Medium’s CDN (same as in the RSS/HTML). Update if you change the hero image on Medium.
 */
export const EXTERNAL_BLOG_POSTS = [
  {
    slug: "three-signs-your-application-needs-caching-and-two-signs-it-doesnt",
    title:
      "Three Signs Your Application Needs Caching (and Two Signs It Doesn't)",
    description:
      "When caching helps reliability and performance — and when it hides problems or adds complexity.",
    url: "https://medium.com/@pasindulanka/three-signs-your-application-needs-caching-and-two-signs-it-doesnt-8552e5609ae8",
    image:
      "https://cdn-images-1.medium.com/max/1200/1*Bl1UberM6vdHzmvHAqkEBA.png",
    createdAt: "2025-03-01",
    updatedAt: "2025-03-01",
  },
  {
    slug: "caching-everything-why-more-cache-doesnt-mean-better-performance",
    title: "Caching Everything: Why More Cache Doesn't Mean Better Performance",
    description:
      "Diminishing returns, stale data, and operational cost when you cache without a strategy.",
    url: "https://medium.com/@pasindulanka/caching-everything-why-more-cache-doesnt-mean-better-performance-ce29b43d1f1a",
    image:
      "https://cdn-images-1.medium.com/max/1200/1*bZ7rSNlcUr4Q0VeegDDCCA.png",
    createdAt: "2025-02-01",
    updatedAt: "2025-02-01",
  },
  {
    slug: "how-caching-changes-your-debugging-experience",
    title: "How Caching Changes Your Debugging Experience",
    description:
      "Why intermittent bugs and confusing traces often trace back to what’s cached and where.",
    url: "https://medium.com/@pasindulanka/how-caching-changes-your-debugging-experience-f01b872707c8",
    image:
      "https://cdn-images-1.medium.com/max/1200/1*-Fgl47VzXo_ZpWw7acBP2A.png",
    createdAt: "2025-01-15",
    updatedAt: "2025-01-15",
  },
  {
    slug: "rest-vs-graphql-vs-grpc-what-actually-works-in-production",
    title: "REST vs GraphQL vs gRPC: What Actually Works in Production",
    description:
      "Choosing an API style for real teams: contracts, tooling, latency, and operational reality.",
    url: "https://medium.com/@pasindulanka/rest-vs-graphql-vs-grpc-what-actually-works-in-production-8b87eff3f5b4",
    image:
      "https://cdn-images-1.medium.com/max/1200/1*CYqFligV6LRULGhZrxBQQg.png",
    createdAt: "2024-11-01",
    updatedAt: "2024-11-01",
  },
] as const
