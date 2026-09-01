import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { techStack } from "@/lib/data";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Model-agnostic, enterprise-ready AI technology stack: foundation models, agent systems, enterprise knowledge, integration, infrastructure and enterprise controls.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Model-agnostic. Enterprise-ready."
        description="We select and architect AI technologies based on the business problem — not around a single model provider. Kartavya owns the enterprise AI engineering layer; the underlying model can change depending on the use case."
      />
      <section className="section-padding">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 60}>
              <div className="card-surface h-full p-6">
                <h2 className="text-base font-semibold text-text-primary">{cat.name}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-bg-primary px-3 py-1 text-xs text-text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-padding border-t border-border bg-bg-secondary/30">
        <div className="container-page">
          <FadeIn>
            <h2 className="text-lg font-semibold text-text-primary">Technology Partners</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card-surface p-6">
                <p className="eyebrow mb-2">Official Partner</p>
                <h3 className="text-base font-semibold text-text-primary">Anthropic</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Kartavya is an official Anthropic partner, building on Claude models for
                  select enterprise agent implementations.
                </p>
              </div>
              <div className="card-surface p-6 opacity-70">
                <p className="eyebrow mb-2">Ecosystem</p>
                <h3 className="text-base font-semibold text-text-primary">
                  OpenAI · Google · Microsoft · AWS
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  We build with these platforms today. Partner badges are added here only
                  once a formal partnership is in place.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
