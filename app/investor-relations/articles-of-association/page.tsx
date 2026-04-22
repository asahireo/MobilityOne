import type { Metadata } from "next";
import { InvestorDocumentPage } from "@/components/ui/investor-document-page";
import { investorDocuments } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Article of Association | MobilityOne Investor Relations",
  description: "MobilityOne article of association document.",
};

export default function ArticlesOfAssociationPage() {
  return (
    <InvestorDocumentPage
      eyebrow="Investor Relations"
      title="Article of Association"
      description="Constitutional document PDF from the public MobilityOne archive."
      documents={investorDocuments.filter((document) => document.category === "Constitutional Document")}
    />
  );
}
