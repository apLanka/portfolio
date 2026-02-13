"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Github, Linkedin, Bot, User, QrCode } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { ExperienceItem } from "./components/ExperienceItem";
import { Clock } from "./components/Clock";
import { useState, useCallback } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { m, AnimatePresence } from "framer-motion";
import { links, mailto } from "./config/links";

const TechStack = dynamic(() => import("./components/TechStack").then((m) => ({ default: m.TechStack })), {
  ssr: true,
});

const QRCodeModal = dynamic(
  () => import("./components/QRCodeModal").then((m) => ({ default: m.QRCodeModal })),
  { ssr: false }
);

const EasterEggEffects = dynamic(
  () => import("./components/EasterEggEffects").then((m) => ({ default: m.EasterEggEffects })),
  { ssr: false }
);

const AgentModeView = dynamic(
  () => import("./components/AgentModeView").then((m) => ({ default: m.AgentModeView })),
  { ssr: false }
);

export default function Home() {
  const [showQR, setShowQR] = useState(false);
  const [mode, setMode] = useState<"human" | "agent">("human");
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const toggleEasterEgg = useCallback(() => setShowEasterEgg((prev) => !prev), []);
  const closeQR = useCallback(() => setShowQR(false), []);

  return (
    <div className={`relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300`}>
      {/* Easter Egg Effects - Lazy loaded */}
      {showEasterEgg && <EasterEggEffects />}

      {/* Theme Toggle in Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <AnimatePresence mode="wait">
        {mode === "agent" ? (
          /* Agent Mode - Markdown View (Lazy loaded) */
          <AgentModeView key="agent" />
        ) : (
          /* Human Mode - Original View */
          <m.main
            key="human"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full max-w-2xl flex-col items-center text-center"
          >
            {/* Profile Image - Easter Egg Trigger */}
            <button
              onClick={toggleEasterEgg}
              className="group relative mb-2 h-40 w-40 grayscale filter sm:h-56 sm:w-56 overflow-hidden cursor-pointer transition-all duration-500 hover:grayscale-0 active:scale-95"
              aria-label="Toggle Aura Mode"
            >
              <Image
                src="/image/bg/me.webp"
                alt="Profile"
                fill
                sizes="(max-width: 640px) 160px, 224px"
                className={`object-contain transition-all duration-700 ${showEasterEgg ? 'grayscale-0 scale-105' : 'grayscale'}`}
                priority
              />

            </button>

            {/* Hero Text */}
            <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
              Pasindu Lanka
            </h1>

            {/* Phonetic Pronunciation */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
              <span>/pəˈsɪnduː ˈlɑːŋkə/</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <span>noun</span>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <Clock />
            </div>

            {/* Bio */}
            <div className="w-full space-y-4 text-left text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
              <p>
                A full-stack developer and <a href="https://en.wikipedia.org/wiki/Product_design" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">product builder</a> crafting seamless, user-centric experiences. I specialize in balancing technical precision with modern functionality to solve real-world problems.
              </p>
              <p>
                A strategic <a href="https://en.wikipedia.org/wiki/Problem_solving" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">problem solver</a> bridging technical architecture with business outcomes. I build robust, scalable systems that align engineering decisions with long-term growth and success.
              </p>
            </div>

            {/* Experience Section */}
            <div className="mb-16 mt-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Experience
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="MetaruneLabs"
                  role="Full-Stack Software Engineer, 2023 – Present"
                  collapsible={true}
                >
                  <div className="space-y-2">
                    <p>Lead the development of scalable web and mobile applications using modern full-stack technologies, delivering high-performance features that prioritize user-centric design and seamless functionality.</p>
                    <p>Architect robust digital infrastructures that bridge complex technical requirements with strategic business outcomes, optimizing system reliability and scalability for diverse platforms.</p>
                    <p>Collaborate on product strategy and engineering best practices to foster a culture of technical excellence, ensuring impactful and sustainable results across the product lifecycle.</p>
                  </div>
                </ExperienceItem>

              </div>
            </div>

            {/* In Between These Experiences Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                In Between These Experiences
              </h2>
              <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
                <ExperienceItem
                  title="The Building Journey"
                  role=""
                  collapsible={true}
                >
                  <div className="space-y-4">
                    <p>I&apos;ve been building and experimenting with digital products across web and mobile platforms for a long time. Each project, from early tools to more complex full-stack applications, has been a lesson in balancing user-centric design with technical precision. These iterations taught me how to manage infrastructure and what it truly takes to build scalable solutions that solve real-world problems.</p>

                    <p>From small-scale side projects to architecting robust systems, the process has always been about continuous learning and staying curious. This journey has solidified my focus on bridging technical architecture with business value to create impactful, sustainable results.</p>

                    <p className="font-medium text-black dark:text-white">Consistent iteration and a focus on architecture have turned every project into a stepping stone toward building better systems.</p>
                  </div>
                </ExperienceItem>
              </div>
            </div>

            {/* Education Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Education
              </h2>
              <div className="space-y-12">
                <ExperienceItem
                  title="SLIIT University"
                  role="BSc (Hons) in Software Engineering"
                >
                  <p>2023 – 2027</p>
                </ExperienceItem>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Tech Stack
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                I&apos;m a generalist who can build with anything, but here is the core stack I use to create scalable, user-centric systems:
              </p>
              <TechStack />
            </div>

            {/* Recommendations Section - Hidden for now, uncomment when ready
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Recommendations
              </h2>
              <div className="space-y-8">
                <div className="group border-l-2 border-gray-200 dark:border-gray-800 pl-6 transition-all hover:border-black dark:hover:border-white">
                  <div className="mb-3">
                    <span className="text-base font-semibold text-black dark:text-white">
                      Client Name
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    Working with Pasindu has been an exceptional experience. His attention to detail and technical expertise consistently delivers outstanding results. His ability to understand complex requirements and translate them into elegant solutions is remarkable. Highly recommended for any development project.
                  </p>
                </div>

                <div className="group border-l-2 border-gray-200 dark:border-gray-800 pl-6 transition-all hover:border-black dark:hover:border-white">
                  <div className="mb-3">
                    <span className="text-base font-semibold text-black dark:text-white">
                      Another Client
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    Pasindu is a talented developer who brings both technical skill and creative thinking to every project. He's not just a coder — he's a problem solver who understands the bigger picture and delivers solutions that truly make a difference.
                  </p>
                </div>
              </div>
            </div>
            */}

            {/* Writings & Blogs Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Writings & Blogs
              </h2>
              <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I share my thoughts and technical insights on various platforms, focusing on web development, software architecture, and best practices. Check out my latest articles on{" "}
                <a
                  href={links.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white underline underline-offset-4 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                >
                  Medium
                </a>
                .
              </p>
            </div>



            {/* Thing about me Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Thing about me
              </h2>
              <div className="space-y-6">
                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  My perspective is defined by a fascination with how individual components converge to form a cohesive, high-performance system. I find balance in the space where technical architecture meets creative problem-solving, always seeking to understand the underlying logic of the tools I build. For me, software is about the intentional design of systems that feel as seamless as they are robust.
                </p>

                <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  I believe the most impactful solutions are those built with a long-term vision. Architecture is the art of balancing immediate needs with the structural integrity required for future scalability. By viewing every product through the lens of system design, I focus on creating digital infrastructures that are not only efficient but are inherently built to evolve.
                </p>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Connect with me on{" "}
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "} shoot an{" "}
                  <a
                    href={mailto}
                    className="text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    email
                  </a>
                </p>
              </div>
            </div>

          </m.main>
        )}
      </AnimatePresence>

      {/* Glass Island Navbar */}
      <nav className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:bg-white/90 dark:hover:bg-zinc-900 sm:gap-6 sm:px-6 z-50">
        {/* Mode Toggle Switch */}
        <div className="flex items-center">
          <button
            onClick={() => setMode(mode === "human" ? "agent" : "human")}
            className="group relative flex h-7 w-12 cursor-pointer rounded-full bg-gray-200 dark:bg-zinc-700 p-1 transition-colors duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-zinc-600 focus:outline-none"
            role="switch"
            aria-checked={mode === "agent"}
            title={`Switch to ${mode === "human" ? "agent" : "human"} mode`}
          >
            <div
              className={`flex h-5 w-5 transform items-center justify-center rounded-full bg-white dark:bg-white shadow-sm transition duration-200 ease-in-out ${mode === "agent" ? "translate-x-5" : "translate-x-0"
                }`}
            >
              {mode === "human" ? (
                <User className="h-3 w-3 text-black" />
              ) : (
                <Bot className="h-3 w-3 text-black" />
              )}
            </div>
          </button>
        </div>
        <button
          onClick={() => setShowQR(true)}
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
          aria-label="Show QR Code"
        >
          <QrCode className="h-5 w-5" />
        </button>
        <div className="h-6 w-px bg-gray-200 dark:bg-zinc-700" />
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={links.x}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110"
        >
          <FaXTwitter className="h-5 w-5" />
        </a>
      </nav>

      {/* QR Code Modal - Lazy loaded */}
      {showQR && <QRCodeModal onClose={closeQR} />}
    </div>
  );
}
