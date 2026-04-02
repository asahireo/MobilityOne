import type { Metadata } from "next";
import { NewsPage } from "@/components/ui/news";

export const metadata: Metadata = {
  title: "News & Updates | MobilityOne",
  description: "Latest news, updates, and announcements from MobilityOne.",
};

export default function News() {
  return <NewsPage />;
}
