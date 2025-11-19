"use client"

import { BentoGrid } from "@/components/ui/bento-grid"
import { ProjectCard } from "@/components/ui/project-card"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BlurFade delay={0} duration={0.6} blur="8px" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-main-text-gradient bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in full-stack development,
              mobile applications, and innovative solutions.
            </p>
          </div>
        </BlurFade>

        {/* Bento Grid */}
        <BlurFade delay={0.1} duration={0.6} blur="8px" direction="up">
          <BentoGrid className="auto-rows-[22rem]">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className={cn(
                  // First card spans 2 columns on large screens
                  index === 0 && "lg:col-span-2",
                  // Make cards responsive
                  "h-full"
                )}
              />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  )
}

