"use client";

import PageLayout from "@/components/PageLayout";

export default function ClearanceTransportPage() {
  return (
    <PageLayout>
      {() => (
        <section className="section-shell">
          <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6">
            <header className="space-y-3 text-forest-900">
              <h1 className="text-3xl font-semibold md:text-4xl">Clearance &amp; transport</h1>
              <p className="text-base leading-relaxed text-ink-600 md:text-lg">
                Decluttering projects, move-out preparation, and responsible disposal handled by insured crews. We coordinate elevators, loading zones, and recycling partners so your spaces are ready for their next chapter.
              </p>
            </header>
            <ul className="space-y-2 text-sm text-ink-600 md:text-base">
              <li>Household clearance, basement clean-outs, and green waste removal</li>
              <li>Deliveries and small transports for planters, soil, and event props</li>
              <li>Coordination with donation partners for reusable furnishings</li>
            </ul>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
