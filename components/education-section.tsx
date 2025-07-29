import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function EducationSection() {
  return (
    <section className="py-20">
      <div className="space-y-4 max-w-3xl mb-10">
        <h2 className="text-3xl font-bold tracking-tight elegant-underline">Education & Honors</h2>
        <p className="text-lg text-muted-foreground">
          My academic background and achievements that have contributed to my professional development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="retro-card">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold">Yale University</h3>
                <p className="text-primary font-medium">Bachelor of Science - Biomedical Engineering</p>
                <p className="text-sm text-muted-foreground mb-2">Focus on Biocomputation • August 2017 - May 2021</p>
                <p className="text-sm mb-4">GPA: 3.64</p>
                <div>
                  <h4 className="font-medium mb-2">Key Courses:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="text-sm flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                      <span>Data Structures</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                      <span>Data Science</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                      <span>Analysis of Algorithms</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                      <span>Biomedical Imaging</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                      <span>Mathematical Modeling</span>
                    </li>
                    <li className="text-sm flex items-start gap-2">
                      <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                      <span>High-Performance Programming</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="retro-card">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold">Honors & Awards</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                    <div>
                      <span className="font-medium">Runner Up</span>
                      <p className="text-sm text-muted-foreground">Yale CBIT Healthcare Hackathon - Jan 2021</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                    <div>
                      <span className="font-medium">Tsai City Accelerator Program</span>
                      <p className="text-sm text-muted-foreground">
                        Yale Tsai Center For Innovative Thinking - Nov 2020
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                    <div>
                      <span className="font-medium">Yale Domestic Summer Award</span>
                      <p className="text-sm text-muted-foreground">May 2020</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                    <div>
                      <span className="font-medium">Additional Honors</span>
                      <p className="text-sm text-muted-foreground">
                        Cum Laude, Vincent Cordova Diversity Award, National Hispanic Scholar
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 bg-primary mt-1.5"></div>
                    <div>
                      <span className="font-medium">Languages</span>
                      <p className="text-sm text-muted-foreground">Fluent in English, Spanish, French</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
