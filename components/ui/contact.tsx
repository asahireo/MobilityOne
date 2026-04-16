"use client";

import { motion } from "motion/react";
import { ArrowRight, Check, Copy, Download, Headphones, Mail, Phone, Share2 } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const departments = [
  {
    label: "General Enquiry",
    phone: "+603-9213 0669",
    email: "m1enquiry@mobilityone.com.my",
    subject: "General%20Enquiry",
  },
  {
    label: "Transaction & Payment",
    phone: "+603-8992 0700",
    email: "ccc@mobilityone.com.my",
    subject: "Transaction%20And%20Payment%20Enquiry",
  },
  {
    label: "Business Development",
    phone: "+603-8996 3600",
    email: "bd@mobilityone.com.my",
    subject: "Business%20Enquiry",
  },
];

const offices = [
  {
    name: "Corporate Office",
    address: "Wisma LMS,\nNo. 6, Jalan Abdul Rahman Idris,\nKg Baru, 53000 Kuala Lumpur, Malaysia.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1774027768793!2d101.6887931734891!3d3.047102953774553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4abbeac41445%3A0x72b12b6785e236e!2sMobilityone%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1736837878576!5m2!1sen!2smy",
  },
  {
    name: "Business & Development Office",
    address: "2-3, Incubator 2,\nTechnology Park Malaysia, Bukit Jalil,\n57000 Kuala Lumpur, Malaysia.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.709691105314!2d101.68106836109176!3d3.047097550858978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4abbeac41445%3A0x72b12b6785e236e!2sMobilityone%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1738834411795!5m2!1sen!2smy",
  },
  {
    name: "Subsidiary Office",
    address: "Unit-03A, Level 11, Tower B,\nThe Vertical Business Suite,\n8, Jalan Kerinchi, Bangsar South,\n59200 Kuala Lumpur.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9397284513498!2d101.66314197583033!3d3.110649396864899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4b2e4835c46b%3A0x4863a14e6b1b8332!2sHATI%20International%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1745830545750!5m2!1sen!2smy",
  },
];

/* ------------------------------------------------------------------ */
/*  1. PAGE HERO                                                       */
/* ------------------------------------------------------------------ */

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
          <Link href="/" className="transition hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">Contact Us</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Contact Us</p>

        <h1
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold uppercase tracking-tight leading-tight text-black md:text-6xl lg:text-7xl"
        >
          HOW CAN WE <span className="text-[var(--brand-gold)]">ASSIST</span> YOU?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          Our customer support is available free of charge. Connection charges may vary when calling from outside the area, abroad, or from a mobile.
        </p>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. DEPARTMENT CARDS                                                */
/* ------------------------------------------------------------------ */

function DepartmentCards() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 pb-20 md:px-10 md:pb-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--brand-gold)]/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-[2rem] border border-black/5 bg-black/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-black/10 hover:bg-black/[0.05]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] transition-colors group-hover:bg-[var(--brand-gold)]/20">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-black">{dept.label}</h3>
              <div className="mt-4 space-y-3">
                <a
                  href={`tel:${dept.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-black"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                  {dept.phone}
                </a>
                <a
                  href={`mailto:${dept.email}?subject=${dept.subject}`}
                  className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-black"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                  {dept.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://mobilityone.ladesk.com/submit_ticket"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-8 py-4 text-sm font-bold text-black transition hover:bg-[var(--brand-amber)] hover:shadow-[0_0_40px_rgba(253,212,72,0.4)]"
          >
            Submit a Feedback or Enquiry <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. OFFICES                                                         */
/* ------------------------------------------------------------------ */

function Offices() {
  return (
    <section className="relative z-20 w-full rounded-t-[2.5rem] bg-[#F0F0F3] px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">Locations</p>
          <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-5xl">
            OUR <span className="text-[var(--brand-amber)]">OFFICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, i) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col rounded-[2.5rem] bg-[#F0F0F3] p-8 shadow-[10px_10px_20px_#cbcecd,-10px_-10px_20px_#ffffff]"
            >
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-olive)]">
                  {office.name}
                </p>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-black/70">
                  {office.address}
                </p>
              </div>
              <div className="mt-8 overflow-hidden rounded-[1.5rem] border-4 border-[#F0F0F3] shadow-[inset_5px_5px_10px_#cbcecd,inset_-5px_-5px_10px_#ffffff]">
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map — ${office.name}`}
                  className="opacity-90 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SHARE SECTION                                                      */
