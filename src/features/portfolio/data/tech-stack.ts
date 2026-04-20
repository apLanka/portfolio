import type { TechStack, TechStackSection } from "../types/tech-stack"

/**
 * Full stack from CV. Icons: [`tech-stack-icons`](https://www.tech-stack-icons.com/).
 * GitHub Actions uses the `github` icon.
 * “RAG” uses `langchain` (closest generic).
 */
export const TECH_STACK_SECTIONS: TechStackSection[] = [
  {
    id: "languages",
    heading: "Languages",
    items: [
      {
        icon: "js",
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        categories: ["Language"],
      },
      {
        icon: "typescript",
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
        categories: ["Language"],
      },
      {
        icon: "python",
        title: "Python",
        href: "https://www.python.org/",
        categories: ["Language"],
      },
      {
        icon: "java",
        title: "Java",
        href: "https://www.java.com/",
        categories: ["Language"],
      },
      {
        icon: "csharp",
        title: "C#",
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        categories: ["Language"],
      },
    ],
  },
  {
    id: "frontend-mobile",
    heading: "Frontend / mobile",
    items: [
      {
        icon: "react",
        title: "React",
        href: "https://react.dev/",
        categories: ["UI"],
      },
      {
        icon: "nextjs2",
        title: "Next.js",
        href: "https://nextjs.org/",
        categories: ["Framework"],
      },
      {
        icon: "reactnative",
        title: "React Native",
        href: "https://reactnative.dev/",
        categories: ["Mobile"],
      },
      {
        icon: "tailwindcss",
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        categories: ["Styling"],
      },
    ],
  },
  {
    id: "backend",
    heading: "Backend",
    items: [
      {
        icon: "nodejs",
        title: "Node.js",
        href: "https://nodejs.org/",
        categories: ["Runtime"],
      },
      {
        icon: "expressjs",
        title: "Express",
        href: "https://expressjs.com/",
        categories: ["Framework"],
      },
      {
        icon: "nestjs",
        title: "NestJS",
        href: "https://nestjs.com/",
        categories: ["Framework"],
      },
      {
        icon: "spring",
        title: "Spring Boot",
        href: "https://spring.io/projects/spring-boot",
        categories: ["Framework"],
      },
      {
        icon: "netcore",
        title: ".NET",
        href: "https://dotnet.microsoft.com/",
        categories: ["Framework"],
      },
    ],
  },
  {
    id: "databases",
    heading: "Databases",
    items: [
      {
        icon: "postgresql",
        title: "PostgreSQL",
        href: "https://www.postgresql.org/",
        categories: ["Database"],
      },
      {
        icon: "mysql",
        title: "MySQL",
        href: "https://www.mysql.com/",
        categories: ["Database"],
      },
      {
        icon: "mongodb",
        title: "MongoDB",
        href: "https://www.mongodb.com/",
        categories: ["Database"],
      },
      {
        icon: "redis",
        title: "Redis",
        href: "https://redis.io/",
        categories: ["Database", "Cache"],
      },
    ],
  },
  {
    id: "cloud-devops",
    heading: "Cloud & DevOps",
    items: [
      {
        icon: "aws",
        title: "AWS (Lambda, SQS, S3)",
        href: "https://aws.amazon.com/",
        categories: ["Cloud"],
      },
      {
        icon: "docker",
        title: "Docker",
        href: "https://www.docker.com/",
        categories: ["Containers"],
      },
      {
        icon: "kubernetes",
        title: "Kubernetes",
        href: "https://kubernetes.io/",
        categories: ["Orchestration"],
      },
      {
        icon: "nginx",
        title: "Nginx",
        href: "https://nginx.org/",
        categories: ["Web server"],
      },
      {
        icon: "github",
        title: "GitHub Actions",
        href: "https://github.com/features/actions",
        categories: ["CI/CD"],
      },
    ],
  },
  {
    id: "testing-observability",
    heading: "Testing & observability",
    items: [
      {
        icon: "jest",
        title: "Jest",
        href: "https://jestjs.io/",
        categories: ["Testing"],
      },
      {
        icon: "vitest",
        title: "Vitest",
        href: "https://vitest.dev/",
        categories: ["Testing"],
      },
      {
        icon: "prometheus",
        title: "Prometheus",
        href: "https://prometheus.io/",
        categories: ["Observability"],
      },
      {
        icon: "grafana",
        title: "Grafana",
        href: "https://grafana.com/",
        categories: ["Observability"],
      },
      {
        icon: "playwright",
        title: "Playwright",
        href: "https://playwright.dev/",
        categories: ["Testing"],
      },
    ],
  },
  {
    id: "ai",
    heading: "AI integration",
    items: [
      {
        icon: "langchain",
        title: "LangChain",
        href: "https://www.langchain.com/",
        categories: ["AI"],
      },
      {
        icon: "langgraph",
        title: "LangGraph",
        href: "https://langchain-ai.github.io/langgraph/",
        categories: ["AI"],
      },
      {
        icon: "langsmith",
        title: "LangSmith",
        href: "https://www.langchain.com/langsmith",
        categories: ["AI"],
      },
      {
        icon: "langchain",
        title: "RAG",
        href: "https://www.promptingguide.ai/techniques/rag",
        categories: ["AI", "RAG"],
      },
    ],
  },
]

export const TECH_STACK: TechStack[] = TECH_STACK_SECTIONS.flatMap((s) => s.items)
