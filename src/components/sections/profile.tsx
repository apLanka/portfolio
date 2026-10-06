import Image from "next/image"

import { SectionHead } from "@/components/ui/section-head"
import { ScrollWords } from "@/components/ui/text"
import { profile } from "@/content/profile"

export function Profile() {
  return (
    <section id="profile" data-tone="graphite" className="relative section-y">
      <div className="shell">
        <SectionHead index="01" label="Profile" lines={["Who is", "behind it"]} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <figure className="lg:col-span-3" data-reveal>
            <div data-cursor="Hi" className="group relative aspect-[4/5] w-full max-w-[18rem] overflow-hidden bg-raised lg:max-w-none">
              <Image
                src="/brand/avatar.png"
                alt="Portrait of Pasindu Lanka"
                width={606}
                height={606}
                sizes="(min-width: 1024px) 22vw, 288px"
                className="px-img h-full w-full object-cover grayscale contrast-110 transition-[filter] duration-700 group-hover:grayscale-0"
              />
              <span className="mono-label absolute bottom-0 left-0 bg-hi px-2 py-1 text-hi-ink">
                PL-01
              </span>
            </div>
            <figcaption className="mono-label mt-3 text-mute">
              {profile.location}
              <br />
              {profile.about.note}
            </figcaption>
          </figure>

          <div className="lg:col-span-8 lg:col-start-5">
            <ScrollWords
              text={profile.about.lead}
              className="f-head text-[clamp(1.9rem,4.1vw,3.9rem)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
