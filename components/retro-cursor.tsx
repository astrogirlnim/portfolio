"use client"

import { useEffect, useRef, useState } from "react"

function isFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches
}

export default function RetroCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!isFinePointer()) return
    setEnabled(true)

    const media = window.matchMedia("(hover: hover) and (pointer: fine)")
    const onMedia = () => {
      if (!media.matches) setEnabled(false)
    }
    media.addEventListener("change", onMedia)

    return () => media.removeEventListener("change", onMedia)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const node = cursorRef.current
    if (!node) return

    const setMode = (target: EventTarget | null) => {
      const el = target instanceof Element ? target : null
      if (!el) {
        node.dataset.mode = "default"
        return
      }
      if (el.closest("input, textarea, select, [contenteditable='true']")) {
        node.dataset.mode = "text"
        return
      }
      if (el.closest("a, button, [role='button'], label, summary, .hero-portrait")) {
        node.dataset.mode = "pointer"
        return
      }
      node.dataset.mode = "default"
    }

    const onMove = (event: MouseEvent) => {
      node.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      node.dataset.on = "true"
      setMode(event.target)
    }

    const onLeave = () => {
      node.dataset.on = "false"
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", onLeave)

    return () => {
      window.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div ref={cursorRef} className="site-cursor" aria-hidden="true">
      <svg viewBox="0 0 32 32" className="site-cursor-mark">
        <circle className="site-cursor-ring" cx="16" cy="16" r="11" />
        <circle className="site-cursor-core" cx="16" cy="16" r="2.4" />
        <path className="site-cursor-ticks" d="M16 2v6M16 24v6M2 16h6M24 16h6" />
      </svg>
    </div>
  )
}
