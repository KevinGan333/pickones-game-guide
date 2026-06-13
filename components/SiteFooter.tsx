import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-navy">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="inline-block">
            <span className="text-xl font-extrabold tracking-tight text-white">
              Pick<span className="text-[#60a5fa]">ONEs</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#94a3b8]">
            Practical game guides, beginner-friendly walkthroughs, honest reviews,
            and gear advice for Nintendo Switch, Switch 2, retro handhelds, and more.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Explore</p>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="/games" className="text-[#94a3b8] transition hover:text-white">Games</Link>
            <Link href="/guides" className="text-[#94a3b8] transition hover:text-white">Guides</Link>
            <Link href="/platforms" className="text-[#94a3b8] transition hover:text-white">Platforms</Link>
            <Link href="/gear" className="text-[#94a3b8] transition hover:text-white">Gear</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Content</p>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="/reviews" className="text-[#94a3b8] transition hover:text-white">Reviews</Link>
            <Link href="/news" className="text-[#94a3b8] transition hover:text-white">News</Link>
            <Link href="/about" className="text-[#94a3b8] transition hover:text-white">About</Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Platforms</p>
          <div className="flex flex-col gap-2.5 text-sm">
            <Link href="/platforms/nintendo-switch" className="text-[#94a3b8] transition hover:text-white">Nintendo Switch</Link>
            <Link href="/platforms/nintendo-switch-2" className="text-[#94a3b8] transition hover:text-white">Switch 2</Link>
            <Link href="/platforms/retro-handheld" className="text-[#94a3b8] transition hover:text-white">Retro Handheld</Link>
            <Link href="/platforms/steam-deck" className="text-[#94a3b8] transition hover:text-white">Steam Deck</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(255,255,255,0.08)] px-6 py-5 text-center text-xs text-[#64748b]">
        © 2026 PickOnes. All rights reserved.
      </div>
    </footer>
  );
}
