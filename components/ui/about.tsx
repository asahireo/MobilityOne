"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Eye,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { assetPath } from "@/lib/asset-path";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const directors = [
  {
    name: "Abu Bakar Bin Mohd Taib",
    title: "Non-Executive Chairman",
    initial: "A",
    bio: "Abu Bakar bin Mohd Taib is the Non-Executive Chairman of the company since 27 June 2014. He has previously worked for several listed companies and financial institutions in Malaysia including Nestle (Malaysia) Berhad, Bank Bumiputera Malaysia Berhad (now part of CIMB Bank Berhad) and United Malayan Banking Berhad (now part of RHB Bank Berhad). He was mainly involved in corporate communications and corporate affairs until 2004. Since 2005 he has been the director of several companies that are principally involved in timber related activities in Malaysia. He obtained a Master of Business Administration in Marketing and Finance from West Coast University (USA) and a Bachelor of Science in Business Administration from California State University (USA).",
  },
  {
    name: "Dato\u2019 Hussian @ Rizal bin A. Rahman",
    title: "Chief Executive Officer",
    initial: "D",
    bio: "Dato\u2019 Hussian @ Rizal bin A. Rahman is the Chief Executive Officer of the Group. He has extensive experience in the IT and telecommunications industries in Malaysia and is responsible for the development of the Group\u2019s overall management, particularly in setting the Group\u2019s business direction and strategies. He was admitted to the membership of Certified Master of Business Administration from The Oxford Association of Management, Oxford, England and was awarded the certificate of Master of the Oxford for Leadership from The Oxford Centre for Leadership, United Kingdom. He is also the Managing Director of TFP Solutions Berhad (listed on the ACE Market of Bursa Malaysia Securities Berhad).",
  },
  {
    name: "Derrick Chia Kah Wai",
    title: "Deputy Chief Executive Officer",
    initial: "D",
    bio: "Derrick Chia Kah Wai is the Deputy Chief Executive Officer of the Group. He began his career as a programmer in 1994, he then joined GHL Systems Berhad in January 1998 as a Software Engineer and was promoted to Software Development Manager in December 1999. He obtained his Bachelor Degree in Commerce, majoring in Management Information System from University of British Columbia, Canada. He joined the Group in May 2005 and is responsible for the Group\u2019s business operations.",
  },
  {
    name: "Seah Boon Chin (Dominic)",
    title: "Non-Executive Director",
    initial: "S",
    bio: "Dominic Seah joined the Group in January 2007 and stepped down as the Corporate Finance Director in November 2011 and remains on the Board as a Non-Executive Director of the Company. He worked in the Corporate Finance Department of established financial institutions in Malaysia and Singapore. He is currently the Head of Corporate Finance with TA Securities Holdings Berhad in Malaysia. He obtained his Bachelor Degree in Commerce (Honours) with Distinction from McMaster University, Canada.",
  },
  {
    name: "Azlinda Ariffin-Boromand",
    title: "Non-Executive Director",
    initial: "A",
    bio: "Azlinda Ariffin-Boromand is the Non-Executive Director of the Company since 30 April 2021. Azlinda is an experienced UK-based corporate lawyer with over 25 years practicing legal experience. She is currently a consulting partner in the corporate team at Withersworldwide and was previously a partner in the capital markets teams at both Olswang LLP and Fasken Martineau LLP prior to joining Withersworldwide in 2016. Azlinda specialises in mergers and acquisitions and equity capital markets transactions. Azlinda is a member of both the Law Society of England & Wales and the Malaysian Bar. She is also a barrister with Gray\u2019s Inn.",
  },
];

