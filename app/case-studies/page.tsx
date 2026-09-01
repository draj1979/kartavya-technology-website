import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real enterprise AI agent implementations delivered by Kartavya Technology, including the AI Hiring Agent built for Axiominds Consulting.",
};

const upcomingCategories = [
  "Customer AI Agent",
  "WhatsApp AI Agent",
  "Enterprise Knowledge Agent",
  "Developer AI Agent",
  "Operations Agent",
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Enterprise AI agents, in production."
        description="We only publish case studies for work we have actually delivered. No fabricated metrics, no invented customers."
      />
      <section className="section-padding border-b border-border">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.slug} delay={i * 80}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="card-surface group flex h-full flex-col p-7 transition-colors hover:border-accent"
              >
                <span className="eyebrow">{cs.category}</span>
                <h2 className="mt-3 text-xl font-semibold text-text-primary">{cs.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{cs.subtitle}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read case study
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <h2 className="text-lg font-semibold text-text-primary">Coming next</h2>
            <p className="mt-2 max-w-2xl text-sm text-text-secondary">
              We&apos;re actively building in these categories. Case studies will be
              published here as engagements complete.
            </p>
          </FadeIn>
          <div className="mt-6 flex flex-wrap gap-3">
            {upcomingCategories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-dashed border-border px-4 py-2 text-sm text-text-muted"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
