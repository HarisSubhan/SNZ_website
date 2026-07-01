import { createRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start";
import { getRouter } from "./router";

// This is used for static builds
export default function StaticApp() {
  return <StartClient router={getRouter()} />;
}

// Hydration for static builds
if (typeof document !== "undefined") {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<StaticApp />);
  }
}