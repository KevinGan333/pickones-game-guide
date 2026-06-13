import Link from "next/link";
import { notFound } from "next/navigation";
import { getGameBySlug } from "@/data/games";
import {
  guideContents,
  getGuideContent,
  getGuidesByGameSlug,
} from "@/data/guides";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type GuidePageProps = {
  params: Promise<{
    gameSlug: string;
    guideSlug: string;
  }>;
};

export function generateStaticParams() {
  return guideContents.map((guide) => ({
    gameSlug: guide.gameSlug,
    guideSlug: guide.guideSlug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { gameSlug, guideSlug } = await params;
  const game = getGameBySlug(gameSlug);
  const guide = getGuideContent(gameSlug, guideSlug);

  if (!game || !guide) {
    return createMetadata({
      title: "Guide Not Found",
      description: "This PickOnes guide could not be found.",
      path: "/guides",
      noIndex: true,
    });
  }

  return createMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/games/${game.slug}/${guide.guideSlug}`,
    type: "article",
  });
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { gameSlug, guideSlug } = await params;
  const game = getGameBySlug(gameSlug);
  const guide = getGuideContent(gameSlug, guideSlug);

  if (!game || !guide) {
    notFound();
  }

  const relatedGuides = getGuidesByGameSlug(game.slug).filter(
    (item) => item.guideSlug !== guide.guideSlug
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Games", path: "/games" },
          { name: game.title, path: `/games/${game.slug}` },
          {
            name: guide.title,
            path: `/games/${game.slug}/${guide.guideSlug}`,
          },
        ])}
      />

      <JsonLd
        data={articleSchema({
          title: guide.title,
          description: guide.excerpt,
          path: `/games/${game.slug}/${guide.guideSlug}`,
        })}
      />

      <main className="min-h-screen bg-page-cool text-[#2b1608]">
        <section className="border-b border-orange-200 bg-hero-gradient px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold text-[#6b3f1d]">
              <Link href="/games" className="hover:text-[#f97316]">
                Games
              </Link>
              <span>/</span>
              <Link
                href={`/games/${game.slug}`}
                className="hover:text-[#f97316]"
              >
                {game.title}
              </Link>
              <span>/</span>
              <span className="text-[#f97316]">{guide.type}</span>
            </div>

            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#c2410c] shadow-sm">
                {guide.platform}
              </span>
              <span className="rounded-full bg-[#3b1f0f] px-4 py-2 text-sm font-bold text-orange-50 shadow-sm">
                {guide.type}
              </span>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              PickOnes Guide
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              {guide.title}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              {guide.excerpt}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm md:p-10">
            <div className="mb-10 rounded-[1.5rem] bg-[#3b1f0f] p-6 text-orange-50">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                Quick Answer
              </p>
              <p className="text-lg leading-8 text-orange-100">
                {guide.quickAnswer}
              </p>
            </div>

            <section className="mb-10">
              <h2 className="mb-4 text-3xl font-black">Before You Start</h2>

              <div className="grid gap-3">
                {guide.beforeYouStart.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#fff7ed] p-4 leading-7 text-[#6b3f1d]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="mb-5 text-3xl font-black">Step-by-Step Guide</h2>

              <div className="grid gap-5">
                {guide.steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[1.25rem] border border-orange-200 bg-[#fff7ed] p-5"
                  >
                    <p className="mb-2 text-sm font-black text-[#f97316]">
                      Step {index + 1}
                    </p>
                    <h3 className="mb-2 text-xl font-black">{step.title}</h3>
                    <p className="leading-7 text-[#6b3f1d]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-3xl font-black">Common Mistakes</h2>

              <ul className="grid gap-3 leading-7 text-[#6b3f1d]">
                {guide.commonMistakes.map((mistake) => (
                  <li key={mistake} className="rounded-2xl bg-[#fff7ed] p-4">
                    {mistake}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-3xl font-black">Final Tip</h2>
              <p className="leading-8 text-[#6b3f1d]">{guide.finalTip}</p>
            </section>

            <section>
              <h2 className="mb-4 text-3xl font-black">FAQ</h2>

              <div className="grid gap-4">
                {guide.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-[1.25rem] border border-orange-200 bg-[#fff7ed] p-5"
                  >
                    <h3 className="mb-2 text-xl font-black">{faq.question}</h3>
                    <p className="leading-7 text-[#6b3f1d]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="h-fit space-y-6">
            <div className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-black">Guide Info</h2>

              <div className="grid gap-3 text-sm">
                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">Game</p>
                  <p className="font-black">{game.title}</p>
                </div>

                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">Guide Type</p>
                  <p className="font-black">{guide.type}</p>
                </div>

                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">Difficulty</p>
                  <p className="font-black">{guide.difficulty}</p>
                </div>

                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">
                    Time Required
                  </p>
                  <p className="font-black">{guide.timeRequired}</p>
                </div>

                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">Updated</p>
                  <p className="font-black">{guide.updatedAt}</p>
                </div>
              </div>
            </div>

            {relatedGuides.length > 0 && (
              <div className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-2xl font-black">Related Guides</h2>

                <div className="grid gap-3">
                  {relatedGuides.map((item) => (
                    <Link
                      key={item.guideSlug}
                      href={`/games/${game.slug}/${item.guideSlug}`}
                      className="rounded-2xl bg-[#fff7ed] p-4 text-sm font-bold text-[#6b3f1d] transition hover:bg-[#ffedd5] hover:text-[#f97316]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[1.5rem] bg-[#3b1f0f] p-6 text-orange-50 shadow-sm">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                PickOnes Content Standard
              </p>
              <p className="text-sm leading-7 text-orange-100">
                Each guide should give a quick answer first, then clear steps,
                common mistakes, FAQs, and updated player-friendly advice.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}