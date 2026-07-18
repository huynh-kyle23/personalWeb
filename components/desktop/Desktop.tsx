"use client";

import { useCallback, useMemo, useState } from "react";
import {
  DESKTOP_ICONS,
  WINDOW_TITLES,
  type WindowId,
} from "@/lib/portfolio-data";
import { DesktopIcon } from "./DesktopIcon";
import { WindowFrame } from "./WindowFrame";
import { Taskbar } from "./Taskbar";
import { StartMenu } from "./StartMenu";
import { AboutApp } from "@/components/apps/AboutApp";
import { ProjectsApp } from "@/components/apps/ProjectsApp";
import { ResearchApp } from "@/components/apps/ResearchApp";
import { ContactApp } from "@/components/apps/ContactApp";
import { RecycleApp } from "@/components/apps/RecycleApp";

type WindowState = {
  open: boolean;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
};

const DEFAULT_SIZES: Record<WindowId, { w: number; h: number }> = {
  about: { w: 560, h: 400 },
  projects: { w: 620, h: 420 },
  research: { w: 580, h: 440 },
  contact: { w: 520, h: 420 },
  recycle: { w: 420, h: 320 },
};

const DEFAULT_POSITIONS: Record<WindowId, { x: number; y: number }> = {
  about: { x: 48, y: 36 },
  projects: { x: 76, y: 64 },
  research: { x: 104, y: 92 },
  contact: { x: 132, y: 60 },
  recycle: { x: 160, y: 88 },
};

function createInitialWindows(): Record<WindowId, WindowState> {
  const ids: WindowId[] = [
    "about",
    "projects",
    "research",
    "contact",
    "recycle",
  ];
  return Object.fromEntries(
    ids.map((id) => [
      id,
      { open: false, minimized: false, maximized: false, zIndex: 0 },
    ])
  ) as Record<WindowId, WindowState>;
}

export function Desktop() {
  const [windows, setWindows] = useState(createInitialWindows);
  const [zCounter, setZCounter] = useState(100);
  const [selectedIcon, setSelectedIcon] = useState<WindowId | null>(null);
  const [startOpen, setStartOpen] = useState(false);
  const [welcomeShown, setWelcomeShown] = useState(true);

  const openWindow = useCallback((id: WindowId) => {
    setZCounter((z) => {
      const next = z + 1;
      setWindows((prev) => ({
        ...prev,
        [id]: {
          open: true,
          minimized: false,
          maximized: prev[id].maximized,
          zIndex: next,
        },
      }));
      return next;
    });
    setStartOpen(false);
  }, []);

  const closeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], open: false, minimized: false },
    }));
  }, []);

  const minimizeWindow = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], minimized: true },
    }));
  }, []);

  const restoreWindow = useCallback((id: WindowId) => {
    setZCounter((z) => {
      const next = z + 1;
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], minimized: false, zIndex: next },
      }));
      return next;
    });
  }, []);

  const focusWindow = useCallback((id: WindowId) => {
    setZCounter((z) => {
      const next = z + 1;
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], zIndex: next, minimized: false },
      }));
      return next;
    });
  }, []);

  const toggleMaximize = useCallback((id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], maximized: !prev[id].maximized, minimized: false },
    }));
  }, []);

  const focusedId = useMemo(() => {
    let best: WindowId | null = null;
    let bestZ = -1;
    (Object.keys(windows) as WindowId[]).forEach((id) => {
      const w = windows[id];
      if (w.open && !w.minimized && w.zIndex > bestZ) {
        bestZ = w.zIndex;
        best = id;
      }
    });
    return best;
  }, [windows]);

  const openList = useMemo(
    () =>
      (Object.keys(windows) as WindowId[])
        .filter((id) => windows[id].open)
        .sort((a, b) => windows[a].zIndex - windows[b].zIndex)
        .map((id) => ({
          id,
          minimized: windows[id].minimized,
          focused: id === focusedId,
        })),
    [windows, focusedId]
  );

  const renderApp = (id: WindowId) => {
    switch (id) {
      case "about":
        return <AboutApp />;
      case "projects":
        return <ProjectsApp />;
      case "research":
        return <ResearchApp />;
      case "contact":
        return <ContactApp />;
      case "recycle":
        return <RecycleApp />;
    }
  };

  return (
    <div
      className="vista-wallpaper relative h-[100dvh] w-screen overflow-hidden animate-fade-in"
      onClick={() => {
        setSelectedIcon(null);
        setStartOpen(false);
      }}
    >
      {/* Desktop icons — left column */}
      <div className="absolute top-3 left-2 sm:left-3 flex flex-col gap-1 z-10">
        {DESKTOP_ICONS.map((icon) => (
          <DesktopIcon
            key={icon.id}
            label={icon.label}
            icon={icon.icon}
            selected={selectedIcon === icon.id}
            onSelect={() => setSelectedIcon(icon.id)}
            onOpen={() => openWindow(icon.id)}
          />
        ))}
      </div>

      {/* Welcome balloon */}
      {welcomeShown && (
        <div
          className="absolute bottom-16 right-4 sm:right-8 z-[50] max-w-[260px] window-enter"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-[#ffffcc] border border-[#c0a060] rounded shadow-lg p-3 text-[12px] text-[#333] relative">
            <button
              type="button"
              className="absolute top-1 right-1.5 text-[#888] hover:text-black"
              aria-label="Dismiss"
              onClick={() => setWelcomeShown(false)}
            >
              ✕
            </button>
            <p className="font-semibold text-[#0a246a] mb-1">Welcome to KyleOS</p>
            <p>
              Click an icon to open a window. Use the green Start orb for quick
              links. Connection speed:{" "}
              <span className="font-mono">56 kbps</span> (simulated).
            </p>
          </div>
        </div>
      )}

      {/* Windows */}
      {(Object.keys(windows) as WindowId[]).map((id) => {
        const w = windows[id];
        if (!w.open) return null;
        return (
          <WindowFrame
            key={id}
            id={id}
            title={WINDOW_TITLES[id]}
            zIndex={w.zIndex}
            focused={id === focusedId}
            minimized={w.minimized}
            maximized={w.maximized}
            defaultPosition={DEFAULT_POSITIONS[id]}
            defaultSize={DEFAULT_SIZES[id]}
            onFocus={() => focusWindow(id)}
            onClose={() => closeWindow(id)}
            onMinimize={() => minimizeWindow(id)}
            onToggleMaximize={() => toggleMaximize(id)}
          >
            {renderApp(id)}
          </WindowFrame>
        );
      })}

      {startOpen && (
        <StartMenu onOpen={openWindow} onClose={() => setStartOpen(false)} />
      )}

      <Taskbar
        openWindows={openList}
        startOpen={startOpen}
        onToggleStart={() => setStartOpen((s) => !s)}
        onFocusWindow={focusWindow}
        onRestoreWindow={restoreWindow}
      />
    </div>
  );
}
