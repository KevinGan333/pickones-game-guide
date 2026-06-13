import { gearItems } from "@/data/gear";
import { createMetadata } from "@/lib/seo";
import ArticleHero from "@/components/ArticleHero";
import GearCard from "@/components/GearCard";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({ title: "Gaming Gear Guides", description: "Browse gaming gear guides for controllers, headphones, power banks, retro handheld accessories, and more.", path: "/gear" });

export default function GearPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gear", path: "/gear" }])} />
      <main className="bg-page">
        <ArticleHero label="Gear" title="PickOnes Gaming Gear Guides" description="Browse gaming gear guides, accessory recommendations, controller picks, and setup accessories." />
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gearItems.map((i) => <GearCard key={i.slug} item={i} guideCount={i.guides.length} />)}
          </div>
        </section>
      </main>
    </>
  );
}
