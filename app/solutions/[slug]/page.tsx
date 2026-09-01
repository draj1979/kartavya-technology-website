import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { solutions } from "@/lib/data";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.short,
  };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) notFound();

  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <PageHero eyebrow="Solution" title={solution.name} description={solution.description} />

      <section className="section-padding border-b border-border">
        <div className="container-page grid gap-10 lg:grid-cols-[2fr_1fr]">
          <FadeIn>
            <h2 className="text-lg font-semibold text-text-primary">What this includes</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {solution.capabilities.map((c) => (
                <li key={c} className="card-surface flex items-start gap-3 p-4 text-sm text-text-secondary">
                  <span className="mt-0.5 text-accent">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="card-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                Have a workflow in mind?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Talk to an AI Architect about applying {solution.name.toLowerCase()} to a
                specific process in your business.
              </p>
              <Link href="/contact" className="btn-primary mt-5 w-full text-sm">
                Talk to an AI Architect
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <FadeIn>
            <h2 className="text-lg font-semibold text-text-primary">Other solutions</h2>
          </FadeIn>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherSolutions.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 60}>
                <Link
                  href={`/solutions/${s.slug}`}
                  className="card-surface flex h-full flex-col p-5 transition-colors hover:border-accent"
                >
                  <h3 className="font-semibold text-text-primary">{s.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{s.short}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
