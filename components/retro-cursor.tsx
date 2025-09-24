"use client"

import { useEffect, useState } from "react"

export default function RetroCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hide on mobile devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return
    }

    let rafId: number
    
    const updatePosition = (e: MouseEvent) => {
      // Cancel previous animation frame if still pending
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      
      // Use requestAnimationFrame for smooth updates
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        setIsVisible(true)
      })
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="simple-cursor"
      style={{
        left: position.x,
        top: position.y,
      }}
      aria-hidden="true"
    />
  )
}
