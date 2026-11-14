// Central site configuration — edit here to update contact details,
// social links, and company info sitewide.

export const siteConfig = {
  name: "Kartavya Technology",
  legalName: "Kartavya Technology",
  parentCompany: "Inferex Pvt Ltd",
  url: "https://www.kartavyatech.com",
  description:
    "Kartavya Technology designs, builds and deploys production-grade AI agents that automate complex enterprise workflows — from customer engagement and recruitment to knowledge work and business operations.",
  ogImage: "/images/og-hero.png",
  address: {
    line1: "BeHive, 27th Main",
    line2: "HSR Layout",
    city: "Bangalore",
    postalCode: "560102",
    country: "India",
  },
  officePhone: {
    number: "+918064345206",
    display: "080-64345206",
  },
  whatsapp: {
    number: "919180390353",
    display: "+91 91803 90353",
    defaultMessage:
      "Hi Kartavya Technology, I'd like to talk to an AI Architect about an enterprise AI use case.",
  },
  calendly: "https://calendly.com/dharam-tiwari/30min",
  founder: {
    name: "Dharam Tiwari",
    linkedin: "https://www.linkedin.com/in/dharamtiwari/",
  },
  companyLinkedIn: "https://www.linkedin.com/company/kartavyatech/",
  twitter: "https://x.com/draj_02",
};

export function whatsappHref(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
