import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-orange-200 bg-[#3b1f0f] text-orange-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="mb-3 text-2xl font-black text-white">PickOnes</p>
          <p className="max-w-xl text-sm leading-7 text-orange-100">
            Practical game guides for Nintendo Switch, Switch 2, retro
            handhelds, cozy games, RPGs, and family-friendly players.
          </p>
        </div>

        <div>
          <p className="mb-4 font-bold text-white">Explore</p>
          <div className="flex flex-col gap-3 text-sm text-orange-100">
            <Link href="/games" className="hover:text-white">
              Games
            </Link>
            <Link href="/guides" className="hover:text-white">
              Guides
            </Link>
            <Link href="/platforms" className="hover:text-white">
              Platforms
            </Link>
            <Link href="/gear" className="hover:text-white">
              Gear
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 font-bold text-white">PickOnes</p>
          <div className="flex flex-col gap-3 text-sm text-orange-100">
            <Link href="/reviews" className="hover:text-white">
              Reviews
            </Link>
            <Link href="/news" className="hover:text-white">
              News
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-900/60 px-6 py-5 text-center text-xs text-orange-200">
        © 2026 PickOnes. All rights reserved.
      </div>
    </footer>
  );
}