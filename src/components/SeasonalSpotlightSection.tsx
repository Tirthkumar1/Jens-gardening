import type { SeasonalTip } from "../data/siteContent";

type SeasonalSpotlightSectionProps = {
  heading: string;
  tips: SeasonalTip[];
};

function SeasonalSpotlightSection({ heading, tips }: SeasonalSpotlightSectionProps) {
  return (
    <section id="seasonal" className="section-shell">
      <div className="mx-auto w-full max-w-[1400px] space-y-10">
        <h2 className="section-heading">{heading}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {tips.map((tip) => (
            <article
              key={tip.title}
              className="group relative h-72 overflow-hidden rounded-3xl border border-forest-500/15 bg-forest-950/70 shadow-md shadow-forest-950/15 transition hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundImage: `url(${tip.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/75 via-forest-950/40 to-forest-700/30 transition-opacity group-hover:opacity-95" />
              <div className="relative flex h-full flex-col justify-end gap-3 p-6 text-white">
                <h3 className="text-xl font-semibold text-white">{tip.title}</h3>
                <p className="text-sm text-white/90 md:text-base">{tip.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeasonalSpotlightSection;


