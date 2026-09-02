import Link from "next/link"
import type { ReactNode } from "react"

const linkClass = "underline decoration-border underline-offset-4 transition-colors hover:text-primary"
const emphasisClass = "font-display italic text-foreground"

function renderSegment(part: string, keyPrefix: string): ReactNode {
  if (!part) {
    return null
  }

  const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
  if (linkMatch) {
    const [, label, href] = linkMatch
    if (href.startsWith("/")) {
      return (
        <Link key={keyPrefix} href={href} className={linkClass}>
          {label}
        </Link>
      )
    }
    return (
      <a key={keyPrefix} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {label}
      </a>
    )
  }

  const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
  if (boldMatch) {
    return (
      <em key={keyPrefix} className={emphasisClass}>
        {boldMatch[1]}
      </em>
    )
  }

  return part
}

export function renderBlogText(text: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
    .map((part, index) => renderSegment(part, `${index}`))
    .filter(Boolean)
}
