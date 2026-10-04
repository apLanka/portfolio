import "./globals.css"

import type { Metadata, Viewport } from "next"
import { Archivo, JetBrains_Mono } from "next/font/google"

import { RevealObserver } from "@/components/motion/reveal-observer"
import { PageTransitionProvider } from "@/components/motion/page-transition"
import { SiteFooter } from "@/components/nav/site-footer"
import { SiteHeader } from "@/components/nav/site-header"
import { profile } from "@/content/profile"

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
    locale: "en_US",
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
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0b0a",
  colorScheme: "dark",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#main"
          className="mono-label fixed left-4 top-4 z-[100] -translate-y-24 bg-hi px-3 py-2 text-hi-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        <div className="grid-lines" aria-hidden>
          <div className="shell h-full">
            <div className="gl" />
          </div>
        </div>
        <PageTransitionProvider>
          <SiteHeader />
          <div className="page">
            <main id="main">{children}</main>
            <SiteFooter />
          </div>
        </PageTransitionProvider>
        <RevealObserver />
      </body>
    </html>
  )
}
