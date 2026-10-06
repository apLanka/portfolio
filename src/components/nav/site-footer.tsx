import { LocalTime } from "@/components/nav/local-time"
import { profile } from "@/content/profile"

export function SiteFooter() {
  return (
    <footer data-tone="graphite" className="relative bg-base">
      <div className="shell mono-label flex flex-col gap-4 border-t border-line py-8 text-mute md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} <span className="mx-2">/</span> {profile.role}
        </p>
        <p>
          {profile.location} <span className="mx-2">/</span> <LocalTime timeZone={profile.timeZone} />
        </p>
        <a href="#top" className="mark-link w-fit py-3 text-fg">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
