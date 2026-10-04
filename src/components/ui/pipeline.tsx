import type { Stage } from "@/content/projects"

/** Architecture rendered as a typographic pipeline — horizontal on desktop, vertical on mobile. */
export function Pipeline({ stages, label }: { stages: Stage[]; label: string }) {
  return (
    <ol data-reveal className="pipeline" aria-label={label}>
      {stages.map((s, i) => (
        <li key={s.name} style={{ "--i": i } as React.CSSProperties}>
          <span className="block font-display text-2xl leading-tight md:text-[1.7rem]">
            {s.name}
          </span>
          <span className="eyebrow mt-1 block text-ink-2 normal-case tracking-normal">
            {s.note}
          </span>
        </li>
      ))}
    </ol>
  )
}
