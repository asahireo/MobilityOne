import type { Metadata } from "next";
import { StaticInfoPage } from "@/components/ui/static-info-page";
import { boardMembers } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Board of Directors | MobilityOne",
  description: "Board of Directors for MobilityOne.",
};

export default function BoardPage() {
  return (
    <StaticInfoPage
      eyebrow="About MobilityOne"
      title="Board of Directors"
      description="Board leadership and director profiles recreated from the public MobilityOne website."
      breadcrumb="About"
      sections={[
        {
          heading: "Board Overview",
          body:
            "The board combines executive payment-infrastructure leadership with independent governance, listed-company, investment, and public-sector experience.",
        },
      ]}
    >
      <section className="w-full px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {boardMembers.map((member) => (
            <article key={member.name} className="rounded-lg border border-black/10 bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-olive)]">
                {member.role}
              </p>
              <h2 className="mt-3 text-xl font-bold text-black">{member.name}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{member.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </StaticInfoPage>
  );
}
