import { createMetadata } from "@/lib/seo";
import ArticleHero from "@/components/ArticleHero";

export const metadata = createMetadata({ title: "News and Updates", description: "Selective PickOnes gaming updates, Nintendo news, and retro handheld content.", path: "/news" });

const items = [
  { t: "Site Rebuild: PickOnes Is Now a Game Guide Platform", tag: "Site Update" },
  { t: "Nintendo Switch 2 Guide Planning Underway", tag: "Nintendo" },
  { t: "Retro Handheld Content Expansion", tag: "Retro Handheld" },
];

export default function NewsPage() {
  return (
    <main className="bg-page">
      <ArticleHero label="News" title="PickOnes News & Updates" description="Selective gaming updates and platform news that supports long-term guide content." />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.t} className="card p-5 md:p-6">
              <span className="mb-4 chip chip-blue">{i.tag}</span>
              <h2 className="text-lg font-bold text-[#1e293b]">{i.t}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
