import type { Metadata } from "next";
import { links } from "./config/links";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(links.website),
  title: "Pasindu Lanka",
  description: "Software engineer building toward solution architecture. I design and build full-stack systems with a focus on how components fit together at scale.",
  openGraph: {
    title: "Pasindu Lanka",
    description: "Software engineer building toward solution architecture. I design and build full-stack systems with a focus on how components fit together at scale.",
    url: links.website,
  },
  twitter: {
    card: "summary",
    title: "Pasindu Lanka",
    description: "Software engineer building toward solution architecture. I design and build full-stack systems with a focus on how components fit together at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.simpleicons.org" />
        <link rel="dns-prefetch" href="https://cdn.simpleicons.org" />
      </head>
      <body
        className={`${dmSans.variable} antialiased transition-colors duration-300`}
      >
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:block focus:w-auto focus:h-auto focus:overflow-visible focus:rounded-lg focus:bg-black focus:text-white focus:dark:bg-white focus:dark:text-black focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:no-underline"
        >
          Skip to content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
