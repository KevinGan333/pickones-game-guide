import { notFound } from "next/navigation";
import { getReviewBySlug, reviewContents } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import ArticleHero from "@/components/ArticleHero";
import TableOfContents from "@/components/TableOfContents";
import FAQSection from "@/components/FAQSection";
import DisclosureBox from "@/components/DisclosureBox";

type Props = { params: Promise<{ reviewSlug: string }> };

export function generateStaticParams() { return reviewContents.map((r) => ({ reviewSlug: r.slug })); }

export async function generateMetadata({ params }: Props) {
  const { reviewSlug } = await params;
  const r = getReviewBySlug(reviewSlug);
  if (!r) return createMetadata({ title: "Review Not Found", description: "Not found.", path: "/reviews", noIndex: true });
  return createMetadata({ title: r.seoTitle, description: r.metaDescription, path: `/reviews/${r.slug}`, type: "article" });
}

export default async function ReviewDetailPage({ params }: Props) {
  const { reviewSlug } = await params;
  const r = getReviewBySlug(reviewSlug);
  if (!r) notFound();

  const sections = r.sections.filter((s) => s.heading !== "Frequently Asked Questions" && s.body.length > 0);
  const toc = [...sections.map((s) => ({ id: s.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/g,""), text: s.heading })), { id: "faq", text: "FAQ" }];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }, { name: r.title, path: `/reviews/${r.slug}` }])} />
      <JsonLd data={articleSchema({ title: r.title, description: r.metaDescription, path: `/reviews/${r.slug}` })} />
      <main className="bg-page">
        <ArticleHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }, { label: r.gameTitle }]} chips={[{ label: r.gameTitle, accent: true }, { label: r.playTime }]} label="PickOnes Review" title={r.title} description={r.excerpt} />
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_320px]">
          <article className="min-w-0">
            <div className="mb-10"><DisclosureBox title="Quick Verdict" variant="highlight"><p className="text-base leading-relaxed">{r.verdict}</p></DisclosureBox></div>
            <TableOfContents headings={toc} />
            <div className="mb-10 grid gap-5 md:grid-cols-2">
              <DisclosureBox title="Pros" variant="info"><ul className="grid gap-2 text-sm">{r.pros.map((p) => <li key={p} className="flex gap-2"><span className="text-green-600 flex-shrink-0">+</span><span className="text-[#475569]">{p}</span></li>)}</ul></DisclosureBox>
              <DisclosureBox title="Cons" variant="warning"><ul className="grid gap-2 text-sm">{r.cons.map((c) => <li key={c} className="flex gap-2"><span className="text-amber-600 flex-shrink-0">−</span><span className="text-[#475569]">{c}</span></li>)}</ul></DisclosureBox>
            </div>
            {sections.map((s) => { const id = s.heading.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/-$/g,""); return <section key={s.heading} id={id} className="mb-10 scroll-mt-24"><h2 className="mb-5 text-2xl font-bold text-[#1e293b]">{s.heading}</h2><div className="space-y-4">{s.body.map((p) => <p key={p.slice(0,60)} className="leading-relaxed text-[#475569]">{p}</p>)}</div></section>; })}
            {r.faqs.length > 0 && <div id="faq" className="scroll-mt-24"><FAQSection faqs={r.faqs} /></div>}
          </article>
          <aside className="space-y-5">
            <DisclosureBox title="Review Info" variant="info"><div className="grid gap-3 text-sm"><div><span className="font-medium text-[#1e293b]">Game: </span><span className="text-[#475569]">{r.gameTitle}</span></div><div><span className="font-medium text-[#1e293b]">Platform: </span><span className="text-[#475569]">{r.platform}</span></div><div><span className="font-medium text-[#1e293b]">Play Time: </span><span className="text-[#475569]">{r.playTime}</span></div><div><span className="font-medium text-[#1e293b]">Author: </span><span className="text-[#475569]">{r.author}</span></div><div><span className="font-medium text-[#1e293b]">Updated: </span><span className="text-[#475569]">{r.updatedAt}</span></div></div></DisclosureBox>
            <DisclosureBox title="Tags" variant="info"><div className="flex flex-wrap gap-1.5">{r.tags.map((t) => <span key={t} className="chip chip-muted text-[11px]">{t}</span>)}</div></DisclosureBox>
            <DisclosureBox title="Review Standard" variant="highlight">Reviews help players understand gameplay feel, content, strengths, weaknesses, and value.</DisclosureBox>
          </aside>
        </section>
      </main>
    </>
  );
}
