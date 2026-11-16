import Link from "next/link";
import { ChevronLeft, MapPin, Phone } from "lucide-react";

import { fullAddress, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Hours } from "@/components/site/hours";

/* Title block used at the top of every inner page. */
export function PageHero({
  title,
  lead,
  back,
  children,
}: {
  title: string;
  lead?: string;
  back?: { href: string; label: string };
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-pollen">
      <div
        aria-hidden
        className="hex absolute -top-16 -right-10 hidden w-64 bg-honey/50 md:block"
        style={{ aspectRatio: "1 / 1.1547" }}
      />
      <div
        aria-hidden
        className="hex absolute top-28 right-40 hidden w-28 bg-white/70 md:block"
        style={{ aspectRatio: "1 / 1.1547" }}
      />
      <div className="container-site relative py-16 md:py-24">
        {back && (
          <Link
            href={back.href}
            className="mb-6 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
          >
            <ChevronLeft aria-hidden className="size-4" />
            {back.label}
          </Link>
        )}
        <h1 className="max-w-3xl text-[clamp(2.4rem,6vw,4.25rem)] font-bold">{title}</h1>
        {lead && <p className="mt-5 max-w-2xl text-xl text-hive/85">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  lead,
  className,
}: {
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold">{title}</h2>
      {lead && <p className="mt-4 text-lg text-muted-foreground">{lead}</p>}
    </div>
  );
}

/* Closing call to action, shown above the footer on most pages. */
export function CtaBand({
  title = "Ready when you are.",
  lead = "Request a time online, or call and talk to a real person.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <section className="bg-honey">
      <div className="container-site flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center md:py-16">
        <div>
          <h2 className="text-[clamp(1.9rem,4vw,2.75rem)] font-bold">{title}</h2>
          <p className="mt-2 text-lg text-hive/85">{lead}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/book">Book a visit</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.phoneHref}>
              <Phone aria-hidden /> {site.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* Address, hours and map. The map appears once mapEmbedUrl is set. */
export function LocationBlock({ heading = "Find us" }: { heading?: string }) {
  const directions =
    site.mapLinkUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress())}`;

  return (
    <div className="grid overflow-hidden rounded-xl border border-border lg:grid-cols-2">
      <div className="p-8 md:p-12">
        <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold">{heading}</h2>
        <address className="mt-6 space-y-1 text-lg not-italic">
          <p>{site.address.street}</p>
          <p>
            {site.address.city}, {site.address.region} {site.address.postalCode}
          </p>
          <p className="pt-3">
            <a href={site.phoneHref} className="font-semibold underline decoration-honey decoration-2 underline-offset-4">
              {site.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="underline decoration-honey decoration-2 underline-offset-4">
              {site.email}
            </a>
          </p>
        </address>
        <h3 className="mt-8 mb-3 text-xl font-semibold">Hours</h3>
        <Hours className="max-w-xs" />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="accent">
            <Link href="/book">Book a visit</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={directions} target="_blank" rel="noreferrer">
              <MapPin aria-hidden /> Get directions
            </a>
          </Button>
        </div>
      </div>

      {site.mapEmbedUrl ? (
        <iframe
          src={site.mapEmbedUrl}
          title={`Map showing ${site.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-80 w-full border-0 lg:min-h-full"
        />
      ) : (
        <div className="relative grid min-h-80 place-items-center overflow-hidden bg-foam">
          <div aria-hidden className="absolute inset-0 opacity-60 [background-image:radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:22px_22px]" />
          <div className="relative flex flex-col items-center gap-3 px-6 text-center">
            <div className="hex grid w-20 place-items-center bg-honey" style={{ aspectRatio: "1 / 1.1547" }}>
              <MapPin aria-hidden className="size-8" />
            </div>
            <p className="font-display text-xl font-semibold">{site.name}</p>
            <p className="max-w-xs text-muted-foreground">{fullAddress()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
