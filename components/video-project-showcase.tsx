"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Play } from "lucide-react"

interface VideoProjectShowcaseProps {
  title: string
  description: string
  tags: string[]
  video: string
  githubLink?: string
  liveLink?: string
  liveLinkText?: string
  videoPosition?: "left" | "right"
  figureLabel?: string
  why?: string
}

export default function VideoProjectShowcase({
  title,
  description,
  tags,
  video,
  githubLink,
  liveLink,
  liveLinkText = "Live Demo",
  videoPosition = "left",
  figureLabel,
  why,
}: VideoProjectShowcaseProps) {
  const [isMounted, setIsMounted] = useState(false)
  const isVideoRight = videoPosition === "right"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <figure className="border-t border-border py-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10">
        <div className={`order-1 flex flex-col justify-center py-2 lg:col-span-5 ${isVideoRight ? "lg:order-1" : "lg:order-2"}`}>
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
                  <Play className="mr-2 h-4 w-4" />
                  {liveLinkText}
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className={`order-2 mt-6 lg:col-span-7 lg:mt-0 ${isVideoRight ? "lg:order-2" : "lg:order-1"}`}>
          <div className="aspect-video w-full overflow-hidden border border-border">
            {isMounted ? (
              <iframe
                src={video}
                className="h-full w-full border-0"
                title={`${title} Demo Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={true}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted/20 text-sm text-muted-foreground">
                Loading video...
              </div>
            )}
          </div>
        </div>
      </div>
    </figure>
  )
}
