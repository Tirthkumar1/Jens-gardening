import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarClock,
  Headset,
  Layers,
  MessageCircle,
  Sprout,
} from "lucide-react";

import type { Highlight } from "../data/siteContent";

type HighlightsSectionProps = {
  heading: string;
  highlights: Highlight[];
  brand: string;
};

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Sprout,
  CalendarClock,
  MessageCircle,
  Layers,
  Headset,
};

function HighlightsSection({ heading, highlights, brand }: HighlightsSectionProps) {
  const [primaryWord, ...rest] = brand.split(" ");
  const secondaryLine = rest.join(" ");

  const midpoint = Math.ceil(highlights.length / 2);
  const leftHighlights = highlights.slice(0, midpoint);
  const rightHighlights = highlights.slice(midpoint);

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-100 via-white to-sand-200"
        style={{ clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 px-4 md:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-forest-500">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-ink-600">
            Trusted expertise, transparent communication, and a team that invests in every space we care for.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div className="grid gap-8 lg:justify-items-end">
            {leftHighlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon] ?? Sprout;
              return (
                <article
                  key={highlight.title}
                  className="relative flex w-full max-w-xl items-start gap-5 rounded-3xl border border-forest-500/15 bg-white/95 p-6 shadow-md shadow-forest-950/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-forest-500/10 text-forest-500">
                    <Icon className="h-9 w-9" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest-500">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold text-forest-900 md:text-xl">{highlight.title}</h3>
                    <p className="text-sm text-ink-600 md:text-base">{highlight.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="relative flex justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white/90 text-forest-700 shadow-hero lg:h-72 lg:w-72">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-3xl font-semibold tracking-[0.4em] text-forest-500">
                  {primaryWord?.slice(0, 1) ?? "B"}
                </span>
                <span className="text-xl font-semibold uppercase tracking-[0.35em] text-forest-700">
                  {primaryWord ?? brand}
                </span>
                {secondaryLine ? (
                  <span className="text-xs font-medium uppercase tracking-[0.4em] text-forest-500">
                    {secondaryLine}
                  </span>
                ) : null}
                <span className="mt-4 text-xs uppercase tracking-[0.3em] text-forest-500">Care Crafted Daily</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:justify-items-start">
            {rightHighlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon] ?? Sprout;
              return (
                <article
                  key={highlight.title}
                  className="relative flex w-full max-w-xl items-start gap-5 rounded-3xl border border-forest-500/15 bg-white/95 p-6 shadow-md shadow-forest-950/10 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-forest-500/10 text-forest-500">
                    <Icon className="h-9 w-9" strokeWidth={1.8} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-forest-500">
                      {String(midpoint + index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-lg font-semibold text-forest-900 md:text-xl">{highlight.title}</h3>
                    <p className="text-sm text-ink-600 md:text-base">{highlight.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightsSection;

