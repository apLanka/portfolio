"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const NAV = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const

export function SiteHeader({ home = true }: { home?: boolean }) {
  const [active, setActive] = useState<string>("")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!home) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [home])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  const href = (id: string) => (home ? `#${id}` : `/#${id}`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-rule bg-paper"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="eyebrow flex items-center gap-2 text-ink"
          aria-label="Pasindu Lanka — home"
        >
          <span aria-hidden className="size-2 bg-signal" />
          pasindu.lanka
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={href(id)}
                  aria-current={active === id ? "true" : undefined}
                  className={`eyebrow relative py-2 transition-colors hover:text-ink ${
                    active === id ? "text-ink" : "text-ink-2"
                  }`}
                >
                  {label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 -bottom-px h-px origin-left bg-signal transition-transform duration-500 ${
                      active === id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="eyebrow -mr-2 flex h-11 items-center gap-3 px-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden className="relative block h-2.5 w-5">
            <span
              className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                open ? "top-1 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                open ? "top-1 -rotate-45" : "top-2.5"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] overflow-y-auto bg-paper md:hidden"
      >
        <nav aria-label="Mobile" className="shell flex h-full flex-col pb-10 pt-6">
          <ul>
            {NAV.map(({ id, label }, i) => (
              <li key={id} className="border-b border-rule">
                <Link
                  href={href(id)}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="eyebrow w-6 text-signal-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display-tight text-[2.6rem]">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-auto pt-10 text-ink-2">
            AI Engineer · Colombo, LK
          </p>
        </nav>
      </div>
    </header>
  )
}
