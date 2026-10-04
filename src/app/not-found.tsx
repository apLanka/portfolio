import Link from "next/link"

export default function NotFound() {
  return (
    <main id="main" className="shell flex min-h-dvh flex-col justify-center py-24">
      <p className="eyebrow mb-6 text-ink-2">404 · span not found</p>
      <h1 className="font-display-tight text-[5rem] sm:text-[12rem]">
        Lost trace<span className="text-signal">.</span>
      </h1>
      <Link href="/" className="eyebrow ulink mt-10 w-fit py-2">
        Back to the start →
      </Link>
    </main>
  )
}
