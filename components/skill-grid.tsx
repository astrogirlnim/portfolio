import { Card, CardContent } from "@/components/ui/card"

// Update the skills to match Nataly's resume
const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "C#", "C", "C++", "VB", "Bash", "Matlab", "JavaScript", "HTML", "CSS", "SQL", "Racket", "Lisp"],
  },
  {
    category: "Frameworks",
    items: [".NET", "WPF/XAML", "Scikit", "OpenCV", "Flask", "ReactJS", "NextFlow", "Luigi"],
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "PostgreSQL", "IIS", "Visual Studio", "VS Code", "Vim"],
  },
  {
    category: "Platforms",
    items: ["Linux", "Web", "Google Cloud Platform", "Azure", "AWS", "JIRA", "GitHub", "Bitbucket"],
  },
  {
    category: "Concepts",
    items: ["OOP", "SOLID", "Agile Development", "Unit Testing", "Integration Testing", "Mathematical Modeling", "Machine Learning"],
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
        <Card key={skillGroup.category} className="overflow-hidden hover-glow transition-all duration-300 hover:scale-105 card-gradient">
          <div className="bg-primary/10 border-b border-border p-4 group-hover:bg-primary/20 transition-colors duration-300">
            <h3 className="font-bold text-lg">{skillGroup.category}</h3>
          </div>
          <CardContent className="p-4">
            <ul className="grid grid-cols-2 gap-2">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2 group">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full group-hover:bg-accent transition-colors duration-300"></div>
                  <span className="text-sm group-hover:text-primary transition-colors duration-300">{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
