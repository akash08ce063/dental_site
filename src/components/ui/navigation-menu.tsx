"use client";

import * as React from "react";
import { NavigationMenu as NavPrimitive } from "radix-ui";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavPrimitive.Root>) {
  return (
    <NavPrimitive.Root
      data-slot="navigation-menu"
      className={cn("relative flex items-center", className)}
      {...props}
    >
      {children}
    </NavPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavPrimitive.List>) {
  return (
    <NavPrimitive.List
      className={cn("flex list-none items-center gap-1", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavPrimitive.Item>) {
  return <NavPrimitive.Item className={cn("relative", className)} {...props} />;
}

const navItemClass =
  "inline-flex h-10 items-center gap-1 rounded-full px-4 text-[0.95rem] font-medium text-hive transition-colors hover:bg-foam data-[active]:bg-foam data-[state=open]:bg-foam";

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavPrimitive.Trigger>) {
  return (
    <NavPrimitive.Trigger className={cn(navItemClass, "group", className)} {...props}>
      {children}
      <ChevronDown
        aria-hidden
        className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
      />
    </NavPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavPrimitive.Content>) {
  return (
    <NavPrimitive.Content
      className={cn(
        "absolute top-full left-0 z-50 mt-2 w-80 rounded-xl border bg-popover p-2 shadow-lg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavPrimitive.Link>) {
  return <NavPrimitive.Link className={cn(className)} {...props} />;
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navItemClass,
};
