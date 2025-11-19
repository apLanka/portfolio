"use client"

import { IconCloud } from "@/components/ui/icon-cloud"
import { BlurFade } from "@/components/ui/blur-fade"

// Tech stack icon URLs from simple-icons CDN
const techStackIcons = [
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.simpleicons.org/nodedotjs/339933",
  "https://cdn.simpleicons.org/python/3776AB",
  "https://cdn.simpleicons.org/nextdotjs/000000",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "https://cdn.simpleicons.org/postgresql/4169E1",
  "https://cdn.simpleicons.org/mongodb/47A248",
  "https://cdn.simpleicons.org/docker/2496ED",
  "https://cdn.simpleicons.org/aws/232F3E",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/github/181717",
  "https://cdn.simpleicons.org/graphql/E10098",
  "https://cdn.simpleicons.org/redis/DC382D",
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <BlurFade delay={0} duration={0.6} blur="8px" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-main-text-gradient bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Technologies and tools I use to build modern, scalable applications
            </p>
          </div>
        </BlurFade>

        {/* Icon Cloud */}
        <BlurFade delay={0.1} duration={0.6} blur="8px" direction="up">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-2xl aspect-square">
              <IconCloud images={techStackIcons} />
            </div>
          </div>
        </BlurFade>

        {/* Tech Stack List */}
        <BlurFade delay={0.2} duration={0.6} blur="8px" direction="up">
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Python",
              "Next.js",
              "JavaScript",
              "Tailwind CSS",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "AWS",
              "Git",
              "GitHub",
              "GraphQL",
              "Redis",
            ].map((tech) => (
              <div
                key={tech}
                className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#6B4D9E]/50 hover:bg-white/10 transition-all"
              >
                <span className="text-sm text-white/70 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

