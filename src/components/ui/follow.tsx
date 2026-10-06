"use client"

import { useEffect, useRef, type ReactNode } from "react"

/**
 * Wrapper that renders a pill following the mouse pointer while hovered
 * (fine-pointer devices only; touch and keyboard users are unaffected).
 * Position is eased in a rAF loop; CSS only handles the scale in/out.
 */
export function Follow({
  children,
  label,
  className = "",
}: {
  children: ReactNode
  label: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLSpanElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef(0)
  const snap = useRef(true)

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  const step = () => {
    const el = dot.current
    if (!el) return
    const t = target.current
    const p = pos.current
    if (snap.current) {
      p.x = t.x
      p.y = t.y
      snap.current = false
    } else {
      p.x += (t.x - p.x) * 0.2
      p.y += (t.y - p.y) * 0.2
    }
    el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`
    raf.current =
      Math.abs(t.x - p.x) + Math.abs(t.y - p.y) > 0.1 ? requestAnimationFrame(step) : 0
  }

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    target.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    if (!raf.current) raf.current = requestAnimationFrame(step)
  }

  return (
    <div
      ref={ref}
      className={`follow ${className}`}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") snap.current = true
      }}
      onPointerMove={move}
    >
      {children}
      <span ref={dot} className="follow-dot" aria-hidden>
        {label}
      </span>
    </div>
  )
}
