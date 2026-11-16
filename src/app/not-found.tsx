import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/sections";

export default function NotFound() {
  return (
    <PageHero
      title="We can't find that page."
      lead="The link may be old, or the address may have a typo."
    >
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">Go to the home page</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">See our services</Link>
        </Button>
      </div>
    </PageHero>
  );
}
