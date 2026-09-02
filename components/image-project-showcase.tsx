"use client"

import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Github, Play, FileText } from "lucide-react"
import AutoPlay from "embla-carousel-autoplay"

interface ImageProjectShowcaseProps {
  title: string
  description: string
  tags: string[]
  images?: string[]
  panel?: ReactNode
  githubLink?: string
  liveLink?: string
  liveLinkText?: string
  whitepaperLink?: string
  imagePosition?: "left" | "right"
  figureLabel?: string
  why?: string
}

export default function ImageProjectShowcase({
  title,
  description,
  tags,
  images = [],
  panel,
  githubLink,
  liveLink,
  liveLinkText = "Live Demo",
  whitepaperLink,
  imagePosition = "left",
  figureLabel,
  why,
}: ImageProjectShowcaseProps) {
  const isImageRight = imagePosition === "right"
  const hasImages = images.length > 0

  return (
    <figure className="border-t border-border py-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10">
        <div className={`order-1 flex flex-col justify-center py-2 lg:col-span-5 ${isImageRight ? "lg:order-1" : "lg:order-2"}`}>
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
            {whitepaperLink && (
              <Button variant="outline" asChild className="text-sm">
                <Link href={whitepaperLink} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Whitepaper
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className={`order-2 relative mt-6 lg:col-span-7 lg:mt-0 ${isImageRight ? "lg:order-2" : "lg:order-1"}`}>
          {panel ? (
            panel
          ) : hasImages ? (
          <Carousel
            className="w-full"
            plugins={[AutoPlay({ delay: 4000 })]}
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={image}>
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={image}
                      alt={`${title} screenshot ${index + 1}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full border border-border object-contain"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-8 w-8 border-border bg-background/80 hover:bg-background" />
            <CarouselNext className="right-2 h-8 w-8 border-border bg-background/80 hover:bg-background" />
          </Carousel>
          ) : null}
        </div>
      </div>
    </figure>
  )
}
