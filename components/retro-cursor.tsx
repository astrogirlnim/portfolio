"use client"

import { useEffect, useState, useCallback, useRef } from "react"

type CursorState = 'default' | 'hover' | 'loading' | 'text'

interface CursorPosition {
  x: number
  y: number
}

export default function RetroCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [isLoading, setIsLoading] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  const updateCursorState = useCallback((element: Element | null) => {
    if (!element) {
      setCursorState('default')
      return
    }

    try {
      // Check for text input elements
      if (element.matches('input[type="text"], input[type="email"], input[type="password"], input[type="search"], textarea, [contenteditable="true"]')) {
        setCursorState('text')
        return
      }

      // Check for interactive elements (including your specific classes)
      if (element.matches('a, button, [role="button"], [data-cursor="hover"], .cursor-hover, .hover-glow, input[type="button"], input[type="submit"], select, [tabindex="0"]:not(input):not(textarea)')) {
        setCursorState('hover')
        return
      }

      // Check for loading states
      if (element.matches('[data-loading="true"], .loading, [aria-busy="true"], .cursor-loading')) {
        setCursorState('loading')
        return
      }

      setCursorState('default')
    } catch (error) {
      // Fallback to default if selector fails
      console.warn('Cursor state update failed:', error)
      setCursorState('default')
    }
  }, [])

  const updatePosition = useCallback((e: MouseEvent) => {
    const newPosition = { x: e.clientX, y: e.clientY }
    setPosition(newPosition)
    setIsVisible(true)
    
    try {
      // Update cursor state based on the element under the cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
      updateCursorState(elementUnderCursor)
    } catch (error) {
      console.warn('Failed to get element under cursor:', error)
    }
  }, [updateCursorState])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
    setCursorState('default')
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true)
  }, [])

  // Enhanced loading state management
  useEffect(() => {
    const handleLoadingStart = () => {
      setIsLoading(true)
      // Auto-clear loading state after 3 seconds as fallback
      setTimeout(() => setIsLoading(false), 3000)
    }
    const handleLoadingEnd = () => setIsLoading(false)

    // Listen for navigation events
    window.addEventListener('beforeunload', handleLoadingStart)
    window.addEventListener('load', handleLoadingEnd)
    
    // Listen for custom loading events
    document.addEventListener('loading-start', handleLoadingStart)
    document.addEventListener('loading-end', handleLoadingEnd)

    // Listen for link clicks to show loading state
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.matches('a[href]:not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"])')) {
        handleLoadingStart()
      }
    }
    
    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('beforeunload', handleLoadingStart)
      window.removeEventListener('load', handleLoadingEnd)
      document.removeEventListener('loading-start', handleLoadingStart)
      document.removeEventListener('loading-end', handleLoadingEnd)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  useEffect(() => {
    // Only add listeners on client side
    if (typeof window === 'undefined') return

    window.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [updatePosition, handleMouseLeave, handleMouseEnter])

  // Override cursor state if globally loading
  const finalCursorState = isLoading ? 'loading' : cursorState

  // Don't render on server
  if (typeof window === 'undefined' || !isVisible) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${finalCursorState}`}
      style={{
        left: position.x,
        top: position.y,
      }}
      aria-hidden="true"
    />
  )
}

// Utility functions for demonstration
export const triggerLoadingState = () => {
  document.dispatchEvent(new CustomEvent('loading-start'))
  setTimeout(() => {
    document.dispatchEvent(new CustomEvent('loading-end'))
  }, 2000)
}
