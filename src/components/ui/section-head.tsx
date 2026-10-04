import { Lines } from "@/components/ui/text"

interface SectionHeadProps {
  index: string
  label: string
  lines: string[]
  /** Optional right-aligned mono annotation. */
  aside?: string
}

/** Section opener: mono index + a monumental condensed title. */
export function SectionHead({ index, label, lines, aside }: SectionHeadProps) {
  return (
    <header className="mb-14 md:mb-24">
      <div className="mono-label flex items-center justify-between gap-6 border-t border-line-strong pt-4 text-mute">
        <span>
          <span className="text-fg">{index}</span>
          <span className="mx-3" aria-hidden>
            /
          </span>
          {label}
        </span>
        {aside ? <span className="tabular">{aside}</span> : null}
      </div>
      <h2 className="mt-8 md:mt-12">
        <Lines
          lines={lines}
          className="f-display block text-[clamp(3.5rem,11.5vw,10.5rem)]"
        />
      </h2>
    </header>
  )
}
