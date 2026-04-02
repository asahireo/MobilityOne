import type { Metadata } from "next";
import { InvestorRelationsPage } from "@/components/ui/investor-relations";

export const metadata: Metadata = {
  title: "Investor Relations | MobilityOne",
  description:
    "MobilityOne Limited (LSE: MBO.UK) — investor relations, announcements, annual reports, and corporate governance.",
};

export default function InvestorRelations() {
  return <InvestorRelationsPage />;
}
