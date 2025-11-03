import { createBrowserRouter, Outlet } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import PricesPage from "./pages/PricesPage";

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
    ],
  },
]);

export default AppLayout;
