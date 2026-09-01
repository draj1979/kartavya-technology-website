import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { insights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Technical perspectives on enterprise AI agents, agentic AI architecture, AI governance and AI evaluation from Kartavya Technology.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Technical perspectives on enterprise AI."
        description="Focused writing on enterprise AI agents, architecture, governance and evaluation — not generic AI content."
      />
      <section className="section-padding">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {insights.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 70}>
              <Link
                href={`/insights/${post.slug}`}
                className="card-surface group flex h-full flex-col p-6 transition-colors hover:border-accent"
              >
                <span className="eyebrow">{post.category}</span>
                <h2 className="mt-3 text-lg font-semibold text-text-primary">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-text-muted">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
