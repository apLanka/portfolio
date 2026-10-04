import { AgentGraph } from "@/components/figures/agent-graph"
import { CountUp } from "@/components/motion/count-up"
import { ArrowRight } from "@/components/ui/icons"
import { vars } from "@/components/ui/text"
import { profile } from "@/content/profile"

/** Splits a word into individually masked characters that rise on load. */
function Word({ text, offset }: { text: string; offset: number }) {
  return (
    <span className="hero-word" aria-hidden>
      {text.split("").map((c, i) => (
        <span key={i} className="hero-mask">
          <span className="hero-ch" style={vars({ "--i": i + offset })}>
            {c}
          </span>
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      data-tone="graphite"
      className="relative flex min-h-svh flex-col justify-between gap-12 pb-8 pt-24 md:pt-28"
    >
      <div className="shell">
        <p
          className="hero-in mono-label flex justify-between gap-6 text-mute"
          style={vars({ "--d": 0 })}
        >
          <span>
            <span className="text-fg">Portfolio</span> <span className="mx-2">/</span> AI
            engineering, {new Date().getFullYear()}
          </span>
          <span className="hidden sm:block tabular">6.9271° N, 79.8612° E</span>
        </p>
      </div>

      <div className="shell hero-wrap px-up">
        <h1
          className="f-display hero-h"
          aria-label={`${profile.role} — ${profile.name}`}
        >
          <Word text="AI" offset={0} />
          <Word text="ENGINEER" offset={2} />

        </h1>
      </div>

      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="hero-in lg:col-span-5" style={vars({ "--d": 3 })}>
          <p className="max-w-[34ch] text-xl leading-snug sm:text-2xl">
            I build AI-powered software and the production systems underneath it: LLM applications,
            agents and agentic workflows that stay fast, measurable and recoverable under real load.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#work" className="btn btn-right">
              Selected work
              <ArrowRight className="rotate-90" />
            </a>
            <a href="#contact" className="mark-link mono-label py-2">
              Get in touch
            </a>
          </div>
        </div>
        <div className="px-down lg:col-span-7">
          <div className="hero-in" style={vars({ "--d": 5 })}>
            <AgentGraph />
          </div>
        </div>
      </div>

      <div className="shell">
        <dl
          className="hero-in grid grid-cols-2 border-t border-line-strong md:grid-cols-4"
          style={vars({ "--d": 7 })}
        >
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-5 pr-4 ${i % 2 === 1 ? "pl-4 md:pl-0" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <dd className="f-head text-4xl sm:text-5xl">
                <CountUp value={s.value} />
              </dd>
              <dt className="mono-label mt-2 max-w-[22ch] text-mute">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
