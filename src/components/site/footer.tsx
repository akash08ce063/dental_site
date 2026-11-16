import Link from "next/link";

import { fullAddress, site } from "@/lib/site";
import { services } from "@/lib/services";
import { Hours } from "@/components/site/hours";
import { Logo } from "@/components/site/logo";

const explore = [
  { label: "Our story", href: "/about/our-story" },
  { label: "Our team", href: "/about/our-team" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Book a visit", href: "/book" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 font-display text-lg font-semibold text-honey">{children}</h2>;
}

/* Cached so the page can stay fully static; refreshes on its own. */
async function Year() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  const socials = [
    { label: "Instagram", href: site.social.instagram },
    { label: "Facebook", href: site.social.facebook },
  ].filter((s) => s.href);

  return (
    <footer className="bg-hive text-white">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-white/80">{site.tagline}</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex gap-5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="underline underline-offset-4 hover:text-honey">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <FooterHeading>Services</FooterHeading>
          <ul className="space-y-2 text-[0.95rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-white/85 hover:text-honey">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Clinic</FooterHeading>
          <ul className="space-y-2 text-[0.95rem]">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/85 hover:text-honey">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Visit</FooterHeading>
          <address className="space-y-1 text-[0.95rem] not-italic">
            <p>{fullAddress()}</p>
            <p>
              <a href={site.phoneHref} className="font-semibold hover:text-honey">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-honey">
                {site.email}
              </a>
            </p>
          </address>
          <Hours light className="mt-5" />
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-site py-5 text-sm text-white/70">
          © <Year /> {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
