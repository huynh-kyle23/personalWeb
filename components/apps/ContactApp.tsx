"use client";

import { PROFILE } from "@/lib/portfolio-data";

const LINKS = [
  {
    label: "GitHub",
    href: PROFILE.github,
    desc: "github.com/huynh-kyle23",
  },
  {
    label: "LinkedIn",
    href: PROFILE.linkedin,
    desc: "kyle-huynh-093b8624b",
  },
  {
    label: "Resume (PDF)",
    href: PROFILE.resume,
    desc: "KyleHuynhResume.pdf",
  },
  {
    label: "E-mail",
    href: `mailto:${PROFILE.email}?subject=Hello%20from%20your%20portfolio`,
    desc: PROFILE.email,
  },
  {
    label: "Phone",
    href: `tel:${PROFILE.phone.replace(/[^\d+]/g, "")}`,
    desc: PROFILE.phone,
  },
];

export function ContactApp() {
  return (
    <div className="h-full flex flex-col">
      <div className="vista-toolbar px-2 py-1.5 flex items-center gap-2 text-[11px]">
        <span className="px-2 py-0.5 rounded bg-white/80 border border-[#a8bdd0]">
          ← Back
        </span>
        <div className="flex-1 vista-inset px-2 py-0.5 text-[12px] truncate flex items-center gap-1">
          <span className="text-[#888]">🌐</span>
          https://kyle.portfolio/contact
        </div>
        <span className="text-[#555]">Go</span>
      </div>
      <div className="flex-1 overflow-auto vista-scroll bg-white p-4 sm:p-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#90d050] to-[#206010] border-2 border-white shadow" />
            <div>
              <h2 className="text-lg font-semibold text-[#0a246a]">
                Contact {PROFILE.shortName}
              </h2>
              <p className="text-[11px] text-[#666]">
                {PROFILE.location} · Favorites · Dial-up bookmarks
              </p>
            </div>
          </div>
          <p className="text-sm text-[#333] mb-4">
            Found something interesting? Reach out through any of these classic
            channels — no AOL Instant Messenger required.
          </p>
          <ul className="space-y-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ||
                    link.href.startsWith("tel:")
                      ? undefined
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 vista-inset hover:bg-[#e8f2fc] transition-colors group"
                >
                  <span className="text-[#316ac5] font-semibold text-sm group-hover:underline shrink-0">
                    {link.label}
                  </span>
                  <span className="text-[12px] text-[#666] truncate">
                    {link.desc}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-3 py-1 text-[10px] text-[#555] border-t border-[#a8bdd0] bg-[#e8f0f8]">
        Done · Internet zone
      </div>
    </div>
  );
}
