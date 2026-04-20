import type { MetadataRoute } from "next"

import { caseStudies } from "@/config/pasindu/case-studies"
import { SITE_INFO } from "@/config/site"
import { getBlogPosts } from "@/features/doc/data/documents"
import { PROJECTS } from "@/features/portfolio/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${SITE_INFO.url}/case-studies/${study.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const projectRoutes = PROJECTS.filter((p) => p.slug).map((p) => ({
    url: `${SITE_INFO.url}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ["", "/blog", "/case-studies"].map(
    (route) => ({
      url: `${SITE_INFO.url}${route}`,
      lastModified: new Date().toISOString(),
    })
  )

  return [...routes, ...caseStudyRoutes, ...projectRoutes, ...posts]
}
