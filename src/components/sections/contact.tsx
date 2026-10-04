import { LocalTime } from "@/components/local-time"
import { Section } from "@/components/ui/section"
import { profile } from "@/content/profile"

export function Contact() {
  return (
    <Section id="contact" index="07" label="Contact" inverted className="!pb-16">
      <p data-reveal className="eyebrow mb-6 text-ink-2">
        Hiring for AI engineering, or have an AI system to ship?
      </p>
      <h2
        data-reveal
        className="font-display-tight text-[3.6rem] sm:text-8xl lg:text-[10.5rem]"
      >
        Let&rsquo;s build it
        <span className="text-signal">.</span>
      </h2>

      <a
        data-reveal
        style={{ "--d": 2 } as React.CSSProperties}
        href={`mailto:${profile.email}`}
        className="ulink mt-12 inline-block break-all font-display text-[1.7rem] sm:text-5xl md:mt-16"
      >
        {profile.email}
      </a>

      <div className="mt-24 grid grid-cols-1 gap-10 border-t border-rule pt-8 md:grid-cols-12 md:gap-10">
        <ul className="grid grid-cols-2 gap-x-8 gap-y-5 md:col-span-8 md:grid-cols-4">
          {profile.links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span className="eyebrow block text-ink-2">{l.label}</span>
                <span className="ulink mt-1 inline-block">{l.handle} ↗</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="eyebrow text-ink-2 md:col-span-4 md:text-right">
          {profile.location} · <LocalTime timeZone={profile.timeZone} />
        </p>
      </div>
    </Section>
  )
}
