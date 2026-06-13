import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import SectionHeader from "@/components/SectionHeader";
import SearchPlaceholder from "@/components/SearchPlaceholder";
import PlatformCard from "@/components/PlatformCard";
import FeaturedGuideCard from "@/components/FeaturedGuideCard";
import GameCard from "@/components/GameCard";
import ReviewCard from "@/components/ReviewCard";
import GearCard from "@/components/GearCard";
import { platforms } from "@/data/platforms";
import { games } from "@/data/games";
import { guideContents, getGuidesByGameSlug } from "@/data/guides";
import { reviewContents } from "@/data/reviews";
import { gearItems } from "@/data/gear";

export const metadata = createMetadata({
  title: "PickOnes | Practical Game Guides for Everyday Players",
  description: "PickOnes helps Nintendo Switch, Switch 2, retro handheld, cozy game, RPG, and family players find clear walkthroughs, beginner tips, setup guides, and best settings.",
  path: "/",
});

export default function HomePage() {
  const featured = guideContents.slice(0, 3);
  const popularGames = games.slice(0, 6);
  const latestReviews = reviewContents.slice(0, 2);
  const featuredGear = gearItems.slice(0, 2);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-hero border-b border-[#e2e8f0] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#bfdbfe] bg-[#eff6ff] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a5dc4]">
              PickOnes Game Guide
            </p>
            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#1e293b] md:text-6xl">
              Pick Better Games. Set Up Better Gear. Play Smarter.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#475569]">
              Practical guides, beginner-friendly walkthroughs, honest reviews,
              and gear advice for Switch, Switch 2, retro handhelds, and more.
            </p>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/games" className="btn-primary">Browse Game Guides</Link>
              <Link href="/platforms" className="btn-outline">Explore Platforms</Link>
            </div>
            <SearchPlaceholder />
          </div>

          {/* Trending panel — navy contrast */}
          <div className="card-navy p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#60a5fa]">Trending Guides</p>
            <div className="grid gap-3">
              {[
                { t: "R36S Beginner Setup Guide", s: "/games/r36s/r36s-beginner-setup-guide" },
                { t: "Best Kart Setups for Beginners", s: "/games/mario-kart-world/best-kart-setups" },
                { t: "Stardew Valley Beginner Guide", s: "/games/stardew-valley/beginner-guide" },
                { t: "How to Get Iron Nuggets in ACNH", s: "/games/animal-crossing-new-horizons/how-to-get-iron-nuggets" },
                { t: "Pokémon Legends Z-A Beginner Guide", s: "/games/pokemon-legends-z-a/beginner-guide" },
              ].map((item) => (
                <Link
                  key={item.s}
                  href={item.s}
                  className="block rounded-xl border border-[rgba(255,255,255,0.08)] px-4 py-3 text-sm font-medium text-[#cbd5e1] transition hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                >
                  {item.t}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Platforms — white ── */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Platforms" title="Find Your Platform" description="Setup guides, best settings, game recommendations, and beginner help." href="/platforms" linkText="View All Platforms" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p) => <PlatformCard key={p.slug} platform={p} guideCount={p.guides.length} />)}
          </div>
        </div>
      </section>

      {/* ── Featured Guides — light blue ── */}
      <section className="bg-blue-soft border-y border-[#e2e8f0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Featured Guides" title="Latest Walkthroughs & Setup Help" href="/guides" linkText="View All Guides" />
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((g) => <FeaturedGuideCard key={`${g.gameSlug}-${g.guideSlug}`} guide={g} />)}
          </div>
        </div>
      </section>

      {/* ── Popular Games — white ── */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Games" title="Popular Game Hubs" description="Each game hub collects all related guides in one place." href="/games" linkText="View All Games" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularGames.map((g) => <GameCard key={g.slug} game={g} guideCount={getGuidesByGameSlug(g.slug).length} />)}
          </div>
        </div>
      </section>

      {/* ── Reviews + Gear — light blue ── */}
      <section className="bg-blue-soft border-y border-[#e2e8f0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader label="Reviews" title="Honest Game Reviews" href="/reviews" linkText="View All Reviews" />
              <div className="grid gap-4">{latestReviews.map((r) => <ReviewCard key={r.slug} review={r} />)}</div>
            </div>
            <div>
              <SectionHeader label="Gear" title="Gaming Gear Guides" href="/gear" linkText="View All Gear" />
              <div className="grid gap-4">{featuredGear.map((i) => <GearCard key={i.slug} item={i} guideCount={i.guides.length} />)}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
