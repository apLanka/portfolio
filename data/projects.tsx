import React from "react"
import { Code2, Globe, Smartphone, Database, Zap, Shield } from "lucide-react"

export interface Project {
  id: string
  name: string
  description: string
  longDescription?: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  icon: React.ElementType
  background: React.ReactNode
  cta: string
}

export const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    icon: Globe,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
    ),
    cta: "View Project",
  },
  {
    id: "2",
    name: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication.",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    icon: Smartphone,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
    ),
    cta: "View Project",
  },
  {
    id: "3",
    name: "API Gateway",
    description: "High-performance API gateway with rate limiting and authentication.",
    technologies: ["Node.js", "Redis", "Docker", "Kubernetes"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    icon: Zap,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20" />
    ),
    cta: "View Project",
  },
  {
    id: "4",
    name: "Data Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    icon: Database,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
    ),
    cta: "View Project",
  },
  {
    id: "5",
    name: "Code Review Tool",
    description: "AI-powered code review platform with automated suggestions and collaboration.",
    technologies: ["Next.js", "OpenAI", "GitHub API", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    icon: Code2,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
    ),
    cta: "View Project",
  },
  {
    id: "6",
    name: "Security Scanner",
    description: "Automated security vulnerability scanner for web applications.",
    technologies: ["Python", "FastAPI", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    icon: Shield,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-rose-500/20" />
    ),
    cta: "View Project",
  },
]

