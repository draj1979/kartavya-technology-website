import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kartavya Technology is an enterprise AI engineering company founded by Dharam Tiwari, focused on helping enterprises build production-grade AI agents.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="AI should not merely generate answers. It should help enterprises accomplish work."
      />

      <section className="section-padding border-b border-border">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-lg font-semibold text-text-primary">Why Kartavya exists</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Most enterprises today have run AI pilots. Very few have AI systems running
              in production, embedded in real business processes, with the reliability
              and controls an enterprise expects. Kartavya Technology exists to close
              that gap — combining enterprise architecture discipline with modern
              agentic AI to build systems that actually operate inside a business.
            </p>
            <h2 className="mt-8 text-lg font-semibold text-text-primary">Enterprise-first approach</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              We start from the business process, not the model. That means understanding
              existing systems, data, compliance requirements and operational constraints
              before designing the agent architecture around them.
            </p>
            <h2 className="mt-8 text-lg font-semibold text-text-primary">Model-agnostic by design</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              We work with Anthropic, OpenAI, Google and other frontier AI platforms,
              selecting the right model and architecture for each use case rather than
              standardizing on a single provider. Kartavya owns the enterprise AI
              engineering layer — the underlying model can change.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="card-surface p-6">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-border">
                <Image
                  src="/images/dharam-tiwari.jpg"
                  alt="Dharam Tiwari, Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-center text-base font-semibold text-text-primary">
                Dharam Tiwari
              </h3>
              <p className="text-center text-sm text-accent">Founder &amp; CEO</p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                20+ years of experience in enterprise technology and software engineering,
                including leading solution architecture teams for large-scale global
                technology projects. Dharam founded Kartavya Technology to help
                enterprises move beyond AI experimentation and build AI systems that
                deliver measurable business outcomes.
              </p>
              <a
                href={siteConfig.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <h2 className="text-lg font-semibold text-text-primary">Our philosophy</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Build", d: "Production-grade agents, not demos." },
                { t: "Integrate", d: "Inside existing enterprise systems, not around them." },
                { t: "Evaluate", d: "Measured against accuracy, reliability and cost." },
                { t: "Operate", d: "Monitored and improved after go-live." },
              ].map((item) => (
                <div key={item.t} className="card-surface p-5">
                  <h3 className="font-semibold text-text-primary">{item.t}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.d}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
