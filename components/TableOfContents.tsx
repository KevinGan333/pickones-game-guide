"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string };

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { for (const e of entries) if (e.isIntersecting) setActiveId(e.target.id); },
      { rootMargin: "-80px 0px -60% 0px" }
    );
    headings.forEach((h) => { const el = document.getElementById(h.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-label="Table of Contents" className="mb-10">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#94a3b8]">On This Page</p>
      <ul className="space-y-1.5 border-l border-[#e2e8f0] pl-4">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block py-1 text-sm transition-colors ${activeId === h.id ? "text-[#1a5dc4] font-medium" : "text-[#475569] hover:text-[#1e293b]"}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
