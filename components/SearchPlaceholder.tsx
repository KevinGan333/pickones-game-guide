import Link from "next/link";

const popular = [
  { label: "R36S setup", href: "/games/r36s" },
  { label: "Best cozy games", href: "/platforms/nintendo-switch" },
  { label: "Switch 2 guide", href: "/platforms/nintendo-switch-2" },
  { label: "Beginner tips", href: "/guides" },
  { label: "Stardew Valley", href: "/games/stardew-valley" },
];

export default function SearchPlaceholder() {
  return (
    <div className="w-full">
      <Link
        href="/games"
        className="flex w-full items-center gap-3 rounded-2xl border border-[#e2e8f0] bg-white px-5 py-4 shadow-sm transition hover:border-[#bfdbfe] hover:shadow-md"
      >
        <svg className="h-5 w-5 flex-shrink-0 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <span className="text-[#94a3b8]">Search games, guides, devices, or setup problems…</span>
      </Link>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs text-[#94a3b8]">Popular:</span>
        {popular.map((item) => (
          <Link key={item.label} href={item.href} className="rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-medium text-[#1a5dc4] transition hover:bg-[#dbeafe]">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
