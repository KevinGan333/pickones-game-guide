import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "About PickOnes",
  description:
    "Learn about PickOnes, a practical game guide site built for Nintendo Switch, Switch 2, retro handheld, cozy game, RPG, and family players who want clear walkthroughs, beginner tips, and honest device reviews.",
  path: "/about",
});

const values = [
  {
    title: "Practical First, Not Theoretical",
    description:
      "Every guide on PickOnes is built around real gameplay, real devices, and real setup problems. We do not write guides from spec sheets or secondhand information. If we tell you how to back up an R36S SD card, replace a stock screen protector, or fix laggy N64 emulation, it is because we have done it ourselves.",
  },
  {
    title: "Beginner-Friendly Without Being Shallow",
    description:
      "Gaming should be fun, not confusing. We write guides that respect beginners without talking down to them. A setup tutorial should be clear enough for a first-time handheld owner but detailed enough that an experienced tinkerer still finds something useful.",
  },
  {
    title: "Honest About Device Limitations",
    description:
      "Budget handhelds are amazing value, but they are not perfect. We point out weak buttons, rough software, confusing buying channels, and performance ceilings. If a device struggles with PSP games or has electrical noise, we say so. Transparency builds trust.",
  },
  {
    title: "Search Intent Over Clickbait",
    description:
      "PickOnes is built around what players actually search for: beginner guides, setup help, best settings, walkthroughs, and honest reviews. We structure content to answer real questions quickly, not to chase trending keywords or inflate word counts.",
  },
  {
    title: "Depth Without Fluff",
    description:
      "We believe a 1,500-word guide that actually solves a problem is worth more than a 5,000-word article padded with filler. Every section in a PickOnes guide should earn its place. If a step does not help the reader, we cut it.",
  },
];

const team = [
  {
    name: "Kevin.Kenny",
    role: "Co-Founder & Technical Lead",
    description:
      "Kevin has spent over a decade working with consumer electronics, from component-level hardware to finished handheld devices. He leads device testing, emulator configuration, and technical accuracy for every hardware guide on PickOnes. If a guide covers SD card flashing, firmware updates, or emulator core tuning, Kevin has verified the steps personally.",
  },
  {
    name: "Amy.Li",
    role: "Co-Founder & Content Director",
    description:
      "Amy brings years of experience analyzing product value, comparing buying channels, and identifying what actually matters to everyday players. She ensures PickOnes guides stay focused on practical, actionable help — not marketing fluff — and that buying advice reflects real-world pricing and availability.",
  },
  {
    name: "Kelino.Ken",
    role: "Co-Founder & Platform Lead",
    description:
      "Kelino focuses on the intersection of portable devices and real-world usability. He leads coverage of retro handhelds, compact gaming setups, and device ergonomics, combining hands-on testing with a practical understanding of what makes a handheld enjoyable to use day after day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <main className="min-h-screen bg-page-warm text-[#2b1608]">
        {/* Hero */}
        <section className="border-b border-orange-200 bg-hero-gradient px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#F08A24]">
              About PickOnes
            </p>

            <h1 className="mb-6 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
              Practical Game Guides for Players Who Just Want to Play
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              PickOnes was rebuilt as a focused game guide platform for Nintendo
              Switch, Switch 2, retro handheld, cozy game, RPG, and family
              players. We create clear walkthroughs, beginner setup tutorials,
              best settings guides, and honest device reviews — no fluff, no
              filler, just practical help.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-black">
              From General Reviews to Focused Game Guides
            </h2>

            <div className="space-y-5 leading-8 text-[#6b3f1d]">
              <p>
                PickOnes started as a broader consumer electronics review
                platform, covering everything from phone accessories to office
                gadgets. Over time, one thing became clear: the content that
                resonated most with readers — and that the team enjoyed creating
                most — was always about games and gaming hardware.
              </p>
              <p>
                In 2026, we made a deliberate decision to rebuild PickOnes from
                the ground up as a dedicated game guide site. We archived older
                general-product content and refocused entirely on what we know
                best: helping everyday players find, set up, and enjoy great
                games and gaming devices.
              </p>
              <p>
                Today, PickOnes covers Nintendo Switch and Switch 2 games,
                retro handhelds like the R36S and Anbernic devices, cozy games,
                family-friendly titles, RPGs, and practical topics like SD card
                backup, firmware setup, emulator tuning, and buying advice.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-orange-200 bg-white px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F08A24]">
              How We Work
            </p>
            <h2 className="mb-10 text-4xl font-black">
              What Guides Our Content
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-3 text-xl font-black">{value.title}</h3>
                  <p className="leading-7 text-[#6b3f1d]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-t border-orange-200 px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F08A24]">
              Team
            </p>
            <h2 className="mb-3 text-4xl font-black">The People Behind PickOnes</h2>
            <p className="mb-10 max-w-3xl text-lg leading-8 text-[#6b3f1d]">
              A small, hands-on team of gamers, tinkerers, and writers who test
              every device, play every game, and verify every step before it
              reaches a guide.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[1.5rem] border border-orange-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 text-2xl font-black">{member.name}</h3>
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[#F08A24]">
                    {member.role}
                  </p>
                  <p className="leading-7 text-[#6b3f1d]">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-orange-200 bg-[#3b1f0f] px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              PickOnes Game Guide
            </p>
            <p className="text-2xl font-black leading-relaxed text-orange-50">
              Only with love and constant passion can you create extraordinary
              achievements.
            </p>
            <p className="mt-4 text-sm text-orange-200">
              — Kevin.Kenny, Co-Founder
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
