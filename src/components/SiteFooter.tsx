import { Mail, MapPin, Phone } from "lucide-react";

type SiteFooterProps = {
  brand: string;
  statement: string;
  mission: string;
  quickLinks: { label: string; href: string }[];
  contact: { phone: string; email: string; address: string };
  currentYear: number;
};

function SiteFooter({
  brand,
  statement,
  mission,
  quickLinks,
  contact,
  currentYear,
}: SiteFooterProps) {
  return (
    <footer className="mt-16 bg-forest-900 text-sand-50">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-[1.1fr,0.9fr,1fr] md:px-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-forest-100/80">
            {brand}
          </p>
          <h3 className="text-2xl font-semibold text-white">Our mission</h3>
          <p className="text-sm leading-relaxed text-sand-50/80">{mission}</p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Quick links</h4>
          <ul className="space-y-2 text-sm text-sand-50/80">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition hover:bg-white/10"
                  href={link.href}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-forest-500" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm text-sand-50/80">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <p className="flex items-start gap-3">
            <Phone className="mt-1 h-4 w-4" />
            <a className="hover:text-sand-50 transition" href={`tel:${contact.phone.replace(/\\s+/g, "")}`}>
              {contact.phone}
            </a>
          </p>
          <p className="flex items-start gap-3">
            <Mail className="mt-1 h-4 w-4" />
            <a className="hover:text-sand-50 transition" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p className="flex items-start gap-3">
            <MapPin className="mt-1 h-4 w-4" />
            <span>{contact.address}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-forest-100/20 px-6 py-6 text-center text-xs text-sand-50/60 md:px-12">
        &copy; {currentYear} {brand}. {statement}
      </div>
    </footer>
  );
}

export default SiteFooter;
