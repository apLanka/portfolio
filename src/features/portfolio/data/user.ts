import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Pasindu",
  lastName: "Lanka",
  displayName: "Pasindu Lanka",
  username: "aplanka",
  gender: "male",
  pronouns: "he/him",
  bio: "Software engineer focused on full-stack delivery, system design, and the infrastructure choices that make products reliable at scale. Based in Colombo.",
  flipSentences: [
    "Software engineer focused on full-stack and architecture.",
    "Building products at Metarune Labs.",
    "B.Sc. Software Engineering at SLIIT — expected 2027.",
  ],
  address: "Colombo, Sri Lanka",
  email: "cGFzaW5kdWxhbmthYUBnbWFpbC5jb20=", // pasindulankaa@gmail.com
  phoneNumber: "Kzk0NzA1NzQ3NTQ5", // +94705747549 — included in downloadable vCard
  website: "https://www.pasindulanka.me",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Metarune Labs",
      website: "https://metarunelabs.com",
      experienceId: "metarunelabs",
    },
  ],
  about: `
- Full-stack software engineer: **APIs**, relational **data modeling**, **caching**, and UI delivery — with an eye on deployment, observability, and maintainability as systems grow.
- **Metarune Labs** (from 2023): started as a **trainee software engineer**, now **software engineer** — building and operating features on a **multi-tenant** web platform.
- Core tools: **TypeScript**, **Next.js**, **Node.js**, **PostgreSQL**, **Redis**, **Docker**, and **AWS**-style cloud workflows.
- **SLIIT** — **B.Sc. (Hons) in Software Engineering**, expected **2027**; coursework includes algorithms, software engineering, databases, and computer networks.
- Based in **Colombo, Sri Lanka**.
`,
  avatar: "/image/bg/me.webp",
  ogImage:
    "https://www.pasindulanka.me/og/simple?title=Pasindu%20Lanka&description=Software%20engineer%20focused%20on%20full-stack%20delivery%20and%20system%20design",
  namePronunciationUrl: "",
  keywords: [
    "pasindu lanka",
    "aplanka",
    "software engineer",
    "full-stack",
    "system design",
    "next.js",
    "colombo",
    "sri lanka",
    "metarune labs",
    "sliit",
  ],
  timeZone: "Asia/Colombo",
  dateCreated: "2023-01-01",
}
