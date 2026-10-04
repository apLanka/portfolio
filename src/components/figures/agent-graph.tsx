"use client"

import { useEffect, useRef, useState } from "react"

interface NodeDef {
  x: number
  y: number
  label: string
}
interface Layout {
  w: number
  h: number
  nodeW: number
  nodes: Record<string, NodeDef>
  edges: Record<string, { d: string; from: string; to: string }>
  notes: { x: number; y: number; text: string; anchor?: "start" | "middle" }[]
}

/**
 * A bounded agent loop: plan → tool → validate, with a capped retry loop
 * and a human-review branch when confidence is low. The two layouts share
 * topology; the tall one exists so mobile gets readable type, not a
 * shrunken desktop figure.
 */
const WIDE: Layout = {
  w: 640,
  h: 250,
  nodeW: 88,
  nodes: {
    input: { x: 56, y: 110, label: "INPUT" },
    plan: { x: 186, y: 110, label: "PLAN" },
    tools: { x: 316, y: 110, label: "TOOLS" },
    validate: { x: 446, y: 110, label: "VALIDATE" },
    output: { x: 576, y: 110, label: "OUTPUT" },
    review: { x: 446, y: 214, label: "REVIEW" },
  },
  edges: {
    e1: { d: "M100 110H142", from: "input", to: "plan" },
    e2: { d: "M230 110H272", from: "plan", to: "tools" },
    e3: { d: "M360 110H402", from: "tools", to: "validate" },
    e4: { d: "M490 110H532", from: "validate", to: "output" },
    e5: { d: "M446 94V52Q446 44 438 44H194Q186 44 186 52V94", from: "validate", to: "plan" },
    e6: { d: "M446 126V198", from: "validate", to: "review" },
    e7: { d: "M490 214H576V126", from: "review", to: "output" },
  },
  notes: [
    { x: 316, y: 32, text: "RETRY · MAX 3", anchor: "middle" },
    { x: 456, y: 164, text: "CONFIDENCE < 0.9" },
    { x: 533, y: 206, text: "APPROVE", anchor: "middle" },
  ],
}

const TALL: Layout = {
  w: 340,
  h: 380,
  nodeW: 104,
  nodes: {
    input: { x: 130, y: 30, label: "INPUT" },
    plan: { x: 130, y: 110, label: "PLAN" },
    tools: { x: 130, y: 190, label: "TOOLS" },
    validate: { x: 130, y: 270, label: "VALIDATE" },
    output: { x: 130, y: 350, label: "OUTPUT" },
    review: { x: 270, y: 270, label: "REVIEW" },
  },
  edges: {
    e1: { d: "M130 46V94", from: "input", to: "plan" },
    e2: { d: "M130 126V174", from: "plan", to: "tools" },
    e3: { d: "M130 206V254", from: "tools", to: "validate" },
    e4: { d: "M130 286V334", from: "validate", to: "output" },
    e5: { d: "M78 270H30V110H78", from: "validate", to: "plan" },
    e6: { d: "M182 270H218", from: "validate", to: "review" },
    e7: { d: "M270 286V350H182", from: "review", to: "output" },
  },
  notes: [
    { x: 38, y: 184, text: "RETRY" },
    { x: 38, y: 197, text: "MAX 3" },
    { x: 270, y: 246, text: "LOW CONF.", anchor: "middle" },
    { x: 278, y: 322, text: "APPROVE" },
  ],
}

