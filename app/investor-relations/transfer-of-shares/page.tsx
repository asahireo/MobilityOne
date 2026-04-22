import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/ui/static-info-page";
import { investorPages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Restrictions on Transfer of Shares | MobilityOne Investor Relations",
  description: "MobilityOne transfer of shares disclosure.",
};

export default function TransferOfSharesPage() {
  return <StaticInfoPage {...investorPages.transferShares} breadcrumb="Investor Relations" />;
}
