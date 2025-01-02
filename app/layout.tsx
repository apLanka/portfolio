import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Pasindu Lanka",
  description: "Welcome to the personal portfolio of Pasindu Lanka, showcasing expertise in web development, software engineering, and innovative digital solutions. Explore projects, skills, and professional experiences.",
};

const inter = Inter({
    subsets: ['latin'], // Specify subsets (latin, latin-ext, etc.)
    weight: ['400', '700'], // Optional: Specify weights
    variable: '--font-inter', // Optional: Define a CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
