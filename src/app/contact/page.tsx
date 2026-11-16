import type { Metadata } from "next";

import { site } from "@/lib/site";
import { LocationBlock, PageHero } from "@/components/site/sections";
import { RequestForm } from "@/components/site/request-form";

export const metadata: Metadata = {
  title: "Contact and hours",
  description: `Address, phone, hours and directions for ${site.name}.`,
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHero
        title="Get in touch."
        lead="Call during clinic hours for the quickest answer, or send a message and we'll reply as soon as we can."
      />

      <section className="container-site py-16 md:py-24">
        <LocationBlock heading="Visit us" />
      </section>

      <section className="container-site grid gap-10 pb-20 md:pb-28 lg:grid-cols-[18rem_1fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold">Send a message</h2>
          <p className="mt-3 text-muted-foreground">
            For appointments, the booking form is quicker. In pain right now? Please call{" "}
            <a href={site.phoneHref} className="font-semibold text-hive underline decoration-honey decoration-2 underline-offset-4">
              {site.phone}
            </a>
            .
          </p>
        </div>
        <div className="max-w-2xl">
          <RequestForm kind="message" />
        </div>
      </section>
    </>
  );
}
