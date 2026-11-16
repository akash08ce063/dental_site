import * as React from "react";

import { cn } from "@/lib/utils";

export const fieldClass =
  "w-full rounded-lg border border-input bg-white px-3.5 text-base text-hive placeholder:text-muted-foreground/70 transition-colors hover:border-hive focus-visible:border-hive disabled:opacity-50 aria-invalid:border-destructive";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(fieldClass, "h-12", className)}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldClass, "min-h-32 py-3", className)}
      {...props}
    />
  );
}

function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      data-slot="select"
      className={cn(fieldClass, "h-12 appearance-auto", className)}
      {...props}
    />
  );
}

export { Input, Textarea, NativeSelect };
