"use client";

import { applyTheme } from "@lib/theme";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/** Registers the site's WebMCP tools when the browser supports them. Renders nothing. */
export default function WebMcpTools() {
  const router = useRouter();

  useEffect(() => {
    const modelContext = document.modelContext;
    if (!modelContext) {
      return;
    }

    const controller = new AbortController();

    // Loaded lazily so browsers without WebMCP never download the tool data.
    import("@lib/webmcp").then(({ createWebMcpTools }) => {
      if (controller.signal.aborted) {
        return;
      }

      const tools = createWebMcpTools({
        navigate: (path) => router.push(path),
        setTheme: applyTheme,
        fetchProjects: async () => {
          const response = await fetch("/api/projects");
          if (!response.ok) {
            throw new Error(`Projects request failed with ${response.status}`);
          }
          return response.json();
        },
      });

      for (const tool of tools) {
        modelContext.registerTool(tool, { signal: controller.signal }).catch((error: unknown) => {
          console.error(`[webmcp] failed to register ${tool.name}:`, error);
        });
      }
    });

    return () => controller.abort();
  }, [router]);

  return null;
}
