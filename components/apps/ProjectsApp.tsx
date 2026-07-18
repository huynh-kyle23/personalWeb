"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/portfolio-data";

export function ProjectsApp() {
  const [selected, setSelected] = useState(PROJECTS[0].id);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const project = PROJECTS.find((p) => p.id === selected) ?? PROJECTS[0];

  return (
    <div className="h-full flex flex-col relative">
      <div className="vista-toolbar px-3 py-1.5 flex items-center gap-2 text-[11px]">
        <span className="text-[#555]">Address</span>
        <div className="flex-1 vista-inset px-2 py-0.5 text-[12px] text-[#222] truncate">
          {project.url ?? `C:\\Users\\Kyle\\Documents\\Projects\\${project.name}`}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-2 py-0.5 rounded border border-[#a8bdd0] bg-white text-[#316ac5] hover:bg-[#e8f2fc] text-[11px] font-semibold"
          >
            {project.url.includes("devpost.com") ? "Devpost →" : "Visit site →"}
          </a>
        )}
      </div>
      <div className="flex-1 flex min-h-0">
        <aside className="vista-sidebar w-[140px] sm:w-[180px] shrink-0 overflow-auto vista-scroll p-1">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setSelected(p.id);
                setLightbox(null);
              }}
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
          {project.url && (
            <p className="mt-2 text-[12px]">
              <span className="text-[#555]">Live: </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#316ac5] underline break-all"
              >
                {project.url}
              </a>
            </p>
          )}
          <hr className="my-3 border-[#c0d0e0]" />

          {project.images && project.images.length > 0 && (
            <div className="mb-4">
              <h3 className="text-[12px] font-semibold text-[#1a4a7a] mb-2">
                Screenshots
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.images.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightbox(src)}
                    className="vista-inset p-1 text-left hover:bg-[#f0f6fc] transition-colors group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${project.name} screenshot`}
                      className="w-full h-36 object-cover object-top border border-[#c0d0e0] bg-[#e8eef5]"
                    />
                    <span className="block text-[10px] text-[#666] mt-1 truncate group-hover:text-[#316ac5]">
                      Click to enlarge
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {project.imageSections?.map((section) => (
            <div key={section.title} className="mb-4">
              <h3 className="text-[12px] font-semibold text-[#1a4a7a] mb-1">
                {section.title}
              </h3>
              {section.description && (
                <p className="text-[11px] text-[#555] leading-relaxed mb-2">
                  {section.description}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {section.images.map((src) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setLightbox(src)}
                    className="vista-inset p-1 text-left hover:bg-[#f0f6fc] transition-colors group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={section.title}
                      className="w-full h-40 object-contain object-center border border-[#c0d0e0] bg-white"
                    />
                    <span className="block text-[10px] text-[#666] mt-1 group-hover:text-[#316ac5]">
                      PCA projection onto PC1 &amp; PC2 · Click to enlarge
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <ul className="list-disc pl-4 space-y-2 text-[13px] text-[#333] leading-relaxed">
            {project.bullets.map((b) => (
              <li key={b.slice(0, 48)}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-3 py-1 text-[10px] text-[#555] border-t border-[#a8bdd0] bg-[#e8f0f8]">
        {PROJECTS.length} items
        {project.url ? " · live demo available" : ""}
      </div>

      {lightbox && (
        <div
          className="absolute inset-0 z-50 bg-black/55 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="aero-window max-w-4xl w-full max-h-[90%] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aero-titlebar flex h-8 items-center justify-between px-2">
              <span className="text-[12px] text-white font-semibold truncate pl-1">
                {project.name} — Preview
              </span>
              <button
                type="button"
                className="aero-btn close"
                aria-label="Close preview"
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
            </div>
            <div className="overflow-auto bg-[#f0f0f0] p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox}
                alt={`${project.name} full screenshot`}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
