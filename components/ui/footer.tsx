"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-black/5 bg-[var(--background)] px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-1.5">
            <div className="rounded-2xl rounded-bl-sm bg-black px-3 py-1.5 text-xs font-black text-white">MOBILITY</div>
            <div className="rounded-full bg-[var(--brand-gold)] px-3 py-1.5 text-xs font-black text-black">ONE</div>
          </Link>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            MobilityOne Sdn Bhd (200201033972) is regulated under the laws of Malaysia as e-money issuance business and merchant acquiring services, pursuant to licenses by Mastercard Asia/Pacific Ltd and Bank Negara Malaysia.
          </p>
          <p className="mt-3 text-xs text-[var(--muted)]">
            LSE: MBO.UK — Listed on AIM of the London Stock Exchange
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-black">Solutions</p>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li><Link href="/solutions/payment-terminal" className="transition hover:text-black">Payment Terminal</Link></li>
              <li><Link href="/solutions/payment-gateway" className="transition hover:text-black">Payment Gateway</Link></li>
              <li><Link href="/solutions/e-money" className="transition hover:text-black">E-Money Solution</Link></li>
              <li><Link href="/solutions/remittance" className="transition hover:text-black">Remittance</Link></li>
              <li><Link href="/reload-pay-bill" className="transition hover:text-black">Reload & Pay Bill</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-black">Company</p>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li><Link href="/about" className="transition hover:text-black">About us</Link></li>
              <li><Link href="/about/mission-vision" className="transition hover:text-black">Mission & Vision</Link></li>
              <li><Link href="/about/board" className="transition hover:text-black">Board of Directors</Link></li>
              <li><Link href="/investor-relations" className="transition hover:text-black">Investor Relations</Link></li>
              <li><Link href="/news" className="transition hover:text-black">News & Updates</Link></li>
              <li><Link href="/career" className="transition hover:text-black">Career</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-black">Contact</p>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li>+603-9213 0669</li>
              <li><a href="mailto:m1enquiry@mobilityone.com.my" className="transition hover:text-black">m1enquiry@mobilityone.com.my</a></li>
              <li><Link href="/privacy" className="transition hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="transition hover:text-black">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-black/5 pt-8 sm:flex-row">
        <p className="text-xs text-[var(--muted)]">&copy; 2026 MobilityOne Sdn Bhd. All rights reserved.</p>
        <div className="flex gap-4">
          {[
            { name: "Instagram", href: "https://www.instagram.com/mobilityone.1" },
            { name: "Facebook", href: "https://www.facebook.com/m1sabah" },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/mobilityone-sdn-bhd/" },
          ].map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] transition hover:text-black">{s.name}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
