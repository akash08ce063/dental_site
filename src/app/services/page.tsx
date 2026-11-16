import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { HexIcon } from "@/components/site/hex";
import { CtaBand, PageHero } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Dental services",
  description: `Preventive, restorative, cosmetic and children's dentistry, plus urgent care, at ${site.name}.`,
  alternates: { canonical: "/services" },
};

export default function Services() {
  return (
    <>
      <PageHero
        title="Everything your smile needs, in one place."
        lead="Pick a category to see what's involved. Not sure where you fit? Book a checkup and we'll work it out together."
      />

      <section className="container-site py-16 md:py-24">
        <ul className="divide-y divide-border border-y border-border">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid items-center gap-5 py-8 transition-colors hover:bg-muted md:grid-cols-[auto_1fr_1.4fr_auto] md:gap-10 md:px-4"
              >
                <HexIcon icon={s.icon} className="group-hover:bg-honey" />
                <h2 className="text-2xl font-semibold md:text-3xl">{s.title}</h2>
                <div>
                  <p className="text-muted-foreground">{s.summary}</p>
                  <p className="mt-2 text-sm">
                    {s.treatments
                      .slice(0, 4)
                      .map((t) => t.name)
                      .join(", ")}
                    {s.treatments.length > 4 ? " and more" : ""}
                  </p>
                </div>
                <ArrowUpRight aria-hidden className="hidden size-6 opacity-40 group-hover:opacity-100 md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title="Not sure what you need?" lead="Start with a checkup. We'll take it from there." />
    </>
  );
}
