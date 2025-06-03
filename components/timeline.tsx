import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timelineItems = [
  {
    year: "2023 - Present",
    role: "Senior Software Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of cloud-native applications and infrastructure automation tools.",
    achievements: [
      "Reduced deployment time by 70%",
      "Implemented ML-powered analytics platform",
      "Mentored junior developers",
    ],
  },
  {
    year: "2020 - 2023",
    role: "Software Engineer",
    company: "Data Systems Corp.",
    description: "Designed and built data processing pipelines and analytics solutions.",
    achievements: [
      "Scaled data pipeline to handle 10TB+ daily",
      "Optimized processing algorithms by 40%",
      "Led migration to cloud infrastructure",
    ],
  },
  {
    year: "2018 - 2020",
    role: "Full Stack Developer",
    company: "Web Solutions Ltd.",
    description: "Developed web applications and services for enterprise clients.",
    achievements: ["Built microservices architecture", "Implemented CI/CD pipeline", "Reduced page load time by 60%"],
  },
  {
    year: "2016 - 2018",
    role: "Junior Developer",
    company: "StartUp Ventures",
    description: "Contributed to frontend and backend development of SaaS products.",
    achievements: [
      "Developed key product features",
      "Improved test coverage to 90%",
      "Participated in agile development process",
    ],
  },
]

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -ml-px"></div>
      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="md:w-1/2 flex justify-end">
              <div className={`w-full md:max-w-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                <Card>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-2 font-mono">
                      {item.year}
                    </Badge>
                    <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                    <p className="text-primary font-medium mb-3">{item.company}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-primary rounded-full mt-1.5"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-3.5 mt-6 md:mt-10 flex items-center justify-center w-7 h-7 rounded-full border-4 border-background bg-primary"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
