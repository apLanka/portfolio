"use client"

import { ComponentPropsWithoutRef } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"
import { Project } from "@/data/projects"

interface ProjectCardProps extends ComponentPropsWithoutRef<"div"> {
  project: Project
  className?: string
}

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
  const Icon = project.icon

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-[#0D0D0D] border border-white/10",
        "transform-gpu transition-all duration-300",
        "hover:border-[#6B4D9E]/50 hover:shadow-lg hover:shadow-[#6B4D9E]/10",
        className
      )}
      {...props}
    >
      <BorderBeam
        size={100}
        duration={8}
        colorFrom="#6B4D9E"
        colorTo="#9E7AFF"
        borderWidth={2}
      />
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.background}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Icon and Title */}
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#6B4D9E]/10 group-hover:border-[#6B4D9E]/30 transition-colors">
              <Icon className="h-6 w-6 text-[#6B4D9E] group-hover:text-[#6B4D9E]" />
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
              {project.name}
            </h3>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/70"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/70">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-4">
          <Button
            variant="link"
            asChild
            size="sm"
            className="p-0 text-[#6B4D9E] hover:text-[#6B4D9E]/80 group-hover:translate-x-1 transition-transform"
          >
            <Link href={project.liveUrl || project.githubUrl || "#"}>
              {project.cta}
              <ArrowRightIcon className="ms-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

