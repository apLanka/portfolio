import "./globals.css"

import type { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { Instrument_Serif } from "next/font/google"

import { RevealObserver } from "@/components/ui/reveal-observer"
import { profile } from "@/content/profile"

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: `${profile.name} — AI Engineer`,
    template: `%s — ${profile.name}`,
  },
  description: profile.description,
  keywords: [
    "AI engineer",
    "generative AI",
    "LLM applications",
    "AI agents",
    "agentic systems",
    "RAG",
    "LangGraph",
    "distributed systems",
    "AWS",
    "Pasindu Lanka",
  ],
  authors: [{ name: profile.name, url: profile.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: `${profile.name} — AI Engineer`,
    description: profile.description,
    url: profile.url,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@lankaaDev",
    title: `${profile.name} — AI Engineer`,
    description: profile.description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecebe4" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0d" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrument.variable}`}
    >
      <body className="grain">
        <a
          href="#main"
          className="eyebrow fixed left-4 top-4 z-[70] -translate-y-24 bg-ink px-3 py-2 text-paper focus:translate-y-0"
        >
          Skip to content
        </a>
        <div className="progress" aria-hidden />
        {children}
        <RevealObserver />
      </body>
    </html>
  )
}
