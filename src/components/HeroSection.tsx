import { Button } from "@/components/ui/button";
import type { LanguageToggleContent, NavLink } from "../data/siteContent";
import PrimaryNavigation from "./PrimaryNavigation";

type HeroSectionProps = {
  navigation: {
    brand: string;
    links: NavLink[];
    cta: NavLink;
    languageToggle: LanguageToggleContent;
    onToggleLanguage: () => void;
  };
  eyebrow: string;
  headline: string;
  copy: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
};

function HeroSection({ navigation, eyebrow, headline, copy, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <header
      id="top"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden rounded-b-hero bg-sand-50 text-white shadow-hero"
    >
      <img
        src="/images/hero/garden-hero.jpg"
        alt="Well-maintained garden with seating area"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950/95 via-forest-900/80 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-14 px-6 pb-14 pt-10 md:px-12 md:pt-14 lg:pb-20">
        <PrimaryNavigation {...navigation} />

        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70 md:text-sm">{eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="text-base text-white/80 md:text-lg">{copy}</p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-forest-700 shadow-lg transition hover:bg-white/90 focus-visible:bg-white/90"
            >
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border border-white/70 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:bg-white/10"
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
