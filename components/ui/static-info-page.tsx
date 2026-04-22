import Link from "next/link";
import Nav from "@/components/ui/nav";
import Footer from "@/components/ui/footer";
import type { InfoSection } from "@/lib/site-content";

type StaticInfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: InfoSection[];
  breadcrumb?: string;
  children?: React.ReactNode;
};

export function StaticInfoPage({
  eyebrow,
  title,
  description,
  sections,
  breadcrumb,
  children,
}: StaticInfoPageProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden font-sans selection:bg-[var(--brand-gold)] selection:text-black">
      <Nav />
      <main className="relative z-10 flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-8 md:px-10 md:pb-20 md:pt-16">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[var(--muted)]">
            <Link href="/" className="transition hover:text-black">Home</Link>
            <span>/</span>
            {breadcrumb && (
              <>
                <span>{breadcrumb}</span>
                <span>/</span>
              </>
            )}
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

        <section className="w-full border-y border-black/5 bg-white/70 px-6 py-14 backdrop-blur md:px-10 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--brand-olive)]">
                Source Summary
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Recreated from the public MobilityOne website with refreshed structure and local navigation.
              </p>
            </div>
            <div className="space-y-8">
              {sections.map((section) => (
                <article key={section.heading} className="border-b border-black/10 pb-8 last:border-b-0 last:pb-0">
                  <h2 className="text-2xl font-bold tracking-tight text-black">{section.heading}</h2>
                  {section.body && (
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{section.body}</p>
                  )}
                  {section.items && (
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--muted)]">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-gold)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {children}
      </main>
      <Footer />
    </div>
  );
}
