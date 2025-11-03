import PageLayout from "../../components/PageLayout";

function AdditionalServicesPage() {
  return (
    <PageLayout>
      {() => (
        <section className="section-shell">
          <div className="mx-auto flex w-full max-w-[900px] flex-col gap-6">
            <header className="space-y-3 text-forest-900">
              <h1 className="text-3xl font-semibold md:text-4xl">Additional property services</h1>
              <p className="text-base leading-relaxed text-ink-600 md:text-lg">
                Winter services, minor repairs, and project coordination bundled with your garden visits. Keep entrances safe, lighting functional, and seasonal decor on schedule without juggling multiple vendors.
              </p>
            </header>
            <ul className="space-y-2 text-sm text-ink-600 md:text-base">
              <li>Snow removal, gritting, and storm response for paths and driveways</li>
              <li>Minor carpentry, irrigation troubleshooting, and outdoor lighting upkeep</li>
              <li>Holiday styling, planter installations, and vendor management</li>
            </ul>
          </div>
        </section>
      )}
    </PageLayout>
  );
}

export default AdditionalServicesPage;
