"use client"

import { useEffect, useState } from "react"

export default function RetroCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 h-8 w-8 rounded-full border-2 border-primary mix-blend-difference"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transition: "transform 0.1s ease-out, opacity 0.2s ease",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div
        className="fixed pointer-events-none z-50 h-2 w-2 rounded-full bg-primary mix-blend-difference"
        style={{
          left: position.x - 1,
          top: position.y - 1,
          transition: "opacity 0.2s ease",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
