import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/ui/solution-page";
import { paymentPartnerLogos, solutionPartnerGroups } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Payment Gateway | MobilityOne",
  description:
    "M1Pay — MobilityOne's online and mobile payment gateway. FPX, cards, eWallets, 525K+ daily transactions.",
};

const data: SolutionPageData = {
  slug: "payment-gateway",
  tag: "Payment Gateway",
  headline: "EMPOWER YOUR BUSINESS WITH",
  headlineAccent: "M1PAY",
  subtext:
    "Our online and mobile payment gateway offers a seamless, secure, and versatile solution to manage transactions with ease. Designed to support a wide range of payment channels — enabling your customers to pay in the way that suits them best.",
  heroVariant: "payment-gateway",
  productDemos: [
    {
      eyebrow: "Checkout",
      title: "M1Pay Payment Gateway",
      description:
        "Online checkout acceptance for FPX, credit cards, debit cards, DuitNow QR, e-wallets, and international wallet channels.",
      image: "/assets/img/mobilityone-source/M1PAY.png",
      metrics: ["FPX", "Cards", "DuitNow QR"],
      partners: paymentPartnerLogos.slice(0, 4),
    },
    {
      eyebrow: "Merchant tools",
      title: "Gateway Operations",
      description:
        "Merchant-facing transaction monitoring, payment status visibility, and settlement support for high-volume online merchants.",
      image: "/assets/img/mobilityone-source/PG_Slide1.png",
      metrics: ["Transactions", "Settlement", "Reporting"],
      partners: paymentPartnerLogos.slice(4, 8),
    },
    {
      eyebrow: "Wallet rails",
      title: "eWallet and QR Acceptance",
      description:
        "A broad wallet stack covering Malaysian wallets, Chinese wallet rails, card schemes, QR payments, and online banking.",
      image: "/assets/img/mobilityone-source/PG_Slide2.png",
      metrics: ["Wallets", "QR", "Cross-border"],
      partners: paymentPartnerLogos.slice(8, 12),
    },
  ],
  features: [
    {
      title: "Online Banking via FPX",
      description:
        "Real-time bank transfers via Malaysia's Financial Process Exchange (FPX) — the most widely used online payment method in Malaysia, connected to all major local banks.",
      items: [
        "Real-time fund transfer",
        "All major Malaysian banks",
        "Instant payment confirmation",
        "Secure & BNM-regulated",
      ],
    },
    {
      title: "Credit & Debit Card Acceptance",
      description:
        "Accept payments from all major cards including Visa and Mastercard, both locally and internationally. Full 3DS authentication support.",
      items: [
        "Visa & Mastercard",
        "MyDebit",
        "Local & international cards",
        "3D Secure authentication",
      ],
    },
    {
      title: "eWallet Integration",
      description:
        "Cater to the growing number of eWallet users by accepting payments from all major digital wallets. Seamless redirect or in-app payment flow.",
      items: [
        "Boost",
        "Touch 'n Go (TNG)",
        "GrabPay",
        "ShopeePay",
        "DuitNow QR",
        "Alipay, UnionPay, WeChat Pay",
      ],
    },
    {
      title: "Proven at Scale",
      description:
        "M1Pay processes hundreds of thousands of transactions every day, trusted by businesses across Malaysia for reliability, uptime, and speed.",
      items: [
        "525,000+ average daily transactions",
        "2,300,000+ success transactions per year",
        "RM192,000,000+ transaction volume per year",
        "High availability infrastructure",
      ],
    },
  ],
  partners: {
    label: "Trusted By",
    names: ["Mobi", "Revenue Monster", "MPHS", "Global"],
  },
  partnerGroups: solutionPartnerGroups.filter(({ title }) =>
    ["Gateway Rails", "Payment Gateway Clients"].includes(title),
  ),
  externalLink: {
    label: "Learn about M1Pay",
    href: "mailto:bd@mobilityone.com.my?subject=M1Pay%20Enquiry",
  },
};

export default function PaymentGatewayPage() {
  return <SolutionPage data={data} />;
}
