import type { MissionContent } from "@/data/siteContent";

type MissionSectionProps = {
  content: MissionContent;
};

function MissionSection({ content }: MissionSectionProps) {
  const [primaryImage] = content.images;

  return (
    <section id="mission" className="section-shell">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 rounded-[2.5rem] bg-white/80 p-8 shadow-xl shadow-forest-950/10 lg:grid lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-start lg:gap-16 lg:p-12">
        {primaryImage && (
          <figure className="relative w-full overflow-hidden rounded-[2.5rem] shadow-xl shadow-forest-950/20 lg:self-start">
            <img
              src={primaryImage.src}
              alt={primaryImage.alt}
              className="h-full w-full object-cover lg:h-auto lg:max-h-full"
            />
          </figure>
        )}

        <div className="space-y-5 text-ink-600">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-forest-500">
              {content.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold text-forest-900 md:text-4xl">
              {content.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed md:text-lg">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
