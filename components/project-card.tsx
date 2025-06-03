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
    <Card className="overflow-hidden group transition-all duration-300 hover:border-primary/50 hover-glow hover:scale-105 card-gradient">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{title}</h3>
          {link && (
            <Link href={link} className="text-muted-foreground hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          )}
        </div>
        <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{description}</p>
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
