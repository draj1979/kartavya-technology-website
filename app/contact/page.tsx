import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import { siteConfig, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Talk to an AI Architect",
  description:
    "Bring us a business process. We'll help identify where AI agents can create measurable value — and how to take it to production.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have an enterprise workflow that should be AI-powered?"
        description="Bring us a business process. We'll help identify where AI agents can create measurable value — and how to take it to production."
      />

      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <FadeIn>
            <div className="flex flex-col gap-6">
              <div className="card-surface p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                  WhatsApp
                </h2>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[#25D366] hover:underline"
                >
                  {siteConfig.whatsapp.display}
                </a>
              </div>
              <div className="card-surface p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                  Book time directly
                </h2>
                <a
                  href={siteConfig.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-accent hover:underline"
                >
                  Schedule a 30-min call →
                </a>
              </div>
              <div className="card-surface p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-text-primary">
                  Registered Office
                </h2>
                <address className="mt-2 not-italic text-sm leading-relaxed text-text-secondary">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city} - {siteConfig.address.postalCode}
                  <br />
                  {siteConfig.address.country}
                </address>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
