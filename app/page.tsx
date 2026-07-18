"use client";

import { useCallback, useState } from "react";
import { DialUpBoot } from "@/components/desktop/DialUpBoot";
import { Desktop } from "@/components/desktop/Desktop";

export default function Home() {
  const [booted, setBooted] = useState(false);

  const handleConnected = useCallback(() => {
    setBooted(true);
  }, []);

  return (
    <>
      {!booted && <DialUpBoot onConnected={handleConnected} />}
      {booted && <Desktop />}
    </>
  );
}
