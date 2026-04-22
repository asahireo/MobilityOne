import type { Metadata } from "next";
import { InvestorDocumentPage } from "@/components/ui/investor-document-page";
import { circularReports } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Circulars & Other Reports | MobilityOne Investor Relations",
  description: "MobilityOne circulars and half-year reports.",
};

export default function CircularsPage() {
  return (
    <InvestorDocumentPage
      eyebrow="Investor Relations"
      title="Circulars & Other Reports"
      description="Circulars, half-year reports, and other shareholder document PDFs."
      documents={circularReports}
    />
  );
}
