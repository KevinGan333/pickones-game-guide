import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "PickOnes | Practical Game Guides for Everyday Players",
  description:
    "PickOnes helps Nintendo Switch, Switch 2, retro handheld, cozy game, RPG, and family players find clear walkthroughs, beginner tips, setup guides, and best settings.",
  path: "/",
});

const featuredSections = [
  {
    title: "Nintendo Switch Guides",
    description:
      "Beginner tips, family games, cozy game picks, settings, and practical walkthroughs.",
    href: "/platforms/nintendo-switch",
  },
  {
    title: "Switch 2 Guides",
    description:
      "Launch games, new features, setup help, and beginner-friendly recommendations.",
    href: "/platforms/nintendo-switch-2",
  },
  {
    title: "Retro Handheld Guides",
    description:
      "R36S, Retroid, Anbernic, TrimUI, backup, restore, setup, and best settings.",
    href: "/platforms/retro-handheld",
  },
];

const latestGuides = [
  "Best Nintendo Switch Games for Beginners",
  "R36S Backup and Restore Guide",
  "Best Cozy Games on Nintendo Switch",
  "Nintendo Switch 2 Beginner Guide",
];

export default function HomePage() {
 return (
  <>

    <main className="text-[#2b1608]">
      <section className="relative overflow-hidden border-b border-orange-200 bg-home-hero">

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#f97316] shadow-sm">
              PickOnes Game Guide
            </p>

            <h1 className="mb-6 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Practical Game Guides for Everyday Players.
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-8 text-[#6b3f1d]">
              Clear walkthroughs, beginner tips, setup guides, best settings,
              and family-friendly game recommendations for Nintendo Switch,
              Switch 2, retro handhelds, cozy games, and RPG players.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/games"
                className="rounded-full bg-[#f97316] px-7 py-4 text-center font-bold text-white shadow-lg shadow-orange-300/40 transition hover:bg-[#c2410c]"
              >
                Browse Game Guides
              </Link>

              <Link
                href="/platforms/retro-handheld"
                className="rounded-full border border-[#f97316] bg-white/70 px-7 py-4 text-center font-bold text-[#c2410c] transition hover:bg-[#ffedd5]"
              >
                Retro Handheld Setup Guides
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-orange-200 bg-white/75 p-6 shadow-2xl shadow-orange-200/60">
            <div className="rounded-[1.5rem] bg-[#3b1f0f] p-8 text-orange-50">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
                Featured Focus
              </p>

              <h2 className="mb-5 text-3xl font-black">
                Nintendo, Cozy Games & Retro Handhelds
              </h2>

              <p className="mb-8 leading-7 text-orange-100">
                PickOnes focuses on practical gaming help: what to play, how to
                start, how to fix problems, and how to enjoy games with less
                confusion.
              </p>

              <div className="grid gap-4">
                {latestGuides.map((guide) => (
                  <div
                    key={guide}
                    className="rounded-2xl border border-orange-900/60 bg-white/10 p-4 text-sm font-semibold"
                  >
                    {guide}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#f97316]">
              Start Here
            </p>
            <h2 className="text-4xl font-black">Explore PickOnes Guides</h2>
          </div>

          <p className="max-w-2xl text-[#6b3f1d]">
            The new PickOnes is built around practical search intent: game
            guides, platform guides, beginner help, walkthroughs, and setup
            tutorials.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-[1.5rem] border border-orange-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
            >
              <h3 className="mb-4 text-2xl font-black">{section.title}</h3>
              <p className="mb-6 leading-7 text-[#6b3f1d]">
                {section.description}
              </p>
              <span className="font-bold text-[#f97316]">Explore Guides →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  </>
);
}