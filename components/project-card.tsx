import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
}

export default function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:border-primary/50 hover-glow hover:scale-105 card-gradient">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-primary/5 p-2 group-hover:bg-primary/10 transition-colors duration-300">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">{title}</h3>
              {link && (
                <Link href={link} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex-shrink-0 ml-4" target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="h-6 w-6" />
                </Link>
              )}
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono text-xs hover-glow">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
