import { notFound } from "next/navigation";
import { standaloneGuides, getStandaloneGuide } from "@/data/standalone-guides";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import ArticleHero from "@/components/ArticleHero";
import TableOfContents from "@/components/TableOfContents";
import FAQSection from "@/components/FAQSection";
import DisclosureBox from "@/components/DisclosureBox";

type Props = { params: Promise<{ guideSlug: string }> };

export function generateStaticParams() {
  return standaloneGuides.map((g) => ({ guideSlug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { guideSlug } = await params;
  const guide = getStandaloneGuide(guideSlug);
  if (!guide) return createMetadata({ title: "Guide Not Found", description: "Not found.", path: "/guides", noIndex: true });
  return createMetadata({ title: guide.title, description: guide.excerpt, path: `/guides/${guide.slug}`, type: "article" });
}

export default async function StandaloneGuidePage({ params }: Props) {
  const { guideSlug } = await params;
  const guide = getStandaloneGuide(guideSlug);
  if (!guide) notFound();

  const toc = [
    { id: "quick-answer", text: "Quick Answer" },
    { id: "before-you-start", text: "Before You Start" },
    { id: "step-by-step", text: "Step-by-Step Guide" },
    { id: "common-mistakes", text: "Common Mistakes" },
    { id: "final-tip", text: "Final Tip" },
    { id: "faq", text: "FAQ" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: guide.title, path: `/guides/${guide.slug}` }])} />
      <JsonLd data={articleSchema({ title: guide.title, description: guide.excerpt, path: `/guides/${guide.slug}` })} />
      <main className="bg-page">
        <ArticleHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.type }]}
          chips={[{ label: guide.platform, accent: true }, { label: guide.type }]}
          label="PickOnes Guide"
          title={guide.title}
          description={guide.excerpt}
        />
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_320px]">
          <article className="min-w-0">
            <div id="quick-answer" className="mb-10 scroll-mt-24">
              <DisclosureBox title="Quick Answer" variant="highlight"><p className="text-base leading-relaxed">{guide.quickAnswer}</p></DisclosureBox>
            </div>
            <TableOfContents headings={toc} />
            <section id="before-you-start" className="mb-10 scroll-mt-24">
              <h2 className="mb-5 text-2xl font-bold text-[#1e293b]">Before You Start</h2>
              <div className="grid gap-3">
                {guide.beforeYouStart.map((item) => <DisclosureBox key={item} variant="info">{item}</DisclosureBox>)}
              </div>
            </section>
            <section id="step-by-step" className="mb-10 scroll-mt-24">
              <h2 className="mb-5 text-2xl font-bold text-[#1e293b]">Step-by-Step Guide</h2>
              <div className="grid gap-4">
                {guide.steps.map((s, i) => (
                  <div key={s.title} className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#1a5dc4]">Step {i + 1}</p>
                    <h3 className="mb-2 text-lg font-bold text-[#1e293b]">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-[#475569]">{s.description}</p>
                  </div>
                ))}
              </div>
            </section>
            <section id="common-mistakes" className="mb-10 scroll-mt-24">
              <h2 className="mb-5 text-2xl font-bold text-[#1e293b]">Common Mistakes</h2>
              <div className="grid gap-3">
                {guide.commonMistakes.map((m) => (
                  <div key={m} className="rounded-xl border border-[#fde68a] bg-[#fffbeb] p-4 text-sm leading-relaxed text-[#92400e]">{m}</div>
                ))}
              </div>
            </section>
            <section id="final-tip" className="mb-10 scroll-mt-24">
              <DisclosureBox title="Final Tip" variant="highlight">{guide.finalTip}</DisclosureBox>
            </section>
            <div id="faq" className="scroll-mt-24"><FAQSection faqs={guide.faqs} /></div>
          </article>
          <aside className="space-y-5">
            <DisclosureBox title="Guide Info" variant="info">
              <div className="grid gap-3 text-sm">
                <div><span className="font-medium text-[#1e293b]">Type: </span><span className="text-[#475569]">{guide.type}</span></div>
                <div><span className="font-medium text-[#1e293b]">Difficulty: </span><span className="text-[#475569]">{guide.difficulty}</span></div>
                <div><span className="font-medium text-[#1e293b]">Time: </span><span className="text-[#475569]">{guide.timeRequired}</span></div>
                <div><span className="font-medium text-[#1e293b]">Platform: </span><span className="text-[#475569]">{guide.platform}</span></div>
                <div><span className="font-medium text-[#1e293b]">Updated: </span><span className="text-[#475569]">{guide.updatedAt}</span></div>
              </div>
            </DisclosureBox>
            <DisclosureBox title="Content Standard" variant="highlight">
              Each guide should give a quick answer first, then clear steps, common mistakes, FAQs, and updated player-friendly advice.
            </DisclosureBox>
          </aside>
        </section>
      </main>
    </>
  );
}
