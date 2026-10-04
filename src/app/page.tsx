import { SectionRail } from "@/components/nav/section-rail"
import { Capabilities } from "@/components/sections/capabilities"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Profile } from "@/components/sections/profile"
import { Stack } from "@/components/sections/stack"
import { Work } from "@/components/sections/work"
import { Writing } from "@/components/sections/writing"
import { profile } from "@/content/profile"

const websiteLd = {
  "@type": "WebSite",
  "@id": `${profile.url}/#website`,
  url: profile.url,
  name: `${profile.name} — AI Engineer`,
  description: profile.description,
  inLanguage: "en",
  publisher: { "@id": `${profile.url}/#person` },
}

const personLd = {
  "@type": "Person",
  "@id": `${profile.url}/#person`,
  name: profile.name,
  description: profile.description,
  image: `${profile.url}/opengraph-image`,
  mainEntityOfPage: { "@id": `${profile.url}/#website` },
  jobTitle: "AI Engineer",
  url: profile.url,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
  worksFor: { "@type": "Organization", name: "Metarune Labs" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "SLIIT" },
  knowsAbout: [
    "Generative AI",
    "LLM applications",
    "AI agents",
    "Retrieval-augmented generation",
    "Distributed systems",
    "AWS",
  ],
  sameAs: profile.links.map((l) => l.href),
}

const jsonLd = { "@context": "https://schema.org", "@graph": [websiteLd, personLd] }

export default function HomePage() {
  return (
    <>
      <Hero />
      <Profile />
      <Capabilities />
      <Work />
      <Stack />
      <Experience />
      <Writing />
      <Contact />
      <SectionRail />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  )
}
