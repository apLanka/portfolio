"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  /** Display string such as "100K+", "$10M+" or "~20%". */
  value: string
  className?: string
}

const PATTERN = /^(\D*)(\d+(?:\.\d+)?)(.*)$/

/**
 * Counts the number inside a formatted string when it scrolls into view.
 * The server renders the final value, so no-JS and crawlers see real data.
 */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const match = PATTERN.exec(value)
  const [shown, setShown] = useState<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !match) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const target = Number(match[2])
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const duration = 1400
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          setShown(Math.round(target * (1 - Math.pow(1 - t, 4))))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        setShown(0)
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  if (!match) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={`tabular ${className ?? ""}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden>
        {match[1]}
        {shown ?? match[2]}
        {match[3]}
      </span>
    </span>
  )
}
