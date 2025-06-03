import Link from "next/link"
import { ArrowRight, Code2, Database, Github, Linkedin, Mail, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"
import SkillGrid from "@/components/skill-grid"
import Timeline from "@/components/timeline"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full border-b border-border/40 backdrop-blur-sm z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="font-mono text-lg font-bold">DEV.PORTFOLIO</div>
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
                Building <span className="text-primary">full-stack</span> solutions with mathematical precision.
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
            <div className="hidden md:block">
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
            <h2 className="text-3xl font-bold tracking-tight">About & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              I'm a Senior Software Developer with extensive experience in full-stack development, cloud infrastructure,
              and mathematical modeling. My approach combines technical depth with architectural vision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <Code2 className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
                  <p className="text-muted-foreground">
                    Building end-to-end applications with a focus on performance and user experience.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Server className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Designing and implementing scalable, resilient cloud-based solutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
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
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
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
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of projects that demonstrate my technical capabilities and problem-solving approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Cloud Data Pipeline"
              description="Designed and implemented a scalable data processing pipeline handling 10TB+ of data daily with real-time analytics capabilities."
              tags={["Python", "AWS", "Kafka", "Spark"]}
              image="/placeholder.svg?height=300&width=600"
            />
            <ProjectCard
              title="Mathematical Modeling Framework"
              description="Built a framework for creating and solving complex mathematical models, with applications in finance and scientific computing."
              tags={["C#", "CUDA", "Linear Algebra", "Optimization"]}
              image="/placeholder.svg?height=300&width=600"
            />
            <ProjectCard
              title="Infrastructure Automation Suite"
              description="Developed a comprehensive suite of tools for automating cloud infrastructure deployment and management."
              tags={["Bash", "Terraform", "Docker", "Kubernetes"]}
              image="/placeholder.svg?height=300&width=600"
            />
            <ProjectCard
              title="AI-Powered Analytics Platform"
              description="Created an analytics platform that leverages machine learning to provide predictive insights from complex datasets."
              tags={["Python", "TensorFlow", "React", "GraphQL"]}
              image="/placeholder.svg?height=300&width=600"
            />
          </div>
        </section>

        {/* Professional Journey Section */}
        <section id="journey" className="py-20 border-t border-border">
          <div className="space-y-4 max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Professional Journey</h2>
            <p className="text-lg text-muted-foreground">
              My career path and key milestones that have shaped my expertise and approach to software development.
            </p>
          </div>
          <Timeline />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Interested in working together? Reach out to discuss potential projects or opportunities.
              </p>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://linkedin.com" className="hover:text-primary transition-colors">
                    linkedin.com/in/yourprofile
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com" className="hover:text-primary transition-colors">
                    github.com/yourusername
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
                      className="w-full p-2 bg-background border border-border rounded-md"
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
                      className="w-full p-2 bg-background border border-border rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full p-2 bg-background border border-border rounded-md"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 bg-background border border-border rounded-md resize-none"
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
            © {new Date().getFullYear()} • Built with precision and purpose
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:contact@example.com">
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
