import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Arrow } from "@/components/ui/arrow"
import { ImpactList, Label } from "@/components/ui/case-body"
import { Pipeline } from "@/components/ui/pipeline"
import { TagList } from "@/components/ui/tag-list"
import { getProject, projects } from "@/content/projects"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.problem,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { title: project.title, description: project.problem, type: "article" },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteHeader home={false} />
      <main id="main">
        <article className="pb-24 pt-32 md:pt-44">
          <header className="shell">
            <Link
              href="/#work"
              className="eyebrow ulink mb-10 inline-flex items-center gap-2 py-1 text-ink-2 md:mb-16"
            >
              <Arrow className="rotate-180" /> All work
            </Link>
            <p className="eyebrow mb-6 text-ink-2">
              <span className="text-signal-ink">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-3">/</span>
              {project.kicker}
            </p>
            <h1 className="font-display-tight max-w-[16ch] text-[3.2rem] sm:text-7xl lg:text-[8.5rem]">
              {project.title}
            </h1>
            <dl className="eyebrow mt-12 grid grid-cols-2 gap-6 border-t border-rule pt-6 text-ink-2 md:grid-cols-4">
              {[
                ["Role", project.role],
                ["Context", project.context],
                ["When", project.year],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd className="mt-1 normal-case tracking-normal text-ink">{v}</dd>
                </div>
              ))}
              {project.links.length > 0 && (
                <div>
                  <dt>Links</dt>
                  <dd className="mt-1">
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ulink text-ink"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </header>

          <div className="shell mt-20 grid grid-cols-1 gap-20 md:mt-32">
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-12" data-reveal>
              <div className="lg:col-span-3">
                <Label>Problem</Label>
              </div>
              <p className="font-display text-3xl leading-[1.12] md:text-5xl lg:col-span-9">
                {project.problem}
              </p>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-12" data-reveal>
              <div className="lg:col-span-3">
                <Label>What I built</Label>
              </div>
              <p className="max-w-[56ch] text-xl lg:col-span-9">{project.built}</p>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <Label>Architecture</Label>
              </div>
              <div className="lg:col-span-9">
                <Pipeline stages={project.pipeline} label={`${project.title} architecture`} />
              </div>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <Label>Technical decisions</Label>
              </div>
              <ol className="border-t border-rule lg:col-span-9">
                {project.decisions.map((d, i) => (
                  <li
                    key={d.title}
                    data-reveal
                    className="grid grid-cols-1 gap-4 border-b border-rule py-9 md:grid-cols-[3rem_1fr]"
                  >
                    <span className="eyebrow pt-2 text-signal-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display-tight text-3xl md:text-5xl">{d.title}</h2>
                      <p className="mt-4 max-w-[60ch]">{d.body}</p>
                      {d.rejected && (
                        <p className="mt-4 max-w-[60ch] text-ink-2">
                          <span className="eyebrow mr-2 text-ink">Rejected</span>
                          {d.rejected}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-12" data-reveal>
              <div className="lg:col-span-3">
                <Label>Impact</Label>
              </div>
              <div className="lg:col-span-9">
                <ImpactList items={project.impact} />
              </div>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-12" data-reveal>
              <div className="lg:col-span-3">
                <Label>Stack</Label>
              </div>
              <div className="lg:col-span-9">
                <TagList items={project.stack} />
              </div>
            </section>
          </div>
        </article>

        <nav aria-label="Next case study" className="bg-inv-bg text-inv-fg">
          <Link
            href={`/work/${next.slug}`}
            className="shell group block py-16 md:py-24 [--ink-2:var(--inv-2)]"
          >
            <span className="eyebrow text-inv-2">Next case study</span>
            <span className="font-display-tight mt-4 flex items-end justify-between gap-6 text-4xl md:text-7xl">
              <span className="max-w-[20ch]">{next.title}</span>
              <Arrow className="row-arrow mb-2 size-8 shrink-0 md:size-14" />
            </span>
          </Link>
        </nav>
      </main>
      <SiteFooter />
    </>
  )
}
