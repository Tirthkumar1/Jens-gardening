import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import type { Locale, SiteCopy } from "@/data/siteContent";
import { defaultLocale, getSiteCopy } from "@/data/siteContent";

import PrimaryNavigation from "./PrimaryNavigation";
import SiteFooter from "./SiteFooter";

type PageLayoutProps = {
  children: (content: SiteCopy) => React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps) {
  const location = useLocation();
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const content = getSiteCopy(locale);
  const currentYear = new Date().getFullYear();

  function handleToggleLanguage() {
    setLocale((previous) => (previous === "en" ? "de" : "en"));
  }

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="min-h-screen bg-sand-50 text-ink-900">
      <header className="bg-forest-900 text-white shadow-hero">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-6 py-6 md:px-12">
          <PrimaryNavigation
            brand={content.navigation.brand}
            links={content.navigation.links}
            cta={content.navigation.cta}
            languageToggle={content.navigation.languageToggle}
            onToggleLanguage={handleToggleLanguage}
          />
        </div>
      </header>

      <main>{children(content)}</main>

      <SiteFooter
        brand={content.navigation.brand}
        statement={content.footer.statement}
        mission={content.footer.mission}
        quickLinks={content.footer.quickLinks}
        contact={content.footer.contact}
        currentYear={currentYear}
      />
    </div>
  );
}

export default PageLayout;
