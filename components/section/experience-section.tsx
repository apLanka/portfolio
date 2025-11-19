"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: "1",
    company: "Tech Company",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: [
      "Led development of scalable web applications using React and Node.js",
      "Architected microservices infrastructure improving performance by 40%",
      "Mentored junior developers and established coding best practices",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    id: "2",
    company: "Startup Inc",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: [
      "Built responsive web applications from scratch",
      "Collaborated with cross-functional teams to deliver features",
      "Optimized application performance and user experience",
    ],
    technologies: ["Next.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 - 2020",
    description: [
      "Developed client-facing web applications",
      "Implemented modern UI/UX designs",
      "Ensured cross-browser compatibility",
    ],
    technologies: ["React", "JavaScript", "CSS", "HTML"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <BlurFade delay={0} duration={0.6} blur="8px" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-main-text-gradient bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>
        </BlurFade>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6B4D9E] via-[#6B4D9E]/50 to-transparent transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <BlurFade
                key={exp.id}
                delay={0.1 + index * 0.1}
                duration={0.6}
                blur="8px"
                direction="up"
              >
                <div className="relative flex items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-[#6B4D9E] border-4 border-black" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 ml-4 md:ml-0">
                    <div
                      className={cn(
                        "p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#6B4D9E]/50 transition-all",
                        index % 2 === 0 ? "md:mr-auto md:max-w-[45%]" : "md:ml-auto md:max-w-[45%]"
                      )}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <span className="text-sm text-[#6B4D9E] font-medium">{exp.period}</span>
                      </div>
                      <p className="text-[#6B4D9E] font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                            <span className="text-[#6B4D9E] mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-[#6B4D9E]/20 border border-[#6B4D9E]/30 text-[#6B4D9E]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

