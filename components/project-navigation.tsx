"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

const NAVIGATION_IDS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "project-geneknow",
  "project-lapack-ai",
  "project-marketsnap",
  "project-children-of-singularity",
  "project-personyx",
  "project-funnelfluent",
  "additional-projects",
  "contact",
]

const HEADER_GAP = 12

function getTargetScrollTop(element: HTMLElement, id: string) {
  if (id === "hero") return 0
  const header = document.querySelector("header")
  const headerHeight = header?.getBoundingClientRect().height ?? 64
  return Math.max(0, window.scrollY + element.getBoundingClientRect().top - headerHeight - HEADER_GAP)
}

export default function ProjectNavigation() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const isProgrammaticScroll = useRef(false)
  const currentIndexRef = useRef(0)

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= NAVIGATION_IDS.length) return

    const id = NAVIGATION_IDS[index]
    const element = document.getElementById(id)
    if (!element) return

    isProgrammaticScroll.current = true
    currentIndexRef.current = index
    setCurrentSectionIndex(index)

    window.scrollTo({
      top: getTargetScrollTop(element, id),
      behavior: "smooth",
    })

    window.setTimeout(() => {
      isProgrammaticScroll.current = false
    }, 700)
  }, [])

  const navigateToPrevious = useCallback(() => {
    const prevIndex = currentIndexRef.current > 0 ? currentIndexRef.current - 1 : NAVIGATION_IDS.length - 1
    scrollToSection(prevIndex)
  }, [scrollToSection])

  const navigateToNext = useCallback(() => {
    const nextIndex = currentIndexRef.current < NAVIGATION_IDS.length - 1 ? currentIndexRef.current + 1 : 0
    scrollToSection(nextIndex)
  }, [scrollToSection])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      const isInputElement = target && (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.contentEditable === "true" ||
        target.isContentEditable
      )
      if (isInputElement) return

      if (event.key === "ArrowUp") {
        event.preventDefault()
        navigateToPrevious()
      } else if (event.key === "ArrowDown") {
        event.preventDefault()
        navigateToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown, true)
    return () => window.removeEventListener("keydown", handleKeyDown, true)
  }, [navigateToPrevious, navigateToNext])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const topEntry = visible[0]
        if (!topEntry) return

        const sectionIndex = NAVIGATION_IDS.indexOf(topEntry.target.id)
        if (sectionIndex !== -1 && sectionIndex !== currentIndexRef.current) {
          currentIndexRef.current = sectionIndex
          setCurrentSectionIndex(sectionIndex)
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    )

    NAVIGATION_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 lg:flex">
      <Button
        variant="outline"
        size="icon"
        onClick={navigateToPrevious}
        className="h-9 w-9 rounded-full border-border bg-background/80 shadow-md backdrop-blur-sm hover:bg-background"
        aria-label="Previous section"
      >
        <ChevronUp className="h-4 w-4" />
      </Button>

      <div className="flex flex-col items-center gap-1 py-1">
        {NAVIGATION_IDS.map((id, index) => (
          <button
            key={id}
            onClick={() => scrollToSection(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSectionIndex
                ? "h-2 w-2 bg-primary"
                : "h-1.5 w-1.5 bg-muted-foreground/35 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to ${id.replace(/-/g, " ")}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={navigateToNext}
        className="h-9 w-9 rounded-full border-border bg-background/80 shadow-md backdrop-blur-sm hover:bg-background"
        aria-label="Next section"
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )
}
