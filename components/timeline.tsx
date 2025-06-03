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
    <div className="relative max-w-4xl mx-auto">
      {/* Center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-px"></div>

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="md:w-1/2 flex justify-end">
              <div className={`w-full md:max-w-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <Card className="hover-glow transition-all duration-300 hover:scale-105 card-gradient group">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-2 font-mono hover-glow">
                      {item.year}
                    </Badge>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">{item.role}</h3>
                    <p className="text-primary font-medium mb-1">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.location}</p>
                    <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{item.description}</p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start gap-2 group/item">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0 group-hover/item:bg-accent transition-colors duration-300"></div>
                          <span className="group-hover/item:text-primary transition-colors duration-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Center dot */}
            <div className="absolute left-1/2 top-6 w-4 h-4 bg-primary border-4 border-background transform -translate-x-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
