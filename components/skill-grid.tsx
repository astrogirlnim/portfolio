// Comprehensive skills including featured project technologies
const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "C#", "C", "C++", "Rust", "TypeScript", "JavaScript", "Dart", "Fortran", "GDScript", "VB", "Bash", "Matlab", "HTML", "CSS", "SQL", "Racket", "Lisp"],
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
    items: ["Machine Learning", "AI/ML", "AlphaTensor", "LangGraph", "GPU Optimization", "Scientific Computing", "Linear Algebra", "Performance Optimization", "Mathematical Modeling", "Computational Biology"],
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skillGroup) => (
        <div key={skillGroup.category} className="rounded-lg bg-card/30 text-card-foreground shadow-sm overflow-hidden hover-glow transition-all duration-300 hover:scale-105 card-gradient group backdrop-blur-sm">
          <div className="bg-primary/8 p-4 group-hover:bg-primary/15 transition-colors duration-300">
            <h3 className="font-semibold text-lg tracking-tight">{skillGroup.category}</h3>
          </div>
          <div className="p-4">
            <ul className="grid grid-cols-2 gap-2">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2 group/item">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full group-hover/item:bg-accent transition-colors duration-300"></div>
                  <span className="text-sm group-hover/item:text-primary transition-colors duration-300 font-light leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
