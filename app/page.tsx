"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Database, Github, Linkedin, Mail, Server, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProjectCard from "@/components/project-card"
import VideoProjectShowcase from "@/components/video-project-showcase"
import ImageProjectShowcase from "@/components/image-project-showcase"
import WebDemoProjectShowcase from "@/components/web-demo-project-showcase"
import SkillGrid from "@/components/skill-grid"
import Timeline from "@/components/timeline"
import EducationSection from "@/components/education-section"
import ThemeToggle from "@/components/theme-toggle"
import ProjectNavigation from "@/components/project-navigation"
import InteractiveTerminal from "@/components/interactive-terminal"
import { getImagePath, getAssetPath } from "@/lib/utils"
import { useState } from "react"

const highlightClass = "font-medium text-foreground"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="container flex h-14 items-center justify-between sm:h-16">
          <Link href="#hero" className="font-mono text-sm font-bold tracking-wide transition-colors hover:text-primary sm:text-lg">
            NATALY SMITH
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#about" className="text-base font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-base font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#experience" className="text-base font-medium transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-base font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="text-base font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild className="hidden md:flex">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute inset-x-0 top-full z-50 border-b border-border/40 bg-background shadow-lg md:hidden">
            <nav className="container py-3">
              <div className="flex flex-col">
                <Link href="#about" className="py-3 text-base font-medium transition-colors hover:text-primary" onClick={closeMobileMenu}>
                  About
                </Link>
                <Link href="#skills" className="py-3 text-base font-medium transition-colors hover:text-primary" onClick={closeMobileMenu}>
                  Skills
                </Link>
                <Link href="#experience" className="py-3 text-base font-medium transition-colors hover:text-primary" onClick={closeMobileMenu}>
                  Experience
                </Link>
                <Link href="#projects" className="py-3 text-base font-medium transition-colors hover:text-primary" onClick={closeMobileMenu}>
                  Projects
                </Link>
                <Link href="#contact" className="py-3 text-base font-medium transition-colors hover:text-primary" onClick={closeMobileMenu}>
                  Contact
                </Link>
                <div className="pt-2 pb-2">
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href="#contact" onClick={closeMobileMenu}>
                      Get in touch
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="flex min-h-[100svh] flex-col items-start justify-center gap-8 pb-16 pt-20 sm:pt-24">
          <div className="container">
            <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-16">
              <div className="flex justify-center order-1 lg:col-span-2 lg:order-none">
                <div className="hero-animate-delay-2 group relative w-full max-w-[240px] sm:max-w-[320px] lg:max-w-none">
                  <Image
                    src={getImagePath("images/Profile_pic_new.jpg")}
                    alt="Nataly Smith"
                    width={450}
                    height={600}
                    className="h-auto w-full rounded-3xl object-cover shadow-2xl transition-transform duration-500 md:group-hover:scale-[1.02]"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/8 to-accent/15" />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-2 sm:space-y-6 lg:col-span-3 lg:order-none">
                <Badge variant="outline" className="hero-animate w-fit border-primary/40 bg-primary/5 px-3 py-1.5 font-mono text-sm font-semibold sm:px-4 sm:py-2 sm:text-base">
                  SENIOR SOFTWARE ENGINEER, AI PLATFORM
                </Badge>
                <h1 className="hero-animate-delay-1 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  Hi, I&apos;m <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Nataly</span> Smith
                </h1>
                <p className="hero-animate-delay-2 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
                  Senior Software Engineer specializing in <span className={highlightClass}>full-stack app development</span>, with expertise in <span className={highlightClass}>cloud technologies</span>, <span className={highlightClass}>mathematical modeling</span>, and <span className={highlightClass}>pipeline architecture</span>. Currently using AI to build AI systems.
                </p>
                <p className="text-base text-muted-foreground sm:text-lg">Austin, Texas · Yale Alumni</p>
                <div className="hero-animate-delay-3 flex flex-col flex-wrap gap-3 pt-2 sm:flex-row sm:gap-4">
                  <Button size="lg" asChild className="hover-glow w-full font-medium sm:w-auto">
                    <Link href="#projects">
                      View Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="hover-glow w-full font-medium sm:w-auto">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <Button variant="ghost" size="lg" asChild className="hover-glow w-full font-medium sm:w-auto">
                    <Link href={getImagePath("images/NMM_Resume_Updated.pdf")} target="_blank">
                      Download Resume
                    </Link>
                  </Button>
                </div>

                <div className="hero-animate-delay-3 mt-4 hidden lg:block">
                  <InteractiveTerminal />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 sm:py-20 md:py-24">
          <div className="container">
            <div className="mb-8 text-center sm:mb-12">
              <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">About & Expertise</h2>
              <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                Senior Software Engineer who specializes in <span className={highlightClass}>full-stack app development</span>, with expertise in <span className={highlightClass}>cloud technologies/infrastructure</span>, <span className={highlightClass}>mathematical modeling</span>, and <span className={highlightClass}>pipeline architecture</span>.
              </p>
            </div>

            <div className="mx-auto mb-8 max-w-4xl sm:mb-12">
              <p className="mb-3 text-lg font-light leading-relaxed text-muted-foreground sm:mb-4 sm:text-xl">
                I blend cutting-edge technology with mathematical rigor to solve complex problems across multiple domains. From <span className={highlightClass}>implementing DeepMind&apos;s AlphaTensor algorithm in LAPACK</span> to building <span className={highlightClass}>privacy-first genomic platforms</span>, my work spans the intersection of AI, scientific computing, and real-world applications.
              </p>
              <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                My expertise extends from low-level <span className={highlightClass}>C and C++ optimization</span> to high-level <span className={highlightClass}>Python development</span>, modern <span className={highlightClass}>C# applications</span>, <span className={highlightClass}>Rust/Tauri desktop applications</span>, <span className={highlightClass}>Flutter mobile development</span>, and <span className={highlightClass}>AI-powered full-stack systems</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="card-gradient group rounded-2xl border border-border/60 bg-card/50 p-5 shadow-sm transition-colors duration-300 hover:border-primary/30 sm:p-6">
                <Code2 className="mb-4 h-9 w-9 text-primary" />
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl">Full-Stack Vertical Development</h3>
                <p className="mb-3 text-base font-light leading-relaxed text-muted-foreground">
                  Building complete vertical solutions across web, mobile, and desktop platforms.
                </p>
                <div className="text-sm font-medium text-primary">
                  Python, C#, Next.js, Flutter
                </div>
              </div>

              <div className="card-gradient group rounded-2xl border border-border/60 bg-card/50 p-5 shadow-sm transition-colors duration-300 hover:border-primary/30 sm:p-6">
                <Server className="mb-4 h-9 w-9 text-primary" />
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl">Cloud Infrastructure</h3>
                <p className="mb-3 text-base font-light leading-relaxed text-muted-foreground">
                  Multi-cloud implementation with Azure, AWS, and Google Cloud Platform.
                </p>
                <div className="text-sm font-medium text-primary">
                  Firebase, Real-time Systems, Pipeline Architecture
                </div>
              </div>

              <div className="card-gradient group rounded-2xl border border-border/60 bg-card/50 p-5 shadow-sm transition-colors duration-300 hover:border-primary/30 sm:p-6">
                <Database className="mb-4 h-9 w-9 text-primary" />
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl">Mathematical Modeling</h3>
                <p className="mb-3 text-base font-light leading-relaxed text-muted-foreground">
                  Computational modeling and machine learning for research and industry.
                </p>
                <div className="text-sm font-medium text-primary">
                  Python, MATLAB, R, Scientific Computing
                </div>
              </div>

              <div className="card-gradient group rounded-2xl border border-border/60 bg-card/50 p-5 shadow-sm transition-colors duration-300 hover:border-primary/30 sm:p-6">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 text-primary">
                  <span className="text-lg font-semibold">AI</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold sm:text-2xl">AI & Scientific Computing</h3>
                <p className="mb-3 text-base font-light leading-relaxed text-muted-foreground">
                  Advanced algorithms from research to production systems.
                </p>
                <div className="text-sm font-medium text-primary">
                  C/C++, LangGraph, GPU Optimization
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 sm:py-20">
          <div className="container">
            <div className="mb-6 max-w-3xl space-y-2 sm:mb-8 sm:space-y-3">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Technical Skills</h2>
              <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                Core expertise across languages, frameworks, and platforms. Primarily Python, C#, and custom Bash/Shell scripting, with professional work across many other languages and modern frameworks.
              </p>
            </div>
            <SkillGrid />
          </div>
        </section>

        <section id="experience" className="py-16 sm:py-20 md:py-24">
          <div className="container">
            <div className="mb-8 max-w-3xl space-y-3 sm:mb-10">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Relevant Experience</h2>
              <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                Career path and key milestones, aligned with current work on LinkedIn.
              </p>
            </div>
            <Timeline />
            <EducationSection />
          </div>
        </section>

        <section id="projects" className="py-16 sm:py-20 md:py-24">
          <div className="container">
            <div className="mb-6 max-w-3xl space-y-3 sm:mb-10">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Featured Projects</h2>
              <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                A selection of projects across AI-enhanced full-stack development, mobile, games, and mathematical modeling.
              </p>
            </div>

            <div className="mb-10 sm:mb-14" id="project-geneknow">
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
                liveLinkText="Website"
                whitepaperLink={getAssetPath("GeneKnow_Whitepaper_Final.pdf")}
                imagePosition="right"
              />
            </div>

            <div className="mb-10 sm:mb-14" id="project-lapack-ai">
              <VideoProjectShowcase
                title="LAPACK AI"
                description="The first complete, open-source implementation of DeepMind's AlphaTensor 4x4 matrix multiplication algorithm in LAPACK. This landmark computational mathematics project implements a 49-operation algorithm with professional-grade precision, featuring multi-phase CPU optimizations, OpenCL GPU acceleration and kernel implementation on NVIDIA hardware, and seamless LAPACK integration."
                tags={["Fortran", "C/C++", "AI/ML", "Linear Algebra", "Scientific Computing", "Performance Optimization"]}
                video="https://www.youtube.com/embed/p7Ov3YXzEOA"
                githubLink="https://github.com/astrogirlnim/lapack_ai"
                videoPosition="left"
              />
            </div>

            <div className="mb-10 sm:mb-14" id="project-marketsnap">
              <VideoProjectShowcase
                title="MarketSnap"
                description="MarketSnap enables farmers-market vendors to share real-time 'fresh-stock' photos and 5-second clips that work offline first, sync transparently when connectivity returns, and auto-expire after 24 hours—driving foot traffic before produce spoils. A cross-platform mobile application built with Flutter and Firebase backend, supporting both iOS and Android platforms."
                tags={["Flutter", "Dart", "Firebase", "Mobile App", "Cross-Platform", "Real-time"]}
                video="https://www.youtube.com/embed/iokk3pD04CM"
                githubLink="https://github.com/astrogirlnim/MarketSnap"
                videoPosition="right"
              />
            </div>

            <div className="mb-10 sm:mb-14" id="project-children-of-singularity">
              <VideoProjectShowcase
                title="Children of Singularity"
                description="A 2.5D/3D multiplayer sci-fi salvage simulation inspired by Moebius, Planetes, and Nausicaä. Players explore cluttered orbital zones, collect and trade space debris, upgrade their ships (or themselves), and gradually uncover an unsettling AI-controlled ecosystem."
                tags={["Godot", "Game Development", "Sci-fi", "Multiplayer", "GDScript", "2D/2.5D"]}
                video="https://www.youtube.com/embed/I7QM7lZqWgY"
                githubLink="https://github.com/astrogirlnim/Children_of_Singularity"
                liveLink="https://nisgames.itch.io/children-of-the-singularity"
                liveLinkText="Website"
                videoPosition="left"
              />
            </div>

            <div className="mb-10 sm:mb-14" id="project-personyx">
              <VideoProjectShowcase
                title="Personyx"
                description="Personyx is a compliant desktop app that ingests raw customer-interview transcripts, clusters insights by persona, scores new PRDs for evidence, and lets devs/PMs chat with persona bots while they work. Give makers instant, persona-specific proof that a feature is worth building—before they write code—and live feedback while they do."
                tags={["Electron", "TypeScript", "React", "AI/ML", "Desktop App", "Product Management"]}
                video="https://www.youtube.com/embed/XyqOMLz7ZkI"
                githubLink="https://github.com/astrogirlnim/Personyx"
                videoPosition="right"
              />
            </div>

            <div className="mb-10 sm:mb-14" id="project-funnelfluent">
              <WebDemoProjectShowcase
                title="FunnelFluent"
                description="FunnelFluent AI: Grammarly for sales funnels. Grammarly-like application made for professional making business proposals or marketing materials. A Next.js-based writing assistant powered by Firebase and AI, featuring real-time collaboration, grammar checking, and intelligent writing suggestions."
                tags={["Next.js", "Firebase", "TypeScript", "React", "AI/ML", "Real-time Collaboration", "Writing Assistant"]}
                demoUrl="https://wordwise-ai-mvp.web.app/"
                githubLink="https://github.com/astrogirlnim/WordWiseAI"
                liveLink="https://wordwise-ai-mvp.web.app/"
                liveLinkText="Website"
                demoPosition="left"
              />
            </div>

            <div id="additional-projects" className="mb-6 space-y-3 sm:mb-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Additional Projects</h3>
              <p className="text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                Research and engineering projects spanning computational biology, medical devices, and aerospace systems.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
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

        <section id="contact" className="py-16 sm:py-20 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Get in Touch</h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                  Interested in working together? Reach out to discuss potential projects or opportunities.
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <Link href="mailto:nmmsoftware@gmail.com" className="break-all transition-colors hover:text-primary">
                      nmmsoftware@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <Link href="https://www.linkedin.com/in/nataly-smith/" className="break-all transition-colors hover:text-primary">
                      linkedin.com/in/nataly-smith
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <Link href="https://github.com/astrogirlnim" className="break-all transition-colors hover:text-primary">
                      github.com/astrogirlnim
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <Link href="tel:+15052036058" className="transition-colors hover:text-primary">
                      +1 (505) 203-6058
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-3 text-center sm:space-y-4 md:text-left">
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">Let&apos;s Connect</h3>
                  <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
                    Ready to discuss your next project? I&apos;d love to hear from you.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <Button size="lg" asChild className="hover-glow w-full sm:w-auto">
                      <Link href="mailto:nmmsoftware@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send me an email
                      </Link>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Click the button above to open your email client, or reach out directly at{" "}
                      <Link
                        href="mailto:nmmsoftware@gmail.com"
                        className="font-medium text-primary hover:underline"
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

      <ProjectNavigation />

      <footer className="border-t border-border/40 py-6 sm:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center font-mono text-xs sm:text-sm md:text-left">
            © {new Date().getFullYear()} Nataly Smith · Built with precision and purpose
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
    </div>
  )
}
