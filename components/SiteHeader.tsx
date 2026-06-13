"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Guides", href: "/guides" },
  { label: "Platforms", href: "/platforms" },
  { label: "Gear", href: "/gear" },
  { label: "Reviews", href: "/reviews" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const closeMobile = () => {
    setMobileOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-200 bg-[#fff7ed]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center" onClick={closeMobile}>
          <img
            src="/logo/PickOnes logo.png"
            alt="PickOnes Game Guide"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[#5c3517] transition hover:text-[#f97316]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/games"
            className="rounded-full border border-orange-300 bg-white px-5 py-2.5 text-sm font-bold text-[#c2410c] transition hover:border-[#f97316] hover:bg-[#ffedd5]"
          >
            Browse Guides
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-[#3b1f0f] transition-all ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#3b1f0f] transition-all ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#3b1f0f] transition-all ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[57px] z-40 bg-[#fff7ed]/95 backdrop-blur transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={`rounded-xl px-4 py-3 text-lg font-bold transition ${
                pathname === item.href
                  ? "bg-orange-100 text-[#f97316]"
                  : "text-[#3b1f0f] hover:bg-[#ffedd5] hover:text-[#f97316]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-6 border-t border-orange-200 pt-6">
            <Link
              href="/games"
              onClick={closeMobile}
              className="block rounded-full bg-[#f97316] px-6 py-3.5 text-center font-bold text-white shadow-lg shadow-orange-300/40 transition hover:bg-[#c2410c]"
            >
              Browse Game Guides
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
