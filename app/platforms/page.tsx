import { createMetadata } from "@/lib/seo";
import { platforms } from "@/data/platforms";
import ArticleHero from "@/components/ArticleHero";
import PlatformCard from "@/components/PlatformCard";

export const metadata = createMetadata({ title: "Platform Guides", description: "Explore platform guides for Nintendo Switch, Switch 2, retro handhelds, Steam Deck, and more.", path: "/platforms" });

export default function PlatformsPage() {
  return (
    <main className="bg-page">
      <ArticleHero label="Platforms" title="PickOnes Platform Hub" description="Browse setup guides, best settings, game recommendations, and beginner help for every platform." />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {platforms.map((p) => <PlatformCard key={p.slug} platform={p} guideCount={p.guides.length} />)}
        </div>
      </section>
    </main>
  );
}
