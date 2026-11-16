import {
  Baby,
  HeartPulse,
  ShieldCheck,
  Siren,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  intro: string;
  treatments: { name: string; detail: string }[];
  goodToKnow: string[];
};

/*
  TODO: Dr. Patel should confirm this list matches what the clinic
  actually offers, and remove or add treatments as needed.
*/
export const services: Service[] = [
  {
    slug: "preventive",
    title: "Preventive care",
    summary: "Checkups, cleanings and X-rays that catch small things early.",
    icon: ShieldCheck,
    intro:
      "Most dental problems are easier, cheaper and more comfortable to deal with when they're small. Regular visits are how we keep them that way.",
    treatments: [
      { name: "Exams and checkups", detail: "A full look at your teeth, gums and bite, with time for your questions." },
      { name: "Cleanings", detail: "Gentle removal of plaque and tartar, with tips that fit your routine." },
      { name: "Digital X-rays", detail: "Low-dose images taken only when they'll tell us something useful." },
      { name: "Gum care", detail: "Checking for early gum disease and treating it before it progresses." },
      { name: "Fluoride and sealants", detail: "Extra protection for teeth that are prone to cavities." },
      { name: "Night guards", detail: "Custom guards if you clench or grind in your sleep." },
    ],
    goodToKnow: [
      "How often you come in depends on your mouth, not a fixed schedule. We'll recommend what makes sense for you.",
      "If it's been years since your last visit, you won't get a lecture. We start from where you are.",
    ],
  },
  {
    slug: "restorative",
    title: "Restorative care",
    summary: "Fillings, crowns and root canals that get teeth working again.",
    icon: Wrench,
    intro:
      "When a tooth is damaged, decayed or missing, we rebuild it so you can chew comfortably and keep the rest of your mouth healthy.",
    treatments: [
      { name: "Tooth-coloured fillings", detail: "Repairs that blend in with your natural teeth." },
      { name: "Crowns", detail: "A protective cap for a tooth that's cracked, worn or heavily filled." },
      { name: "Bridges", detail: "A fixed replacement that fills the gap left by a missing tooth." },
      { name: "Root canal treatment", detail: "Removing infection from inside a tooth so it can be saved." },
      { name: "Dentures", detail: "Full or partial dentures made to fit comfortably." },
      { name: "Implant restorations", detail: "Crowns that attach to a dental implant to replace a missing tooth." },
    ],
    goodToKnow: [
      "You'll see the problem on screen and hear every option, including doing nothing for now, before you decide.",
      "We give you a written estimate before any treatment starts.",
    ],
  },
  {
    slug: "cosmetic",
    title: "Cosmetic care",
    summary: "Whitening, bonding and veneers for a smile you like seeing.",
    icon: Sparkles,
    intro:
      "Cosmetic dentistry is personal. We start with what bothers you, and suggest the smallest change that gets you the result you want.",
    treatments: [
      { name: "Teeth whitening", detail: "Professional whitening in the clinic or with custom trays at home." },
      { name: "Bonding", detail: "Reshaping chipped or uneven teeth with tooth-coloured material, often in one visit." },
      { name: "Veneers", detail: "Thin porcelain shells that change the shape and shade of front teeth." },
      { name: "Clear aligners", detail: "Removable trays that straighten teeth gradually." },
      { name: "Smile planning", detail: "A conversation and photos to map out options before you commit to anything." },
    ],
    goodToKnow: [
      "Healthy teeth and gums come first. If something needs fixing before cosmetic work, we'll tell you.",
      "Not sure what you want? A consultation is a fine place to start.",
    ],
  },
  {
    slug: "childrens",
    title: "Children's dentistry",
    summary: "Friendly first visits and checkups that build good habits.",
    icon: Baby,
    intro:
      "A good early experience makes dental visits easy for life. We go at your child's pace, show them the tools, and keep it light.",
    treatments: [
      { name: "First visits", detail: "A short, relaxed look around the mouth, usually around the first birthday." },
      { name: "Checkups and cleanings", detail: "Regular visits sized for small mouths and short attention spans." },
      { name: "Sealants", detail: "A thin coating on back teeth that helps keep cavities out." },
      { name: "Fluoride", detail: "A quick treatment that strengthens developing enamel." },
      { name: "Sports mouthguards", detail: "Custom guards for kids who play contact sports." },
      { name: "Growth checks", detail: "Watching how teeth and jaws develop, and flagging if braces may help later." },
    ],
    goodToKnow: [
      "You're welcome to stay with your child for the whole appointment.",
      "Booking the family back to back? Tell us and we'll line the appointments up.",
    ],
  },
  {
    slug: "gum-and-surgical",
    title: "Gum and surgical care",
    summary: "Extractions and gum treatment, done gently and explained clearly.",
    icon: HeartPulse,
    intro:
      "Sometimes a tooth needs to come out, or gums need more than a regular cleaning. We walk you through each step so there are no surprises.",
    treatments: [
      { name: "Extractions", detail: "Removing teeth that can't be saved, with thorough numbing and aftercare." },
      { name: "Wisdom teeth", detail: "Assessment and removal, or referral to a specialist when that's the better route." },
      { name: "Deep cleanings", detail: "Scaling and root planing to treat gum disease below the gumline." },
      { name: "Aftercare", detail: "Written instructions and a number to call if anything worries you." },
    ],
    goodToKnow: [
      "If a specialist is the right choice, we'll say so and arrange the referral.",
      "Tell us if you're anxious. There's a lot we can do to make treatment easier.",
    ],
  },
  {
    slug: "emergencies",
    title: "Dental emergencies",
    summary: "Toothaches, chips and lost fillings. Call and we'll fit you in.",
    icon: Siren,
    intro:
      "Dental pain doesn't wait for a convenient time. Call us as early in the day as you can and we'll do our best to see you quickly.",
    treatments: [
      { name: "Toothache", detail: "Finding the cause and getting you out of pain." },
      { name: "Chipped or broken teeth", detail: "Smoothing, bonding or protecting the tooth until it can be restored." },
      { name: "Lost fillings and crowns", detail: "Keep the crown if you have it and bring it with you." },
      { name: "Knocked-out teeth", detail: "Keep the tooth in milk and call right away. Minutes matter." },
      { name: "Swelling or infection", detail: "Assessment and treatment to bring an infection under control." },
    ],
    goodToKnow: [
      "Swelling in your face or neck, trouble breathing or swallowing, or bleeding that won't stop needs a hospital emergency room, not a dental chair.",
      "You don't need to be an existing patient to call us about an emergency.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
