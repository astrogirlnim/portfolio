const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "C#", "C", "C++", "TypeScript", "JavaScript", "Dart", "Fortran", "GDScript", "VB", "Bash", "MATLAB", "HTML", "CSS", "SQL", "Racket", "Lisp"],
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skillGroup) => (
        <div
          key={skillGroup.category}
          className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
        >
          <div className="border-b border-border/50 px-4 py-3">
            <h3 className="text-base font-semibold tracking-tight sm:text-lg">{skillGroup.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2 p-4">
            {skillGroup.items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/70 bg-background/50 px-3 py-1.5 text-sm leading-tight text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
