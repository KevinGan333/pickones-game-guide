import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { games } from "@/data/games";
import { platforms } from "@/data/platforms";

export const metadata = createMetadata({
  title: "Platform Guides",
  description:
    "Explore practical gaming platform guides for Nintendo Switch, Switch 2, retro handhelds, Steam Deck, setup tips, best settings, and everyday players.",
  path: "/platforms",
});

const latestUpdates = [
  {
    title: "PickOnes rebuilds as a practical game guide site",
    href: "/news",
    tag: "Site Update",
  },
  {
    title: "Retro handheld setup guides are now a core PickOnes topic",
    href: "/platforms/retro-handheld",
    tag: "Retro Handheld",
  },
  {
    title: "Nintendo Switch and Switch 2 guides are being expanded",
    href: "/platforms/nintendo-switch-2",
    tag: "Nintendo",
  },
];

export default function HomePage() {
  const latestGuides = games.flatMap((game) =>
    game.guides.slice(0, 2).map((guide) => ({
      title: guide.title,
      type: guide.type,
      gameTitle: game.title,
      href: `/games/${game.slug}/${guide.slug}`,
    }))
  );

  return (
    <main className="bg-page-warm text-[#2b1608]">
      <section className="relative overflow-hidden border-b border-orange-200 bg-home-hero">

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white/75 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-[#f97316] shadow-sm">
              PickOnes Game Guide
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Practical Game Guides for Everyday Players.
            </h1>

            <p className="mb-9 max-w-2xl text-lg leading-8 text-[#6b3f1d]">
              PickOnes helps Nintendo Switch, Switch 2, retro handheld, cozy
              game, RPG, and family players find clear walkthroughs, beginner
              tips, setup guides, best settings, and simple answers.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/games"
                className="rounded-full bg-[#f97316] px-7 py-4 text-center font-black text-white shadow-lg shadow-orange-300/40 transition hover:bg-[#c2410c]"
              >
                Browse Game Guides
              </Link>

              <Link
                href="/platforms/retro-handheld"
                className="rounded-full border border-[#f97316] bg-white/80 px-7 py-4 text-center font-black text-[#c2410c] transition hover:bg-[#ffedd5]"
              >
                Retro Handheld Guides
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-orange-200 bg-white/80 p-6 shadow-2xl shadow-orange-200/60">
            <div className="rounded-[1.5rem] bg-[#3b1f0f] p-8 text-orange-50">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-orange-300">
                Start Here
              </p>

              <h2 className="mb-5 text-3xl font-black">
                Nintendo, Cozy Games & Retro Handhelds
              </h2>

              <p className="mb-8 leading-7 text-orange-100">
                The new PickOnes is built around practical search intent: what
                to play, how to start, how to fix problems, and how to get
                better results in-game.
              </p>

              <div className="grid gap-4">
                {[
                  "Beginner-friendly walkthroughs",
                  "Game hub pages for long-term SEO",
                  "Retro handheld setup and backup guides",
                  "Nintendo Switch and Switch 2 guide clusters",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-orange-900/60 bg-white/10 p-4 text-sm font-bold"
                  >
                    {item}
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
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
              Popular Games
            </p>
            <h2 className="text-4xl font-black">Explore Game Hubs</h2>
          </div>

          <Link href="/games" className="font-black text-[#f97316]">
            View All Games →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-[#c2410c]">
                  {game.category}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-black">{game.title}</h3>

              <p className="mb-5 text-sm leading-6 text-[#6b3f1d]">
                {game.description}
              </p>

              <span className="text-sm font-black text-[#f97316]">
                Open Game Hub →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#ffedd5] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
                Latest Guides
              </p>
              <h2 className="text-4xl font-black">New Player Help</h2>
            </div>

            <Link href="/guides" className="font-black text-[#f97316]">
              View Guide Index →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latestGuides.slice(0, 6).map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316]"
              >
                <span className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-[#c2410c]">
                  {guide.type}
                </span>

                <h3 className="mb-3 text-xl font-black">{guide.title}</h3>

                <p className="mb-5 text-sm font-bold text-[#6b3f1d]">
                  {guide.gameTitle}
                </p>

                <span className="text-sm font-black text-[#f97316]">
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
              Platform Guides
            </p>
            <h2 className="text-4xl font-black">Choose Your Platform</h2>
          </div>

          <Link href="/platforms" className="font-black text-[#f97316]">
            View All Platforms →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {platforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`/platforms/${platform.slug}`}
              className="rounded-[1.5rem] border border-orange-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316] hover:shadow-xl hover:shadow-orange-200/60"
            >
              <span className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-[#c2410c]">
                {platform.category}
              </span>

              <h3 className="mb-3 text-2xl font-black">{platform.title}</h3>

              <p className="mb-6 leading-7 text-[#6b3f1d]">
                {platform.description}
              </p>

              <span className="font-black text-[#f97316]">
                Explore Platform →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-orange-200 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_1.9fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
              Retro Handheld Focus
            </p>
            <h2 className="mb-5 text-4xl font-black">
              Keep the old PickOnes search value.
            </h2>
            <p className="leading-8 text-[#6b3f1d]">
              Retro handheld content is one of the few old PickOnes directions
              with early search signals. The rebuild keeps this advantage and
              turns it into a dedicated platform cluster.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              "R36S Backup and Restore Guide",
              "R36S Beginner Setup Guide",
              "Best Retro Handhelds for Beginners",
            ].map((title) => (
              <Link
                key={title}
                href="/platforms/retro-handheld"
                className="rounded-[1.5rem] bg-[#fff7ed] p-6 transition hover:bg-[#ffedd5]"
              >
                <h3 className="mb-3 text-xl font-black">{title}</h3>
                <p className="text-sm leading-6 text-[#6b3f1d]">
                  Setup, backup, restore, SD card, and beginner-friendly retro
                  handheld help.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#f97316]">
            Latest Updates
          </p>
          <h2 className="text-4xl font-black">PickOnes Updates</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestUpdates.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f97316]"
            >
              <span className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-[#c2410c]">
                {item.tag}
              </span>

              <h3 className="text-xl font-black">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}