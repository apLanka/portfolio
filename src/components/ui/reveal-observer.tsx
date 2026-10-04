"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/**
 * One shared IntersectionObserver for every `[data-reveal]` element.
 * Server components just add the attribute; no per-element client wrappers.
 */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]")
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.setAttribute("data-in", ""))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "")
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )
    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
