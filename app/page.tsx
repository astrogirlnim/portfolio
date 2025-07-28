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
import { getImagePath } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full border-b border-border/40 backdrop-blur-sm z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="font-mono text-lg font-bold">NATALY.DEV</div>
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

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-start gap-8 pt-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center w-full">
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative group hero-animate-delay-2 w-full max-w-[400px] lg:max-w-none">
                  <Image
                    src={getImagePath("images/Profile_pic_new.jpg")}
                    alt="Nataly Smith"
                    width={450}
                    height={600}
                    className="rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 to-accent/15 rounded-3xl group-hover:from-primary/12 group-hover:to-accent/20 transition-all duration-500"></div>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-6 flex flex-col justify-center">
                <Badge variant="outline" className="px-3 py-1 text-sm font-mono hover-glow hero-animate w-fit">
                  SENIOR SOFTWARE DEVELOPER
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight hero-animate-delay-1">
                  Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nataly</span> Smith
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl hero-animate-delay-2 font-light leading-relaxed">
                  I specialize in <span className="font-bold text-[#b0b4ab]">full-stack app development</span>, <span className="font-bold text-[#b0b4ab]">mathematical modeling</span>, with expertise in <span className="font-bold text-[#b0b4ab]">cloud technologies/infrastructure</span> and <span className="font-bold text-[#b0b4ab]">pipeline architecture</span>.
                </p>
                <div className="flex flex-wrap gap-4 pt-4 hero-animate-delay-3">
                  <Button size="lg" asChild className="hover-glow font-medium">
                    <Link href="#projects">
                      View Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="hover-glow font-medium">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button variant="ghost" size="lg" asChild className="hover-glow font-medium">
                                    <Link href={getImagePath("images/NMM_Resume_Updated.pdf")} target="_blank">
                    Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Expertise Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center border-t border-border">
          <div className="container">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">About & Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Senior Software Developer who specializes in <span className="font-bold text-[#b0b4ab]">full-stack app development</span>, <span className="font-bold text-[#b0b4ab]">mathematical modeling</span>, with expertise in <span className="font-bold text-[#b0b4ab]">cloud technologies/infrastructure</span> and <span className="font-bold text-[#b0b4ab]">pipeline architecture</span>. Mixing Python, C#, and custom Bash/Shell scripting for most projects, experience with many other languages and frameworks for professional development. Avid learner of the latest tools and platforms; currently exploring computer hardware, AI, and the global internet.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient">
                  <CardContent className="pt-6">
                    <Code2 className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Full-Stack Development</h3>
                    <p className="text-muted-foreground">
                      Building end-to-end applications with Python, C#, and modern web frameworks.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient">
                  <CardContent className="pt-6">
                    <Server className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
                    <p className="text-muted-foreground">
                      Multi-cloud implementation expertise with Azure, AWS, and Google Cloud Platform.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient">
                  <CardContent className="pt-6">
                    <Database className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Mathematical Modeling</h3>
                    <p className="text-muted-foreground">
                      Computational modeling and machine learning applications for research and industry.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col justify-center border-t border-border">
          <div className="container">
            <div className="space-y-4 max-w-3xl mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
              <p className="text-lg text-muted-foreground">
                My core expertise spans multiple languages, frameworks, and platforms. I primarily use Python, C#, and custom Bash/Shell scripting, with experience across many other languages and cutting-edge frameworks for professional development.
              </p>
            </div>
            <SkillGrid />
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="min-h-screen flex flex-col justify-center border-t border-border">
          <div className="container">
            <div className="space-y-4 max-w-3xl mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                A selection of projects that demonstrate my technical capabilities across research, medical devices, and aerospace engineering.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard
                title="Stochastic Computational Modeling of HIV"
                description="A transcriptional cycling model that recapitulates chromatin-dependent features of noisy inducible transcription. Published research on computational modeling of variable activation of quiescent HIV infections in T cells."
                tags={["MATLAB", "NFSim", "R", "Computational Biology"]}
                image={getImagePath("images/project_icon_1.png")}
                link="https://doi.org/10.1371/journal.pcbi.1010152"
              />
              <ProjectCard
                title="Simplifying Fracture Treatment: Medical Device Set"
                description="Developed a medical device that externally fastens Kirschner wires to prevent complications in fracture malformation and sequestering within the body. Prevents wire migration away from fracture sites."
                tags={["MATLAB", "Python", "CAD", "Medical Device"]}
                image={getImagePath("images/project_icon_2.png")}
                link="https://seas.yale.edu/news-events/news/students-present-medical-innovations"
              />
              <ProjectCard
                title="Project Rocket: Yale Undergraduate Aerospace"
                description="Designed and constructed hybrid solid-liquid fuel rockets for national IREC competition. Engineering and fabrication of YUAA's rocket with focus on propulsion systems and aerodynamics."
                tags={["MATLAB", "CAD", "Aerospace Engineering", "Propulsion"]}
                image={getImagePath("images/project_icon_3.png")}
              />
              <ProjectCard
                title="Bioinformatics of Protein-Protein Interactions"
                description="Independent summer computational research visualizing protein-protein interactions using multiple bioinformatic tools. Applied linear regression and random models to TCGA High-Throughput Human data for gene enrichment analyses."
                tags={["R", "ChimeraX", "Bioinformatics", "TCGA Data"]}
                image={getImagePath("images/project_icon_4.png")}
              />
            </div>
          </div>
        </section>

        {/* Professional Journey Section */}
        <section id="journey" className="min-h-screen flex flex-col justify-center border-t border-border">
          <div className="container">
            <div className="space-y-4 max-w-3xl mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Professional Journey</h2>
              <p className="text-lg text-muted-foreground">
                My career path and key milestones that have shaped my expertise and approach to software development.
              </p>
            </div>
            <Timeline />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex flex-col justify-center border-t border-border">
          <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
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
                  <Link href="https://www.linkedin.com/in/nataly-smith/" className="hover:text-primary transition-colors">
                    linkedin.com/in/nataly-smith/
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com/astrogirlnim" className="hover:text-primary transition-colors">
                    github.com/astrogirlnim
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-5 w-5 text-muted-foreground">📞</span>
                  <span>+1-505-203-6058</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Let's Connect</h3>
                <p className="text-lg text-muted-foreground">
                  Ready to discuss your next project? I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <Button size="lg" asChild className="hover-glow">
                    <Link href="mailto:nmmsoftware@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Click the button above to open your email client, or reach out to me directly at{" "}
                    <Link 
                      href="mailto:nmmsoftware@gmail.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      nmmsoftware@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nataly Smith • Built with precision and purpose
          </div>
          <div className="flex items-center gap-4">
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
    </div>
  )
}
