"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

// Array of all section and project IDs in navigation order
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
  "contact"
]

export default function ProjectNavigation() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState(false)

  // Function to scroll to a specific section
  const scrollToSection = useCallback((index: number) => {
    if (index >= 0 && index < NAVIGATION_IDS.length) {
      const element = document.getElementById(NAVIGATION_IDS[index])
      if (element) {
        // Set flag to prevent intersection observer from interfering
        setIsProgrammaticScroll(true)
        setCurrentSectionIndex(index)
        
        element.scrollIntoView({ 
          behavior: "smooth", 
          block: "start",
          inline: "nearest"
        })
        
        // Clear the flag after scroll animation completes
        setTimeout(() => {
          setIsProgrammaticScroll(false)
        }, 1000) // Give enough time for smooth scroll to complete
      }
    }
  }, [])

  // Navigate to previous section
  const navigateToPrevious = useCallback(() => {
    const prevIndex = currentSectionIndex > 0 ? currentSectionIndex - 1 : NAVIGATION_IDS.length - 1
    scrollToSection(prevIndex)
  }, [currentSectionIndex, scrollToSection])

  // Navigate to next section
  const navigateToNext = useCallback(() => {
    const nextIndex = currentSectionIndex < NAVIGATION_IDS.length - 1 ? currentSectionIndex + 1 : 0
    scrollToSection(nextIndex)
  }, [currentSectionIndex, scrollToSection])

  // Keyboard event handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if the event is coming from an input, textarea, or contenteditable element
      const target = event.target as HTMLElement
      const isInputElement = target && (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.contentEditable === 'true' ||
        target.isContentEditable
      )
      
      // Don't interfere with typing in input fields
      if (isInputElement) {
        return
      }
      
      if (event.key === "ArrowUp") {
        event.preventDefault()
        navigateToPrevious()
      } else if (event.key === "ArrowDown") {
        event.preventDefault()
        navigateToNext()
      }
    }

    // Use capture phase to ensure we get the events even if child elements handle them
    window.addEventListener("keydown", handleKeyDown, true)
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true)
    }
  }, [navigateToPrevious, navigateToNext])

  // Intersection Observer to track which section is currently visible
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Only trigger when section is in the middle 20% of viewport
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Don't update during programmatic scrolling
      if (isProgrammaticScroll) {
        return
      }
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = NAVIGATION_IDS.indexOf(entry.target.id)
          if (sectionIndex !== -1 && sectionIndex !== currentSectionIndex) {
            setCurrentSectionIndex(sectionIndex)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all section elements
    NAVIGATION_IDS.forEach((id: string) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect()
    }
  }, [currentSectionIndex, isProgrammaticScroll])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
      {/* Up Arrow Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={navigateToPrevious}
        className="w-12 h-12 rounded-full bg-background/80 hover:bg-background/90 border-border hover-glow transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
        aria-label="Previous section"
      >
        <ChevronUp className="h-6 w-6" />
      </Button>

      {/* Section Indicator Dots */}
      <div className="flex flex-col gap-1 py-2">
        {NAVIGATION_IDS.map((_, index: number) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSectionIndex 
                ? "bg-primary scale-125" 
                : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Down Arrow Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={navigateToNext}
        className="w-12 h-12 rounded-full bg-background/80 hover:bg-background/90 border-border hover-glow transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
        aria-label="Next section"
      >
        <ChevronDown className="h-6 w-6" />
      </Button>
    </div>
  )
} 