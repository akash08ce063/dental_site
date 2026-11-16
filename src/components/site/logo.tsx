import Link from "next/link";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Hexagon cell with a smile inside. Swap for the real logo when there is one. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 44" aria-hidden className={cn("h-10 w-auto", className)}>
      <path d="M20 1 38.5 11.5v21L20 43 1.5 32.5v-21Z" fill="var(--honey)" />
      <path
        d="M11.5 23.5c2 4.2 5 6.3 8.5 6.3s6.5-2.1 8.5-6.3"
        fill="none"
        stroke="var(--hive)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label={`${site.name} home`}
    >
      <LogoMark />
      <span
        className={cn(
          "font-display text-[1.35rem] leading-none font-bold tracking-tight",
          light ? "text-white" : "text-hive",
        )}
      >
        Smile Hive
        <span className="block text-[0.7rem] font-medium tracking-[0.02em] opacity-75">
          Dental
        </span>
      </span>
    </Link>
  );
}
