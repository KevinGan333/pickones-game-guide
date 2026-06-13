import Link from "next/link";
import type { GearItem } from "@/data/gear";

type Props = { item: GearItem; guideCount: number };

export default function GearCard({ item, guideCount }: Props) {
  return (
    <Link href={`/gear/${item.slug}`} className="card group flex flex-col p-5 md:p-6">
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="chip chip-orange">{item.category}</span>
        <span className="chip chip-muted">{item.platform}</span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#1e293b] transition group-hover:text-[#1a5dc4]">{item.title}</h3>
      <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-[#475569]">{item.description}</p>
      <span className="text-sm font-semibold text-[#1a5dc4] transition group-hover:text-[#1548a0]">
        {guideCount > 0 ? `${guideCount} guide${guideCount > 1 ? "s" : ""} →` : "Coming soon →"}
      </span>
    </Link>
  );
}
