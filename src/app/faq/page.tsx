"use client";

import PageLayout from "@/components/PageLayout";

const faqItems = [
  {
    question: "How quickly can you schedule a consultation?",
    answer:
      "We respond within 24 hours on weekdays and typically hold on-site consultations within five business days.",
  },
  {
    question: "Do you offer one-time services?",
    answer:
      "Yes. Seasonal clean-ups, planting days, and event prep are available alongside our subscription care plans.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Our crews operate across the metro area with dedicated teams in North Gardens, City West, and Riverside neighborhoods.",
  },
];

export default function FaqPage() {
  return (
    <PageLayout>
      {() => (
        <section className="section-shell">
          <div className="mx-auto w-full max-w-[900px] space-y-6">
            <header className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold text-forest-900 md:text-4xl">Frequently asked questions</h1>
              <p className="text-base leading-relaxed text-ink-600 md:text-lg">
                Explore quick answers to popular topics. Still curious? Send us a note and we will add your question to this page.
              </p>
            </header>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="overflow-hidden rounded-3xl border border-forest-500/15 bg-white/95 p-5 shadow-md shadow-forest-950/10"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-forest-900">{item.question}</summary>
                  <p className="mt-3 text-sm text-ink-600 md:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
