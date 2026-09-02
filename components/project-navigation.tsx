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
  "project-saturday",
  "project-geneknow",
  "project-lapack-ai",
  "project-marketsnap",
  "project-funnelfluent",
  "project-personyx",
  "project-children-of-singularity",
  "additional-projects",
  "contact",
]

const HEADER_GAP = 12

function getScrollElement() {
  return document.scrollingElement ?? document.documentElement
}

function getScrollTop() {
  return getScrollElement().scrollTop
}

function scrollPageTo(top: number) {
  const el = getScrollElement()
  el.scrollTo({ top, behavior: "smooth" })
  if (top === 0) {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" })
    document.body.scrollTo({ top: 0, behavior: "smooth" })
  }
}

function getTargetScrollTop(element: HTMLElement, id: string) {
  if (id === "hero") return 0
  const header = document.querySelector("header")
  const headerHeight = header?.getBoundingClientRect().height ?? 64
  return Math.max(0, getScrollTop() + element.getBoundingClientRect().top - headerHeight - HEADER_GAP)
}

function getActiveSectionIndex() {
  const header = document.querySelector("header")
  const probe = (header?.getBoundingClientRect().height ?? 64) + HEADER_GAP + 1
  let activeIndex = 0

  NAVIGATION_IDS.forEach((id, index) => {
    const element = document.getElementById(id)
    if (!element) return
    if (element.getBoundingClientRect().top <= probe) {
      activeIndex = index
    }
  })

  return activeIndex
}

export default function ProjectNavigation() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const isProgrammaticScroll = useRef(false)
  const currentIndexRef = useRef(0)
  const programmaticTimer = useRef<number | null>(null)
  const scrollGeneration = useRef(0)

  const setIndex = useCallback((index: number) => {
    currentIndexRef.current = index
    setCurrentSectionIndex(index)
  }, [])

  const releaseProgrammaticScroll = useCallback(() => {
    isProgrammaticScroll.current = false
    if (programmaticTimer.current !== null) {
      window.clearTimeout(programmaticTimer.current)
      programmaticTimer.current = null
    }
  }, [])

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= NAVIGATION_IDS.length) return

    const id = NAVIGATION_IDS[index]
    const element = document.getElementById(id)
    if (!element) return

    isProgrammaticScroll.current = true
    setIndex(index)
    const generation = ++scrollGeneration.current

    scrollPageTo(getTargetScrollTop(element, id))

    if (programmaticTimer.current !== null) {
      window.clearTimeout(programmaticTimer.current)
    }

    const finish = () => {
      if (generation !== scrollGeneration.current) return
      window.removeEventListener("scrollend", finish)
      releaseProgrammaticScroll()
      setIndex(getActiveSectionIndex())
    }

    window.addEventListener("scrollend", finish, { once: true })
    programmaticTimer.current = window.setTimeout(finish, 1400)
  }, [releaseProgrammaticScroll, setIndex])

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
    const syncFromScroll = () => {
      if (isProgrammaticScroll.current) return
      const nextIndex = getActiveSectionIndex()
      if (nextIndex !== currentIndexRef.current) {
        setIndex(nextIndex)
      }
    }

    window.addEventListener("scroll", syncFromScroll, { passive: true })
    syncFromScroll()
    return () => window.removeEventListener("scroll", syncFromScroll)
  }, [setIndex])

  useEffect(() => {
    return () => {
      if (programmaticTimer.current !== null) {
        window.clearTimeout(programmaticTimer.current)
      }
    }
  }, [])

  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 lg:flex">
      <Button
        variant="outline"
        size="icon"
        onClick={navigateToPrevious}
        className="h-8 w-8 border-border bg-background/80 backdrop-blur-sm hover:bg-background"
        aria-label="Previous section"
      >
        <ChevronUp className="h-4 w-4" />
      </Button>

      <div className="flex flex-col items-center gap-1 py-1">
        {NAVIGATION_IDS.map((id, index) => (
          <button
            key={id}
            onClick={() => scrollToSection(index)}
            className={`transition-all duration-300 ${
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
        className="h-8 w-8 border-border bg-background/80 backdrop-blur-sm hover:bg-background"
        aria-label="Next section"
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )
}
