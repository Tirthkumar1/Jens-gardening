import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import "./index.css";

autoSecureRoot(document.getElementById("app"));

function autoSecureRoot(rootElement: HTMLElement | null) {
  if (!rootElement) {
    throw new Error("Failed to find the app root element.");
  }

  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

