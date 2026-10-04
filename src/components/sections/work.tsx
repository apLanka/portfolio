import Link from "next/link"

import { Arrow } from "@/components/ui/arrow"
import { ImpactList, Label } from "@/components/ui/case-body"
import { Pipeline } from "@/components/ui/pipeline"
import { Section } from "@/components/ui/section"
import { TagList } from "@/components/ui/tag-list"
import { featured } from "@/content/projects"

export function Work() {
  return (
    <Section id="work" index="03" label="Selected work — case studies" inverted>
      <div className="mb-20 grid grid-cols-1 gap-6 md:mb-32 md:grid-cols-12 md:gap-10">
        <h2
          data-reveal
          className="font-display-tight text-[3.4rem] sm:text-7xl md:col-span-8 md:text-[7.5rem]"
        >
          Systems, not demos.
        </h2>
        <p
          data-reveal
          style={{ "--d": 2 } as React.CSSProperties}
          className="max-w-[40ch] text-ink-2 md:col-span-4 md:col-start-9 md:self-end"
        >
          Each project is written up as an engineering case study: the problem,
          what was built, the architecture, and the trade-offs that mattered.
        </p>
      </div>

      <div>
        {featured.map((p, i) => (
          <article
            key={p.slug}
            aria-labelledby={`${p.slug}-title`}
            className="grid grid-cols-1 gap-10 border-t border-rule py-14 md:py-20 lg:grid-cols-12 lg:gap-12"
          >
            <header className="lg:col-span-4">
              <div className="lg:sticky lg:top-28" data-reveal>
                <p className="eyebrow mb-6 flex gap-4 text-ink-2">
                  <span className="text-signal-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span>{p.kicker}</span>
                </p>
                <h3
                  id={`${p.slug}-title`}
                  className="font-display-tight text-[2.6rem] md:text-5xl lg:text-[3.4rem]"
                >
                  <Link href={`/work/${p.slug}`} className="hover:text-signal-ink">
                    {p.title}
                  </Link>
                </h3>
                <dl className="eyebrow mt-8 grid grid-cols-[5rem_1fr] gap-y-2 text-ink-2">
                  <dt>Role</dt>
                  <dd className="text-ink normal-case tracking-normal">{p.role}</dd>
                  <dt>Context</dt>
                  <dd className="text-ink normal-case tracking-normal">{p.context}</dd>
                  <dt>When</dt>
                  <dd className="text-ink normal-case tracking-normal">{p.year}</dd>
                </dl>
              </div>
            </header>

            <div className="grid grid-cols-1 gap-12 lg:col-span-8">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2" data-reveal>
                <div>
                  <Label>Problem</Label>
                  <p className="max-w-[46ch]">{p.problem}</p>
                </div>
                <div>
                  <Label>What I built</Label>
                  <p className="max-w-[46ch]">{p.built}</p>
                </div>
              </div>

              <div>
                <Label>Architecture</Label>
                <Pipeline stages={p.pipeline} label={`${p.title} architecture`} />
              </div>

              <div data-reveal>
                <Label>Key decision</Label>
                <p className="font-display text-2xl leading-snug md:text-3xl">
                  {p.decisions[0].title}.{" "}
                  <span className="text-ink-2">{p.decisions[0].body}</span>
                </p>
              </div>

              <div data-reveal>
                <Label>Impact</Label>
                <ImpactList items={p.impact} />
              </div>

              <div
                data-reveal
                className="flex flex-col gap-6 border-t border-rule pt-6 md:flex-row md:items-end md:justify-between"
              >
                <TagList items={p.stack} />
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow ulink py-1"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                  <Link
                    href={`/work/${p.slug}`}
                    className="eyebrow group inline-flex items-center gap-2 py-1 text-signal-ink"
                  >
                    Full case study
                    <Arrow className="row-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
