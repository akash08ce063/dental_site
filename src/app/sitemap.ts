import type { MetadataRoute } from "next";

import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about/our-story",
    "/about/our-team",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/faq",
    "/contact",
    "/book",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" }));
}
