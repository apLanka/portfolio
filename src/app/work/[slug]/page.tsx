import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Flow } from "@/components/figures/flow"
import { CountUp } from "@/components/motion/count-up"
import { TLink } from "@/components/motion/page-transition"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@/components/ui/icons"
import { RiseWords, ScrollWords, vars } from "@/components/ui/text"
import { getProject, projects } from "@/content/projects"
import { profile } from "@/content/profile"

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
    openGraph: {
      title: project.title,
      description: project.problem,
      type: "article",
      url: `/work/${slug}`,
      siteName: profile.name,
      authors: [profile.name],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.problem },
  }
}

function Label({ children, n }: { children: React.ReactNode; n: string }) {
  return (
    <p className="mono-label flex items-center gap-3 text-mute">
      <span className="text-fg tabular">{n}</span>
      <span aria-hidden>/</span>
      {children}
    </p>
  )
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]
  const nextN = String(((index + 1) % projects.length) + 1).padStart(2, "0")

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: project.title,
    description: project.problem,
    author: { "@type": "Person", name: profile.name, url: profile.url },
    publisher: { "@type": "Person", name: profile.name, url: profile.url },
    url: `${profile.url}/work/${project.slug}`,
    mainEntityOfPage: `${profile.url}/work/${project.slug}`,
    keywords: project.stack.join(", "),
    inLanguage: "en",
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: profile.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${profile.url}/#work` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${profile.url}/work/${project.slug}`,
      },
    ],
  }

  return (
    <article>
      <section id="top" data-tone="graphite" className="relative pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="shell">
          <TLink
            href="/#work"
            label="Work"
            className="mono-label hero-in group mb-10 inline-flex items-center gap-2 py-2 text-mute transition-colors hover:text-fg md:mb-16"
          >
            <ArrowLeft className="transition-transform duration-500 group-hover:-translate-x-1" />
            All case studies
          </TLink>

          <p className="mono-label hero-in mb-6 text-mute" style={vars({ "--d": 1 })}>
            <span className="text-fg tabular">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            <span className="tabular">{String(projects.length).padStart(2, "0")}</span>
            <span className="mx-3">—</span>
            {project.kicker}
          </p>

          <h1>
            <RiseWords
              text={project.title}
              className="f-display block text-[clamp(3.1rem,10.5vw,9.5rem)]"
              start={2}
            />
          </h1>

          <dl
            className="hero-in mono-label mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line-strong pt-5 md:mt-20 md:grid-cols-4"
            style={vars({ "--d": 8 })}
          >
            {[
              ["Role", project.role],
              ["Context", project.context],
              ["When", project.year],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-mute">{k}</dt>
                <dd className="mt-1 normal-case tracking-normal text-fg [font-family:var(--font-sans)] text-base">
                  {v}
                </dd>
              </div>
            ))}
            {project.links.length > 0 ? (
              <div>
                <dt className="text-mute">Links</dt>
                <dd className="mt-1 flex flex-col gap-1">
                  {project.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mark-link inline-flex w-fit items-center gap-1 py-0.5"
                    >
                      {l.label} <ArrowUpRight />
                    </a>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </section>

      <section data-tone="graphite" className="relative section-y pt-8 md:pt-16">
        <div className="shell grid grid-cols-1 gap-16 md:gap-24">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <Label n="01">Problem</Label>
            </div>
            <ScrollWords
              text={project.problem}
              className="f-head text-[clamp(1.9rem,4vw,3.75rem)] lg:col-span-9"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8" data-reveal>
            <div className="lg:col-span-3">
              <Label n="02">What I built</Label>
            </div>
            <p className="max-w-[56ch] text-xl lg:col-span-6 lg:col-start-4 lg:text-2xl">
              {project.built}
            </p>
          </div>
        </div>
      </section>

      <section data-tone="bone" className="relative bg-base py-[clamp(4rem,9vw,8rem)] text-fg">
        <div className="shell">
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <Label n="03">Architecture</Label>
            <p className="mono-label hidden text-mute md:block">Hover a stage to inspect</p>
          </div>
          <Flow stages={project.pipeline} label={`${project.title}: architecture`} large />
        </div>
      </section>

      <section data-tone="graphite" className="relative section-y">
        <div className="shell">
          <div className="mb-10 md:mb-16">
            <Label n="04">Technical decisions</Label>
          </div>
          <ol className="border-t border-line-strong">
            {project.decisions.map((d, i) => (
              <li
                key={d.title}
                data-reveal
                className="grid grid-cols-1 gap-6 border-b border-line-strong py-10 md:py-16 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-6">
                  <span className="f-display block text-6xl text-mute md:text-8xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="f-head mt-4 text-[clamp(1.9rem,3.8vw,3.5rem)]">{d.title}</h2>
                </div>
                <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
                  <p className="text-lg">{d.body}</p>
                  {d.rejected ? (
                    <div className="mt-6 border-l-2 border-hi pl-4">
                      <p className="mono-label text-hi">Rejected</p>
                      <p className="mt-1 text-mute">{d.rejected}</p>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-tone="hi" className="relative bg-base py-[clamp(4rem,9vw,8rem)] text-fg">
        <div className="shell">
          <div className="mb-10 md:mb-14">
            <Label n="05">Impact</Label>
          </div>
          <ul className="grid grid-cols-1 gap-px border-t border-line-strong sm:grid-cols-2 lg:grid-cols-3">
            {project.impact.map((m, i) => (
              <li key={i} data-reveal style={vars({ "--d": i })} className="py-6 pr-6 md:py-8">
                {m.value ? (
                  <p className="f-display text-[clamp(4.5rem,11vw,9rem)]">
                    <CountUp value={m.value} />
                  </p>
                ) : null}
                <p className={`${m.value ? "mt-2" : "f-title text-2xl md:text-3xl"} max-w-[32ch]`}>
                  {m.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-line-strong pt-5 md:mt-20">
            <p className="mono-label text-mute">Stack</p>
            <p className="f-head mt-3 text-[clamp(1.6rem,3.2vw,2.75rem)]">
              {project.stack.join(" / ")}
            </p>
          </div>
        </div>
      </section>

      <nav aria-label="Next case study" data-tone="bone" className="relative bg-base text-fg">
        <TLink
          href={`/work/${next.slug}`}
          label={`Case ${nextN}`}
          className="shell group block py-16 md:py-28"
        >
          <span className="mono-label text-mute">
            Next case study <span className="mx-2">/</span> {nextN}
          </span>
          <span className="mt-6 flex items-end justify-between gap-8">
            <span className="f-display max-w-[24ch] text-[clamp(2.25rem,6.6vw,6.25rem)] transition-transform duration-700 [transition-timing-function:var(--ease)] group-hover:translate-x-3">
              {next.title}
            </span>
            <span className="mb-2 grid size-14 shrink-0 place-items-center rounded-full bg-hi text-hi-ink transition-transform duration-500 [transition-timing-function:var(--ease)] group-hover:scale-110 md:size-24">
              <ArrowRight className="size-6 md:size-8" />
            </span>
          </span>
        </TLink>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLd, breadcrumbLd]).replace(/</g, "\\u003c"),
        }}
      />
    </article>
  )
}
