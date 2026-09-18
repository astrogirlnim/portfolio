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

/** Canonical papers linked from issue 02 rung statements. */
const paperRobinson1965 = "https://doi.org/10.1145/321250.321253"
const paperHaken1985 = "https://doi.org/10.1016/0304-3975(85)90144-6"
const paperBeamePitassi1996 = "https://homes.cs.washington.edu/~beame/papers/focsclause.pdf"
const paperBsw2001 = "https://www.math.ias.edu/~avi/PUBLICATIONS/ABSTRACT/bw02.pdf"
const paperUrquhart1987 = "https://doi.org/10.2307/2273868"
const paperChvatalSzemeredi1988 = "https://doi.org/10.1137/0217056"
const paperPudlak1997 = "https://doi.org/10.2307/2275541"
const paperAjtai1988 = "https://doi.org/10.1109/SFCS.1988.21951"
const paperPitassiBeameImpagliazzo1993 = "https://doi.org/10.1007/BF01200026"
const paperRazborov1987 = "https://doi.org/10.1007/BF01621094"
const paperSmolensky1987 = "https://doi.org/10.1145/28395.28404"
const paperCookReckhow1979 = "https://www.cs.toronto.edu/~sacook/homepage/cook_reckhow.pdf"
const paperSabharwalProofComplexity =
  "https://www.cs.cornell.edu/~sabhar/publications/iaspcmi-proofcomplexity00.pdf"

