import Link from "next/link";
import type { GuideContent } from "@/data/guides";

type Props = { guide: GuideContent; gameTitle?: string };

export default function FeaturedGuideCard({ guide, gameTitle }: Props) {
  return (
    <Link href={`/games/${guide.gameSlug}/${guide.guideSlug}`} className="card group flex flex-col p-5 md:p-6">
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="chip chip-blue">{guide.type}</span>
        <span className="chip chip-muted">{guide.difficulty}</span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#1e293b] transition group-hover:text-[#1a5dc4]">{guide.title}</h3>
      {gameTitle && <p className="mb-2 text-sm font-medium text-[#94a3b8]">{gameTitle}</p>}
      <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[#475569]">{guide.excerpt}</p>
      <div className="flex flex-wrap items-center gap-2 text-xs text-[#94a3b8]">
        <span>{guide.platform}</span><span aria-hidden="true">·</span>
        <span>{guide.timeRequired}</span><span aria-hidden="true">·</span>
        <span>Updated {guide.updatedAt}</span>
      </div>
      <span className="mt-3 text-sm font-semibold text-[#1a5dc4] transition group-hover:text-[#1548a0]">Read Guide →</span>
    </Link>
  );
}
