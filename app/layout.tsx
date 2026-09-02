import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import RetroCursor from "@/components/retro-cursor"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Nataly Smith | Software Engineer",
  description: "Ambitious software at the intersection of AI, systems, and science. Senior Software Engineer, AI Platform at Function Health. Yale alumni.",
  keywords: "Senior Software Engineer, AI Platform, Full Stack, Scientific Computing, Cloud Infrastructure, Mathematical Modeling, Yale",
  authors: [{ name: "Nataly Smith" }],
  creator: "Nataly Smith",
  publisher: "Nataly Smith",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nataly.dev",
    title: "Nataly Smith | Software Engineer",
    description: "Ambitious software at the intersection of AI, systems, and science.",
    siteName: "Nataly Smith",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nataly Smith | Software Engineer",
    description: "Ambitious software at the intersection of AI, systems, and science.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <RetroCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
