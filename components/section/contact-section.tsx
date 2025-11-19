"use client"

import { useRef } from "react"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { BlurFade } from "@/components/ui/blur-fade"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "#6B4D9E",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "#6B4D9E",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your@email.com",
    color: "#6B4D9E",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    color: "#6B4D9E",
  },
]

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const githubRef = useRef<HTMLDivElement>(null)
  const linkedinRef = useRef<HTMLDivElement>(null)
  const emailRef = useRef<HTMLDivElement>(null)
  const twitterRef = useRef<HTMLDivElement>(null)

  const refs = [githubRef, linkedinRef, emailRef, twitterRef]

  return (
    <section id="contact" className="relative w-full min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <BlurFade delay={0} duration={0.6} blur="8px" direction="up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-main-text-gradient bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Let&apos;s connect and build something amazing together
            </p>
          </div>
        </BlurFade>

        {/* Animated Beam Container */}
        <BlurFade delay={0.1} duration={0.6} blur="8px" direction="up">
          <div
            ref={containerRef}
            className="relative h-[500px] w-full flex items-center justify-center"
          >
            {/* Center Circle */}
            <div
              ref={centerRef}
              className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#0D0D0D] border-2 border-[#6B4D9E]"
            >
              <Mail className="h-8 w-8 text-[#6B4D9E]" />
            </div>

            {/* Social Links */}
            {socialLinks.map((social, index) => {
              const angle = (index * 360) / socialLinks.length
              const radius = 150
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <div key={social.name}>
                  <div
                    ref={refs[index]}
                    className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0D0D0D] border-2 border-white/10 hover:border-[#6B4D9E] transition-all group cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full h-full"
                    >
                      <social.icon className="h-6 w-6 text-white/70 group-hover:text-[#6B4D9E] transition-colors" />
                    </a>
                  </div>
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={refs[index]}
                    curvature={-50}
                    duration={3}
                    delay={index * 0.2}
                    pathColor="#6B4D9E"
                    gradientStartColor="#6B4D9E"
                    gradientStopColor="#9E7AFF"
                  />
                </div>
              )
            })}
          </div>
        </BlurFade>

        {/* Contact Info */}
        <BlurFade delay={0.2} duration={0.6} blur="8px" direction="up">
          <div className="mt-16 text-center">
            <p className="text-white/60 mb-6">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            <a
              href="mailto:your@email.com"
              className="inline-block px-8 py-3 rounded-lg bg-[#0D0D0D] border border-[#6B4D9E] text-white hover:bg-[#6B4D9E]/10 transition-colors"
            >
              Send Email
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

