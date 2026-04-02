import type { Metadata } from "next";
import { LegalPage, type LegalPageData } from "@/components/ui/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | MobilityOne",
  description: "MobilityOne's privacy policy — how we collect, use, and protect your personal data under Malaysia's PDPA 2010.",
};

const data: LegalPageData = {
  title: "Privacy Policy",
  tag: "Legal",
  lastUpdated: "27 November 2020",
  pdfUrl: "/assets/upload/Privacy_Policy_Published_271120.pdf",
  sections: [
    {
      heading: "1. Introduction",
      content:
        "MobilityOne Sdn Bhd (Company No. 200201033972 / 601637-T) ('MobilityOne', 'we', 'us', or 'our') is committed to protecting your personal data. This Privacy Policy describes how we collect, use, disclose, and safeguard your information in accordance with Malaysia's Personal Data Protection Act 2010 (PDPA).",
    },
    {
      heading: "2. Personal Data We Collect",
      content: [
        "Identity data: name, NRIC/passport number, date of birth",
        "Contact data: address, email address, telephone number",
        "Financial data: bank account details, payment card information, transaction history",
        "Technical data: IP address, device identifiers, browser type, usage data",
        "Transaction data: details of products and services you have obtained from us",
        "Communications data: your preferences in receiving communications from us",
      ],
    },
    {
      heading: "3. How We Collect Your Data",
      content: [
        "Directly from you when you register for our services, complete forms, or contact us",
        "Automatically through our websites, mobile apps, and payment platforms",
        "From third parties such as banks, payment networks, and identity verification providers",
        "From publicly available sources in compliance with applicable law",
      ],
    },
    {
      heading: "4. How We Use Your Data",
      content: [
        "To provide and manage your account and our payment services",
        "To process transactions and send related notices",
        "To comply with legal and regulatory obligations (BNM, Mastercard, PayNet)",
        "To detect, prevent, and investigate fraud and security incidents",
        "To improve our products, services, and customer experience",
        "To send marketing communications where you have consented",
        "To respond to enquiries and provide customer support",
      ],
    },
    {
      heading: "5. Disclosure of Your Data",
      content: [
        "Payment networks: Mastercard, PayNet, FPX — as required to process transactions",
        "Regulators: Bank Negara Malaysia and other competent authorities as required by law",
        "Service providers: IT, hosting, analytics, and customer support partners under strict confidentiality obligations",
        "Group companies: our subsidiaries including OneTransfer Remittance Sdn Bhd",
        "We do not sell your personal data to third parties",
      ],
    },
    {
      heading: "6. Data Retention",
      content:
        "We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including satisfying legal, regulatory, accounting, or reporting requirements. For financial transaction records, we retain data for a minimum of 7 years as required under Malaysian law.",
    },
    {
      heading: "7. Your Rights Under PDPA",
      content: [
        "Right to access: request a copy of the personal data we hold about you",
        "Right to correction: request correction of inaccurate or incomplete data",
        "Right to withdraw consent: withdraw consent to processing where consent is the basis",
        "Right to limit processing: request that we limit processing in certain circumstances",
        "To exercise your rights, contact us at m1enquiry@mobilityone.com.my",
      ],
    },
    {
      heading: "8. Cookies & Tracking",
      content:
        "Our websites and apps use cookies and similar technologies to enhance your experience, analyse usage, and support security. You may control cookie settings through your browser. Disabling cookies may affect the functionality of our services.",
    },
    {
      heading: "9. Security",
      content:
        "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. Our payment systems are PCI DSS compliant.",
    },
    {
      heading: "10. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Material changes will be notified via our website or by direct communication. Continued use of our services after changes constitutes acceptance of the updated policy.",
    },
    {
      heading: "11. Contact Us",
      content:
        "For privacy-related enquiries or to exercise your rights, contact MobilityOne Sdn Bhd at: Wisma LMS, No. 6, Jalan Abdul Rahman Idris, Kg Baru, 53000 Kuala Lumpur, Malaysia. Email: m1enquiry@mobilityone.com.my. Tel: +603-9213 0669.",
    },
  ],
};

export default function PrivacyPage() {
  return <LegalPage data={data} />;
}
