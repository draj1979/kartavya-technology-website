import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enterprise AI Engineering Services",
  description:
    "AI Strategy, AI Architecture, Agent Development, Enterprise Integration, AI Application Development, AI Evaluation & Governance, Managed AI and AI Enablement.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Enterprise AI Engineering Services"
        description="From identifying the right use case to operating an agent in production, we cover the full lifecycle of enterprise AI delivery."
      />
      <section className="section-padding border-b border-border">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <FadeIn key={s.name} delay={i * 50}>
              <div className="card-surface h-full p-6">
                <h2 className="text-base font-semibold text-text-primary">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{s.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <div className="card-surface flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  Not sure which service fits your use case?
                </h2>
                <p className="mt-2 text-text-secondary">
                  Bring us the business process — we&apos;ll scope the right engagement.
                </p>
              </div>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary whitespace-nowrap"
              >
                Talk to an AI Architect
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
