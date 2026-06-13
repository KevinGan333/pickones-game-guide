"use client";

import { useState } from "react";

type Faq = { question: string; answer: string };

export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  if (!faqs.length) return null;
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#1e293b]">Frequently Asked Questions</h2>
      <div className="grid gap-3">
        {faqs.map((f) => <FaqItem key={f.question} faq={f} />)}
      </div>
    </section>
  );
}

function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-[#e2e8f0] bg-white">
      <button
        type="button" aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-[#1e293b]">{faq.question}</span>
        <svg className={`h-4 w-4 flex-shrink-0 text-[#94a3b8] transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid transition-all duration-200 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-4 text-sm leading-relaxed text-[#475569]">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
}
