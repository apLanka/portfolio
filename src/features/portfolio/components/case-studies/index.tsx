import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/base/ui/button"
import { Tag } from "@/components/ui/tag"
import { caseStudies } from "@/config/pasindu/case-studies"
import { cn } from "@/lib/utils"

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"

export function CaseStudies() {
  return (
    <Panel id="case-studies">
      <PanelHeader>
        <PanelTitle>
          Case studies
          <PanelTitleSup>({caseStudies.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {caseStudies.slice(0, 4).map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className={cn(
                "group flex flex-col gap-2 p-2 transition-[background-color] ease-out hover:bg-accent-muted",
                "max-sm:screen-line-top max-sm:screen-line-bottom",
                "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
              )}
            >
              <div className="flex flex-col gap-2 p-2">
                <h3 className="text-lg leading-snug font-medium text-balance">
                  {study.title}
                </h3>
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

      <div className="screen-line-top flex justify-center py-2">
        <Button
          className="gap-2 border-none pr-2.5 pl-3"
          size="sm"
          nativeButton={false}
          render={<Link href="/case-studies" />}
        >
          All case studies
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
