import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Kartavya Technology™.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: 1 September 2026" />
      <section className="section-padding">
        <div className="container-page max-w-3xl">
          <div className="flex flex-col gap-8 text-sm leading-relaxed text-text-secondary">
            <Section title="1. Who We Are">
              <p>
                Kartavya Technology™ (&quot;Kartavya&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) is an enterprise AI engineering company and official Anthropic
                partner, operated by Inferex Pvt Ltd. Our registered business operates
                globally, with enquiries handled by our founder, Dharam Tiwari. You can reach us
                at <a className="text-accent hover:underline" href="mailto:dharam@kartavyatech.com">dharam@kartavyatech.com</a>.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-text-primary">Contact &amp; enquiry details</strong> —
                  name, email address, company name, and any message you send us directly via
                  email or our website.
                </li>
                <li>
                  <strong className="text-text-primary">Booking information</strong> — when you
                  schedule a consultation through our Calendly link, Calendly collects and
                  processes your name, email, timezone, and any notes you provide.
                </li>
                <li>
                  <strong className="text-text-primary">Messaging information</strong> — if you
                  contact us via WhatsApp, WhatsApp processes your phone number and message
                  content per Meta&apos;s privacy policy.
                </li>
                <li>
                  <strong className="text-text-primary">Usage data</strong> — standard server or
                  hosting logs may record your IP address, browser type, pages visited, and
                  referral source.
                </li>
              </ul>
              <p className="mt-3">We do not run our own contact forms or collect payment information directly.</p>
            </Section>

            <Section title="3. How We Use Your Information">
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to your enquiries and schedule consultations.</li>
                <li>Provide the services you have requested or are interested in.</li>
                <li>Send relevant follow-up information about our services (you may opt out at any time).</li>
                <li>Improve our website and service offerings.</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
            </Section>

            <Section title="4. Legal Basis for Processing (GDPR)">
              <p>If you are located in the European Economic Area (EEA), our legal bases for processing your personal data are:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong className="text-text-primary">Legitimate interests</strong> — responding to business enquiries and maintaining our service relationship.</li>
                <li><strong className="text-text-primary">Consent</strong> — where you have explicitly provided information to book a session or subscribe to communications.</li>
                <li><strong className="text-text-primary">Contractual necessity</strong> — where processing is required to fulfil a service agreement.</li>
              </ul>
            </Section>

            <Section title="5. Third-Party Services">
              <p>Our website uses the following third-party services, each with their own privacy practices:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong className="text-text-primary">Google Fonts</strong> — fonts may be loaded from Google&apos;s CDN. Google may log requests.</li>
                <li><strong className="text-text-primary">Calendly</strong> — used for consultation booking.</li>
                <li><strong className="text-text-primary">WhatsApp (Meta)</strong> — used for direct messaging enquiries.</li>
                <li><strong className="text-text-primary">LinkedIn / X</strong> — profile and company links are provided for reference. Their own policies apply when you visit those pages.</li>
              </ul>
            </Section>

            <Section title="6. Cookies">
              <p>
                Our website itself does not set first-party cookies. Third-party services linked
                from our site (such as Google Fonts, Calendly or WhatsApp) may set their own
                cookies subject to their respective policies. Most browsers allow you to control
                or disable cookies in their settings.
              </p>
            </Section>

            <Section title="7. Data Retention">
              <p>
                We retain personal information only for as long as necessary to fulfil the
                purposes described in this policy, or as required by applicable law. Email
                correspondence is retained for up to 3 years. Booking records held by Calendly
                are subject to Calendly&apos;s own retention policy.
              </p>
            </Section>

            <Section title="8. Your Rights">
              <p>Depending on your location, you may have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data (&quot;right to be forgotten&quot;).</li>
                <li>Object to or restrict certain types of processing.</li>
                <li>Data portability — receive your data in a structured, machine-readable format.</li>
                <li>Withdraw consent at any time (where processing is based on consent).</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a className="text-accent hover:underline" href="mailto:dharam@kartavyatech.com">dharam@kartavyatech.com</a>. We will respond within 30 days.
              </p>
            </Section>

            <Section title="9. Data Security">
              <p>
                We take reasonable technical and organisational measures to protect your
                information from unauthorised access, loss, or disclosure. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </Section>

            <Section title="10. Children's Privacy">
              <p>
                Our services are directed at businesses and professionals. We do not knowingly
                collect personal information from anyone under the age of 16.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. The &quot;Last updated&quot;
                date at the top of this page reflects when the most recent changes were made.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p>Dharam Tiwari — Founder, Kartavya Technology™</p>
              <p>
                Email:{" "}
                <a className="text-accent hover:underline" href="mailto:dharam@kartavyatech.com">dharam@kartavyatech.com</a>
              </p>
              <p>Registered company: Inferex Pvt Ltd</p>
              <p>Registered office: BeHive, 27th Main, HSR Layout, Bangalore - 560102, India</p>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-base font-semibold text-text-primary">{title}</h2>
      {children}
    </div>
  );
}
