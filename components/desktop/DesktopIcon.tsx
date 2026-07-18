"use client";

import { VistaIcon } from "./VistaIcon";

type Props = {
  label: string;
  icon: "user" | "folder" | "research" | "mail" | "recycle";
  selected?: boolean;
  onOpen: () => void;
  onSelect: () => void;
};

export function DesktopIcon({
  label,
  icon,
  selected,
  onOpen,
  onSelect,
}: Props) {
  return (
    <button
      type="button"
      className={`desktop-icon ${selected ? "selected" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
        onOpen();
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") onOpen();
      }}
    >
      <div className="flex justify-center drop-shadow-md">
        <VistaIcon kind={icon} size={44} />
      </div>
      <div className="desktop-icon-label">{label}</div>
    </button>
  );
}
