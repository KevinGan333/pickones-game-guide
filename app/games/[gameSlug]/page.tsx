import { notFound } from "next/navigation";
import { games, getGameBySlug } from "@/data/games";
import { getGuidesByGameSlug } from "@/data/guides";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, gameHubSchema } from "@/lib/schema";
import ArticleHero from "@/components/ArticleHero";
import FeaturedGuideCard from "@/components/FeaturedGuideCard";
import DisclosureBox from "@/components/DisclosureBox";

type Props = { params: Promise<{ gameSlug: string }> };

export function generateStaticParams() { return games.map((g) => ({ gameSlug: g.slug })); }

export async function generateMetadata({ params }: Props) {
  const { gameSlug } = await params;
  const game = getGameBySlug(gameSlug);
  if (!game) return createMetadata({ title: "Game Not Found", description: "Not found.", path: "/games", noIndex: true });
  return createMetadata({ title: `${game.title} Guides`, description: `Browse practical ${game.title} guides on PickOnes.`, path: `/games/${game.slug}` });
}

export default async function GameHubPage({ params }: Props) {
  const { gameSlug } = await params;
  const game = getGameBySlug(gameSlug);
  if (!game) notFound();
  const gameGuides = getGuidesByGameSlug(game.slug);

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Games", path: "/games" }, { name: game.title, path: `/games/${game.slug}` }])} />
      <JsonLd data={gameHubSchema({ title: game.title, description: game.description, path: `/games/${game.slug}`, platform: game.platform, genre: game.category })} />
      <main className="bg-page">
        <ArticleHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Games", href: "/games" }, { label: game.title }]} chips={[{ label: game.platform, accent: true }, { label: game.category }]} label="Game Hub" title={`${game.title} Guides`} description={game.description} />
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#1e293b]">Guide Collection</h2>
            {gameGuides.length > 0 ? (
              <div className="grid gap-4">{gameGuides.map((g) => <FeaturedGuideCard key={g.guideSlug} guide={g} />)}</div>
            ) : (
              <DisclosureBox variant="info" title="Coming Soon">Guides coming soon for this game.</DisclosureBox>
            )}
          </div>
          <aside className="space-y-5">
            <DisclosureBox title="Focus Areas" variant="info">
              <ul className="grid gap-2">{game.focus.map((f) => <li key={f} className="rounded-lg bg-[#eff6ff] px-4 py-2.5 text-sm font-medium text-[#475569]">{f}</li>)}</ul>
            </DisclosureBox>
            <DisclosureBox title="About This Hub" variant="highlight">This game hub collects beginner guides, walkthroughs, settings, and tips in one place.</DisclosureBox>
          </aside>
        </section>
      </main>
    </>
  );
}
