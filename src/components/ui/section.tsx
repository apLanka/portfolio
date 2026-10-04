import type { ReactNode } from "react"

interface SectionProps {
  id: string
  index: string
  label: string
  inverted?: boolean
  children: ReactNode
  className?: string
}

/** A numbered section, like a span in a trace. */
export function Section({
  id,
  index,
  label,
  inverted,
  children,
  className = "",
}: SectionProps) {
  const tone = inverted
    ? "bg-inv-bg text-inv-fg [--rule:var(--inv-rule)] [--ink-2:var(--inv-2)] [--signal:var(--inv-signal)] [--signal-ink:var(--inv-signal)] [--ink:var(--inv-fg)] [--paper:var(--inv-bg)]"
    : ""
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className={`relative py-24 md:py-36 ${tone} ${className}`}
    >
      <div className="shell">
        <div
          data-reveal
          className="eyebrow mb-14 flex items-center gap-4 text-ink-2 md:mb-24"
        >
          <span className="text-signal-ink">{index}</span>
          <span id={`${id}-label`}>{label}</span>
          <span aria-hidden className="h-px flex-1 bg-rule" />
        </div>
        {children}
      </div>
    </section>
  )
}
