import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import type { LanguageToggleContent, NavLink, NavLinkChild } from "../data/siteContent";

type PrimaryNavigationProps = {
  brand: string;
  links: NavLink[];
  cta: NavLink;
  languageToggle: LanguageToggleContent;
  onToggleLanguage: () => void;
};

const isRoute = (href: string) => href.startsWith("/");

function PrimaryNavigation({ brand, links, cta, languageToggle, onToggleLanguage }: PrimaryNavigationProps) {
  return (
    <nav
      className="relative z-10 flex w-full flex-col gap-4 text-white md:flex-row md:items-center md:justify-between"
      aria-label="Primary"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/80 md:text-sm">
        {brand}
      </span>

      <div className="flex w-full min-w-0 flex-wrap items-center justify-center gap-3 text-sm text-white/90 md:flex-1 md:flex-nowrap md:gap-5 md:text-base">
        {links.map((link) => {
          const childLinks: NavLinkChild[] = link.children ?? [];
          if (childLinks.length > 0) {
            return (
              <div
                key={link.href}
                className="group relative flex items-center gap-1"
              >
                {isRoute(link.href) ? (
                  <Link
                    to={link.href}
                    className="whitespace-nowrap transition hover:text-white focus-visible:text-white"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="whitespace-nowrap transition hover:text-white focus-visible:text-white"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {link.label}
                  </a>
                )}
                <ChevronDown className="h-4 w-4 text-white/70 transition group-hover:text-white group-focus-within:text-white" />
                <div className="invisible absolute top-full left-1/2 z-20 mt-2 w-48 -translate-x-1/2 rounded-2xl border border-white/20 bg-white/95 p-3 text-left opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="space-y-2 text-sm text-forest-900">
                    {childLinks.map((child) => (
                      <li key={child.href}>
                        {isRoute(child.href) ? (
                          <Link
                            to={child.href}
                            className="block rounded-md px-2 py-1 hover:bg-forest-100/80 focus-visible:bg-forest-100/80"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <a
                            href={child.href}
                            className="block rounded-md px-2 py-1 hover:bg-forest-100/80 focus-visible:bg-forest-100/80"
                          >
                            {child.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          }

          return (
            isRoute(link.href) ? (
              <Link
                key={link.href}
                to={link.href}
                className="whitespace-nowrap transition hover:text-white focus-visible:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition hover:text-white focus-visible:text-white"
              >
                {link.label}
              </a>
            )
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:flex-none md:justify-end md:text-base">
        {isRoute(cta.href) ? (
          <Link
            to={cta.href}
            className="whitespace-nowrap rounded-full border border-white/70 px-4 py-2 font-semibold text-white transition hover:bg-white hover:text-forest-700 focus-visible:bg-white focus-visible:text-forest-700"
          >
            {cta.label}
          </Link>
        ) : (
          <a
            href={cta.href}
            className="whitespace-nowrap rounded-full border border-white/70 px-4 py-2 font-semibold text-white transition hover:bg-white hover:text-forest-700 focus-visible:bg-white focus-visible:text-forest-700"
          >
            {cta.label}
          </a>
        )}
        <button
          type="button"
          onClick={onToggleLanguage}
          className="whitespace-nowrap rounded-full border border-white/40 px-4 py-2 font-semibold text-white/90 transition hover:bg-white/10 focus-visible:bg-white/10"
          aria-label={languageToggle.ariaLabel}
        >
          {languageToggle.label}
        </button>
      </div>
    </nav>
  );
}

export default PrimaryNavigation;



