"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Payment Terminal", href: "/solutions/payment-terminal" },
  { label: "Payment Gateway", href: "/solutions/payment-gateway" },
  { label: "E-Money", href: "/solutions/e-money" },
  { label: "Remittance", href: "/solutions/remittance" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  return (
    <nav className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/img/m1-mark.svg"
          alt="MobilityOne"
          width={48}
          height={48}
          className="h-9 w-auto md:h-11"
          priority
        />
      </Link>

      <div className="hidden items-center space-x-2 lg:flex">
        {navLinks.map((item) => (
          <Link key={item.label} href={item.href} className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/10">
            {item.label}
          </Link>
        ))}
      </div>

      <Link href="/contact" className="rounded-full border border-white px-6 py-2 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black md:text-sm">
        Contact us
      </Link>
    </nav>
  );
}
