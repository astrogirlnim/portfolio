import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

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
    title: "Cum Laude",
    detail: "Yale University",
  },
  {
    title: "National Hispanic Scholar",
    detail: "College Board",
  },
  {
    title: "Yale Domestic Summer Award",
    detail: "May 2020",
  },
  {
    title: "Letter of Commendation",
    detail: "Department of History, Yale University",
  },
  {
    title: "Letter of Commendation",
    detail: "Department of English, Yale University",
  },
  {
    title: "Runner Up",
    detail: "Yale CBIT Healthcare Hackathon, January 2021",
  },
  {
    title: "Tsai City Accelerator Program",
    detail: "Yale Tsai Center for Innovative Thinking, November 2020",
  },
  {
    title: "Vincent Cordova Diversity Award",
    detail: "Yale University",
  },
]

export default function EducationSection() {
  return (
    <div className="mt-16 md:mt-20">
      <div className="mb-8 max-w-3xl space-y-3 sm:mb-10">
        <h3 className="text-2xl font-display font-semibold tracking-tight sm:text-3xl">Education & Honors</h3>
        <p className="text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
          Academic background, languages, and honors that shaped this work.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <Card className="border-border/60 bg-card/70 shadow-sm backdrop-blur-sm">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="mt-1 h-7 w-7 flex-shrink-0 text-primary" />
              <div className="min-w-0">
                <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">Yale University</h4>
                <p className="font-medium text-primary">Bachelor of Science, Biomedical Engineering</p>
                <p className="mb-2 text-sm text-muted-foreground">Focus on Biocomputation · 2017 – 2021 · New Haven, CT</p>
                <p className="mb-4 text-sm">GPA 3.64 · Cum Laude</p>
                <p className="mb-2 text-sm text-muted-foreground">
                  Languages: English (native), Spanish (native), French (professional)
                </p>
                <h5 className="mb-2 text-sm font-medium">Key courses</h5>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {keyCourses.map((course) => (
                    <li key={course} className="flex items-start gap-2 text-sm">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card/70 shadow-sm backdrop-blur-sm">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <Award className="mt-1 h-7 w-7 flex-shrink-0 text-primary" />
              <div className="min-w-0">
                <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">Honors & Awards</h4>
                <ul className="mt-4 space-y-3">
                  {honors.map((honor) => (
                    <li key={`${honor.title}-${honor.detail}`} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      <div>
                        <span className="font-medium">{honor.title}</span>
                        <p className="text-sm text-muted-foreground">{honor.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
