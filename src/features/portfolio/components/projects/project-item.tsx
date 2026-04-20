import { BoxIcon, InfinityIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  Collapsible,
  CollapsibleChevronsIcon,
} from "@/components/base/collapsible-animated"
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { Markdown } from "@/components/markdown"
import { Tag } from "@/components/ui/tag"
import { Prose } from "@/components/ui/typography"
import { UTM_PARAMS } from "@/config/site"
import { addQueryParams } from "@/utils/url"

import type { Project } from "../../types/projects"

function PeriodLine({
  start,
  end,
  isSinglePeriod,
}: {
  start: string
  end?: string
  isSinglePeriod: boolean
}) {
  const isOngoing = !end
  return (
    <dl className="text-sm text-muted-foreground">
      <dt className="sr-only">Period</dt>
      <dd className="flex items-center gap-0.5">
        <span>{start}</span>
        {!isSinglePeriod && (
          <>
            <span className="font-mono">—</span>
            {isOngoing ? (
              <InfinityIcon
                className="size-4.5 translate-y-[0.5px]"
                aria-label="Present"
              />
            ) : (
              <span>{end}</span>
            )}
          </>
        )}
      </dd>
    </dl>
  )
}

export function ProjectItem({
  className,
  project,
}: {
  className?: string
  project: Project
}) {
  const { start, end } = project.period
  const isSinglePeriod = end === start
  const hasSlug = Boolean(project.slug)

  const logoClassName =
    "mx-4 flex size-6 shrink-0 select-none rounded-lg object-cover"

  const placeholderIcon = (
    <div className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
      <BoxIcon className="size-4" />
    </div>
  )

  const logoBlock = project.logo ? (
    hasSlug ? (
      <Link
        href={`/projects/${project.slug}`}
        className="mx-4 shrink-0 self-center"
        aria-label={`Open ${project.title} details`}
      >
        <Image
          src={project.logo}
          alt=""
          width={32}
          height={32}
          quality={100}
          className={logoClassName}
          unoptimized
          aria-hidden
        />
      </Link>
    ) : (
      <Image
        src={project.logo}
        alt={project.title}
        width={32}
        height={32}
        quality={100}
        className={logoClassName}
        unoptimized
        aria-hidden
      />
    )
  ) : hasSlug ? (
    <Link
      href={`/projects/${project.slug}`}
      className="mx-4 shrink-0 self-center"
      aria-label={`Open ${project.title} details`}
    >
      {placeholderIcon}
    </Link>
  ) : (
    <div className="mx-4 shrink-0 self-center">{placeholderIcon}</div>
  )

  const externalLink =
    project.link ? (
      <Tooltip>
        <TooltipTrigger
          render={
            <a
              className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
              href={addQueryParams(project.link, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
              aria-label="Open project link"
            >
              <LinkIcon className="pointer-events-none size-4" />
            </a>
          }
        />
        <TooltipContent>
          <p>Open project link</p>
        </TooltipContent>
      </Tooltip>
    ) : null

  const titleBlock = (
    <>
      <h3 className="mb-1 leading-snug font-medium text-balance">
        {project.title}
      </h3>
      <PeriodLine
        start={start}
        end={end}
        isSinglePeriod={isSinglePeriod}
      />
    </>
  )

  return (
    <Collapsible className={className} defaultOpen={project.isExpanded}>
      <div className="flex items-center hover:bg-accent-muted">
        {logoBlock}

        <div className="min-w-0 flex-1 border-l border-dashed border-line">
          {hasSlug ? (
            <div className="flex w-full items-stretch">
              <Link
                href={`/projects/${project.slug}`}
                className="flex min-w-0 flex-1 flex-col justify-center p-4 pr-2 text-left transition-colors hover:bg-accent-muted/60"
              >
                {titleBlock}
              </Link>
              <div className="flex shrink-0 items-center gap-0 pr-2">
                {externalLink}
                <CollapsibleTrigger className="flex shrink-0 items-center justify-center p-2 text-muted-foreground hover:text-foreground [&_svg]:size-4">
                  <CollapsibleChevronsIcon duration={0.15} />
                </CollapsibleTrigger>
              </div>
            </div>
          ) : (
            <CollapsibleTrigger className="flex w-full items-center gap-2 p-4 pr-2 text-left">
              <div className="min-w-0 flex-1">{titleBlock}</div>
              {externalLink}
              <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
                <CollapsibleChevronsIcon duration={0.15} />
              </div>
            </CollapsibleTrigger>
          )}
        </div>
      </div>

      <CollapsibleContent className="overflow-hidden">
        <div className="space-y-4 border-t border-line p-4">
          {project.description && (
            <Prose>
              <Markdown>{project.description}</Markdown>
            </Prose>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
