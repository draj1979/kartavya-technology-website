import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { governanceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Responsible AI",
  description:
    "Kartavya Technology's approach to AI governance: human oversight, evaluation, security, access control, and risk-based deployment of enterprise AI agents.",
};

const principles = [
  {
    title: "Human oversight by design",
    body: "AI agents are given clearly scoped permissions. Actions with meaningful business, financial or legal impact are routed through a human approval step rather than executed autonomously.",
  },
  {
    title: "Evaluated before deployment",
    body: "Agents are evaluated for accuracy, reliability, safety, latency and cost against the specific workflow they're built for — not a generic benchmark — before they touch production data or systems.",
  },
  {
    title: "Access control and least privilege",
    body: "Agents are granted the minimum system and data access required to perform their task, with permissions and identity managed the same way as any other enterprise system integration.",
  },
  {
    title: "Auditability",
    body: "Agent decisions, tool calls and escalations are logged so that actions can be reviewed, audited and explained after the fact.",
  },
  {
    title: "Security testing",
    body: "Agent-facing surfaces — including prompt injection and tool-misuse paths — are tested as part of the build and evaluation process, not treated as an afterthought.",
  },
  {
    title: "Risk-based governance",
    body: "Not every agent carries the same risk. Governance controls — approval gates, monitoring depth, escalation procedures — scale with the impact of what the agent is allowed to do.",
  },
];

export default function ResponsibleAiPage() {
  return (
    <>
      <PageHero
        eyebrow="Responsible AI"
        title="AI that enterprises can trust."
        description="AI systems must be designed not only to be intelligent, but also secure, controllable, observable and accountable. We take a risk-based approach to governance rather than a one-size-fits-all checklist."
      />

      <section className="section-padding border-b border-border">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <FadeIn key={p.title} delay={i * 60}>
              <div className="card-surface h-full p-6">
                <h2 className="text-base font-semibold text-text-primary">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <h2 className="text-lg font-semibold text-text-primary">Areas covered</h2>
            <p className="mt-2 max-w-2xl text-sm text-text-secondary">
              Depending on the engagement, our governance approach addresses the following
              areas. We do not claim certifications the company does not formally hold.
            </p>
          </FadeIn>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {governanceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-bg-card px-3.5 py-1.5 text-sm text-text-secondary"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
