"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AlertTriangle, ArrowRight, BadgeCheck, CreditCard, Search, ShieldCheck } from "lucide-react";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import {
  payBillProducts,
  paymentMethods,
  solutionPartnerGroups,
  type Partner,
  type PayBillProduct,
} from "@/lib/site-content";

const categories = ["All", "Bills", "Prepaid", "Entertainment", "International", "Charity"] as const;
const fallbackProvider: Partner = { name: "MobilityOne", role: "provider" };

function normalizeProduct(product: PayBillProduct): PayBillProduct {
  return {
    ...product,
    provider: product.provider ?? fallbackProvider,
    imageUrl: product.imageUrl ?? "https://onepay.com.my/?A=000",
    demoImage: product.demoImage ?? product.imageUrl ?? "https://onepay.com.my/?A=000",
    accountLabel: product.accountLabel ?? "account or phone number",
    denominations:
      product.denominations && product.denominations.length > 0
        ? product.denominations
        : [{ label: "Open amount", amount: "RM 1.00 - RM 5,000.00" }],
    paymentPartners: product.paymentPartners ?? [],
  };
}

const normalizedPayBillProducts = payBillProducts.map(normalizeProduct);

function ProductLogo({ product, size = "md" }: { product: PayBillProduct; size?: "md" | "lg" }) {
  const [failed, setFailed] = useState(false);
  const className =
    size === "lg"
      ? "h-16 w-16 rounded-lg text-xl"
      : "h-12 w-12 rounded-md text-sm";

  if (failed) {
    return (
      <div className={`${className} flex shrink-0 items-center justify-center border border-black/10 bg-[var(--brand-gold)]/20 font-bold text-black`}>
        {product.name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={product.imageUrl}
      alt={`${product.name} logo`}
      onError={() => setFailed(true)}
      className={`${className} shrink-0 border border-black/10 bg-white object-contain`}
    />
  );
}

function PartnerLogo({ partner }: { partner: Partner }) {
  if (!partner.logo) {
    return (
      <div className="flex h-10 w-24 items-center justify-center rounded-md border border-black/10 bg-white px-2 text-center text-[10px] font-bold leading-tight text-black">
        {partner.name}
      </div>
    );
  }

  return (
    <div className="relative flex h-10 w-24 items-center justify-center rounded-md border border-black/10 bg-white p-2">
      <Image src={partner.logo} alt={partner.name} fill sizes="96px" className="object-contain p-2" />
    </div>
  );
}

export function ReloadPayBillDemo() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<PayBillProduct>(normalizedPayBillProducts[0]);
  const [selectedDeno, setSelectedDeno] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return normalizedPayBillProducts.filter((product) => {
      const categoryMatch = category === "All" || product.category === category;
      const queryMatch =
        term.length === 0 ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);
      return categoryMatch && queryMatch;
    });
  }, [category, query]);

  function selectProduct(product: PayBillProduct) {
    setSelected(normalizeProduct(product));
    setSelectedDeno(0);
  }

  const denomination = selected.denominations[selectedDeno];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      <Nav />
      <main className="relative z-10 flex-1">
        <section className="mx-auto w-full max-w-7xl px-6 pb-10 pt-8 md:px-10 md:pb-16 md:pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-amber)]">
                Reload & Pay Bill
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-black md:text-6xl lg:text-7xl">
                Pay bills, reload, and choose checkout rails
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
                Choose a service, review the provider, select a denomination, enter account details, then choose from online banking, card, QR, and wallet rails.
              </p>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                {[
                  ["8", "Demo services"],
                  ["10", "Payment rails"],
                  ["4", "Partner groups"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border border-black/10 bg-white/80 p-4">
                    <p className="text-2xl font-bold text-black">{value}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-black/10 bg-white p-4 shadow-2xl shadow-black/10">
              <div className="overflow-hidden rounded-lg border border-black/10 bg-[var(--surface)]">
                <div className="grid min-h-80 gap-5 p-5 md:grid-cols-[0.85fr_1.15fr]">
                  <div className="flex flex-col justify-between rounded-lg border border-black/10 bg-white p-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-olive)]">
                        {selected.category}
                      </p>
                      <h2 className="mt-3 text-2xl font-bold text-black">{selected.name}</h2>
                      <p className="mt-2 text-sm text-[var(--muted)]">Provider: {selected.provider.name}</p>
                    </div>
                    <div className="mt-8 flex h-32 items-center justify-center rounded-lg border border-black/10 bg-[#F8FAFC]">
                      <ProductLogo product={selected} size="lg" />
                    </div>
                  </div>

                  <div className="rounded-lg border border-black/10 bg-white p-5">
                    <div className="grid gap-4">
                      <label className="grid gap-2">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/55">
                          Account / Phone
                        </span>
                        <span className="rounded-lg border border-black/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[var(--muted)]">
                          {selected.accountLabel}
                        </span>
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-black/55">
                          Amount
                        </span>
                        <span className="rounded-lg border border-black/10 bg-[#F8FAFC] px-4 py-3 text-sm text-[var(--muted)]">
                          {denomination?.amount ?? denomination?.label ?? "Select denomination"}
                        </span>
                      </label>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/55">
                          Payment Method
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {paymentMethods.slice(0, 5).map((method) => (
                            <span
                              key={method}
                              className="rounded-full border border-black/10 bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-black/60"
                            >
                              {method}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-[var(--brand-amber)]/30 bg-[var(--brand-gold)]/15 p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-amber)]" />
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    Demo only. No payment is created without approved OnePay/MobilityOne API access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-6 pb-8 md:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-black/10 bg-white">
            <div className="grid gap-0 lg:grid-cols-4">
              {solutionPartnerGroups.map((group) => (
                <div key={group.title} className="border-b border-black/10 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-olive)]">{group.title}</p>
                  <p className="mt-2 min-h-10 text-xs leading-5 text-[var(--muted)]">{group.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.partners.slice(0, 6).map((partner) => (
                      <PartnerLogo key={`${group.title}-${partner.name}`} partner={partner} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full border-y border-black/5 bg-white/75 px-6 py-8 backdrop-blur md:px-10 md:py-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_28rem]">
            <div>
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap gap-2">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        category === item
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white text-black hover:border-black/30"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <label className="flex min-w-0 items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 md:w-72">
                  <Search className="h-4 w-4 shrink-0 text-[var(--muted)]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search services"
                    className="min-w-0 flex-1 bg-transparent text-sm text-black outline-none placeholder:text-[var(--muted)]"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product) => (
                  <button
                    key={product.code}
                    type="button"
                    onClick={() => selectProduct(product)}
                    className={`min-h-56 overflow-hidden rounded-lg border text-left transition hover:-translate-y-0.5 hover:shadow-xl ${
                      selected.code === product.code
                        ? "border-[var(--brand-amber)] bg-[var(--brand-gold)]/15"
                        : "border-black/10 bg-white"
                    }`}
                  >
                    <div className="flex aspect-[16/9] items-center justify-center border-b border-black/10 bg-[var(--surface)]">
                      <ProductLogo product={product} size="lg" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand-olive)]">
                          {product.category}
                        </p>
                        <span className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold text-white">
                          {product.code}
                        </span>
                      </div>
                      <h2 className="mt-2 text-base font-bold text-black">{product.name}</h2>
                      <p className="mt-1 text-xs text-[var(--muted)]">Provider: {product.provider.name}</p>
                      <p className="mt-3 line-clamp-2 text-xs leading-5 text-[var(--muted)]">
                        {product.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-black/10 bg-white p-5 shadow-2xl shadow-black/10 lg:sticky lg:top-6 lg:self-start">
              <div className="flex items-start gap-3 border-b border-black/10 pb-5">
                <ProductLogo product={selected} size="lg" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand-olive)]">
                    Selected Service
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-black">{selected.name}</h2>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {selected.provider.logo && <PartnerLogo partner={selected.provider} />}
                    <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-black">
                      {selected.provider.name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-b border-black/10 py-5">
                {[
                  { icon: BadgeCheck, label: "Provider", value: selected.provider.name },
                  { icon: ShieldCheck, label: "Mode", value: "Demo" },
                  { icon: CreditCard, label: "Rails", value: String(selected.paymentPartners.length) },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-black/10 bg-[var(--surface)] p-3">
                    <item.icon className="h-4 w-4 text-[var(--brand-olive)]" />
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">{item.label}</p>
                    <p className="mt-1 truncate text-xs font-bold text-black">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="py-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">Denomination</p>
                <div className="mt-3 grid gap-2">
                  {selected.denominations.map((item, index) => (
                    <button
                      key={`${item.label}-${index}`}
                      type="button"
                      onClick={() => setSelectedDeno(index)}
                      className={`rounded-md border p-3 text-left text-sm transition ${
                        selectedDeno === index
                          ? "border-black bg-black text-white"
                          : "border-black/10 bg-white text-black hover:border-black/30"
                      }`}
                    >
                      <span className="font-semibold">{item.label}</span>
                      {item.amount && <span className="ml-2 text-xs opacity-70">{item.amount}</span>}
                      {item.description && <p className="mt-1 text-xs opacity-70">{item.description}</p>}
                    </button>
                  ))}
                </div>
              </div>

              <form className="space-y-3 border-t border-black/10 pt-5">
                <label className="block">
                  <span className="text-xs font-semibold text-black">{selected.accountLabel}</span>
                  <input
                    placeholder={`Enter ${selected.accountLabel.toLowerCase()}`}
                    className="mt-2 w-full rounded-md border border-black/10 px-3 py-3 text-sm outline-none transition focus:border-[var(--brand-amber)]"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-black">Receipt email</span>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="mt-2 w-full rounded-md border border-black/10 px-3 py-3 text-sm outline-none transition focus:border-[var(--brand-amber)]"
                  />
                </label>
                {selected.requiresCharityReceipt && (
                  <div className="rounded-md border border-[var(--brand-amber)]/30 bg-[var(--brand-gold)]/10 p-3 text-xs leading-5 text-[var(--muted)]">
                    Charity payments require full name, identification number, and address in the live flow for tax receipt purposes.
                  </div>
                )}
              </form>

              <div className="mt-5 border-t border-black/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black">Payment Method</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {paymentMethods.map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${
                        paymentMethod === method
                          ? "border-[var(--brand-amber)] bg-[var(--brand-gold)]/20 text-black"
                          : "border-black/10 bg-white text-black hover:border-black/30"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.paymentPartners.map((partner) => (
                    <PartnerLogo key={`${selected.code}-${partner.name}`} partner={partner} />
                  ))}
                </div>
              </div>

              <button
                type="button"
                disabled
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-black/20 px-4 py-3 text-sm font-bold text-black/50"
              >
                Demo checkout disabled <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
                Selected: {selected.name}, {denomination?.label}, {paymentMethod}.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
