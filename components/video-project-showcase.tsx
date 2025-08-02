import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, Play } from "lucide-react"

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
  videoPosition = "left"
}: VideoProjectShowcaseProps) {
  const isVideoRight = videoPosition === "right"
  
  return (
    <div className="group transition-all duration-300 hover-glow overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[60vh]">
        {/* Content Section - Shows first when video is on right */}
        {isVideoRight && (
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
              </div>
            </div>
          </div>
        )}
        
        {/* Video Section - Takes up 3/4 of the space */}
        <div className="lg:col-span-3 relative flex items-center justify-center p-4 lg:p-6 bg-gradient-to-br from-background/50 to-muted/20 rounded-lg overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <iframe
                src={video}
                className="w-full h-full border-0 rounded-lg"
                title={`${title} Demo Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        
        {/* Content Section - Shows last when video is on left */}
        {!isVideoRight && (
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 