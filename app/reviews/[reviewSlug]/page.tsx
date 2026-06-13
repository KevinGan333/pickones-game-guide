import Link from "next/link";
import { notFound } from "next/navigation";
import { getReviewBySlug, reviewContents } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type ReviewPageProps = {
  params: Promise<{
    reviewSlug: string;
  }>;
};

export function generateStaticParams() {
  return reviewContents.map((review) => ({
    reviewSlug: review.slug,
  }));
}

export async function generateMetadata({ params }: ReviewPageProps) {
  const { reviewSlug } = await params;
  const review = getReviewBySlug(reviewSlug);

  if (!review) {
    return createMetadata({
      title: "Review Not Found",
      description: "This PickOnes review could not be found.",
      path: "/reviews",
      noIndex: true,
    });
  }

  return createMetadata({
    title: review.seoTitle,
    description: review.metaDescription,
    path: `/reviews/${review.slug}`,
    type: "article",
  });
}

export default async function ReviewDetailPage({ params }: ReviewPageProps) {
  const { reviewSlug } = await params;
  const review = getReviewBySlug(reviewSlug);

  if (!review) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
          { name: review.title, path: `/reviews/${review.slug}` },
        ])}
      />

      <JsonLd
        data={articleSchema({
          title: review.title,
          description: review.metaDescription,
          path: `/reviews/${review.slug}`,
        })}
      />

      <main className="min-h-screen bg-[#fff7ed] text-[#2b1608]">
        <section className="border-b border-orange-200 bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fed7aa] px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold text-[#6b3f1d]">
              <Link href="/reviews" className="hover:text-[#f97316]">
                Reviews
              </Link>
              <span>/</span>
              <span className="text-[#f97316]">{review.gameTitle}</span>
            </div>

            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#c2410c] shadow-sm">
                {review.category}
              </span>
              <span className="rounded-full bg-[#3b1f0f] px-4 py-2 text-sm font-bold text-orange-50 shadow-sm">
                {review.playTime}
              </span>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              PickOnes Review
            </p>

            <h1 className="mb-6 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
              {review.title}
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              {review.excerpt}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm md:p-10">
            <div className="mb-10 rounded-[1.5rem] bg-[#3b1f0f] p-6 text-orange-50">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                Quick Verdict
              </p>
              <p className="text-lg leading-8 text-orange-100">
                {review.verdict}
              </p>
            </div>

            <section className="mb-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.25rem] border border-orange-200 bg-[#fff7ed] p-5">
                <h2 className="mb-4 text-2xl font-black">Pros</h2>
                <ul className="grid gap-3 text-sm leading-6 text-[#6b3f1d]">
                  {review.pros.map((item) => (
                    <li key={item}>+ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.25rem] border border-orange-200 bg-[#fff7ed] p-5">
                <h2 className="mb-4 text-2xl font-black">Cons</h2>
                <ul className="grid gap-3 text-sm leading-6 text-[#6b3f1d]">
                  {review.cons.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {review.sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="mb-4 text-3xl font-black">{section.heading}</h2>

                {section.body.length > 0 && (
                  <div className="space-y-5">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="leading-8 text-[#6b3f1d]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {review.faqs.length > 0 && (
              <section>
                <h2 className="mb-4 text-3xl font-black">FAQ</h2>

                <div className="grid gap-4">
                  {review.faqs.map((faq) => (
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
            )}
          </article>

          <aside className="h-fit space-y-6">
            <div className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-black">Review Info</h2>

              <div className="grid gap-3 text-sm">
                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">Game</p>
                  <p className="font-black">{review.gameTitle}</p>
                </div>

                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">Platform</p>
                  <p className="font-black">{review.platform}</p>
                </div>

                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">Play Time</p>
                  <p className="font-black">{review.playTime}</p>
                </div>

                <div className="rounded-2xl bg-[#fff7ed] p-4">
                  <p className="mb-1 font-bold text-[#f97316]">Updated</p>
                  <p className="font-black">{review.updatedAt}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-black">Tags</h2>

              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#c2410c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#3b1f0f] p-6 text-orange-50 shadow-sm">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                PickOnes Review Standard
              </p>
              <p className="text-sm leading-7 text-orange-100">
                Reviews should help players understand gameplay feel, content
                structure, strengths, weaknesses, and whether the game is worth
                their time.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}