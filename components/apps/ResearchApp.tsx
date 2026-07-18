"use client";

import { useMemo, useState } from "react";
import { EXPERIENCE, type ExperienceItem } from "@/lib/portfolio-data";

const FILTERS = ["All", "Work", "Research", "Campus"] as const;

export function ResearchApp() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const items = useMemo(
    () =>
      filter === "All"
        ? EXPERIENCE
        : EXPERIENCE.filter((e) => e.category === filter),
    [filter]
  );

  return (
    <div className="h-full flex flex-col">
      <div className="vista-toolbar px-3 py-2">
        <h2 className="text-sm font-semibold text-[#0a246a]">
          Experience & Research
        </h2>
        <p className="text-[11px] text-[#555]">
          Consolidated from resume — internships, research, and campus roles.
        </p>
        <div className="flex flex-wrap gap-1 mt-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`text-[11px] px-2 py-0.5 rounded border ${
                filter === f
                  ? "bg-[#316ac5] text-white border-[#316ac5]"
                  : "bg-white text-[#333] border-[#a8bdd0] hover:bg-[#dce8f5]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto vista-scroll p-3 space-y-3">
        {items.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="vista-inset p-3 hover:bg-[#f5f9fc] transition-colors">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-0.5">
        <h3 className="font-semibold text-[#0a246a] text-sm">{item.title}</h3>
        <span className="text-[10px] px-1.5 py-0.5 bg-[#d0e4f8] text-[#1a4a7a] rounded">
          {item.category}
        </span>
      </div>
      <p className="text-[12px] text-[#444] font-medium">{item.org}</p>
      <p className="text-[11px] text-[#666] mb-2">
        {item.date} · {item.location}
      </p>
      <ul className="list-disc pl-4 space-y-1 text-[12px] text-[#333] leading-relaxed">
        {item.bullets.map((b) => (
          <li key={b.slice(0, 40)}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
