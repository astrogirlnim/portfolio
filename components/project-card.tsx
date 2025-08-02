import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  link?: string
}

export default function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  const CardContent = () => (
    <div className="group rounded-lg bg-card text-card-foreground shadow-sm hover-glow transition-all duration-300 hover:scale-105 card-gradient overflow-hidden project-card-enhanced ">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1 font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        {link && (
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-2 text-sm text-primary font-medium group-hover:text-primary/80 transition-colors duration-300">
              <ExternalLink className="h-4 w-4" />
              View Project
            </div>
          </div>
        )}
      </div>
    </div>
  )

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}
