import Image from "next/image"

import { Section } from "@/components/ui/section"
import { capabilities } from "@/content/profile"

export function About() {
  return (
    <>
      <Section id="about" index="01" label="Who">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-9">
            <p
              data-reveal
              className="font-display text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[4.4rem] lg:leading-[1.02]"
            >
              I came to AI through <em className="text-signal-ink">production software</em>.
              The problems that decide whether an LLM feature survives real
              users — latency, retries, cost, malformed output, who reviews
              what — are the problems I have already spent years solving.
            </p>
          </div>
          <aside className="lg:col-span-3" data-reveal style={{ "--d": 2 } as React.CSSProperties}>
            <Image
              src="/brand/avatar.png"
              alt="Portrait of Pasindu Lanka"
              width={96}
              height={96}
              className="mb-5 size-24 rounded-full"
              priority={false}
            />
            <p className="eyebrow text-ink-2">
              Software engineer at Metarune Labs. B.Sc. Software Engineering at
              SLIIT (2027). Based in Colombo.
            </p>
          </aside>
        </div>
      </Section>

      <Section id="build" index="02" label="What I build" className="!pt-0">
        <ul className="border-t border-rule">
          {capabilities.map((c, i) => (
            <li
              key={c.title}
              data-reveal
              style={{ "--d": i % 2 } as React.CSSProperties}
              className="row-link group grid grid-cols-1 gap-3 border-b border-rule py-7 md:grid-cols-12 md:gap-10 md:py-9"
            >
              <span className="eyebrow text-signal-ink md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display-tight text-4xl md:col-span-6 md:text-6xl md:leading-[0.95]">
                {c.title}
              </h3>
              <p className="max-w-[52ch] text-ink-2 md:col-span-5 md:pt-2">{c.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
