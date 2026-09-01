// Content data structure — edit these arrays to add/update
// solutions, services, industries, technologies, case studies and insights
// without touching page templates.

export type Solution = {
  slug: string;
  name: string;
  short: string;
  description: string;
  capabilities: string[];
};

export const solutions: Solution[] = [
  {
    slug: "ai-agents",
    name: "AI Agents",
    short:
      "Autonomous and semi-autonomous AI agents that reason, use tools, interact with systems and execute multi-step enterprise workflows.",
    description:
      "We design and build AI agents that go beyond answering questions — they understand an objective, plan a sequence of steps, call the tools and APIs they need, and carry a task through to completion inside your existing systems.",
    capabilities: [
      "Multi-step task planning and execution",
      "Tool and API calling",
      "Persistent memory and context",
      "Human-in-the-loop approval checkpoints",
      "Multi-agent collaboration",
      "Structured, auditable outputs",
    ],
  },
  {
    slug: "customer-ai",
    name: "Customer AI",
    short:
      "AI agents for customer engagement, support, lead qualification, sales assistance and conversational commerce.",
    description:
      "AI agents that engage customers across chat, voice and messaging channels — qualifying leads, answering product questions, assisting the sales process, and handing off to a human when the conversation needs one.",
    capabilities: [
      "Lead qualification and routing",
      "Customer support automation",
      "Sales assistance",
      "Conversational commerce",
      "CRM-connected conversations",
      "Escalation to human agents",
    ],
  },
  {
    slug: "recruitment-ai",
    name: "Recruitment AI",
    short:
      "AI-powered candidate screening, assessment, interviewing and recruitment workflow automation.",
    description:
      "AI hiring agents that conduct structured candidate conversations, ask role-specific and probing follow-up questions, evaluate responses against a defined hiring methodology, and produce structured assessments recruiters can act on.",
    capabilities: [
      "Structured candidate screening conversations",
      "Role-specific and follow-up questioning",
      "Motivation and expectation assessment",
      "Structured candidate scorecards",
      "Recruiter workflow integration",
      "Reduced manual screening effort",
    ],
  },
  {
    slug: "knowledge-ai",
    name: "Knowledge AI",
    short:
      "Enterprise knowledge agents connected to documents, databases and internal systems.",
    description:
      "Agents that connect to your internal documents, databases and knowledge bases so employees and customers can get accurate, sourced answers instead of searching across disconnected systems.",
    capabilities: [
      "Retrieval-augmented generation (RAG)",
      "Document intelligence",
      "Enterprise search integration",
      "Source-grounded answers",
      "Access-controlled knowledge retrieval",
      "Continuous knowledge base updates",
    ],
  },
  {
    slug: "operations-ai",
    name: "Operations AI",
    short:
      "AI agents that automate repetitive operational workflows and assist employees with complex business processes.",
    description:
      "Agents that take on repetitive, rules-heavy operational work — data entry, reconciliation, report generation, approvals routing — so employees spend time on judgment calls instead of manual steps.",
    capabilities: [
      "Workflow automation",
      "Data reconciliation and validation",
      "Report and document generation",
      "Approval routing",
      "System-to-system orchestration",
      "Exception handling with human review",
    ],
  },
  {
    slug: "developer-ai",
    name: "Developer AI",
    short:
      "AI-powered software engineering agents that assist developers across coding, testing, documentation and engineering workflows.",
    description:
      "Agents embedded in engineering workflows that assist with code generation, testing, documentation and review — increasing engineering throughput without bypassing existing quality and security processes.",
    capabilities: [
      "Code generation and review assistance",
      "Automated test generation",
      "Documentation generation",
      "CI/CD-integrated workflows",
      "Codebase-aware assistance",
      "Engineering productivity tooling",
    ],
  },
];

export type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    name: "AI Strategy",
    description:
      "Identify high-value AI opportunities and define the roadmap from experimentation to production.",
  },
  {
    name: "AI Architecture",
    description:
      "Design enterprise-grade AI, agentic and data architectures.",
  },
  {
    name: "Agent Development",
    description: "Build production-grade AI agents and multi-agent systems.",
  },
  {
    name: "Enterprise Integration",
    description:
      "Connect AI agents with APIs, databases, CRM, ERP and internal enterprise systems.",
  },
  {
    name: "AI Application Development",
    description: "Build complete AI-powered applications and user experiences.",
  },
  {
    name: "AI Evaluation & Governance",
    description:
      "Evaluate model and agent performance, reliability, security and risk.",
  },
  {
    name: "Managed AI",
    description:
      "Monitor, optimize and continuously improve AI systems after deployment.",
  },
  {
    name: "AI Enablement",
    description:
      "Train enterprise teams to effectively build and operate AI systems.",
  },
];

