import Link from "next/link";
import type { Game } from "@/data/games";

type Props = { game: Game; guideCount: number };

export default function GameCard({ game, guideCount }: Props) {
  return (
    <Link href={`/games/${game.slug}`} className="card group flex flex-col p-5 md:p-6">
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="chip chip-blue">{game.platform}</span>
        <span className="chip chip-purple">{game.category}</span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#1e293b] transition group-hover:text-[#1a5dc4]">{game.title}</h3>
      <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-[#475569]">{game.description}</p>
      <span className="text-sm font-semibold text-[#1a5dc4] transition group-hover:text-[#1548a0]">
        {guideCount > 0 ? `${guideCount} guide${guideCount > 1 ? "s" : ""} →` : "Coming soon →"}
      </span>
    </Link>
  );
}
