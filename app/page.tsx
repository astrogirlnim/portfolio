import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Database, Github, Linkedin, Mail, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"
import VideoProjectShowcase from "@/components/video-project-showcase"
import ImageProjectShowcase from "@/components/image-project-showcase"
import WebDemoProjectShowcase from "@/components/web-demo-project-showcase"
import SkillGrid from "@/components/skill-grid"
import Timeline from "@/components/timeline"
import ThemeToggle from "@/components/theme-toggle"
import ProjectNavigation from "@/components/project-navigation"
import InteractiveTerminal from "@/components/interactive-terminal"
import { getImagePath, getAssetPath } from "@/lib/utils"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 w-full border-b border-border/40 backdrop-blur-sm z-50">
        <div className="container flex items-center justify-between h-16">
          <Link href="#hero" className="font-mono text-lg font-bold hover:text-primary transition-colors">
            NATALY.DEV
          </Link>
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
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
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
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start gap-8 pt-16">
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
                  AI ENGINEER & SENIOR SOFTWARE DEVELOPER
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
                
                {/* Interactive Terminal Section - Hidden on mobile for better UX */}
                <div className="mt-8 hero-animate-delay-3 hidden lg:block">
                  <InteractiveTerminal />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About/Expertise Section */}
        <section id="about" className="py-20 border-t border-border">
          <div className="container">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About & Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Senior Software Developer who specializes in <span className="font-bold text-[#b0b4ab]">full-stack vertical web development</span>, <span className="font-bold text-[#b0b4ab]">mathematical modeling</span>, with expertise in <span className="font-bold text-[#b0b4ab]">cloud technologies/infrastructure</span> and <span className="font-bold text-[#b0b4ab]">pipeline architecture</span>.
              </p>
            </div>

            {/* Detailed Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I blend cutting-edge technology with mathematical rigor to solve complex problems across multiple domains. From <span className="font-bold text-[#b0b4ab]">implementing DeepMind's AlphaTensor algorithm in LAPACK</span> to building <span className="font-bold text-[#b0b4ab]">privacy-first genomic platforms</span>, my work spans the intersection of AI, scientific computing, and real-world applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise extends from low-level <span className="font-bold text-[#b0b4ab]">C and C++ optimization</span> to high-level <span className="font-bold text-[#b0b4ab]">Python development</span>, modern <span className="font-bold text-[#b0b4ab]">C# applications</span>, <span className="font-bold text-[#b0b4ab]">Rust/Tauri desktop applications</span>, <span className="font-bold text-[#b0b4ab]">Flutter mobile development</span>, and <span className="font-bold text-[#b0b4ab]">AI-powered full-stack systems</span>.
              </p>
            </div>

            {/* Expertise Cards - Core Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group">
                <CardContent className="pt-6">
                  <Code2 className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3">Full-Stack Vertical Development</h3>
                  <p className="text-muted-foreground mb-3">
                    Building complete vertical solutions across web, mobile, and desktop platforms.
                  </p>
                  <div className="text-sm text-primary font-medium">
                    Python, C#, Tauri/Rust, Next.js, Flutter
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group">
                <CardContent className="pt-6">
                  <Server className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3">Cloud Infrastructure</h3>
                  <p className="text-muted-foreground mb-3">
                    Multi-cloud implementation with Azure, AWS, and Google Cloud Platform.
                  </p>
                  <div className="text-sm text-primary font-medium">
                    Firebase, Real-time Systems, Pipeline Architecture
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group">
                <CardContent className="pt-6">
                  <Database className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3">Mathematical Modeling</h3>
                  <p className="text-muted-foreground mb-3">
                    Computational modeling and machine learning for research and industry.
                  </p>
                  <div className="text-sm text-primary font-medium">
                    Python, MATLAB, R, Scientific Computing
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group">
                <CardContent className="pt-6">
                  <div className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform duration-300 flex items-center justify-center border border-primary/20 rounded-lg">
                    <span className="text-lg font-bold">AI</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI & Scientific Computing</h3>
                  <p className="text-muted-foreground mb-3">
                    Advanced algorithms from research to production systems.
                  </p>
                  <div className="text-sm text-primary font-medium">
                    C/C++, AlphaTensor, LangGraph, GPU Optimization
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="min-h-screen flex flex-col justify-center border-t border-border pt-20">
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
        <section id="projects" className="min-h-screen flex flex-col justify-center border-t border-border pt-20">
          <div className="container">
            <div className="space-y-4 max-w-3xl mb-6">
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                A selection of projects that demonstrate my technical capabilities across AI-enhanced vertical full-stack app development, mobile development, game development, mathematical modeling, and more.
              </p>
            </div>
            
            {/* GeneKnow Image Project Showcase */}
            <div className="mb-12" id="project-geneknow">
              <ImageProjectShowcase
                title="GeneKnow"
                description="GeneKnow is a privacy-first and local-first genomic risk assessment platform that processes genetic data entirely on your local machine. No data ever leaves your device, ensuring complete privacy for sensitive genetic information."
                tags={["Tauri", "Rust", "React", "TypeScript", "LangGraph", "Genomics", "Privacy-First", "Machine Learning"]}
                images={[
                  getAssetPath("geneknow_photos/image_1.png"),
                  getAssetPath("geneknow_photos/image_2.png"),
                  getAssetPath("geneknow_photos/image_3.png")
                ]}
                githubLink="https://github.com/astrogirlnim/GeneKnow"
                liveLink="https://astrogirlnim.github.io/GeneKnow/"
                whitepaperLink={getAssetPath("GeneKnow_Whitepaper_Final.pdf")}
                imagePosition="right"
              />
            </div>
            
            {/* LAPACK AI Video Project Showcase */}
            <div className="mb-12" id="project-lapack-ai">
              <VideoProjectShowcase
                title="LAPACK AI"
                description="The first complete, open-source implementation of DeepMind's AlphaTensor 4x4 matrix multiplication algorithm in LAPACK. This landmark computational mathematics project implements a 49-operation algorithm with professional-grade precision, featuring multi-phase CPU optimizations, OpenCL GPU acceleration and kernel implementation on NVIDIA hardware, and seamless LAPACK integration."
                tags={["Fortran", "C/C++", "AI/ML", "Linear Algebra", "Scientific Computing", "Performance Optimization"]}
                video="https://www.youtube.com/embed/p7Ov3YXzEOA"
                githubLink="https://github.com/astrogirlnim/lapack_ai"
                videoPosition="left"
              />
            </div>
            
            {/* MarketSnap Video Project Showcase */}
            <div className="mb-12" id="project-marketsnap">
              <VideoProjectShowcase
                title="MarketSnap"
                description="MarketSnap enables farmers-market vendors to share real-time 'fresh-stock' photos and 5-second clips that work offline first, sync transparently when connectivity returns, and auto-expire after 24 hours—driving foot traffic before produce spoils. A cross-platform mobile application built with Flutter and Firebase backend, supporting both iOS and Android platforms."
                tags={["Flutter", "Dart", "Firebase", "Mobile App", "Cross-Platform", "Real-time"]}
                video="https://www.youtube.com/embed/iokk3pD04CM"
                githubLink="https://github.com/astrogirlnim/MarketSnap"
                videoPosition="right"
              />
            </div>
            
            {/* Children of Singularity Video Project Showcase */}
            <div className="mb-12" id="project-children-of-singularity">
              <VideoProjectShowcase
                title="Children of Singularity"
                description="A 2.5D/3D multiplayer sci-fi salvage simulation inspired by Moebius, Planetes, and Nausicaä. Players explore cluttered orbital zones, collect and trade space debris, upgrade their ships (or themselves), and gradually uncover an unsettling AI-controlled ecosystem."
                tags={["Godot", "Game Development", "Sci-fi", "Multiplayer", "GDScript", "2D/2.5D"]}
                video="https://www.youtube.com/embed/I7QM7lZqWgY"
                githubLink="https://github.com/astrogirlnim/Children_of_Singularity"
                liveLink="https://nisgames.itch.io/children-of-the-singularity"
                videoPosition="left"
              />
            </div>
            
            {/* Personyx Video Project Showcase */}
            <div className="mb-12" id="project-personyx">
              <VideoProjectShowcase
                title="Personyx"
                description="Personyx is a compliant desktop app that ingests raw customer-interview transcripts, clusters insights by persona, scores new PRDs for evidence, and lets devs/PMs chat with persona bots while they work. Give makers instant, persona-specific proof that a feature is worth building—before they write code—and live feedback while they do."
                tags={["Electron", "TypeScript", "React", "AI/ML", "Desktop App", "Product Management"]}
                video="https://www.youtube.com/embed/XyqOMLz7ZkI"
                githubLink="https://github.com/astrogirlnim/Personyx"
                videoPosition="right"
              />
            </div>
            
            {/* FunnelFluent Web Demo Project Showcase */}
            <div className="mb-12" id="project-funnelfluent">
              <WebDemoProjectShowcase
                title="FunnelFluent"
                description="FunnelFluent AI: Grammarly for sales funnels. Grammarly-like application made for professional making business proposals or marketing materials. A Next.js-based writing assistant powered by Firebase and AI, featuring real-time collaboration, grammar checking, and intelligent writing suggestions."
                tags={["Next.js", "Firebase", "TypeScript", "React", "AI/ML", "Real-time Collaboration", "Writing Assistant"]}
                demoUrl="https://wordwise-ai-mvp.web.app/"
                githubLink="https://github.com/astrogirlnim/WordWiseAI"
                liveLink="https://wordwise-ai-mvp.web.app/sign-in/"
                demoPosition="left"
              />
            </div>
            
            {/* Additional Projects Grid */}
            <div id="additional-projects" className="space-y-4 mb-8">
              <h3 className="text-2xl font-bold tracking-tight">Additional Projects</h3>
              <p className="text-muted-foreground">
                Research and engineering projects spanning computational biology, medical devices, and aerospace systems.
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

        {/* Relevant Experience Section */}
        <section id="experience" className="min-h-screen flex flex-col justify-center border-t border-border pt-20">
          <div className="container">
            <div className="space-y-4 max-w-3xl mb-10">
              <h2 className="text-3xl font-bold tracking-tight">Relevant Experience</h2>
              <p className="text-lg text-muted-foreground">
                My career path and key milestones that have shaped my expertise and approach to software development.
              </p>
            </div>
            <Timeline />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex flex-col justify-center border-t border-border pt-20">
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

      {/* Project Navigation */}
      <ProjectNavigation />

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
