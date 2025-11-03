import MissionSection from "../components/MissionSection";
import PageLayout from "../components/PageLayout";
import StatsSection from "../components/StatsSection";

function AboutPage() {
  return (
    <PageLayout>
      {(content) => (
        <>
          <section className="section-shell">
            <div className="mx-auto w-full max-w-[900px] space-y-6 text-center">
              <h1 className="text-3xl font-semibold text-forest-900 md:text-4xl">About Bloomscape Garden Services</h1>
              <p className="text-base leading-relaxed text-ink-600 md:text-lg">
                We believe thriving outdoor spaces change how people live. Our teams combine horticulture know-how, interior caretaking, and hospitality-driven service so you can enjoy calm, functional homes with zero guesswork. Learn more about the promise behind every visit below.
              </p>
            </div>
          </section>

          <MissionSection content={content.sections.mission} />
          <StatsSection stats={content.sections.stats.items} />
        </>
      )}
    </PageLayout>
  );
}

export default AboutPage;
