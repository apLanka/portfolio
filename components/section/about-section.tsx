"use client"

import { MagicCard } from "@/components/ui/magic-card"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"

const aboutCards = [
  {
    title: "Full Stack Developer",
    description: "Building end-to-end solutions with modern web technologies and best practices.",
    icon: "💻",
  },
  {
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, scalable solutions.",
    icon: "🧩",
  },
  {
    title: "Continuous Learner",
    description: "Always exploring new technologies and improving my craft.",
    icon: "📚",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BlurFade delay={0} duration={0.6} blur="8px" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-main-text-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Passionate developer crafting exceptional digital experiences
            </p>
          </div>
        </BlurFade>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <BlurFade delay={0.1} duration={0.6} blur="8px" direction="up">
            <div className="space-y-6">
              <p className="text-white/70 text-lg leading-relaxed">
                I&apos;m a passionate full-stack developer with a love for creating
                exceptional user experiences. With expertise spanning web and mobile
                development, I bring ideas to life through clean code and innovative solutions.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                My journey in software development has been driven by curiosity and a
                commitment to continuous learning. I thrive on solving complex problems
                and building applications that make a difference.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} duration={0.6} blur="8px" direction="up">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-white/60">Available for remote work worldwide</p>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">Status</h3>
                <p className="text-white/60">Open to new opportunities</p>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Animated Cards */}
        <BlurFade delay={0.3} duration={0.6} blur="8px" direction="up">
          <div className="grid md:grid-cols-3 gap-6">
            {aboutCards.map((card, index) => (
              <MagicCard
                key={index}
                className="p-6 h-full"
                gradientFrom="#6B4D9E"
                gradientTo="#9E7AFF"
              >
                <div className="space-y-4">
                  <div className="text-4xl">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </MagicCard>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

