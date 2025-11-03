import PageLayout from "../../components/PageLayout";

function GardenCarePage() {
  return (
    <PageLayout>
      {() => (
        <section className="section-shell">
          <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6">
            <header className="space-y-3 text-forest-900">
              <h1 className="text-3xl font-semibold md:text-4xl">Garden care & seasonal planting</h1>
              <p className="text-base leading-relaxed text-ink-600 md:text-lg">
                Bed preparation, precision pruning, soil health, and colorful planting plans tailored to your outdoor spaces. We create rotational planting schedules so containers look fresh, perennials stay healthy, and edible gardens produce reliable harvests.
              </p>
            </header>
            <ul className="space-y-2 text-sm text-ink-600 md:text-base">
              <li>Soil testing, compost amendments, mulching, and irrigation checks</li>
              <li>Hedge training, fruit tree care, rose programs, and pollinator corridors</li>
              <li>Balcony and rooftop micro-garden design with ongoing plant sourcing</li>
            </ul>
          </div>
        </section>
      )}
    </PageLayout>
  );
}

export default GardenCarePage;
