import type { Stage } from "@/content/projects"
import { vars } from "@/components/ui/text"

interface FlowProps {
  stages: Stage[]
  label: string
  /** Larger cells for case-study pages. */
  large?: boolean
}

/**
 * Architecture pipeline drawn as a ruled strip of stages. Vertical on
 * mobile, horizontal from lg. Cells enter in sequence once in view (the
 * `.flow` class is picked up by RevealObserver).
 */
export function Flow({ stages, label, large = false }: FlowProps) {
  return (
    <ol className="flow" aria-label={label}>
      {stages.map((s, i) => (
        <li
          key={s.name}
          className={`flow-cell ${large ? "min-h-32 lg:min-h-44 lg:p-5" : ""}`}
          style={vars({ "--i": i })}
        >
          <span className="mono-label tabular text-mute">{String(i + 1).padStart(2, "0")}</span>
          <span>
            <span
              className={`f-title block ${large ? "text-2xl lg:text-3xl" : "text-lg lg:text-xl"}`}
            >
              {s.name}
            </span>
            <span className="mono-label mt-1 block text-mute">{s.note}</span>
          </span>
        </li>
      ))}
    </ol>
  )
}
