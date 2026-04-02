import type { Metadata } from "next";
import { AboutPage } from "@/components/ui/about";

export const metadata: Metadata = {
  title: "About Us | MobilityOne",
  description:
    "Learn about MobilityOne's mission, vision, leadership team, and regulatory standing as Malaysia's trusted payment infrastructure provider.",
};

export default function About() {
  return <AboutPage />;
}
