// Comprehensive skills including featured project technologies
const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "C#", "C", "C++", "TypeScript", "JavaScript", "Dart", "Fortran", "GDScript", "VB", "Bash", "Matlab", "HTML", "CSS", "SQL", "Racket", "Lisp"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tauri", "Flutter", "Electron", ".NET", "WPF/XAML", "Scikit", "OpenCV", "Flask", "LangGraph", "NextFlow", "Luigi"],
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "Git", "Firebase", "Godot", "PostgreSQL", "IIS", "Visual Studio", "VS Code", "Vim", "Linux", "Google Cloud Platform", "Azure", "AWS", "JIRA", "GitHub", "Bitbucket"],
  },
  {
    category: "AI & Scientific Computing",
    items: ["Machine Learning", "AI/ML", "LangGraph", "GPU Optimization", "Scientific Computing", "Linear Algebra", "Performance Optimization", "Mathematical Modeling", "Computational Biology"],
  },
  {
    category: "Application Development",
    items: ["Full-Stack Development", "Mobile App Development", "Desktop Applications", "Game Development", "Cross-Platform", "Real-time Systems", "Privacy-First Design", "Genomics Applications"],
  },
  {
    category: "Software Engineering",
    items: ["OOP", "SOLID", "Agile Development", "Unit Testing", "Integration Testing", "Real-time Collaboration", "Pipeline Architecture", "Cloud Infrastructure", "Multiplayer Systems"],
  },
]

export default function SkillGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skills.map((skillGroup) => (
        <div key={skillGroup.category} className="rounded-lg bg-card/30 text-card-foreground shadow-sm overflow-hidden hover-glow transition-all duration-300 hover:scale-[1.02] card-gradient group backdrop-blur-sm">
          <div className="bg-primary/8 px-4 py-3 group-hover:bg-primary/15 transition-colors duration-300">
            <h3 className="font-semibold text-base tracking-tight">{skillGroup.category}</h3>
          </div>
          <div className="px-4 pb-4 pt-2">
            <ul className="grid grid-cols-2 gap-1.5">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-1.5 group/item py-0.5">
                  <div className="h-1 w-1 bg-primary rounded-full group-hover/item:bg-accent transition-colors duration-300 flex-shrink-0"></div>
                  <span className="text-xs group-hover/item:text-primary transition-colors duration-300 font-light leading-tight">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
