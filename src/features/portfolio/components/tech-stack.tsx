"use client"

import StackIcon, { type IconName } from "tech-stack-icons"
import { useTheme } from "next-themes"

import { TECH_STACK_SECTIONS } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

function TechStackIcon({
  name,
  variant,
}: {
  name: IconName
  variant: "light" | "dark"
}) {
  return (
    <span className="inline-flex grayscale contrast-[1.03] transition-[filter] duration-300 ease-out group-hover:grayscale-0 group-hover:contrast-100 [&>span]:flex [&>span]:size-9 [&>span]:items-center [&>span]:justify-center [&>span]:max-h-9 [&>span]:max-w-9 [&_svg]:size-full">
      <StackIcon name={name} variant={variant} />
    </span>
  )
}

export function TechStack() {
  const { resolvedTheme } = useTheme()
  const variant = resolvedTheme === "dark" ? "dark" : "light"

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-8">
        {TECH_STACK_SECTIONS.map((section) => (
          <div key={section.id}>
            <h3 className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {section.heading}
            </h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-5">
              {section.items.map((tech) => (
                <li key={tech.href}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-18 flex-col items-center gap-2 text-center select-none"
                    aria-label={tech.title}
                  >
                    <span className="flex min-h-9 items-center justify-center">
                      <TechStackIcon name={tech.icon} variant={variant} />
                    </span>
                    <span className="line-clamp-2 text-[0.6875rem] leading-tight text-muted-foreground group-hover:text-foreground">
                      {tech.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </PanelContent>
    </Panel>
  )
}
