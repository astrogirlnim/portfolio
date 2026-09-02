import Link from "next/link"
import type { Metadata } from "next"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { formatPostDate, getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog | Nataly Smith",
  description: "A weekly log on software at the intersection of AI, systems, and science.",
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-16 pt-24 sm:pt-28">
        <div className="container">
          <p className="fig-kicker mb-4">Blog</p>
          <h1 className="mb-3 font-display text-4xl tracking-tight sm:text-5xl">Weekly log</h1>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            One post a week. Notes from building across AI, systems, formal methods, and science.
          </p>

          <div className="divide-y divide-border border-y border-border">
            {posts.map((post, index) => (
              <article key={post.slug} className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 py-7">
                <span className="fig-kicker pt-2">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-mono text-xs tracking-[0.16em] uppercase text-muted-foreground">
                    {formatPostDate(post.date)}
                  </p>
                  <h2 className="mt-2 font-display text-2xl italic tracking-tight sm:text-3xl">
                    <Link href={`/blog/${post.slug}/`} className="transition-colors hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 font-mono text-xs tracking-wide text-muted-foreground">
                    {post.tags.join("  ·  ")}
                  </p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="mt-4 inline-block font-mono text-xs tracking-[0.16em] uppercase transition-colors hover:text-primary"
                  >
                    Read post
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
