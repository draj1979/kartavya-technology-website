import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="section-padding border-b border-border bg-grid-pattern bg-[length:48px_48px] bg-bg-primary">
      <div className="container-page">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
