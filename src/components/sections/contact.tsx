import { CopyEmail } from "@/components/ui/copy-email"
import { ArrowUpRight } from "@/components/ui/icons"
import { SectionHead } from "@/components/ui/section-head"
import { vars } from "@/components/ui/text"
import { profile } from "@/content/profile"

export function Contact() {
  return (
    <section id="contact" data-tone="graphite" className="relative section-y">
      <div className="shell">
        <SectionHead index="07" label="Contact" lines={["Let's", "talk"]} />

        <div className="grid gap-10 lg:grid-cols-12">
          <p className="f-head text-[clamp(1.75rem,3.6vw,3.25rem)] lg:col-span-7" data-reveal>
            Building something where the AI part has to work in production? I am glad to talk about
            roles, projects and hard systems problems.
          </p>
        </div>

        <div className="mt-14 md:mt-20" data-reveal style={vars({ "--d": 1 })}>
          <a
            href={`mailto:${profile.email}`}
            className="mark-link f-display inline-block text-[clamp(2rem,7vw,7.5rem)] normal-case leading-[1]"
          >
            {profile.email.split("@")[0]}
            <wbr />@{profile.email.split("@")[1]}
          </a>
          <div className="mt-8">
            <CopyEmail email={profile.email} />
          </div>
        </div>

        <ul className="mt-20 grid border-t border-line-strong sm:grid-cols-2 lg:grid-cols-4">
          {profile.links.map((l, i) => (
            <li
              key={l.href}
              data-reveal
              style={vars({ "--d": i })}
              className="border-b border-line-strong lg:border-b-0"
            >
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 py-6 pr-6"
              >
                <span>
                  <span className="mono-label block text-mute">{l.label}</span>
                  <span className="f-title mt-1 block text-xl transition-transform duration-500 [transition-timing-function:var(--ease)] group-hover:translate-x-1">
                    {l.handle}
                  </span>
                </span>
                <ArrowUpRight className="mt-1 size-4 transition-transform duration-500 [transition-timing-function:var(--ease)] group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
