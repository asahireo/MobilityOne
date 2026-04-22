import type { Metadata } from "next";
import { InvestorDocumentPage } from "@/components/ui/investor-document-page";
import { announcementArchive } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Announcements | MobilityOne Investor Relations",
  description: "MobilityOne regulatory announcement archive.",
};

export default function AnnouncementsPage() {
  return (
    <InvestorDocumentPage
      eyebrow="Investor Relations"
      title="Announcements"
      description="Regulatory announcements and results PDFs from the MobilityOne public archive."
      documents={announcementArchive}
    />
  );
}
