import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/ui/static-info-page";
import { investorPages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Corporate Governance | MobilityOne Investor Relations",
  description: "MobilityOne corporate governance summary.",
};

export default function CorporateGovernancePage() {
  return <StaticInfoPage {...investorPages.corporateGovernance} breadcrumb="Investor Relations" />;
}
