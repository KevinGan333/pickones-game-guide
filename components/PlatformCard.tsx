import Link from "next/link";
import type { Platform } from "@/data/platforms";

type Props = { platform: Platform; guideCount: number };

export default function PlatformCard({ platform, guideCount }: Props) {
  return (
    <Link href={`/platforms/${platform.slug}`} className="card-blue group flex flex-col p-5 md:p-6">
      <span className="mb-3 chip chip-blue w-fit">{platform.category}</span>
      <h3 className="mb-2 text-lg font-bold text-[#1e293b] transition group-hover:text-[#1a5dc4]">{platform.title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-[#475569]">{platform.description}</p>
      <span className="text-sm font-semibold text-[#1a5dc4] transition group-hover:text-[#1548a0]">
        {guideCount > 0 ? `${guideCount} guide${guideCount > 1 ? "s" : ""} →` : "Explore →"}
      </span>
    </Link>
  );
}
