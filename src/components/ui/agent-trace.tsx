const spans = [
  { name: "plan", detail: "decompose request → 3 steps", ms: "4ms", start: 0, width: 4 },
  { name: "tool", detail: "retrieve_context(query, tenant)", ms: "212ms", start: 4, width: 26 },
  { name: "llm", detail: "generate → structured output", ms: "1.4s", start: 30, width: 52 },
  { name: "validate", detail: "schema ok · confidence 0.94", ms: "3ms", start: 82, width: 4 },
  { name: "respond", detail: "auto-approved, logged", ms: "—", start: 86, width: 14 },
] as const

/** Illustrative agent run, rendered as an observability trace waterfall. */
export function AgentTrace() {
  return (
    <figure
      aria-label="Illustrative trace of an agent run: plan, tool call, model call, validation, response"
      className="w-full"
    >
      <figcaption className="eyebrow mb-3 flex items-center justify-between text-ink-2">
        <span>
          <span className="mr-2 text-signal-ink">●</span>trace · agent.run
        </span>
        <span>illustrative</span>
      </figcaption>
      <ol className="font-mono text-[0.8rem] leading-snug">
        {spans.map((s, i) => (
          <li
            key={s.name}
            className="trace-row"
            style={{ "--i": i } as React.CSSProperties}
          >
            <span className="text-ink-2">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <span className="text-ink">{s.name}</span>
              <span className="ml-3 text-ink-2">{s.detail}</span>
            </span>
            <span className="text-ink-2 tabular-nums">{s.ms}</span>
            <span
              aria-hidden
              className="relative col-span-3 -mt-px block h-[3px] bg-rule"
            >
              <span
                className="trace-bar absolute inset-y-0 bg-signal"
                style={{
                  left: `${s.start}%`,
                  width: `${s.width}%`,
                  "--i": i,
                } as React.CSSProperties}
              />
            </span>
          </li>
        ))}
      </ol>
      <p className="eyebrow mt-3 text-ink-2" aria-hidden>
        total 1.62s <span className="caret ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-signal" />
      </p>
    </figure>
  )
}
