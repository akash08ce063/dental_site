"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MapPin, Menu, Phone } from "lucide-react";

import { fullAddress, nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navItemClass,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/site/logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-hive text-white">
        <div className="container-site flex h-10 items-center justify-between gap-4 text-sm">
          <a href={site.phoneHref} className="flex items-center gap-2 font-semibold hover:text-honey">
            <Phone aria-hidden className="size-3.5" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="hidden items-center gap-2 text-white/85 hover:text-honey sm:flex"
          >
            <MapPin aria-hidden className="size-3.5" />
            {fullAddress()}
          </Link>
        </div>
      </div>

      <div className="border-b border-border bg-white/95 backdrop-blur">
        <div className="container-site flex h-18 items-center justify-between gap-6">
          <Logo />

          <NavigationMenu className="hidden lg:flex" aria-label="Main">
            <NavigationMenuList>
              {nav.map((item) =>
                "children" in item ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      data-active={isActive(pathname, "/about") ? "" : undefined}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className="block rounded-lg px-4 py-3 hover:bg-foam"
                              >
                                <span className="block font-semibold">{child.label}</span>
                                <span className="block text-sm text-muted-foreground">
                                  {child.description}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild active={isActive(pathname, item.href)}>
                      <Link href={item.href} className={navItemClass}>
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            <Button asChild variant="accent" className="hidden sm:inline-flex">
              <Link href="/book">Book a visit</Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu aria-hidden className="size-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
                <nav aria-label="Mobile" className="mt-6 flex flex-col">
                  {nav.map((item) => (
                    <div key={item.label} className="border-b border-border py-1">
                      {"children" in item ? (
                        <>
                          <p className="px-2 pt-3 text-sm text-muted-foreground">{item.label}</p>
                          {item.children.map((child) => (
                            <MobileLink key={child.href} href={child.href} onNavigate={() => setOpen(false)}>
                              {child.label}
                            </MobileLink>
                          ))}
                        </>
                      ) : (
                        <MobileLink href={item.href} onNavigate={() => setOpen(false)}>
                          {item.label}
                        </MobileLink>
                      )}
                      {item.label === "Services" && (
                        <ul className="mb-2 ml-2 border-l-2 border-foam pl-3">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                onClick={() => setOpen(false)}
                                className="block py-1.5 text-[0.95rem] text-muted-foreground hover:text-hive"
                              >
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild variant="accent" size="lg">
                    <Link href="/book" onClick={() => setOpen(false)}>
                      Book a visit
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={site.phoneHref}>
                      <Phone aria-hidden /> Call {site.phone}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileLink({
  href,
  onNavigate,
  children,
}: {
  href: string;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block rounded-lg px-2 py-2.5 font-display text-xl font-semibold hover:bg-foam"
    >
      {children}
    </Link>
  );
}
