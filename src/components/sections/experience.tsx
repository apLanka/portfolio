import { SectionHead } from "@/components/ui/section-head"
import { vars } from "@/components/ui/text"
import { timeline, type TimelineEntry } from "@/content/experience"

function Rule({ strong = false }: { strong?: boolean }) {
  return <div data-draw className={`h-px ${strong ? "bg-fg" : "bg-line-strong"}`} />
}

function Tags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null
  return (
    <ul className="mono-label mt-6 flex flex-wrap gap-x-2 text-mute">
      {tags.map((t, i) => (
        <li key={t}>
          {i > 0 ? <span className="mr-2">/</span> : null}
          {t}
        </li>
      ))}
    </ul>
  )
}

function Focus({ entry }: { entry: TimelineEntry }) {
  return (
    <article data-reveal className="mb-6 bg-base p-6 text-fg md:mb-10 md:p-10" data-tone="hi">
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <p className="mono-label flex items-center gap-3 md:col-span-3">
          <span className="pulse relative block size-2 bg-fg" aria-hidden />
          {entry.period} — Current focus
        </p>
        <div className="md:col-span-9">
          <h3 className="f-display text-[clamp(3rem,8vw,7.5rem)]">{entry.title}</h3>
          <p className="mt-6 max-w-[60ch] text-lg md:text-xl">{entry.summary}</p>
          <Tags tags={entry.tags} />
        </div>
      </div>
    </article>
  )
}

function Role({ entry, delay }: { entry: TimelineEntry; delay: number }) {
  return (
    <article className="relative" style={vars({ "--d": delay })}>
      <Rule />
      <div className="grid gap-5 py-8 md:grid-cols-12 md:gap-8 md:py-12">
        <p className="mono-label tabular text-mute md:col-span-3">{entry.period}</p>
        <div className="md:col-span-9">
          <h3 className="f-head text-[clamp(2rem,4.4vw,4rem)]">{entry.title}</h3>
          <p className="mono-label mt-2 text-mute">{entry.org}</p>
          <p className="mt-6 max-w-[62ch] text-lg">{entry.summary}</p>
          {entry.points ? (
            <ul className="mt-8 max-w-[62ch] space-y-4 text-mute">
              {entry.points.map((p) => (
                <li key={p} className="grid grid-cols-[1.5rem_1fr]" data-reveal>
                  <span className="mono-label pt-1 text-fg" aria-hidden>
                    →
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          ) : null}
          <Tags tags={entry.tags} />
        </div>
      </div>
    </article>
  )
}

export function Experience() {
  const focus = timeline.find((t) => t.kind === "focus")
  const work = timeline.filter((t) => t.kind === "work")
  const other = timeline.filter((t) => t.kind === "education" || t.kind === "credential")

  return (
    <section id="experience" data-tone="graphite" className="relative section-y">
      <div className="shell">
        <SectionHead index="05" label="Experience" lines={["Path to", "AI"]} />

        {focus ? <Focus entry={focus} /> : null}
        {work.map((w, i) => (
          <Role key={w.id} entry={w} delay={i} />
        ))}

        <Rule />
        <div className="grid gap-px md:grid-cols-2">
          {other.map((o) => (
            <article key={o.id} data-reveal className="py-8 md:py-12 md:pr-10">
              <p className="mono-label tabular text-mute">
                {o.kind === "education" ? "Education" : "Credential"} / {o.period}
              </p>
              <h3 className="f-title mt-4 text-2xl md:text-3xl">{o.title}</h3>
              <p className="mono-label mt-2 text-mute">{o.org}</p>
              <p className="mt-4 max-w-[46ch] text-mute">{o.summary}</p>
              {o.verifyUrl ? (
                <a
                  href={o.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono-label mt-6 inline-block underline underline-offset-4"
                >
                  Verify credential ↗
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
