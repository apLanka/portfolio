import { Arrow } from "@/components/ui/arrow"
import { Section } from "@/components/ui/section"
import { experiments, posts } from "@/content/writing"

export function Writing() {
  return (
    <Section id="writing" index="06" label="Writing & experiments">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <h3 data-reveal className="eyebrow mb-6 text-signal-ink">Notes on production systems</h3>
          <ul className="border-t border-rule">
            {posts.map((p, i) => (
              <li key={p.url} data-reveal style={{ "--d": i } as React.CSSProperties}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="row-link grid grid-cols-1 gap-2 border-b border-rule py-7 md:grid-cols-[6rem_1fr_auto] md:gap-8"
                >
                  <time dateTime={p.date} className="eyebrow pt-1.5 text-ink-2">
                    {p.date}
                  </time>
                  <span>
                    <span className="font-display-tight block text-3xl md:text-[2.3rem] md:leading-[1.02]">
                      {p.title}
                    </span>
                    <span className="mt-2 block max-w-[56ch] text-ink-2">{p.description}</span>
                  </span>
                  <Arrow className="row-arrow mt-2 hidden size-6 md:block" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 data-reveal className="eyebrow mb-6 text-signal-ink">Other builds</h3>
          <ul className="border-t border-rule">
            {experiments.map((x, i) => (
              <li
                key={x.title}
                data-reveal
                style={{ "--d": i } as React.CSSProperties}
                className="border-b border-rule py-6"
              >
                <p className="font-display-tight text-3xl">{x.title}</p>
                <p className="mt-2 text-ink-2">{x.body}</p>
                <p className="eyebrow mt-3 text-ink-2">{x.stack}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
