import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-hive-soft",
        accent: "bg-honey text-hive hover:bg-[#ffc23a]",
        outline:
          "border-2 border-hive bg-transparent text-hive hover:bg-hive hover:text-white",
        "outline-light":
          "border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-hive",
        ghost: "text-hive hover:bg-foam",
        link: "rounded-none text-hive underline decoration-honey decoration-2 underline-offset-4 hover:decoration-hive",
      },
      size: {
        default: "h-11 px-5 text-[0.95rem]",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-7 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