/* ------------------------------------------------------------------ */

const SITE_URL = "https://www.mobilityone.com.my";
// High-accuracy QR: 400px, error-correction H (30% restore), margin 1
const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(SITE_URL)}&ecc=H&margin=1&color=000000&bgcolor=F0F0F3`;

function ShareSection() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [copied, setCopied] = useState(false);

  const handleDownload = useCallback(async () => {
    try {
      // Fetch through an img element then paint to canvas for clean download
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.src = QR_SRC;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#F0F0F3";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        const link = document.createElement("a");
        link.download = "mobilityone-qr.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
    } catch {
      // Fallback: direct link
      const link = document.createElement("a");
      link.href = QR_SRC;
      link.download = "mobilityone-qr.png";
      link.target = "_blank";
      link.click();
    }
  }, []);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(SITE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section className="relative w-full bg-[#F0F0F3] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20"
        >
          {/* Left: text */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0F0F3] shadow-[5px_5px_10px_#cbcecd,-5px_-5px_10px_#ffffff] text-[var(--brand-amber)]">
              <Share2 className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">Spread the word</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-black md:text-4xl">
              Share <span className="text-[var(--brand-amber)]">MobilityOne</span> with ease
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-black/60">
              Scan or download the QR code below to instantly share our website. The code is generated at the highest accuracy level so it works perfectly every time.
            </p>

            {/* Copy URL row */}
            <div className="mt-8 flex w-full max-w-sm items-center gap-3 rounded-2xl bg-[#F0F0F3] p-3 shadow-[inset_4px_4px_8px_#cbcecd,inset_-4px_-4px_8px_#ffffff]">
              <span className="flex-1 truncate pl-2 text-sm font-medium text-black/70">{SITE_URL}</span>
              <button
                onClick={handleCopy}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F0F0F3] shadow-[3px_3px_6px_#cbcecd,-3px_-3px_6px_#ffffff] transition-all active:shadow-[inset_3px_3px_6px_#cbcecd,inset_-3px_-3px_6px_#ffffff] text-[var(--brand-amber)]"
                aria-label="Copy link"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--brand-amber)] hover:shadow-lg"
              >
                <Download className="h-4 w-4" /> Download QR
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent("Check out MobilityOne — Malaysia's payment infrastructure: " + SITE_URL)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F0F0F3] px-6 py-3 text-sm font-semibold text-black shadow-[3px_3px_6px_#cbcecd,-3px_-3px_6px_#ffffff] transition hover:shadow-[inset_3px_3px_6px_#cbcecd,inset_-3px_-3px_6px_#ffffff]"
              >
                Share via WhatsApp
              </a>
            </div>
          </div>

          {/* Right: QR card */}
          <div className="flex shrink-0 flex-col items-center gap-4">
            <div className="rounded-[2rem] bg-[#F0F0F3] p-5 shadow-[12px_12px_24px_#cbcecd,-12px_-12px_24px_#ffffff]">
              {/* Inner inset frame */}
              <div className="rounded-[1.5rem] bg-[#F0F0F3] p-3 shadow-[inset_4px_4px_8px_#cbcecd,inset_-4px_-4px_8px_#ffffff]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imgRef}
                  src={QR_SRC}
                  alt="QR code for www.mobilityone.com.my"
                  width={200}
                  height={200}
                  className="block rounded-xl"
                />
              </div>
            </div>
            <p className="text-center text-[11px] font-medium uppercase tracking-widest text-black/40">Scan to visit</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN EXPORT                                                        */
/* ------------------------------------------------------------------ */

export function ContactPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[var(--brand-gold)]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-[var(--brand-olive)]/20 blur-[120px]" />

      <Nav />
      <PageHero />
      <DepartmentCards />
      <Offices />
      <ShareSection />
      <Footer />
    </div>
  );
}
