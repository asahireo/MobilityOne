"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CheckCircle2,
  CreditCard,
  Globe,
  Layers,
  Monitor,
  QrCode,
  Send,
  Shield,
  Smartphone,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import FluidGlass from "@/components/ui/fluid-glass";
import ThreeDMarquee from "@/components/ui/three-d-marquee";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import SpinningBadge from "@/components/ui/spinning-badge";
import { assetPath } from "@/lib/asset-path";

/* ------------------------------------------------------------------ */
/*  Decorative SVGs                                                    */
/* ------------------------------------------------------------------ */



const ArrowBlack = () => (
  <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible stroke-current text-[var(--background)]" fill="none" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20,80 Q 40,20 80,40" />
    <path d="M60,20 L80,40 L50,60" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Shared components imported from separate files:                     */
/*  Nav, Footer, SpinningBadge                                         */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  2. HERO                                                            */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 pb-32 pt-16 md:px-12 md:pb-48 md:pt-24">


      <div className="relative mx-auto mb-16 flex w-full flex-col items-center justify-center text-center">
        {/* Text stack */}
        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--brand-amber)] backdrop-blur-md"
          >
            Digital Economy Catalyst
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-extrabold tracking-tight text-black sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.1]"
          >
            Malaysia&apos;s Premium Payment Infrastructure
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl"
          >
            Powering scalable, secure, and reliable payment ecosystems for banks, telcos, and modern enterprises since 2004.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-20 mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#payment-gateway" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--brand-gold)] px-8 text-sm font-semibold text-black transition hover:bg-[var(--brand-amber)] hover:shadow-xl hover:shadow-[var(--brand-gold)]/20">
            Explore Solutions <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex h-14 items-center justify-center rounded-full border border-black/10 bg-white/50 px-8 text-sm font-semibold text-black backdrop-blur-sm transition hover:border-black/30 hover:bg-white">
            Talk to Sales
          </a>
        </motion.div>

        {/* Floating glass cards — positioned aesthetically */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: -6 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="pointer-events-auto absolute -left-4 top-20 z-0 hidden lg:block xl:-left-12"
        >
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="flex aspect-[3/3.5] w-48 flex-col items-center justify-center rounded-[2rem] border border-white/40 bg-white/60 p-4 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-0">
               <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-black/5 bg-[var(--brand-gold)]/20">
                 <Shield className="h-8 w-8 text-[var(--brand-amber)]" />
               </div>
               <div className="mt-2 text-center">
                 <p className="font-display text-sm font-bold text-black">BNM Licensed</p>
                 <p className="mt-1 text-[11px] text-black/60">e-Money & Remittance</p>
               </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Card Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 6 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="pointer-events-auto absolute -right-4 top-10 z-0 hidden lg:block xl:-right-12"
        >
          <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <div className="flex aspect-[3/3.5] w-48 flex-col items-center justify-center rounded-[2rem] border border-white/40 bg-white/60 p-4 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-0">
               <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-black/5 bg-[var(--brand-olive)]/20">
                 <CreditCard className="h-8 w-8 text-[var(--brand-moss)]" />
               </div>
               <div className="mt-2 text-center">
                 <p className="font-display text-sm font-bold text-black">Mastercard</p>
                 <p className="mt-1 text-[11px] text-black/60">Principal Issuer</p>
               </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. TRUST MARQUEE                                                   */
/* ------------------------------------------------------------------ */

function TrustMarquee() {
  const items = ["BNM Licensed", "Mastercard Principal", "PayNet Connected", "20+ Years Experience", "MSC Company", "Shariah Compliant", "LSE Listed (MBO.UK)"];
  return (
    <section className="relative z-10 w-full overflow-hidden border-y border-black/5 bg-black/[0.02] py-5">
      <div className="flex animate-[marquee_30s_linear_infinite] gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--brand-gold)]" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. 3D SHOWCASE + ABOUT                                             */
/* ------------------------------------------------------------------ */

function ThreeDShowcase() {
  return (
    <section id="solutions" className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-32">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="">
        <div className="grid items-center gap-0 lg:grid-cols-[1fr_1fr]">
          <div className="group relative flex h-[24rem] w-full flex-col overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#FCFCFD] shadow-[0_8px_30px_rgba(0,0,0,0.04)] lg:h-[36rem]">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
            <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-[var(--brand-gold)]/10 blur-[80px]" />

            {/* Interactive Elements Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              {/* Back Card: API Graphic */}
              <div className="absolute right-[5%] top-[10%] flex h-[180px] w-[240px] flex-col rounded-2xl border border-black/5 bg-white p-4 shadow-xl transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-2 lg:right-[15%] lg:top-[12%]">
                <div className="mb-3 flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">API Response</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="font-mono text-[9px] leading-relaxed text-black/60">
                  <span className="text-purple-600">{"{"}</span><br/>
                  &nbsp;&nbsp;&quot;status&quot;: <span className="text-emerald-600">&quot;success&quot;</span>,<br/>
                  &nbsp;&nbsp;&quot;id&quot;: &quot;tx_req_9921&quot;,<br/>
                  &nbsp;&nbsp;&quot;amount&quot;: <span className="text-blue-600">450.00</span>,<br/>
                  &nbsp;&nbsp;&quot;currency&quot;: <span className="text-amber-600">&quot;MYR&quot;</span>,<br/>
                  &nbsp;&nbsp;&quot;secure&quot;: <span className="text-emerald-600">true</span><br/>
                  <span className="text-purple-600">{"}"}</span>
                </div>
              </div>

              {/* Middle Card: Mastercard Logo */}
              <Image
                src={assetPath("/assets/img/clients/mastercard.png")}
                alt="Mastercard"
                width={240}
                height={150}
                className="absolute left-[5%] top-[25%] h-auto w-[240px] rounded-2xl shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-x-4 group-hover:-rotate-3 lg:left-[15%]"
              />

              {/* Front Card: Transaction Success */}
              <div className="absolute bottom-[25%] right-[15%] flex w-[200px] flex-col items-center rounded-2xl border border-black/5 bg-white/95 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-transform duration-700 ease-out group-hover:translate-y-2 group-hover:scale-105 lg:right-[25%]">
                 <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50">
                    <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                 </div>
                 <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">Payment Approved</span>
                 <span className="mt-1 text-2xl font-black tracking-tight text-black">RM 450.00</span>
                 <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-emerald-400" />
              </div>

            </div>

            {/* Overlay Gradient for Text readability */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/80 to-transparent" />

            {/* Bottom Content Focus */}
            <div className="relative z-10 mt-auto flex flex-col p-8 lg:p-10">
               <h3 className="mb-2 font-display text-3xl font-bold text-black lg:text-4xl">Enterprise Infrastructure</h3>
               <p className="max-w-md text-sm leading-relaxed text-black/60">
                  Fully licensed, PCI-DSS compliant payment routing trusted by Top Malaysian institutions. Built for scale, engineered for reliability.
               </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-amber)]">Why MobilityOne</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-black md:text-5xl">
              20+ years powering Malaysia&apos;s digital payments.
            </h2>
            <p className="max-w-lg text-base leading-7 text-[var(--muted)]">
              MobilityOne enables banks, enterprises, telcos, and white-label partners to launch payment gateway, e-money, remittance, and bill payment services with trusted local infrastructure.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                { value: "20+", label: "Years in payments" },
                { value: "4", label: "Core solution pillars" },
                { value: "2.3M+", label: "Transactions per year" },
                { value: "RM192M+", label: "Transaction volume/yr" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/5 bg-black/[0.03] p-4">
                  <p className="font-display text-2xl font-bold text-[var(--brand-amber)]">{stat.value}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#payment-gateway" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--brand-amber)]">
                Explore solutions <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:border-black/30">
                Business enquiry
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. FEATURE CARDS (white section) — 4 Core Pillars                  */
/* ------------------------------------------------------------------ */

function FeatureCards() {
  return (
    <section className="relative z-20 w-full rounded-t-[2.5rem] bg-white px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">Products & Services</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold uppercase tracking-tight leading-tight md:text-5xl">
            FOUR PILLARS OF<br />
            <span className="text-[var(--brand-amber)]">PAYMENT</span> EXCELLENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Payment Solution */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center rounded-[2rem] border border-gray-100 bg-[#F8F9FA] p-7 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)] text-black">
              <Smartphone className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">PAYMENT<br />TERMINAL</h3>
            <p className="mt-2 text-[11px] text-black/60">Custom-built enterprise payment solutions with card, eWallet & QR acceptance.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {["Visa", "Mastercard", "MyDebit", "Boost", "TNG"].map((t) => (
                <span key={t} className="rounded-full bg-black/5 px-2.5 py-1 text-[9px] font-bold">{t}</span>
              ))}
            </div>
            <div className="absolute -right-6 bottom-10 z-30 hidden h-12 w-12 lg:block"><ArrowBlack /></div>
          </motion.div>

          {/* Payment Gateway */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            className="relative flex flex-col items-center rounded-[2rem] border border-gray-100 bg-[#F8F9FA] p-7 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)] text-black">
              <Globe className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">PAYMENT<br />GATEWAY</h3>
            <p className="mt-2 text-[11px] text-black/60">Online & mobile payment gateway with FPX, cards, and eWallet integration.</p>
            <div className="mt-auto pt-4">
              <div className="flex items-center rounded-full bg-black p-1.5 text-white shadow-lg">
                <div className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold">525K+</div>
                <div className="px-3 text-[10px] font-bold">Daily transactions</div>
              </div>
            </div>
            <div className="absolute -right-6 bottom-10 z-30 hidden h-12 w-12 lg:block"><ArrowBlack /></div>
          </motion.div>

          {/* E-Money */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}
            className="relative flex flex-col items-center rounded-[2rem] border border-gray-100 bg-[#F8F9FA] p-7 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)] text-black">
              <Wallet className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">E-MONEY<br />SOLUTION</h3>
            <p className="mt-2 text-[11px] text-black/60">BNM-approved e-Wallet platform with DuitNow QR, card-based & mobile app capabilities.</p>
            <div className="mt-auto pt-4">
              <div className="rounded-2xl bg-[var(--brand-amber)] px-4 py-2.5 text-center shadow-md text-black">
                <p className="text-[9px] font-bold uppercase">7+ white-label partners</p>
                <p className="text-sm font-black">LIVE</p>
              </div>
            </div>
            <div className="absolute -right-6 bottom-10 z-30 hidden h-12 w-12 lg:block"><ArrowBlack /></div>
          </motion.div>

          {/* Remittance */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.24 }}
            className="relative flex flex-col items-center rounded-[2rem] border border-gray-100 bg-[#F8F9FA] p-7 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)] text-black">
              <Send className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-tight leading-tight">REMITTANCE<br />SERVICES</h3>
            <p className="mt-2 text-[11px] text-black/60">BNM-licensed money transfer via OneTransfer — 6 branches plus mobile app.</p>
            <div className="mt-auto pt-4 flex flex-wrap justify-center gap-1.5">
              {["MoneyGram", "Tranglo", "BNI"].map((t) => (
                <span key={t} className="rounded-full bg-black/5 px-2.5 py-1 text-[9px] font-bold">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  6. LICENSES & APPROVALS (dark section)                             */
/* ------------------------------------------------------------------ */

const licenses = [
  { title: "Mastercard Principal Prepaid Issuer", desc: "Authorized to issue Mastercard prepaid products across Malaysia.", icon: CreditCard },
  { title: "e-Money Operator (BNM)", desc: "Licensed by Bank Negara Malaysia to operate e-money issuance business.", icon: Wallet },
  { title: "Money Services Business (BNM)", desc: "Class B MSB license for remittance services regulated by Bank Negara Malaysia.", icon: Banknote },
  { title: "PayNet Third Party Acquirer", desc: "Licensed to accept debit card payments via PayNet as Third Party Acquirer (TPA).", icon: Layers },
  { title: "Approved Merchant Acquirer (BNM)", desc: "Licensed by Bank Negara Malaysia to provide merchant acquiring services.", icon: Monitor },
  { title: "Shariah Compliance Certified", desc: "Islamic financing certification by Salihin Shariah Advisory for Shariah-compliant operations.", icon: BadgeCheck },
];

function Licenses() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--brand-gold)]/8 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Regulated & Trusted</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold uppercase tracking-tight leading-tight text-black md:text-6xl">
            LICENSED BY <span className="text-[var(--brand-amber)]">BNM</span> &<br />MASTERCARD
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
            MobilityOne holds multiple regulatory approvals and licenses, ensuring every transaction meets the highest standards of compliance and security.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {licenses.map(({ title, desc, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-black/5 bg-black/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:border-black/10 hover:bg-black/[0.05]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-gold)]/20 text-[var(--brand-amber)] transition-colors group-hover:bg-[var(--brand-gold)]/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. STATS                                                           */
/* ------------------------------------------------------------------ */

function BigStats() {
  const stats = [
    { number: "20+", label: "Years in payments", sub: "Established in the Malaysian market" },
    { number: "525K+", label: "Avg. daily transactions", sub: "Through payment gateway" },
    { number: "RM192M+", label: "Yearly transaction volume", sub: "Processed through our platform" },
    { number: "2.3M+", label: "Success transactions/yr", sub: "Across all payment channels" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">By the numbers</p>
          <h2 className="mt-6 text-4xl font-bold uppercase tracking-tight text-black md:text-6xl">
            PROVEN <span className="text-[var(--brand-amber)]">PERFORMANCE</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[2rem] border border-black/5 bg-black/[0.03] p-8 text-center"
            >
              <p className="font-display text-5xl font-bold text-[var(--brand-amber)] md:text-6xl">{stat.number}</p>
              <p className="mt-4 text-lg font-bold text-black">{stat.label}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  8. PARTNERS 3D MARQUEE                                             */
/* ------------------------------------------------------------------ */

const partnerLogos = [
  assetPath("/assets/img/clients/Maybank-client.png"),
  assetPath("/assets/img/clients/Rhb-client.png"),
  assetPath("/assets/img/clients/agro.png"),
  assetPath("/assets/img/clients/ambank.png"),
  assetPath("/assets/img/clients/bislam.png"),
  assetPath("/assets/img/clients/bsn.png"),
  assetPath("/assets/img/clients/celcomdigi.png"),
  assetPath("/assets/img/clients/maxis.png"),
  assetPath("/assets/img/clients/mbsb-client.png"),
  assetPath("/assets/img/clients/muamalat.png"),
  assetPath("/assets/img/clients/public.png"),
  assetPath("/assets/img/clients/rakyat.png"),
  assetPath("/assets/img/clients/umobile.png"),
  assetPath("/assets/img/clients/yes.png"),
  assetPath("/assets/img/clients/onexox.png"),
  assetPath("/assets/img/clients/redone.png"),
  assetPath("/assets/img/clients/tranglo.png"),
  assetPath("/assets/img/clients/moneygram.png"),
  assetPath("/assets/img/clients/mastercard.png"),
  assetPath("/assets/img/clients/visa.png"),
  assetPath("/assets/img/clients/fpx.png"),
  assetPath("/assets/img/clients/boost.png"),
  assetPath("/assets/img/clients/tng.png"),
  assetPath("/assets/img/clients/grabpay.png"),
  assetPath("/assets/img/clients/duitnow.png"),
  assetPath("/assets/img/clients/shopeepay.png"),
  assetPath("/assets/img/clients/mydebit.png"),
  assetPath("/assets/img/clients/bni.png"),
];

function Partners() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[600px] rounded-full bg-[var(--brand-olive)]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Our Clients & Partners</p>
          <h2 className="mt-6 text-4xl font-bold uppercase tracking-tight text-black md:text-6xl">
            TRUSTED BY <span className="text-[var(--brand-amber)]">BANKS</span>,<br />TELCOS & ENTERPRISES
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Major Malaysian banks, all leading telcos, remittance partners, and white-label platforms trust MobilityOne to power their payment infrastructure.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-black/[0.02]"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 p-10 md:gap-x-12 md:gap-y-14 md:p-16">
            {partnerLogos.map((src, idx) => (
              <div key={idx} className="group flex h-10 w-24 items-center justify-center transition-transform duration-300 hover:scale-110 sm:h-12 sm:w-28 md:h-16 md:w-36">
                <img 
                  src={src} 
                  alt={`Partner ${idx}`} 
                  className="max-h-full max-w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" 
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  9. PLATFORM CAPABILITIES                                           */
/* ------------------------------------------------------------------ */

function PlatformCapabilities() {
  const capabilities = [
    {
      tag: "Payment Gateway",
      title: "Empower your business with M1Pay",
      desc: "Our online and mobile payment gateway offers a seamless, secure, and versatile solution. Support FPX online banking, credit & debit cards, and eWallet integrations to let customers pay the way that suits them.",
      features: ["FPX real-time bank transfers", "Visa & Mastercard acceptance", "eWallet integration (Boost, TNG, GrabPay)", "DuitNow QR support"],
      icon: Globe,
    },
    {
      tag: "E-Money Platform",
      title: "White-label e-wallet solutions",
      desc: "Fully approved by Mastercard and recognized by BNM. Built with contactless card and mobile QR capabilities for seamless real-time transactions. Now supporting DuitNow QR at participating merchants.",
      features: ["BNM & Mastercard approved", "Card-based & QR code payments", "White-label partnership program", "Ministry of HR approved for salary payments"],
      icon: QrCode,
    },
    {
      tag: "Remittance",
      title: "Secure cross-border money transfer",
      desc: "OneTransfer Remittance — a wholly-owned subsidiary operating as a BNM-licensed Money Transfer Operator. Providing accessible and reliable remittance through 6 physical branches and a mobile app.",
      features: ["Class B MSB licensed by BNM", "6 physical branch locations", "Digital money transfer via app", "Partnerships with MoneyGram, Tranglo, BNI"],
      icon: Send,
    },
  ];

  return (
    <section id="payment-gateway" className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Deep Dive</p>
          <h2 className="mt-6 text-4xl font-bold uppercase tracking-tight text-black md:text-6xl">
            OUR <span className="text-[var(--brand-amber)]">SOLUTIONS</span> IN DETAIL
          </h2>
        </div>

        <div className="flex flex-col gap-20">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-gold)]/20 bg-[var(--brand-gold)]/10 px-4 py-1.5">
                  <cap.icon className="h-4 w-4 text-[var(--brand-gold)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-gold)]">{cap.tag}</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-black md:text-4xl">{cap.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">{cap.desc}</p>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {cap.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-black/80">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--brand-gold)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-black/[0.03] p-1">
                  <div className="flex aspect-square items-center justify-center rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(236,194,56,0.1),transparent_70%)]">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      className="flex h-40 w-40 items-center justify-center rounded-full border border-[var(--brand-gold)]/20 md:h-56 md:w-56"
                    >
                      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-gold)]/5 md:h-40 md:w-40">
                        <cap.icon className="h-12 w-12 text-[var(--brand-gold)] md:h-16 md:w-16" />
                      </div>
                    </motion.div>
                    <motion.div animate={{ rotate: [0, -360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute h-48 w-48 md:h-64 md:w-64">
                      <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[var(--brand-gold)] shadow-[0_0_12px_rgba(253,212,72,0.6)]" />
                      <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--brand-moss)]" />
                      <div className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--brand-amber)]" />
                    </motion.div>
                  </div>
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
/*  10. WHITE-LABEL PARTNERS                                           */
/* ------------------------------------------------------------------ */

function WhitelabelPartners() {
  const partners = [
    { name: "OneCENT Plus", desc: "Enhanced mobile app experience with improved UI and exciting features." },
    { name: "MAINS PAY", desc: "Initiative by Majlis Agama Islam Negeri Sembilan for payments and funds." },
    { name: "S4S", desc: "eWallet for Sabah state — seamless QR-based transactions for merchants." },
    { name: "Clicks@Perak", desc: "Digital payment systems helping build a cashless society by 2030." },
    { name: "XPAT", desc: "Digital wallet solution for expatriates and international workers in Malaysia." },
    { name: "PocketPay", desc: "Pocket-friendly digital wallet with secure cashless transactions." },
    { name: "OneCall", desc: "MBP Solutions&apos; branded e-money platform powered by MobilityOne." },
  ];

  return (
    <section id="e-money" className="relative w-full bg-white px-6 py-20 text-black md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">White-Label Program</p>
          <h2 className="mt-6 text-4xl font-bold uppercase tracking-tight md:text-6xl">
            7+ PARTNERS <span className="text-[var(--brand-amber)]">LIVE</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/60">
            Our white-label program allows partners to go to market quickly with a proven, secure, and fully managed e-Money platform under their own brand.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-[1.5rem] border border-gray-100 bg-[#F8F9FA] p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-gold)]/15 text-[var(--brand-amber)]">
                <Wallet className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold">{p.name}</h3>
              <p className="mt-2 text-xs leading-5 text-black/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  11. LEADERSHIP QUOTE                                               */
/* ------------------------------------------------------------------ */

function LeadershipQuote() {
  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-28">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_30%_50%,rgba(253,212,72,0.08),transparent_50%)]" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-8 flex justify-center gap-1">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="h-2.5 w-2.5 rounded-full bg-[var(--brand-gold)]" />
            ))}
          </div>
          <blockquote className="font-display text-2xl font-semibold leading-relaxed text-black md:text-4xl">
            &ldquo;Payments and making payments should be made easy for both the payor and payee. Our vision is to smoothen out the complexities and simplify payments.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-gold)]/15 font-bold text-[var(--brand-gold)]">D</div>
            <div className="text-left">
              <p className="font-bold text-black">Dato Hussian A. Rahman</p>
              <p className="text-sm text-[var(--muted)]">Founder, MobilityOne</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  12. FINAL CTA                                                      */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section id="contact" className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[var(--brand-gold)]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[var(--brand-olive)]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2.5rem] border border-black/10 bg-[linear-gradient(135deg,rgba(236,194,56,0.1),rgba(155,168,108,0.05),rgba(0,0,0,0.02))] p-10 text-center md:p-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">How can we assist you?</p>
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold uppercase tracking-tight leading-tight text-black md:text-6xl">
            LET&apos;S BUILD <span className="text-[var(--brand-amber)]">TOGETHER</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/60">
            Whether you need payment gateway integration, e-wallet solutions, or remittance infrastructure — our team is ready to help you scale.
          </p>

          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4">
              <p className="text-xs font-bold text-[var(--brand-amber)]">General Enquiry</p>
              <p className="mt-1 text-xs text-[var(--muted)]">+603-9213 0669</p>
              <p className="text-xs text-[var(--muted)]">m1enquiry@mobilityone.com.my</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4">
              <p className="text-xs font-bold text-[var(--brand-amber)]">Transactions</p>
              <p className="mt-1 text-xs text-[var(--muted)]">+603-8992 0700</p>
              <p className="text-xs text-[var(--muted)]">ccc@mobilityone.com.my</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-4">
              <p className="text-xs font-bold text-[var(--brand-amber)]">Business Dev</p>
              <p className="mt-1 text-xs text-[var(--muted)]">+603-8996 3600</p>
              <p className="text-xs text-[var(--muted)]">bd@mobilityone.com.my</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="mailto:bd@mobilityone.com.my"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-8 py-4 text-sm font-bold text-black transition hover:bg-[var(--brand-amber)] hover:shadow-[0_0_40px_rgba(253,212,72,0.4)]">
              Business enquiry <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#solutions" className="rounded-full border border-black/15 px-8 py-4 text-sm font-semibold text-black transition hover:border-black/30">
              View solutions
            </a>
          </div>

          <div className="mt-12 flex justify-center">
            <SpinningBadge />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/*  MAIN EXPORT                                                        */
/* ------------------------------------------------------------------ */

export function Component() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[var(--brand-gold)]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-[var(--brand-olive)]/20 blur-[120px]" />

      <Nav />
      <HeroSection />
      <TrustMarquee />
      <ThreeDShowcase />
      <FeatureCards />
      <Licenses />
      <BigStats />
      <Partners />
      <PlatformCapabilities />
      <WhitelabelPartners />
      <LeadershipQuote />
      <FinalCta />
      <Footer />
    </div>
  );
}
