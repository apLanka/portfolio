import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/base/ui/button"
import { Markdown } from "@/components/markdown"
import { PageHeading, PageHeadingTitle } from "@/components/page-heading"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/typography"
import { SITE_INFO, X_HANDLE } from "@/config/site"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { readProjectDetailMarkdown } from "@/features/portfolio/lib/project-detail-markdown"

interface PageProps {
  params: Promise<{ slug: string }>
}

function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

export async function generateStaticParams() {
  return PROJECTS.filter((p) => p.slug).map((p) => ({ slug: p.slug! }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  const summary =
    project.description?.replace(/\*\*/g, "").slice(0, 160) ??
    `${project.title} — portfolio project`

  const heroSrc = project.coverImage ?? project.logo
  const ogImageUrl = heroSrc
    ? `${SITE_INFO.url}${heroSrc}`
    : `${SITE_INFO.url}/og/simple?title=${encodeURIComponent(project.title)}&description=${encodeURIComponent(summary)}`

  return {
    title: project.title,
    description: summary,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      url: `/projects/${slug}`,
      type: "article",
      images: [{ url: ogImageUrl, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: X_HANDLE,
      creator: X_HANDLE,
      images: [ogImageUrl],
    },
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const rawMd = readProjectDetailMarkdown(slug)
  const fallbackBody = project.description ?? "_No additional write-up yet._"
  const body = rawMd?.trim() ? rawMd : fallbackBody
  const heroSrc = project.coverImage ?? project.logo

  return (
    <div className="mx-auto min-h-svh w-full md:max-w-3xl">
      <PageHeading>
        <PageHeadingTitle className="text-balance">{project.title}</PageHeadingTitle>
      </PageHeading>

      <div className="px-4 pb-6 pt-4">
        <div className="flex flex-wrap gap-1">
          {project.skills.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      <section className="border-t border-line px-4 py-6">
        <Prose className="text-sm text-muted-foreground">
          <Markdown>{body}</Markdown>
        </Prose>
      </section>

      {heroSrc ? (
        <div className="border-t border-line px-4 py-6">
          <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl ring-1 ring-line">
            <Image
              src={heroSrc}
              alt={project.title}
              width={1920}
              height={1080}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
        </div>
      ) : null}

      <div className="screen-line-top flex justify-center py-6">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/#projects" />}
        >
          Back to projects
        </Button>
      </div>
    </div>
  )
}
