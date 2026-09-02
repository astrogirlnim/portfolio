"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import {
  blogNavLink,
  contactHref,
  contactSectionId,
  homeHref,
  homeSectionHref,
  isHomePath,
  navigateToHomeSection,
  siteSectionLinks,
} from "@/lib/site-nav"

function SectionNavLink({
  sectionId,
  label,
  onNavigate,
  className,
}: {
  sectionId: string
  label: string
  onNavigate?: () => void
  className: string
}) {
  const pathname = usePathname()
  const onHome = isHomePath(pathname)

  if (onHome) {
    return (
      <Link href={`#${sectionId}`} className={className} onClick={onNavigate}>
        {label}
      </Link>
    )
  }

  const handleOffHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    event.stopPropagation()
    onNavigate?.()
    navigateToHomeSection(sectionId)
  }

  return (
    <a
      href={homeSectionHref(sectionId)}
      className={className}
      onClickCapture={handleOffHomeClick}
    >
      {label}
    </a>
  )
}

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const onHome = isHomePath(pathname)
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
          {siteSectionLinks.map((link) => (
            <SectionNavLink
              key={link.sectionId}
              sectionId={link.sectionId}
              label={link.label}
              className="font-mono text-xs tracking-[0.12em] uppercase transition-colors hover:text-primary"
            />
          ))}
          <Link
            href={blogNavLink.href}
            className="font-mono text-xs tracking-[0.12em] uppercase transition-colors hover:text-primary"
          >
            {blogNavLink.label}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          {onHome ? (
            <Button variant="outline" size="sm" asChild className="hidden font-mono text-xs tracking-widest uppercase md:flex">
              <Link href={`#${contactSectionId}`}>Get in touch</Link>
            </Button>
          ) : (
            <Button variant="outline" size="sm" asChild className="hidden font-mono text-xs tracking-widest uppercase md:flex">
              <a
                href={contactHref}
                onClickCapture={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  navigateToHomeSection(contactSectionId)
                }}
              >
                Get in touch
              </a>
            </Button>
          )}
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
              {siteSectionLinks.map((link) => (
                <SectionNavLink
                  key={link.sectionId}
                  sectionId={link.sectionId}
                  label={link.label}
                  onNavigate={closeMobileMenu}
                  className="py-3 font-mono text-sm tracking-widest uppercase"
                />
              ))}
              <Link
                href={blogNavLink.href}
                className="py-3 font-mono text-sm tracking-widest uppercase"
                onClick={closeMobileMenu}
              >
                {blogNavLink.label}
              </Link>
              {onHome ? (
                <Link
                  href={`#${contactSectionId}`}
                  className="py-3 font-mono text-sm tracking-widest uppercase"
                  onClick={closeMobileMenu}
                >
                  Get in touch
                </Link>
              ) : (
                <a
                  href={contactHref}
                  className="py-3 font-mono text-sm tracking-widest uppercase"
                  onClickCapture={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    closeMobileMenu()
                    navigateToHomeSection(contactSectionId)
                  }}
                >
                  Get in touch
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
