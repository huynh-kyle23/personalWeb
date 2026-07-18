"use client";

import {
  useCallback,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
  type CSSProperties,
} from "react";

type Edge = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

type Props = {
  id: string;
  title: string;
  zIndex: number;
  focused: boolean;
  minimized: boolean;
  maximized: boolean;
  defaultPosition: { x: number; y: number };
  defaultSize: { w: number; h: number };
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  children: ReactNode;
};

const MIN_W = 320;
const MIN_H = 200;
const TASKBAR_H = 48;

export function WindowFrame({
  title,
  zIndex,
  focused,
  minimized,
  maximized,
  defaultPosition,
  defaultSize,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  children,
}: Props) {
  const [pos, setPos] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);

  const dragRef = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);

  const resizeRef = useRef<{
    edge: Edge;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    origW: number;
    origH: number;
  } | null>(null);

  const onTitlePointerDown = useCallback(
    (e: ReactPointerEvent) => {
      if (maximized) return;
      if ((e.target as HTMLElement).closest("button")) return;
      e.preventDefault();
      onFocus();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        origX: pos.x,
        origY: pos.y,
      };
    },
    [maximized, onFocus, pos.x, pos.y]
  );

  const onTitlePointerMove = useCallback((e: ReactPointerEvent) => {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - TASKBAR_H - 32;
    setPos({
      x: Math.max(0, Math.min(maxX, dragRef.current.origX + dx)),
      y: Math.max(0, Math.min(maxY, dragRef.current.origY + dy)),
    });
  }, []);

  const onTitlePointerUp = useCallback((e: ReactPointerEvent) => {
    dragRef.current = null;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  }, []);

  const onResizePointerDown = useCallback(
    (edge: Edge) => (e: ReactPointerEvent) => {
      if (maximized) return;
      e.preventDefault();
      e.stopPropagation();
      onFocus();
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      resizeRef.current = {
        edge,
        startX: e.clientX,
        startY: e.clientY,
        origX: pos.x,
        origY: pos.y,
        origW: size.w,
        origH: size.h,
      };
    },
    [maximized, onFocus, pos.x, pos.y, size.w, size.h]
  );

  const onResizePointerMove = useCallback((e: ReactPointerEvent) => {
    const r = resizeRef.current;
    if (!r) return;

    const dx = e.clientX - r.startX;
    const dy = e.clientY - r.startY;
    const maxW = window.innerWidth;
    const maxH = window.innerHeight - TASKBAR_H;

    let nextX = r.origX;
    let nextY = r.origY;
    let nextW = r.origW;
    let nextH = r.origH;

    if (r.edge.includes("e")) {
      nextW = Math.min(maxW - r.origX, Math.max(MIN_W, r.origW + dx));
    }
    if (r.edge.includes("s")) {
      nextH = Math.min(maxH - r.origY, Math.max(MIN_H, r.origH + dy));
    }
    if (r.edge.includes("w")) {
      const proposedW = Math.max(MIN_W, r.origW - dx);
      const appliedDx = r.origW - proposedW;
      nextX = Math.max(0, r.origX + appliedDx);
      nextW = r.origW - (nextX - r.origX);
    }
    if (r.edge.includes("n")) {
      const proposedH = Math.max(MIN_H, r.origH - dy);
      const appliedDy = r.origH - proposedH;
      nextY = Math.max(0, r.origY + appliedDy);
      nextH = r.origH - (nextY - r.origY);
    }

    setPos({ x: nextX, y: nextY });
    setSize({ w: nextW, h: nextH });
  }, []);

  const onResizePointerUp = useCallback((e: ReactPointerEvent) => {
    resizeRef.current = null;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  }, []);

  if (minimized) return null;

  const style: CSSProperties = maximized
    ? {
        top: 0,
        left: 0,
        width: "100%",
        height: `calc(100% - ${TASKBAR_H}px)`,
        zIndex,
      }
    : {
        top: pos.y,
        left: pos.x,
        width: size.w,
        height: size.h,
        maxWidth: "calc(100vw - 8px)",
        zIndex,
      };

  const handle = (
    edge: Edge,
    className: string,
    cursor: string
  ): ReactNode =>
    !maximized ? (
      <div
        key={edge}
        className={`absolute z-20 ${className}`}
        style={{ cursor }}
        onPointerDown={onResizePointerDown(edge)}
        onPointerMove={onResizePointerMove}
        onPointerUp={onResizePointerUp}
        onPointerCancel={onResizePointerUp}
      />
    ) : null;

  return (
    <div
      className={`aero-window window-enter absolute flex flex-col overflow-hidden ${
        maximized ? "maximized" : ""
      } ${focused ? "ring-1 ring-white/40" : "opacity-[0.97]"}`}
      style={style}
      onMouseDown={onFocus}
    >
      <div
        className="aero-titlebar flex h-8 shrink-0 items-center gap-2 px-2 cursor-move"
        onPointerDown={onTitlePointerDown}
        onPointerMove={onTitlePointerMove}
        onPointerUp={onTitlePointerUp}
        onPointerCancel={onTitlePointerUp}
        onDoubleClick={onToggleMaximize}
      >
        <span className="text-[12px] font-semibold text-white drop-shadow-sm truncate flex-1 pl-1 pointer-events-none">
          {title}
        </span>
        <div
          className="flex items-center gap-0.5"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="aero-btn"
            aria-label="Minimize"
            onClick={onMinimize}
          >
            _
          </button>
          <button
            type="button"
            className="aero-btn"
            aria-label={maximized ? "Restore" : "Maximize"}
            onClick={onToggleMaximize}
          >
            {maximized ? "❐" : "□"}
          </button>
          <button
            type="button"
            className="aero-btn close"
            aria-label="Close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden bg-[var(--vista-window-bg)] relative">
        {children}
      </div>

      {/* Resize handles */}
      {handle("n", "left-2 right-2 top-0 h-1.5", "ns-resize")}
      {handle("s", "left-2 right-2 bottom-0 h-1.5", "ns-resize")}
      {handle("e", "top-2 bottom-2 right-0 w-1.5", "ew-resize")}
      {handle("w", "top-2 bottom-2 left-0 w-1.5", "ew-resize")}
      {handle("ne", "top-0 right-0 w-3 h-3", "nesw-resize")}
      {handle("nw", "top-0 left-0 w-3 h-3", "nwse-resize")}
      {handle("se", "bottom-0 right-0 w-4 h-4", "nwse-resize")}
      {handle("sw", "bottom-0 left-0 w-3 h-3", "nesw-resize")}
    </div>
  );
}
