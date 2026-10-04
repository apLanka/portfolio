"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export type Tone = "graphite" | "bone" | "hi"

/**
 * Reports which surface ([data-tone] section) is currently under a point
 * on the screen, so fixed chrome (header, rail) can switch to a matching
 * palette. `y` is resolved on every update, so it can depend on viewport size.
 */
export function useTone(y: () => number): Tone {
  const [tone, setTone] = useState<Tone>("graphite")
  const pathname = usePathname()

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const point = y()
      let found: Tone = "graphite"
      document
        .querySelectorAll<HTMLElement>("[data-tone]:not([data-chrome])")
        .forEach((el) => {
          const r = el.getBoundingClientRect()
          if (r.top <= point && r.bottom > point) {
            found = el.dataset.tone as Tone
          }
        })
      setTone(found)
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [y, pathname])

  return tone
}
