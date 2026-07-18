"use client";

import { useEffect, useState } from "react";
import type { WindowId } from "@/lib/portfolio-data";
import { WINDOW_TITLES } from "@/lib/portfolio-data";
import { VistaIcon } from "./VistaIcon";

type OpenWindow = {
  id: WindowId;
  minimized: boolean;
  focused: boolean;
};

type Props = {
  openWindows: OpenWindow[];
  startOpen: boolean;
  onToggleStart: () => void;
  onFocusWindow: (id: WindowId) => void;
  onRestoreWindow: (id: WindowId) => void;
};

const ICON_MAP: Record<WindowId, "user" | "folder" | "research" | "mail" | "recycle"> = {
  about: "user",
  projects: "folder",
  research: "research",
  contact: "mail",
  recycle: "recycle",
};

export function Taskbar({
  openWindows,
  startOpen,
  onToggleStart,
  onFocusWindow,
  onRestoreWindow,
}: Props) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const date = now.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });

  return (
    <div className="vista-taskbar absolute bottom-0 left-0 right-0 z-[8000] h-12 flex items-center px-2 gap-2">
      <button
        type="button"
        className="start-orb shrink-0 relative -mt-1"
        aria-label="Start"
        aria-expanded={startOpen}
        onClick={(e) => {
          e.stopPropagation();
          onToggleStart();
        }}
        title="Start"
      >
        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold drop-shadow-md select-none">
          ⊞
        </span>
      </button>

      <div className="flex-1 flex items-center gap-1 overflow-x-auto min-w-0 py-1">
        {openWindows.map((w) => (
          <button
            key={w.id}
            type="button"
            className={`taskbar-pill flex items-center gap-1.5 px-2 py-1 min-w-[100px] max-w-[180px] shrink-0 ${
              w.focused && !w.minimized ? "active" : ""
            }`}
            onClick={() => {
              if (w.minimized) onRestoreWindow(w.id);
              else onFocusWindow(w.id);
            }}
          >
            <VistaIcon kind={ICON_MAP[w.id]} size={18} />
            <span className="text-[11px] text-white truncate drop-shadow-sm">
              {WINDOW_TITLES[w.id].split("—")[0].trim()}
            </span>
          </button>
        ))}
      </div>

      <div
        className="tray-clock shrink-0 px-3 py-1 text-right text-white"
        title={date}
      >
        <div className="text-[12px] font-medium leading-tight drop-shadow-sm">{time}</div>
        <div className="text-[9px] opacity-90 leading-tight">{date}</div>
      </div>
    </div>
  );
}
