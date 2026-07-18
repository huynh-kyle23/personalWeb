"use client";

import { DESKTOP_ICONS, PROFILE, type WindowId } from "@/lib/portfolio-data";
import { VistaIcon } from "./VistaIcon";

type Props = {
  onOpen: (id: WindowId) => void;
  onClose: () => void;
};

export function StartMenu({ onOpen, onClose }: Props) {
  return (
    <div
      className="start-menu absolute bottom-12 left-2 z-[8500] w-[320px] sm:w-[380px] overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="start-menu-user flex items-center gap-3 px-3 py-2.5">
        <div className="w-12 h-12 rounded-md overflow-hidden border-2 border-white/70 shadow-md shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PROFILE.photo}
            alt={PROFILE.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-white font-semibold text-sm drop-shadow">{PROFILE.name}</p>
          <p className="text-white/80 text-[11px]">{PROFILE.title}</p>
        </div>
      </div>

      <div className="flex bg-white/95 min-h-[260px]">
        <div className="flex-1 p-2 space-y-0.5">
          {DESKTOP_ICONS.filter((i) => i.id !== "recycle").map((item) => (
            <button
              key={item.id}
              type="button"
              className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-[#316ac5] hover:text-white text-left text-[13px] text-black"
              onClick={() => {
                onOpen(item.id);
                onClose();
              }}
            >
              <VistaIcon kind={item.icon} size={28} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="w-[140px] vista-sidebar p-2 text-[12px] space-y-1">
          <p className="font-semibold text-[#1a3a5c] px-1 mb-1">Places</p>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-1 py-1 rounded hover:bg-[#316ac5] hover:text-white text-[#1a3a5c]"
          >
            GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-1 py-1 rounded hover:bg-[#316ac5] hover:text-white text-[#1a3a5c]"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-1 py-1 rounded hover:bg-[#316ac5] hover:text-white text-[#1a3a5c]"
          >
            Resume
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="block px-1 py-1 rounded hover:bg-[#316ac5] hover:text-white text-[#1a3a5c]"
          >
            E-mail
          </a>
        </div>
      </div>

      <div className="flex justify-end gap-2 px-3 py-2 bg-[#1e468c]/80">
        <button
          type="button"
          className="text-[11px] text-white px-3 py-1 rounded border border-white/40 bg-white/10 hover:bg-white/25"
          onClick={onClose}
        >
          Log Off
        </button>
      </div>
    </div>
  );
}
