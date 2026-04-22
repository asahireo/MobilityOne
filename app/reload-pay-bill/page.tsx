import type { Metadata } from "next";
import { ReloadPayBillDemo } from "@/components/ui/reload-pay-bill-demo";

export const metadata: Metadata = {
  title: "Reload & Pay Bill | MobilityOne",
  description: "Demo reload and pay-bill flow inspired by MobilityOne OnePay.",
};

export default function ReloadPayBillPage() {
  return <ReloadPayBillDemo />;
}
