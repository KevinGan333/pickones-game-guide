import Link from "next/link";

type Props = { label: string; title: string; description?: string; href?: string; linkText?: string };

export default function SectionHeader({ label, title, description, href, linkText }: Props) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a5dc4]">{label}</p>
        <h2 className="text-3xl font-bold tracking-tight text-[#1e293b] md:text-4xl">{title}</h2>
        {description && <p className="mt-4 max-w-2xl text-[#475569]">{description}</p>}
      </div>
      {href && linkText && (
        <Link href={href} className="flex items-center gap-1 text-sm font-semibold text-[#1a5dc4] transition hover:text-[#1548a0]">
          {linkText} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
