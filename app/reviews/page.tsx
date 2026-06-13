import { reviewContents } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";
import ArticleHero from "@/components/ArticleHero";
import ReviewCard from "@/components/ReviewCard";

export const metadata = createMetadata({ title: "Reviews", description: "Read PickOnes game reviews, retro handheld reviews, gameplay impressions, and buying advice.", path: "/reviews" });

export default function ReviewsPage() {
  return (
    <main className="bg-page">
      <ArticleHero label="Reviews" title="PickOnes Reviews" description="Read practical game reviews, gameplay impressions, and player-focused analysis." />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {reviewContents.map((r) => <ReviewCard key={r.slug} review={r} />)}
        </div>
      </section>
    </main>
  );
}
