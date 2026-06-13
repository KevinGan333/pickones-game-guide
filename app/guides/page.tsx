import Link from "next/link";
import { guideContents } from "@/data/guides";
import { standaloneGuides } from "@/data/standalone-guides";
import { getGameBySlug } from "@/data/games";
import { createMetadata } from "@/lib/seo";
import ArticleHero from "@/components/ArticleHero";

export const metadata = createMetadata({
  title: "Guide Index",
  description: "Browse all PickOnes game guides, beginner tips, walkthroughs, setup help, and platform guides.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <main className="bg-page">
      <ArticleHero
        label="Guides"
        title="PickOnes Guide Index"
        description="Browse all practical PickOnes guides — setup tutorials, troubleshooting, platform guides, game walkthroughs, and beginner-friendly help."
      />

      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Standalone Guides */}
        <h2 className="mb-6 text-2xl font-bold text-[#1e293b]">Setup & Platform Guides</h2>
        <div className="mb-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {standaloneGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card group flex flex-col p-5 md:p-6"
            >
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="chip chip-blue">{guide.type}</span>
                <span className="chip chip-muted">{guide.difficulty}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#1e293b] transition group-hover:text-[#1a5dc4]">
                {guide.title}
              </h3>
              <p className="mb-2 text-sm font-medium text-[#94a3b8]">{guide.platform}</p>
              <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[#475569]">
                {guide.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#94a3b8]">
                <span>{guide.platform}</span><span aria-hidden="true">·</span>
                <span>{guide.timeRequired}</span><span aria-hidden="true">·</span>
                <span>Updated {guide.updatedAt}</span>
              </div>
              <span className="mt-3 text-sm font-semibold text-[#1a5dc4] transition group-hover:text-[#1548a0]">
                Read Guide →
              </span>
            </Link>
          ))}
        </div>

        {/* Game-Specific Guides */}
        <h2 className="mb-6 text-2xl font-bold text-[#1e293b]">Game Walkthroughs & Tips</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guideContents.map((guide) => {
            const game = getGameBySlug(guide.gameSlug);
            return (
              <Link
                key={`${guide.gameSlug}-${guide.guideSlug}`}
                href={`/games/${guide.gameSlug}/${guide.guideSlug}`}
                className="card group flex flex-col p-5 md:p-6"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="chip chip-blue">{guide.type}</span>
                  <span className="chip chip-muted">{guide.difficulty}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1e293b] transition group-hover:text-[#1a5dc4]">
                  {guide.title}
                </h3>
                {game && (
                  <p className="mb-2 text-sm font-medium text-[#94a3b8]">{game.title}</p>
                )}
                <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[#475569]">
                  {guide.excerpt}
                </p>
                <span className="text-sm font-semibold text-[#1a5dc4] transition group-hover:text-[#1548a0]">
                  Read Guide →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
