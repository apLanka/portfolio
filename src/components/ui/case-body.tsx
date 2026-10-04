import type { ReactNode } from "react"

export function Label({ children }: { children: ReactNode }) {
  return <h4 className="eyebrow mb-3 text-signal-ink">{children}</h4>
}

export function ImpactList({
  items,
}: {
  items: { value?: string; text: string }[]
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i.text} className="flex items-baseline gap-4">
          {i.value && (
            <span className="font-display-tight text-5xl">{i.value}</span>
          )}
          <span className="max-w-[34ch] text-ink-2">{i.text}</span>
        </li>
      ))}
    </ul>
  )
}
