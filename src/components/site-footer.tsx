import { profile } from "@/content/profile"

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="shell eyebrow flex flex-col gap-2 text-ink-2 md:flex-row md:justify-between">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Set in Instrument Serif, Geist &amp; Geist Mono</span>
        <a
          href="#top"
          className="ulink w-fit text-ink"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
