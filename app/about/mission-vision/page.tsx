import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/ui/static-info-page";
import { companyPages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Mission & Vision | MobilityOne",
  description: "MobilityOne mission, vision, and operating focus.",
};

export default function MissionVisionPage() {
  return <StaticInfoPage {...companyPages.missionVision} breadcrumb="About" />;
}
