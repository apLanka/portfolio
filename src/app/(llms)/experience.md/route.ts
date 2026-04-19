import { EDUCATION, EXPERIENCES } from "@/features/portfolio/data/experiences"

const formatEntries = (
  items: typeof EXPERIENCES,
  heading: string
) => `${heading}

${items
  .map((item) =>
    item.positions
      .map((position) => {
        const skills =
          position.skills?.map((skill) => skill).join(", ") || "N/A"
        return `## ${position.title} | ${item.companyName}\n\nDuration: ${position.employmentPeriod.start} - ${position.employmentPeriod.end || "Present"}\n\nSkills: ${skills}\n\n${position.description?.trim()}`
      })
      .join("\n\n")
  )
  .join("\n\n")}`

const content = `${formatEntries(EXPERIENCES, "# Experience")}

${formatEntries(EDUCATION, "# Education")}
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
