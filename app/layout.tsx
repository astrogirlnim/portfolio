import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins, Source_Sans_3, Space_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import RetroCursor from "@/components/retro-cursor"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-source-sans"
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono"
})

// Update the metadata
export const metadata: Metadata = {
  title: "Nataly Smith | Senior Software Developer",
  description:
    "Personal portfolio of Nataly Smith, showcasing expertise in full-stack development, cloud technologies, and mathematical modeling",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.className} ${poppins.variable} ${sourceSans.variable} ${spaceMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <RetroCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}
