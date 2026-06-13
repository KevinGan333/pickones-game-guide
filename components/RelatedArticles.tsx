import Link from "next/link";

type Item = { title: string; href: string };

export default function RelatedArticles({ title = "Related Articles", items }: { title?: string; items: Item[] }) {
  if (!items.length) return null;
  return (
    <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5 md:p-6">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#94a3b8]">{title}</h3>
      <div className="grid gap-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-[#475569] transition hover:bg-[#eff6ff] hover:text-[#1a5dc4]">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
