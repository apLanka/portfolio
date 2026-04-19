import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Pasindu",
  lastName: "Lanka",
  displayName: "Pasindu Lanka",
  username: "aplanka",
  gender: "male",
  pronouns: "he/him",
  bio: "Software engineer focused on system design, full-stack platforms, and the structural decisions that determine how systems scale, fail, and evolve.",
  flipSentences: [
    "Software engineer focused on system design.",
    "Building full-stack platforms at MetaruneLabs.",
    "Studying Software Engineering at SLIIT.",
  ],
  address: "Sri Lanka",
  email: "cGFzaW5kdWxhbmthYUBnbWFpbC5jb20=", // pasindulankaa@gmail.com
  website: "https://pasindulanka.com",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Full-Stack Software Engineer",
      company: "MetaruneLabs",
      website: "https://metarunelabs.com",
      experienceId: "metarunelabs",
    },
  ],
  about: `
- Software engineer focused on [system design and architecture](https://en.wikipedia.org/wiki/Solution_architecture): data modeling, service boundaries, caching strategy, and deployment pipelines.
- Currently engineering at **MetaruneLabs** and studying Software Engineering at **SLIIT**. I care about what to build, how to structure it, and which tradeoffs to accept.
`,
  avatar: "/image/bg/me.webp",
  ogImage: "https://pasindulanka.com/og/simple?title=Pasindu%20Lanka&description=Software%20engineer%20focused%20on%20system%20design",
  namePronunciationUrl: "",
  keywords: [
    "pasindu lanka",
    "aplanka",
    "software engineer",
    "full-stack",
    "system design",
    "next.js",
    "sri lanka",
    "metarunelabs",
    "sliit",
  ],
  timeZone: "Asia/Colombo",
  dateCreated: "2023-01-01",
}
