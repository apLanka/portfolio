"use client"

import { useEffect, useState } from "react"

/** Each step: the candidate next tokens with probabilities; the first is the one sampled. */
const STEPS: [string, number][][] = [
  [["I", 0.71], ["We", 0.18], ["Engineers", 0.07], ["Teams", 0.04]],
  [["build", 0.58], ["ship", 0.24], ["design", 0.12], ["debug", 0.06]],
  [["AI", 0.66], ["LLM", 0.2], ["agentic", 0.09], ["data", 0.05]],
  [["systems", 0.52], ["agents", 0.27], ["features", 0.14], ["demos", 0.07]],
  [["that", 0.77], ["which", 0.1], ["for", 0.08], ["to", 0.05]],
  [["stay", 0.49], ["remain", 0.21], ["run", 0.19], ["keep", 0.11]],
  [["measurable", 0.44], ["reliable", 0.31], ["fast", 0.17], ["flashy", 0.08]],
  [["in", 0.5], ["under", 0.3], ["at", 0.12], ["on", 0.08]],
  [["production.", 0.81], ["demos.", 0.1], ["theory.", 0.06], ["slides.", 0.03]],
]

const SENTENCE = STEPS.map((s) => s[0][0]).join(" ")
const FILL_MS = 450
const PICK_MS = 650
const NEXT_MS = 450
const HOLD_MS = 3800

export function TokenSampler() {
  // Server render and reduced-motion users see the finished sentence.
  const [step, setStep] = useState(STEPS.length - 1)
  const [phase, setPhase] = useState<"fill" | "pick">("pick")
  const [out, setOut] = useState(STEPS.length)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let timer: ReturnType<typeof setTimeout>
    let i = 0
    const run = () => {
      setStep(i)
      setOut(i)
      setPhase("fill")
      timer = setTimeout(() => {
        setPhase("pick")
        timer = setTimeout(() => {
          setOut(i + 1)
          if (i < STEPS.length - 1) {
            i += 1
            timer = setTimeout(run, NEXT_MS)
          } else {
            timer = setTimeout(() => {
              i = 0
              run()
            }, HOLD_MS)
          }
        }, PICK_MS)
      }, FILL_MS)
    }
    run()
    return () => clearTimeout(timer)
  }, [])

  const words = SENTENCE.split(" ")
  const live = out < STEPS.length

  return (
    <figure className="mb-2 w-full">
      <div className="border border-line-strong bg-raised p-4 sm:p-6">
        <div className="mono-label mb-5 flex items-center justify-between gap-4 border-b border-line pb-3 text-mute">
          <span className="flex items-center gap-3">
            <span
              className={`block size-2 ${live ? "pulse relative bg-hi" : "bg-mute"}`}
              aria-hidden
            />
            model.sample
          </span>
          <span>temp 0.7 / top-k 4</span>
        </div>

        <p className="sr-only">{SENTENCE}</p>

        <div aria-hidden>
          <p className="f-head min-h-[6.2em] text-[clamp(1.6rem,2.6vw,2.6rem)] sm:min-h-[4.2em]">
            {words.slice(0, out).map((w, i) => (
              <span key={i}>{w} </span>
            ))}
            {live ? (
              <span className="inline-block h-[0.8em] w-[0.14em] translate-y-[0.08em] animate-pulse bg-hi" />
            ) : null}
          </p>

          <ul className="mono-label mt-6 space-y-2">
            {STEPS[step].map(([token, p], i) => {
              const picked = i === 0 && phase === "pick"
              return (
                <li
                  key={`${step}-${token}`}
                  className={`grid grid-cols-[6.5rem_minmax(0,1fr)_2.5rem] items-center gap-3 transition-colors duration-300 ${
                    picked ? "text-hi" : "text-mute"
                  }`}
                >
                  <span className="truncate">{token}</span>
                  <span className="h-[3px] bg-line">
                    <span
                      className={`block h-full origin-left animate-[bar-in_0.5s_cubic-bezier(0.2,0.7,0.2,1)_both] bg-current ${
                        picked ? "" : i === 0 ? "opacity-70" : "opacity-40"
                      }`}
                      style={{ transform: `scaleX(${p})` }}
                    />
                  </span>
                  <span className="tabular text-right">{p.toFixed(2)}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <figcaption className="mono-label mt-4 border-t border-line-strong pt-3 text-mute">
        <span className="text-fg">SAMPLING 01</span> — Next-token probabilities, one word at a time.
      </figcaption>
    </figure>
  )
}
