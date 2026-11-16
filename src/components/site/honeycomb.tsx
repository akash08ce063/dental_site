import { Armchair, HeartHandshake, Smile } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { HexPhoto } from "@/components/site/hex";

/*
  The hero honeycomb: three rows of pointy-top cells, middle row
  offset by half a cell. Positions are percentages of the wrapper so
  the cluster scales as one piece.
*/
const W = 100 / 3.5; // cell width, % of wrapper width
const H = 40; // cell height, % of wrapper height (3 rows overlap by 1/4)

function Cell({
  row,
  col,
  delay,
  children,
}: {
  row: number;
  col: number;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute animate-cell-in p-[0.9%]"
      style={{
        width: `${W}%`,
        height: `${H}%`,
        top: `${row * 30}%`,
        left: `${(col + (row % 2 ? 0.5 : 0)) * W}%`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Solid({ className }: { className: string }) {
  return <div className={cn("hex size-full", className)} />;
}

function TextCell({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "hex grid size-full place-items-center px-[16%] text-center font-display leading-[1.1] font-semibold",
        "text-[clamp(0.75rem,3.1vw,1.15rem)] lg:text-[clamp(0.9rem,1.35vw,1.2rem)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Honeycomb({ className }: { className?: string }) {
  const p = site.photos;
  return (
    <div className={cn("relative aspect-[1/0.825] w-full", className)}>
      <Cell row={0} col={0} delay={0}>
        <Solid className="bg-white" />
      </Cell>
      <Cell row={0} col={1} delay={80}>
        <HexPhoto
          src={p.heroClinic}
          alt="Inside the Smile Hive Dental clinic"
          icon={Armchair}
          tone="foam"
          className="size-full"
          priority
        />
      </Cell>
      <Cell row={0} col={2} delay={160}>
        <TextCell className="bg-honey text-hive">New patients welcome</TextCell>
      </Cell>

      <Cell row={1} col={0} delay={240}>
        <HexPhoto
          src={p.heroPatient}
          alt="A patient smiling after their visit"
          icon={Smile}
          tone="hive"
          className="size-full"
          priority
        />
      </Cell>
      <Cell row={1} col={1} delay={320}>
        <TextCell className="bg-foam text-hive">All ages, all welcome</TextCell>
      </Cell>
      <Cell row={1} col={2} delay={400}>
        <HexPhoto
          src={p.heroTeam}
          alt="Dr. Heena Patel with a patient"
          icon={HeartHandshake}
          tone="white"
          className="size-full"
          priority
        />
      </Cell>

      <Cell row={2} col={1} delay={480}>
        <TextCell className="bg-hive text-white">Nervous? We go slow.</TextCell>
      </Cell>
      <Cell row={2} col={2} delay={560}>
        <Solid className="bg-honey/35" />
      </Cell>
    </div>
  );
}
