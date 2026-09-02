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
    <div>
      {skills.map((skillGroup) => (
        <div
          key={skillGroup.category}
          className="grid grid-cols-1 gap-3 py-5 md:grid-cols-[13rem_1fr] md:gap-8"
        >
          <h3 className="fig-kicker pt-0.5">{skillGroup.category}</h3>
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">
            {skillGroup.items.join("  ·  ")}
          </p>
        </div>
      ))}
    </div>
  )
}
