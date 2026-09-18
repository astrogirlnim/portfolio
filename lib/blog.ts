export type BlogTable = {
  headers: string[]
  rows: string[][]
}

export type BlogSection = {
  heading?: string
  paragraphs: string[]
  bullets?: {
    lead: string
    items: string[]
  }
  image?: string
  imageCaption?: string
  codeBlock?: string
  table?: BlogTable
}

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
  sections?: BlogSection[]
  paragraphs?: string[]
  bullets?: {
    lead: string
    items: string[]
  }
  bulletInsertAfter?: number
}

const saturdayRepo = "https://github.com/astrogirlnim/SATurday"
const saturdayLadder = `${saturdayRepo}/blob/main/docs/ladder/ladder.md`
const saturdayRungs = `${saturdayRepo}/tree/main/docs/ladder/rungs`
const saturdayResolution = `${saturdayRepo}/blob/main/theory/Theory/ProofComplexity/Resolution.lean`
const saturdayPhp = `${saturdayRepo}/blob/main/theory/Theory/ProofComplexity/PHP.lean`
const saturdayPostmortems = `${saturdayRepo}/tree/main/docs/postmortems`
const openAiTenProofs = "https://openai.com/index/openai-ten-proofs/"

const posts: BlogPost[] = [
  {
    slug: "issue-02-attention-is-all-you-need",
    title: "Issue 02: Attention is All You Need",
    date: "2026-09-19",
    excerpt:
      "LLMs lack attention. SATurday enforces focus with a locked proof-complexity ladder, one-rung sessions, and human guardrails.",
    tags: ["SATurday", "P vs NP", "Lean 4", "Architecture"],
    tldr: [
      "Machine models have rudimentary math knowledge, but without a hard selector they generate certificates of nothing.",
      "[SATurday](https://github.com/astrogirlnim/SATurday) climbs P vs NP on falsifiable Lean 4 rungs: one claim, one deduction stage per wake.",
      "Attention is enforced by software and a human guide, not by chance that frontier models stay interested.",
    ],
    sections: [
      {
        paragraphs: [
          "LLMs lack attention and cannot learn or induce the way human beings can. That is the hard-earned lesson of this SATurday’s next installment: machine models have rudimentary math knowledge, but without a hard selector and clear guidance, they will run amok generating certificates of nothing. Let’s dive deeper into model and software architecture to understand why.",
        ],
        image: "images/blog/issue-02-rungs.svg",
        imageCaption: "FIG. B2 · The rung ladder",
      },
      {
        paragraphs: [
          "SATurday climbs **P vs NP** through a locked proof-complexity ladder made of falsifiable **rungs**—claims. The premise is simple: we build toward a final result on building blocks of simpler claims, or “rungs.” Each rung is certified in **Lean 4** with zero `sorry` on the accepted tree: a fully complete proof without ambiguities. Using a programming language enables recursive mathematical grounding. Each sub-theorem builds on another, and each proof combinatorially certifies what is written in a plain-English math publication.",
          "The greatest strength of this method underlies its central problem: empirically proving math in computer notation is an arduous, meticulous, often fractal-like process that stumps machines with finite memories unless heavy memory and parallelization are employed—or a smart system is applied.",
        ],
      },
      {
        heading: "Smart Systems to Address LLM Lack of Focus",
        paragraphs: [
          "The human brain contains on the order of 100 to 500 trillion synaptic connections, and uses only about 20% of the body’s total energy production—less power than a dim lightbulb. Frontier models attempt to emulate this efficiency with an order of magnitude fewer parameters (on the order of trillions) and require on the order of tens to hundreds of kilowatts of power. SATurday localizes inference by using models a further order of magnitude smaller (Qwen2.5-class models on a personal MacBook). The human brain still performs vastly more ongoing computation than any of our LLMs. SATurday operates on the premise that we can emulate human focus by “dumbing down” theorems into smart systems that require less unconstrained “thinking.”",
          "SATurday’s loop is deliberately mechanical. Each wake loads the P vs NP ladder state, picks **one** rung/claim, and applies **one** deduction stage. The system selects **prove**, **audit**, **formalize**, or **falsify**. It writes to memory, logs one session line, and stops. **Prove** comes up with a mathematical argument in prose. **Audit** uses an LLM to interpret and stress-test that argument against predefined criteria the way a mathematician would (e.g. vague constants, vacuous claims, known barriers). **Falsify** runs non-LLM solvers on formula instances for the claim—empirical calibration, not Lean. Assuming a line of attack survives these gauntlets, **formalize** produces a Lean certificate, which I can then interpret and, eventually, send toward publication.",
          "This is, of course, an idealistic picture of the loop. In reality, a research agent that has no reliable capacity for mathematical induction cannot tell lemmas from thrash, and will certify noise forever. Without dedicated systems and guardrails, our agents are just as lost as the regular populace when attempting to solve frontier problems.",
          "To emulate human checkers and amplify LLM output, SATurday uses parallelism of workstreams. Certain rungs or claims are unrelated and do not collide (for example, R2 vs R5), and can be explored at will. To avoid an induction plateau—and the incessant certification of trash—SATurday contains a manual kill switch and a monitoring dashboard. Attention is enforced by software and by a human guide, not by sheer chance that our models keep their interest on the central problem.",
        ],
      },
      {
        heading: "A Note on Our Rungs",
        paragraphs: [
          `Our P vs NP proof ladder certifies hardness for successively stronger proof systems, then (via Cook–Reckhow) connect that hardness to complexity classes. Each rung is a falsifiable claim with its own Lean home and session memory under [\`docs/ladder/rungs/\`](${saturdayRungs}).`,
          "Outline of the ladder:",
        ],
        codeBlock: `R0 → R1 → R2 → R3 → R4 → Summit
         ↘               ↗
           R5 (bridge) ─┘`,
        bullets: {
          lead: "How the pieces fit:",
          items: [
            "**Climb (R0–R4):** stronger and stronger lower bounds on proof systems.",
            "**Bridge (R5):** formalize how “no short proofs for all tautologies” relates to **NP ≠ coNP**, and thus to **P ≠ NP**.",
            "**Summit:** R4-class hardness **plus** a certified R5 bridge—not either alone.",
          ],
        },
        table: {
          headers: ["Rung", "Status (now)", "Plain English"],
          rows: [
            [
              "**R0 — Resolution foundations**",
              "Certified",
              "Define the basic language of SAT proofs in Lean: clauses, resolution steps, proof size. Prove the system is sound and complete (if you derive a contradiction, the formula really is unsat—and every unsat formula has some resolution proof). This is the alphabet.",
            ],
            [
              "**R1 — PHP / Haken lower bound**",
              "Certified",
              "The everyday fact “n+1 pigeons don’t fit in n holes” is easy. R1 is harder: **every resolution proof** of that fact must be **exponentially long**. Local proof rules force a combinatorial bottleneck. First real hardness trophy.",
            ],
            [
              "**R2 — Width machinery**",
              "Prose accepted; still formalizing",
              "Build a reusable machine: if every proof must be **wide** (some clauses mention many variables), then every proof must be **huge** (many steps)—the Ben-Sasson–Wigderson tradeoff—then apply it to hard families (expanders / Tseitin; random CNF attempts kept dying). Factory, not one trophy.",
            ],
            [
              "**R3 — Stronger systems**",
              "Proposed",
              "One certified lower bound **above** plain resolution (e.g. Res(k), cutting planes, or bounded-depth Frege). First step past the system R0–R2 live in.",
            ],
            [
              "**R4 — Open frontier**",
              "Proposed",
              "Super-polynomial lower bounds for systems where **none are known** (starting target: AC⁰[p]-Frege, then stronger). This is where new mathematics—not just formalization—is required.",
            ],
            [
              "**R5 — Cook–Reckhow bridge**",
              "Active",
              "Define P/NP (and proof systems) over a real machine model in Lean, and prove the textbook link: a polynomially bounded proof system for tautologies exists **iff** NP = coNP (and P = NP would imply that). Without this, hardness on the climb doesn’t officially mean P ≠ NP in our locked story.",
            ],
          ],
        },
      },
    ],
  },
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
      "**SATurday** is SAT (Boolean satisfiability, the canonical NP-complete problem) plus **Saturday**: weekend side research I do for love and fun.",
    image: "images/blog/issue-01-saturday.jpg",
    imageCaption: "FIG. B1 · The pun",
    sections: [
      {
        heading: "Hello World",
        paragraphs: [
          "I've been meaning to write in public for a while. I want to keep a regular journal of what I'm actually building and investigating, so here it is: welcome to the ongoings of Nataly's time!",
          "This blog is where I'll document my work while it's still messy. I don't expect perfection, but I require progress.",
        ],
      },
      {
        heading: "Th P vs NP question",
        paragraphs: [
          "The premise is as follows: is a proposed solution that can be checked in polynomial time solvable in the same?",
          "Given that math is a language entrenched in nearly everything we do, answering this question has deep implications. As an example, cryptographic algorithms rely on the guarantee of their difficulty to solve. **If P = NP is proven, their security is brought into question.** To that end, several theorists have explored and attempted different approaches to this problem, catalogued nicely [here](https://mikinty.github.io/P-vs-NP/).",
          "P.S. A conjecture of P=NP does not automatically imply that cryptographic algorithms are insecure. They can still take enormous amounts of time (especially those with large polynomial exponents). ",
        ],
      },
      {
        heading: "SATurday",
        paragraphs: [
          "I would like to begin the blog series by introducing you to [SATurday](https://github.com/astrogirlnim/SATurday), a project based around a mathematical question which has been pestering engineers and mathematicians since the 1970s. It's a common question at the forefront of computer science, textbooks, forums, and the like.",
          "[SATurday](https://github.com/astrogirlnim/SATurday) is built around a central tenant that **if a claim about proof complexity isn't certified in Lean 4 (our programming language of choice), it doesn't count.**",
        ],
      },
      {
        heading: "AI and Math Research",
        paragraphs: [
          "The advent of AI multiplies this research in a few ways. In general, I believe AI to be a force multiplier for human intelligence, and science and research to be one of the best applications for it. Hence, I am attacking this problem as if I had a swarm of researchers to aggregate knowledge accross different domains and fields.",
          "That being said, I'm under no illusion that throwing AI at P vs NP makes the problem any less intractable - just more accessible to a novice, single researcher like me. This is why SATurday is deliberately built with the assumption that most conjectures will be wrong. AI will make it easier to find failures faster.",
          "We build a [ladder of conjectures](https://github.com/astrogirlnim/SATurday/blob/main/docs/ladder/ladder.md) based on this premise, and each step on the ladder is and should be falsifiable. Thereafter, we simulate a research team of agents with a custom harness, run on loop (or with human intervention) towards a single goal.",
          "Necessarily, our SAT experiments can stress-test ideas under tight budgets, but they never become axioms. I do not have an infinite compute budget, and am one person among many attempting this investigation. However, retaining a meaningful result is the part I care about. SATurday is the most extreme version of this rabbit-hole. It's slow, it's speculative, and it might go nowhere.",
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
      },
      {
        paragraphs: [
          "In the hopes that mathematicians more experienced than me will enjoy, and take some interest, thank you for reading! Issue 01.",
        ],
      },
    ],
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
