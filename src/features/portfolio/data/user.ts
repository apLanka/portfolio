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
- Software engineer with experience across the stack: APIs, data modeling, caching, and frontend delivery — with attention to observability, deployment, and long-term maintainability.
- Currently at **Metarune Labs** (from a trainee role through to software engineer) and pursuing a **B.Sc. (Hons) in Software Engineering** at **SLIIT**, expected **2027**.
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
