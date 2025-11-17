"use client";

import PageLayout from "@/components/PageLayout";

export default function HouseholdCleaningPage() {
  return (
    <PageLayout>
      {() => (
        <section className="section-shell">
          <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6">
            <header className="space-y-3 text-forest-900">
              <h1 className="text-3xl font-semibold md:text-4xl">Household &amp; interior refresh</h1>
              <p className="text-base leading-relaxed text-ink-600 md:text-lg">
                Transparent cleaning programs coordinated with your garden visits. One team, one schedule, and detailed updates after each appointment to keep interiors organised and welcoming.
              </p>
            </header>
            <ul className="space-y-2 text-sm text-ink-600 md:text-base">
              <li>Weekly and bi-weekly housekeeping with eco-certified products</li>
              <li>Window, patio door, and conservatory glass service</li>
              <li>Deep cleans before events or seasonal changeovers with linen service</li>
            </ul>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
