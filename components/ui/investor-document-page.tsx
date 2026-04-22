import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import type { InvestorDocument } from "@/lib/site-content";

type InvestorDocumentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  documents: InvestorDocument[];
};

export function InvestorDocumentPage({
  eyebrow,
  title,
  description,
  documents,
}: InvestorDocumentPageProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      <Nav />
      <main className="relative z-10 flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-8 md:px-10 md:pb-20 md:pt-16">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/" className="transition hover:text-black">Home</Link>
            <span>/</span>
            <Link href="/investor-relations" className="transition hover:text-black">Investor Relations</Link>
            <span>/</span>
            <span className="text-black">{title}</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--brand-amber)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold uppercase leading-[1.05] tracking-tight text-black md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
            {description}
          </p>
        </section>

        <section className="w-full border-y border-black/5 bg-white/75 px-6 py-12 backdrop-blur md:px-10 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-olive)]">
                  Archive
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {documents.length} official document links.
                </p>
              </div>
              <Link
                href="/investor-relations"
                className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-black transition hover:bg-black hover:text-white"
              >
                IR Overview
              </Link>
            </div>

            <div className="overflow-hidden rounded-lg border border-black/10 bg-white">
              {documents.map((doc) => (
                <a
                  key={`${doc.title}-${doc.href}`}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-4 border-b border-black/10 p-5 transition hover:bg-[var(--brand-gold)]/10 last:border-b-0 md:grid-cols-[9rem_1fr_auto]"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-olive)]">
                    {doc.date ?? doc.category}
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-amber)]" />
                    <div>
                      <h2 className="text-sm font-bold text-black">{doc.title}</h2>
                      <p className="mt-1 text-xs text-[var(--muted)]">{doc.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-black">
                    Open PDF <ArrowUpRight className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
