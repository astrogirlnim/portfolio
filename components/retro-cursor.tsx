"use client"

import { useEffect, useState, useCallback, useRef } from "react"

type CursorState = 'default' | 'hover' | 'loading' | 'text'

interface CursorPosition {
  x: number
  y: number
}

// Mobile detection utility function - simplified
const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export default function RetroCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [isMobile, setIsMobile] = useState<boolean>(false)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const lastUpdate = useRef<number>(0)
  const rafId = useRef<number | undefined>(undefined)
  const lastElement = useRef<Element | null>(null)
  const isMoving = useRef<boolean>(false)
  const moveTimeout = useRef<number | undefined>(undefined)

  console.log('[RetroCursor] Rendering with state:', cursorState, 'position:', position)

  // Check for mobile device on mount only
  useEffect(() => {
    console.log('[RetroCursor] Checking mobile device')
    setIsMobile(isMobileDevice())
  }, [])

  // Optimized cursor state detection - cached and simplified
  const updateCursorState = useCallback((element: Element | null) => {
    if (!element) {
      setCursorState('default')
      return
    }

    try {
      const tagName = element.tagName.toLowerCase()
      const classList = element.classList
      
      console.log('[RetroCursor] Checking element:', tagName, Array.from(classList))
      
      // Text input elements - highest priority
      if (tagName === 'input' || tagName === 'textarea' || element.hasAttribute('contenteditable')) {
        const inputType = (element as HTMLInputElement).type
        if (!inputType || ['text', 'email', 'password', 'search'].includes(inputType)) {
          setCursorState('text')
          return
        }
      }
      
      // Interactive elements - second priority
      if (tagName === 'a' || tagName === 'button' || 
          classList.contains('cursor-hover') || 
          classList.contains('hover-glow') ||
          element.hasAttribute('data-cursor') ||
          element.getAttribute('role') === 'button') {
        setCursorState('hover')
        return
      }

      // Loading states - third priority
      if (element.hasAttribute('data-loading') || 
          classList.contains('loading') || 
          element.getAttribute('aria-busy') === 'true') {
        setCursorState('loading')
        return
      }

      setCursorState('default')
    } catch (error) {
      console.warn('[RetroCursor] Cursor state update failed:', error)
      setCursorState('default')
    }
  }, [])

  // Highly optimized mouse position updates
  const updatePosition = useCallback((e: MouseEvent) => {
    const now = performance.now()
    
    // More aggressive throttling - only update every 33ms (30fps)
    if (now - lastUpdate.current < 33) return
    lastUpdate.current = now
    
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }
    
    rafId.current = requestAnimationFrame(() => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setPosition(newPosition)
      setIsVisible(true)
      
      // Mark as moving and reset timeout
      isMoving.current = true
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current)
      }
      moveTimeout.current = setTimeout(() => {
        isMoving.current = false
        console.log('[RetroCursor] Cursor stopped moving')
      }, 100) as unknown as number
      
      // Only check element under cursor when actually moving and less frequently
      if (now % 10 === 0) { // Even less frequent element detection
        try {
          const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
          if (elementUnderCursor !== lastElement.current) {
            lastElement.current = elementUnderCursor
            updateCursorState(elementUnderCursor)
          }
        } catch (error) {
          console.warn('[RetroCursor] Failed to get element under cursor:', error)
        }
      }
    })
  }, [updateCursorState])

  const handleMouseLeave = useCallback(() => {
    console.log('[RetroCursor] Mouse left window')
    setIsVisible(false)
    setCursorState('default')
    lastElement.current = null
    isMoving.current = false
    if (moveTimeout.current) {
      clearTimeout(moveTimeout.current)
    }
  }, [])

  const handleMouseEnter = useCallback(() => {
    console.log('[RetroCursor] Mouse entered window')
    setIsVisible(true)
  }, [])

  // Direct CSS variable updates for better performance
  useEffect(() => {
    if (cursorRef.current && !isMobile) {
      console.log('[RetroCursor] Updating cursor position:', position)
      cursorRef.current.style.setProperty('--cursor-x', `${position.x}px`)
      cursorRef.current.style.setProperty('--cursor-y', `${position.y}px`)
    }
  }, [position, isMobile])

  useEffect(() => {
    if (typeof window === 'undefined' || isMobile) {
      console.log('[RetroCursor] Skipping event listeners - mobile or server')
      return
    }

    console.log('[RetroCursor] Setting up event listeners')
    window.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true })

    return () => {
      console.log('[RetroCursor] Cleaning up event listeners')
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current)
      }
    }
  }, [updatePosition, handleMouseLeave, handleMouseEnter, isMobile])

  if (typeof window === 'undefined' || isMobile || !isVisible) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${cursorState}`}
      style={{
        '--cursor-x': position.x + 'px',
        '--cursor-y': position.y + 'px',
      } as React.CSSProperties}
      aria-hidden="true"
    />
  )
}
