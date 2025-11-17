"use client";

import { useState } from "react";

import PageLayout from "@/components/PageLayout";

type Opening = {
  title: string;
  summary: string;
  department: string;
  location: string;
};

const openings: Opening[] = [
  {
    title: "Senior Horticulturist (m/w/d)",
    summary:
      "Plan tailored planting concepts, guide our gardening crews, and collaborate closely with our account team.",
    department: "Gartenbau",
    location: "Berlin — Prenzlauer Berg",
  },
  {
    title: "Teamleitung Gartenpflege (m/w/d)",
    summary:
      "Coordinate weekly routes, uphold quality standards, and support new teammates as they onboard in the field.",
    department: "Operations",
    location: "Hamburg — Nord",
  },
  {
    title: "Account Specialist (m/w/d)",
    summary:
      "Serve clients, plan schedules, send photo updates, and prepare proposals for ongoing projects.",
    department: "Kundenbetreuung",
    location: "Muenchen — Zentrum",
  },
];

type ApplicationFormState = {
  isVisible: boolean;
  opening?: Opening;
};

export default function JobsPage() {
  const [formState, setFormState] = useState<ApplicationFormState>({ isVisible: false });

  function handleApply(opening: Opening) {
    setFormState({ isVisible: true, opening });
    const formSection = document.getElementById("job-application");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function handleCloseForm() {
    setFormState({ isVisible: false });
  }

  return (
    <PageLayout>
      {() => (
        <section className="section-shell">
          <div className="mx-auto w-full max-w-[900px] space-y-8">
            <header className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold text-forest-900 md:text-4xl">Join the Bloomscape team</h1>
              <p className="text-base leading-relaxed text-ink-600 md:text-lg">
                We hire people who care deeply for living spaces and the people who enjoy them. Explore our upcoming
                roles and send your resume to jobs@bloomscapeservices.com to receive updates as soon as full postings go
                live.
              </p>
            </header>

            <div className="grid gap-4">
              {openings.map((opening) => (
                <article
                  key={opening.title}
                  className="rounded-3xl border border-forest-500/15 bg-white/95 p-5 shadow-lg shadow-forest-950/10"
                >
                  <h2 className="text-xl font-semibold text-forest-900">{opening.title}</h2>
                  <p className="text-sm text-ink-600 md:text-base">{opening.summary}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-forest-500">
                    {opening.department} · {opening.location}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleApply(opening)}
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-forest-500/30 px-4 py-2 text-sm font-semibold text-forest-700 transition hover:bg-forest-500 hover:text-white"
                  >
                    Jetzt bewerben
                  </button>
                </article>
              ))}
            </div>

            {formState.isVisible && formState.opening ? (
              <section
                id="job-application"
                className="rounded-[2.5rem] border border-forest-500/15 bg-white/95 p-6 shadow-xl shadow-forest-950/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-forest-900">Bewerbung – {formState.opening.title}</h2>
                    <p className="text-sm text-ink-600">
                      Wir sammeln Ihre Angaben zur Durchfuehrung des Bewerbungsprozesses. Alle Felder mit * sind
                      erforderlich.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    className="rounded-full border border-forest-500/20 px-3 py-1 text-xs font-semibold text-forest-700 transition hover:bg-forest-500 hover:text-white"
                  >
                    Formular schliessen
                  </button>
                </div>

                <form className="mt-6 grid gap-4 md:grid-cols-2" aria-label="Bewerbungsformular">
                  <label className="grid gap-1 text-sm font-medium text-ink-900">
                    <span>Vorname *</span>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
                    />
                  </label>
                  <label className="grid gap-1 text-sm font-medium text-ink-900">
                    <span>Nachname *</span>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
                    />
                  </label>
                  <label className="grid gap-1 text-sm font-medium text-ink-900">
                    <span>E-Mail *</span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
                    />
                  </label>
                  <label className="grid gap-1 text-sm font-medium text-ink-900">
                    <span>Telefon *</span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
                    />
                  </label>
                  <label className="grid gap-1 text-sm font-medium text-ink-900 md:col-span-2">
                    <span>Ort / bevorzugter Standort</span>
                    <input
                      name="location"
                      type="text"
                      className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
                    />
                  </label>
                  <label className="grid gap-1 text-sm font-medium text-ink-900 md:col-span-2">
                    <span>Warum passt diese Rolle zu Ihnen?</span>
                    <textarea
                      name="motivation"
                      rows={4}
                      className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
                    />
                  </label>
                  <div className="md:col-span-2 flex flex-wrap gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-forest-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-forest-500 focus-visible:-translate-y-0.5 focus-visible:bg-forest-500"
                    >
                      Bewerbung absenden
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseForm}
                      className="inline-flex items-center justify-center rounded-full border border-forest-500/30 px-5 py-3 text-sm font-semibold text-forest-700 transition hover:bg-forest-500 hover:text-white"
                    >
                      Abbrechen
                    </button>
                  </div>
                </form>
              </section>
            ) : null}
          </div>
        </section>
      )}
    </PageLayout>
  );
}
