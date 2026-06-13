import Link from "next/link";
import type { ReviewContent } from "@/data/reviews";

type Props = { review: ReviewContent };

export default function ReviewCard({ review }: Props) {
  return (
    <Link href={`/reviews/${review.slug}`} className="card group flex flex-col p-5 md:p-6">
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="chip chip-blue">{review.gameTitle}</span>
        <span className="chip chip-amber">{review.playTime}</span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#1e293b] transition group-hover:text-[#1a5dc4]">{review.title}</h3>
      <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[#475569]">{review.excerpt}</p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {review.tags.slice(0, 3).map((t) => <span key={t} className="chip chip-muted text-[11px]">{t}</span>)}
      </div>
      <span className="text-sm font-semibold text-[#1a5dc4] transition group-hover:text-[#1548a0]">Read Review →</span>
    </Link>
  );
}
