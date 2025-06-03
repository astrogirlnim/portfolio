import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timelineItems = [
  {
    year: "March 2023 - Present",
    role: "Senior Software Developer, CAS Project",
    company: "Bruker NANO, formerly PhenomeX",
    location: "Remote",
    description: "Leading development of cloud-native applications and infrastructure automation tools.",
    achievements: [
      "Completed a full-scale Azure DevOps migration in record 3 months by coordinating team efforts, automating migration processes, and creating custom programmatic tools",
      "Expedited application runtime by 75% with code rewrite, hitting product specifications with an on-time release",
      "Built critical testing functionality ahead of schedule, expediting product release by 2 weeks",
      "Enriched deployment life cycle and scalability through Docker and CI/CD orchestration technologies",
      "Constructed a multi-cloud implementation of Genomic sequencing testing infrastructure",
    ],
  },
  {
    year: "Dec 2022 - March 2023",
    role: "Senior Software Developer, Duomic Project",
    company: "IsoPlexis Corp., a PhenomeX Company",
    location: "Remote",
    description: "Led re-architecture efforts and improved software quality through DevOps pipeline optimization.",
    achievements: [
      "Increased critical application performance by 400% by leading a re-architecture of existing code",
      "Improved software quality and throughput by implementing DevOps pipeline refactoring and automated testing",
      "Supported interdepartmental teamwork by developing python libraries, custom tools, and high-quality documentation",
      "Worked with company leadership to create technology solutions that achieved high-level business goals",
    ],
  },
  {
    year: "Jan 2022 - Dec 2022",
    role: "Software Developer",
    company: "IsoPlexis Corp., a PhenomeX Company",
    location: "Remote",
    description: "Main developer in creating research tools for next-gen sequencing and web portal development.",
    achievements: [
      "Main developer in creating research tools for next-gen sequencing",
      "Independently developed a web portal that enabled interdepartmental teams to access research tools",
      "Introduced automated unit testing and integration testing into our development packages",
      "Worked with C++ computer vision libraries to improve our sequencing technologies",
    ],
  },
  {
    year: "Sep 2021 - Jan 2022",
    role: "Computer Systems Engineer",
    company: "McMaster-Carr",
    location: "Remote",
    description: "Full-stack development and system integration for business-critical applications.",
    achievements: [
      "Improved company knowledge sharing and education by creating an internal communications hub",
      "Worked with established SDLC that involved cross team coordination, testing, and release schedules",
      "Delivered business value by developing website features end to end, including Database Schemas, Business Logic, REST API Implementation, and front-end development",
      "Integrated legacy systems to interface with modern business-critical applications",
    ],
  },
  {
    year: "Aug 2017 - May 2021",
    role: "Bachelor of Science - Biomedical Engineering",
    company: "Yale University",
    location: "New Haven, CT",
    description: "Focus on Biocomputation with research experience in computational modeling and bioinformatics.",
    achievements: [
      "GPA: 3.64 with focus on Biocomputation",
      "Research in Miller-Jensen Lab: Computational modeling of latent HIV gene expression",
      "Research in Prof. Yi's Group: Bioinformatics of protein-protein interactions in disease pathology",
      "Runner Up - Yale CBIT Healthcare Hackathon, Tsai City Accelerator program participant",
    ],
  },
]

export default function Timeline() {
  return (
    <div className="relative max-w-6xl mx-auto px-4">
      {/* Center line - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-px"></div>

      {/* Mobile timeline container with left border */}
      <div className="md:hidden timeline-mobile">
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <div key={index} className="timeline-card mobile-timeline-card">
              <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group border-l-4 border-l-primary/30 hover:border-l-primary/60">
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
                  <ul className="space-y-1.5">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs sm:text-sm flex items-start gap-2 group/item">
                        <div className="h-1 w-1 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:bg-accent transition-colors duration-300"></div>
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

      {/* Desktop timeline */}
      <div className="hidden md:block space-y-16">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-row gap-12 ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Card Container */}
            <div className="w-1/2 flex justify-end">
              <div className={`w-full max-w-xl lg:max-w-2xl relative ${
                index % 2 === 0 ? "mr-20" : "ml-20"
              }`}>
                <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group border-l-4 border-l-primary/30 hover:border-l-primary/60">
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
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start gap-2 group/item">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0 group-hover/item:bg-accent transition-colors duration-300"></div>
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

            {/* Desktop: Center dot only - no horizontal lines to avoid overlap */}
            <div className="absolute left-1/2 top-8 transform -translate-x-1/2">
              {/* Center dot */}
              <div className="w-4 h-4 bg-primary border-4 border-background rounded-full z-10 shadow-lg"></div>
            </div>

            {/* Empty space for layout balance */}
            <div className="w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