const milestones = [
  { year: "2003", label: "MobilityOne founded" },
  { year: "2005", label: "Entered digital payments market" },
  { year: "2007", label: "Listed on AIM of the London Stock Exchange (MBO.UK)" },
  { year: "2010", label: "Obtained MSC Malaysia status" },
  { year: "2015", label: "BNM e-Money Operator license" },
  { year: "2018", label: "Mastercard Principal Prepaid Issuer" },
  { year: "2020", label: "Launched white-label e-wallet platform" },
  { year: "2023", label: "Shariah Compliance certification" },
  { year: "2024", label: "7+ white-label partners live" },
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
          <span className="text-white">About Us</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">About Us</p>

        <h1
          className="mx-auto mt-6 max-w-5xl text-4xl font-black uppercase leading-tight text-white md:text-6xl lg:text-7xl"
          style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
        >
          BUILDING MALAYSIA&apos;S{" "}
          <span className="text-[var(--brand-gold)]">PAYMENT</span> FUTURE SINCE 2003
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
          MobilityOne Sdn Bhd (200201033972) — BNM-licensed e-money operator, Mastercard principal issuer,
          and MSC Malaysia status company. Listed on AIM of the London Stock Exchange (MBO.UK).
        </p>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. COMPANY TIMELINE                                                */
/* ------------------------------------------------------------------ */

function CompanyTimeline() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[600px] rounded-full bg-[var(--brand-olive)]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Our Journey</p>
          <h2
            className="mt-6 text-4xl font-black uppercase text-white md:text-6xl"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            20+ YEARS OF <span className="text-[var(--brand-gold)]">INNOVATION</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--brand-gold)] via-[var(--brand-gold)]/40 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative flex items-start gap-6 pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-center md:gap-0`}
              >
                {/* Year badge */}
                <div className="absolute left-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--brand-gold)] bg-[var(--background)] md:static md:mx-auto">
                  <div className="h-3 w-3 rounded-full bg-[var(--brand-gold)]" />
                </div>

                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="inline-block rounded-2xl border border-white/8 bg-white/[0.04] px-6 py-4 backdrop-blur-sm">
                    <span className="font-display text-lg font-bold text-[var(--brand-gold)]">{m.year}</span>
                    <p className="mt-1 text-sm text-white/80">{m.label}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. MISSION & VISION                                                */
/* ------------------------------------------------------------------ */

function MissionVision() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--brand-gold)]/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">What Drives Us</p>
          <h2
            className="mt-6 text-4xl font-black uppercase text-white md:text-6xl"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            MISSION & <span className="text-[var(--brand-gold)]">VISION</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-gold)]/30 hover:bg-white/[0.07]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] transition-colors group-hover:bg-[var(--brand-gold)]/20">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">Vision</h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              To become the preeminent fintech company transforming payments, eCommerce, and virtual
              marketplaces through innovative, impactful solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group rounded-[2rem] border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[var(--brand-gold)]/30 hover:bg-white/[0.07]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] transition-colors group-hover:bg-[var(--brand-gold)]/20">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">Mission</h3>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              To empower small merchants and financial institutions with seamless, secure, and intelligent
              payment solutions—bridging innovation with everyday transactions through advanced terminals,
              smart gateways, e-wallets, and global remittance services.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/*  5. BOARD OF DIRECTORS                                              */
/* ------------------------------------------------------------------ */

function BoardOfDirectors() {
  return (
    <section className="relative z-20 w-full rounded-t-[2.5rem] bg-white px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">Leadership</p>
          <h2
            className="mx-auto mt-4 max-w-3xl text-4xl font-black uppercase leading-tight md:text-5xl"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            BOARD OF <span className="text-[var(--brand-amber)]">DIRECTORS</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {directors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="w-full rounded-[2rem] border border-gray-100 bg-[#F8F9FA] p-7 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-gold)]/15 text-xl font-bold text-[var(--brand-amber)]">
                {d.initial}
              </div>
              <h3 className="text-lg font-bold">{d.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--brand-olive)]">{d.title}</p>
              <p className="mt-4 text-sm leading-6 text-black/60">{d.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/*  7. OFFICE & CTA                                                    */
/* ------------------------------------------------------------------ */

function OfficeCta() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[var(--brand-olive)]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          {/* Office Image */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem]">
              <Image
                src={assetPath("/assets/img/HqM1.png")}
                alt="MobilityOne Headquarters"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Our Office</p>
            <h2
              className="text-4xl font-black uppercase text-white md:text-5xl"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              VISIT <span className="text-[var(--brand-gold)]">US</span>
            </h2>

            <div className="space-y-4 text-base leading-7 text-[var(--muted)]">
              <p>
                MobilityOne Sdn Bhd<br />
                No. 51-21-A, Menara BHL,<br />
                Jalan Sultan Ahmad Shah,<br />
                10050 George Town, Penang, Malaysia
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span> +603-9213 0669
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a href="mailto:m1enquiry@mobilityone.com.my" className="transition hover:text-white">
                  m1enquiry@mobilityone.com.my
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-8 py-4 text-sm font-bold text-black transition hover:bg-[var(--brand-amber)] hover:shadow-[0_0_40px_rgba(253,212,72,0.4)]"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/investor-relations"
                className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:border-[var(--brand-gold)]"
              >
                Investor Relations
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN EXPORT                                                        */
/* ------------------------------------------------------------------ */

export function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[var(--brand-gold)]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-[var(--brand-olive)]/20 blur-[120px]" />

      <Nav />
      <PageHero />
      <CompanyTimeline />
      <MissionVision />
      <BoardOfDirectors />
      <OfficeCta />
      <Footer />
    </div>
  );
}
