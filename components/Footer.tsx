import Image from "next/image";
import Link from "next/link";
import { siteConfig, whatsappHref } from "@/lib/site";

const solutionLinks = [
  { label: "AI Agents", href: "/solutions/ai-agents" },
  { label: "Customer AI", href: "/solutions/customer-ai" },
  { label: "Recruitment AI", href: "/solutions/recruitment-ai" },
  { label: "Knowledge AI", href: "/solutions/knowledge-ai" },
  { label: "Operations AI", href: "/solutions/operations-ai" },
  { label: "Developer AI", href: "/solutions/developer-ai" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "Responsible AI", href: "/responsible-ai" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/40">
      <div className="container-page grid grid-cols-2 gap-10 py-14 md:grid-cols-4 md:py-16">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="mb-4 flex items-center gap-2">
            <Image src="/images/logo.png" alt="Kartavya Technology" width={32} height={32} className="h-8 w-8" />
            <span className="font-semibold text-text-primary">Kartavya Technology</span>
          </Link>
          <p className="mb-4 text-sm leading-relaxed text-text-secondary">
            Enterprise AI engineering and agentic AI. We design, build and deploy
            production-grade AI agents for enterprise workflows.
          </p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline"
          >
            Chat on WhatsApp — {siteConfig.whatsapp.display}
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-text-primary">Solutions</h3>
          <ul className="flex flex-col gap-2.5">
            {solutionLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-text-primary">Company</h3>
          <ul className="flex flex-col gap-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-text-secondary hover:text-text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-text-primary">Registered Office</h3>
          <address className="not-italic text-sm leading-relaxed text-text-secondary">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
            <br />
            {siteConfig.address.city} - {siteConfig.address.postalCode}
            <br />
            {siteConfig.address.country}
          </address>
          <div className="mt-4 flex gap-4">
            <a
              href={siteConfig.companyLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kartavya Technology on LinkedIn"
              className="text-text-secondary hover:text-text-primary"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kartavya Technology on X"
              className="text-text-secondary hover:text-text-primary"
            >
              X
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. A subsidiary of {siteConfig.parentCompany}. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-text-secondary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
