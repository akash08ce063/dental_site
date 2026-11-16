import Link from "next/link";
import {
  Armchair,
  ArrowUpRight,
  HandHeart,
  MessageCircle,
  Receipt,
  UserRound,
  UsersRound,
} from "lucide-react";

import { doctor, site } from "@/lib/site";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { HexIcon, HexPhoto } from "@/components/site/hex";
import { Honeycomb } from "@/components/site/honeycomb";
import { CtaBand, LocationBlock, SectionHeading } from "@/components/site/sections";

const promises = [
  {
    icon: HandHeart,
    title: "Gentle by default",
    text: "We numb thoroughly, check in often, and stop the moment you raise a hand.",
  },
  {
    icon: MessageCircle,
    title: "Plain-language answers",
    text: "You'll see what we see and hear your options without the jargon.",
  },
  {
    icon: Receipt,
    title: "Costs before treatment",
    text: "A written estimate comes first, so the bill never surprises you.",
  },
  {
    icon: UsersRound,
    title: "Room for everyone",
    text: "First teeth to dentures. Book the family together if that's easier.",
  },
];

const steps = [
  {
    title: "Say hello",
    text: "We'll get you settled and go over your history and anything that's worrying you.",
  },
  {
    title: "A careful look",
    text: "Dr. Patel examines your teeth and gums, with X-rays only if they're useful.",
  },
  {
    title: "Talk it through",
    text: "You'll hear what's healthy, what to watch, and what your options are.",
  },
  {
    title: "Leave with a plan",
    text: "A clear next step and a written estimate. No pressure to decide on the spot.",
  },
];

const payment = [
  {
    title: "Using insurance",
    text: "Send us your plan details when you book. We'll check your coverage and explain how billing will work before you come in.",
  },
  {
    title: "Estimates in writing",
    text: "Before any treatment starts you'll know the fee, what your plan is expected to cover, and what's left for you.",
  },
  {
    title: "No insurance",
    text: "You're just as welcome. We'll go over fees up front and talk through ways to spread out larger treatment.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-pollen">
        <div className="container-site grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          <div>
            <h1 className="text-[clamp(2.75rem,7vw,5rem)] font-extrabold">
              Family dentistry that never feels rushed.
            </h1>
            <p className="mt-6 max-w-xl text-xl text-hive/85">
              At Smile Hive Dental, Dr. Heena Patel looks after kids, parents and grandparents
              with gentle hands, clear explanations, and all the time you need.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/book">Book a visit</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">See our services</Link>
              </Button>
            </div>
            <p className="mt-6 text-[0.95rem] text-hive/80">
              Prefer to talk? Call{" "}
              <a href={site.phoneHref} className="font-semibold underline decoration-honey decoration-2 underline-offset-4">
                {site.phone}
              </a>
            </p>
          </div>
          <Honeycomb className="mx-auto max-w-xl lg:max-w-none" />
        </div>
      </section>

      {/* What we promise */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading
          title="What you can count on, every visit."
          lead="A dental clinic works a little like a hive: lots of small, careful jobs done well, by people who look out for each other."
        />
        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <li key={p.title}>
              <HexIcon icon={p.icon} />
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="bg-foam">
        <div className="container-site py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="Care for every stage of life."
              lead="From a toddler's first checkup to restoring a worn smile, most of what your family needs is under one roof."
            />
            <Button asChild variant="outline">
              <Link href="/services">All services</Link>
            </Button>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-xl bg-white p-7 transition-colors hover:bg-hive hover:text-white"
                >
                  <div className="flex items-start justify-between">
                    <HexIcon icon={s.icon} className="group-hover:bg-honey" />
                    <ArrowUpRight aria-hidden className="size-5 opacity-40 transition-opacity group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground group-hover:text-white/80">{s.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* First visit */}
      <section className="container-site grid gap-14 py-20 md:py-28 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-sm">
          <HexPhoto
            src={site.photos.reception}
            alt="The reception area at Smile Hive Dental"
            icon={Armchair}
            tone="foam"
            sizes="(min-width: 1024px) 30vw, 80vw"
          />
          <div aria-hidden className="hex absolute -right-4 -bottom-6 w-24 bg-honey" style={{ aspectRatio: "1 / 1.1547" }} />
        </div>
        <div>
          <SectionHeading
            title="Your first visit, step by step."
            lead="New patients often tell us it was easier than they expected. Here's how it goes."
          />
          <ol className="mt-10 space-y-7">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="hex grid w-12 shrink-0 place-items-center bg-hive font-display text-lg font-bold text-white" style={{ aspectRatio: "1 / 1.1547" }}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Dr. Patel */}
      <section className="bg-hive text-white">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold">Meet {doctor.name}.</h2>
            <p className="mt-2 text-lg text-honey">
              {[doctor.role, ...doctor.credentials].join(", ")}
            </p>
            <div className="mt-6 max-w-xl space-y-4 text-lg text-white/85">
              {doctor.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <Link href="/about/our-story">Read our story</Link>
              </Button>
              <Button asChild variant="outline-light">
                <Link href="/about/our-team">Meet the team</Link>
              </Button>
            </div>
          </div>
          <HexPhoto
            src={site.photos.drPatel}
            alt={`Portrait of ${doctor.name}`}
            icon={UserRound}
            tone="honey"
            sizes="(min-width: 1024px) 28vw, 70vw"
            className="mx-auto w-full max-w-xs lg:max-w-sm"
          />
        </div>
      </section>

      {/* Insurance and payment */}
      <section className="container-site py-20 md:py-28">
        <SectionHeading
          title="Clear about cost."
          lead="Money shouldn't be the awkward part of a dental visit. We talk about it early and plainly."
        />
        <dl className="mt-12 grid gap-x-10 gap-y-8 border-t-2 border-hive pt-10 md:grid-cols-3">
          {payment.map((p) => (
            <div key={p.title}>
              <dt className="font-display text-xl font-semibold">{p.title}</dt>
              <dd className="mt-2 text-muted-foreground">{p.text}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10">
          <Button asChild variant="link" className="h-auto p-0 text-base">
            <Link href="/faq">More questions answered in our FAQ</Link>
          </Button>
        </p>
      </section>

      {/* Location */}
      <section className="container-site pb-20 md:pb-28">
        <LocationBlock />
      </section>

      <CtaBand />
    </>
  );
}
