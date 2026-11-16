import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";

import { site } from "@/lib/site";
import { getService, services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { HexIcon } from "@/components/site/hex";
import { CtaBand, PageHero } from "@/components/site/sections";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.summary} ${site.name}, with Dr. Heena Patel.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const emergency = service.slug === "emergencies";

  return (
    <>
      <PageHero
        title={service.title}
        lead={service.intro}
        back={{ href: "/services", label: "All services" }}
      >
        {emergency && (
          <Button asChild size="lg" className="mt-8">
            <a href={site.phoneHref}>
              <Phone aria-hidden /> Call {site.phone}
            </a>
          </Button>
        )}
      </PageHero>

      <section className="container-site grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_22rem]">
        <div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">What&rsquo;s included</h2>
          <dl className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {service.treatments.map((t) => (
              <div key={t.name} className="border-t border-border py-5">
                <dt className="font-display text-xl font-semibold">{t.name}</dt>
                <dd className="mt-1 text-muted-foreground">{t.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="h-fit rounded-xl bg-pollen p-8">
          <h2 className="text-2xl font-bold">Good to know</h2>
          <ul className="mt-5 space-y-4">
            {service.goodToKnow.map((g) => (
              <li key={g} className="flex gap-3">
                <span aria-hidden className="hex mt-1.5 w-3 shrink-0 bg-honey-deep" style={{ aspectRatio: "1 / 1.1547", height: "fit-content" }} />
                <span>{g}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 w-full">
            <Link href="/book">Book a visit</Link>
          </Button>
        </aside>
      </section>

      <section className="bg-foam">
        <div className="container-site py-16">
          <h2 className="text-2xl font-bold">Other services</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-3 rounded-full bg-white py-2 pr-5 pl-2 font-semibold hover:bg-hive hover:text-white"
                >
                  <HexIcon icon={s.icon} className="w-9 [&_svg]:size-4" />
                  <span>{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
