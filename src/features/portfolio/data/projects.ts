import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "sustainsite",
    slug: "sustainsite",
    title: "Sustainable Construction Project Management (SustainSite)",
    period: {
      start: "01.2026",
    },
    coverImage: "/projects-image/sustainsite.png",
    skills: [
      "Express",
      "TypeScript",
      "MongoDB",
      "React",
      "Vite",
      "Turborepo",
      "JWT",
      "Google Maps",
      "Cloudinary",
    ],
    description:
      "Full-stack app for construction project lifecycle, real-time sustainability metrics, document compliance, and resource management.",
    isExpanded: true,
  },
  {
    id: "blooso",
    slug: "blooso",
    title: "Blooso",
    period: {
      start: "06.2025",
    },
    skills: [
      "Next.js",
      "React",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "Turborepo",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    description:
      "Premium booking platform for **beauty & wellness** businesses — **24/7** appointments, NestJS + Prisma API, Next.js web app, Stripe & Resend in a **Turborepo** monorepo.",
    isExpanded: false,
  },
  {
    id: "wallflox",
    slug: "wallflox",
    title: "Wallflox",
    link: "https://wallflox-2opr.vercel.app/",
    period: {
      start: "08.2025",
    },
    coverImage: "/projects-image/wallflox.png",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Leonardo AI",
      "Google Gemini",
      "Cloudflare R2",
      "Vercel",
      "shadcn/ui",
    ],
    description:
      "**AI-driven wallpaper** platform — Leonardo Phoenix + **Gemini** orchestration, **Convex** real-time backend, **Clerk** auth, **R2** storage; Next.js 16, Tailwind v4, glassmorphism & Lenis.",
    isExpanded: false,
  },
  {
    id: "shiftgain",
    slug: "shiftgain",
    title: "ShiftGain",
    period: {
      start: "09.2025",
    },
    coverImage: "/projects-image/shiftgain.png",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Zustand",
      "pdf-lib",
      "WebAssembly",
      "Web Workers",
      "TypeScript",
    ],
    description:
      "**Privacy-first** image & PDF tooling — compress, convert, and optimize **entirely in the browser** with **Zustand**, **Web Workers**, **WASM**, and **pdf-lib**; Next.js 15, Tailwind v4, zero uploads.",
    isExpanded: false,
  },
  {
    id: "reliable-queue",
    slug: "reliable-queue",
    title: "Reliable Queue",
    link: "https://reliable-queue-web.vercel.app/",
    period: {
      start: "10.2025",
    },
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "NPM",
      "Task queue",
      "Retry logic",
      "Browser APIs",
    ],
    description:
      "Open-source **`@aplanka/reliable-queue`** — task queue for JS/TS with **retries**, **concurrency**, **priority**, **persistence**, events, and **React** hooks; zero-dependency, production-focused. **MIT**.",
    isExpanded: false,
  },
]
