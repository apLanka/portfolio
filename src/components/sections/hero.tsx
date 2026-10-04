import { AgentTrace } from "@/components/ui/agent-trace"
import { profile } from "@/content/profile"

export function Hero() {
  return (
    <section id="top" className="relative pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="shell">
        <p className="eyebrow fade-in mb-8 flex flex-wrap items-center gap-x-6 gap-y-1 text-ink-2 md:mb-12">
          <span className="text-ink">{profile.name}</span>
          <span>{profile.location}</span>
          <span className="hidden sm:inline">Open to AI engineering roles &amp; select projects</span>
        </p>

        <h1 className="font-display-tight text-[clamp(5.4rem,24vw,8rem)] leading-[0.82]! sm:text-[clamp(7rem,17.5vw,17rem)]">
          <span className="mask-line">
            <span style={{ "--d": 0 } as React.CSSProperties}>
              AI
              <span className="eyebrow ml-6 hidden align-top font-mono tracking-[0.09em] text-ink-2 lg:inline-block lg:max-w-[22ch] lg:pt-[1.6rem] lg:leading-relaxed">
                (agents · LLM apps · agentic workflows · production systems)
              </span>
            </span>
          </span>
          <span className="mask-line">
            <span style={{ "--d": 1 } as React.CSSProperties}>
              Engineer<span className="text-signal">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="fade-in lg:col-span-5" style={{ "--d": 4 } as React.CSSProperties}>
            <p className="font-display text-[1.7rem] leading-[1.15] sm:text-4xl">
              I build AI-powered software that holds up in production — LLM
              applications, agents and the distributed systems underneath them.
            </p>
            <p className="mt-6 max-w-[48ch] text-ink-2">
              Three years running real-time, event-driven platforms at 100K+
              users taught me what actually breaks: latency, retries, cost and
              bad inputs. I now apply that discipline to AI.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="#work"
                className="eyebrow inline-flex h-12 items-center gap-3 bg-ink px-6 text-paper transition-colors hover:bg-signal"
              >
                See the work <span aria-hidden>↓</span>
              </a>
              <a href="#contact" className="eyebrow ulink py-2">
                Get in touch
              </a>
            </div>
          </div>

          <div className="fade-in lg:col-span-6 lg:col-start-7" style={{ "--d": 5 } as React.CSSProperties}>
            <AgentTrace />
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 border-t border-rule md:mt-28 md:grid-cols-4">
          {profile.stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ "--d": i } as React.CSSProperties}
              className="border-b border-rule py-6 pr-4 md:border-b-0 md:border-r md:pl-6 md:first:pl-0 md:last:border-r-0 odd:max-md:border-r odd:max-md:pr-4 even:max-md:pl-4"
            >
              <dt className="font-display-tight text-5xl md:text-6xl">{s.value}</dt>
              <dd className="eyebrow mt-3 max-w-[22ch] text-ink-2">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
