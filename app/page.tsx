import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Database, Github, Linkedin, Mail, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"
import SkillGrid from "@/components/skill-grid"
import Timeline from "@/components/timeline"
import ThemeToggle from "@/components/theme-toggle"
import EducationSection from "@/components/education-section"
import RetroCursor from "@/components/retro-cursor"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <RetroCursor />
      {/* Navigation */}
      <header className="fixed top-0 w-full border-b border-border/40 backdrop-blur-sm z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/images/ghibli_icon.png"
              alt="Nataly Moreno-Martinez"
              width={32}
              height={32}
              className="pixel-image"
            />
            <div className="font-mono text-lg font-bold gradient-text">NATALY.DEV</div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#journey" className="text-sm font-medium hover:text-primary transition-colors">
              Journey
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-start gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="px-3 py-1 text-sm font-mono">
                SENIOR SOFTWARE DEVELOPER
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Building <span className="text-primary elegant-underline">full-stack</span> solutions with mathematical
                precision.
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Specializing in cloud technologies, mathematical modeling, and pipeline architecture.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="#projects">
                    View Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="ghost" size="lg">
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="hidden md:block float">
              <div className="aspect-square bg-muted border border-border relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center p-8">
                    <pre className="font-mono text-xs md:text-sm overflow-hidden">
                      <code className="text-primary">
                        {`function solve(problem) {
  if (isSimple(problem)) {
    return directSolution(problem);
  }
  
  const subproblems = decompose(problem);
  const solutions = subproblems.map(solve);
  
  return combine(solutions);
}`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Expertise Section */}
        <section id="about" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight elegant-underline">About & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              I'm a Senior Software Developer specializing in full-stack app development, mathematical modeling, with
              expertise in cloud technologies/infrastructure and pipeline architecture. Mixing Python, C#, and custom
              Bash/Shell scripting for most projects, I have experience with many other languages and frameworks for
              professional development.
            </p>
            <p className="text-lg text-muted-foreground">
              I'm an avid learner of the latest tools and platforms; currently exploring computer hardware, AI, and the
              global internet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="retro-card">
                <CardContent className="pt-6">
                  <Code2 className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
                  <p className="text-muted-foreground">
                    Building end-to-end applications with a focus on performance and user experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="retro-card">
                <CardContent className="pt-6">
                  <Server className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Designing and implementing scalable, resilient cloud-based solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="retro-card">
                <CardContent className="pt-6">
                  <Database className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Pipeline Architecture</h3>
                  <p className="text-muted-foreground">
                    Creating efficient data pipelines for processing and analysis at scale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight elegant-underline">Technical Skills</h2>
            <p className="text-lg text-muted-foreground">
              My core expertise spans multiple languages, frameworks, and platforms with a focus on Python, C#, and
              custom shell scripting.
            </p>
          </div>
          <SkillGrid />
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight elegant-underline">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects that demonstrate my technical capabilities and problem-solving approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Azure DevOps Migration"
              description="Completed a full-scale Azure DevOps migration in record 3 months by coordinating team efforts and creating custom programmatic tools."
              tags={["Azure", "DevOps", "Python", "Automation"]}
              image="/placeholder.svg?height=300&width=600"
            />
            <ProjectCard
              title="Genomic Sequencing Infrastructure"
              description="Constructed a multi-cloud implementation of Genomic sequencing testing infrastructure with enhanced performance and reliability."
              tags={["AWS", "Azure", "Bioinformatics", "Python"]}
              image="/placeholder.svg?height=300&width=600"
            />
            <ProjectCard
              title="Application Performance Optimization"
              description="Increased critical application performance by 400% through re-architecture of existing code and implementation of optimized algorithms."
              tags={["C#", ".NET", "Performance", "Optimization"]}
              image="/placeholder.svg?height=300&width=600"
            />
            <ProjectCard
              title="Next-Gen Sequencing Tools"
              description="Developed research tools for next-generation sequencing with integrated web portal for interdepartmental access."
              tags={["Python", "C++", "Computer Vision", "Web Development"]}
              image="/placeholder.svg?height=300&width=600"
            />
          </div>
        </section>

        {/* Professional Journey Section */}
        <section id="journey" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight elegant-underline">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              My career path and key milestones that have shaped my expertise and approach to software development.
            </p>
          </div>
          <Timeline />
        </section>

        {/* Education Section */}
        <EducationSection />

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight elegant-underline">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Interested in working together? Reach out to discuss potential projects or opportunities.
              </p>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>nmmsoftware@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://linkedin.com/in/nataly-moreno-martinez/"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/nataly-moreno-martinez/
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com/nmprojects" className="hover:text-primary transition-colors">
                    github.com/nmprojects
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full p-2 bg-background border border-border"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 bg-background border border-border"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input id="subject" className="w-full p-2 bg-background border border-border" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 bg-background border border-border resize-none"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} • Nataly Moreno-Martinez • Built with precision and purpose
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/nmprojects">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/nataly-moreno-martinez/">
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
    </div>
  )
}
