"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function WebMcpStatus() {
  const isSupported = useSyncExternalStore(
    subscribe,
    () => document.modelContext !== undefined,
    () => null,
  );

  if (isSupported === null) {
    return null;
  }

  return (
    <p className="text-sm text-muted">
      {isSupported
        ? "WebMCP is on in this browser, so this site can register the tools below."
        : "WebMCP isn't on in this browser, so the tools below are registered nowhere for you right now."}
    </p>
  );
}
