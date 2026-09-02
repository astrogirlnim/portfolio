import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { renderBlogText } from "@/components/blog-prose"
import { formatPostDate, getAllPostSlugs, getPostBySlug } from "@/lib/blog"
import { getAssetPath } from "@/lib/utils"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: "Post not found | Nataly Smith" }
  }
  return {
    title: `${post.title} | Nataly Smith`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-16 pt-24 sm:pt-28">
        <article className="container max-w-3xl">
          <p className="fig-kicker mb-4">
            <Link href="/blog/" className="transition-colors hover:text-primary">
              Blog
            </Link>
            {" · "}
            {formatPostDate(post.date)}
          </p>
          <h1 className="mb-4 font-display text-4xl tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mb-8 font-mono text-xs tracking-wide text-muted-foreground">
            {post.tags.join("  ·  ")}
          </p>

          {post.tldr && post.tldr.length > 0 && (
            <aside className="mb-10">
              <p className="fig-kicker mb-4">TL;DR</p>
              <div className="divide-y divide-border border-y border-border">
                {post.tldr.map((line, index) => (
                  <p
                    key={line}
                    className="grid grid-cols-[auto_1fr] gap-x-4 py-4 text-lg leading-relaxed text-muted-foreground sm:text-xl"
                  >
                    <span className="fig-kicker pt-1">{String(index + 1).padStart(2, "0")}</span>
                    <span>{renderBlogText(line)}</span>
                  </p>
                ))}
              </div>
            </aside>
          )}

          {post.image && (
            <figure className="mb-10">
              <Image
                src={getAssetPath(post.image)}
                alt={post.imageCaption ?? post.title}
                width={1200}
                height={800}
                className="h-auto w-full border border-border object-contain"
                priority
              />
              {post.imageCaption && (
                <figcaption className="fig-kicker mt-3">{post.imageCaption}</figcaption>
              )}
            </figure>
          )}

          {post.nameNote && (
            <p className="mb-10 border-l-2 border-foreground pl-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {renderBlogText(post.nameNote)}
            </p>
          )}

          <div className="space-y-12 border-t border-border pt-8">
            {post.sections
              ? post.sections.map((section, sectionIndex) => (
                  <section key={`${post.slug}-section-${sectionIndex}`} className="space-y-6">
                    {section.heading && <p className="fig-kicker">{section.heading}</p>}
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={`${post.slug}-${sectionIndex}-${index}`}
                        className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
                      >
                        {renderBlogText(paragraph)}
                      </p>
                    ))}
                    {section.bullets && (
                      <div className="border border-border px-5 py-4">
                        <p className="fig-kicker mb-4">{section.bullets.lead}</p>
                        <ul className="space-y-3 font-mono text-sm leading-relaxed text-muted-foreground">
                          {section.bullets.items.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="fig-kicker pt-0.5">·</span>
                              <span>{renderBlogText(item)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))
              : post.paragraphs?.map((paragraph, index) => (
                  <div key={`${post.slug}-${index}`}>
                    <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                      {renderBlogText(paragraph)}
                    </p>
                    {post.bullets &&
                      index === (post.bulletInsertAfter ?? post.paragraphs!.length - 1) && (
                        <div className="mt-6 border border-border px-5 py-4">
                          <p className="fig-kicker mb-4">{post.bullets.lead}</p>
                          <ul className="space-y-3 font-mono text-sm leading-relaxed text-muted-foreground">
                            {post.bullets.items.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span className="fig-kicker pt-0.5">·</span>
                                <span>{renderBlogText(item)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                ))}
          </div>
          <div className="mt-12 border-t border-border pt-6">
            <Link
              href="/blog/"
              className="font-mono text-xs tracking-[0.16em] uppercase transition-colors hover:text-primary"
            >
              Back to blog
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
