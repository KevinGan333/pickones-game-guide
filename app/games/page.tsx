import Link from "next/link";
import { games } from "@/data/games";
import { getGuidesByGameSlug } from "@/data/guides";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Game Guides Index",
  description:
    "Browse all PickOnes game guides, beginner tips, walkthroughs, and player-friendly tutorials organized by game title.",
  path: "/games",
});

export default function GamesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Games", path: "/games" },
        ])}
      />

      <main className="min-h-screen bg-page-cool text-[#2b1608]">
        <section className="border-b border-orange-200 bg-hero-gradient px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              Games
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
              PickOnes Game Guide Index
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              Browse beginner guides, walkthroughs, best settings, and practical
              tips organized by game. Each game hub collects all related guides
              in one place.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              All Games
            </p>
            <h2 className="text-4xl font-black">Choose a Game</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {games.map((game) => {
              const guideCount = getGuidesByGameSlug(game.slug).length;

              return (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#c2410c]">
                      {game.platform}
                    </span>

                    <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-bold text-[#6b3f1d]">
                      {game.category}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-black">{game.title}</h3>

                  <p className="mb-4 line-clamp-2 leading-7 text-[#6b3f1d]">
                    {game.description}
                  </p>

                  <p className="text-sm font-bold text-[#f97316]">
                    {guideCount > 0
                      ? `${guideCount} guide${guideCount > 1 ? "s" : ""} available →`
                      : "Guides coming soon →"}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
