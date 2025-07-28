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
}

export default function VideoProjectShowcase({ 
  title, 
  description, 
  tags, 
  video, 
  githubLink, 
  liveLink 
}: VideoProjectShowcaseProps) {
  return (
    <div className="group transition-all duration-300 hover-glow overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-[70vh] lg:min-h-[60vh]">
        {/* Video Section - Takes up 3/4 of the space */}
        <div className="lg:col-span-3 relative flex items-center justify-center p-4 lg:p-6 bg-gradient-to-br from-background/50 to-muted/20 rounded-lg overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src={video}
              className="w-full h-auto max-h-[calc(100%-2rem)] rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] object-contain"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/10 rounded-lg group-hover:from-primary/10 group-hover:to-accent/15 transition-all duration-300 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Content Section - Takes up 1/4 of the space */}
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
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 