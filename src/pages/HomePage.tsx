import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import MissionSection from "../components/MissionSection";
import SeasonalSpotlightSection from "../components/SeasonalSpotlightSection";
import ServicesSection from "../components/ServicesSection";
import SiteFooter from "../components/SiteFooter";
import StatsSection from "../components/StatsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import { getSiteCopy, getStoredLocale, persistLocale, type Locale } from "../data/siteContent";

function HomePage() {
  const location = useLocation();
  const [locale, setLocale] = useState<Locale>(() => getStoredLocale());
  const content = getSiteCopy(locale);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.lang = locale;
    persistLocale(locale);
  }, [locale]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  function handleToggleLanguage() {
    setLocale((previous) => (previous === "en" ? "de" : "en"));
  }

  return (
    <div className="flex min-h-screen flex-col bg-sand-50 text-ink-900">
      <HeroSection
        navigation={{
          brand: content.navigation.brand,
          links: content.navigation.links,
          cta: content.navigation.cta,
          languageToggle: content.navigation.languageToggle,
          onToggleLanguage: handleToggleLanguage,
        }}
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        copy={content.hero.copy}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
      />

      <main className="flex-1">
        <StatsSection stats={content.sections.stats.items} />
        <MissionSection content={content.sections.mission} />
        <ServicesSection
          heading={content.sections.services.heading}
          services={content.sections.services.items}
        />
        <HighlightsSection
          heading={content.sections.highlights.heading}
          highlights={content.sections.highlights.items}
          brand={content.navigation.brand}
        />
        <SeasonalSpotlightSection
          heading={content.sections.seasonal.heading}
          tips={content.sections.seasonal.items}
        />
        <TestimonialsSection
          heading={content.sections.testimonials.heading}
          citeSeparator={content.sections.testimonials.citeSeparator}
          testimonials={content.sections.testimonials.items}
        />
        <ContactSection
          serviceOptions={content.sections.services.items}
          content={content.sections.contact}
        />
      </main>

      <SiteFooter
        brand={content.navigation.brand}
        statement={content.footer.statement}
        mission={content.footer.mission ?? content.footer.statement}
        quickLinks={content.footer.quickLinks ?? []}
        contact={content.footer.contact ?? { phone: "", email: "", address: "" }}
        currentYear={currentYear}
      />
    </div>
  );
}

export default HomePage;





