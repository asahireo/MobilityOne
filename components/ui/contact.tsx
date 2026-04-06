"use client";

import { motion } from "motion/react";
import { ArrowRight, Headphones, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { assetPath } from "@/lib/asset-path";

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
    image: assetPath("/assets/img/HqM1.png"),
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1774027768793!2d101.6887931734891!3d3.047102953774553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4abbeac41445%3A0x72b12b6785e236e!2sMobilityone%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1736837878576!5m2!1sen!2smy",
  },
  {
    name: "Business & Development Office",
    address: "2-3, Incubator 2,\nTechnology Park Malaysia, Bukit Jalil,\n57000 Kuala Lumpur, Malaysia.",
    image: assetPath("/assets/img/TpmM1.png"),
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.709691105314!2d101.68106836109176!3d3.047097550858978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4abbeac41445%3A0x72b12b6785e236e!2sMobilityone%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1738834411795!5m2!1sen!2smy",
  },
  {
    name: "Subsidiary Office",
    address: "Unit-03A, Level 11, Tower B,\nThe Vertical Business Suite,\n8, Jalan Kerinchi, Bangsar South,\n59200 Kuala Lumpur.",
    image: assetPath("/assets/img/M1recep2.png"),
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
          <Link href="/" className="transition hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-white">Contact Us</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Contact Us</p>

        <h1
          className="mx-auto mt-6 max-w-4xl text-4xl font-black uppercase leading-tight text-white md:text-6xl lg:text-7xl"
          style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
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
              className="group rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-gold)]/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] transition-colors group-hover:bg-[var(--brand-gold)]/20">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-white">{dept.label}</h3>
              <div className="mt-4 space-y-3">
                <a
                  href={`tel:${dept.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
                  {dept.phone}
                </a>
                <a
                  href={`mailto:${dept.email}?subject=${dept.subject}`}
                  className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-white"
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
    <section className="relative z-20 w-full rounded-t-[2.5rem] bg-white px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">Locations</p>
          <h2
            className="mt-4 text-4xl font-black uppercase md:text-5xl"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            OUR <span className="text-[var(--brand-amber)]">OFFICES</span>
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {offices.map((office, i) => (
            <motion.div
              key={office.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}
            >
              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-gray-100">
                  <Image
                    src={office.image}
                    alt={office.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">
                  {office.name}
                </p>
                <p className="mt-4 whitespace-pre-line text-base leading-7 text-black/70">
                  {office.address}
                </p>
                <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-gray-100">
                  <iframe
                    src={office.mapSrc}
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map — ${office.name}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[var(--brand-gold)]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-[var(--brand-olive)]/20 blur-[120px]" />

      <Nav />
      <PageHero />
      <DepartmentCards />
      <Offices />
      <Footer />
    </div>
  );
}
