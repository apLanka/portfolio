import type { IconName } from "tech-stack-icons"

/**
 * One tool row in the Stack panel. Icons come from [`tech-stack-icons`](https://www.tech-stack-icons.com/).
 */
export type TechStack = {
  /** Key matching `tech-stack-icons` (autocomplete via `IconName`). */
  icon: IconName
  title: string
  href: string
  /** For LLM / legacy exports. */
  categories: string[]
}

export type TechStackSection = {
  id: string
  heading: string
  items: TechStack[]
}
