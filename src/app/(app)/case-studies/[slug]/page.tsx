import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/base/ui/button"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/typography"
import { caseStudies } from "@/config/pasindu/case-studies"
import { X_HANDLE } from "@/config/site"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) return {}

  const ogImage = `/og/simple?title=${encodeURIComponent(study.title)}&description=${encodeURIComponent(study.summary)}`

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      url: `/case-studies/${slug}`,
      type: "article",
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: study.title,
      },
    },
    twitter: {
      card: "summary_large_image",
      site: X_HANDLE,
      creator: X_HANDLE,
      images: [ogImage],
    },
  }
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const study = caseStudies.find((s) => s.slug === slug)
  if (!study) notFound()

  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Case study</PageHeadingTagline>
        <PageHeadingTitle className="text-balance">{study.title}</PageHeadingTitle>
      </PageHeading>

      <div className="px-4 pb-6">
        <Prose className="text-muted-foreground">
          <p>{study.summary}</p>
        </Prose>

        <div className="mt-4 flex flex-wrap gap-1">
          {study.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          <section className="border-b border-line p-4 sm:border-r sm:border-b-0">
            <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Context
            </h2>
            <Prose className="mt-2 text-sm text-muted-foreground">
              <p>{study.context}</p>
            </Prose>
          </section>

          <section className="p-4">
            <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Constraints
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {study.constraints.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="border-t border-line px-4 py-6">
        <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Architecture
        </h2>
        <Prose className="mt-2 text-sm text-muted-foreground">
          <p>{study.architecture}</p>
        </Prose>
        {study.diagram ? (
          <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl ring-1 ring-line">
            <Image
              src={study.diagram}
              alt={`Architecture diagram for ${study.title}`}
              fill
              className="object-contain bg-muted/30"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        ) : null}
      </section>

      <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
        <section className="border-b border-line p-4 sm:border-r sm:border-b-0">
          <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Alternatives considered
          </h2>
          <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
            {study.alternatives.map((alt) => (
              <li key={alt.name}>
                <span className="font-medium text-foreground">{alt.name}</span>
                {": "}
                {alt.rejected}
              </li>
            ))}
          </ul>
        </section>

        <section className="p-4">
          <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Lessons learned
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {study.lessons.map((lesson) => (
              <li key={lesson}>{lesson}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="screen-line-top flex justify-center py-6">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/case-studies" />}
        >
          All case studies
        </Button>
      </div>
    </div>
  )
}
