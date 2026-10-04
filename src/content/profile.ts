export const profile = {
  name: "Pasindu Lanka",
  handle: "aplanka",
  role: "AI Engineer",
  location: "Colombo, Sri Lanka",
  timeZone: "Asia/Colombo",
  email: "pasindulankaa@gmail.com",
  url: process.env.APP_URL ?? "https://www.pasindulanka.me",
  description:
    "AI Engineer building LLM applications, agents and agentic workflows — backed by 3+ years of production distributed systems on AWS at 100K+ user scale.",
  links: [
    { label: "GitHub", handle: "apLanka", href: "https://github.com/apLanka" },
    {
      label: "LinkedIn",
      handle: "aplanka",
      href: "https://www.linkedin.com/in/aplanka/",
    },
    { label: "X", handle: "@lankaaDev", href: "https://x.com/lankaaDev" },
    {
      label: "Medium",
      handle: "@pasindulanka",
      href: "https://medium.com/@pasindulanka",
    },
  ],
  about: {
    lead: "Three years of building real-time, multi-tenant systems on AWS taught me what actually breaks in production: latency, retries, cost and failure modes. I now point that instinct at AI, building LLM applications and agents that are bounded, measured and recoverable, not just impressive in a demo.",
    note: "Software engineer at Metarune Labs. Frontend team lead. B.Sc. Software Engineering at SLIIT.",
  },
  stats: [
    { value: "100K+", label: "users on systems I've built" },
    { value: "$10M+", label: "revenue impact of the platform" },
    { value: "7+", label: "engineers led" },
    { value: "3+", label: "years in production" },
  ],
} as const

export const sections = [
  { id: "profile", label: "Profile" },
  { id: "capabilities", label: "Capabilities" },
  { id: "work", label: "Selected work" },
  { id: "stack", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const

export const capabilities = [
  {
    title: "LLM applications",
    body: "Features where the model is one component, not the architecture — provider abstraction, timeouts, validation and graceful fallbacks.",
  },
  {
    title: "Agents & agentic workflows",
    body: "Tool-calling agents and multi-step graphs with explicit state, bounded loops and a human in the loop where the risk demands it.",
  },
  {
    title: "RAG & structured outputs",
    body: "Retrieval pipelines and schema-validated generation, so downstream code receives data it can trust.",
  },
  {
    title: "Evaluation & LLMOps",
    body: "Versioned prompts, tracing, per-tenant cost tracking and regression checks — measuring before optimising.",
  },
  {
    title: "Cloud & distributed systems",
    body: "Event-driven, serverless and real-time infrastructure on AWS that the AI layer can lean on at scale.",
  },
] as const
