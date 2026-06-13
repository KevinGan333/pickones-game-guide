"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
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
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
          <span className="text-xl font-extrabold tracking-tight text-[#1e293b]">
            Pick<span className="text-[#1a5dc4]">ONEs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive(item.href)
                  ? "text-[#1a5dc4] bg-[#eff6ff]"
                  : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#1e293b]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/games" className="btn-primary text-sm !px-5 !py-2.5">Browse Guides</Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className={`block h-[2px] w-6 bg-[#475569] transition-all ${mobileOpen ? "translate-y-[7px] rotate-45 bg-[#1e293b]" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[#475569] transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[#475569] transition-all ${mobileOpen ? "-translate-y-[7px] -rotate-45 bg-[#1e293b]" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 top-[57px] z-40 bg-white/98 backdrop-blur-md transition-transform duration-300 lg:hidden ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col gap-1 px-4 py-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                isActive(item.href)
                  ? "border-l-2 border-[#1a5dc4] bg-[#eff6ff] text-[#1a5dc4]"
                  : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#1e293b]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5 border-t border-[#e2e8f0] pt-5">
            <Link href="/games" onClick={closeMobile} className="btn-primary block w-full text-center">Browse Game Guides</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
