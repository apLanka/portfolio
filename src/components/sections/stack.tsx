import { Fragment } from "react"

import { SectionHead } from "@/components/ui/section-head"
import { vars } from "@/components/ui/text"
import { stack } from "@/content/stack"

export function Stack() {
  return (
    <section id="stack" data-tone="hi" className="relative bg-base text-fg">
      <div className="shell section-y">
        <SectionHead index="04" label="Expertise" lines={["Technical", "depth"]} />

        <div>
          {stack.map((g, gi) => (
            <div
              key={g.id}
              className="grid grid-cols-1 gap-4 border-t border-line-strong py-8 md:grid-cols-12 md:gap-8 md:py-12"
            >
              <div className="md:col-span-3">
                <p className="mono-label tabular">
                  {String(gi + 1).padStart(2, "0")} / {g.label}
                </p>
                <p className="mono-label mt-1 text-mute">{g.note}</p>
              </div>
              <ul
                className="stack-list f-head md:col-span-9 text-[clamp(2rem,4.6vw,4.25rem)] [&>li]:inline"
                data-reveal
                style={vars({ "--d": 0 })}
              >
                {g.items.map((item) => (
                  <Fragment key={item}>
                    <li className="stack-item">{item}</li>{" "}
                  </Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
