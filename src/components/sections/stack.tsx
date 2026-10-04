import { Section } from "@/components/ui/section"
import { stack } from "@/content/stack"

export function Stack() {
  return (
    <Section id="stack" index="04" label="Technical expertise">
      <div className="border-t border-rule">
        {stack.map((group) => (
          <div
            key={group.id}
            className="grid grid-cols-1 gap-6 border-b border-rule py-10 md:grid-cols-12 md:gap-10 md:py-14"
          >
            <div className="md:col-span-3" data-reveal>
              <h3 className="font-display-tight text-4xl md:text-5xl">{group.label}</h3>
              <p className="eyebrow mt-3 text-ink-2">{group.note}</p>
            </div>
            <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-1 md:col-span-9">
              {group.items.map((item, i) => (
                <li
                  key={item}
                  data-reveal
                  style={{ "--d": Math.min(i, 6) } as React.CSSProperties}
                  className="font-display text-[2rem] leading-tight sm:text-4xl md:text-[3.1rem]"
                >
                  {item}
                  {i < group.items.length - 1 && (
                    <span aria-hidden className="ml-3 text-signal">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
