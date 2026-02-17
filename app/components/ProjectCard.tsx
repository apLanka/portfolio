"use client";

import { memo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Project } from "../config/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCardComponent({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 sm:p-6">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
          <span className="font-medium text-black dark:text-white underline underline-offset-4">
            {project.name}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {project.year}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-3">
          {project.description}
        </p>
      </a>

      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-800 rounded-full px-2.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Architecture Details - Collapsible */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4 space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
              Problem
            </span>
            <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
              Key Decisions
            </span>
            <ul className="mt-1 space-y-1">
              {project.decisions.map((decision, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 pl-3 relative before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 dark:before:bg-gray-700"
                >
                  {decision}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
              Outcome
            </span>
            <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {project.outcome}
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 flex items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors"
      >
        {isExpanded ? (
          <>
            Hide Details <ChevronUp className="h-3 w-3" />
          </>
        ) : (
          <>
            Architecture Details <ChevronDown className="h-3 w-3" />
          </>
        )}
      </button>
    </div>
  );
}

export const ProjectCard = memo(ProjectCardComponent);
