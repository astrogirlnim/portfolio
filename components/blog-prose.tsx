import Link from "next/link"
import type { ReactNode } from "react"
import katex from "katex"

const linkClass = "underline decoration-border underline-offset-4 transition-colors hover:text-primary"
const emphasisClass = "font-display italic text-foreground"
const codeClass = "rounded-sm bg-muted px-1 py-0.5 font-mono text-[0.9em] text-foreground"

function renderMath(tex: string, displayMode: boolean, key: string): ReactNode {
  try {
    const html = katex.renderToString(tex, {
      displayMode,
      throwOnError: false,
      strict: "ignore",
    })
    return (
      <span
        key={key}
        className={displayMode ? "my-2 block overflow-x-auto" : "mx-0.5 inline-block"}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  } catch {
    return (
      <code key={key} className={codeClass}>
        {tex}
      </code>
    )
  }
}

function renderSegment(part: string, keyPrefix: string): ReactNode {
  if (!part) {
    return null
  }

  const displayMath = part.match(/^\$\$([\s\S]+?)\$\$$/)
  if (displayMath) {
    return renderMath(displayMath[1], true, keyPrefix)
  }

  const inlineMath = part.match(/^\$([^$]+)\$$/)
  if (inlineMath) {
    return renderMath(inlineMath[1], false, keyPrefix)
  }

  const linkMatch = part.match(/^\[([^\]]+)\]\(((?:[^()]|\([^()]*\))*)\)$/)
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

  const codeMatch = part.match(/^`([^`]+)`$/)
  if (codeMatch) {
    return (
      <code key={keyPrefix} className={codeClass}>
        {codeMatch[1]}
      </code>
    )
  }

  return part
}

export function renderBlogText(text: string): ReactNode[] {
  return text
    .split(
      /(\$\$[\s\S]+?\$\$|\$[^$]+\$|\*\*[^*]+\*\*|\[[^\]]+\]\((?:[^()]|\([^()]*\))*\)|`[^`]+`)/g
    )
    .map((part, index) => renderSegment(part, `${index}`))
    .filter(Boolean)
}
