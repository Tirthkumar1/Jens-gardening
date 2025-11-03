import type { Locale, ServicesSectionContent } from "../types";

export const servicesContent: Record<Locale, ServicesSectionContent> = {
  en: {
    heading: "How we help your property shine",
    items: [
      {
        title: "Garden Care",
        description:
          "Lawn mowing, hedge trimming, weeding, and seasonal plant care that keep every outdoor space tidy.",
        visualKey: "garden",
        ctaLabel: "Select service",
        imageUrl: "/images/services/garden-care.jpg",
      },
      {
        title: "Household & Cleaning",
        description:
          "Sparkling homes with regular cleaning, window care, and deep-clean projects handled with care.",
        visualKey: "cleaning",
        ctaLabel: "Select service",
        imageUrl: "/images/services/household-cleaning.jpg",
      },
      {
        title: "Clearance & Transport",
        description:
          "Decluttering support, household removals, and small transport jobs that take the heavy lifting off your list.",
        visualKey: "transport",
        ctaLabel: "Select service",
        imageUrl: "/images/services/clearance-transport.jpg",
      },
      {
        title: "Additional Services",
        description:
          "Winter readiness, minor repairs, and property management packages tailored to your schedule.",
        visualKey: "additional",
        ctaLabel: "Select service",
        imageUrl: "/images/services/additional-services.jpg",
      },
    ],
  },
  de: {
    heading: "So bringen wir Haus und Garten zum Gedeihen",
    items: [
      {
        title: "Gartenpflege",
        description:
          "Rasenmaehen, Heckenschnitt, Unkrautentfernung und saisonale Arbeiten fuer gepflegte Aussenbereiche.",
        visualKey: "garden",
        ctaLabel: "Leistung waehlen",
        imageUrl: "/images/services/garden-care.jpg",
      },
      {
        title: "Haushalt & Reinigung",
        description:
          "Gruendliche Unterhaltsreinigung, Fensterpflege und Intensivreinigung mit einem Auge fuer Details.",
        visualKey: "cleaning",
        ctaLabel: "Leistung waehlen",
        imageUrl: "/images/services/household-cleaning.jpg",
      },
      {
        title: "Entruempelung & Transport",
        description:
          "Unterstuetzung beim Ausmisten, Haushaltsaufloesungen und kleine Transporte ohne Stress.",
        visualKey: "transport",
        ctaLabel: "Leistung waehlen",
        imageUrl: "/images/services/clearance-transport.jpg",
      },
      {
        title: "Zusatzleistungen",
        description:
          "Winterdienst, kleine Reparaturen und Objektbetreuung, individuell planbar.",
        visualKey: "additional",
        ctaLabel: "Leistung waehlen",
        imageUrl: "/images/services/additional-services.jpg",
      },
    ],
  },
};
