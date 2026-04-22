import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/ui/solution-page";
import { paymentPartnerLogos, solutionPartnerGroups } from "@/lib/site-content";

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
  heroVariant: "e-money",
  productDemos: [
    {
      eyebrow: "Wallet app",
      title: "White-Label eWallet",
      description:
        "A branded mobile wallet stack for QR payments, account balance, transaction history, salary disbursement, and community payment use cases.",
      image: "/assets/img/mobilityone-source/news3.png",
      metrics: ["iOS", "Android", "QR"],
      partners: [
        { name: "Mastercard", logo: "/assets/img/mobilityone-source/mastercard.png", role: "payment-rail" },
        { name: "DuitNow QR", logo: "/assets/img/mobilityone-source/duitnow.png", role: "payment-rail" },
      ],
    },
    {
      eyebrow: "White-label apps",
      title: "Partner Wallet Screens",
      description:
        "Original app banners for OneCENT Plus, MAINS PAY, S4S, and Clicks@Perak from MobilityOne's e-money page.",
      image: "/assets/img/mobilityone-source/OneCENTPlus_Banner.png",
      metrics: ["OneCENT Plus", "MAINS PAY", "S4S", "Clicks@Perak"],
      partners: [
        { name: "OneCENT Plus", logo: "/assets/img/mobilityone-source/latestlogoonecentred.png", role: "wallet" },
        { name: "MAINS PAY", logo: "/assets/img/mobilityone-source/mains-logo.png", role: "wallet" },
      ],
    },
    {
      eyebrow: "Community wallets",
      title: "State and Partner Wallets",
      description:
        "Community e-wallet implementations shown on the MobilityOne e-money page for partner-led payment ecosystems.",
      image: "/assets/img/mobilityone-source/S4S_Banner.png",
      metrics: ["Community payments", "Merchant QR", "Partner brand"],
      partners: [
        { name: "S4S", logo: "/assets/img/mobilityone-source/s4s.png", role: "wallet" },
        { name: "Clicks@Perak", logo: "/assets/img/mobilityone-source/main-logo-clicksperak.png", role: "wallet" },
      ],
    },
    {
      eyebrow: "Platform",
      title: "Other Whitelabel Programs",
      description:
        "Additional whitelabel wallet brands from the original page, including PocketPay, XPAT, OneCall, and related partner programs.",
      image: "/assets/img/mobilityone-source/ocPlus.png",
      metrics: ["PocketPay", "XPAT", "OneCall"],
      partners: [
        { name: "PocketPay", logo: "/assets/img/mobilityone-source/onescholl.png", role: "wallet" },
        { name: "XPAT", logo: "/assets/img/mobilityone-source/xpat.png", role: "wallet" },
      ],
    },
    {
      eyebrow: "Payment rails",
      title: "e-Money Acceptance",
      description:
        "The original e-money page highlights Mastercard approval and DuitNow QR support for card-based and mobile QR payments.",
      image: "/assets/img/mobilityone-source/Mainspay1.png",
      metrics: ["Mastercard", "DuitNow QR", "QR payments"],
      partners: [
        paymentPartnerLogos[1],
        { name: "DuitNow QR", logo: "/assets/img/mobilityone-source/duitnow.png", role: "payment-rail" },
      ],
    },
  ],
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
      name: "MiPAY Mastercard",
      logo: "/assets/img/mobilityone-source/mastercard.png",
      role: "wallet",
      description: "MobilityOne's flagship BNM-approved e-money platform and Mastercard principal issuer solution.",
    },
    {
      name: "OneCENT Plus",
      logo: "/assets/img/mobilityone-source/latestlogoonecentred.png",
      role: "wallet",
      description: "Fresh new look and enhanced mobile app experience with improved UI and exciting new features.",
      url: "https://onecent.my",
    },
    {
      name: "MAINS PAY",
      logo: "/assets/img/mobilityone-source/mains-logo.png",
      role: "wallet",
      description: "Initiative by Majlis Agama Islam Negeri Sembilan — payments and fund management for the community.",
    },
    {
      name: "S4S",
      logo: "/assets/img/mobilityone-source/s4s.png",
      role: "wallet",
      description: "eWallet for Sabah state — seamless and secure QR-based transactions for registered merchants.",
      url: "https://s4s.my/",
    },
    {
      name: "Clicks@Perak",
      logo: "/assets/img/mobilityone-source/main-logo-clicksperak.png",
      role: "wallet",
      description: "Digital payment systems helping build a cashless society in Perak by 2030.",
      url: "https://clicks.perak.my",
    },
    {
      name: "XPAT",
      logo: "/assets/img/mobilityone-source/xpat.png",
      role: "wallet",
      description: "Digital wallet solution for expatriates and international workers in Malaysia.",
    },
    {
      name: "PocketPay",
      logo: "/assets/img/mobilityone-source/onescholl.png",
      role: "wallet",
      description: "Pocket-friendly digital wallet with secure cashless transactions.",
    },
    {
      name: "OneCall",
      logo: "/assets/img/mobilityone-source/ocPlus.png",
      role: "wallet",
      description: "MBP Solutions' branded e-money platform powered by MobilityOne.",
    },
  ],
  partnerGroups: solutionPartnerGroups.filter(({ title }) =>
    ["Gateway Rails"].includes(title),
  ),
};

export default function EMoneyPage() {
  return <SolutionPage data={data} />;
}
