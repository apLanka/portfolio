/**
 * Architecture case studies configuration.
 * Each case study shows how you thought about a system — context, constraints,
 * alternatives rejected, and lessons learned. Add diagram images to /public/image/case-studies/
 */

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  context: string;
  constraints: string[];
  architecture: string;
  alternatives: { name: string; rejected: string }[];
  lessons: string[];
  diagram?: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-title",
    title: "Case Study Title",
    summary: "A one-line summary of the system and the architectural challenge.",
    context:
      "Describe the business or technical situation. What was the problem space? Who were the stakeholders? What was at stake?",
    constraints: [
      "Budget, timeline, or team size limitations",
      "Existing systems or tech debt we had to work within",
      "Non-functional requirements (latency, availability, compliance)",
    ],
    architecture:
      "Describe what you designed and why. How did the pieces fit together? What patterns did you use? How did you handle data flow, failure modes, or scaling?",
    alternatives: [
      {
        name: "Alternative A (e.g. Microservices from day one)",
        rejected: "Reason you rejected it — e.g. added complexity without measurable benefit at current scale.",
      },
      {
        name: "Alternative B (e.g. Monolithic deployment)",
        rejected: "Reason you rejected it — e.g. would have blocked independent team deployments.",
      },
    ],
    lessons: [
      "What you'd do differently next time",
      "What you learned about the domain or the tools",
      "What held up well under real usage",
    ],
    diagram: undefined, // e.g. "/image/case-studies/system-x.webp"
    tags: ["Next.js", "PostgreSQL", "Redis"],
  },
  // add more case studies here
];
