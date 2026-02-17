import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "../../config/case-studies";
import { links } from "../../config/links";
import { ThemeToggle } from "../../components/ThemeToggle";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((s) => s.slug === slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} | Pasindu Lanka`,
    description: caseStudy.summary,
    openGraph: {
      title: `${caseStudy.title} | Pasindu Lanka`,
      description: caseStudy.summary,
      url: `${links.website}/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((s) => s.slug === slug);
  if (!caseStudy) notFound();

  return (
    <div role="main" className="relative flex min-h-screen flex-col items-center bg-white dark:bg-black px-3 pt-16 text-black dark:text-white selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black pb-32 sm:px-4 sm:pt-24 sm:pb-40 overflow-x-hidden transition-colors duration-300">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <article id="main-content" className="w-full max-w-2xl text-left">
        <Link
          href="/#case-studies"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {caseStudy.title}
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {caseStudy.summary}
        </p>
        <div className="mb-12 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-800 rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-10">
          <section>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
              Context
            </span>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {caseStudy.context}
            </p>
          </section>

          <section>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
              Constraints
            </span>
            <ul className="mt-2 space-y-1">
              {caseStudy.constraints.map((constraint, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 pl-3 relative before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 dark:before:bg-gray-700"
                >
                  {constraint}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
              Architecture
            </span>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {caseStudy.architecture}
            </p>
            {caseStudy.diagram && (
              <div className="mt-4 relative w-full aspect-video rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                <Image
                  src={caseStudy.diagram}
                  alt={`Architecture diagram for ${caseStudy.title}`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </section>

          <section>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
              Alternatives Considered
            </span>
            <ul className="mt-2 space-y-1">
              {caseStudy.alternatives.map((alt, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 pl-3 relative before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 dark:before:bg-gray-700"
                >
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {alt.name}
                  </span>
                  : {alt.rejected}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
              Lessons Learned
            </span>
            <ul className="mt-2 space-y-1">
              {caseStudy.lessons.map((lesson, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 pl-3 relative before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 dark:before:bg-gray-700"
                >
                  {lesson}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
