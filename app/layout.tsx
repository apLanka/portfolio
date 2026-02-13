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
  description: "Full-stack developer and product builder crafting seamless, user-centric experiences. Strategic problem solver bridging technical architecture with business outcomes. I build robust, scalable systems that align engineering decisions with long-term growth and success.",
  openGraph: {
    title: "Pasindu Lanka",
    description: "Full-stack developer and product builder crafting seamless, user-centric experiences. Strategic problem solver bridging technical architecture with business outcomes. I build robust, scalable systems that align engineering decisions with long-term growth and success.",
    url: links.website,
  },
  twitter: {
    card: "summary",
    title: "Pasindu Lanka",
    description: "Full-stack developer and product builder crafting seamless, user-centric experiences. Strategic problem solver bridging technical architecture with business outcomes. I build robust, scalable systems that align engineering decisions with long-term growth and success.",
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
