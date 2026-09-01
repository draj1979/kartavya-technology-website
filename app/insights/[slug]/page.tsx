import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { insights } from "@/lib/data";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt}>
        <p className="mt-4 text-xs text-text-muted">
          {new Date(post.date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          · {post.readTime}
        </p>
      </PageHero>

      <section className="section-padding">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <div className="flex flex-col gap-5">
              {post.body.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-text-secondary">
                  {para}
                </p>
              ))}
            </div>
            <Link href="/insights" className="btn-secondary mt-10 inline-flex">
              ← Back to Insights
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
