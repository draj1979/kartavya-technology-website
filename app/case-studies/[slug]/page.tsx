import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import FlowDiagram from "@/components/FlowDiagram";
import { caseStudies } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.subtitle };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  return (
    <>
      <PageHero eyebrow={cs.category} title={cs.title} description={cs.subtitle} />

      <section className="section-padding border-b border-border">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-text-primary">
              Challenge
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">{cs.challenge}</p>
            <h2 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-text-primary">
              Solution
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">{cs.solutionIntro}</p>
            <h2 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-text-primary">
              Architecture
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">{cs.architecture}</p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="card-surface p-6">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-primary">
                What the AI agent does
              </h2>
              <ul className="grid gap-2.5 text-sm text-text-secondary">
                {cs.agentCapabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="mt-0.5 text-accent">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding border-b border-border bg-bg-secondary/30">
        <div className="container-page">
          <FadeIn>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-text-primary">
              Workflow
            </h2>
            <div className="overflow-x-auto">
              <FlowDiagram steps={cs.flow} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <div className="card-surface p-7">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                Outcome
              </h2>
              <p className="mt-3 leading-relaxed text-text-secondary">{cs.outcome}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Talk to an AI Architect
              </a>
              <Link href="/case-studies" className="btn-secondary">
                View all case studies
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
