import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hours({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <dl className={cn("grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[0.95rem]", className)}>
      {site.hours.map((h) => (
        <div key={h.day} className="col-span-2 grid grid-cols-subgrid">
          <dt className={light ? "text-white/70" : "text-muted-foreground"}>{h.day}</dt>
          <dd className="tabular-nums">
            {h.open ? `${h.open} to ${h.close}` : "Closed"}
          </dd>
        </div>
      ))}
    </dl>
  );
}
