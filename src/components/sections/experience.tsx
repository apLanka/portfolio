import { Section } from "@/components/ui/section"
import { TagList } from "@/components/ui/tag-list"
import { timeline } from "@/content/experience"

export function Experience() {
  return (
    <Section id="experience" index="05" label="Experience" className="bg-paper-2">
      <ol>
        {timeline.map((e) => (
          <li
            key={e.id}
            data-reveal
            className="grid grid-cols-1 gap-4 border-t border-rule py-9 md:grid-cols-12 md:gap-10 md:py-12"
          >
            <p className="eyebrow text-ink-2 md:col-span-3">
              {e.kind === "focus" && (
                <span aria-hidden className="mr-2 inline-block size-2 bg-signal align-middle" />
              )}
              {e.period}
            </p>
            <div className="md:col-span-9">
              <h3
                className={`font-display-tight ${
                  e.kind === "focus" ? "text-5xl md:text-7xl" : "text-3xl md:text-5xl"
                }`}
              >
                {e.title}
                {e.org && <span className="text-ink-2"> · {e.org}</span>}
              </h3>
              <p className="mt-5 max-w-[62ch] text-ink-2">{e.summary}</p>
              {e.points && (
                <ul className="mt-6 grid max-w-[68ch] gap-3">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="relative pl-6 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-signal"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              {e.tags && (
                <div className="mt-6">
                  <TagList items={e.tags} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
