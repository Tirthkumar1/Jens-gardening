import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import type { LanguageToggleContent, NavLink, NavLinkChild } from "../data/siteContent";

type PrimaryNavigationProps = {
  brand: string;
  links: NavLink[];
  cta: NavLink;
  languageToggle: LanguageToggleContent;
  onToggleLanguage: () => void;
};

const isRoute = (href: string) => href.startsWith("/");
const mobileMenuId = "primary-navigation-mobile";

function PrimaryNavigation({ brand, links, cta, languageToggle, onToggleLanguage }: PrimaryNavigationProps) {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const renderLink = (link: NavLink, className = "", onClick?: () => void) =>
    isRoute(link.href) ? (
      <Link to={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    ) : (
      <a href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    );

  const renderChild = (child: NavLinkChild, onClick?: () => void) =>
    isRoute(child.href) ? (
      <Link
        to={child.href}
        onClick={onClick}
        className="block rounded-md px-2 py-1 hover:bg-forest-100/80 focus-visible:bg-forest-100/80"
      >
        {child.label}
      </Link>
    ) : (
      <a
        href={child.href}
        onClick={onClick}
        className="block rounded-md px-2 py-1 hover:bg-forest-100/80 focus-visible:bg-forest-100/80"
      >
        {child.label}
      </a>
    );

  return (
    <nav className="relative z-10 w-full text-white" aria-label="Primary">
      <div className="flex w-full flex-col gap-4 md:grid md:grid-cols-[auto,1fr,auto] md:items-center md:gap-8">
        <div className="flex items-center justify-between gap-4 md:w-auto md:justify-start">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80 md:text-sm">
            {brand}
          </span>

          <button
            type="button"
            aria-controls={mobileMenuId}
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-full border border-white/40 p-2 text-white transition hover:bg-white/10 focus-visible:bg-white/10 md:hidden"
            aria-expanded={isMobileOpen}
            aria-label="Hauptmenue umschalten"
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden min-w-0 flex-wrap items-center justify-center gap-4 text-sm text-white/90 md:flex md:flex-1 md:gap-6 md:text-base">
          {links.map((link) => {
            const childLinks: NavLinkChild[] = link.children ?? [];
            if (childLinks.length > 0) {
              return (
                <div key={link.href} className="group relative flex items-center gap-1">
                  {renderLink(link, "whitespace-nowrap transition hover:text-white focus-visible:text-white")}
                  <ChevronDown className="h-4 w-4 text-white/70 transition group-hover:text-white group-focus-within:text-white" />
                  <div className="invisible absolute top-full left-1/2 z-20 mt-2 w-48 -translate-x-1/2 rounded-2xl border border-white/20 bg-white/95 p-3 text-left opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="space-y-2 text-sm text-forest-900">
                      {childLinks.map((child) => (
                        <li key={child.href}>{renderChild(child)}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            return renderLink(link, "whitespace-nowrap transition hover:text-white focus-visible:text-white");
          })}
        </div>

        <div className="hidden flex-wrap items-center justify-center gap-3 text-sm md:flex md:flex-nowrap md:justify-end md:gap-3 md:text-sm">
          {renderLink(
            cta,
            "whitespace-nowrap rounded-full border border-white/60 px-3 py-1.5 font-semibold text-white transition hover:bg-white hover:text-forest-700 focus-visible:bg-white focus-visible:text-forest-700"
          )}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="whitespace-nowrap rounded-full border border-white/40 px-3 py-1.5 font-semibold text-white/90 transition hover:bg-white/10 focus-visible:bg-white/10"
            aria-label={languageToggle.ariaLabel}
          >
            {languageToggle.label}
          </button>
        </div>
      </div>

      {isMobileOpen ? (
        <>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className="fixed inset-0 z-30 bg-forest-950/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="absolute left-0 right-0 top-full z-40 md:hidden" id={mobileMenuId}>
            <div className="mt-4 grid gap-3 rounded-3xl border border-white/15 bg-white/95 p-6 text-left text-forest-900 shadow-lg">
              <ul className="space-y-3 text-sm font-semibold">
                {links.map((link) => {
                  const childLinks: NavLinkChild[] = link.children ?? [];
                  return (
                    <li key={`${link.href}-mobile`} className="space-y-2">
                      {renderLink(link, "block", () => setIsMobileOpen(false))}
                      {childLinks.length > 0 ? (
                        <ul className="space-y-1 pl-3 text-xs font-medium text-ink-600">
                          {childLinks.map((child) => (
                            <li key={`${child.href}-mobile`}>
                              {renderChild(child, () => setIsMobileOpen(false))}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-col gap-3 pt-3">
                {renderLink(
                  cta,
                  "inline-flex items-center justify-center rounded-full border border-forest-700 px-4 py-2 text-sm font-semibold text-forest-700 transition hover:bg-forest-700 hover:text-white",
                  () => setIsMobileOpen(false)
                )}
                <button
                  type="button"
                  onClick={() => {
                    onToggleLanguage();
                    setIsMobileOpen(false);
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-forest-500/40 px-4 py-2 text-sm font-semibold text-forest-700 transition hover:bg-forest-500 hover:text-white"
                >
                  {languageToggle.label}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
}

export default PrimaryNavigation;





