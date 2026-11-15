import { createFileRoute } from "@tanstack/react-router";
import { IndomePage } from "@/components/indome-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <IndomePage />;
}
