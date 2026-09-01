import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-3xl font-semibold text-text-primary md:text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
