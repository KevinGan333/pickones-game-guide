import Breadcrumbs from "./Breadcrumbs";

type Chip = { label: string; accent?: boolean };
type BCItem = { label: string; href?: string };

type Props = {
  breadcrumbs?: BCItem[];
  chips?: Chip[];
  label: string;
  title: string;
  description?: string;
};

export default function ArticleHero({ breadcrumbs, chips, label, title, description }: Props) {
  return (
    <section className="bg-hero border-b border-[#e2e8f0] px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}

        {chips && chips.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c.label} className={c.accent ? "chip chip-blue" : "chip chip-muted"}>{c.label}</span>
            ))}
          </div>
        )}

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a5dc4]">{label}</p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-[#1e293b] md:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#475569]">{description}</p>}
      </div>
    </section>
  );
}
