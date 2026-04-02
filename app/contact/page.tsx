import type { Metadata } from "next";
import { ContactPage } from "@/components/ui/contact";

export const metadata: Metadata = {
  title: "Contact Us | MobilityOne",
  description:
    "Get in touch with MobilityOne. Reach our General Enquiry, Transaction & Payment, or Business Development teams.",
};

export default function Contact() {
  return <ContactPage />;
}
