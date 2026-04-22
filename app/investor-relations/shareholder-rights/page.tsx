import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/ui/static-info-page";
import { investorPages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Rights of Shareholders | MobilityOne Investor Relations",
  description: "MobilityOne shareholder rights summary.",
};

export default function ShareholderRightsPage() {
  return <StaticInfoPage {...investorPages.shareholderRights} breadcrumb="Investor Relations" />;
}