const posts: BlogPost[] = [
  {
    slug: "issue-02-attention-is-all-you-need",
    title: "Issue 02: Attention is All You Need",
    date: "2026-09-19",
    excerpt:
      "Transformers are great, but LLMs have an attention problem. SATurday makes the problem smaller.",
    tags: ["SATurday", "P vs NP", "Lean 4", "Architecture"],
    tldr: [
      "LLMs can produce useful deductions and proof sketches, then spend forever generating certificates of nothing.",
      "[SATurday](https://github.com/astrogirlnim/SATurday) makes the problem smaller: falsifiable Lean 4 rungs, one claim per wake.",
      "The intelligence rests in the harness, not the parameter count.",
    ],
    sections: [
      {
        paragraphs: [
          "Transformers are great, but LLMs have an attention problem. They are easy to distract when deciding what deserves attention over the course of a long, uncertain research trek. That is the hard-earned lesson of this SATurday installment; machine models have rudimentary mathematical knowledge and can produce useful deductions, proof sketches, counterexamples, and even formal code. Provide an agent a frontier problem and enough time, however, and it can happily spend it generating certificates of nothing. SATurday’s solution is not to use smarter models and hope they make better choices; rather, it is to make the problem smaller. Before we talk architecture, below is the research context.",
        ],
      },
      {
        heading: "A Prelim",
        paragraphs: [
          `[SATurday](${saturdayRepo}) is a research project toward **P vs NP** whose bet is emphatically not “ask a chatbot for a proof.” The route this project explores is proof complexity, the study of how large a proof must be inside a particular formal proof system ([lecture notes](${paperSabharwalProofComplexity})). We know explicit families of formulas for which weak systems require enormous computational proofs. Stronger systems are even harder to understand. At the far end, Cook-Reckhow connects sufficiently strong propositional proof systems to the complexity classes NP and coNP. This territory is already established mathematics, which runs directly into major open problems in proof complexity.`,
          "SATurday’s research ladder is a map across proof complexity territory, formalized in code. The idea is to break apart uncharted territory into small, falsifiable pieces, called rungs. A rung is one claim on the chain: a foundational axiom, a lower bound, or a bridge theorem. Each rung has a mathematical statement, a status, a Lean home, and a memory file to which it is written. Finally, a rung is stateful and can be classified as open or closed. Closing a rung changes what the system is allowed to treat as ground truth. Until Lean accepts the relevant declaration with zero `sorry`, or no ambiguity, it does not count as formally certified.",
          "The distinction between assumed and certified matters. Lean can verify that a formal theorem follows from its stated assumptions, but cannot magically guarantee that what was formalized was what was intended. Humans still have to inspect the correspondence between the mathematics on paper and those in code. Hence, the rungs serve two purposes, to organize the mathematics and constrain the agent’s attention.",
          "The agent works on one claim. It records what happened. Then it stops. If it succeeds, the next wake cycle inherits a stronger foundation. Fail, and a claim is discarded. The agents thrash and trash, generating logs of hallucinations which look like progress.",
          "We implement a smart system to reduce hallucinations. A smart system, however, does not mean a bigger model. It means a deliberately boring mechanical loop wrapped around a relatively small local model, broken up into the following four stages:",
        ],
        codeBlock: "Pick one rung → run one stage → check the result → write to memory → stop.",
      },
      {
        paragraphs: [
          "Humans still gate progression across the research tree. The intelligence here rests increasingly in the harness rather than the model size or parameters.",
        ],
        image: "images/blog/issue-02-rungs.jpg",
        imageCaption: "FIG. B2 · Proof-complexity ladder",
      },
      {
        paragraphs: [
          "SATurday climbs toward **P vs NP** through a locked proof-complexity ladder made of falsifiable claims. The premise is simple: don’t ask a machine to solve one enormous problem. Decompose it into smaller claims whose truth or falsity can be tested.",
          "Each accepted rung is formalized in **Lean 4** with zero `sorry` on the accepted declaration. In practical terms, Lean forces every accepted claim to rest on previously checked definitions, theorems, and allowed axioms. Though this is enormously useful, it is also a trap. Spelling mathematics out so that a machine can check every logical dependency is a slow, meticulous, and fractal-like process. A two-line argument on paper can explode into definitions, helper lemmas, coercions, edge cases, imported methods, proof obligations, and even vagueness. A model with finite context eventually drowns in residue. This issue can be attacked with larger models, bigger context windows, enormous memory, and ungodly parallelism. Alternatively, you can try making the thing the model is allowed to think about much smaller. SATurday does the latter.",
        ],
      },
      {
        heading: "Smart Systems to Address LLM Lack of Focus",
        paragraphs: [
          "The human brain contains 100 to 500 trillion synaptic connections, and uses only 20% of the body’s total energy production, or less power than a dim lightbulb. Frontier models attempt to emulate this efficiency with an order of magnitude fewer neural nodes (1.5-5+ trillion) and require 50k-250k Watts of power. SATurday currently runs much of its inference locally, including small Qwen-class models on a personal MacBook. That constraint is intentional.",
          "SATurday operates on the premise that we can emulate the human brain and “dumb down” math theorems with smart systems that require less “thinking.” It is less interested in whether a giant frontier model can produce a brilliant mathematical continuation than whether a small model becomes substantially more useful when the surrounding software narrows its job. It does not assume that a 2.5-billion-parameter model emulates a human mathematician. Almost the opposite, it makes the machine’s job dumb enough that it doesn’t have to.",
          "SATurday’s loop is deliberately mechanical. Each wake loads the P vs. NP proof ladder state, picks one rung/claim, and applies a deduction stage. Available stages are prove, audit, formalize, or falsify.",
        ],
        bullets: {
          lead: "Stages",
          items: [
            "**Prove** constructs a mathematical argument in prose.",
            "**Audit** attempts to break the argument by any means necessary. Here, an LLM inspects the proof against predefined failure criteria: vague constants, hidden assumptions, unjustified asymptotics, circular dependencies, quantifier mistakes, or a lemma that quietly assumes the thing it is trying to prove.",
            "**Falsify** avoids LLM calls where possible, and runs ordinary computational tools and solvers against finite instances of the claim. It looks for counterexamples and checks whether the proposed bounds behave the way the argument says they should.",
            "**Formalize** translates the surviving argument into Lean 4, where the kernel gets the final word on whether the formal statement actually makes sense.",
          ],
        },
      },
      {
        paragraphs: [
          "It writes to memory, logs one session line, and stops. Ideally, there is no wandering off to a more interesting theorem, deciding midway through that P vs NP would be easier through an unrelated route, or a twenty-page monologue to use up tokens. Consider our current R2 rung falsify wake: the active claim states that a particular family of Tseitin formulas must have large resolution width. The agent receives the following prompt:",
        ],
        codeBlock:
          "Here is the exact width claim and its dependencies. Here is what previous wakes established. Your job is to try to falsify it.",
      },
      {
        paragraphs: [
          "The agent searches for a counterexample, tests permitted instances, records the result, updates the rung’s memory, and exits. A later wake might audit the surviving argument, and another following wake might formalize one lemma. The final wake might discover that the whole direction is garbage. All outcomes are useful because the unit of work is small enough that failure is decisive and digestible. This is engineered attention.",
          "Assuming our proofs can survive these gauntlets, we produce a Lean certificate, which can then be interpreted by a human and sent off to publication!",
          "This is, of course, an idealistic loop. There is an obvious problem with all of this. A research agent that cannot reliably distinguish an important lemma from an attractive dead end will certify noise forever. Formal verification does not solve that problem.",
          "Lean is extremely good for answering a particular class of questions. Does this theorem follow from these definitions and assumptions? Yes, or perhaps no. However, our loop cannot answer fundamental mathematical pondering. Is this theorem useful? Was what was formalized what was actually on paper? Is spending the next six months proving this lemma a good idea? Without dedicated systems and guardrails, our agents are just as lost as we are when attempting to solve frontier problems.",
          "So SATurday adds another constraint to try to speed up the process: organized parallelism. Certain rungs or claims are unrelated and do not collide (for example, R2 vs R5), and can be explored at will ad infinitum. Those workstreams can therefore run in parallel while still obeying their own rung boundaries. But parallelism introduces another failure mode: instead of one agent generating trash forever, you can have ten agents generating trash ten times faster. SATurday therefore includes plateau detection, a monitoring dashboard, and a manual kill switch. Attention is therefore enforced by our software architecture and human guidance.",
        ],
      },
      {
        heading: "A Note on Our Rungs",
        paragraphs: [
          `The full ladder lives in [\`docs/ladder/ladder.md\`](${saturdayLadder}), with individual rung files under [\`docs/ladder/rungs/\`](${saturdayRungs}).`,
          "Acceptance means Lean 4 with zero `sorry` on accepted declarations, under the project’s allowed axioms.",
        ],
        table: {
          headers: ["Rung", "Status", "Idea", "Detail", "Formal", "References", "Summary"],
          rows: [
            [
              "**R0** Resolution",
              "Certified",
              "Resolution is the basic proof system underlying this branch of the project. It repeatedly combines clauses by eliminating a contradictory variable. If this process derives contradiction, the original Boolean formula cannot be satisfied.",
              "",
              `A resolution calculus with $\\mathsf{Derivation.size}$, plus soundness and refutational completeness in [\`Resolution.lean\`](${saturdayResolution}).`,
              `[Robinson, 1965](${paperRobinson1965})`,
              "Cancel one variable at a time; you can derive contradiction exactly when the CNF has no satisfying assignment.",
            ],
            [
              "**R1** Haken PHP",
              "Certified",
              "The pigeonhole principle gives us an explicit family of formulas that resolution cannot refute efficiently.",
              "Imagine trying to place too many pigeons into too few holes while insisting that no two pigeons share one. The constraints are impossible. But a resolution proof still has to demonstrate that impossibility.\nHaken’s lower bound shows that such proofs eventually have to pass through clauses of intermediate complexity. Only a limited number of assignments can survive each of those clauses, forcing the proof to contain exponentially many of them.",
              `∀ n ≥ 288, every resolution refutation d of phpCNF n satisfies\n$2^{((n-3n/4-36)/35)} \\le d.\\mathsf{size}$\nimplemented as \`php_resolution_size_lower_bound\`.`,
              `[Haken, 1985](${paperHaken1985}); bottleneck formulation following [Beame-Pitassi, 1996](${paperBeamePitassi1996})`,
              "Every proof must pass through a narrow bottleneck, and too few assignments fit through each opening, so exponentially many clauses are required.",
            ],
            [
              "**R2** Width / families",
              "Prose accepted; item 2 open",
              "R1 gives us one famous hard family. R2 tries to build a more general machine for producing lower bounds.",
              "Ben-Sasson and Wigderson connect two notions: the width of clauses appearing in a resolution proof and the size of the proof itself.\nRoughly: if every refutation must eventually contain very wide clauses, then every refutation must also be very large.\nThat turns the problem into finding formula families where large width is unavoidable.\nRandom $k$-CNF formulas and Tseitin formulas built from expander graphs are candidates because their combinatorial structure can force exactly that behavior.\nThe remaining work concerns width lower bounds for hard families, including random $k$-CNF and/or expander Tseitin constructions.",
              `width $\\ge W$ $\\Rightarrow$ size $\\ge 2^{((W-\\mathsf{cnfWidth})^2/(c\\cdot|V|))}$\nimplemented as \`bsw_size_lower_bound\`.`,
              `[Ben-Sasson-Wigderson, 2001](${paperBsw2001}); [Chvatal-Szemeredi, 1988](${paperChvatalSzemeredi1988}); [Urquhart, 1987](${paperUrquhart1987})`,
              "Short resolution proofs have to stay narrow; certain formulas force proofs to become wide; therefore those proofs cannot stay short.",
            ],
            [
              "**R3** Above resolution",
              "Proposed",
              "Climb to proof systems that can express arguments resolution cannot.",
              "Candidate systems include $\\mathrm{Res}(k)$, cutting planes, and bounded-depth Frege.\nThe goal is a super-polynomial proof-size lower bound for some system strictly stronger than resolution.\nThis is where the ladder starts leaving the comfortable ground underneath R0-R2.",
              "",
              `[Pudlak, 1997](${paperPudlak1997}); [Ajtai, 1988](${paperAjtai1988}); [Pitassi-Beame-Impagliazzo, 1993](${paperPitassiBeameImpagliazzo1993})`,
              "Show that the hardness survives even after we give the proof system more powerful reasoning rules.",
            ],
            [
              "**R4** Open frontier",
              "Proposed",
              "Keep climbing toward a super-polynomial size lower bound for $\\mathrm{AC}^0[p]$-Frege, then still stronger systems such as $\\mathrm{TC}^0$-Frege, Frege, and Extended Frege.",
              "There is an important analogy here. We know strong lower bounds for related classes of Boolean circuits through work such as Razborov and Smolensky. Translating that kind of hardness into comparable lower bounds for these Frege-style proof systems remains open research.",
              "",
              `[Razborov, 1987](${paperRazborov1987}); [Smolensky, 1987](${paperSmolensky1987})`,
              "We know how to prove that certain shallow circuits are weak; proving analogous limitations for the corresponding strong proof systems remains a major frontier.",
            ],
            [
              "**R5** Cook-Reckhow",
              "Active",
              "Cook-Reckhow supplies the bridge between propositional proof systems and complexity classes.",
              "R5 is a different branch of the ladder. It opens after the basic resolution foundation rather than waiting for every lower-bound rung above it.\nSAT has short certificates for yes instances: give me a satisfying assignment and I can efficiently check it.\nTAUT asks the complementary kind of question: whether a Boolean formula is true under every assignment. A polynomially bounded propositional proof system would provide efficiently checkable short proofs for tautologies as well.\nThe Cook-Reckhow framework makes this precise through the relationship: a polynomially bounded propositional proof system exists exactly when $\\mathrm{NP} = \\mathrm{coNP}$.\nSATurday formalizes the surrounding machinery through $\\mathsf{InP}$, $\\mathsf{InNP}$, $\\mathsf{IsPropProofSystem}$, and $\\mathsf{TM2ComputableInPolyTime}$, together with the implications connecting polynomially bounded proof systems to NP/coNP and ultimately to the P vs NP question.\nThis branch tells us what kind of proof-complexity result would actually be strong enough to matter.",
              "",
              `[Cook-Reckhow, 1979](${paperCookReckhow1979})`,
              "If every propositional proof system requires super-polynomial proofs somewhere, then $\\mathrm{NP} \\neq \\mathrm{coNP}$, and since $\\mathrm{P} = \\mathrm{NP}$ would imply $\\mathrm{NP} = \\mathrm{coNP}$, that would give $\\mathrm{P} \\neq \\mathrm{NP}$.",
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
