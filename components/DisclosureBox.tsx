type Props = { title?: string; children: React.ReactNode; variant?: "info" | "highlight" | "warning" };

const boxes: Record<string, string> = {
  info:      "bg-[#f8fafc] border-[#e2e8f0]",
  highlight: "bg-[#eff6ff] border-[#bfdbfe]",
  warning:   "bg-[#fffbeb] border-[#fde68a]",
};
const titles: Record<string, string> = {
  info:      "text-[#475569]",
  highlight: "text-[#1a5dc4]",
  warning:   "text-[#d97706]",
};

export default function DisclosureBox({ title, children, variant = "info" }: Props) {
  return (
    <div className={`rounded-2xl border p-5 md:p-6 ${boxes[variant]}`}>
      {title && <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.15em] ${titles[variant]}`}>{title}</p>}
      <div className="text-[#475569] leading-relaxed">{children}</div>
    </div>
  );
}
