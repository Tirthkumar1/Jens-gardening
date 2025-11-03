import { createBrowserRouter, Outlet } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import PricesPage from "./pages/PricesPage";
import AdditionalServicesPage from "./pages/services/AdditionalServicesPage";
import ClearanceTransportPage from "./pages/services/ClearanceTransportPage";
import GardenCarePage from "./pages/services/GardenCarePage";
import HouseholdCleaningPage from "./pages/services/HouseholdCleaningPage";
import ServicesOverviewPage from "./pages/services/ServicesOverviewPage";

function AppLayout() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/prices", element: <PricesPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/jobs", element: <JobsPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/services", element: <ServicesOverviewPage /> },
      { path: "/services/garden-care", element: <GardenCarePage /> },
      { path: "/services/household-cleaning", element: <HouseholdCleaningPage /> },
      { path: "/services/clearance-transport", element: <ClearanceTransportPage /> },
      { path: "/services/additional", element: <AdditionalServicesPage /> },
    ],
  },
]);

export default AppLayout;
