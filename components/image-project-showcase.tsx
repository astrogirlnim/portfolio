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
  imagePosition = "left"
}: ImageProjectShowcaseProps) {
  const isImageRight = imagePosition === "right"
  
  return (
    <div className="group transition-all duration-300 hover-glow overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-[70vh] lg:min-h-[60vh]">
        {/* Content Section - Shows first when images are on right */}
        {isImageRight && (
          <div className="lg:col-span-1 p-4 lg:p-6 flex flex-col justify-center bg-gradient-to-br from-background/80 to-muted/30 rounded-lg">
            <div className="space-y-4 lg:space-y-6">
              <div>
                <Badge variant="outline" className="px-3 py-1 text-sm font-mono hover-glow mb-3 lg:mb-4">
                  FEATURED PROJECT
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors duration-300 mb-3 lg:mb-4">
                  {title}
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-xs hover-glow">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 lg:gap-4 pt-2 lg:pt-4">
                {githubLink && (
                  <Button variant="outline" asChild className="hover-glow text-sm lg:text-base">
                    <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
                {liveLink && (
                  <Button asChild className="hover-glow text-sm lg:text-base">
                    <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      {liveLinkText}
                    </Link>
                  </Button>
                )}
                {whitepaperLink && (
                  <Button variant="outline" asChild className="hover-glow text-sm lg:text-base">
                    <Link href={whitepaperLink} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Whitepaper
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Image Carousel Section - Takes up 3/4 of the space */}
        <div className="lg:col-span-3 relative flex items-center justify-center p-4 lg:p-6 bg-gradient-to-br from-background/50 to-muted/20 rounded-lg overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <Carousel 
              className="w-full h-full"
              plugins={[
                AutoPlay({
                  delay: 4000,
                })
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={image}
                        alt={`${title} screenshot ${index + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto max-h-[calc(100%-2rem)] rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 border-border hover-glow" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 border-border hover-glow" />
            </Carousel>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/10 rounded-lg group-hover:from-primary/10 group-hover:to-accent/15 transition-all duration-300 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Content Section - Shows last when images are on left */}
        {!isImageRight && (
          <div className="lg:col-span-1 p-4 lg:p-6 flex flex-col justify-center bg-gradient-to-br from-background/80 to-muted/30 rounded-lg">
            <div className="space-y-4 lg:space-y-6">
              <div>
                <Badge variant="outline" className="px-3 py-1 text-sm font-mono hover-glow mb-3 lg:mb-4">
                  FEATURED PROJECT
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors duration-300 mb-3 lg:mb-4">
                  {title}
                </h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-xs hover-glow">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 lg:gap-4 pt-2 lg:pt-4">
                {githubLink && (
                  <Button variant="outline" asChild className="hover-glow text-sm lg:text-base">
                    <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
                {liveLink && (
                  <Button asChild className="hover-glow text-sm lg:text-base">
                    <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      {liveLinkText}
                    </Link>
                  </Button>
                )}
                {whitepaperLink && (
                  <Button variant="outline" asChild className="hover-glow text-sm lg:text-base">
                    <Link href={whitepaperLink} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Whitepaper
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 