import type { Metadata } from "next";
import { Clock, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { Hours } from "@/components/site/hours";
import { PageHero } from "@/components/site/sections";
import { RequestForm } from "@/components/site/request-form";

export const metadata: Metadata = {
  title: "Book a visit",
  description: `Request an appointment with Dr. Heena Patel at ${site.name}.`,
  alternates: { canonical: "/book" },
};

export default function Book() {
  return (
    <>
      <PageHero
        title="Book a visit."
        lead="Tell us a little about what you need and when you're free. We'll get back to you to confirm a time."
      />

      <section className="container-site grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_22rem]">
        <div className="max-w-2xl">
          <RequestForm kind="booking" />
        </div>

        <aside className="h-fit space-y-8 rounded-xl bg-foam p-8">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold">
              <Phone aria-hidden className="size-5" /> Rather call?
            </h2>
            <p className="mt-2">
              <a href={site.phoneHref} className="font-display text-2xl font-semibold underline decoration-honey decoration-2 underline-offset-4">
                {site.phone}
              </a>
            </p>
            <p className="mt-2 text-[0.95rem] text-muted-foreground">
              For toothaches and other urgent problems, calling is always fastest.
            </p>
          </div>
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
              <Clock aria-hidden className="size-5" /> Hours
            </h2>
            <Hours />
          </div>
        </aside>
      </section>
    </>
  );
}
