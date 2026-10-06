import { Flow } from "@/components/figures/flow"
import { CountUp } from "@/components/motion/count-up"
import { TLink } from "@/components/motion/page-transition"
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons"
import { Follow } from "@/components/ui/follow"
import { SectionHead } from "@/components/ui/section-head"
import { projects, type Project } from "@/content/projects"

function Sheet({ project, index, total }: { project: Project; index: number; total: number }) {
  const lead = project.impact.find((i) => i.value) ?? project.impact[0]
  const n = String(index + 1).padStart(2, "0")

  return (
    <article
      data-tone="bone"
      className={`sheet text-fg ${index % 2 === 0 ? "bg-base" : "bg-raised"}`}
    >
      <Follow label="Open" className="shell py-10 lg:pb-10 lg:pt-[5.25rem]">
        <div className="mono-label flex items-center justify-between gap-6 text-mute">
          <span>
            <span className="text-fg tabular">{n}</span>
            <span className="mx-2">/</span>
            <span className="tabular">{String(total).padStart(2, "0")}</span>
            <span className="mx-3">—</span>
            {project.kicker}
          </span>
          <span className="hidden text-right sm:block">
            {project.context}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-7 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h3 className="sheet-title f-head text-[clamp(2.25rem,5vw,4.75rem)]">
              <TLink href={`/work/${project.slug}`} label={`Case ${n}`}>
                {project.title}
              </TLink>
            </h3>
            <p className="mt-5 max-w-[60ch] text-mute md:mt-6 md:text-lg">{project.problem}</p>
          </div>

          <aside className="flex flex-col gap-5 lg:col-span-4 lg:pl-6">
            <div className="border-t border-line-strong pt-4">
              <p className="mono-label text-mute">{lead.value ? "Result" : "Outcome"}</p>
              {lead.value ? (
                <>
                  <p className="f-display mt-2 text-7xl">
                    <CountUp value={lead.value} />
                  </p>
                  <p className="mt-2 max-w-[30ch] text-sm text-mute">{lead.text}</p>
                </>
              ) : (
                <p className="f-title mt-3 text-xl md:text-2xl">{lead.text}</p>
              )}
            </div>
            <div className="border-t border-line-strong pt-4">
              <p className="mono-label text-mute">Built with</p>
              <p className="mono-label mt-2 leading-relaxed text-fg">
                {project.stack.join(" / ")}
              </p>
            </div>
            <div className="mono-label flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-2" aria-hidden>
                Case study <ArrowRight />
              </span>
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mark-link relative z-10 inline-flex items-center gap-1 py-1"
                >
                  {l.label} <ArrowUpRight />
                </a>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-8 lg:mt-9">
          <Flow stages={project.pipeline} label={`${project.title}: architecture`} />
        </div>
      </Follow>
    </article>
  )
}

export function Work() {
  return (
    <section id="work" className="relative">
      <div data-tone="bone" className="bg-base text-fg">
        <div className="shell pb-10 pt-[clamp(5rem,11vw,10rem)] md:pb-16">
          <SectionHead
            index="03"
            label="Selected work"
            lines={["Case", "studies"]}
            aside={`${String(projects.length).padStart(2, "0")} systems`}
          />
          <p className="-mt-6 max-w-[52ch] text-lg text-mute md:-mt-12 md:text-xl">
            Production systems and shipped products, written up the way I would explain them to
            another engineer: the problem, the architecture, and the decisions I made and rejected.
          </p>
        </div>
      </div>
      {projects.map((p, i) => (
        <Sheet key={p.slug} project={p} index={i} total={projects.length} />
      ))}
    </section>
  )
}
