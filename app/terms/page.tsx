import type { Metadata } from "next";
import { LegalPage, type LegalPageData } from "@/components/ui/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | MobilityOne",
  description: "MobilityOne's terms and conditions governing use of our payment services and website.",
};

const data: LegalPageData = {
  title: "Terms & Conditions",
  tag: "Legal",
  lastUpdated: "1 January 2024",
  pdfUrl: "/assets/upload/User_Terms_and_Conditions_v1.pdf",
  sections: [
    {
      heading: "1. Acceptance of Terms",
      content:
        "By accessing or using any services provided by MobilityOne Sdn Bhd (Company No. 200201033972 / 601637-T) ('MobilityOne'), you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of our services immediately.",
    },
    {
      heading: "2. Services",
      content:
        "MobilityOne provides digital payment infrastructure services including payment terminals, payment gateway (M1Pay), e-money issuance, merchant acquiring, and remittance through our subsidiary OneTransfer Remittance Sdn Bhd. All services are subject to applicable Malaysian laws and regulatory approvals from Bank Negara Malaysia and Mastercard.",
    },
    {
      heading: "3. Eligibility",
      content: [
        "You must be at least 18 years of age to use our services",
        "You must be a resident or registered entity in Malaysia unless otherwise specified",
        "You must provide accurate and complete information during registration",
        "Corporate users must have valid authorisation from their organisation",
      ],
    },
    {
      heading: "4. Account Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You must notify us immediately of any unauthorised access or security breach",
        "You are responsible for all activities that occur under your account",
        "We reserve the right to suspend or terminate accounts that violate these terms",
      ],
    },
    {
      heading: "5. Payment Terms",
      content: [
        "All transactions are subject to applicable fees as communicated at the time of service agreement",
        "Settlement timelines are subject to banking working days and payment network schedules",
        "Chargebacks and disputes are handled in accordance with Mastercard and PayNet rules",
        "MobilityOne reserves the right to hold funds pending fraud investigation",
        "Transaction fees are non-refundable unless required by law",
      ],
    },
    {
      heading: "6. Prohibited Activities",
      content: [
        "Using our services for illegal transactions or money laundering",
        "Processing payments for prohibited goods or services under Malaysian law",
        "Attempting to circumvent security controls or fraud prevention systems",
        "Providing false or misleading information",
        "Reselling our services without written authorisation",
      ],
    },
    {
      heading: "7. Intellectual Property",
      content:
        "All content, trademarks, logos, software, and technology provided by MobilityOne are the exclusive property of MobilityOne Sdn Bhd or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.",
    },
    {
      heading: "8. Limitation of Liability",
      content:
        "To the maximum extent permitted by Malaysian law, MobilityOne shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability for any claim shall not exceed the fees paid by you for the relevant service in the 3 months preceding the claim.",
    },
    {
      heading: "9. Indemnification",
      content:
        "You agree to indemnify and hold harmless MobilityOne, its directors, employees, and partners from any claims, damages, or expenses arising out of your violation of these Terms, your use of our services, or your violation of any third-party rights.",
    },
    {
      heading: "10. Governing Law",
      content:
        "These Terms & Conditions shall be governed by and construed in accordance with the laws of Malaysia. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Malaysia.",
    },
    {
      heading: "11. Amendments",
      content:
        "MobilityOne reserves the right to amend these Terms at any time. Material changes will be communicated via our website or direct notification. Continued use of our services after amendments constitutes acceptance of the updated terms.",
    },
    {
      heading: "12. Contact",
      content:
        "For enquiries regarding these Terms, contact MobilityOne Sdn Bhd at: Wisma LMS, No. 6, Jalan Abdul Rahman Idris, Kg Baru, 53000 Kuala Lumpur, Malaysia. Email: m1enquiry@mobilityone.com.my. Tel: +603-9213 0669.",
    },
  ],
};

export default function TermsPage() {
  return <LegalPage data={data} />;
}
