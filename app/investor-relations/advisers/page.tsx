import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/ui/static-info-page";
import { investorPages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Advisers | MobilityOne Investor Relations",
  description: "MobilityOne adviser information.",
};

export default function AdvisersPage() {
  return <StaticInfoPage {...investorPages.advisers} breadcrumb="Investor Relations" />;
}
