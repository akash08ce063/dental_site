/*
  Single source of truth for clinic details.
  Everything marked TODO is a placeholder. Replace it with the real
  detail and it updates everywhere: header, footer, contact page,
  booking form, and the structured data search engines read.
*/

export type DayHours = { day: string; open: string | null; close: string | null };

export const site = {
  name: "Smile Hive Dental",
  shortName: "Smile Hive",
  tagline: "Gentle, unhurried dental care for every member of your family.",
  description:
    "Smile Hive Dental is a family dental clinic led by Dr. Heena Patel. Checkups, cleanings, fillings, cosmetic care, children's dentistry and urgent appointments.",

  // TODO: the live domain, with no trailing slash.
  url: "https://www.smilehivedental.com",

  // TODO: real contact details.
  phone: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "hello@example.com",

  // TODO: real address.
  address: {
    street: "123 Your Street, Unit 0",
    city: "Your City",
    region: "BC",
    postalCode: "A0A 0A0",
    country: "CA",
  },

  // TODO: paste the "Embed a map" URL from Google Maps (starts with
  // https://www.google.com/maps/embed?...). Leave empty to show the
  // address card without a map.
  mapEmbedUrl: "",
  // TODO: the "Share" link from Google Maps, used for "Get directions".
  mapLinkUrl: "",

  // TODO: real hours. Use null for closed days.
  hours: [
    { day: "Monday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "9:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "9:00 AM", close: "2:00 PM" },
    { day: "Saturday", open: null, close: null },
    { day: "Sunday", open: null, close: null },
  ] as DayHours[],

  // TODO: add profile links, or leave empty to hide the icons.
  social: {
    instagram: "",
    facebook: "",
  },

  /*
    Photos. Drop files in /public/images and put the path here, for
    example "/images/dr-patel.jpg". While a path is empty the site
    shows a tinted honeycomb cell in its place.
  */
  photos: {
    heroClinic: "",
    heroPatient: "",
    heroTeam: "",
    drPatel: "",
    reception: "",
  },

  /*
    Where the booking and contact forms send to. Set
    NEXT_PUBLIC_FORM_ENDPOINT in .env.local to a form service URL
    (Formspree, Basin, your own API route...). When it's empty the
    form opens the visitor's email app with the request filled in.
  */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
} as const;

export const doctor = {
  name: "Dr. Heena Patel",
  role: "Dentist and owner",
  // TODO: degrees and memberships, e.g. ["DMD", "Member, BC Dental Association"].
  credentials: [] as string[],
  // TODO: Dr. Patel should review and personalise this bio.
  bio: [
    "Dr. Heena Patel started Smile Hive Dental to practise the kind of dentistry she'd want for her own family: careful, honest, and never rushed.",
    "She takes time to explain what she sees and what your options are, in plain language, so you can decide what's right for you. Nervous patients and wiggly kids are especially welcome in her chair.",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/our-story",
    children: [
      {
        label: "Our story",
        href: "/about/our-story",
        description: "Why Dr. Patel opened Smile Hive.",
      },
      {
        label: "Our team",
        href: "/about/our-team",
        description: "The people you'll meet at your visit.",
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export function fullAddress() {
  const a = site.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}
