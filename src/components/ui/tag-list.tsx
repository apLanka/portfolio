export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1">
      {items.map((t) => (
        <li key={t} className="eyebrow text-ink-2 before:mr-2 before:text-signal before:content-['/']">
          {t}
        </li>
      ))}
    </ul>
  )
}
