import type { Metadata } from "next";
import { InvestorDocumentPage } from "@/components/ui/investor-document-page";
import { investorDocuments } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Admission Document | MobilityOne Investor Relations",
  description: "MobilityOne admission document.",
};

export default function AdmissionDocumentPage() {
  return (
    <InvestorDocumentPage
      eyebrow="Investor Relations"
      title="Admission Document"
      description="Original AIM admission document link."
      documents={investorDocuments.filter((document) => document.category === "Admission")}
    />
  );
}
