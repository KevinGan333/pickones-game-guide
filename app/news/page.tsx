import { createMetadata } from "@/lib/seo";
export const metadata = createMetadata({
  title: "News and Updates",
  description:
    "Read selective PickOnes gaming updates, release notes, platform changes, Nintendo updates, and retro handheld news that supports long-term guide content.",
  path: "/news",
});
export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#fff7ed] px-6 py-16 text-[#2b1608]">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
          News
        </p>

        <h1 className="mb-6 text-5xl font-black">PickOnes News & Updates</h1>

        <p className="mb-10 max-w-3xl text-lg leading-8 text-[#6b3f1d]">
          PickOnes will only publish selective gaming updates, release notes,
          platform changes, and important Nintendo / retro handheld news that
          supports long-term guide content.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Site rebuild update",
            "Nintendo Switch 2 guide planning",
            "Retro handheld content expansion",
          ].map((title) => (
            <div
              key={title}
              className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm"
            >
              <span className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-[#c2410c]">
                Update
              </span>
              <h2 className="text-xl font-black">{title}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}