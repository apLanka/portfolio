import { TLink } from "@/components/motion/page-transition"
import { ArrowLeft } from "@/components/ui/icons"

export default function NotFound() {
  return (
    <section
      id="top"
      data-tone="graphite"
      className="shell relative flex min-h-svh flex-col justify-center py-28"
    >
      <p className="mono-label mb-6 text-mute">Error 404 / Route not found</p>
      <h1 className="f-display text-[clamp(6rem,30vw,28rem)] leading-[0.8]">404</h1>
      <p className="mt-8 max-w-[36ch] text-xl text-mute">
        This page returned nothing. The agent has hit its retry limit.
      </p>
      <TLink href="/" label="Home" className="btn mt-10 w-fit">
        <ArrowLeft />
        Back to the start
      </TLink>
    </section>
  )
}
