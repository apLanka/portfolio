import fs from "node:fs"
import path from "node:path"

/** Markdown body for `/projects/[slug]`; file optional per project. */
export function readProjectDetailMarkdown(slug: string): string | null {
  const filePath = path.join(
    process.cwd(),
    "src/content/projects",
    `${slug}.md`
  )
  try {
    return fs.readFileSync(filePath, "utf8")
  } catch {
    return null
  }
}
