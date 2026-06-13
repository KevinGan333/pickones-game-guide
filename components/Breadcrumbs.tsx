import Link from "next/link";

type Item = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-[#1a5dc4] font-medium" aria-current="page">{item.label}</span>
              ) : item.href ? (
                <Link href={item.href} className="text-[#64748b] transition hover:text-[#1e293b]">{item.label}</Link>
              ) : (
                <span className="text-[#64748b]">{item.label}</span>
              )}
              {!last && <span aria-hidden="true" className="text-[#cbd5e1]">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
