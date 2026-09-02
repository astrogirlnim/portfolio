"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { contactHref, homeHref, siteNavLinks } from "@/lib/site-nav"

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between sm:h-16">
        <Link
          href={homeHref}
          className="font-mono text-[0.7rem] font-medium tracking-[0.28em] transition-colors hover:text-primary sm:text-xs"
        >
          N. SMITH · VOL. 01
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
          {siteNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-[0.12em] uppercase transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild className="hidden font-mono text-xs tracking-widest uppercase md:flex">
            <Link href={contactHref}>Get in touch</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-background md:hidden">
          <nav className="container py-3">
            <div className="flex flex-col">
              {siteNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 font-mono text-sm tracking-widest uppercase"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={contactHref}
                className="py-3 font-mono text-sm tracking-widest uppercase"
                onClick={closeMobileMenu}
              >
                Get in touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
