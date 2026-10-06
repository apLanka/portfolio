import { SectionHead } from "@/components/ui/section-head"
import { vars } from "@/components/ui/text"
import { capabilities } from "@/content/profile"

export function Capabilities() {
  return (
    <section id="capabilities" data-tone="graphite" className="relative section-y pt-0">
      <div className="shell">
        <SectionHead
          index="02"
          label="Capabilities"
          lines={["What I", "build"]}
          aside={`${String(capabilities.length).padStart(2, "0")} disciplines`}
        />

        <ul className="border-t border-line-strong">
          {capabilities.map((c, i) => (
            <li
              key={c.title}
              data-reveal
              style={vars({ "--d": 0 })}
              className="cap border-b border-line-strong"
            >
              <span className="cap-fill" aria-hidden />
              <div className="cap-inner grid grid-cols-1 gap-x-8 gap-y-4 py-8 md:grid-cols-12 md:py-10">
                <span className="mono-label tabular text-mute md:col-span-1 md:pt-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="f-head text-[clamp(2rem,5vw,4.5rem)] md:col-span-6">{c.title}</h3>
                <p className="max-w-[46ch] text-mute md:col-span-5 md:pt-2">
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
