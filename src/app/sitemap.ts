import type { MetadataRoute } from "next"

import { caseStudies } from "@/config/pasindu/case-studies"
import { SITE_INFO } from "@/config/site"
import { getAllDocs, getDocsByCategory } from "@/features/doc/data/documents"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllDocs().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const components = getDocsByCategory("components").map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${SITE_INFO.url}/case-studies/${study.slug}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ["", "/blog", "/components", "/case-studies"].map(
    (route) => ({
      url: `${SITE_INFO.url}${route}`,
      lastModified: new Date().toISOString(),
    })
  )

  return [...routes, ...caseStudyRoutes, ...posts, ...components]
}