export type Industry = {
  name: string;
  description: string;
};

export const industries: Industry[] = [
  {
    name: "Banking & Financial Services",
    description:
      "AI agents for customer operations, recruitment, knowledge management and workflow automation.",
  },
  {
    name: "GCCs",
    description:
      "Enterprise AI engineering, AI platform development and agentic automation.",
  },
  {
    name: "Manufacturing",
    description: "Operational intelligence and workflow automation.",
  },
  {
    name: "Retail & Consumer",
    description: "Customer engagement, sales and service automation.",
  },
  {
    name: "Technology",
    description:
      "Developer AI, enterprise knowledge and engineering productivity.",
  },
];

export type TechCategory = {
  name: string;
  items: string[];
};

export const techStack: TechCategory[] = [
  { name: "Foundation Models", items: ["OpenAI", "Anthropic", "Google"] },
  {
    name: "Agent Systems",
    items: [
      "OpenClaw",
      "OpenAI Agents",
      "LangGraph",
      "Custom Agent Orchestration",
    ],
  },
  {
    name: "Enterprise Knowledge",
    items: [
      "RAG",
      "Vector Databases",
      "Enterprise Search",
      "Document Intelligence",
    ],
  },
  {
    name: "Integration",
    items: [
      "REST APIs",
      "MCP",
      "CRM",
      "ERP",
      "Databases",
      "Internal Enterprise Systems",
    ],
  },
  {
    name: "Infrastructure",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
  {
    name: "Enterprise Controls",
    items: [
      "IAM",
      "Security",
      "Observability",
      "Evaluation",
      "Governance",
      "Auditability",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  challenge: string;
  solutionIntro: string;
  agentCapabilities: string[];
  architecture: string;
  outcome: string;
  flow: string[];
  category: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sundaram-finance",
    client: "Sundaram Finance",
    title: "AI Hiring Agent for Sundaram Finance",
    subtitle:
      "Turning candidate screening into an intelligent, automated hiring workflow.",
    challenge:
      "Sundaram Finance was struggling to recruit sales executives because many candidates left within the first month of joining. The challenge was not simply generating more candidates — the organization needed to identify candidates whose expectations, motivation, communication, experience and understanding of the sales role were better aligned with the actual requirements of the job.",
    solutionIntro:
      "Kartavya built an OpenClaw-based AI Hiring Expert that screens candidates through structured, role-specific conversations before they reach a human recruiter.",
    agentCapabilities: [
      "Screens candidates",
      "Conducts structured conversations",
      "Asks role-specific questions",
      "Asks difficult and probing follow-up questions",
      "Evaluates candidate responses",
      "Identifies inconsistencies and potential concerns",
      "Assesses motivation and expectations",
      "Produces structured candidate assessments",
      "Helps recruiters focus on the most relevant candidates",
    ],
    architecture:
      "OpenClaw + LLM + hiring methodology + structured assessment + enterprise workflow",
    outcome:
      "Streamlined the hiring pipeline, reduced manual screening effort, improved candidate-job alignment, and significantly reduced early employee churn.",
    flow: [
      "Candidate",
      "AI Hiring Expert",
      "Deep Screening",
      "Candidate Assessment",
      "Recruiter",
      "Interview",
      "Hiring",
    ],
    category: "Recruitment AI",
  },
];

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
};

export const insights: InsightPost[] = [
  {
    slug: "why-ai-pilots-dont-reach-production",
    title: "Why most enterprise AI pilots never reach production",
    excerpt:
      "The gap between an impressive demo and a production system is architecture, evaluation and integration — not model quality.",
    category: "AI Implementation",
    date: "2025-11-10",
    readTime: "10 min read",
    body: [
      "## The pattern enterprises keep repeating",
      "Most enterprises we talk to have already run at least one AI pilot. A team picks a promising use case, wires up a model to a narrow slice of data, runs it against a curated set of examples, and the results look impressive enough to present to leadership. The demo gets a good reaction. A budget line gets approved for \"the next phase.\" And then, in a large number of cases, nothing further happens. The pilot sits in a slide deck, or it limps along as a side project a few people use informally, while the organization quietly moves on to evaluating the next model or the next vendor.",
      "This is not a model quality problem. By the time a pilot is being demoed, the underlying model is almost always capable enough for the task. What derails the project is everything the demo didn't have to deal with: real users typing things nobody anticipated, systems that don't expose data cleanly, a security team asking who is accountable when the AI is wrong, and no way to know if the system is getting better or worse over time. None of that shows up in a fifteen-minute demo. All of it shows up in production.",
      "## What a demo actually proves",
      "A demo proves that a model can produce a good answer to a good question, asked in a way the presenter expected, using data that was prepared in advance. That is a real and useful thing to prove — it tells you the underlying approach is viable. But it is a long way from proving that the same system can be handed to five hundred employees or ten thousand customers, fed whatever they type, connected to production systems with real permissions, and left running without someone watching it every hour.",
      "The gap between those two things is not closed by a better prompt or a newer model. It's closed by engineering work that has nothing to do with how \"smart\" the AI is: integration into existing systems, a way to measure whether it's actually working, controls for what it's allowed to do, and a plan for who owns it once it's live. Enterprises that treat the pilot as the hard part, and everything after it as \"just rollout,\" are the ones whose pilots don't reach production.",
      "## Four gaps between pilot and production",
      "In our experience, the projects that stall do so for one or more of four reasons: integration debt, an evaluation vacuum, governance bolted on too late, and no operating model for what happens after go-live. Each of these is solvable, but only if it's treated as part of the build — not as a follow-up task after the demo succeeds.",
      "## Integration debt",
      "A pilot usually runs on a clean export of data, a mocked API, or a narrow read-only connection to one system. Production means the AI has to work with the CRM, the ERP, the ticketing system, and whatever internal tools the business actually runs on — with their real authentication, their real rate limits, their real inconsistencies, and their real downtime. Every one of those integrations is engineering work: defining what the agent is allowed to read and write, handling the system being slow or unavailable, and reconciling data that doesn't match between two \"sources of truth.\"",
      "None of this is exotic engineering. It's the same integration work any enterprise software project requires. The difference is that AI pilots are often built by a small team optimizing for a fast, impressive result, and that team doesn't always have the mandate — or the time — to do the unglamorous integration work production requires. When that work is deferred, it eventually has to be done anyway, except now under pressure, after leadership has already seen the demo and is asking why it isn't live yet.",
      "## The evaluation vacuum",
      "Ask most teams running an AI pilot how they know it's working, and the honest answer is: someone looked at a handful of outputs and thought they seemed good. That's a reasonable way to sanity-check a prototype. It is not a way to decide whether a system is safe to hand real decisions to.",
      "Production readiness requires an actual evaluation methodology: a defined set of test cases that represent the range of real inputs, a definition of what counts as a correct or acceptable output for this specific workflow, and a repeatable way to score the system against that definition — not just once, but every time the model, the prompt, or the surrounding logic changes. Without this, every change to the system is a guess. Teams either freeze the system out of fear of breaking it, or they keep changing it and have no idea whether they're making it better or worse.",
      "## Governance retrofitted too late",
      "Security and compliance teams are usually not in the room when a pilot starts, because a pilot is framed as an experiment with no real stakes. That's fine until the pilot works and someone proposes putting it in front of customers or connecting it to a system that can move money, hire people, or change a record that matters. At that point the questions arrive all at once: What data does this touch? What happens if it's wrong? Who approved it to act autonomously? Is there a log of what it did and why? Can it be turned off?",
      "If those questions weren't designed for from the start, answering them after the fact usually means redesigning core parts of the system — adding approval steps, audit logging, and access controls that should have been there from day one. That rework is often what actually kills the timeline, not any technical limitation of the AI itself.",
      "## No operating model",
      "Even a well-integrated, well-evaluated, well-governed AI system needs someone to own it after launch — watching for degraded performance, handling edge cases the initial evaluation didn't anticipate, and deciding when the model or the prompts need to change as the business itself changes. Enterprises budget for building software. They don't always budget for operating it. An AI system without an operating model tends to degrade quietly: nobody notices the accuracy slipping until a customer or an auditor does.",
      "## Scoping a pilot that survives contact with production",
      "The fix is not to stop piloting — it's to scope the pilot differently. Instead of asking \"can the model do this task well in isolation,\" a better starting question is: \"if this pilot succeeds, what would it take to run this safely for real users next quarter?\" That question forces the integration, evaluation and governance conversations to happen at the start, when they're cheap to plan for, instead of at the end, when they require rework.",
      "In practice this means picking a narrower initial scope than the \"impressive demo\" version — a single well-defined workflow, a small number of real (not synthetic) test cases, connected to real systems even if only in a sandboxed, permission-limited way, and a rough evaluation rubric agreed before a single output is generated. It's a less exciting first milestone. It is far more likely to still be running a year later.",
      "## This pattern isn't unique to AI",
      "Enterprise software has always had a version of this problem: a prototype that works on a laptop is not the same thing as a system that survives production load, real user behavior, and an audit. What's different with AI pilots is how convincing the prototype looks and how little that appearance actually tells you about production readiness. A traditional software prototype that's missing error handling usually fails visibly and immediately when something goes wrong. An AI system that's missing evaluation and guardrails can fail silently — producing a plausible, confidently worded, incorrect answer that nobody catches until the wrong decision has already been acted on. That combination of convincing demos and silent failure modes is exactly why the discipline around integration, evaluation and governance matters more here, not less, than in a typical software project.",
      "## Signals a pilot is heading for the shelf",
      "A handful of warning signs tend to show up months before a pilot is quietly abandoned, and they're visible early to anyone looking for them. Nobody outside the original build team can explain, in specific terms, how the system's outputs are checked. The only environment it has ever run in is a sandbox with sanitized data. Security or compliance hasn't been asked a single question about it yet. The team can demo it, but can't say what it costs to run per interaction at real volume. And there is no answer to \"who gets paged if this breaks at 2am.\" Any one of these is a fixable gap. All five together are a reliable predictor that the project stalls at exactly the point it needs to cross into production.",
      "## The cost of discovering this late",
      "The organizations that skip integration, evaluation and governance during the pilot phase don't avoid that work — they defer it, usually to the least convenient possible moment. By the time a pilot is being considered for real rollout, there is already organizational momentum behind it: leadership has seen the demo, a rollout date may already be informally circulating, and the team is under pressure to ship rather than to redesign. Adding audit logging, defining approval workflows, or rebuilding the evaluation approach at that stage is significantly more expensive than designing them in from the start, both in engineering time and in the credibility cost of telling stakeholders the timeline just moved. Enterprises that have been through this cycle once tend to insist on integration, evaluation and governance conversations at the pilot's kickoff on the next project — not because it's more thorough in the abstract, but because they've already paid the cost of doing it the other way around.",
      "## What we look for before calling something production-ready",
      "Before Kartavya considers an agent ready to operate in production, we expect to be able to answer, concretely: What systems does it touch, and with what permissions? How do we measure whether it's correct, and how often do we re-measure? What happens when it's uncertain, and is a human in the loop for the cases that matter? What's the cost and latency at expected volume, not test volume? And who is responsible for it operationally once it's live? If any of those has no answer, the system isn't ready — regardless of how good it looked in the last demo.",
      "## Closing",
      "None of this is a case against moving fast. It's a case against confusing a good demo with a production system, and against treating integration, evaluation and governance as afterthoughts instead of the actual engineering problem. The organizations that get real, lasting value from AI are not the ones with the most impressive demos — they're the ones that treated the unglamorous half of the work as the real work from the start.",
    ],
  },
  {
    slug: "what-makes-an-ai-agent-different-from-a-chatbot",
    title: "What actually makes an AI agent different from a chatbot",
    excerpt:
      "An agent doesn't just answer — it plans, uses tools, and carries a task through to a result.",
    category: "Agentic AI Architecture",
    date: "2025-10-22",
    readTime: "10 min read",
    body: [
      "## The wrong question enterprises ask",
      "The question we hear most often is some version of: \"should we build a chatbot or an AI agent?\" It's the wrong question, because it assumes the two are variations on the same thing at different levels of sophistication — as if an agent were just a chatbot with a bigger model behind it. They're not variations on the same architecture. They're built to do fundamentally different jobs, and confusing the two is the single most common reason enterprise \"agent\" projects end up being chatbots with a more ambitious name.",
      "## What a chatbot is actually good at",
      "A chatbot, in the useful sense of the term, takes an input and produces a response. It might be grounded in a knowledge base, it might hold conversational context across turns, and it might be genuinely good at answering questions, drafting text, or helping someone think through a problem. What it does not do, by default, is act. It doesn't decide to check three internal systems before answering, it doesn't update a record because the conversation implied it should, and it doesn't know when to stop and ask a human before proceeding. It responds.",
      "That's a valuable capability, and a large share of legitimate enterprise use cases — internal FAQ, first-line support, drafting assistance — are well served by exactly this and nothing more. The mistake is assuming that scaling this pattern up, with a bigger model and a longer system prompt, eventually turns it into something that can run a workflow. It doesn't, because the missing piece isn't scale. It's architecture.",
      "## Defining 'agent' precisely",
      "An agent is given an objective, not just a question. It plans a sequence of steps to achieve that objective, executes those steps by calling tools and systems, observes the results, and adjusts its plan based on what it finds — continuing until the objective is met, it hits a boundary it isn't allowed to cross, or it determines it needs a human. That definition matters because every clause in it corresponds to something that has to be engineered, not prompted into existence.",
      "## Component 1: Planning and decomposition",
      "Before an agent can act, it has to break an open-ended objective into a sequence of concrete steps — and revise that sequence as it learns more. \"Screen this candidate\" or \"reconcile this month's vendor invoices\" isn't a single action; it's a chain of decisions, some of which depend on the outcome of earlier ones. This is the part of agent design that most resembles classical software planning problems, and it's why agent frameworks spend so much effort on how a model represents and updates its plan as it works.",
      "## Component 2: Tool use and system access",
      "An agent's plan is only useful if it can act on it, which means it needs defined, permissioned access to real tools — an API to look up a customer record, a function to send an email, a query interface to a database. Each integration has to define exactly what the agent can and cannot do: what parameters it can pass, what data it can retrieve, and, critically, what actions it simply is not allowed to take no matter what its reasoning concludes. This is enterprise integration work, not prompt engineering, and it's usually the largest share of the actual build effort.",
      "## Component 3: Memory and state across steps",
      "A chatbot mostly needs to remember the current conversation. An agent working through a multi-step task needs to track what it has already found out, what it has already tried, and what's still outstanding — sometimes across minutes, sometimes across days, if the task involves waiting on a human or an external system. Getting this wrong produces agents that repeat steps, contradict earlier findings, or lose track of the objective halfway through — failure modes that don't show up in a single-turn chatbot at all.",
      "## Component 4: Human-in-the-loop checkpoints",
      "The more autonomy an agent has, the more precisely you need to define where it stops and asks. This isn't a vague safety gesture — it's a specific design decision for every action class the agent can take: which actions can proceed without review, which need a human to confirm before they execute, and which the agent should never be allowed to take at all. An agent that can draft an email for review is a very different risk profile than one that can send it, and both are different again from one that can issue a refund. Treating \"human in the loop\" as a single on/off switch, rather than a per-action design decision, is a common and avoidable mistake.",
      "## Component 5: Evaluating decisions, not just language",
      "A chatbot can be evaluated largely on whether its response is accurate, relevant and well-formed. An agent has to be evaluated on whether the sequence of decisions it made — which tool to call, what data to trust, when to stop and ask — was the right one, independent of how well-written the final summary sounds. A confidently written, well-formatted output can still be the result of the agent having taken the wrong action three steps earlier. This is why agent evaluation looks more like auditing a decision process than grading an essay.",
      "## Why this changes the engineering, not just the UX",
      "None of the five components above are copywriting or prompt design problems. They're systems engineering problems: defining interfaces, managing state, setting permissions, instrumenting decisions for review. An organization that hands an \"agent\" project to a team with only prompt-engineering experience, and no mandate to touch the surrounding systems, will reliably produce something that talks like an agent and behaves like a chatbot — because the actual agent behavior lives in the parts nobody built.",
      "## A concrete shape: an approval-routing agent",
      "Consider a generic example: an agent that handles vendor invoice exceptions. Its objective isn't \"answer a question about an invoice\" — it's \"resolve this exception.\" That means it has to retrieve the invoice and the purchase order, compare them, identify the specific discrepancy, check historical patterns for that vendor, decide whether the discrepancy is within a tolerance it can auto-approve or needs a human, and — if it needs a human — route it to the right approver with a clear explanation of what it found. Every one of those steps is a tool call, a decision point, or a memory requirement. There is no single prompt that produces this behavior; there is a system, with an agent as its reasoning core, wired into the tools and checkpoints described above.",
      "## What to ask a vendor who says they build AI agents",
      "If you're evaluating a vendor or an internal team's claim that they've built an \"AI agent,\" three questions tend to surface the truth quickly. What tools can it actually call, and what happens if that tool call fails? What's the specific point where it stops and asks for human approval, for the highest-risk action it can take? And how do you know, concretely, whether a given run of the agent made the right decisions — not whether the final message read well? If those questions don't have specific answers, what's being described is very likely a chatbot with an ambitious job title.",
      "## The cost and latency implications of agent design",
      "Every additional planning step, tool call, and memory lookup an agent performs adds latency and cost that a single-turn chatbot response never incurs. A workflow that takes an agent six tool calls and three reasoning steps to complete will simply be slower and more expensive per interaction than a chatbot returning one response — and that difference compounds at volume. This isn't a reason to avoid agent architectures where the workflow genuinely needs one; it's a reason to be honest, early, about which use cases actually require an agent's autonomy and multi-step execution, and which would be served just as well, more cheaply and more predictably, by a well-grounded chatbot or a simpler automation. Choosing the agent architecture by default, because it sounds more advanced, is how enterprises end up with a workflow-automation budget that's several times larger than the task required.",
      "## Multi-agent collaboration: when one agent isn't enough",
      "Some enterprise workflows are broad enough that a single agent trying to hold the entire objective, every tool, and every piece of context in one reasoning loop becomes unwieldy and error-prone. In those cases, the more robust design is often several narrower agents, each responsible for a bounded part of the workflow, coordinating through defined handoffs rather than one generalist agent trying to do everything. A recruitment workflow, for instance, might separate a screening agent from an interview-scheduling agent from an assessment-summary agent, each with its own tools, its own evaluation criteria, and its own permission boundaries. This isn't complexity for its own sake — it's the same reason large software systems are decomposed into services rather than one monolith: smaller, well-defined components are easier to build, test, evaluate and reason about independently, and failures are easier to isolate to the specific component that produced them.",
      "## A common failure mode: the agent that only ever asks",
      "Enterprises that are appropriately cautious about autonomy sometimes overcorrect in a specific way: they build something with agent-shaped architecture — tool access, planning, memory — but route every single action through human approval, with no tiering by risk. The result functions less like an agent and more like a slow, expensive way to generate suggestions for a human to execute manually. That may be the right starting posture for a genuinely high-risk workflow in its first weeks of operation, but if it never evolves, the organization has paid for agent infrastructure and received a drafting tool. The fix isn't to remove human oversight — it's to make the risk tiering explicit and revisit it deliberately once the agent has an evaluation track record: which action classes have proven reliable enough to run without a human confirming every instance, and which still warrant a checkpoint. Autonomy earned through evaluated performance, on a per-action basis, is different from autonomy granted by default.",
      "## Closing",
      "The distinction between a chatbot and an agent isn't marketing language — it's an architectural one, and it determines what has to be built, tested and governed before the system can be trusted with real work. Enterprises that internalize this distinction early end up scoping projects correctly the first time. The ones that don't tend to discover the difference the hard way, usually around the time the \"agent\" is asked to do something it was never actually built to do.",
    ],
  },
  {
    slug: "evaluating-ai-agents-in-the-enterprise",
    title: "How to evaluate an AI agent before it touches production",
    excerpt:
      "Accuracy is only one dimension. Reliability, safety, latency and cost all decide whether an agent is production-ready.",
    category: "AI Evaluation",
    date: "2025-09-18",
    readTime: "10 min read",
    body: [
      "## Why 'it works in the demo' is not evaluation",
      "The most common evaluation methodology we see in enterprises is informal: someone ran the system against a handful of examples, the outputs looked reasonable, and that was taken as sufficient evidence to move forward. This isn't evaluation — it's a spot check, and spot checks systematically miss the failure modes that matter most, because the person running them unconsciously tests the cases they expect to work. Before an AI agent is allowed to touch real customers, real employees, or real enterprise systems, it needs to be evaluated against a methodology defined in advance, covering the range of realistic inputs, and producing a repeatable score — not a gut feeling.",
      "## The five dimensions",
      "A useful evaluation covers at least five dimensions, and treating any one of them as a proxy for the others is where most evaluation efforts go wrong: accuracy, reliability, safety, latency and cost. A system can score well on accuracy and still be unsafe to deploy. It can be fast and cheap and still be unreliable in ways that erode trust within a week. Each dimension has to be measured on its own terms.",
      "## Accuracy: defining 'correct' for this workflow",
      "Accuracy sounds like the obvious first metric, but the harder question is what \"correct\" means for a specific workflow, and who gets to define it. A generic benchmark score for a foundation model tells you almost nothing about whether that model, embedded in your specific agent with your specific tools and your specific data, produces the right outcome for your specific process. Defining accuracy properly means sitting down with the people who currently do this work and building a rubric with them: what a fully correct output looks like, what a partially correct one looks like, and what's simply wrong. That rubric, not a leaderboard score, is what the agent should be measured against.",
      "## Reliability: behavior outside the happy path",
      "Reliability is about what happens when the input isn't the clean, well-formed case the system was designed around. Real users misspell things, ask incomplete questions, provide contradictory information, or ask for something the system was never built to do. A reliable agent needs to behave predictably in all of those cases — which, most of the time, means recognizing when it's uncertain and saying so, rather than producing a confident, plausible-sounding wrong answer. Testing for reliability means deliberately constructing an adversarial and edge-case test set, not just a set of examples the system is expected to handle well.",
      "## Safety: worst case and blast radius",
      "Safety evaluation starts from a different question than accuracy: not \"how often is this right,\" but \"what's the worst thing that happens when it's wrong, and how far does that damage spread.\" An agent that drafts an internal report and gets a fact wrong has a very different blast radius than one that can issue a payment or change a customer's account permissions. The higher the blast radius of an action, the more evaluation and human oversight it needs before the agent is allowed to take it autonomously — this is also where prompt injection and tool-misuse testing belong, treating the agent's inputs as adversarial rather than as ordinary user requests.",
      "## Latency and cost at real volume",
      "A system that performs well against a hundred manually run test cases can behave very differently at the volume and concurrency of actual production traffic. Latency compounds across multi-step agent workflows in ways that aren't obvious from a single test run, and cost scales with usage in ways that can quietly turn a viable pilot into an unaffordable production system. Evaluating latency and cost means load-testing against realistic volume assumptions before committing to an architecture, not discovering the numbers after launch.",
      "## Building an evaluation harness before deployment",
      "All of this needs to be automatable, because it needs to be re-run every time the model, the prompt, the tools, or the surrounding logic changes — which, in an actively developed agent, is often. That means investing in an evaluation harness: a versioned set of test cases mapped to the rubric described above, a way to run the agent against that set automatically, and a way to compare results across versions so a change can be shown to be an improvement rather than assumed to be one. Teams that skip this step end up making every change on faith, which is precisely the situation evaluation is meant to prevent.",
      "## Evaluation doesn't stop at launch",
      "The test set that was representative at launch stops being representative as the business changes, as usage patterns shift, and as edge cases the initial evaluation didn't anticipate start showing up in real traffic. Production agents need continuous evaluation: sampling real interactions, routing a subset for human review, and feeding confirmed errors back into the test set so the evaluation harness gets stronger over time instead of going stale. Without this loop, the accuracy of a production agent tends to drift downward exactly when nobody is watching closely, because it already passed its one-time evaluation months earlier.",
      "## Who owns evaluation",
      "Evaluation needs an owner, and it usually shouldn't be the same team that built the agent, for the same reason engineering and QA are usually separate functions: the incentive to ship works against the incentive to find problems. In practice this can be a shared responsibility between the engineering team and whoever owns the business process the agent supports — but it needs to be someone's explicit job, with the authority to block a release if the evaluation results don't clear the bar.",
      "## Evaluating against a moving target",
      "Foundation models are updated by their providers on a schedule enterprises don't control, and prompts, tool definitions and retrieval sources inside the agent itself change as the team keeps improving it. Every one of those changes is a potential regression, even when it's intended as an improvement — a prompt rewrite that fixes one failure mode can easily introduce another, and a model upgrade that improves general reasoning can shift behavior on the specific edge cases your rubric was tuned against. Treating the evaluation harness as versioned alongside the agent itself, and re-running the full suite on every change rather than just the change that prompted the update, is what catches these regressions before they reach production rather than after a customer or employee does.",
      "## The role of human review sampling",
      "No automated rubric captures everything a human reviewer would catch, particularly for judgment-heavy outputs where \"correct\" has some genuine ambiguity. A practical middle ground is structured sampling: routing a defined percentage of production interactions — weighted toward the cases the agent flagged as uncertain, plus a random baseline sample — to a human reviewer on a regular cadence, with a simple structured way to record disagreements with the agent's decision. This does two things at once: it catches drift and edge cases the automated harness doesn't cover, and it generates exactly the labeled examples needed to expand the test set over time. Skipping this step tends to produce evaluation suites that stay static while the real traffic distribution moves further away from them every month.",
      "## What 'good enough' looks like at different stages",
      "The evaluation bar should not be identical for an internal tool used by a handful of trained employees and a customer-facing agent handling financial transactions — but the difference should be a deliberate calibration, not an excuse to skip evaluation for the lower-stakes case. For a low-risk internal tool, a smaller test set, a lighter sampling cadence, and a shorter list of guardrails may genuinely be sufficient, provided that bar was set consciously rather than by default. For anything customer-facing, financially consequential, or operating with broad system permissions, the bar needs to be materially higher on every one of the five dimensions before the agent is allowed to run unsupervised. Enterprises get into trouble not when they calibrate the bar to the risk, but when they never calibrate it at all and let every project inherit whatever evaluation happened to get done — or skipped — on the last one.",
      "## A practical checklist",
      "Before an agent goes into production, we expect clear answers to: What's the rubric for correct, and who defined it? What does the adversarial and edge-case test set cover? What's the worst-case action this agent can take, and what happens if it takes it wrongly? What's the latency and cost at expected production volume, not test volume? Is there an automated harness that reruns on every change? And is there a continuous evaluation loop feeding real production data back into that harness? If any answer is \"we haven't done that yet,\" the agent isn't ready, no matter how good its outputs look today.",
      "## Closing",
      "Evaluation is not a gate you pass once before launch — it's an ongoing discipline that has to be built into the system from the start and maintained for as long as the agent is in production. The organizations that treat it this way are the ones whose AI systems are still trusted, and still working, a year after launch. The ones that treat evaluation as a formality tend to find out the hard way what it was for.",
    ],
  },
];

export const trustIndicators = [
  "Enterprise AI Engineering",
  "Agentic AI",
  "Production AI Deployments",
  "Enterprise Integration",
  "Responsible AI",
  "Official Anthropic Partner",
];

export const buildStages = [
  {
    number: "01",
    name: "Discover",
    description:
      "Identify business processes where AI can create measurable value.",
  },
  {
    number: "02",
    name: "Architect",
    description:
      "Design the AI, agent, data, integration and security architecture.",
  },
  {
    number: "03",
    name: "Build",
    description:
      "Develop agents, tools, RAG systems, integrations and user experiences.",
  },
  {
    number: "04",
    name: "Evaluate",
    description: "Measure accuracy, reliability, safety, latency and cost.",
  },
  {
    number: "05",
    name: "Deploy",
    description:
      "Deploy securely into enterprise infrastructure and workflows.",
  },
  {
    number: "06",
    name: "Operate",
    description:
      "Monitor, optimize and continuously improve AI systems in production.",
  },
];

export const governanceAreas = [
  "Data protection",
  "Confidentiality",
  "Access control",
  "Human oversight",
  "AI evaluation",
  "Guardrails",
  "Prompt injection protection",
  "Audit logging",
  "Agent permissions",
  "PII handling",
  "Security testing",
  "Model governance",
  "Responsible AI",
];

export const navigation = [
  {
    label: "Solutions",
    href: "/solutions",
    children: solutions.map((s) => ({
      label: s.name,
      href: `/solutions/${s.slug}`,
    })),
  },
  {
    label: "Services",
    href: "/services",
    children: services.slice(0, 6).map((s) => ({
      label: s.name,
      href: "/services",
    })),
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];
