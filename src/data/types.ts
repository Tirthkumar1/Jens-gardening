export type Locale = "en" | "de";

export type NavLinkChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavLinkChild[];
};

export type LanguageToggleContent = {
  label: string;
  ariaLabel: string;
};

export type Service = {
  title: string;
  description: string;
  visualKey: "garden" | "cleaning" | "transport" | "additional";
  ctaLabel: string;
  imageUrl: string;
};

export type Highlight = {
  title: string;
  description: string;
  icon: string;
};

export type SeasonalTip = {
  title: string;
  detail: string;
  imageUrl: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

export type MissionImage = {
  src: string;
  alt: string;
};

export type MissionContent = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  images: MissionImage[];
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  copy: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
};

export type ServicesSectionContent = {
  heading: string;
  items: Service[];
};

export type HighlightsSectionContent = {
  heading: string;
  items: Highlight[];
};

export type SeasonalSectionContent = {
  heading: string;
  items: SeasonalTip[];
};

export type TestimonialsSectionContent = {
  heading: string;
  citeSeparator: string;
  items: Testimonial[];
};

export type ContactFormContent = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  serviceLabel: string;
  servicePlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  submitLabel: string;
};

export type ContactSectionContent = {
  heading: string;
  description: string;
  benefits: string[];
  phoneLabel: string;
  phoneNumber: string;
  whatsappLabel: string;
  whatsappNumber: string;
  map: {
    embedUrl: string;
    title: string;
  };
  form: ContactFormContent;
};

export type Stat = {
  prefix?: string;
  value: number;
  suffix?: string;
  description: string;
};

export type StatsSectionContent = {
  items: Stat[];
};

export type NavigationContent = {
  brand: string;
  links: NavLink[];
  cta: NavLink;
  languageToggle: LanguageToggleContent;
};

export type FooterContent = {
  statement: string;
  mission: string;
  quickLinks: NavLink[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
};

export type SiteCopy = {
  navigation: NavigationContent;
  hero: HeroContent;
  sections: {
    mission: MissionContent;
    stats: StatsSectionContent;
    services: ServicesSectionContent;
    highlights: HighlightsSectionContent;
    seasonal: SeasonalSectionContent;
    testimonials: TestimonialsSectionContent;
    contact: ContactSectionContent;
  };
  footer: FooterContent;
};

export const defaultLocale: Locale = "en";
