"use client"

import { useEffect } from "react"
import { isHomePath, pendingHomeSectionKey } from "@/lib/site-nav"

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId)
  if (!target) return false
  target.scrollIntoView({ behavior: "instant", block: "start" })
  window.history.replaceState(null, "", `#${sectionId}`)
  return true
}

export default function HomeHashScroll() {
  useEffect(() => {
    const pathname = window.location.pathname
    if (!isHomePath(pathname)) return

    const pendingSection = sessionStorage.getItem(pendingHomeSectionKey)
    if (pendingSection) {
      sessionStorage.removeItem(pendingHomeSectionKey)
      requestAnimationFrame(() => scrollToSection(pendingSection))
      return
    }

    const hashSection = window.location.hash.replace(/^#/, "")
    if (hashSection) {
      requestAnimationFrame(() => scrollToSection(hashSection))
    }
  }, [])

  return null
}
