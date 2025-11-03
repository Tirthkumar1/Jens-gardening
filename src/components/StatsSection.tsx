import { useEffect, useMemo, useRef, useState } from "react";

import type { Stat } from "../data/siteContent";

type StatsSectionProps = {
  stats: Stat[];
};

const formatter = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 0,
});

function StatsSection({ stats }: StatsSectionProps) {
  const targets = useMemo(() => stats.map((stat) => stat.value), [stats]);
  const [displayValues, setDisplayValues] = useState(() => targets.map(() => 0));
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setDisplayValues(targets.map(() => 0));
    setHasAnimated(false);
  }, [targets]);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current) {
            setIsInView(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500;
    const startValues = displayValues.slice();
    const startTime = performance.now();

    let animationFrame: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);

      setDisplayValues(
        targets.map((target, index) =>
          Math.round(startValues[index] + (target - startValues[index]) * eased)
        )
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasAnimated, targets]);

  if (stats.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="section-shell bg-white/80 backdrop-blur-sm"
      aria-label="Service impact"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 rounded-[2.5rem] bg-forest-100/70 p-6 shadow-lg shadow-forest-950/10 md:p-10">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={`${stat.description}-${stat.value}`}
              className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-white/80 px-6 py-8 text-center shadow-md shadow-forest-950/10"
            >
              <p className="text-3xl font-semibold text-forest-500 md:text-4xl">
                {stat.prefix ? (
                  <span className="mr-1 text-forest-500">{stat.prefix}</span>
                ) : null}
                {formatter.format(displayValues[index] ?? 0)}
                {stat.suffix ? (
                  <span className="ml-1 text-forest-500">{stat.suffix}</span>
                ) : null}
              </p>
              <p className="text-sm font-medium text-ink-900 md:text-base">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
