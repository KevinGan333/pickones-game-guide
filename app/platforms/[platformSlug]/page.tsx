import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlatformBySlug, platforms } from "@/data/platforms";
import { reviewContents } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, platformPageSchema } from "@/lib/schema";

type PlatformPageProps = {
  params: Promise<{
    platformSlug: string;
  }>;
};

export function generateStaticParams() {
  return platforms.map((platform) => ({
    platformSlug: platform.slug,
  }));
}

export async function generateMetadata({ params }: PlatformPageProps) {
  const { platformSlug } = await params;
  const platform = getPlatformBySlug(platformSlug);

  if (!platform) {
    return createMetadata({
      title: "Platform Not Found",
      description: "This PickOnes platform page could not be found.",
      path: "/platforms",
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${platform.title} Guides`,
    description: `Browse practical ${platform.title} guides, setup tips, beginner help, best settings, game recommendations, and player-friendly tutorials on PickOnes.`,
    path: `/platforms/${platform.slug}`,
  });
}

export default async function PlatformHubPage({ params }: PlatformPageProps) {
  const { platformSlug } = await params;
  const platform = getPlatformBySlug(platformSlug);

  if (!platform) {
    notFound();
  }

  const platformReviews = reviewContents.filter((review) =>
    review.platform.toLowerCase().includes(platform.title.toLowerCase())
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Platforms", path: "/platforms" },
          { name: platform.title, path: `/platforms/${platform.slug}` },
        ])}
      />

      <JsonLd
        data={platformPageSchema({
          title: `${platform.title} Guides`,
          description: platform.description,
          path: `/platforms/${platform.slug}`,
        })}
      />

      <main className="min-h-screen bg-page-warm text-[#2b1608]">
        <section className="border-b border-orange-200 bg-hero-gradient px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold text-[#6b3f1d]">
              <Link href="/platforms" className="hover:text-[#f97316]">
                Platforms
              </Link>
              <span>/</span>
              <span className="text-[#f97316]">{platform.title}</span>
            </div>

            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#c2410c] shadow-sm">
                {platform.category}
              </span>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              Platform Hub
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
              {platform.title} Guides
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              {platform.description}
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
                Guide Collection
              </p>
              <h2 className="text-4xl font-black">
                Latest {platform.title} Guides
              </h2>
            </div>

            <div className="grid gap-5">
              {platform.guides.map((guide) => (
                <div
                  key={guide.slug}
                  className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
                >
                  <div className="mb-3">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#c2410c]">
                      {guide.type}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-black">{guide.title}</h3>

                  <p className="mb-5 leading-7 text-[#6b3f1d]">
                    {guide.description}
                  </p>

                  {guide.gameSlug ? (
                    <Link
                      href={`/games/${guide.gameSlug}/${guide.slug}`}
                      className="text-sm font-bold text-[#f97316] hover:underline"
                    >
                      Read Guide →
                    </Link>
                  ) : (
                    <p className="text-sm font-bold text-[#f97316]">
                      Platform guide page coming next →
                    </p>
                  )}
                </div>
              ))}
            </div>

            {platformReviews.length > 0 && (
              <div className="mt-12">
                <div className="mb-8">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
                    Reviews
                  </p>
                  <h2 className="text-4xl font-black">
                    {platform.title} Reviews
                  </h2>
                </div>

                <div className="grid gap-5">
                  {platformReviews.map((review) => (
                    <Link
                      key={review.slug}
                      href={`/reviews/${review.slug}`}
                      className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
                    >
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#c2410c]">
                          Review
                        </span>
                        <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-bold text-[#6b3f1d]">
                          {review.playTime}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-black">{review.title}</h3>

                      <p className="mb-4 line-clamp-2 leading-7 text-[#6b3f1d]">
                        {review.excerpt}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {review.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#3b1f0f] px-3 py-1 text-xs font-bold text-orange-50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="text-sm font-bold text-[#f97316] hover:underline">
                        Read Review →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="h-fit space-y-6">
            <div className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-black">Who This Is For</h2>
              <p className="leading-8 text-[#6b3f1d]">{platform.audience}</p>
            </div>

            <div className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-black">Focus Areas</h2>

              <div className="grid gap-3">
                {platform.focus.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-sm font-bold text-[#6b3f1d]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#3b1f0f] p-6 text-orange-50 shadow-sm">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                PickOnes Strategy
              </p>
              <p className="text-sm leading-7 text-orange-100">
                Platform hubs help PickOnes connect game guides, setup
                tutorials, device guides, and beginner-friendly recommendations
                into one clear SEO structure.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}