import { createMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import ArticleHero from "@/components/ArticleHero";

export const metadata = createMetadata({ title: "About PickOnes", description: "Learn about PickOnes, a practical game guide site for Switch, Switch 2, retro handheld, and family players.", path: "/about" });

const values = [
  { title: "Practical First, Not Theoretical", description: "Every guide is built around real gameplay, real devices, and real setup problems. If we tell you how to back up an R36S SD card, it is because we have done it ourselves." },
  { title: "Beginner-Friendly Without Being Shallow", description: "Gaming should be fun, not confusing. We write guides that respect beginners — clear enough for a first-time owner but detailed enough for experienced tinkerers." },
  { title: "Honest About Device Limitations", description: "Budget handhelds are amazing value but not perfect. We point out weak buttons, rough software, and performance ceilings. Transparency builds trust." },
  { title: "Search Intent Over Clickbait", description: "PickOnes is built around what players search for: beginner guides, setup help, best settings, walkthroughs, and honest reviews. We answer real questions quickly." },
  { title: "Depth Without Fluff", description: "A 1,500-word guide that solves a problem is worth more than a 5,000-word article padded with filler. If a step does not help the reader, we cut it." },
];
const team = [
  { name: "Kevin.Kenny", role: "Co-Founder & Technical Lead", description: "Kevin leads device testing, emulator configuration, and technical accuracy for every hardware guide on PickOnes." },
  { name: "Amy.Li", role: "Co-Founder & Content Director", description: "Amy ensures PickOnes guides stay focused on practical, actionable help and that buying advice reflects real-world pricing." },
  { name: "Kelino.Ken", role: "Co-Founder & Platform Lead", description: "Kelino leads coverage of retro handhelds, compact gaming setups, and device ergonomics with hands-on testing." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <main className="bg-page">
        <ArticleHero label="About PickOnes" title="Practical Game Guides for Players Who Just Want to Play" description="PickOnes was rebuilt as a focused game guide platform for Nintendo Switch, Switch 2, retro handheld, cozy game, RPG, and family players." />
        <section className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="mb-6 text-2xl font-bold text-[#1e293b]">From General Reviews to Focused Game Guides</h2>
          <div className="space-y-5 leading-relaxed text-[#475569]">
            <p>PickOnes started as a broader consumer electronics review platform. Over time, the content that resonated most — and that the team enjoyed creating most — was always about games and gaming hardware.</p>
            <p>In 2026, we rebuilt PickOnes from the ground up as a dedicated game guide site, refocusing entirely on helping everyday players find, set up, and enjoy great games and gaming devices.</p>
            <p>Today, PickOnes covers Nintendo Switch and Switch 2 games, retro handhelds, cozy games, family-friendly titles, RPGs, and practical topics like SD card backup, firmware setup, emulator tuning, and buying advice.</p>
          </div>
        </section>
        <section className="border-t border-[#e2e8f0] px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a5dc4]">How We Work</p>
            <h2 className="mb-10 text-3xl font-bold text-[#1e293b]">What Guides Our Content</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{values.map((v) => <div key={v.title} className="card p-5 md:p-6"><h3 className="mb-3 text-lg font-bold text-[#1e293b]">{v.title}</h3><p className="text-sm leading-relaxed text-[#475569]">{v.description}</p></div>)}</div>
          </div>
        </section>
        <section className="border-t border-[#e2e8f0] px-6 py-14">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a5dc4]">Team</p>
            <h2 className="mb-3 text-3xl font-bold text-[#1e293b]">The People Behind PickOnes</h2>
            <p className="mb-10 max-w-2xl text-[#475569]">A small, hands-on team of gamers, tinkerers, and writers who test every device and verify every step.</p>
            <div className="grid gap-5 md:grid-cols-3">{team.map((m) => <div key={m.name} className="card p-5 md:p-6"><h3 className="mb-1 text-xl font-bold text-[#1e293b]">{m.name}</h3><p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#1a5dc4]">{m.role}</p><p className="text-sm leading-relaxed text-[#475569]">{m.description}</p></div>)}</div>
          </div>
        </section>
        <section className="border-t border-[#e2e8f0] bg-navy px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#60a5fa]">PickOnes Game Guide</p>
            <p className="text-2xl font-bold leading-relaxed text-white">&ldquo;Only with love and constant passion can you create extraordinary achievements.&rdquo;</p>
            <p className="mt-4 text-sm text-[#94a3b8]">— Kevin.Kenny, Co-Founder</p>
          </div>
        </section>
      </main>
    </>
  );
}
