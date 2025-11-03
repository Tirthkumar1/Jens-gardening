import type { Locale, SiteCopy } from "./types";
import { defaultLocale } from "./types";

import { contactContent } from "./content/contact";
import { footerContent } from "./content/footer";
import { heroContent } from "./content/hero";
import { highlightsContent } from "./content/highlights";
import { missionContent } from "./content/mission";
import { navigationContent } from "./content/navigation";
import { seasonalContent } from "./content/seasonal";
import { servicesContent } from "./content/services";
import { statsContent } from "./content/stats";
import { testimonialsContent } from "./content/testimonials";

export type {
  ContactSectionContent,
  FooterContent,
  HeroContent,
  Highlight,
  HighlightsSectionContent,
  LanguageToggleContent,
  Locale,
  MissionContent,
  MissionImage,
  NavLink,
  NavLinkChild,
  NavigationContent,
  SeasonalSectionContent,
  SeasonalTip,
  Service,
  ServicesSectionContent,
  SiteCopy,
  Stat,
  StatsSectionContent,
  Testimonial,
  TestimonialsSectionContent,
} from "./types";
export { defaultLocale } from "./types";

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    navigation: navigationContent.en,
    hero: heroContent.en,
    sections: {
      mission: missionContent.en,
      stats: statsContent.en,
      services: servicesContent.en,
      highlights: highlightsContent.en,
      seasonal: seasonalContent.en,
      testimonials: testimonialsContent.en,
      contact: contactContent.en,
    },
    footer: footerContent.en,
  },
  de: {
    navigation: navigationContent.de,
    hero: heroContent.de,
    sections: {
      mission: missionContent.de,
      stats: statsContent.de,
      services: servicesContent.de,
      highlights: highlightsContent.de,
      seasonal: seasonalContent.de,
      testimonials: testimonialsContent.de,
      contact: contactContent.de,
    },
    footer: footerContent.de,
  },
};

export function getSiteCopy(locale: Locale): SiteCopy {
  return siteCopy[locale] ?? siteCopy[defaultLocale];
}

const LOCALE_STORAGE_KEY = "garden-service-locale";

const isLocale = (value: string | null): value is Locale =>
  value === "en" || value === "de";

export function getStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(stored) ? stored : defaultLocale;
}

export function persistLocale(locale: Locale): void {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}
