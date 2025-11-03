import type { FooterContent, Locale } from "../types";

export const footerContent: Record<Locale, FooterContent> = {
  en: {
    statement: "Crafted with care for thriving outdoor spaces.",
    mission:
      "We transform houses and gardens into restorative spaces by pairing horticulture expertise with thoughtful in-home care.",
    quickLinks: [
      { label: "Our Mission", href: "/about" },
      { label: "Sustainability", href: "/about" },
      { label: "Pricing", href: "/prices" },
      { label: "Join the Team", href: "/jobs" },
    ],
    contact: {
      phone: "+1 (555) 012-3456",
      email: "hello@bloomscapeservices.com",
      address: "245 Garden Lane, Eastwood, NY",
    },
  },
  de: {
    statement: "Mit Liebe gepflegt fuer gruene Ruhebereiche.",
    mission:
      "Wir schaffen Ruheraeume fuer Haus und Garten, indem wir Gartenbaukompetenz mit sorgfaeltiger Hausbetreuung verbinden.",
    quickLinks: [
      { label: "Unsere Mission", href: "/about" },
      { label: "Nachhaltigkeit", href: "/about" },
      { label: "Preise", href: "/prices" },
      { label: "Karriere", href: "/jobs" },
    ],
    contact: {
      phone: "+49 (0)30 1234 5678",
      email: "hallo@bloomscapeservices.de",
      address: "Gartenweg 12, 10437 Berlin",
    },
  },
};
