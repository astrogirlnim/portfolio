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
  const lastUpdate = useRef<number>(0)
  const rafId = useRef<number | undefined>(undefined)
  const lastElement = useRef<Element | null>(null)

  // Optimized cursor state detection with pre-compiled selectors
  const updateCursorState = useCallback((element: Element | null) => {
    if (!element) {
      setCursorState('default')
      return
    }

    try {
      // Use cached element properties where possible
      const tagName = element.tagName.toLowerCase()
      const classList = element.classList
      
      // Quick checks using tag names and common classes first
      if (tagName === 'input' || tagName === 'textarea' || element.hasAttribute('contenteditable')) {
        const inputType = (element as HTMLInputElement).type
        if (!inputType || ['text', 'email', 'password', 'search'].includes(inputType)) {
          setCursorState('text')
          return
        }
      }
      
      // Check for interactive elements using faster methods
      if (tagName === 'a' || tagName === 'button' || 
          classList.contains('cursor-hover') || 
          classList.contains('hover-glow') ||
          element.hasAttribute('data-cursor') ||
          element.getAttribute('role') === 'button' ||
          (element.hasAttribute('tabindex') && tagName !== 'input' && tagName !== 'textarea')) {
        setCursorState('hover')
        return
      }

      // Check for loading states
      if (element.hasAttribute('data-loading') || 
          classList.contains('loading') || 
          element.getAttribute('aria-busy') === 'true' ||
          classList.contains('cursor-loading')) {
        setCursorState('loading')
        return
      }

      setCursorState('default')
    } catch (error) {
      console.warn('Cursor state update failed:', error)
      setCursorState('default')
    }
  }, [])

  // Throttle mouse position updates using requestAnimationFrame
  const updatePosition = useCallback((e: MouseEvent) => {
    const now = performance.now()
    
    // Skip update if less than 16ms has passed (60fps throttling)
    if (now - lastUpdate.current < 16) return
    
    lastUpdate.current = now
    
    // Cancel any pending animation frame
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }
    
    rafId.current = requestAnimationFrame(() => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setPosition(newPosition)
      setIsVisible(true)
      
      // Update cursor ref position using CSS custom properties for better animation compatibility
      if (cursorRef.current) {
        cursorRef.current.style.setProperty('--cursor-x', `${e.clientX}px`)
        cursorRef.current.style.setProperty('--cursor-y', `${e.clientY}px`)
      }
      
      // Only check element under cursor every few updates to reduce overhead
      if (now % 5 === 0) { // Check every 5th frame
        try {
          const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
          if (elementUnderCursor !== lastElement.current) {
            lastElement.current = elementUnderCursor
            updateCursorState(elementUnderCursor)
          }
        } catch (error) {
          console.warn('Failed to get element under cursor:', error)
        }
      }
    })
  }, [updateCursorState])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
    setCursorState('default')
    lastElement.current = null
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

    // Use passive event listeners for better performance
    window.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      
      // Clean up animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
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
        '--cursor-x': position.x + 'px',
        '--cursor-y': position.y + 'px',
      } as React.CSSProperties}
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
