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
    readTime: "6 min read",
    body: [
      "Most enterprise AI initiatives don't fail because the underlying model is weak. They fail because the surrounding system — integration, evaluation, governance and operations — was never built.",
      "A pilot can succeed on a curated set of examples in a controlled demo and still be unusable in production, where inputs are messy, systems are fragmented, and failure has a real cost.",
      "Moving from proof of concept to production requires the same engineering discipline as any other enterprise system: defined interfaces to existing systems, a way to measure accuracy and reliability over time, guardrails for when the agent should not act, and a plan for who is accountable when it does.",
      "This is the layer most AI experiments skip — and the layer where Kartavya focuses.",
    ],
  },
  {
    slug: "what-makes-an-ai-agent-different-from-a-chatbot",
    title: "What actually makes an AI agent different from a chatbot",
    excerpt:
      "An agent doesn't just answer — it plans, uses tools, and carries a task through to a result.",
    category: "Agentic AI Architecture",
    date: "2025-10-22",
    readTime: "5 min read",
    body: [
      "A chatbot answers a question. An agent is given an objective, reasons about the steps required to achieve it, and executes those steps — calling tools, reading and writing to systems, and adjusting its plan as new information arrives.",
      "That distinction matters because it changes what the system needs architecturally: memory across steps, defined tool interfaces, explicit points where a human must approve an action, and evaluation of the agent's decisions, not just its language output.",
      "Enterprises that treat agent development like chatbot development end up with systems that sound capable but cannot be trusted to act. Enterprises that treat it as a systems engineering problem end up with agents that do real work.",
    ],
  },
  {
    slug: "evaluating-ai-agents-in-the-enterprise",
    title: "How to evaluate an AI agent before it touches production",
    excerpt:
      "Accuracy is only one dimension. Reliability, safety, latency and cost all decide whether an agent is production-ready.",
    category: "AI Evaluation",
    date: "2025-09-18",
    readTime: "7 min read",
    body: [
      "Before an AI agent is allowed to act on real enterprise data or systems, it needs to be evaluated against more than a single accuracy number.",
      "At minimum: How often is it correct, and how is 'correct' defined for this workflow? How does it behave on inputs it hasn't seen before? What happens when it's uncertain — does it say so, or does it guess? What is the latency and cost of each interaction at expected volume? What is the worst case if it acts incorrectly, and is a human in the loop for that case?",
      "Building this evaluation layer before deployment — and continuing to run it after — is what separates a demo from an operated production system.",
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
