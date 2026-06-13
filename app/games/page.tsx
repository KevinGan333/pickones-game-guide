import { games } from "@/data/games";
import { getGuidesByGameSlug } from "@/data/guides";
import { createMetadata } from "@/lib/seo";
import ArticleHero from "@/components/ArticleHero";
import GameCard from "@/components/GameCard";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({ title: "Game Guides Index", description: "Browse all PickOnes game guides, beginner tips, walkthroughs, and player-friendly tutorials.", path: "/games" });

export default function GamesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Games", path: "/games" }])} />
      <main className="bg-page">
        <ArticleHero label="Games" title="PickOnes Game Guide Index" description="Browse beginner guides, walkthroughs, best settings, and practical tips organized by game." />
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((g) => <GameCard key={g.slug} game={g} guideCount={getGuidesByGameSlug(g.slug).length} />)}
          </div>
        </section>
      </main>
    </>
  );
}
