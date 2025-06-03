import { Badge } from "@/components/ui/badge"

const timelineItems = [
  {
    year: "March 2023 - Present",
    role: "Senior Software Developer",
    company: "Bruker NANO (formerly PhenomeX)",
    description: "Leading development of cloud-native applications and infrastructure automation tools.",
    achievements: [
      "Completed full-scale Azure DevOps migration in record 3 months",
      "Expedited application runtime by 75% with code rewrite",
      "Built critical testing functionality ahead of schedule",
      "Constructed multi-cloud genomic sequencing testing infrastructure",
    ],
  },
  {
    year: "Dec 2022 - March 2023",
    role: "Senior Software Developer",
    company: "IsoPlexis Corp., a PhenomeX Company",
    description: "Led re-architecture of existing code and DevOps pipeline refactoring.",
    achievements: [
      "Increased critical application performance by 400%",
      "Improved software quality with automated testing",
      "Developed Python libraries and custom tools",
      "Created technology solutions for high-level business goals",
    ],
  },
  {
    year: "Jan 2022 - Dec 2022",
    role: "Software Developer",
    company: "IsoPlexis Corp., a PhenomeX Company",
    description: "Developed research tools for next-gen sequencing and web portal for interdepartmental access.",
    achievements: [
      "Main developer for next-gen sequencing tools",
      "Developed web portal for interdepartmental access",
      "Introduced automated unit and integration testing",
      "Worked with C++ computer vision libraries",
    ],
  },
  {
    year: "Sep 2021 - Jan 2022",
    role: "Computer Systems Engineer",
    company: "McMaster-Carr",
    description: "Created internal communications hub and developed website features end to end.",
    achievements: [
      "Created internal communications hub",
      "Developed website features end to end",
      "Integrated legacy systems with modern applications",
      "Worked with established SDLC processes",
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
          <div key={index} className="relative">
            {/* Horizontal line above each item */}
            <div className="timeline-line mb-6"></div>

            <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="bg-card border border-border p-6">
                  <Badge variant="outline" className="mb-2 font-mono">
                    {item.year}
                  </Badge>
                  <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                  <p className="text-primary font-medium mb-3">{item.company}</p>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
