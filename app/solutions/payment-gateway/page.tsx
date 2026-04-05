import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/ui/solution-page";

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
  externalLink: {
    label: "Learn about M1Pay",
    href: "mailto:bd@mobilityone.com.my?subject=M1Pay%20Enquiry",
  },
};

export default function PaymentGatewayPage() {
  return <SolutionPage data={data} />;
}
