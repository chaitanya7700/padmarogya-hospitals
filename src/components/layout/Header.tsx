"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HospitalLogo } from "@/components/ui/LotusIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track previous pathname in state
const [prevPathname, setPrevPathname] = useState(pathname);

if (prevPathname !== pathname) {
  setPrevPathname(pathname);
  setMobileOpen(false);
}
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" aria-label="Padmarogya Hospitals Home">
          <HospitalLogo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-green/10 text-green"
                  : "text-text hover:bg-light-gray hover:text-navy"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/appointment" variant="secondary" size="sm">
            Book Appointment
          </ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-navy hover:bg-light-gray lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-gray bg-white px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-green/10 text-green"
                    : "text-text hover:bg-light-gray"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 border-t border-gray pt-3">
              <ButtonLink
                href="/appointment"
                variant="secondary"
                size="md"
                className="w-full"
              >
                Book Appointment
              </ButtonLink>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
