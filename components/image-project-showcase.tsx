"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Github, Play, FileText } from "lucide-react"
import AutoPlay from "embla-carousel-autoplay"

interface ImageProjectShowcaseProps {
  title: string
  description: string
  tags: string[]
  images: string[]
  githubLink?: string
  liveLink?: string
  liveLinkText?: string
  whitepaperLink?: string
  imagePosition?: "left" | "right"
}

export default function ImageProjectShowcase({
  title,
  description,
  tags,
  images,
  githubLink,
  liveLink,
  liveLinkText = "Live Demo",
  whitepaperLink,
  imagePosition = "left",
}: ImageProjectShowcaseProps) {
  const isImageRight = imagePosition === "right"

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className={`order-1 flex flex-col justify-center p-5 sm:p-6 lg:col-span-5 lg:p-8 ${isImageRight ? "lg:order-1" : "lg:order-2"}`}>
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

        <div className={`order-2 relative overflow-hidden bg-muted/20 p-3 sm:p-4 lg:col-span-7 lg:p-6 ${isImageRight ? "lg:order-2" : "lg:order-1"}`}>
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
                      className="h-auto w-full rounded-lg object-contain shadow-xl"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-8 w-8 border-border bg-background/80 hover:bg-background" />
            <CarouselNext className="right-2 h-8 w-8 border-border bg-background/80 hover:bg-background" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}
