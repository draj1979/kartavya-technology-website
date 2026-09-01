import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import FlowDiagram from "@/components/FlowDiagram";
import AgentArchitectureGraphic from "@/components/AgentArchitectureGraphic";
import {
  solutions,
  services,
  industries,
  trustIndicators,
  buildStages,
  caseStudies,
} from "@/lib/data";
import { siteConfig } from "@/lib/site";

const sundaram = caseStudies[0];

const agenticCapabilities = [
  "Understand objectives",
  "Reason through problems",
  "Access enterprise knowledge",
  "Use tools",
  "Call APIs",
  "Execute workflows",
  "Collaborate with other agents",
  "Ask for human approval when required",
  "Learn from evaluation and feedback",
  "Maintain context",
  "Produce structured outputs",
];

const agenticFlow = [
  "User / Employee / Customer",
  "AI Agent",
  "Reasoning + Planning",
  "Knowledge + Memory",
  "Tools + APIs",
  "Enterprise Systems",
  "Action / Human Approval",
];

const problems = [
  "AI pilots that never reach production",
  "Manual business workflows",
  "Repetitive knowledge work",
  "Inefficient customer operations",
  "Large-scale recruitment and screening",
  "Fragmented enterprise data",
  "Lack of AI governance",
  "Difficulty integrating AI with existing enterprise systems",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-bg-primary">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:56px_56px] opacity-40" />
        <div className="container-page relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="eyebrow mb-5">Enterprise AI Engineering &amp; Agentic AI</p>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
                Enterprise AI Agents.
                <br />
                Built for Production.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
                We design, build and deploy AI agents that automate complex
                enterprise workflows — from customer engagement and
                recruitment to knowledge work and business operations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Talk to an AI Architect
                </Link>
                <Link href="/solutions" className="btn-secondary">
                  Explore AI Solutions
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <AgentArchitectureGraphic />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-bg-secondary/40 py-8">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            {trustIndicators.map((item) => (
              <span key={item} className="text-xs font-medium uppercase tracking-wide text-text-secondary sm:text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="section-padding border-b border-border">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Most enterprises don&apos;t need another AI demo.
              </h2>
              <p className="mt-4 text-lg text-text-secondary">
                They need AI that works inside their existing business.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Enterprises struggle to move from AI experiments, to proof of
                concept, to production, to enterprise adoption. Kartavya
                helps bridge this gap.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {problems.map((p) => (
                  <li
                    key={p}
                    className="card-surface flex items-start gap-3 p-4 text-sm text-text-secondary"
                  >
                    <span className="mt-0.5 text-accent">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="section-padding border-b border-border bg-bg-secondary/30">
        <div className="container-page">
          <FadeIn>
            <p className="eyebrow mb-4">Solutions</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              We turn enterprise workflows into AI-powered systems.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 60}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="card-surface group flex h-full flex-col p-6 transition-colors hover:border-accent"
                >
                  <h3 className="text-lg font-semibold text-text-primary">{s.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                    {s.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="section-padding border-b border-border">
        <div className="container-page">
          <FadeIn>
            <p className="eyebrow mb-4">Case Study</p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              {sundaram.title}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-text-secondary">{sundaram.subtitle}</p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-primary">
                  Challenge
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{sundaram.challenge}</p>
                <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-text-primary">
                  Solution
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">{sundaram.solutionIntro}</p>
              </div>
              <div className="card-surface p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-primary">
                  The AI agent
                </h3>
                <ul className="grid gap-2.5 text-sm text-text-secondary">
                  {sundaram.agentCapabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-0.5 text-accent">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mt-10 overflow-x-auto">
              <FlowDiagram steps={sundaram.flow} />
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-10 rounded-lg border border-border bg-bg-secondary/50 p-5">
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">Outcome: </span>
                {sundaram.outcome}
              </p>
            </div>
            <Link href={`/case-studies/${sundaram.slug}`} className="btn-secondary mt-6 inline-flex">
              Read Case Study
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* AGENTIC AI */}
      <section className="section-padding border-b border-border bg-bg-secondary/30">
        <div className="container-page">
          <FadeIn>
            <p className="eyebrow mb-4">Agentic AI</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Beyond chatbots. AI that can actually do the work.
            </h2>
            <p className="mt-4 max-w-2xl text-text-secondary">
              Traditional chatbots primarily answer questions. Kartavya builds AI agents that can:
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {agenticCapabilities.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-xs text-text-secondary md:text-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mt-12 overflow-x-auto">
              <FlowDiagram steps={agenticFlow} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HOW WE BUILD */}
      <section className="section-padding border-b border-border">
        <div className="container-page">
          <FadeIn>
            <p className="eyebrow mb-4">How We Build</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              From AI idea to production.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {buildStages.map((stage, i) => (
              <FadeIn key={stage.number} delay={i * 60}>
                <div className="card-surface h-full p-5">
                  <span className="text-2xl font-semibold text-accent">{stage.number}</span>
                  <h3 className="mt-2 text-base font-semibold text-text-primary">{stage.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {stage.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding border-b border-border bg-bg-secondary/30">
        <div className="container-page">
          <FadeIn>
            <p className="eyebrow mb-4">Services</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Enterprise AI Engineering Services
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.name} delay={i * 50}>
                <div className="card-surface h-full p-5">
                  <h3 className="text-base font-semibold text-text-primary">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <Link href="/services" className="btn-secondary mt-8 inline-flex">
              View all services
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-padding border-b border-border">
        <div className="container-page">
          <FadeIn>
            <p className="eyebrow mb-4">Industries</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Where enterprise AI engineering creates the most value.
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 60}>
                <div className="card-surface h-full p-5">
                  <h3 className="text-base font-semibold text-text-primary">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{ind.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-padding border-b border-border bg-bg-secondary/30">
        <div className="container-page">
          <FadeIn>
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Built by enterprise technologists.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[220px_1fr]">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border lg:h-52 lg:w-52">
                <Image
                  src="/images/dharam-tiwari.jpg"
                  alt="Dharam Tiwari, Founder & CEO of Kartavya Technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">Dharam Tiwari</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  Founder &amp; CEO | Enterprise AI Architect
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
                  Dharam Tiwari is an enterprise technology leader with 20+ years of
                  experience designing and delivering large-scale technology solutions.
                  After spending two decades in the software industry and leading
                  solution architecture teams for global projects, he founded Kartavya
                  Technology with a focus on helping enterprises move beyond AI
                  experimentation and build production-grade AI systems.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "20+ Years Enterprise Technology",
                    "Enterprise Architecture",
                    "Agentic AI",
                    "AI Engineering",
                    "Global Enterprise Experience",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-card px-3 py-1 text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={siteConfig.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <div className="card-surface flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                  Have an enterprise workflow that should be AI-powered?
                </h2>
                <p className="mt-3 max-w-xl text-text-secondary">
                  Bring us a business process. We&apos;ll help identify where AI agents
                  can create measurable value — and how to take it to production.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link href="/contact" className="btn-primary whitespace-nowrap">
                  Talk to an AI Architect
                </Link>
                <Link href="/solutions" className="btn-secondary whitespace-nowrap">
                  Explore Our Solutions
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
