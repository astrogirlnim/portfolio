const keyCourses = [
  "Data Structures",
  "Data Science",
  "Analysis of Algorithms",
  "Biomedical Imaging",
  "Mathematical Modeling",
  "High-Performance Programming",
]

const honors = [
  {
    title: "Yale Domestic Summer Award",
    detail: "May 2020",
  },
  {
    title: "Runner Up",
    detail: "Yale CBIT Healthcare Hackathon, January 2021",
  },
  {
    title: "Tsai City Accelerator Program",
    detail: "Yale Tsai Center for Innovative Thinking, November 2020",
  },
]

export default function EducationSection() {
  return (
    <div className="mt-16 border-t border-border pt-12 md:mt-20">
      <p className="fig-kicker mb-4">Education · Honors</p>
      <h3 className="mb-8 font-display text-3xl tracking-tight sm:text-4xl">Education</h3>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h4 className="font-display text-2xl italic tracking-tight sm:text-3xl">Yale University</h4>
          <p className="mt-2 font-mono text-xs tracking-[0.16em] uppercase text-primary">
            Bachelor of Science, Biomedical Engineering
          </p>
          <p className="mt-1 font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Biocomputation · 2017 – 2021 · New Haven, CT
          </p>
          <p className="mt-4 text-sm text-muted-foreground">GPA 3.64 · Cum Laude</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Languages: English (native), Spanish (native), French (professional)
          </p>
          <h5 className="fig-kicker mt-6 mb-3">Key courses</h5>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {keyCourses.map((course) => (
              <li key={course} className="flex items-start gap-3 text-sm">
                <span className="mt-2 h-px w-3 flex-shrink-0 bg-primary" />
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <h4 className="font-display text-2xl italic tracking-tight sm:text-3xl">Honors & awards</h4>
          <ul className="mt-6 space-y-4">
            {honors.map((honor) => (
              <li key={`${honor.title}-${honor.detail}`}>
                <span className="block font-medium">{honor.title}</span>
                <p className="font-mono text-xs tracking-wide text-muted-foreground">{honor.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
