import { Badge } from "@/components/ui/badge"

interface TimelineItem {
  year: string
  role: string
  company: string
  location: string
  description: string
  achievements: string[]
}

const timelineItems: TimelineItem[] = [
  {
    year: "August 2025 - Present",
    role: "Senior Software Engineer, AI Platform",
    company: "Function Health",
    location: "Austin, TX",
    description: "Lead engineer on new AI platform projects. Currently using AI to build AI systems, integrating LLMs and agentic workflows into production applications.",
    achievements: [
      "Lead engineer on new AI platform initiatives",
      "Optimization of LLM-based agentic workflows for productivity and efficiency",
      "Development of customer-facing applications that leverage LLMs and agentic workflows",
      "Advanced AI-first development of enterprise-grade applications",
    ],
  },
  {
    year: "June 2025 - August 2025",
    role: "Fellowship: Cohort II AI Challenger",
    company: "Gauntlet AI",
    location: "Austin, TX",
    description: "Senior software engineer and second cohort member in a highly selective AI training fellowship program.",
    achievements: [
      "Built and integrated LLMs and agentic workflows into modern applications",
      "Collaborated with top-tier engineers on AI-first projects and AI-assisted research",
      "Specialized in advanced AI-first development of enterprise-grade applications",
    ],
  },
  {
    year: "January 2023 - June 2025",
    role: "Senior Software Developer",
    company: "Bruker Cellular Analysis",
    location: "Remote",
    description: "Led development of cloud-native applications, infrastructure automation, and genomic sequencing systems.",
    achievements: [
      "Completed a full-scale Azure DevOps migration in 3 months by coordinating team efforts, automating migration processes, and creating custom programmatic tools",
      "Increased critical application performance by 400% by leading a re-architecture of existing code",
      "Expedited application runtime by 75% in another project, hitting product specifications with an on-time release",
      "Built critical testing functionality ahead of schedule, expediting product release by 2 weeks",
      "Enriched deployment life cycle and scalability through Docker and CI/CD orchestration",
      "Constructed a multi-cloud implementation of genomic sequencing testing infrastructure",
    ],
  },
  {
    year: "January 2022 - January 2023",
    role: "Software Developer",
    company: "Bruker Cellular Analysis",
    location: "Remote",
    description: "Main developer creating research tools for next-generation sequencing and genomic analysis.",
    achievements: [
      "Independently developed a web portal that enabled interdepartmental teams to access research tools",
      "Introduced automated unit testing and integration testing into development packages",
      "Worked with C++ computer vision libraries to improve sequencing technologies",
    ],
  },
  {
    year: "September 2021 - January 2022",
    role: "Computer Systems Engineer",
    company: "McMaster-Carr",
    location: "Elmhurst, IL",
    description: "Systems engineer specializing in web development for business-critical applications.",
    achievements: [
      "Improved company knowledge sharing by creating an internal communications hub",
      "Worked with an established SDLC involving cross-team coordination, testing, and release schedules",
      "Delivered website features end to end: database schemas, business logic, REST APIs, and front-end",
      "Interfaced with legacy systems for modern business-critical applications",
    ],
  },
  {
    year: "January 2021 - January 2024",
    role: "Co-Founder",
    company: "SYMon Holdings, LLC",
    location: "United States",
    description: "Medical technology startup developing wearable technology for continuous analyte monitoring in humans, with a primary application in preventing chronic emergency admissions in dialysis patients. Funded with an initial seed grant of $1500.",
    achievements: [
      "Co-founded a medtech startup focused on continuous analyte monitoring",
      "Directed product vision toward reducing emergency admissions for dialysis patients",
    ],
  },
  {
    year: "January 2020 - May 2021",
    role: "Directed Research: Miller-Jensen Laboratory",
    company: "Yale University",
    location: "New Haven, CT",
    description: "Directed research building predictive models for the activation of latent HIV, specializing in computational analysis of phenotype states and gene expression.",
    achievements: [
      "Computational modeling of phenotype states using Network-Free Stochastic Simulator, NFsim",
      "R and MATLAB programming to analyze HIV expression data",
      "Generation of a parameter-phenotype interactome network",
      "Visualization of data trends in latent HIV mathematical models",
      "Published research findings in a peer-reviewed computational biology journal",
    ],
  },
  {
    year: "May 2019 - August 2019",
    role: "Directed Research",
    company: "Oden Institute for Computational Engineering and Sciences",
    location: "Austin, TX",
    description: "Research focused on analyzing highly expressed proteins in cancer, combining molecular and statistical exploration of gene expression pathways.",
    achievements: [
      "Visualized protein-protein interactions using R, ChimeraX, and bioinformatic tools",
      "Generated and explored 3D models of protein interfaces",
      "Used TCGA high-throughput human data for gene enrichment analyses",
      "Compared interfacial amino acid residue frequencies with structural protein data",
      "Applied linear regression, frequency calculations, and original random models to gene expression data",
    ],
  },
]

export default function Timeline() {
  return (
    <ol className="relative mx-auto max-w-4xl">
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-[0.4375rem] top-2 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:left-[0.4375rem]"
      />

      {timelineItems.map((item) => (
        <li key={`${item.company}-${item.role}-${item.year}`} className="relative pl-9 pb-8 last:pb-0 sm:pb-10 md:pl-10">
          <div
            aria-hidden="true"
            className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary shadow-[0_0_0_3px_hsl(var(--background))]"
          />

          <article className="rounded-2xl border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-card sm:p-6">
            <Badge variant="outline" className="mb-3 font-mono text-xs tracking-wide sm:text-sm">
              {item.year}
            </Badge>
            <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
              {item.role}
            </h3>
            <p className="mt-1 text-base font-medium text-primary sm:text-lg">
              {item.company}
              <span className="text-muted-foreground"> · {item.location}</span>
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <ul className="mt-4 space-y-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2.5 text-base leading-relaxed text-foreground/80">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  )
}
