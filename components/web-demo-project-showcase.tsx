"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
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
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className={`order-1 flex flex-col justify-center p-5 sm:p-6 lg:col-span-5 lg:p-8 ${isDemoRight ? "lg:order-1" : "lg:order-2"}`}>
          <Badge variant="outline" className="mb-3 w-fit px-3 py-1 font-mono text-sm sm:mb-4">
            FEATURED PROJECT
          </Badge>
          <h3 className="mb-3 text-2xl font-semibold tracking-tight lg:text-3xl">{title}</h3>
          <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono text-sm">
                {tag}
              </Badge>
            ))}
          </div>
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

        <div className={`order-2 bg-muted/20 p-3 sm:p-4 lg:col-span-7 lg:p-6 ${isDemoRight ? "lg:order-2" : "lg:order-1"}`}>
          <div
            ref={frameRef}
            className="relative w-full overflow-hidden rounded-xl border border-border/50 bg-background shadow-xl"
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
                className="absolute bottom-3 right-3 inline-flex items-center rounded-full border border-border/70 bg-background/90 px-3 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm transition-colors hover:bg-background"
              >
                Open live site
                <ExternalLink className="ml-1.5 h-3 w-3" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
