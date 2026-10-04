import type { MetadataRoute } from "next"

import { projects } from "@/content/projects"
import { profile } from "@/content/profile"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.url, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${profile.url}/work/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ]
}
