/** Matches [`simple-icons`](https://simpleicons.org/) brands used on the site (same catalog as shadcn.io social icons). */
export type SocialBrand = "x" | "github" | "linkedin" | "medium"

export type SocialLink = {
  /** Brand icon (Simple Icons / standard mark). */
  brand: SocialBrand
  title: string
  /** Optional handle/username or subtitle displayed under the title. */
  subtitle?: string
  /** External profile URL opened when the item is clicked. */
  href: string
}
