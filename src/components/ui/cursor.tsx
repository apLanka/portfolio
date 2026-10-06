"use client"

import { useEffect, useRef } from "react"

type Mode = "dot" | "ring" | "label" | "hidden"

/** Resolves what the pointer is over into a cursor mode and optional label. */
function resolve(el: Element | null): { mode: Mode; label: string } {
  if (!el) return { mode: "dot", label: "" }
  if (el.closest(".follow")) return { mode: "hidden", label: "" } // work sheets draw their own pill
  const tagged = el.closest<HTMLElement>("[data-cursor]")
  if (tagged?.dataset.cursor) return { mode: "label", label: tagged.dataset.cursor }
  const a = el.closest<HTMLAnchorElement>("a[href]")
  if (a) {
    const href = a.getAttribute("href") ?? ""
    if (href.startsWith("mailto:")) return { mode: "label", label: "Mail" }
    if (href === "#top") return { mode: "label", label: "Top" }
    if (a.closest(".menu-link")) return { mode: "label", label: "Go" }
    if (a.closest(".post")) return { mode: "label", label: "Read" }
    if (a.target === "_blank") return { mode: "label", label: "Open" }
    return { mode: "ring", label: "" }
  }
  if (el.closest("button, [role=button], summary")) return { mode: "ring", label: "" }
  return { mode: "dot", label: "" }
}

export function Cursor() {
  const root = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = root.current
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const target = { x: -100, y: -100 }
    const pos = { x: -100, y: -100 }
    let raf = 0
    let seen = false

    const frame = () => {
      const k = reduced ? 1 : 0.25
      pos.x += (target.x - pos.x) * k
      pos.y += (target.y - pos.y) * k
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      raf = Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.1 ? requestAnimationFrame(frame) : 0
    }

    const set = (mode: Mode, text: string) => {
      el.dataset.mode = mode
      if (label.current && label.current.textContent !== text) label.current.textContent = text
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return
      target.x = e.clientX
      target.y = e.clientY
      if (!seen) {
        seen = true
        pos.x = target.x
        pos.y = target.y
        el.dataset.shown = ""
      }
      if (!raf) raf = requestAnimationFrame(frame)
    }
    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return
      const r = resolve(e.target as Element)
      set(r.mode, r.label)
    }
    const onDown = () => (el.dataset.down = "")
    const onUp = () => delete el.dataset.down
    const onLeave = () => delete el.dataset.shown
    const onEnter = () => seen && (el.dataset.shown = "")

    document.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerover", onOver, { passive: true })
    document.addEventListener("pointerdown", onDown)
    document.addEventListener("pointerup", onUp)
    document.documentElement.addEventListener("pointerleave", onLeave)
    document.documentElement.addEventListener("pointerenter", onEnter)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerover", onOver)
      document.removeEventListener("pointerdown", onDown)
      document.removeEventListener("pointerup", onUp)
      document.documentElement.removeEventListener("pointerleave", onLeave)
      document.documentElement.removeEventListener("pointerenter", onEnter)
    }
  }, [])

  return (
    <div ref={root} className="cursor" data-mode="dot" aria-hidden>
      <span className="cursor-body">
        <span ref={label} className="cursor-label" />
      </span>
    </div>
  )
}
