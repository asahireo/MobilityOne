"use client";

import { motion, useInView } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import { GlobeInteractive } from "@/components/ui/globe-interactive";
import { PaymentGatewayHero } from "@/components/ui/payment-gateway-hero";

/* ------------------------------------------------------------------ */
/*  TYPES                                                              */
/* ------------------------------------------------------------------ */

export interface SolutionFeature {
  title: string;
  description: string;
  items?: string[];
}

export interface SolutionPartner {
  name: string;
  description?: string;
  url?: string;
}

export interface SolutionPageData {
  slug: string;
  tag: string;
  headline: string;
  headlineAccent: string;
  subtext: string;
  heroImage?: string;
  heroGlobe?: boolean;
  heroVariant?: "payment-terminal";
  features: SolutionFeature[];
  partners?: { label: string; names: string[] };
  whitelabelPartners?: SolutionPartner[];
  cta?: { label: string; href: string };
  externalLink?: { label: string; href: string };
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

const heroEase = [0.22, 1, 0.36, 1] as const;

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1 } } },
  item: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: heroEase } },
  },
};

function PageHero({ data }: { data: SolutionPageData }) {
  const hasRight = !!(data.heroImage || data.heroGlobe || data.heroVariant);

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-8 md:px-10 md:pb-32 md:pt-16">
      <div className={`grid items-center gap-12 ${hasRight ? "lg:grid-cols-2" : ""}`}>
        {/* Left — text */}
        <motion.div
          variants={stagger.container}
          initial="initial"
          animate="animate"
        >
          <motion.nav
            variants={stagger.item}
            className="mb-8 flex items-center gap-2 text-xs text-[var(--muted)]"
          >
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/#solutions" className="transition hover:text-white">Solutions</Link>
            <span>/</span>
            <span className="text-white">{data.tag}</span>
          </motion.nav>

          <motion.p
            variants={stagger.item}
            className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]"
          >
            {data.tag}
          </motion.p>

          <motion.h1
            variants={stagger.item}
            className="mt-5 text-4xl font-black uppercase leading-[1.05] text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            {data.headline}{" "}
            <span className="text-[var(--brand-gold)]">{data.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={stagger.item}
            className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]"
          >
            {data.subtext}
          </motion.p>

          <motion.div variants={stagger.item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:bd@mobilityone.com.my?subject=Business%20Enquiry"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-[var(--brand-amber)] hover:shadow-[0_0_50px_rgba(253,212,72,0.5)] hover:gap-3"
            >
              Business Enquiry
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            {data.externalLink && (
              <a
                href={data.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[var(--brand-gold)]/60 hover:bg-white/[0.04]"
              >
                {data.externalLink.label}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Right — custom hero */}
        {data.heroVariant === "payment-terminal" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: heroEase }}
            className="relative flex items-center justify-center"
          >
            <PaymentGatewayHero />
          </motion.div>
        )}

        {/* Right — image */}
        {data.heroImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: heroEase }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="pointer-events-none absolute inset-0 -m-8 rounded-[3rem] bg-[var(--brand-gold)]/10 blur-[60px]" />
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.4rem]">
                <Image
                  src={data.heroImage}
                  alt={data.tag}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
            {/* Corner badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 rounded-2xl border border-[var(--brand-gold)]/20 bg-[var(--background)] px-5 py-3 shadow-xl backdrop-blur-sm"
            >
              <p className="text-xs font-semibold text-[var(--brand-gold)] uppercase tracking-wider">BNM Licensed</p>
              <p className="mt-0.5 text-[10px] text-white/40">Bank Negara Malaysia</p>
            </motion.div>
          </motion.div>
        )}

        {/* Right — globe */}
        {data.heroGlobe && !data.heroImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: heroEase }}
            className="relative flex items-center justify-center"
          >
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[var(--brand-gold)]/8 blur-[80px]" />
            <GlobeInteractive
              className="w-full max-w-[520px]"
              speed={0.003}
              markers={[
                { id: "my", location: [3.14, 101.69], name: "Malaysia", users: 1200 },
                { id: "id", location: [-6.21, 106.85], name: "Indonesia", users: 3400 },
                { id: "bd", location: [23.81, 90.41], name: "Bangladesh", users: 2800 },
                { id: "np", location: [27.70, 85.32], name: "Nepal", users: 1900 },
                { id: "ph", location: [14.59, 120.98], name: "Philippines", users: 2100 },
                { id: "sa", location: [24.69, 46.72], name: "Saudi Arabia", users: 1500 },
                { id: "ae", location: [25.20, 55.27], name: "UAE", users: 980 },
              ]}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FEATURES                                                           */
