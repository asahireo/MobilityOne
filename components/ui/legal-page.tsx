"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

export interface LegalSection {
  heading: string;
  content: string | string[];
}

export interface LegalPageData {
  title: string;
  tag: string;
  lastUpdated: string;
  pdfUrl?: string;
  sections: LegalSection[];
}

function PageHero({ data }: { data: LegalPageData }) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-12 pt-8 md:px-10 md:pb-20 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <nav className="mb-8 flex items-center gap-2 text-xs text-[var(--muted)]">
          <Link href="/" className="transition hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-white">{data.title}</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">{data.tag}</p>
        <h1
          className="mt-6 text-4xl font-black uppercase leading-tight text-white md:text-6xl"
          style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
        >
          {data.title}
        </h1>
        <p className="mt-4 text-sm text-[var(--muted)]">Last updated: {data.lastUpdated}</p>

        {data.pdfUrl && (
          <a
            href={data.pdfUrl}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)]"
          >
            <Download className="h-4 w-4" /> Download PDF
          </a>
        )}
      </motion.div>
    </section>
  );
}

function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="relative z-20 w-full rounded-t-[2.5rem] bg-white px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <h2 className="text-lg font-black uppercase text-black" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                {section.heading}
              </h2>
              <div className="mt-4 text-sm leading-7 text-black/70">
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-amber)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LegalPage({ data }: { data: LegalPageData }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[var(--brand-gold)]/10 blur-[120px]" />
      <Nav />
      <PageHero data={data} />
      <LegalContent sections={data.sections} />
      <Footer />
    </div>
  );
}
