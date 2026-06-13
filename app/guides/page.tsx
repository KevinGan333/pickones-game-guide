import { guideContents } from "@/data/guides";
import { getGameBySlug } from "@/data/games";
import { createMetadata } from "@/lib/seo";
import ArticleHero from "@/components/ArticleHero";
import FeaturedGuideCard from "@/components/FeaturedGuideCard";

export const metadata = createMetadata({ title: "Guide Index", description: "Browse all PickOnes game guides, beginner tips, walkthroughs, and setup help.", path: "/guides" });

export default function GuidesPage() {
  return (
    <main className="bg-page">
      <ArticleHero label="Guides" title="PickOnes Guide Index" description="Browse all practical PickOnes game guides, beginner tips, walkthroughs, and setup help." />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guideContents.map((g) => {
            const game = getGameBySlug(g.gameSlug);
            return <FeaturedGuideCard key={`${g.gameSlug}-${g.guideSlug}`} guide={g} gameTitle={game?.title ?? g.gameSlug} />;
          })}
        </div>
      </section>
    </main>
  );
}
