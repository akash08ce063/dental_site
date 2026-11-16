import { doctor, site } from "@/lib/site";

const dayMap: Record<string, string> = {
  Monday: "Mo", Tuesday: "Tu", Wednesday: "We", Thursday: "Th",
  Friday: "Fr", Saturday: "Sa", Sunday: "Su",
};

function to24(t: string) {
  const [time, period] = t.split(" ");
  const [h, m] = time.split(":").map(Number);
  const hour = (h % 12) + (period === "PM" ? 12 : 0);
  return `${String(hour).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

/* Structured data so search engines show hours, phone and address. */
export function DentistJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHours: site.hours
      .filter((h) => h.open && h.close)
      .map((h) => `${dayMap[h.day]} ${to24(h.open!)}-${to24(h.close!)}`),
    founder: { "@type": "Person", name: doctor.name, jobTitle: "Dentist" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
