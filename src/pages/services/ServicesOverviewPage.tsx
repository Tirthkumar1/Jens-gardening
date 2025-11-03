import PageLayout from "../../components/PageLayout";
import { serviceDetailRouteMap } from "../../data/content/services";

function ServicesOverviewPage() {
  return (
    <PageLayout>
      {(content) => {
        const services = content.sections.services.items;
        const heroCopy = content.sections.mission.paragraphs[0];
        const isGerman = content.navigation.languageToggle.label === "English";
        const detailLabel = isGerman ? "Mehr erfahren" : "Discover details";

        return (
          <div className="flex flex-col gap-16 pb-16 pt-12">
            <section className="section-shell">
              <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 text-center text-forest-900">
                <p className="text-xs uppercase tracking-[0.4em] text-forest-500 md:text-sm">
                  {content.hero.eyebrow}
                </p>
                <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                  {content.sections.services.heading}
                </h1>
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-600 md:text-lg">
                  {heroCopy}
                </p>
              </div>
            </section>

            <section className="section-shell">
              <div className="mx-auto grid w-full max-w-[1400px] gap-6 md:grid-cols-2 xl:grid-cols-4">
                {services.map((service) => {
                  const href = serviceDetailRouteMap[service.visualKey];
                  return (
                    <article
                      key={service.title}
                      className="group relative overflow-hidden rounded-3xl shadow-card-lg"
                    >
                      <img
                        src={service.imageUrl}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/30 via-forest-950/55 to-forest-950/85" />

                      <div className="relative flex h-full flex-col gap-4 p-8 text-white">
                        <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
                        <p className="text-sm text-white/85 md:text-base">{service.description}</p>
                        <a
                          className="group/cta mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sand-200 transition hover:text-white focus-visible:text-white md:text-base"
                          href={href}
                        >
                          {detailLabel}
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M4 8h8M8 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        );
      }}
    </PageLayout>
  );
}

export default ServicesOverviewPage;
