import { ArrowUpRight } from "@/components/ui/icons"
import { SectionHead } from "@/components/ui/section-head"
import { vars } from "@/components/ui/text"
import { experiments, posts } from "@/content/writing"

export function Writing() {
  return (
    <section id="writing" data-tone="bone" className="relative bg-base text-fg">
      <div className="shell section-y">
        <SectionHead
          index="06"
          label="Writing & experiments"
          lines={["Notes", "from the lab"]}
        />

        <ul className="border-t border-line-strong">
          {posts.map((p, i) => (
            <li
              key={p.url}
              data-reveal
              style={vars({ "--d": Math.min(i, 2) })}
              className="post border-b border-line-strong"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-1 gap-x-8 gap-y-3 py-7 md:grid-cols-12 md:py-9"
              >
                <span className="mono-label tabular text-mute md:col-span-2 md:pt-2">{p.date}</span>
                <span className="md:col-span-9">
                  <span className="post-title f-title block text-[clamp(1.4rem,2.8vw,2.5rem)]">
                    {p.title}
                  </span>
                  <span className="post-desc">
                    <span className="block overflow-hidden">
                      <span className="mt-3 block max-w-[56ch] text-mute">{p.description}</span>
                    </span>
                  </span>
                </span>
                <span className="hidden justify-self-end pt-2 md:col-span-1 md:block">
                  <ArrowUpRight className="size-5" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-20 md:mt-28">
          <p className="mono-label mb-6 text-mute">Experiments & side builds</p>
          <ul className="grid border-t border-line-strong md:grid-cols-3 md:gap-8">
            {experiments.map((x, i) => (
              <li
                key={x.title}
                data-reveal
                style={vars({ "--d": i })}
                className="border-b border-line-strong py-6 md:border-b-0 md:pr-4"
              >
                <h3 className="f-head text-4xl">{x.title}</h3>
                <p className="mt-3 max-w-[38ch] text-mute">{x.body}</p>
                <p className="mono-label mt-4">{x.stack}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
