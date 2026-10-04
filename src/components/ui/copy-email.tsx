"use client"

import { useEffect, useRef, useState } from "react"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number>(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button type="button" onClick={copy} className="btn">
      <span aria-live="polite">{copied ? "Copied to clipboard" : "Copy address"}</span>
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        {copied ? <path d="m3 8.5 3.2 3.2L13 5" /> : <path d="M5.5 5.5h7v8h-7zM3.5 10.5v-8h7" />}
      </svg>
    </button>
  )
}