/* ------------------------------------------------------------------ */

function FeatureCard({ feature, index }: { feature: SolutionFeature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
      {/* Text side */}
      <motion.div
        className={isEven ? "" : "lg:order-2"}
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: heroEase }}
      >
        {/* Number decoration */}
        <div className="flex items-center gap-4">
          <span
            className="text-[5rem] font-black leading-none text-black/[0.06] select-none"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--brand-olive)]/30 to-transparent" />
        </div>
        <h3
          className="-mt-3 text-2xl font-black uppercase leading-tight md:text-3xl"
          style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
        >
          {feature.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-black/55">{feature.description}</p>
      </motion.div>

      {/* Items side */}
      {feature.items && (
        <motion.div
          className={isEven ? "" : "lg:order-1"}
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: heroEase }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--brand-olive)] via-[var(--brand-gold)] to-transparent" />
            <ul className="space-y-4">
              {feature.items.map((item, j) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + j * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-olive)]/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-olive)]" />
                  </span>
                  <span className="text-sm leading-6 text-black/70">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function Features({ features }: { features: SolutionFeature[] }) {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section className="relative z-20 w-full rounded-t-[2.5rem] bg-[#F9FAFB] px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-24">
      {/* Subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:2rem_2rem] rounded-t-[2.5rem] md:rounded-t-[3.5rem]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div ref={headRef} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-black uppercase md:text-5xl"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            KEY <span className="text-[var(--brand-amber)]">FEATURES</span>
          </motion.h2>
        </div>

        {/* Feature rows with dividers */}
        <div className="flex flex-col">
          {features.map((feature, i) => (
            <div key={feature.title}>
              <FeatureCard feature={feature} index={i} />
              {i < features.length - 1 && (
                <div className="my-12 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PARTNERS                                                           */
/* ------------------------------------------------------------------ */

function Partners({ partners }: { partners: { label: string; names: string[] } }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[var(--brand-gold)]/6 blur-[160px]" />
      <div ref={ref} className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]"
        >
          {partners.label}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {partners.names.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.06 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-semibold text-white/80 transition duration-300 hover:border-[var(--brand-gold)]/30 hover:bg-[var(--brand-gold)]/5 hover:text-white"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WHITE-LABEL PARTNERS                                               */
/* ------------------------------------------------------------------ */

function WhitelabelPartners({ items }: { items: SolutionPartner[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative w-full bg-[var(--background)] px-6 py-20 md:px-10 md:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-[var(--brand-olive)]/10 blur-[150px]" />
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]"
          >
            White-Label Program
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl font-black uppercase text-white md:text-5xl"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            {items.length}+ PARTNERS <span className="text-[var(--brand-gold)]">LIVE</span>
          </motion.h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[var(--brand-gold)]/20 hover:bg-white/[0.07]"
            >
              {/* Left accent */}
              <div className="absolute inset-y-0 left-0 w-0.5 bg-gradient-to-b from-[var(--brand-gold)]/0 via-[var(--brand-gold)]/40 to-[var(--brand-gold)]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="text-base font-bold text-white">{p.name}</h3>
              {p.description && (
                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{p.description}</p>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--brand-gold)] transition hover:text-[var(--brand-amber)]"
                >
                  Visit site <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
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

export function SolutionPage({ data }: { data: SolutionPageData }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[var(--brand-gold)]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-[var(--brand-olive)]/20 blur-[120px]" />

      <Nav />
      <PageHero data={data} />
      <Features features={data.features} />
      {data.partners && <Partners partners={data.partners} />}
      {data.whitelabelPartners && <WhitelabelPartners items={data.whitelabelPartners} />}
      <Footer />
    </div>
  );
}
