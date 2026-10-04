"use client"

import { useRef, type ReactNode } from "react"

/**
 * Wrapper that renders a pill following the mouse pointer while hovered
 * (fine-pointer devices only; touch and keyboard users are unaffected).
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

  return (
    <div
      ref={ref}
      className={`follow ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty("--x", `${e.clientX - r.left}px`)
        ref.current.style.setProperty("--y", `${e.clientY - r.top}px`)
      }}
    >
      {children}
      <span className="follow-dot" aria-hidden>
        {label}
      </span>
    </div>
  )
}
