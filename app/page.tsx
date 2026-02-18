"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Github, Linkedin, Bot, User, QrCode, ChevronRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { ExperienceItem } from "./components/ExperienceItem";
import { Clock } from "./components/Clock";
import { useState, useCallback } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { m, AnimatePresence } from "framer-motion";
import { links, mailto } from "./config/links";
import { projects } from "./config/projects";
import { ProjectCard } from "./components/ProjectCard";
import { caseStudies } from "./config/case-studies";
import { CaseStudyCard } from "./components/CaseStudyCard";
import { certifications } from "./config/certifications";
import { articles } from "./config/writings";

const TechStack = dynamic(() => import("./components/TechStack").then((m) => ({ default: m.TechStack })), {
  ssr: true,
});

const QRCodeModal = dynamic(
  () => import("./components/QRCodeModal").then((m) => ({ default: m.QRCodeModal })),
  { ssr: false }
);

const AgentModeView = dynamic(
  () => import("./components/AgentModeView").then((m) => ({ default: m.AgentModeView })),
  { ssr: false }
);

export default function Home() {
  const [showQR, setShowQR] = useState(false);
  const [mode, setMode] = useState<"human" | "agent">("human");

  const closeQR = useCallback(() => setShowQR(false), []);

  return (
    <div className={`relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300`}>
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
            id="main-content"
            key="human"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex w-full max-w-2xl flex-col items-center text-center"
          >
            {/* Profile Image */}
            <div className="group relative mb-2 h-40 w-40 grayscale filter sm:h-56 sm:w-56 overflow-hidden transition-all duration-500 hover:grayscale-0">
              <Image
                src="/image/bg/me.webp"
                alt="Profile"
                fill
                sizes="(max-width: 640px) 160px, 224px"
                className="object-contain transition-all duration-700"
                priority
              />
            </div>

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
                A software engineer focused on{" "}
                <a href="https://en.wikipedia.org/wiki/Solution_architecture" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black dark:hover:text-white transition-colors">system design and architecture</a>. I build full-stack platforms and make the structural decisions that determine how they scale, fail, and evolve — data modeling, service boundaries, caching strategy, deployment pipelines.
              </p>
              <p>
                Currently engineering at{" "}
                <span className="text-black dark:text-white font-medium">MetaruneLabs</span>{" "}
                and studying Software Engineering at{" "}
                <span className="text-black dark:text-white font-medium">SLIIT</span>. In a world where AI writes the straightforward code, I focus on the decisions it can&apos;t make: what to build, how to structure it, and what tradeoffs to accept.
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
                  <div className="space-y-3">
                    <p>Designed and built the core platform architecture — a multi-tenant web application serving multiple client products from a shared infrastructure using Next.js, Node.js, and PostgreSQL.</p>
                    <p>Owned end-to-end feature delivery from database schema design through API layer to frontend, making key decisions on data modeling, caching strategy with Redis, and service decomposition.</p>
                    <p>Set up CI/CD pipelines with Docker and AWS, reducing deployment friction and improving release confidence across the team.</p>
                    <p>Introduced structured code review practices and architectural documentation, establishing patterns that the team continues to follow.</p>
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
                The tools I use to design, build, and operate systems — from frontend delivery through backend services to cloud infrastructure:
              </p>
              <TechStack />
            </div>

            {/* Projects Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Projects
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Systems I&apos;ve designed and built. Each one taught me something about architecture, tradeoffs, and shipping real software.
              </p>
              <div className="space-y-6">
                {projects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </div>

            {/* Architecture Case Studies Section */}
            <div id="case-studies" className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Architecture Case Studies
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Deep dives into how I thought about specific systems — context, constraints, alternatives rejected, and lessons learned.
              </p>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {caseStudies.slice(0, 2).map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                ))}
              </div>
              <Link
                href="/case-studies"
                className="mt-6 flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
              >
                View more
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Certifications & Learning Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Certifications & Learning
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                Actively pursuing certifications to formalize my architecture knowledge and deepen cloud expertise.
              </p>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                  >
                    <div className="flex items-center gap-2">
                      {cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-black dark:text-white underline underline-offset-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          {cert.name}
                        </a>
                      ) : (
                        <span className="font-medium text-black dark:text-white">
                          {cert.name}
                        </span>
                      )}
                      {cert.status === "in-progress" && (
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-800 rounded-full px-2.5 py-0.5">
                          In Progress
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      {cert.issuer}, {cert.year}
                    </span>
                  </div>
                ))}
              </div>
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

            {/* Writings Section */}
            <div className="mb-16 w-full text-left">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Writings
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                I write about system design, architecture patterns, and lessons from building real software. Featured articles below, more on{" "}
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
              <div className="space-y-4">
                {articles.map((article) => (
                  <a
                    key={article.title}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-gray-200 dark:border-gray-800 p-5 sm:p-6 transition-all duration-300 hover:border-black dark:hover:border-white"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <span className="font-medium text-black dark:text-white">
                        {article.title}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">
                        {article.platform} &middot; {article.date}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {article.description}
                    </p>
                  </a>
                ))}
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
      <nav role="navigation" aria-label="Social links" className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-gray-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all hover:bg-white/90 dark:hover:bg-zinc-900 sm:gap-6 sm:px-6 z-50">
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
