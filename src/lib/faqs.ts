/*
  TODO: these answers describe common policies. Confirm each one
  matches how the clinic actually works before launch.
*/
export const faqGroups = [
  {
    title: "Booking and first visits",
    items: [
      {
        q: "Are you accepting new patients?",
        a: "Yes. Send a booking request or call us and we'll find a time that works. You don't need a referral.",
      },
      {
        q: "What happens at my first visit?",
        a: "We'll talk about your dental history and anything that's bothering you, take X-rays if they're needed, and Dr. Patel will do a full exam. You'll leave knowing what's healthy, what to keep an eye on, and what any treatment would cost.",
      },
      {
        q: "What should I bring?",
        a: "Your insurance details if you have coverage, a list of medications you take, and any recent X-rays if you have them. We can also request records from your previous dentist.",
      },
      {
        q: "What if I need to cancel or reschedule?",
        a: "Call or email us as early as you can, ideally two business days ahead, so we can offer the time to someone else.",
      },
    ],
  },
  {
    title: "Insurance and payment",
    items: [
      {
        q: "Do you bill insurance directly?",
        a: "Share your plan details when you book and we'll check your coverage and let you know how billing will work before your appointment.",
      },
      {
        q: "Will I know the cost before treatment?",
        a: "Always. You get a written estimate before any treatment starts, and we'll go through what your plan is expected to cover.",
      },
      {
        q: "What if I don't have insurance?",
        a: "You're welcome here. We'll explain the fees up front and can talk through ways to spread out the cost of larger treatment.",
      },
    ],
  },
  {
    title: "Care and comfort",
    items: [
      {
        q: "I'm nervous about the dentist. Can you help?",
        a: "Yes, and you're far from alone. Tell us when you book. We can schedule extra time, explain each step before it happens, and stop whenever you raise a hand.",
      },
      {
        q: "When should my child first see a dentist?",
        a: "Around their first birthday, or within six months of the first tooth coming in. Early visits are short and mostly about getting comfortable.",
      },
      {
        q: "What counts as a dental emergency?",
        a: "Severe toothache, a broken or knocked-out tooth, a lost filling or crown, or swelling. Call us as early in the day as you can. For swelling that affects breathing or swallowing, go to a hospital emergency room.",
      },
      {
        q: "How often should I come in?",
        a: "It depends on your teeth and gums. Many people do well with a visit every six months, some need more or less. We'll recommend what suits you.",
      },
    ],
  },
] as const;
