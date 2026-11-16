# Smile Hive Dental website

Marketing site for Smile Hive Dental (Dr. Heena Patel).

Built with Next.js 16 (App Router, React 19, TypeScript), Tailwind CSS v4
and shadcn/ui-style components on Radix primitives. Every page is
prerendered as static HTML.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

Requires Node 20.9 or newer.

## Before launch

Placeholders are marked `TODO` in the code. Search for `TODO` to find them all.

| What | Where |
| --- | --- |
| Phone, email, address, hours, domain, social links | `src/lib/site.ts` |
| Google Maps embed and directions link | `src/lib/site.ts` (`mapEmbedUrl`, `mapLinkUrl`) |
| Photos (hero, Dr. Patel, reception) | add files to `public/images`, set paths in `src/lib/site.ts` (`photos`) |
| Dr. Patel's credentials and bio | `src/lib/site.ts` (`doctor`) |
| "Our story" letter (currently a draft for Dr. Patel to rewrite) | `src/app/about/our-story/page.tsx` |
| Team members | `src/app/about/our-team/page.tsx` |
| Services and treatments offered | `src/lib/services.ts` |
| FAQ answers and clinic policies | `src/lib/faqs.ts` |
| Logo (currently a simple hexagon mark) | `src/components/site/logo.tsx`, `src/app/icon.svg` |

### Forms

The booking and contact forms have no backend yet. Until one is set, they
open the visitor's email app with the request filled in and addressed to
the clinic email.

To receive submissions directly, create `.env.local` with:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://your-form-service.example/endpoint
```

The form posts JSON to that URL (works with Formspree, Basin and similar,
or your own API route). Dental enquiries can include personal health
information, so pick a service that meets the privacy rules that apply
to the clinic.

## Structure

```
src/
  app/                    routes (one folder per page), sitemap, robots
  components/ui/          shadcn/ui-style primitives (button, accordion, sheet...)
  components/site/        header, footer, honeycomb hero, forms, shared sections
  lib/site.ts             clinic details: the single source of truth
  lib/services.ts         service categories and treatments
  lib/faqs.ts             FAQ content
```

Design tokens (colours, fonts, radius) live at the top of
`src/app/globals.css`. `components.json` is set up, so more shadcn/ui
components can be added with `npx shadcn@latest add <component>`.

## Not included yet

- Patient reviews: add real ones only, with permission.
- Blog.
- Online scheduling integration (the form is a request, not live booking).
- Privacy policy page.
