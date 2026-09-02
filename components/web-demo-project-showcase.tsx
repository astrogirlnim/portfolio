"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface WebDemoProjectShowcaseProps {
  title: string
  description: string
  tags: string[]
  demoUrl: string
  githubLink?: string
  liveLink?: string
  liveLinkText?: string
  demoPosition?: "left" | "right"
  figureLabel?: string
  why?: string
}

const PREVIEW_WIDTH = 1280
const PREVIEW_HEIGHT = 800

export default function WebDemoProjectShowcase({
  title,
  description,
  tags,
  demoUrl,
  githubLink,
  liveLink,
  liveLinkText = "Live App",
  demoPosition = "left",
  figureLabel,
  why,
}: WebDemoProjectShowcaseProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [scale, setScale] = useState(0.5)
  const isDemoRight = demoPosition === "right"
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const node = frameRef.current
    if (!node) return

    const updateScale = () => {
      const width = node.getBoundingClientRect().width
      if (width > 0) {
        setScale(width / PREVIEW_WIDTH)
      }
    }

    updateScale()
    const observer = new ResizeObserver(updateScale)
    observer.observe(node)
    return () => observer.disconnect()
  }, [isMounted])

  return (
    <figure className="border-t border-border py-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10">
        <div className={`order-1 flex flex-col justify-center py-2 lg:col-span-5 ${isDemoRight ? "lg:order-1" : "lg:order-2"}`}>
          {figureLabel && <p className="fig-kicker mb-3">{figureLabel}</p>}
          <h3 className="mb-3 font-display text-3xl italic tracking-tight lg:text-4xl">{title}</h3>
          {why && (
            <p className="mb-3 font-display text-lg italic leading-relaxed text-foreground/90 lg:text-xl">
              {why}
            </p>
          )}
          <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">{description}</p>
          <p className="mt-4 font-mono text-xs tracking-wide text-muted-foreground">
            {tags.join("  ·  ")}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {githubLink && (
              <Button variant="outline" asChild className="text-sm">
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
            {liveLink && (
              <Button asChild className="text-sm">
                <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {liveLinkText}
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className={`order-2 mt-6 lg:col-span-7 lg:mt-0 ${isDemoRight ? "lg:order-2" : "lg:order-1"}`}>
          <div
            ref={frameRef}
            className="relative w-full overflow-hidden border border-border bg-background"
            style={{ aspectRatio: `${PREVIEW_WIDTH} / ${PREVIEW_HEIGHT}` }}
          >
            {isMounted ? (
              <iframe
                src={demoUrl}
                title={`${title} Live Demo`}
                className="absolute left-0 top-0 origin-top-left border-0"
                style={{
                  width: PREVIEW_WIDTH,
                  height: PREVIEW_HEIGHT,
                  transform: `scale(${scale})`,
                }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                Loading live preview...
              </div>
            )}
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 inline-flex items-center border border-border bg-background/90 px-3 py-1.5 text-sm backdrop-blur-sm transition-colors hover:bg-background"
              >
                Open live site
                <ExternalLink className="ml-1.5 h-3 w-3" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </figure>
  )
}
