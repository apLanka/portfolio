"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { LocalTime } from "@/components/nav/local-time"
import { TLink } from "@/components/motion/page-transition"
import { vars } from "@/components/ui/text"
import { profile, sections } from "@/content/profile"
import { useTone } from "@/lib/use-tone"

const FOCUSABLE = 'a[href], button:not([disabled])'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const tone = useTone(useCallback(() => 28, []))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Scroll lock, Escape to close, focus trap while the menu is open.
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const prev = root.style.overflow
    root.style.overflow = "hidden"

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== "Tab") return
      const nodes = [
        toggleRef.current,
        ...(menuRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []),
      ].filter((n): n is HTMLElement => !!n)
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      root.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const close = () => setOpen(false)
  const headerTone = open ? "hi" : tone

  return (
    <>
      <header
        data-chrome
        data-tone={headerTone === "graphite" ? undefined : headerTone}
        className={`fixed inset-x-0 top-0 z-[70] border-b text-fg transition-colors duration-300 ${
          scrolled && !open ? "border-line bg-base" : "border-transparent bg-transparent"
        }`}
      >
        <div className="shell mono-label flex h-14 items-center justify-between gap-4">
          <TLink
            href="/"
            label="Home"
            onClick={close}
            className="flex items-center gap-3 py-2 text-fg"
            aria-label={`${profile.name} — home`}
          >
            <span className="relative block size-2 bg-hi pulse" aria-hidden />
            <span>{profile.name}</span>
          </TLink>

          <p className="hidden text-mute md:block" aria-hidden>
            {profile.role} <span className="mx-2">/</span> {profile.location.split(",")[0]}{" "}
            <LocalTime timeZone={profile.timeZone} />
          </p>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((o) => !o)}
            className="group -mr-2 flex items-center gap-3 px-2 py-2 text-fg"
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-500 [transition-timing-function:var(--ease)] ${
                  open ? "top-1/2 rotate-45" : "top-0 group-hover:w-3/5"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-current transition-all duration-500 [transition-timing-function:var(--ease)] ${
                  open ? "top-1/2 -rotate-45" : "top-full"
                }`}
              />
            </span>
            <span>{open ? "Close" : "Index"}</span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        ref={menuRef}
        data-tone="hi"
        data-chrome
        data-open={open ? "" : undefined}
        className="menu text-fg"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="shell flex min-h-full flex-col justify-between gap-10 pb-8 pt-24">
          <nav aria-label="Primary">
            <ol className="border-t border-line-strong">
              {sections.map((s, i) => (
                <li key={s.id} className="menu-item border-b border-line-strong">
                  <TLink
                    href={`/#${s.id}`}
                    label={s.label}
                    onClick={close}
                    className="menu-link flex items-center gap-5 py-[0.5svh] md:gap-10"
                  >
                    <span className="mono-label w-8 shrink-0 tabular">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="ln">
                      <span style={vars({ "--i": i })}>
                        <span className="menu-name f-display block text-[clamp(2.4rem,8.2svh,6.5rem)]">
                          {s.label}
                        </span>
                      </span>
                    </span>
                  </TLink>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mono-label grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
            <div className="col-span-2">
              <p className="text-mute">Write to me</p>
              <a href={`mailto:${profile.email}`} className="mark-link mt-1 inline-block py-1">
                {profile.email}
              </a>
            </div>
            {profile.links.slice(0, 2).map((l) => (
              <div key={l.href}>
                <p className="text-mute">{l.label}</p>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mark-link mt-1 inline-block py-1"
                >
                  {l.handle}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
