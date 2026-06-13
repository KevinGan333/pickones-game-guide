import Link from "next/link";
import { notFound } from "next/navigation";
import { gearItems, getGearBySlug } from "@/data/gear";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type GearPageProps = {
  params: Promise<{
    gearSlug: string;
  }>;
};

export function generateStaticParams() {
  return gearItems.map((item) => ({
    gearSlug: item.slug,
  }));
}

export async function generateMetadata({ params }: GearPageProps) {
  const { gearSlug } = await params;
  const item = getGearBySlug(gearSlug);

  if (!item) {
    return createMetadata({
      title: "Gear Not Found",
      description: "This PickOnes gear page could not be found.",
      path: "/gear",
      noIndex: true,
    });
  }

  return createMetadata({
    title: `${item.title} Gear Guides`,
    description: `Browse practical ${item.title} gear guides, accessory recommendations, and player-friendly buying advice on PickOnes.`,
    path: `/gear/${item.slug}`,
  });
}

export default async function GearDetailPage({ params }: GearPageProps) {
  const { gearSlug } = await params;
  const item = getGearBySlug(gearSlug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gear", path: "/gear" },
          { name: item.title, path: `/gear/${item.slug}` },
        ])}
      />

      <main className="min-h-screen bg-page-warm text-[#2b1608]">
        <section className="border-b border-orange-200 bg-hero-gradient px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm font-bold text-[#6b3f1d]">
              <Link href="/gear" className="hover:text-[#f97316]">
                Gear
              </Link>
              <span>/</span>
              <span className="text-[#f97316]">{item.title}</span>
            </div>

            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#c2410c] shadow-sm">
                {item.category}
              </span>
              <span className="rounded-full bg-[#3b1f0f] px-4 py-2 text-sm font-bold text-orange-50 shadow-sm">
                {item.platform}
              </span>
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              Gear Hub
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
              {item.title} Gear Guides
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              {item.description}
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
                Latest {item.title} Guides
              </h2>
            </div>

            {item.guides.length > 0 ? (
              <div className="grid gap-5">
                {item.guides.map((guide) => (
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

                    <span className="text-sm font-bold text-[#f97316]">
                      Gear guide page coming next →
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-orange-200 bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-2xl font-black">
                  Guides coming soon
                </h3>
                <p className="leading-7 text-[#6b3f1d]">
                  PickOnes will add practical gear guides, accessory recommendations,
                  and buying advice for this item.
                </p>
              </div>
            )}
          </div>

          <aside className="h-fit space-y-6">
            <div className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-2xl font-black">Focus Areas</h2>

              <div className="grid gap-3">
                {item.focus.map((focusItem) => (
                  <div
                    key={focusItem}
                    className="rounded-2xl bg-[#fff7ed] px-4 py-3 text-sm font-bold text-[#6b3f1d]"
                  >
                    {focusItem}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#3b1f0f] p-6 text-orange-50 shadow-sm">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                PickOnes Gear Hub
              </p>
              <p className="text-sm leading-7 text-orange-100">
                This gear hub collects practical accessory guides, buying
                recommendations, and setup tips in one place.
              </p>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
