import Link from "next/link";
import { guideContents } from "@/data/guides";
import { getGameBySlug } from "@/data/games";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Guide Index",
  description:
    "Browse all PickOnes game guides, beginner tips, walkthroughs, setup help, platform guides, and player-friendly explanations.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-page-warm px-6 py-16 text-[#2b1608]">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
          Guides
        </p>

        <h1 className="mb-6 text-5xl font-black">PickOnes Guide Index</h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-[#6b3f1d]">
          Browse all practical PickOnes game guides, beginner tips,
          walkthroughs, setup help, and player-friendly explanations.
        </p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guideContents.map((guide) => {
            const game = getGameBySlug(guide.gameSlug);

            return (
              <Link
                key={`${guide.gameSlug}-${guide.guideSlug}`}
                href={`/games/${guide.gameSlug}/${guide.guideSlug}`}
                className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-[#c2410c]">
                    {guide.type}
                  </span>

                  <span className="inline-flex rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-black text-[#6b3f1d]">
                    {guide.difficulty}
                  </span>
                </div>

                <h2 className="mb-3 text-xl font-black">{guide.title}</h2>

                <p className="mb-4 text-sm font-bold text-[#6b3f1d]">
                  {game?.title || guide.gameSlug}
                </p>

                <p className="mb-5 line-clamp-3 text-sm leading-6 text-[#6b3f1d]">
                  {guide.excerpt}
                </p>

                <div className="mb-5 flex flex-wrap gap-2 text-xs font-bold text-[#6b3f1d]">
                  <span>{guide.platform}</span>
                  <span>•</span>
                  <span>{guide.timeRequired}</span>
                </div>

                <span className="text-sm font-black text-[#f97316]">
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