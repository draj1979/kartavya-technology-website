import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { solutions, caseStudies, insights } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/solutions",
    "/services",
    "/case-studies",
    "/technology",
    "/responsible-ai",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
  ];

  const dynamicRoutes = [
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...insights.map((p) => `/insights/${p.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
