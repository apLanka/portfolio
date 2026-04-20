import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Pasindu",
  lastName: "Lanka",
  displayName: "Pasindu Lanka",
  username: "aplanka",
  gender: "male",
  pronouns: "he/him",
  bio: "Software engineer @ Metarune — real-time & distributed systems on AWS. Colombo.",
  flipSentences: [
    "100K+ scale · real-time · event-driven · AWS.",
    "SWE @ Metarune · AWS · mobile · Unity.",
    "SLIIT · B.Sc. Software Engineering · 2027.",
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
- **3+ years** designing and scaling **distributed systems** for **real-time** applications at **100K+** user scale and **$10M+** revenue impact. Specialized in **event-driven** architectures, **serverless** systems, and **real-time communication** using **AWS** and modern full-stack technologies — leading teams, owning architecture, and shipping under production constraints.
- **Metarune Labs** — **Software Engineer** (Apr 2023 – present); **Trainee Software Engineer** (Feb – Apr 2023): architected full-stack features for a **real-time chat** platform; **event-driven serverless** workflows (**AWS Lambda**, **SQS**); **led a frontend team of 7+** engineers (PR standards, quality, mentoring); **React Native** mobile apps; **Unity (C#)** and **Node.js** for gameplay and backend; **Jest**, **Vitest**, and **Playwright** across frontend and backend.
- **SLIIT** — **B.Sc. in Software Engineering**, expected **2027**. Relevant coursework: Distributed Systems, Software Architecture, Application Frameworks, Data Structures & Algorithms.
- Based in **Colombo, Sri Lanka**.
`,
  avatar: "/brand/avatar.png",
  ogImage:
    "https://www.pasindulanka.me/og/simple?title=Pasindu%20Lanka&description=Software%20engineer%20%E2%80%94%20Metarune%20%C2%B7%20AWS%20%C2%B7%20real-time%20systems",
  namePronunciationUrl: "",
  keywords: [
    "pasindu lanka",
    "aplanka",
    "software engineer",
    "full-stack",
    "distributed systems",
    "event-driven",
    "aws",
    "serverless",
    "react native",
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
