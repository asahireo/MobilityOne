import type { Metadata } from "next";
import { SolutionPage, type SolutionPageData } from "@/components/ui/solution-page";

export const metadata: Metadata = {
  title: "Remittance | MobilityOne",
  description:
    "OneTransfer — MobilityOne's BNM-licensed money transfer service. 6 branches, mobile app, cross-border remittance.",
};

const data: SolutionPageData = {
  slug: "remittance",
  tag: "Remittance",
  heroGlobe: true,
  headline: "SECURE CROSS-BORDER",
  headlineAccent: "MONEY TRANSFER",
  subtext:
    "OneTransfer Remittance Sdn Bhd is a wholly-owned subsidiary of MobilityOne Sdn Bhd, operating as a licensed Money Transfer Operator under regulation by Bank Negara Malaysia (BNM). Providing accessible, reliable, and compliant remittance services across Malaysia and beyond.",
  features: [
    {
      title: "Class B Licensed Money Services Business",
      description:
        "OneTransfer is officially classified as a Class B MSB by Bank Negara Malaysia, authorizing us to offer money remittance services in accordance with regulatory standards. This classification reflects our commitment to operational integrity and customer security.",
      items: [
        "BNM Class B MSB license",
        "Full AML/CFT compliance",
        "Regulated cross-border transfers",
        "Customer data protection",
      ],
    },
    {
      title: "6 Physical Branch Network",
      description:
        "We operate through a network of six physical branch locations across Malaysia, providing accessible over-the-counter remittance services for customers who prefer in-person transactions.",
      items: [
        "6 branch locations nationwide",
        "Over-the-counter service",
        "Trained compliance officers",
        "Multiple payout corridors",
      ],
    },
    {
      title: "Authorised Digital Money Transfer",
      description:
        "OneTransfer e-Wallet is an authorized digital money transfer solution. Users can conveniently transfer money to multiple countries directly from a single e-wallet — making cross-border transactions easier and more secure.",
      items: [
        "Mobile app transfers",
        "Multi-country corridors",
        "Real-time transfer tracking",
        "Competitive exchange rates",
      ],
    },
    {
      title: "Global Partner Network",
      description:
        "Backed by trusted global and regional remittance partners, OneTransfer delivers reliable payout across key corridors including Indonesia, Bangladesh, Nepal, Philippines, and more.",
      items: [
        "MoneyGram — global network",
        "Tranglo — cross-border infrastructure",
        "BNI — Indonesia corridor",
        "NBL, MTB, City Express — other corridors",
      ],
    },
  ],
  partners: {
    label: "Our Remittance Partners",
    names: ["MoneyGram", "Tranglo", "BNI", "NBL", "MTB", "City Express"],
  },
  externalLink: {
    label: "Visit OneTransfer",
    href: "https://www.onetransfer.com.my",
  },
};

export default function RemittancePage() {
  return <SolutionPage data={data} />;
}
