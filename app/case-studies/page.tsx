import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "../config/case-studies";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { ThemeToggle } from "../components/ThemeToggle";
import { links } from "../config/links";

export const metadata = {
  title: "Architecture Case Studies | Pasindu Lanka",
  description:
    "Deep dives into how I thought about specific systems — context, constraints, alternatives rejected, and lessons learned.",
  openGraph: {
    title: "Architecture Case Studies | Pasindu Lanka",
    description:
      "Deep dives into how I thought about specific systems — context, constraints, alternatives rejected, and lessons learned.",
    url: `${links.website}/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return (
    <div
      role="main"
      className="relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300"
    >
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-2xl text-left">
        <Link
          href="/#case-studies"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
          Architecture Case Studies
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Deep dives into how I thought about specific systems — context,
          constraints, alternatives rejected, and lessons learned.
        </p>

        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </div>
  );
}
