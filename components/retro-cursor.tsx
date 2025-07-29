"use client"

import { useEffect, useState, useCallback, useRef } from "react"

type CursorState = 'default' | 'hover' | 'loading' | 'text' | 'magnetic'

interface CursorPosition {
  x: number
  y: number
}

interface TrailParticle {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
}

// Mobile detection utility function
const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false
  
  // Check for touch capability
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  
  // Check media queries
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
  const isNoHover = window.matchMedia('(hover: none)').matches
  
  // Check user agent (fallback)
  const userAgent = navigator.userAgent.toLowerCase()
  const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'tablet', 'blackberry', 'webos']
  const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword))
  
  // Check screen size (additional check for small screens)
  const isSmallScreen = window.innerWidth <= 768 || window.innerHeight <= 768
  
  return hasTouch && (isCoarsePointer || isNoHover || isMobileUserAgent || isSmallScreen)
}

export default function RetroCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [isLoading, setIsLoading] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [trailParticles, setTrailParticles] = useState<TrailParticle[]>([])
  const [magneticTarget, setMagneticTarget] = useState<Element | null>(null)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const lastUpdate = useRef<number>(0)
  const rafId = useRef<number | undefined>(undefined)
  const lastElement = useRef<Element | null>(null)
  const particleIdCounter = useRef<number>(0)

  // Check for mobile device on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(isMobileDevice())
    }
    
    // Initial check
    checkMobile()
    
    // Listen for resize events to detect orientation changes or screen size changes
    window.addEventListener('resize', checkMobile)
    
    // Listen for orientation change events (mobile specific)
    window.addEventListener('orientationchange', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('orientationchange', checkMobile)
    }
  }, [])

  // Smooth cursor movement with magnetic attraction
  useEffect(() => {
    let animationFrame: number
    
    const animateCursor = () => {
      setPosition(prev => {
        const dx = targetPosition.x - prev.x
        const dy = targetPosition.y - prev.y
        
        // Smooth easing with magnetic effect
        const easing = magneticTarget ? 0.15 : 0.1
        const newX = prev.x + dx * easing
        const newY = prev.y + dy * easing
        
        // Update cursor ref position
        if (cursorRef.current) {
          cursorRef.current.style.setProperty('--cursor-x', `${newX}px`)
          cursorRef.current.style.setProperty('--cursor-y', `${newY}px`)
        }
        
        return { x: newX, y: newY }
      })
      
      animationFrame = requestAnimationFrame(animateCursor)
    }
    
    if (!isMobile) {
      animateCursor()
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [targetPosition, magneticTarget, isMobile])

  // Trail particles effect
  useEffect(() => {
    if (isMobile) return
    
    const updateTrail = () => {
      setTrailParticles(prev => {
        // Add new particle at current position
        const newParticles = [
          ...prev,
          {
            id: particleIdCounter.current++,
            x: position.x,
            y: position.y,
            opacity: 0.6,
            scale: 1
          }
        ].slice(-8) // Keep only last 8 particles
        
        // Update existing particles (fade and shrink)
        return newParticles.map((particle, index) => ({
          ...particle,
          opacity: particle.opacity * 0.9,
          scale: particle.scale * 0.95
        })).filter(particle => particle.opacity > 0.1)
      })
    }
    
    const interval = setInterval(updateTrail, 50)
    return () => clearInterval(interval)
  }, [position, isMobile])

  // Enhanced cursor state detection with magnetic elements
  const updateCursorState = useCallback((element: Element | null) => {
    if (!element) {
      setCursorState('default')
      setMagneticTarget(null)
      return
    }

    try {
      const tagName = element.tagName.toLowerCase()
      const classList = element.classList
      
      // Check for magnetic elements
      if (classList.contains('cursor-magnetic') || 
          tagName === 'button' ||
          (tagName === 'a' && element.getAttribute('href'))) {
        setMagneticTarget(element)
        setCursorState('magnetic')
        return
      }
      
      // Text input elements
      if (tagName === 'input' || tagName === 'textarea' || element.hasAttribute('contenteditable')) {
        const inputType = (element as HTMLInputElement).type
        if (!inputType || ['text', 'email', 'password', 'search'].includes(inputType)) {
          setCursorState('text')
          setMagneticTarget(null)
          return
        }
      }
      
      // Interactive elements
      if (tagName === 'a' || tagName === 'button' || 
          classList.contains('cursor-hover') || 
          classList.contains('hover-glow') ||
          element.hasAttribute('data-cursor') ||
          element.getAttribute('role') === 'button' ||
          (element.hasAttribute('tabindex') && tagName !== 'input' && tagName !== 'textarea')) {
        setCursorState('hover')
        setMagneticTarget(null)
        return
      }

      // Loading states
      if (element.hasAttribute('data-loading') || 
          classList.contains('loading') || 
          element.getAttribute('aria-busy') === 'true' ||
          classList.contains('cursor-loading')) {
        setCursorState('loading')
        setMagneticTarget(null)
        return
      }

      setCursorState('default')
      setMagneticTarget(null)
    } catch (error) {
      console.warn('Cursor state update failed:', error)
      setCursorState('default')
      setMagneticTarget(null)
    }
  }, [])

  // Calculate magnetic attraction
  const calculateMagneticPosition = useCallback((mouseX: number, mouseY: number, element: Element) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2))
    const maxDistance = Math.min(rect.width, rect.height) * 2
    
    if (distance < maxDistance) {
      const strength = Math.max(0, 1 - distance / maxDistance) * 0.3
      return {
        x: mouseX + (centerX - mouseX) * strength,
        y: mouseY + (centerY - mouseY) * strength
      }
    }
    
    return { x: mouseX, y: mouseY }
  }, [])

  // Enhanced mouse position updates with magnetic effects
  const updatePosition = useCallback((e: MouseEvent) => {
    const now = performance.now()
    
    if (now - lastUpdate.current < 16) return
    lastUpdate.current = now
    
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
    }
    
    rafId.current = requestAnimationFrame(() => {
      let newPosition = { x: e.clientX, y: e.clientY }
      
      // Apply magnetic effect if target exists
      if (magneticTarget) {
        newPosition = calculateMagneticPosition(e.clientX, e.clientY, magneticTarget)
      }
      
      setTargetPosition(newPosition)
      setIsVisible(true)
      
      // Check element under cursor less frequently
      if (now % 5 === 0) {
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
  }, [updateCursorState, magneticTarget, calculateMagneticPosition])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
    setCursorState('default')
    setMagneticTarget(null)
    lastElement.current = null
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true)
  }, [])

  // Enhanced loading state management
  useEffect(() => {
    const handleLoadingStart = () => {
      setIsLoading(true)
      setTimeout(() => setIsLoading(false), 3000)
    }
    const handleLoadingEnd = () => setIsLoading(false)

    window.addEventListener('beforeunload', handleLoadingStart)
    window.addEventListener('load', handleLoadingEnd)
    document.addEventListener('loading-start', handleLoadingStart)
    document.addEventListener('loading-end', handleLoadingEnd)

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
    if (typeof window === 'undefined' || isMobile) return

    window.addEventListener("mousemove", updatePosition, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    document.addEventListener("mouseenter", handleMouseEnter, { passive: true })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [updatePosition, handleMouseLeave, handleMouseEnter, isMobile])

  const finalCursorState = isLoading ? 'loading' : cursorState

  if (typeof window === 'undefined' || isMobile || !isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`custom-cursor ${finalCursorState}`}
        style={{
          '--cursor-x': position.x + 'px',
          '--cursor-y': position.y + 'px',
        } as React.CSSProperties}
        aria-hidden="true"
      />
      
      {/* Trail particles */}
      {trailParticles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-trail-particle"
          style={{
            '--particle-x': particle.x + 'px',
            '--particle-y': particle.y + 'px',
            opacity: particle.opacity,
            transform: `translate3d(var(--particle-x), var(--particle-y), 0) translate(-50%, -50%) scale(${particle.scale})`,
          } as React.CSSProperties}
          aria-hidden="true"
        />
      ))}
    </>
  )
}
