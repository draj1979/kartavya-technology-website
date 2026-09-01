import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { solutions } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Enterprise AI agent solutions from Kartavya Technology: AI Agents, Customer AI, Recruitment AI, Knowledge AI, Operations AI and Developer AI.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="We turn enterprise workflows into AI-powered systems."
        description="Six categories of AI agents, each built to fit inside an existing enterprise process — not replace it with a generic assistant."
      />
      <section className="section-padding">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 60}>
              <Link
                href={`/solutions/${s.slug}`}
                className="card-surface group flex h-full flex-col p-6 transition-colors hover:border-accent"
              >
                <h2 className="text-lg font-semibold text-text-primary">{s.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
