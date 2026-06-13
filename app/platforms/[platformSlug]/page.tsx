import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlatformBySlug, platforms } from "@/data/platforms";
import { reviewContents } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, platformPageSchema } from "@/lib/schema";
import ArticleHero from "@/components/ArticleHero";
import ReviewCard from "@/components/ReviewCard";
import DisclosureBox from "@/components/DisclosureBox";

type Props = { params: Promise<{ platformSlug: string }> };

export function generateStaticParams() { return platforms.map((p) => ({ platformSlug: p.slug })); }

export async function generateMetadata({ params }: Props) {
  const { platformSlug } = await params;
  const p = getPlatformBySlug(platformSlug);
  if (!p) return createMetadata({ title: "Platform Not Found", description: "Not found.", path: "/platforms", noIndex: true });
  return createMetadata({ title: `${p.title} Guides`, description: `Browse ${p.title} guides on PickOnes.`, path: `/platforms/${p.slug}` });
}

export default async function PlatformHubPage({ params }: Props) {
  const { platformSlug } = await params;
  const p = getPlatformBySlug(platformSlug);
  if (!p) notFound();
  const revs = reviewContents.filter((r) => r.platform.toLowerCase().includes(p.title.toLowerCase()));

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Platforms", path: "/platforms" }, { name: p.title, path: `/platforms/${p.slug}` }])} />
      <JsonLd data={platformPageSchema({ title: `${p.title} Guides`, description: p.description, path: `/platforms/${p.slug}` })} />
      <main className="bg-page">
        <ArticleHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Platforms", href: "/platforms" }, { label: p.title }]} chips={[{ label: p.category, accent: true }]} label="Platform Hub" title={`${p.title} Guides`} description={p.description} />
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#1e293b]">Guide Collection</h2>
            <div className="grid gap-4">
              {p.guides.map((g) => (
                <div key={g.slug} className="card p-5 md:p-6">
                  <span className="mb-3 chip chip-blue">{g.type}</span>
                  <h3 className="mb-2 text-lg font-bold text-[#1e293b]">{g.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#475569]">{g.description}</p>
                  {g.gameSlug ? <Link href={`/games/${g.gameSlug}/${g.slug}`} className="text-sm font-semibold text-[#1a5dc4] transition hover:text-[#1548a0]">Read Guide →</Link> : <span className="text-sm text-[#94a3b8]">Coming soon</span>}
                </div>
              ))}
            </div>
            {revs.length > 0 && <div className="mt-14"><h2 className="mb-6 text-2xl font-bold text-[#1e293b]">{p.title} Reviews</h2><div className="grid gap-4 md:grid-cols-2">{revs.map((r) => <ReviewCard key={r.slug} review={r} />)}</div></div>}
          </div>
          <aside className="space-y-5">
            <DisclosureBox title="Who This Is For" variant="info">{p.audience}</DisclosureBox>
            <DisclosureBox title="Focus Areas" variant="info"><ul className="grid gap-2">{p.focus.map((f) => <li key={f} className="rounded-lg bg-[#eff6ff] px-4 py-2.5 text-sm font-medium text-[#475569]">{f}</li>)}</ul></DisclosureBox>
            <DisclosureBox title="Platform Strategy" variant="highlight">Platform hubs connect game guides, setup tutorials, device guides, and beginner-friendly recommendations.</DisclosureBox>
          </aside>
        </section>
      </main>
    </>
  );
}
