import type { CSSProperties, ElementType, ReactNode } from "react"

/** Typed helper for custom-property style props. */
export const vars = (v: Record<string, string | number>) => v as CSSProperties

interface LinesProps {
  lines: ReactNode[]
  as?: ElementType
  className?: string
  delay?: number
}

/**
 * Explicit line breaks, each one masked so it rises into place when the
 * block enters the viewport (triggered by RevealObserver).
 */
export function Lines({ lines, as: Tag = "span", className, delay = 0 }: LinesProps) {
  return (
    <Tag data-lines className={className} style={vars({ "--d": delay })}>
      {lines.map((line, i) => (
        <span key={i} className="ln">
          <span style={vars({ "--i": i })}>{line}</span>
        </span>
      ))}
    </Tag>
  )
}

interface RiseWordsProps {
  text: string
  as?: ElementType
  className?: string
  /** Offset of the stagger, in words. */
  start?: number
}

/**
 * Wrapping text where each word rises out of its own mask on load.
 * Pure CSS, so it needs no JavaScript to run and costs no hydration.
 */
export function RiseWords({ text, as: Tag = "span", className, start = 0 }: RiseWordsProps) {
  const words = text.split(" ")
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden>
          <span className="hero-mask">
            <span className="hero-ch" style={vars({ "--i": i + start })}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  )
}

/**
 * Paragraph whose words brighten as it scrolls through the viewport
 * (CSS scroll-driven animation; static where unsupported).
 */
export function ScrollWords({
  text,
  as: Tag = "p",
  className,
}: {
  text: string
  as?: ElementType
  className?: string
}) {
  return (
    <Tag className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="sw">
          {w}{" "}
        </span>
      ))}
    </Tag>
  )
}
