"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
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

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

const rangeEntries = [
  { id: "01", field: "AI platform", note: "Function Health" },
  { id: "02", field: "Scientific computing", note: "LAPACK, HIV models" },
  { id: "03", field: "Cloud systems", note: "Azure, AWS, GCP" },
  { id: "04", field: "Genomics", note: "GeneKnow, Bruker" },
  { id: "05", field: "Medtech", note: "SYMon, fracture set" },
  { id: "06", field: "Full-stack", note: "Web, mobile, desktop" },
]

function RangePlate() {
  return (
    <figure className="w-full max-w-md lg:max-w-none lg:justify-self-end">
      <div className="border border-border">
        <div className="flex items-baseline justify-between border-b border-border px-5 py-3">
          <span className="fig-kicker">Range</span>
          <span className="fig-kicker">n = 6</span>
        </div>
        <ol>
          {rangeEntries.map((entry) => (
            <li
              key={entry.id}
              className="grid grid-cols-[2.75rem_1fr] items-start border-b border-border px-5 py-3.5 last:border-b-0"
            >
              <span className="fig-kicker pt-1">{entry.id}</span>
              <div className="min-w-0">
                <p className="font-display text-lg leading-tight tracking-tight">{entry.field}</p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{entry.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="fig-kicker mt-3">
        FIG. 01 · Working range
      </figcaption>
    </figure>
  )
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-14 items-center justify-between sm:h-16">
          <Link href="#hero" className="font-mono text-[0.7rem] font-medium tracking-[0.28em] transition-colors hover:text-primary sm:text-xs">
            N. SMITH · VOL. 01
          </Link>

          <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-[0.12em] uppercase transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild className="hidden font-mono text-xs tracking-widest uppercase md:flex">
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
          <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-background md:hidden">
            <nav className="container py-3">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-3 font-mono text-sm tracking-widest uppercase"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="flex min-h-[100svh] flex-col items-start justify-center gap-8 pb-16 pt-20 sm:pt-24">
          <div className="container">
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="order-2 flex min-w-0 flex-col justify-center lg:order-1 lg:col-span-7">
                <p className="hero-animate fig-kicker mb-4">01 · Intro</p>
                <h1 className="hero-animate-delay-1 font-display text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  Hi, I&apos;m Nataly Smith.
                </h1>
                <p className="hero-animate-delay-1 mt-4 max-w-2xl font-display text-2xl italic leading-snug text-foreground/90 sm:text-3xl">
                  Software at the intersection of AI, systems, and science.
                </p>
                <p className="hero-animate-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Senior Software Engineer specializing in full-stack app development, with expertise in cloud technologies, mathematical modeling, and pipeline architecture. 
                </p>
                <p className="mt-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Austin, Texas · Function Health · Yale Alumni
                </p>
                <div className="hero-animate-delay-3 mt-8 flex flex-col flex-wrap gap-3 sm:flex-row">
                  <Button size="lg" asChild className="hover-glow w-full font-mono text-xs tracking-widest uppercase sm:w-auto">
                    <Link href="#projects">
                      View projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="hover-glow w-full font-mono text-xs tracking-widest uppercase sm:w-auto">
                    <Link href="#contact">Contact</Link>
                  </Button>
                  <Button variant="ghost" size="lg" asChild className="hover-glow w-full font-mono text-xs tracking-widest uppercase sm:w-auto">
                    <Link href={getImagePath("images/NMM_Resume_Updated.pdf")} target="_blank">
                      Resume
                    </Link>
                  </Button>
                </div>

                <div className="hero-animate-delay-3 mt-8 hidden lg:block">
                  <InteractiveTerminal />
                </div>
              </div>
              <div className="order-1 flex min-w-0 justify-center lg:order-2 lg:col-span-5">
                <figure className="hero-animate-delay-2 w-full max-w-[420px] lg:max-w-none">
                  <Image
                    src={getImagePath("images/Profile_pic_new.jpg")}
                    alt="Nataly Smith"
                    width={681}
                    height={1024}
                    className="h-auto w-full border border-border object-cover"
                    priority
                  />
                  <figcaption className="fig-kicker mt-3">
                    FIG. 00 · Portrait, Austin
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-border py-16 sm:py-20 md:py-24">
          <div className="container">
            <p className="fig-kicker mb-4">02 · About</p>
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="min-w-0 lg:col-span-7">
                <h2 className="mb-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                  About
                </h2>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Senior Software Engineer who specializes in full-stack app development, with expertise in cloud technologies/infrastructure, mathematical modeling, and pipeline architecture.</p>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I blend cutting-edge technology with mathematical rigor to solve complex problems across multiple domains. From implementing DeepMind's AlphaTensor algorithm in LAPACK to building privacy-first genomic platforms, my work spans the intersection of AI, scientific computing, and real-world applications.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                I work mostly on AI these days, but I have a habit of exploring problems with deep rabbit holes—genomics, numerical computing, games, and whatever else seems worth building.
                </p>
              </div>
              <div className="min-w-0 lg:col-span-5">
                <RangePlate />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-border py-16 sm:py-20">
          <div className="container">
            <p className="fig-kicker mb-4">03 · Skills</p>
            <h2 className="mb-3 font-display text-4xl tracking-tight sm:text-5xl">Skills</h2>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Python and C# most often, then Bash, Lisp, Fortran, and whatever else a given project needs.
            </p>
            <SkillGrid />
          </div>
        </section>

        <section id="experience" className="border-t border-border py-16 sm:py-20 md:py-24">
          <div className="container">
            <p className="fig-kicker mb-4">04 · Experience</p>
            <h2 className="mb-3 font-display text-4xl tracking-tight sm:text-5xl">Experience</h2>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Function Health. Gauntlet AI Fellow. Previously Bruker Cellular Analysis, McMaster-Carr, SYMon Holdings, and research at Yale.
            </p>
            <Timeline />
            <EducationSection />
          </div>
        </section>

        <section id="projects" className="border-t border-border py-16 sm:py-20 md:py-24">
          <div className="container">
            <p className="fig-kicker mb-4">05 · Projects</p>
            <h2 className="mb-3 font-display text-4xl tracking-tight sm:text-5xl">Projects</h2>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Selected work across AI, scientific computing, tools, and games.
            </p>

            <div className="mb-4 sm:mb-6" id="project-geneknow">
              <ImageProjectShowcase
                figureLabel="FIG. 02"
                title="GeneKnow"
                why="Built so genetic data never has to leave the machine."
                description="A privacy-first, local-first genomic risk assessment platform. It processes genetic data entirely on your machine. Nothing leaves the device."
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

            <div className="mb-4 sm:mb-6" id="project-lapack-ai">
              <VideoProjectShowcase
                figureLabel="FIG. 03"
                title="LAPACK AI"
                why="AlphaTensor inside LAPACK, not only in a paper. Fortran, C, and a fair amount of numerical weirdness."
                description="An open-source implementation of the AlphaTensor 4x4 matrix multiplication algorithm in LAPACK: 49 operations, CPU optimizations, OpenCL GPU kernels on NVIDIA hardware, and real LAPACK integration."
                tags={["Fortran", "C/C++", "AI/ML", "Linear Algebra", "Scientific Computing", "Performance Optimization"]}
                video="https://www.youtube.com/embed/p7Ov3YXzEOA"
                githubLink="https://github.com/astrogirlnim/lapack_ai"
                videoPosition="left"
              />
            </div>

            <div className="mb-4 sm:mb-6" id="project-marketsnap">
              <VideoProjectShowcase
                figureLabel="FIG. 04"
                title="MarketSnap"
                why="Offline-first stock posts for vendors, before produce spoils."
                description="Vendors share fresh-stock photos and short clips that work offline, sync when the signal comes back, and expire after 24 hours. Flutter, iOS and Android."
                tags={["Flutter", "Dart", "Firebase", "Mobile App", "Cross-Platform", "Real-time"]}
                video="https://www.youtube.com/embed/iokk3pD04CM"
                githubLink="https://github.com/astrogirlnim/MarketSnap"
                videoPosition="right"
              />
            </div>

            <div className="mb-4 sm:mb-6" id="project-funnelfluent">
              <WebDemoProjectShowcase
                figureLabel="FIG. 05"
                title="FunnelFluent"
                why="Writing assistance for sales funnels, not generic grammar."
                description="A Next.js writing assistant for business proposals and marketing copy. Firebase, real-time collaboration, and AI suggestions. Grammarly, but for funnels."
                tags={["Next.js", "Firebase", "TypeScript", "React", "AI/ML", "Real-time Collaboration", "Writing Assistant"]}
                demoUrl="https://wordwise-ai-mvp.web.app/"
                githubLink="https://github.com/astrogirlnim/WordWiseAI"
                liveLink="https://wordwise-ai-mvp.web.app/"
                liveLinkText="Website"
                demoPosition="left"
              />
            </div>

            <div className="mb-4 sm:mb-6" id="project-personyx">
              <VideoProjectShowcase
                figureLabel="FIG. 06"
                title="Personyx"
                why="Interview evidence, usable while a product is still being built."
                description="A desktop app that clusters customer interviews into personas, scores PRDs against that evidence, and lets you chat with persona bots while you work."
                tags={["Electron", "TypeScript", "React", "AI/ML", "Desktop App", "Product Management"]}
                video="https://www.youtube.com/embed/XyqOMLz7ZkI"
                githubLink="https://github.com/astrogirlnim/Personyx"
                videoPosition="right"
              />
            </div>

            <div className="mb-4 sm:mb-6" id="project-children-of-singularity">
              <VideoProjectShowcase
                figureLabel="FIG. 07"
                title="Children of Singularity"
                why="A salvage sim in the orbit of Moebius, Planetes, and Nausicaä."
                description="A 2.5D/3D multiplayer salvage sim. Explore cluttered orbital zones, trade debris, upgrade your ship, and slowly figure out what is running the place."
                tags={["Godot", "Game Development", "Sci-fi", "Multiplayer", "GDScript", "2D/2.5D"]}
                video="https://www.youtube.com/embed/I7QM7lZqWgY"
                githubLink="https://github.com/astrogirlnim/Children_of_Singularity"
                liveLink="https://nisgames.itch.io/children-of-the-singularity"
                liveLinkText="Website"
                videoPosition="left"
              />
            </div>

            <div id="additional-projects" className="mt-16 border-t border-border pt-12">
              <p className="fig-kicker mb-4">06 · Additional</p>
              <h3 className="mb-3 font-display text-3xl tracking-tight sm:text-4xl">Additional projects</h3>
              <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Research, a medical device, a rocket, and protein interfaces.
              </p>
              <div>
                <ProjectCard
                  index="08"
                  title="Stochastic Computational Modeling of HIV"
                  venue="PLOS Computational Biology"
                  why="A published model of noisy latent HIV activation."
                  description="A transcriptional cycling model of noisy inducible transcription and variable activation of quiescent HIV in T cells."
                  tags={["MATLAB", "NFSim", "R", "Computational Biology"]}
                  link="https://doi.org/10.1371/journal.pcbi.1010152"
                />
                <ProjectCard
                  index="09"
                  title="Simplifying Fracture Treatment: Medical Device Set"
                  venue="Yale School of Engineering and Applied Science"
                  why="External fastening for Kirschner wires that otherwise migrate."
                  description="A device that externally fastens Kirschner wires so they stay at the fracture site instead of wandering into the body."
                  tags={["MATLAB", "Python", "CAD", "Medical Device"]}
                  link="https://seas.yale.edu/news-events/news/students-present-medical-innovations"
                />
                <ProjectCard
                  index="10"
                  title="Project Rocket: Yale Undergraduate Aerospace"
                  venue="YUAA · IREC"
                  why="Hybrid propulsion for a national IREC rocket."
                  description="Designed and built hybrid solid-liquid fuel rockets for the national IREC competition, with a focus on propulsion and aerodynamics."
                  tags={["MATLAB", "CAD", "Aerospace Engineering", "Propulsion"]}
                />
                <ProjectCard
                  index="11"
                  title="Bioinformatics of Protein-Protein Interactions"
                  venue="Oden Institute for Computational Engineering and Sciences"
                  why="Protein interfaces and gene enrichment on TCGA data."
                  description="Visualized protein-protein interactions and ran gene enrichment analyses on TCGA high-throughput human data."
                  tags={["R", "ChimeraX", "Bioinformatics", "TCGA Data"]}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border py-16 sm:py-20 md:py-24">
          <div className="container">
            <p className="fig-kicker mb-4">07 · Contact</p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="space-y-6 md:col-span-7">
                <h2 className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
                  Get in touch
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  Open to collaboration. Email is the fastest path.
                </p>
                <div className="mt-6 flex flex-col gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <Link href="mailto:nmmsoftware@gmail.com" className="break-all transition-colors hover:text-primary">
                      nmmsoftware@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <Link href="https://www.linkedin.com/in/nataly-smith/" className="break-all transition-colors hover:text-primary">
                      linkedin.com/in/nataly-smith
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <Link href="https://github.com/astrogirlnim" className="break-all transition-colors hover:text-primary">
                      github.com/astrogirlnim
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                    <Link href="tel:+15052036058" className="transition-colors hover:text-primary">
                      +1 (505) 203-6058
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4 border-t border-border pt-8 md:col-span-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <h3 className="font-display text-2xl italic sm:text-3xl">Direct line</h3>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  nmmsoftware@gmail.com
                </p>
                <Button size="lg" asChild className="hover-glow w-full font-mono text-xs tracking-widest uppercase sm:w-auto">
                  <Link href="mailto:nmmsoftware@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ProjectNavigation />

      <footer className="border-t border-border py-6 sm:py-8">
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
    </div>
  )
}
