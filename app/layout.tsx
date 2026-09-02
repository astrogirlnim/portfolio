import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import RetroCursor from "@/components/retro-cursor"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono"
})

// Update the metadata
export const metadata: Metadata = {
  title: "Nataly Smith | Senior Software Engineer, AI Platform",
  description: "Senior Software Engineer, AI Platform at Function Health. Full-stack development, mathematical modeling, cloud infrastructure, and pipeline architecture. Yale alumni.",
  keywords: "Senior Software Engineer, AI Platform, Full Stack, Python, C#, Machine Learning, Cloud Infrastructure, Mathematical Modeling, Yale",
  authors: [{ name: "Nataly Smith" }],
  creator: "Nataly Smith",
  publisher: "Nataly Smith",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nataly.dev",
    title: "Nataly Smith | Senior Software Engineer, AI Platform",
    description: "Senior Software Engineer specializing in full-stack development, mathematical modeling, and cloud infrastructure.",
    siteName: "Nataly Smith Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nataly Smith | Senior Software Engineer, AI Platform",
    description: "Senior Software Engineer specializing in full-stack development, mathematical modeling, and cloud infrastructure.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <RetroCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
