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
                    {section.image && (
                      <figure>
                        <Image
                          src={getAssetPath(section.image)}
                          alt={section.imageCaption ?? section.heading ?? post.title}
                          width={1200}
                          height={520}
                          className="h-auto w-full border border-border object-contain bg-muted/30"
                        />
                        {section.imageCaption && (
                          <figcaption className="fig-kicker mt-3">{section.imageCaption}</figcaption>
                        )}
                      </figure>
                    )}
                    {section.codeBlock && (
                      <pre className="overflow-x-auto border border-border bg-muted/40 px-5 py-4 font-mono text-sm leading-relaxed text-muted-foreground">
                        <code>{section.codeBlock}</code>
                      </pre>
                    )}
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
                    {section.table && (
                      <div className="overflow-x-auto border border-border">
                        <table className="w-full min-w-[40rem] border-collapse text-left">
                          <thead>
                            <tr className="border-b border-border bg-muted/40">
                              {section.table.headers.map((header) => (
                                <th
                                  key={header}
                                  className="fig-kicker px-4 py-3 font-normal text-foreground"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rowIndex) => (
                              <tr
                                key={`${post.slug}-table-${sectionIndex}-${rowIndex}`}
                                className="border-b border-border last:border-b-0"
                              >
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={`${post.slug}-cell-${sectionIndex}-${rowIndex}-${cellIndex}`}
                                    className="px-4 py-4 align-top text-sm leading-relaxed text-muted-foreground sm:text-base"
                                  >
                                    {cell
                                      ? cell.split("\n").map((line, lineIndex) => (
                                          <span
                                            key={`${post.slug}-line-${sectionIndex}-${rowIndex}-${cellIndex}-${lineIndex}`}
                                          >
                                            {lineIndex > 0 ? <br /> : null}
                                            {lineIndex > 0 ? (
                                              <span className="mt-2 inline-block">
                                                {renderBlogText(line)}
                                              </span>
                                            ) : (
                                              renderBlogText(line)
                                            )}
                                          </span>
                                        ))
                                      : null}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {section.rungs && (
                      <div className="overflow-x-auto border border-border">
                        <table className="w-full min-w-[64rem] border-collapse text-left">
                          <thead>
                            <tr className="border-b border-border bg-muted/40">
                              {["Rung", "Status", "Idea", "Formal", "Summary"].map((header) => (
                                <th
                                  key={header}
                                  className="fig-kicker px-3 py-3 font-normal text-foreground"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.rungs.map((rung) => (
                              <tr
                                key={rung.title}
                                className="border-b border-border last:border-b-0"
                              >
                                <td className="min-w-[10rem] px-3 py-4 align-top">
                                  <p className="font-display text-base italic leading-snug text-foreground">
                                    {rung.title}
                                  </p>
                                  <p className="mt-2 break-words font-mono text-[0.7rem] leading-relaxed tracking-wide text-muted-foreground">
                                    {renderBlogText(rung.references)}
                                  </p>
                                </td>
                                <td className="min-w-[7rem] px-3 py-4 align-top">
                                  <p className="fig-kicker leading-snug">{rung.status}</p>
                                </td>
                                <td
                                  className="group/idea relative min-w-[14rem] px-3 py-4 align-top text-sm leading-relaxed text-muted-foreground"
                                  tabIndex={rung.detail ? 0 : undefined}
                                >
                                  <p
                                    className={
                                      rung.detail
                                        ? "underline decoration-dotted decoration-muted-foreground/60 underline-offset-4"
                                        : undefined
                                    }
                                  >
                                    {renderBlogText(rung.idea)}
                                  </p>
                                  {rung.detail && (
                                    <>
                                      <div className="mt-3 space-y-2 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground [@media(hover:hover)]:hidden">
                                        <p className="fig-kicker">Detail</p>
                                        {rung.detail.split("\n").map((line) => (
                                          <p key={`${rung.title}-detail-inline-${line.slice(0, 24)}`}>
                                            {renderBlogText(line)}
                                          </p>
                                        ))}
                                      </div>
                                      <div
                                        role="tooltip"
                                        className="pointer-events-none absolute left-0 top-full z-20 mt-1 hidden w-[min(22rem,calc(100vw-2rem))] border border-border bg-background p-4 opacity-0 shadow-sm transition-opacity duration-150 [@media(hover:hover)]:group-hover/idea:block [@media(hover:hover)]:group-hover/idea:opacity-100 [@media(hover:hover)]:group-focus-within/idea:block [@media(hover:hover)]:group-focus-within/idea:opacity-100"
                                      >
                                        <p className="fig-kicker mb-3">Detail</p>
                                        <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                                          {rung.detail.split("\n").map((line) => (
                                            <p key={`${rung.title}-detail-tip-${line.slice(0, 24)}`}>
                                              {renderBlogText(line)}
                                            </p>
                                          ))}
                                        </div>
                                      </div>
                                    </>
                                  )}
                                </td>
                                <td className="min-w-[14rem] px-3 py-4 align-top text-xs leading-relaxed text-muted-foreground">
                                  {rung.formal ? (
                                    <div className="space-y-2 break-words font-mono">
                                      {rung.formal.split("\n").map((line, lineIndex) => (
                                        <p
                                          key={`${rung.title}-formal-${lineIndex}`}
                                          className="leading-relaxed"
                                        >
                                          {renderBlogText(line)}
                                        </p>
                                      ))}
                                    </div>
                                  ) : null}
                                </td>
                                <td className="min-w-[14rem] px-3 py-4 align-top text-sm leading-relaxed text-foreground">
                                  {renderBlogText(rung.summary)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
