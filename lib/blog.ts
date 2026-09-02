export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  tldr?: string[]
  nameNote?: string
  image?: string
  imageCaption?: string
  paragraphs: string[]
  bullets?: {
    lead: string
    items: string[]
  }
  bulletInsertAfter?: number
}

const saturdayRepo = "https://github.com/astrogirlnim/SATurday"
const saturdayLadder = `${saturdayRepo}/blob/main/docs/ladder/ladder.md`
const saturdayResolution = `${saturdayRepo}/blob/main/theory/Theory/ProofComplexity/Resolution.lean`
const saturdayPhp = `${saturdayRepo}/blob/main/theory/Theory/ProofComplexity/PHP.lean`
const saturdayPostmortems = `${saturdayRepo}/tree/main/docs/postmortems`
const openAiTenProofs = "https://openai.com/index/openai-ten-proofs/"

const posts: BlogPost[] = [
  {
    slug: "issue-01-saturday",
    title: "Issue 01: SATurday and this blog",
    date: "2026-09-02",
    excerpt:
      "Starting a public journal, and an introduction to SATurday and the P vs NP question behind it.",
    tags: ["SATurday", "P vs NP", "Lean 4", "Notes"],
    tldr: [
      "You're reading issue 01 of Nataly's public research notebook. Welcome!",
      "[SATurday](https://github.com/astrogirlnim/SATurday) is my long-shot climb toward P vs NP: Lean 4 certificates, agent swarms, tight SAT budgets, zero sorries.",
      "Everything below is the longer version, for the curious and the mildly unhinged.",
    ],
    nameNote:
      "**SATurday** is SAT (Boolean satisfiability, the canonical NP-complete problem) plus **Saturday**: weekend side research I do for love and fun. The sketch is Saturn. The graph is closer to the SAT part.",
    image: "images/blog/issue-01-saturday.jpg",
    imageCaption: "FIG. B1 · Saturn, graphs, and the pun",
    paragraphs: [
      "I've been meaning to write in public for a while. I want to keep a regular journal of what I'm actually building and investigating, so here it is: welcome to the ongoings of Nataly's time!",
      "I would like to begin the blog series by introducing you to [SATurday](https://github.com/astrogirlnim/SATurday), a project based around a mathematical question which has been pestering engineers and mathematicians since the 1970s. It's a common question at the forefront of computer science, textbooks, forums, and the like.",
      "The premise is as follows: is a proposed solution that can be checked in polynomial time solvable in the same?",
      "Given that math is a language entrenched in nearly everything we do, answering this question has deep implications. As an example, cryptographic algorithms rely on the guarantee of their difficulty to solve. **If P = NP is proven, their security is brought into question.** To that end, several theorists have explored and attempted different approaches to this problem, catalogued nicely [here](https://mikinty.github.io/P-vs-NP/).",
      "I don't purport to be a pure mathematician or an expert. My experience doesn't extend much beyond a college degree and a lifelong mathematical curiosity. However, I believe everyone deserves a fair chance to attain their dreams, and solving this problem (or moving forward the needle in doing so) is one of mine. I hope my research can be of use or interest to some folks.",
      "The advent of AI multiplies this research in a few ways. In general, I believe AI to be a force multiplier for human intelligence, and science and research to be one of the best applications for it. Hence, I am attacking this problem as if I had a swarm of researchers, built from the median of all human knowledge available on the internet, and curated by statistical formulae.",
      "[SATurday](https://github.com/astrogirlnim/SATurday) is built around a central tenant that **if a claim about proof complexity isn't certified in Lean 4 (our programming language of choice), it doesn't count.**",
      "We build a [ladder of conjectures](https://github.com/astrogirlnim/SATurday/blob/main/docs/ladder/ladder.md) based on this premise, and each step on the ladder is and should be falsifiable. Thereafter, we simulate a research team of agents with a custom harness, run on loop (or with human intervention) towards a single goal.",
      "Necessarily, our SAT experiments can stress-test ideas under tight budgets, but they never become axioms. I do not have an infinite compute budget, and am one person among many attempting this investigation. However, retaining a meaningful result is the part I care about. SATurday is the most extreme version of this rabbit-hole. It's slow, it's speculative, and it might go nowhere.",
      "This blog is where I'll document my work while it's still messy. I don't expect perfection, but I require progress.",
      "Thank you for reading! Issue 01.",
    ],
    bullets: {
      lead: "Latest on SATurday:",
      items: [
        `Full program reboot in August 2026 after an audit; earlier dead ends are in [postmortems](${saturdayPostmortems}), not quietly dropped.`,
        `R0 (certified): resolution soundness and refutational completeness in [Lean 4](${saturdayResolution}), zero sorries.`,
        `R1 (active): Haken's exponential pigeonhole bound. The family and non-vacuity witness are certified in [PHP.lean](${saturdayPhp}); the full bound sits in a quarantined Frontier namespace for now.`,
        `R2 through R5 on deck: width machinery, a bound above resolution, AC0[p]-Frege, and the Cook-Reckhow bridge. See the [ladder](${saturdayLadder}).`,
        `Prose-first pipeline: natural-language arguments with gap lists before formalization, in the spirit of the [OpenAI ten-proofs release](${openAiTenProofs}).`,
        `Budgeted falsifier runs (Kissat, hard wall-clock caps). Artifacts are hash-addressed and never promoted to axioms.`,
        `Session harness: one rung, one action per cycle (prove, formalize, falsify, or audit). Repo: [github.com/astrogirlnim/SATurday](${saturdayRepo}).`,
      ],
    },
    bulletInsertAfter: 5,
  },
]

function byNewest(a: BlogPost, b: BlogPost) {
  return b.date.localeCompare(a.date)
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(byNewest)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPostSlugs(): string[] {
  return posts.map((post) => post.slug)
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`))
}
