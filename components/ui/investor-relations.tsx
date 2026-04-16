"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

const announcements = [
  { date: "24 Mar 2026", title: "Update On Proposed Joint Venture with Super Apps" },
  { date: "16 Mar 2026", title: "Update in relation to Sincere Acres Sdn Bhd" },
  { date: "10 Mar 2026", title: "Update On Proposed Joint Venture with Super Apps" },
  { date: "22 Jan 2026", title: "Mobile Money transfer collaboration with BKASH" },
  { date: "31 Dec 2025", title: "Conditional approval re. Islamic digital banking" },
  { date: "26 Sept 2025", title: "Unaudited interim results for the six months ended 30 June 2025" },
  { date: "8 Jul 2025", title: "Final Results And Restoration In Trading" },
  { date: "27 Sept 2024", title: "Unaudited interim results for the six months ended 30 June 2024" },
  { date: "20 Aug 2024", title: "Final results and restoration in trading" },
  { date: "26 June 2023", title: "New joint venture to explore business opportunities from the Kingdom of Saudi Arabia" },
];

const irLinks = [
  { label: "Announcements", desc: "Latest regulatory announcements on AIM" },
  { label: "Advisers", desc: "Our nominated adviser and broker details" },
  { label: "Capital Structure", desc: "Share capital and structure" },
  { label: "Annual Reports", desc: "Full-year financial results" },
  { label: "Circulars & Other Reports", desc: "Circulars and shareholder documents" },
  { label: "Admission Document", desc: "Original AIM admission documentation" },
  { label: "Article of Association", desc: "Constitutional documents" },
  { label: "Corporate Governance", desc: "Board and governance structure" },
  { label: "Restriction on Transfer of Shares", desc: "Share transfer restrictions" },
  { label: "Rights of Shareholders", desc: "Shareholder rights and protections" },
];

function PageHero() {
  return (
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
          <span className="text-white">Investor Relations</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Investor Relations</p>
        <h1
          className="mx-auto mt-6 max-w-5xl text-4xl font-bold uppercase tracking-tight leading-tight text-white md:text-6xl lg:text-7xl"
        >
          MOBILITYONE <span className="text-[var(--brand-gold)]">LIMITED</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          MobilityOne Limited (LSE: MBO.UK) is incorporated in Jersey and admitted to trading on AIM of the London Stock Exchange. One of Malaysia&apos;s leading solution providers for electronic transactions and payments.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.londonstockexchange.com/stock/MBO/mobilityone-limited"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-8 py-4 text-sm font-bold text-black transition hover:bg-[var(--brand-amber)] hover:shadow-[0_0_40px_rgba(253,212,72,0.4)]"
          >
            View on LSE <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="mailto:m1enquiry@mobilityone.com.my?subject=Investor%20Relations%20Enquiry"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:border-[var(--brand-gold)]"
          >
            IR Enquiry <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function StockInfo() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 pb-20 md:px-10 md:pb-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--brand-gold)]/8 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Stock", value: "MBO.UK" },
            { label: "Exchange", value: "LSE AIM" },
            { label: "Incorporated", value: "Jersey" },
            { label: "Updated", value: "Jan 2024" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 text-center"
            >
              <p className="font-display text-3xl font-bold text-[var(--brand-gold)]">{item.value}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IrDocuments() {
  return (
    <section className="relative z-20 w-full rounded-t-[2.5rem] bg-white px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">Documentation</p>
          <h2
            className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-5xl"
          >
            IR <span className="text-[var(--brand-amber)]">RESOURCES</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {irLinks.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex items-start gap-4 rounded-[1.5rem] border border-gray-100 bg-[#F8F9FA] p-6 transition hover:border-[var(--brand-gold)]/30 hover:bg-[var(--brand-gold)]/5"
            >
              <div className="flex-1">
                <h3 className="font-bold text-black">{item.label}</h3>
                <p className="mt-1 text-xs text-black/50">{item.desc}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--brand-olive)] transition group-hover:text-[var(--brand-amber)]" />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-black/40">
          Full IR documents are available on the{" "}
          <a
            href="https://www.londonstockexchange.com/stock/MBO/mobilityone-limited"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--brand-olive)] underline underline-offset-2"
          >
            London Stock Exchange website
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function Announcements() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-[var(--brand-olive)]/10 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Latest</p>
          <h2
            className="mt-6 text-4xl font-bold uppercase tracking-tight text-white md:text-5xl"
          >
            ANNOUNCEMENTS
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/8">
          {announcements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group flex items-start justify-between gap-6 py-5 transition hover:bg-white/[0.02] -mx-4 px-4 rounded-2xl"
            >
              <div>
                <p className="text-xs font-semibold text-[var(--brand-gold)]">{a.date}</p>
                <p className="mt-1 text-sm leading-6 text-white/80 group-hover:text-white">{a.title}</p>
              </div>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/20 transition group-hover:text-[var(--brand-gold)]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.londonstockexchange.com/stock/MBO/mobilityone-limited/news-and-announcements"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-gold)] transition hover:text-[var(--brand-amber)]"
          >
            View all announcements on LSE <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function InvestorRelationsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[var(--brand-gold)]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-[var(--brand-olive)]/20 blur-[120px]" />
      <Nav />
      <PageHero />
      <StockInfo />
      <IrDocuments />
      <Announcements />
      <Footer />
    </div>
  );
}
