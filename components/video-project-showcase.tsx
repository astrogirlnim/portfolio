"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
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
}: VideoProjectShowcaseProps) {
  const [isMounted, setIsMounted] = useState(false)
  const isVideoRight = videoPosition === "right"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className={`order-1 flex flex-col justify-center p-5 sm:p-6 lg:col-span-5 lg:p-8 ${isVideoRight ? "lg:order-1" : "lg:order-2"}`}>
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
                  <Play className="mr-2 h-4 w-4" />
                  {liveLinkText}
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className={`order-2 bg-muted/20 p-3 sm:p-4 lg:col-span-7 lg:p-6 ${isVideoRight ? "lg:order-2" : "lg:order-1"}`}>
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-xl">
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
    </div>
  )
}
