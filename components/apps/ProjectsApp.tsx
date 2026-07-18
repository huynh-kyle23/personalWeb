"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/portfolio-data";

export function ProjectsApp() {
  const [selected, setSelected] = useState(PROJECTS[0].id);
  const project = PROJECTS.find((p) => p.id === selected) ?? PROJECTS[0];

  return (
    <div className="h-full flex flex-col">
      <div className="vista-toolbar px-3 py-1.5 flex items-center gap-2 text-[11px]">
        <span className="text-[#555]">Address</span>
        <div className="flex-1 vista-inset px-2 py-0.5 text-[12px] text-[#222] truncate">
          C:\Users\Kyle\Documents\Projects\
        </div>
      </div>
      <div className="flex-1 flex min-h-0">
        <aside className="vista-sidebar w-[140px] sm:w-[180px] shrink-0 overflow-auto vista-scroll p-1">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p.id)}
              className={`w-full text-left px-2 py-1.5 text-[12px] rounded mb-0.5 ${
                selected === p.id
                  ? "bg-[#316ac5] text-white"
                  : "hover:bg-[#c4d8f0] text-[#222]"
              }`}
            >
              📄 {p.name}
            </button>
          ))}
        </aside>
        <div className="flex-1 overflow-auto vista-scroll p-4 vista-inset m-2">
          <h2 className="text-lg font-semibold text-[#0a246a]">{project.name}</h2>
          <p className="text-[12px] text-[#666] mt-0.5">
            {project.event} · {project.stack}
          </p>
          <hr className="my-3 border-[#c0d0e0]" />
          <ul className="list-disc pl-4 space-y-2 text-[13px] text-[#333] leading-relaxed">
            {project.bullets.map((b) => (
              <li key={b.slice(0, 48)}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-3 py-1 text-[10px] text-[#555] border-t border-[#a8bdd0] bg-[#e8f0f8]">
        {PROJECTS.length} items
      </div>
    </div>
  );
}
