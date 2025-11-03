import type { Testimonial } from "../data/siteContent";

type TestimonialsSectionProps = {
  heading: string;
  citeSeparator: string;
  testimonials: Testimonial[];
};

function TestimonialsSection({ heading, citeSeparator, testimonials }: TestimonialsSectionProps) {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-shell bg-forest-100">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10">
        <h2 className="section-heading">{heading}</h2>
        <div className="group/testimonials relative overflow-hidden rounded-[2.5rem] bg-white/60 p-4 shadow-lg shadow-forest-950/10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-forest-100 via-forest-100/80 to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-forest-100 via-forest-100/80 to-transparent"
            aria-hidden="true"
          />
          <div className="flex w-max min-w-full gap-6 animate-testimonials group-hover/testimonials:[animation-play-state:paused]">
            {marqueeItems.map((testimonial, index) => (
              <blockquote
                key={`${testimonial.name}-${index}`}
                className="flex min-w-[260px] max-w-xs flex-col justify-between gap-6 rounded-3xl border border-forest-500/15 bg-white/95 px-6 py-8 text-left shadow-md shadow-forest-950/10 md:min-w-[320px] md:max-w-sm"
              >
                <p className="text-sm italic text-ink-600 md:text-base">"{testimonial.quote}"</p>
                <cite className="text-sm font-semibold text-forest-700 not-italic">
                  {testimonial.name}
                  {citeSeparator}
                  {testimonial.location}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
