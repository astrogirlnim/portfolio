import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    category: "Languages",
    items: ["Python", "C#", "Bash/Shell", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    category: "Data & Analytics",
    items: ["Data Pipelines", "ETL", "Machine Learning", "Statistical Analysis", "Big Data"],
  },
  {
    category: "Frameworks & Tools",
    items: [".NET Core", "Django", "Flask", "React", "Node.js", "GraphQL"],
  },
  {
    category: "Current Focus",
    items: ["Computer Hardware", "AI Technologies", "Global Internet Infrastructure"],
  },
]

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skillGroup) => (
        <Card key={skillGroup.category} className="overflow-hidden">
          <div className="bg-primary/10 border-b border-border p-4">
            <h3 className="font-bold text-lg">{skillGroup.category}</h3>
          </div>
          <CardContent className="p-4">
            <ul className="grid grid-cols-2 gap-2">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
