import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Sparkles, Stethoscope, UserRound } from "lucide-react";

import { doctor, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { HexIcon, HexPhoto } from "@/components/site/hex";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Our team",
  description: `Meet ${doctor.name} and the team at ${site.name}.`,
  alternates: { canonical: "/about/our-team" },
};

/*
  TODO: replace these role descriptions with real team members
  (name, role, short bio, photo) once Dr. Patel provides them.
*/
const roles = [
  {
    icon: Sparkles,
    title: "Dental hygienists",
    text: "Your hygienist does your cleaning, checks your gums, and helps you build a routine that works at home.",
  },
  {
    icon: Stethoscope,
    title: "Dental assistants",
    text: "They set up the room, help Dr. Patel during treatment, and keep an eye on how you're doing in the chair.",
  },
  {
    icon: ClipboardList,
    title: "Front desk",
    text: "The first voice you'll hear. They book visits, sort out insurance questions, and explain estimates.",
  },
];

export default function OurTeam() {
  return (
    <>
      <PageHero
        title="The people behind your visit."
        lead="A small team that knows your name, remembers your kids, and has time for your questions."
        back={{ href: "/about/our-story", label: "Our story" }}
      />

      <section className="container-site grid gap-12 py-16 md:py-24 lg:grid-cols-[18rem_1fr] lg:gap-16">
        <HexPhoto
          src={site.photos.drPatel}
          alt={`Portrait of ${doctor.name}`}
          icon={UserRound}
          tone="honey"
          sizes="288px"
          className="mx-auto w-full max-w-[18rem]"
        />
        <div>
          <h2 className="text-[clamp(2rem,4.2vw,3rem)] font-bold">{doctor.name}</h2>
          <p className="mt-2 text-lg font-semibold text-honey-deep">
            {[doctor.role, ...doctor.credentials].join(", ")}
          </p>
          <div className="mt-6 max-w-[62ch] space-y-4 text-lg">
            {doctor.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Button asChild variant="link" className="mt-6 h-auto p-0 text-base">
            <Link href="/about/our-story">Read a note from Dr. Patel</Link>
          </Button>
        </div>
      </section>

      <section className="bg-foam">
        <div className="container-site py-16 md:py-24">
          <SectionHeading
            title="Who else you'll meet."
            lead="Every visit involves a few of us. Here's who does what."
          />
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {roles.map((r) => (
              <li key={r.title}>
                <HexIcon icon={r.icon} tone="honey" />
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-muted-foreground">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
