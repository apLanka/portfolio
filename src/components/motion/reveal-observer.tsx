"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const SELECTOR = "[data-reveal], [data-lines], [data-draw], .flow"

/**
 * One IntersectionObserver for every enter-animation on the page.
 * Elements opt in with data-reveal / data-lines / data-draw (or .flow);
 * CSS does the rest once `data-in` is set.
 */
export function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(SELECTOR)
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "")
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
