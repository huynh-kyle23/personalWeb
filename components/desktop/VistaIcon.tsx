"use client";

type IconKind = "user" | "folder" | "research" | "mail" | "recycle";

export function VistaIcon({
  kind,
  size = 40,
}: {
  kind: IconKind;
  size?: number;
}) {
  const s = size;
  switch (kind) {
    case "user":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" aria-hidden>
          <defs>
            <linearGradient id="u" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7ec8f8" />
              <stop offset="100%" stopColor="#2a6aad" />
            </linearGradient>
          </defs>
          <rect x="4" y="6" width="40" height="36" rx="4" fill="url(#u)" stroke="#fff" strokeWidth="1.5" />
          <circle cx="24" cy="18" r="7" fill="#fff" opacity="0.95" />
          <ellipse cx="24" cy="36" rx="12" ry="8" fill="#fff" opacity="0.9" />
        </svg>
      );
    case "folder":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" aria-hidden>
          <defs>
            <linearGradient id="f" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe08a" />
              <stop offset="100%" stopColor="#e0a020" />
            </linearGradient>
          </defs>
          <path
            d="M6 14h14l4 4h18a2 2 0 012 2v20a2 2 0 01-2 2H6a2 2 0 01-2-2V16a2 2 0 012-2z"
            fill="url(#f)"
            stroke="#fff"
            strokeWidth="1.2"
          />
          <path d="M4 20h40v4H4z" fill="#f5d060" opacity="0.6" />
        </svg>
      );
    case "research":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" aria-hidden>
          <defs>
            <linearGradient id="r" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8e0f8" />
              <stop offset="100%" stopColor="#6090c0" />
            </linearGradient>
          </defs>
          <rect x="10" y="6" width="22" height="28" rx="2" fill="url(#r)" stroke="#fff" />
          <line x1="14" y1="14" x2="28" y2="14" stroke="#2a5080" strokeWidth="1.5" />
          <line x1="14" y1="20" x2="28" y2="20" stroke="#2a5080" strokeWidth="1.5" />
          <line x1="14" y1="26" x2="24" y2="26" stroke="#2a5080" strokeWidth="1.5" />
          <circle cx="34" cy="34" r="8" fill="none" stroke="#f0c040" strokeWidth="3" />
          <line x1="39" y1="39" x2="44" y2="44" stroke="#f0c040" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case "mail":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" aria-hidden>
          <defs>
            <linearGradient id="m" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#90d0f8" />
              <stop offset="100%" stopColor="#3060a0" />
            </linearGradient>
          </defs>
          <rect x="4" y="10" width="40" height="28" rx="3" fill="url(#m)" stroke="#fff" />
          <path d="M6 12l18 14L42 12" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
      );
    case "recycle":
      return (
        <svg width={s} height={s} viewBox="0 0 48 48" aria-hidden>
          <defs>
            <linearGradient id="rb" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8d8e8" />
              <stop offset="100%" stopColor="#7890a8" />
            </linearGradient>
          </defs>
          <path
            d="M16 10h16l2 4h8v4H6v-4h8l2-4z"
            fill="url(#rb)"
            stroke="#fff"
            strokeWidth="1"
          />
          <path
            d="M12 18h24l-2 22H14L12 18z"
            fill="url(#rb)"
            stroke="#fff"
            opacity="0.9"
          />
          <path
            d="M20 24v10M24 24v10M28 24v10"
            stroke="#4a6080"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
