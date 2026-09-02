import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteFooter() {
  return (
    <footer className="py-6 sm:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center font-mono text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground sm:text-xs md:text-left">
          © {new Date().getFullYear()} Nataly Smith · Vol. 01
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/astrogirlnim">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/nataly-smith/">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:nmmsoftware@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
