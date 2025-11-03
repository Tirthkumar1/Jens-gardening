import type { Locale, NavigationContent } from "../types";

export const navigationContent: Record<Locale, NavigationContent> = {
  en: {
    brand: "Bloomscape Garden Services",
    links: [
      { label: "Home", href: "/" },
      { label: "Prices", href: "/prices" },
      { label: "About us", href: "/about" },
      {
        label: "Branch offices",
        href: "#branch-offices",
        children: [
          { label: "City West", href: "#branch-west" },
          { label: "North Gardens", href: "#branch-north" },
          { label: "Riverside", href: "#branch-riverside" },
        ],
      },
      { label: "Jobs", href: "/jobs" },
      { label: "Contact", href: "/#contact" },
      {
        label: "FAQ",
        href: "/faq",
        children: [
          { label: "Services", href: "#faq-services" },
          { label: "Scheduling", href: "#faq-schedule" },
          { label: "Billing", href: "#faq-billing" },
        ],
      },
    ],
    cta: { label: "Free Consultation", href: "/#contact" },
    languageToggle: {
      label: "Deutsch",
      ariaLabel: "Switch language to German",
    },
  },
  de: {
    brand: "Bloomscape Garden Services",
    links: [
      { label: "Startseite", href: "/" },
      { label: "Preise", href: "/prices" },
      { label: "Ueber uns", href: "/about" },
      {
        label: "Standorte",
        href: "#branch-offices",
        children: [
          { label: "City West", href: "#branch-west" },
          { label: "Nord Gaerten", href: "#branch-north" },
          { label: "Uferquartier", href: "#branch-riverside" },
        ],
      },
      { label: "Jobs", href: "/jobs" },
      { label: "Kontakt", href: "/#contact" },
      {
        label: "FAQ",
        href: "/faq",
        children: [
          { label: "Leistungen", href: "#faq-services" },
          { label: "Ablauf", href: "#faq-schedule" },
          { label: "Rechnung", href: "#faq-billing" },
        ],
      },
    ],
    cta: { label: "Kostenlose Beratung", href: "/#contact" },
    languageToggle: {
      label: "English",
      ariaLabel: "Sprache zu Englisch wechseln",
    },
  },
};
