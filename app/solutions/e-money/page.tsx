import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/ui/solution-page";

export const metadata: Metadata = {
  title: "E-Money Solution | MobilityOne",
  description:
    "MobilityOne's BNM-approved, Mastercard-recognized e-money platform. White-label e-wallet solutions with 7+ live partners.",
};

const data: SolutionPageData = {
  slug: "e-money",
  tag: "E-Money Solution",
  headline: "E-MONEY SOLUTIONS POWERED BY",
  headlineAccent: "TRUST",
  subtext:
    "Our e-Money platform is fully approved by Mastercard and recognized by Bank Negara Malaysia (BNM). Built to drive financial inclusion, promote digital payments, and support targeted communities through secure, cashless transactions.",
  heroImage: "/assets/img/emoney_modern.png",
  features: [
    {
      title: "Card-Based & QR Payments",
      description:
        "Built with both card-based (contactless) and mobile app (QR code) capabilities, ensuring seamless real-time transactions across urban centres and community ecosystems. Supports DuitNow QR at participating merchants.",
      items: [
        "Mastercard contactless card",
        "Mobile QR code payments",
        "DuitNow QR support",
        "Real-time transaction processing",
        "NFC / tap-to-pay",
      ],
    },
    {
      title: "Salary Disbursement — Ministry Approved",
      description:
        "MiPAY eWallet has been approved by the Ministry of Human Resources to pay employee salaries via e-wallet, effective 1 August 2024. Ideal for employers managing salary payments for foreign workers who face difficulties opening a bank account.",
      items: [
        "Ministry of Human Resources approved",
        "Employee salary disbursement",
        "Foreign worker payroll support",
        "Compliant with Malaysian regulations",
      ],
    },
    {
      title: "White-Label Partnership Program",
      description:
        "Our white-label program allows partners to go to market quickly with a proven, secure, and fully managed e-Money platform under their own brand — with full mobile app, card issuance, merchant QR, and back-office portal.",
      items: [
        "Branded mobile app (iOS & Android)",
        "Mastercard card issuance",
        "Merchant QR network",
        "Back-office & reconciliation portal",
        "Compliance & regulatory support",
        "Fast time-to-market",
      ],
    },
  ],
  whitelabelPartners: [
    {
      name: "OneCENT Plus",
      description: "Fresh new look and enhanced mobile app experience with improved UI and exciting new features.",
      url: "https://onecent.my",
    },
    {
      name: "MAINS PAY",
      description: "Initiative by Majlis Agama Islam Negeri Sembilan — payments and fund management for the community.",
    },
    {
      name: "S4S",
      description: "eWallet for Sabah state — seamless and secure QR-based transactions for registered merchants.",
      url: "https://s4s.my/",
    },
    {
      name: "Clicks@Perak",
      description: "Digital payment systems helping build a cashless society in Perak by 2030.",
      url: "https://clicks.perak.my",
    },
    {
      name: "XPAT",
      description: "Digital wallet solution for expatriates and international workers in Malaysia.",
    },
    {
      name: "PocketPay",
      description: "Pocket-friendly digital wallet with secure cashless transactions.",
    },
    {
      name: "OneCall",
      description: "MBP Solutions' branded e-money platform powered by MobilityOne.",
    },
  ],
};

export default function EMoneyPage() {
  return <SolutionPage data={data} />;
}
