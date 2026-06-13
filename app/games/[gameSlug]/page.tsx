import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGameBySlug } from "@/data/games";
import { getGuidesByGameSlug } from "@/data/guides";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, gameHubSchema } from "@/lib/schema";

type GamePageProps = {
  params: Promise<{
    gameSlug: string;
  }>;
};

export function generateStaticParams() {
  return games.map((game) => ({
    gameSlug: game.slug,
  }));
}

export async function generateMetadata({ params }: GamePageProps) {
  const { gameSlug } = await params;
  const game = getGameBySlug(gameSlug);

  if (!game) {
    return createMetadata({
      title: "Game Not Found",
      description: "This PickOnes game page could not be found.",
      path: "/games",
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${game.title} Guides`,
    description: `Browse practical ${game.title} guides, beginner tips, walkthroughs, settings, and helpful gameplay advice on PickOnes.`,
    path: `/games/${game.slug}`,
  });
}

export default async function GameHubPage({ params }: GamePageProps) {
  const { gameSlug } = await params;
  const game = getGameBySlug(gameSlug);

  if (!game) {
    notFound();
  }

  const gameGuides = getGuidesByGameSlug(game.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Games", path: "/games" },
          { name: game.title, path: `/games/${game.slug}` },
        ])}
      />

      <JsonLd
        data={gameHubSchema({
          title: game.title,
          description: game.description,
          path: `/games/${game.slug}`,
          platform: game.platform,
          genre: game.category,
        })}
      />

      <main className="min-h-screen bg-page-cool text-[#2b1608]">
        <section className="border-b border-orange-200 bg-hero-gradient px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#c2410c] shadow-sm">
                {game.platform}
              </span>

              <span className="rounded-full bg-[#3b1f0f] px-4 py-2 text-sm font-bold text-orange-50 shadow-sm">
                {game.category}
              </span>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              Game Hub
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
              {game.title} Guides
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              {game.description}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
                Guide Collection
              </p>

              <h2 className="text-4xl font-black">
                Latest {game.title} Guides
              </h2>
            </div>

            {gameGuides.length > 0 ? (
              <div className="grid gap-5">
                {gameGuides.map((guide) => (
                  <Link
                    key={guide.guideSlug}
                    href={`/games/${game.slug}/${guide.guideSlug}`}
                    className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
                  >
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#c2410c]">
                        {guide.type}
                      </span>

                      <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-bold text-[#6b3f1d]">
                        {guide.difficulty}
                      </span>
                    </div>

                    <h3 className="mb-3 text-2xl font-black">
                      {guide.title}
                    </h3>

                    <p className="mb-5 leading-7 text-[#6b3f1d]">
                      {guide.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-3 text-sm font-bold text-[#6b3f1d]">
                      <span>Updated: {guide.updatedAt}</span>
                      <span>•</span>
                      <span>{guide.timeRequired}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-orange-200 bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Guides coming soon
                </h3>
                <p className="leading-7 text-[#6b3f1d]">
                  PickOnes will add practical guides, walkthroughs, settings,
                  and beginner tips for this game.
                </p>
              </div>
            )}
          </div>

          <aside className="h-fit space-y-6">
            <div className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-black">Focus Areas</h2>

              <div className="grid gap-3">
                {game.focus.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-sm font-bold text-[#6b3f1d]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#3b1f0f] p-6 text-orange-50 shadow-sm">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                PickOnes Game Hub
              </p>

              <p className="text-sm leading-7 text-orange-100">
                This game hub collects beginner guides, walkthroughs, settings,
                tips, and related player questions in one place.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
