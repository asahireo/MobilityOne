import type { Metadata } from "next";
import { InvestorDocumentPage } from "@/components/ui/investor-document-page";
import { annualReports } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Annual Reports | MobilityOne Investor Relations",
  description: "MobilityOne annual report archive.",
};

export default function AnnualReportsPage() {
  return (
    <InvestorDocumentPage
      eyebrow="Investor Relations"
      title="Annual Reports"
      description="Annual report PDFs from 2007 through 2024."
      documents={annualReports}
    />
  );
}
