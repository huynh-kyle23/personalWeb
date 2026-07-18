"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { label: "Initializing modem...", duration: 700 },
  { label: "Dialing 1-800-PORTFOLIO...", duration: 1100 },
  { label: "Carrier detected — handshake in progress...", duration: 900 },
  { label: "Verifying username: kyle...", duration: 800 },
  { label: "Authenticating password ********...", duration: 900 },
  { label: "Negotiating connection speed: 56kbps...", duration: 1000 },
  { label: "Connected! Loading desktop...", duration: 700 },
];

type Props = {
  onConnected: () => void;
};

export function DialUpBoot({ onConnected }: Props) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    if (skipped) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const run = async () => {
      for (let i = 0; i < STEPS.length; i++) {
        if (cancelled) return;
        setStep(i);
        setLog((prev) => [...prev, `> ${STEPS[i].label}`]);
        setProgress(((i + 1) / STEPS.length) * 100);
        await new Promise<void>((resolve) => {
          timeoutId = setTimeout(resolve, STEPS[i].duration);
        });
      }
      if (!cancelled) {
        setTimeout(onConnected, 400);
      }
    };

    run();
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [onConnected, skipped]);

  const skip = () => {
    setSkipped(true);
    onConnected();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a12] text-[#33ff66] font-mono">
      <div className="dialup-scanlines absolute inset-0 opacity-40" />
      <div className="relative z-10 w-full max-w-lg px-6">
        <div className="mb-6 text-center">
          <p className="text-[10px] tracking-[0.35em] text-[#66aa88] uppercase mb-2">
            KyleOS Connection Manager
          </p>
          <h1 className="text-xl sm:text-2xl text-white tracking-wide">
            Dial-Up Networking
          </h1>
          <p className="text-xs text-[#66aa88] mt-1">
            Windows Vista · Portfolio Edition
          </p>
        </div>

        <div className="border border-[#33ff66]/40 bg-black/60 p-4 shadow-[0_0_40px_rgba(51,255,102,0.15)]">
          <div className="h-40 overflow-hidden text-xs sm:text-sm leading-relaxed mb-4">
            {log.map((line, i) => (
              <p key={i} className="opacity-90">
                {line}
              </p>
            ))}
            <p>
              <span className="cursor-blink">█</span>
            </p>
          </div>

          <div className="mb-2 flex justify-between text-[10px] text-[#66aa88]">
            <span>{STEPS[Math.min(step, STEPS.length - 1)]?.label}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="vista-progress-track">
            <div
              className="vista-progress-fill transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-[10px] text-[#558866] text-center">
            Establishing PPP session… please wait
          </p>
          <button
            type="button"
            onClick={skip}
            className="text-xs text-[#88ccaa] underline underline-offset-2 hover:text-white transition-colors"
          >
            Skip connection (broadband users)
          </button>
        </div>
      </div>
    </div>
  );
}
