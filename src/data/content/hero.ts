import type { HeroContent, Locale } from "../types";

export const heroContent: Record<Locale, HeroContent> = {
  en: {
    eyebrow: "Garden design - Maintenance - Sustainability",
    headline: "Your garden, curated for color and calm.",
    copy:
      "From balcony herb pots to full landscape makeovers, our team designs, plants, and cares for gardens that fit your lifestyle and budget.",
    primaryCta: { label: "Book a garden walk-through", href: "#contact" },
    secondaryCta: { label: "Explore services", href: "#services" },
  },
  de: {
    eyebrow: "Gartendesign - Pflege - Nachhaltigkeit",
    headline: "Ihr Garten, gestaltet fuer Farbe und Ruhe.",
    copy:
      "Vom Balkon-Kuechengarten bis zur kompletten Umgestaltung: Unser Team plant, bepflanzt und pflegt Gaerten, die zu Ihrem Alltag und Budget passen.",
    primaryCta: { label: "Gartenrundgang vereinbaren", href: "#contact" },
    secondaryCta: { label: "Leistungen entdecken", href: "#services" },
  },
};
