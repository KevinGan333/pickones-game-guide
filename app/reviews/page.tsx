import Link from "next/link";
import { reviewContents } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Reviews",
  description:
    "Read PickOnes game reviews, retro handheld reviews, gameplay impressions, buying advice, and practical player-focused analysis.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[#fff7ed] px-6 py-16 text-[#2b1608]">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
          Reviews
        </p>

        <h1 className="mb-6 text-5xl font-black">PickOnes Reviews</h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-[#6b3f1d]">
          Read practical game reviews, gameplay impressions, buying advice, and
          player-focused analysis for everyday gamers.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {reviewContents.map((review) => (
            <Link
              key={review.slug}
              href={`/reviews/${review.slug}`}
              className="rounded-[1.5rem] border border-orange-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#c2410c]">
                  {review.gameTitle}
                </span>

                <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-bold text-[#6b3f1d]">
                  {review.playTime}
                </span>
              </div>

              <h2 className="mb-3 text-2xl font-black">{review.title}</h2>

              <p className="mb-5 leading-7 text-[#6b3f1d]">
                {review.excerpt}
              </p>

              <span className="font-bold text-[#f97316]">Read Review →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}