import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timelineItems = [
  {
    year: "June 2025 - Present",
    role: "Fellowship: Cohort II AI Challenger",
    company: "Gauntlet AI",
    location: "Austin, TX",
    description: "Senior software engineer and second cohort member in highly selective AI training fellowship program.",
    achievements: [
      "Senior software engineer and second cohort member in highly selective AI training fellowship program",
      "Developing and integrating LLMs and agentic workflows into modern applications",
      "Collaborating with top-tier engineers on innovative AI-first projects and AI-assisted research",
      "Specializing in advanced AI-first development of enterprise grade applications",
    ],
  },
  {
    year: "January 2023 - June 2025",
    role: "Senior Software Developer",
    company: "Bruker Cellular Analysis",
    location: "Remote",
    description: "Leading development of cloud-native applications and infrastructure automation tools.",
    achievements: [
      "Completed full-scale Azure DevOps migration in just 3 months by coordinating team efforts and creating custom tools",
      "Re-architectured long-running critical application, improving performance by 400% through code optimization",
      "Decreased data processing algorithm runtime by 75% with code rewrite, meeting critical product specifications",
      "Built required testing functionality ahead of schedule, expediting product release by 2 weeks",
    ],
  },
  {
    year: "January 2022 - January 2023",
    role: "Software Developer",
    company: "Bruker Cellular Analysis",
    location: "Remote",
    description: "Main developer in creating research tools for next-gen sequencing and genomic analysis.",
    achievements: [
      "Main developer in creating research tools for next-gen sequencing and genomic analysis",
      "Independently developed a web portal that enabled interdepartmental teams to access research tools",
      "Introduced automated unit testing and integration testing into CICD pipelines",
      "Incorporated C++ computer vision libraries to improve sequencing technologies",
    ],
  },
  {
    year: "September 2021 - January 2022",
    role: "Computer Systems Engineer",
    company: "McMaster-Carr",
    location: "Elmhurst, IL",
    description: "Full-stack development and system integration for business-critical applications.",
    achievements: [
      "Improved company knowledge sharing and education by creating an internal communications hub",
      "Delivered business value by developing website features end to end, including Database Schemas and APIs",
      "Integrated legacy systems to interface with modern business-critical applications",
      "Worked with legacy SDLC, testing, and release schedules and architecture",
    ],
  },
  {
    year: "January 2020 - May 2021",
    role: "Directed Research: Miller-Jensen Laboratory",
    company: "Yale University",
    location: "New Haven, CT",
    description: "Computational research focused on HIV gene expression modeling and bioinformatics analysis.",
    achievements: [
      "Built predictive computational models to discover activation behavior of latent HIV using NFsim",
      "Generated parameter-phenotype interactome network based on mRNA and protein expression levels",
      "Utilized R and MATLAB programming to analyze HIV expression data and visualize trends",
      "Published research findings in peer-reviewed computational biology journal",
    ],
  },
  {
    year: "August 2017 - May 2021",
    role: "Bachelor of Science - Biomedical Engineering",
    company: "Yale University",
    location: "New Haven, CT",
    description: "Focus on Biocomputation with research experience in computational modeling and bioinformatics.",
    achievements: [
      "GPA: 3.64 with focus on Biocomputation",
      "Cum Laude Graduate, National Hispanic Scholar, Vincent Cordova Diversity Award",
      "Yale CBIT Healthcare Hackathon Runner-Up, Tsai City Accelerator program participant",
      "Fluent in English, Spanish, French",
    ],
  },
]

export default function Timeline() {
  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Enhanced center line with gradient - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-px">
        <div className="w-full h-full bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Mobile timeline container with enhanced left border */}
      <div className="md:hidden timeline-mobile relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20"></div>
        <div className="space-y-8 pl-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-card mobile-timeline-card relative">
              <div className="absolute -left-10 top-6 w-3 h-3 bg-primary border-2 border-background rounded-full shadow-lg animate-pulse"></div>
              <Card className="hover-glow transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl card-gradient group border border-border/50 hover:border-primary/50 backdrop-blur-sm bg-background/95">
                <CardContent className="p-4 sm:p-5">
                  <Badge variant="outline" className="mb-2 font-mono hover-glow text-xs">
                    {item.year}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {item.role}
                  </h3>
                  <p className="text-primary font-medium mb-1 text-sm sm:text-base">{item.company}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3">{item.location}</p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                                      <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs sm:text-sm flex items-start gap-3 group/item">
                        <div className="relative mt-2 flex-shrink-0">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full group-hover/item:bg-accent transition-all duration-300 group-hover/item:scale-125"></div>
                          <div className="absolute inset-0 h-1.5 w-1.5 bg-primary/30 rounded-full animate-ping group-hover/item:bg-accent/30"></div>
                        </div>
                        <span className="group-hover/item:text-primary transition-colors duration-300 leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced desktop timeline */}
      <div className="hidden md:block space-y-20">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-row gap-12 timeline-item ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            style={{
              animationDelay: `${index * 0.2}s`
            }}
          >
            {/* Card Container with enhanced styling */}
            <div className="w-1/2 flex justify-end">
              <div className={`w-full max-w-xl lg:max-w-2xl relative transition-all duration-700 hover:translate-y-[-4px] ${
                index % 2 === 0 ? "mr-20" : "ml-20"
              }`}>
                <Card className="hover-glow transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl card-gradient group border border-border/50 hover:border-primary/50 backdrop-blur-sm bg-background/95 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 font-mono hover-glow text-xs">
                      {item.year}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-primary font-medium mb-1 text-base">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                    <p className="text-base text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-3 relative z-10">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start gap-3 group/item">
                          <div className="relative mt-1.5 flex-shrink-0">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full group-hover/item:bg-accent transition-all duration-300 group-hover/item:scale-125 shadow-sm"></div>
                            <div className="absolute inset-0 h-1.5 w-1.5 bg-primary/30 rounded-full animate-ping group-hover/item:bg-accent/30"></div>
                          </div>
                          <span className="group-hover/item:text-primary transition-colors duration-300 leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enhanced center dot with pulsing animation */}
            <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-20">
              <div className="relative">
                {/* Outer pulsing ring */}
                <div className="absolute inset-0 w-6 h-6 bg-primary/20 rounded-full animate-ping -translate-x-1 -translate-y-1"></div>
                {/* Middle glow ring */}
                <div className="absolute inset-0 w-5 h-5 bg-primary/40 rounded-full animate-pulse -translate-x-0.5 -translate-y-0.5"></div>
                {/* Center dot */}
                <div className="relative w-4 h-4 bg-gradient-to-br from-primary to-primary/80 border-3 border-background rounded-full shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0.5 bg-gradient-to-br from-primary-foreground/20 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Empty space for layout balance */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
