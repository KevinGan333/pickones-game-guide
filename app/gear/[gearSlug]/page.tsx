import { notFound } from "next/navigation";
import { gearItems, getGearBySlug } from "@/data/gear";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import ArticleHero from "@/components/ArticleHero";
import DisclosureBox from "@/components/DisclosureBox";

type Props = { params: Promise<{ gearSlug: string }> };

export function generateStaticParams() { return gearItems.map((i) => ({ gearSlug: i.slug })); }

export async function generateMetadata({ params }: Props) {
  const { gearSlug } = await params;
  const item = getGearBySlug(gearSlug);
  if (!item) return createMetadata({ title: "Gear Not Found", description: "Not found.", path: "/gear", noIndex: true });
  return createMetadata({ title: `${item.title} Gear Guides`, description: `Browse ${item.title} gear guides on PickOnes.`, path: `/gear/${item.slug}` });
}

export default async function GearDetailPage({ params }: Props) {
  const { gearSlug } = await params;
  const item = getGearBySlug(gearSlug);
  if (!item) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gear", path: "/gear" }, { name: item.title, path: `/gear/${item.slug}` }])} />
      <main className="bg-page">
        <ArticleHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gear", href: "/gear" }, { label: item.title }]} chips={[{ label: item.category, accent: true }, { label: item.platform }]} label="Gear Hub" title={`${item.title} Gear Guides`} description={item.description} />
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#1e293b]">Guide Collection</h2>
            {item.guides.length > 0 ? (
              <div className="grid gap-4">{item.guides.map((g) => <div key={g.slug} className="card p-5 md:p-6"><span className="mb-3 chip chip-orange">{g.type}</span><h3 className="mb-2 text-lg font-bold text-[#1e293b]">{g.title}</h3><p className="mb-4 text-sm leading-relaxed text-[#475569]">{g.description}</p><span className="text-sm text-[#94a3b8]">Coming soon</span></div>)}</div>
            ) : <DisclosureBox variant="info" title="Coming Soon">Guides coming soon for this item.</DisclosureBox>}
          </div>
          <aside className="space-y-5">
            <DisclosureBox title="Focus Areas" variant="info"><ul className="grid gap-2">{item.focus.map((f) => <li key={f} className="rounded-lg bg-[#eff6ff] px-4 py-2.5 text-sm font-medium text-[#475569]">{f}</li>)}</ul></DisclosureBox>
            <DisclosureBox title="Gear Hub" variant="highlight">This gear hub collects practical accessory guides, buying recommendations, and setup tips.</DisclosureBox>
          </aside>
        </section>
      </main>
    </>
  );
}
