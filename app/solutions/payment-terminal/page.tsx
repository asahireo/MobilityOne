import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/ui/solution-page";
import { paymentPartnerLogos, solutionPartnerGroups } from "@/lib/site-content";

const reloadTelcoProviders =
  solutionPartnerGroups.find((group) => group.title === "Reload & Telco Providers")?.partners ?? [];

export const metadata: Metadata = {
  title: "Payment Terminal | MobilityOne",
  description:
    "MobilityOne's enterprise payment terminal solutions — accept cards, eWallets, QR codes, VAS payments, and more.",
};

const data: SolutionPageData = {
  slug: "payment-terminal",
  tag: "Payment Terminal",
  headline: "ENTERPRISE PAYMENT",
  headlineAccent: "TERMINALS",
  subtext:
    "Our state-of-the-art payment terminal solution supports a wide range of payment methods, offering your customers a fast, secure, and seamless checkout experience. Fully customizable for retail, restaurants, government, and service-based businesses.",
  heroVariant: "payment-terminal",
  productDemos: [
    {
      eyebrow: "In-store acceptance",
      title: "Smart Payment Terminal",
      description:
        "Counter and mobile terminal acceptance for cards, QR, wallets, bill collection, reloads, and agent banking transactions.",
      image: "/assets/img/mobilityone-source/terminalAcceptance.png",
      metrics: ["Cards", "QR", "Wallets", "VAS"],
      partners: paymentPartnerLogos.slice(1, 5),
    },
    {
      eyebrow: "Merchant operations",
      title: "Terminal Acceptance Flow",
      description:
        "A practical acceptance layer for retail counters, government payment points, bank agents, and recurring collection channels.",
      image: "/assets/img/mobilityone-source/terminal-sunmi.png",
      metrics: ["Receipts", "Settlement", "Reconciliation"],
      partners: paymentPartnerLogos.slice(4, 8),
    },
    {
      eyebrow: "Value added services",
      title: "Pay Bill and Reload Catalog",
      description:
        "OnePay-style product flows connect prepaid reloads, postpaid bills, utilities, entertainment, donations, and other service payments.",
      image: "/assets/img/mobilityone-source/terminal.png",
      metrics: ["Bills", "Reload", "Utilities"],
      partners: reloadTelcoProviders.slice(0, 4),
    },
  ],
  features: [
    {
      title: "Universal Card & eWallet Acceptance",
      description:
        "Accept all major credit and debit cards including Visa, Mastercard, and MyDebit. Enable fast and contactless transactions through leading eWallet services.",
      items: [
        "Visa & Mastercard",
        "MyDebit",
        "Boost",
        "Touch 'n Go (TNG)",
        "GrabPay",
        "ShopeePay",
        "DuitNow QR",
      ],
    },
    {
      title: "Business-Centric Customization",
      description:
        "For corporates requiring payment capabilities for collection or complementary channels. We build solutions around your operational needs.",
      items: [
        "Bill Collection",
        "Loan Collection",
        "E-Voucher Distribution",
        "Local & Federal Government Payment",
        "Other Recurring Payments",
      ],
    },
    {
      title: "Value Added Services (VAS) Payment",
      description:
        "Our VAS feature allows convenient settlement of prepaid reloads, postpaid bills, utility payments, and more — with a seamless and secure payment process.",
      items: [
        "Prepaid mobile reloads",
        "Postpaid bill payments",
        "Utility payments",
        "Charity donations",
        "Entertainment services",
        "IDD/STD payments",
      ],
    },
    {
      title: "Agent Banking System",
      description:
        "Extend banking services to remote and underserved areas through authorized agents. MobilityOne is the Agent Banking provider for Agrobank, supplying terminals and infrastructure for cash withdrawals, fund transfers, deposits, bill payments, and more.",
      items: [
        "Cash withdrawals",
        "Transfer of funds between accounts",
        "Cash deposit",
        "Payment of bills",
        "Mobile top-ups",
        "Financing payment & Mini Statement",
      ],
    },
    {
      title: "IPP — Installment Payment Plan",
      description:
        "Coming soon: allow customers to make purchases using installment plans via their debit cards by simply tapping on the terminal. Higher-value purchases made accessible, with no added complexity for the merchant.",
      items: [
        "Tap-to-pay installment",
        "Debit card based",
        "Merchant gets paid upfront",
        "No complex integration",
      ],
    },
  ],
  partnerGroups: solutionPartnerGroups.filter(({ title }) =>
    ["Payment Solution Clients", "Gateway Rails", "Reload & Telco Providers"].includes(title),
  ),
  partners: {
    label: "Trusted By",
    names: [
      "Agrobank",
      "LDA (Labuan Holding)",
      "Majlis Perbandaran Selayang",
      "WPHT",
      "Majlis Daerah Pekan",
      "Sipitang",
      "Tg Malim",
      "Jerantut",
      "Mahkamah Malaysia",
    ],
  },
};

export default function PaymentTerminalPage() {
  return <SolutionPage data={data} />;
}
