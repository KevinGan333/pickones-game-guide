import Link from "next/link";
import { gearItems } from "@/data/gear";
import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Gaming Gear Guides",
  description:
    "Browse practical gaming gear guides for controllers, headphones, power banks, retro handheld accessories, SD cards, cases, and everyday player recommendations.",
  path: "/gear",
});

export default function GearPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gear", path: "/gear" },
        ])}
      />

      <main className="min-h-screen bg-page-warm text-[#2b1608]">
        <section className="border-b border-orange-200 bg-hero-gradient px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              Gear
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
              PickOnes Gaming Gear Guides
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              Browse practical gaming gear guides, accessory recommendations,
              controller picks, headphone suggestions, power bank choices, and
              setup accessories for everyday gamers.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              All Gear
            </p>
            <h2 className="text-4xl font-black">Browse Gear Guides</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gearItems.map((item) => {
              const guideCount = item.guides.length;

              return (
                <Link
                  key={item.slug}
                  href={`/gear/${item.slug}`}
                  className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#c2410c]">
                      {item.category}
                    </span>

                    <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-bold text-[#6b3f1d]">
                      {item.platform}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-black">{item.title}</h3>

                  <p className="mb-4 line-clamp-2 leading-7 text-[#6b3f1d]">
                    {item.description}
                  </p>

                  <p className="text-sm font-bold text-[#f97316]">
                    {guideCount > 0
                      ? `${guideCount} guide${guideCount > 1 ? "s" : ""} available →`
                      : "Guides coming soon →"}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
