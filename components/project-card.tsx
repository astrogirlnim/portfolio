import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  index?: string
  title: string
  description: string
  tags: string[]
  link?: string
  venue?: string
  why?: string
}

export default function ProjectCard({ index, title, description, tags, link, venue, why }: ProjectCardProps) {
  const inner = (
    <article className="group grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-b border-border py-7 first:border-t">
      {index ? <span className="fig-kicker pt-2">{index}</span> : <span />}
      <div>
        <h3 className="font-display text-2xl italic tracking-tight transition-colors duration-300 group-hover:text-primary">
          {title}
          {link && <ExternalLink className="ml-2 inline h-3.5 w-3.5 align-baseline opacity-60" />}
        </h3>
        {venue && (
          <p className="mt-1 font-mono text-xs tracking-[0.16em] uppercase text-muted-foreground">
            {venue}
          </p>
        )}
        {why && (
          <p className="mt-2 font-display text-base italic leading-relaxed text-foreground/90">
            {why}
          </p>
        )}
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mt-3 font-mono text-xs tracking-wide text-muted-foreground">
          {tags.join("  ·  ")}
        </p>
      </div>
    </article>
  )

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </Link>
    )
  }

  return inner
}
