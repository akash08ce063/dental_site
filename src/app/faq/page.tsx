import type { Metadata } from "next";

import { site } from "@/lib/site";
import { faqGroups } from "@/lib/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand, PageHero } from "@/components/site/sections";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description: `Answers about booking, insurance, first visits and emergencies at ${site.name}.`,
  alternates: { canonical: "/faq" },
};

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    ),
  };

  return (
    <>
      <PageHero
        title="Questions, answered."
        lead="The things people ask us most. If yours isn't here, call or send a message."
      />

      <section className="container-site space-y-16 py-16 md:py-24">
        {faqGroups.map((group) => (
          <div key={group.title} className="grid gap-6 lg:grid-cols-[18rem_1fr] lg:gap-16">
            <h2 className="text-3xl font-bold">{group.title}</h2>
            <Accordion type="multiple" className="border-t border-border">
              {group.items.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <CtaBand title="Still have a question?" lead="We're happy to talk it through." />
    </>
  );
}
