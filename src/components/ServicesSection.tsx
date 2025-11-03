import { Link } from "react-router-dom";

import { serviceDetailRouteMap } from "../data/content/services";
import type { Service } from "../data/siteContent";

type ServicesSectionProps = {
  heading: string;
  services: Service[];
};

const serviceIconMap: Record<Service["visualKey"], string> = {
  garden: "GC",
  cleaning: "HC",
  transport: "CT",
  additional: "AS",
};

function ServicesSection({ heading, services }: ServicesSectionProps) {
  return (
    <section id="services" className="section-shell">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10">
        <h2 className="section-heading">{heading}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
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
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-xs font-semibold tracking-[0.35em] text-white shadow-lg">
                  {serviceIconMap[service.visualKey]}
                </span>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-white/85 md:text-base">{service.description}</p>
                {(() => {
                  const detailHref = serviceDetailRouteMap[service.visualKey] ?? "#contact";
                  const isInternalRoute = detailHref.startsWith("/");
                  const content = (
                    <>
                      {service.ctaLabel}
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
                    </>
                  );

                  const commonClasses =
                    "group/cta mt-auto inline-flex items-center gap-2 font-semibold text-sand-200 transition hover:text-white focus-visible:text-white";

                  return isInternalRoute ? (
                    <Link to={detailHref} className={commonClasses}>
                      {content}
                    </Link>
                  ) : (
                    <a href={detailHref} className={commonClasses}>
                      {content}
                    </a>
                  );
                })()}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

