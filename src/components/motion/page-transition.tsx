"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
} from "react"

type Phase = "idle" | "cover" | "reveal"

interface TransitionApi {
  go: (href: string, label: string) => void
}

const TransitionContext = createContext<TransitionApi | null>(null)

const COVER_MS = 650
const REVEAL_MS = 800
const SAFETY_MS = 3000

/**
 * Curtain-wipe page transitions for the App Router.
 * 1. a citron curtain rises over the page,
 * 2. the route changes underneath it,
 * 3. the curtain exits upward to reveal the new page.
 * Plain browser back/forward and reduced-motion users get normal navigation.
 */
export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>("idle")
  const [label, setLabel] = useState("")
  const pending = useRef(false)
  const timers = useRef<number[]>([])

  const clear = () => {
    timers.current.forEach(window.clearTimeout)
    timers.current = []
  }

  const finish = useCallback(() => {
    clear()
    pending.current = false
    setPhase("reveal")
    timers.current.push(window.setTimeout(() => setPhase("idle"), REVEAL_MS))
  }, [])

  const go = useCallback(
    (href: string, nextLabel: string) => {
      if (pending.current) return
      pending.current = true
      setLabel(nextLabel)
      setPhase("cover")
      timers.current.push(window.setTimeout(() => router.push(href), COVER_MS))
      timers.current.push(window.setTimeout(finish, SAFETY_MS))
    },
    [router, finish],
  )

  const lastPath = useRef(pathname)
  useEffect(() => {
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    if (pending.current) {
      // Let the new route paint one frame beneath the curtain first.
      requestAnimationFrame(() => requestAnimationFrame(finish))
    }
  }, [pathname, finish])

  useEffect(() => clear, [])

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}
      <div className="curtain" data-phase={phase} aria-hidden>
        <span className="mono-label">Pasindu Lanka</span>
        <span className="f-display text-[clamp(3rem,12vw,10rem)]">{label}</span>
      </div>
    </TransitionContext.Provider>
  )
}

interface TLinkProps extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string
  /** Text shown on the curtain while navigating. */
  label?: string
}

/** next/link that routes through the curtain when changing page. */
export function TLink({ href, label = "", onClick, children, ...rest }: TLinkProps) {
  const ctx = useContext(TransitionContext)
  const pathname = usePathname()

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || !ctx) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const target = new URL(href, window.location.href)
    if (target.pathname === pathname) return // same page: hash scroll / no-op
    e.preventDefault()
    ctx.go(href, label)
  }

  return (
    <Link href={href} onClick={handle} {...rest}>
      {children}
    </Link>
  )
}