// One successful run, then one that retries and escalates to a human.
const SEQUENCE = ["e1", "e2", "e3", "e4", "e1", "e2", "e3", "e5", "e2", "e3", "e6", "e7"]
const TRAVEL = 700
const DWELL = 320
const STEP = TRAVEL + DWELL
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function Graph({ layout, className }: { layout: Layout; className: string }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const tokenRef = useRef<SVGCircleElement>(null)
  const ringRef = useRef<SVGCircleElement>(null)
  const pathRefs = useRef<Record<string, SVGPathElement | null>>({})
  const [live, setLive] = useState<{ edge: string | null; node: string | null }>({
    edge: null,
    node: null,
  })

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const lengths: Record<string, number> = {}
    for (const [id, el] of Object.entries(pathRefs.current)) {
      if (el) lengths[id] = el.getTotalLength()
    }

    let raf = 0
    let visible = false
    let origin = 0
    let paused = 0
    let lastKey = ""

    const place = (x: number, y: number) => {
      tokenRef.current?.setAttribute("cx", String(x))
      tokenRef.current?.setAttribute("cy", String(y))
      ringRef.current?.setAttribute("cx", String(x))
      ringRef.current?.setAttribute("cy", String(y))
    }

    const frame = (now: number) => {
      if (!visible) return
      const elapsed = now - origin
      const idx = Math.floor(elapsed / STEP) % SEQUENCE.length
      const within = elapsed % STEP
      const id = SEQUENCE[idx]
      const edge = layout.edges[id]
      const path = pathRefs.current[id]
      const traveling = within < TRAVEL
      const t = traveling ? ease(within / TRAVEL) : 1

      if (path) {
        const p = path.getPointAtLength(lengths[id] * t)
        place(p.x, p.y)
      }
      const key = `${idx}:${traveling ? "t" : "d"}`
      if (key !== lastKey) {
        lastKey = key
        setLive({ edge: traveling ? id : null, node: traveling ? edge.from : edge.to })
      }
      raf = requestAnimationFrame(frame)
    }

    const staticPose = () => {
      const p = pathRefs.current.e3
      if (p) {
        const pt = p.getPointAtLength(lengths.e3)
        place(pt.x, pt.y)
      }
      setLive({ edge: null, node: "validate" })
    }

    if (reduced) {
      staticPose()
      return
    }

    const io = new IntersectionObserver(([entry]) => {
      const nowVisible = entry.isIntersecting
      if (nowVisible === visible) return
      visible = nowVisible
      cancelAnimationFrame(raf)
      if (visible) {
        origin = performance.now() - paused
        raf = requestAnimationFrame(frame)
      } else {
        paused = performance.now() - origin
      }
    })
    io.observe(svg)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [layout])

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${layout.w} ${layout.h}`}
      className={className}
      role="presentation"
      aria-hidden
    >
      {Object.entries(layout.edges).map(([id, e]) => (
        <path
          key={id}
          ref={(el) => {
            pathRefs.current[id] = el
          }}
          d={e.d}
          fill="none"
          className="ag-edge"
          data-on={live.edge === id ? "" : undefined}
        />
      ))}
      {Object.entries(layout.nodes).map(([id, n]) => (
        <g key={id} className="ag-node" data-on={live.node === id ? "" : undefined}>
          <rect x={n.x - layout.nodeW / 2} y={n.y - 16} width={layout.nodeW} height={32} />
          <text x={n.x} y={n.y + 3.5} textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}
      {layout.notes.map((n) => (
        <text key={n.text} x={n.x} y={n.y} textAnchor={n.anchor ?? "start"} className="ag-note">
          {n.text}
        </text>
      ))}
      <circle ref={ringRef} r="9" className="ag-ring" cx={layout.nodes.input.x} cy={layout.nodes.input.y} />
      <circle ref={tokenRef} r="4" className="ag-token" cx={layout.nodes.input.x} cy={layout.nodes.input.y} />
    </svg>
  )
}

export function AgentGraph() {
  return (
    <figure className="mb-2 w-full">
      <Graph layout={WIDE} className="hidden h-auto w-full sm:block" />
      <Graph layout={TALL} className="mx-auto block h-auto w-full max-w-[22rem] sm:hidden" />
      <figcaption className="mono-label mt-4 flex items-start justify-between gap-6 border-t border-line-strong pt-3 text-mute">
        <span>
          <span className="text-fg">FIG. 01</span> — Agent loop with bounded retries and a human in
          the loop under low confidence.
        </span>
      </figcaption>
    </figure>
  )
}
