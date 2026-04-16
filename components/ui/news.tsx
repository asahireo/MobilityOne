"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { assetPath } from "@/lib/asset-path";

const articles = [
  {
    title: "M1 Collaboration with MAINS",
    category: "Community",
    date: "Feb 14, 2025",
    excerpt:
      "School supplies assistance to selected children in cooperation with the National Anti Drugs Agency (AADK) Negeri Sembilan at Hari Hari Clothing Center Senawang.",
    image: assetPath("/assets/img/news1.jpg"),
  },
  {
    title: "M1 Career Fair",
    category: "MobilityOne",
    date: "Feb 27, 2025",
    excerpt:
      "MobilityOne joined MyFutureJobs Career Fair at Royal Chulan Damansara, connecting with Malaysia's next generation of fintech talent.",
    image: assetPath("/assets/img/news2.jpg"),
  },
  {
    title: "MiPAY New Facelift",
    category: "Product",
    date: "Oct 29, 2024",
    excerpt:
      "MiPAY receives a fresh new look for a better user experience — improved UI, faster performance, and exciting new features.",
    image: assetPath("/assets/img/news3.png"),
  },
];

const categoryColors: Record<string, string> = {
  Community: "bg-[var(--brand-olive)]/15 text-[var(--brand-moss)]",
  MobilityOne: "bg-[var(--brand-gold)]/15 text-[var(--brand-amber)]",
  Product: "bg-white/10 text-white/70",
};

export function NewsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[var(--brand-gold)]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-[var(--brand-olive)]/20 blur-[120px]" />

      <Nav />

      {/* Hero */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-32 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <nav className="mb-8 flex items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">News & Updates</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Latest</p>
          <h1
            className="mx-auto mt-6 text-4xl font-bold uppercase tracking-tight leading-tight text-white md:text-6xl"
          >
            NEWS & <span className="text-[var(--brand-gold)]">UPDATES</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
            The latest news, product updates, and announcements from MobilityOne.
          </p>
        </motion.div>
      </section>

      {/* Articles */}
      <section className="relative z-20 w-full rounded-t-[2.5rem] bg-white px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-[#F8F9FA]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${categoryColors[article.category] ?? "bg-black/5 text-black/50"}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-black/40">{article.date}</span>
                  </div>
                  <h2 className="text-lg font-black leading-tight">{article.title}</h2>
                  <p className="text-sm leading-6 text-black/60">{article.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center text-sm text-black/40"
          >
            More news coming soon. For press enquiries contact{" "}
            <a href="mailto:m1enquiry@mobilityone.com.my" className="font-semibold text-[var(--brand-olive)] underline underline-offset-2">
              m1enquiry@mobilityone.com.my
            </a>
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
