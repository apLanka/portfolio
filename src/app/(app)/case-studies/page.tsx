import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/base/ui/button"
import {
  PageHeading,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { Tag } from "@/components/ui/tag"
import { caseStudies } from "@/config/pasindu/case-studies"
import { cn } from "@/lib/utils"

const title = "Case studies"
const description =
  "Architecture notes — context, constraints, alternatives, and lessons learned."

const ogImage = `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    url: "/case-studies",
    type: "website",
    images: {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: title,
    },
  },
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-svh">
      <PageHeading>
        <PageHeadingTagline>Architecture</PageHeadingTagline>
        <PageHeadingTitle>{title}</PageHeadingTitle>
      </PageHeading>

      <div className="relative pt-4">
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className={cn(
                "block transition-[background-color] ease-out hover:bg-accent-muted",
                "max-sm:screen-line-top max-sm:screen-line-bottom",
                "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
              )}
            >
              <div className="flex flex-col gap-3 p-4">
                <h2 className="text-lg leading-snug font-medium text-balance">
                  {study.title}
                </h2>
                <p className="text-sm text-pretty text-muted-foreground">
                  {study.summary}
                </p>
                <div className="flex flex-wrap gap-1">
                  {study.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="screen-line-top flex justify-center py-6">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/#case-studies" />}
        >
          Back to home
        </Button>
      </div>
    </div>
  )
}
