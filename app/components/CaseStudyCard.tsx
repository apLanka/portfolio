"use client";

import { memo } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { CaseStudy } from "../config/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

function CaseStudyCardComponent({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block py-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <span className="font-medium text-black dark:text-white">
            {caseStudy.title}
          </span>
          <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {caseStudy.summary}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-800 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ChevronRight className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
      </div>
    </Link>
  );
}

export const CaseStudyCard = memo(CaseStudyCardComponent);
