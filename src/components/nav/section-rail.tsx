"use client"

import { useCallback, useEffect, useState } from "react"

import { sections } from "@/content/profile"
import { useTone } from "@/lib/use-tone"

/** Desktop-only index of the home page's sections, tracking scroll position. */
export function SectionRail() {
  const [active, setActive] = useState<string>("")
  const tone = useTone(useCallback(() => window.innerHeight / 2, []))

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <nav
      aria-label="Sections"
      data-chrome
      data-tone={tone === "graphite" ? undefined : tone}
      className="rail mono-label fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 pr-5 text-fg xl:block"
    >
      <ol>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              aria-label={s.label}
            >
              <span className="rail-label tabular">
                {String(i + 1).padStart(2, "0")} {s.label}
              </span>
              <span className="rail-tick" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
