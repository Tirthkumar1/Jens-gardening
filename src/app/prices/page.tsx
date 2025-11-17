"use client";

import PageLayout from "@/components/PageLayout";

const priceTiers = [
  {
    name: "Seasonal refresh",
    price: "$189",
    cadence: "one-time visit",
    details: [
      "Two horticulture specialists on-site for 3 hours",
      "Spring or fall bed clean-up, pruning, and seasonal planting",
      "Detailed notes with next-step recommendations within 24 hours",
    ],
  },
  {
    name: "Care plan",
    price: "$349",
    cadence: "monthly maintenance",
    details: [
      "Dedicated crew lead with rotating support team",
      "Lawn and garden care, patio detailing, and container refreshes",
      "Priority scheduling plus bi-monthly photo updates",
    ],
  },
  {
    name: "Estate concierge",
    price: "Custom",
    cadence: "multi-property or commercial",
    details: [
      "Tailored scopes across landscaping, housekeeping, and event prep",
      "On-call account specialist for rapid response",
      "Quarterly enhancement planning and budget reporting",
    ],
  },
];

export default function PricesPage() {
  return (
    <PageLayout>
      {() => (
        <section className="section-shell">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold text-forest-900 md:text-4xl">
                Transparent pricing for every property
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-600 md:text-lg">
                Choose the level of care your home or business needs. Every plan includes a dedicated specialist, proactive recommendations, and easy communication through your preferred channel.
                Request a consultation to mix and match services or add upgrades like irrigation support and holiday styling.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {priceTiers.map((tier) => (
                <article
                  key={tier.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-forest-500/15 bg-white/95 p-6 shadow-lg shadow-forest-950/10"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-forest-900">{tier.name}</h2>
                    <p className="text-3xl font-semibold text-forest-700">
                      {tier.price}
                      <span className="text-sm font-normal text-ink-600"> – {tier.cadence}</span>
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-ink-600">
                    {tier.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-forest-500" aria-hidden />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className="mt-auto inline-flex items-center justify-center rounded-full border border-forest-500/30 px-4 py-2 text-sm font-semibold text-forest-700 transition hover:bg-forest-500 hover:text-white"
                  >
                    Request tailored plan
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
