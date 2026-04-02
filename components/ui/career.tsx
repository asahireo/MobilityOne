"use client";

import { motion } from "motion/react";
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

const departments = [
  {
    name: "Support",
    roles: ["Application Support Engineer", "System Support Engineer"],
  },
  {
    name: "Development",
    roles: ["Web Developer", "Senior Software Developer", "Junior Software Developer"],
  },
  {
    name: "Customer Service",
    roles: ["Customer Service Executive"],
  },
  {
    name: "Project Management",
    roles: ["Business Analyst"],
  },
  {
    name: "Business",
    roles: ["Sales/Marketing Executive"],
  },
];

const perks = [
  "MSC Malaysia status company",
  "Work at the forefront of Malaysian fintech",
  "BNM-regulated, Mastercard-partnered environment",
  "Collaborative and growth-driven culture",
  "Competitive salary and benefits",
  "Learning and development opportunities",
];

export function CareerPage() {
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
            <span className="text-white">Career</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-gold)]">Join Us</p>
          <h1
            className="mx-auto mt-6 max-w-4xl text-4xl font-black uppercase leading-tight text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            BUILD MALAYSIA&apos;S PAYMENT <span className="text-[var(--brand-gold)]">FUTURE</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Join a team powering Malaysia&apos;s digital payment infrastructure - BNM-licensed, Mastercard-partnered, and MSC Malaysia status.
          </p>
          <a
            href="mailto:jobs@mobilityone.com.my?subject=Job%20Application"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--brand-gold)] px-8 py-4 text-sm font-bold text-black transition hover:bg-[var(--brand-amber)] hover:shadow-[0_0_40px_rgba(253,212,72,0.4)]"
          >
            Send Your Resume <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* Why MobilityOne */}
      <section className="relative w-full bg-[var(--background)] px-6 pb-20 md:px-10 md:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--brand-gold)]/8 blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">Why Join Us</p>
            <h2
              className="mt-6 text-4xl font-black uppercase text-white md:text-5xl"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              WHY <span className="text-[var(--brand-gold)]">MOBILITYONE</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => (
              <motion.div
                key={perk}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-[1.5rem] border border-white/8 bg-white/[0.04] p-5"
              >
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-gold)]" />
                <p className="text-sm leading-6 text-white/80">{perk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative z-20 w-full rounded-t-[2.5rem] bg-white px-6 py-16 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.2)] md:rounded-t-[3.5rem] md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-olive)]">Opportunities</p>
            <h2
              className="mt-4 text-4xl font-black uppercase md:text-5xl"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              OPEN <span className="text-[var(--brand-amber)]">POSITIONS</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-olive)]">
                  {dept.name}
                </p>
                <div className="flex flex-col gap-3">
                  {dept.roles.map((role) => (
                    <a
                      key={role}
                      href={`mailto:jobs@mobilityone.com.my?subject=Application%20-%20${encodeURIComponent(role)}`}
                      className="group flex items-center justify-between rounded-[1.5rem] border border-gray-100 bg-[#F8F9FA] px-6 py-4 transition hover:border-[var(--brand-gold)]/30 hover:bg-[var(--brand-gold)]/5"
                    >
                      <div className="flex items-center gap-3">
                        <Briefcase className="h-4 w-4 text-[var(--brand-olive)]" />
                        <span className="font-semibold text-black">{role}</span>
                      </div>
                      <span className="text-xs font-semibold text-[var(--brand-olive)] opacity-0 transition group-hover:opacity-100">
                        Apply →
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 rounded-[2rem] border border-gray-100 bg-[var(--brand-gold)]/5 p-8 text-center"
          >
            <p className="text-base font-bold">Don&apos;t see your role?</p>
            <p className="mt-2 text-sm text-black/60">
              We&apos;re always looking for talented people. Send your CV to{" "}
              <a href="mailto:jobs@mobilityone.com.my" className="font-semibold text-[var(--brand-olive)] underline underline-offset-2">
                jobs@mobilityone.com.my
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
