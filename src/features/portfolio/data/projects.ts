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
      "Full-stack app for construction project lifecycle, real-time sustainability metrics, document compliance, and resource management — **SE3040** coursework aligned with **SDG 9**.",
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
    id: "portfolio",
    title: "Portfolio",
    period: {
      start: "04.2025",
    },
    link: "https://github.com/apLanka/portfolio",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Design systems",
    ],
    description:
      "Personal site and resume — structured as architecture case studies, projects, and an agent-readable profile.",
    isExpanded: false,
  },
]
