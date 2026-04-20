import { SITE_INFO } from "@/config/site"
import { PROJECTS } from "@/features/portfolio/data/projects"

const content = `# Projects

${PROJECTS.map((item) => {
  const skills = `\n\nSkills: ${item.skills.join(", ")}`
  const description = item.description ? `\n\n${item.description.trim()}` : ""
  const urlLine = item.link
    ? `Project URL: ${item.link}`
    : "Project URL: (not public)"
  const detailLine = item.slug
    ? `\nDetail: ${SITE_INFO.url}/projects/${item.slug}`
    : ""
  return `## ${item.title}\n\n${urlLine}${detailLine}${skills}${description}`
}).join("\n\n")}
`

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  })
}
