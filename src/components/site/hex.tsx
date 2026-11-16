import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const tones = {
  honey: "bg-honey text-hive",
  pollen: "bg-pollen text-hive",
  foam: "bg-foam text-hive",
  hive: "bg-hive text-white",
  white: "bg-white text-hive",
} as const;

export type HexTone = keyof typeof tones;

/* A single honeycomb cell. Give it a fixed width; height follows. */
export function Hex({
  tone = "foam",
  className,
  children,
}: {
  tone?: HexTone;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "hex grid aspect-[1/1.1547] place-items-center",
        tones[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}

/*
  A cell that holds a photo. Until a photo path is set in
  src/lib/site.ts it shows a tinted cell with an icon instead.
*/
export function HexPhoto({
  src,
  alt,
  icon: Icon,
  tone = "foam",
  sizes = "(min-width: 1024px) 20vw, 40vw",
  className,
  priority,
}: {
  src?: string;
  alt: string;
  icon: LucideIcon;
  tone?: HexTone;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "hex relative grid aspect-[1/1.1547] place-items-center overflow-hidden",
        tones[tone],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <Icon aria-hidden strokeWidth={1.25} className="size-[28%] opacity-60" />
      )}
    </div>
  );
}

export function HexIcon({
  icon: Icon,
  tone = "pollen",
  className,
}: {
  icon: LucideIcon;
  tone?: HexTone;
  className?: string;
}) {
  return (
    <Hex tone={tone} className={cn("w-14 shrink-0", className)}>
      <Icon aria-hidden strokeWidth={1.75} className="size-6" />
    </Hex>
  );
}
