import { Card, CardContent } from "@/components/ui/card"

// Update the skills to match Nataly's resume
const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "C#", "C/C++", "Bash/Shell", "JavaScript", "SQL"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Azure", "AWS", "Google Cloud", "Docker", "CI/CD", "DevOps"],
  },
  {
    category: "Frameworks & Tools",
    items: [".NET", "WPF/XAML", "Flask", "ReactJS", "NextFlow", "Luigi"],
  },
  {
    category: "Data & Analytics",
    items: ["Scikit", "OpenCV", "Mathematical Modeling", "Machine Learning", "Genomic Sequencing"],
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
        <Card key={skillGroup.category} className="overflow-hidden retro-card">
          <div className="bg-primary/10 border-b border-border p-4">
            <h3 className="font-bold text-lg">{skillGroup.category}</h3>
          </div>
          <CardContent className="p-4">
            <ul className="grid grid-cols-2 gap-2">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-primary"></div>
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
