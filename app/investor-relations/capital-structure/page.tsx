import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/ui/static-info-page";
import { investorPages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Capital Structure | MobilityOne Investor Relations",
  description: "MobilityOne capital structure summary.",
};

export default function CapitalStructurePage() {
  return <StaticInfoPage {...investorPages.capitalStructure} breadcrumb="Investor Relations" />;
}
