import { Button } from "@/components/ui/button";
import type { ContactSectionContent, Service } from "../data/siteContent";

import { BsWhatsapp } from "react-icons/bs";
import { Phone } from "lucide-react";

const whatsappBaseUrl = "https://wa.me";

function buildWhatsAppUrl(number: string) {
  const digits = number.replace(/\D/g, "");
  return `${whatsappBaseUrl}/${digits}`;
}

type ContactSectionProps = {
  serviceOptions: Service[];
  content: ContactSectionContent;
};

function ContactSection({ serviceOptions, content }: ContactSectionProps) {
  const whatsappHref = buildWhatsAppUrl(content.whatsappNumber);
  const phoneHref = `tel:${content.phoneNumber.replace(/\s+/g, "")}`;

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto w-full max-w-[1400px] rounded-[2.5rem] bg-gradient-to-br from-forest-100 via-sand-50 to-sand-200 p-8 shadow-xl md:p-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr),minmax(0,1.1fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-forest-900 md:text-4xl">
              {content.heading}
            </h2>
            <p className="text-base text-ink-600 md:text-lg">{content.description}</p>
            <ul className="space-y-3 text-ink-600">
              {content.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-forest-700" aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 rounded-3xl border border-forest-500/20 bg-white/80 p-5 shadow-inner">
              <a
                href={phoneHref}
                className="flex items-center gap-3 text-forest-700 transition hover:text-forest-900"
              >
                <Phone className="h-5 w-5" />
                <span className="font-semibold">{content.phoneLabel}</span>
                <span className="text-sm text-ink-600">{content.phoneNumber}</span>
              </a>
              <a
                href={whatsappHref}
                className="flex items-center gap-3 text-forest-700 transition hover:text-forest-900"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp className="h-5 w-5" />
                <span className="font-semibold">{content.whatsappLabel}</span>
                <span className="text-sm text-ink-600">{content.whatsappNumber}</span>
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-forest-500/15 shadow-lg">
              <iframe
                title={content.map.title}
                src={content.map.embedUrl}
                loading="lazy"
                className="h-64 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            className="grid gap-4 rounded-[1.75rem] bg-white/95 p-6 shadow-xl shadow-forest-950/10"
            aria-label={content.heading}
          >
            <label className="grid gap-2 text-sm font-medium text-ink-900">
              <span>{content.form.nameLabel}</span>
              <input
                name="name"
                type="text"
                placeholder={content.form.namePlaceholder}
                required
                className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink-900">
              <span>{content.form.emailLabel}</span>
              <input
                name="email"
                type="email"
                placeholder={content.form.emailPlaceholder}
                required
                className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink-900">
              <span>{content.form.serviceLabel}</span>
              <select
                name="service"
                defaultValue=""
                className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
              >
                <option value="" disabled>
                  {content.form.servicePlaceholder}
                </option>
                {serviceOptions.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink-900">
              <span>{content.form.notesLabel}</span>
              <textarea
                name="message"
                rows={4}
                placeholder={content.form.notesPlaceholder}
                className="w-full rounded-2xl border border-forest-500/20 bg-white px-4 py-3 text-base text-ink-900 shadow-inner focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-500/40"
              />
            </label>
            <Button
              type="submit"
              size="lg"
              className="rounded-full bg-forest-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-forest-500 focus-visible:-translate-y-0.5 focus-visible:bg-forest-500"
            >
              {content.form.submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

