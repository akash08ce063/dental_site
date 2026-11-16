import type { Metadata } from "next";
import { UserRound } from "lucide-react";

import { doctor, site } from "@/lib/site";
import { HexPhoto } from "@/components/site/hex";
import { CtaBand, PageHero } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Our story",
  description: `Why ${doctor.name} opened ${site.name}, and what the name means.`,
  alternates: { canonical: "/about/our-story" },
};

/*
  TODO: this letter is a draft written for Dr. Patel to edit. Replace
  it with her own words and details (training, years in practice,
  ties to the neighbourhood) before launch.
*/
export default function OurStory() {
  return (
    <>
      <PageHero
        title="A clinic built like a hive."
        lead="Many careful hands, one shared purpose: looking after the people who walk through our door."
        back={{ href: "/about/our-team", label: "Meet the team" }}
      />

      <article className="container-site grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_20rem]">
        <div className="max-w-[62ch] space-y-6 text-lg">
          <p className="font-display text-2xl leading-snug font-semibold">
            Hello, and welcome. I&rsquo;m Heena.
          </p>
          <p>
            People often ask where the name came from. A hive is a place where everyone has a job,
            everyone looks out for everyone else, and a lot of small, careful work adds up to
            something good. That&rsquo;s the kind of clinic I wanted to build.
          </p>
          <p>
            I became a dentist because I like people, and I like fixing things properly. Over the
            years I noticed that what patients remembered most was rarely the filling or the
            crown. It was whether someone took the time to explain, whether they felt listened to,
            and whether anyone noticed they were nervous.
          </p>
          <p>
            So at Smile Hive we keep things simple. We book enough time that nobody is rushed. We
            show you what we see and tell you what we&rsquo;d do if it were our own tooth. We talk about
            cost before treatment, not after. And if you haven&rsquo;t been to a dentist in a long
            while, you&rsquo;ll get a warm welcome, not a lecture.
          </p>
          <p>
            Whether you&rsquo;re bringing a toddler for a first look, catching up on overdue care, or
            just looking for a dentist you can stay with, we&rsquo;d be glad to meet you.
          </p>
          <div className="pt-4">
            <p className="font-display text-3xl font-semibold">Heena Patel</p>
            <p className="text-muted-foreground">
              {[doctor.role, ...doctor.credentials].join(", ")}, {site.name}
            </p>
          </div>
        </div>

        <aside className="lg:pt-4">
          <HexPhoto
            src={site.photos.drPatel}
            alt={`Portrait of ${doctor.name}`}
            icon={UserRound}
            tone="honey"
            sizes="320px"
            className="mx-auto w-full max-w-xs"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground">{doctor.name}</p>
        </aside>
      </article>

      <CtaBand title="Come and say hello." lead="New patients are always welcome." />
    </>
  );
}
