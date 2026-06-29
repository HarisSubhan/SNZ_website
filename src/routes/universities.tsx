import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/universities")({
  beforeLoad: () => {
    throw redirect({ to: "/study-abroad", hash: "universities" });
  },
});