import type { Metadata } from "next";
import { CareerPage } from "@/components/ui/career";

export const metadata: Metadata = {
  title: "Career | MobilityOne",
  description:
    "Join MobilityOne — explore open positions and help us build Malaysia's payment infrastructure.",
};

export default function Career() {
  return <CareerPage />;
}
