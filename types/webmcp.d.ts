/**
 * Minimal typings for the WebMCP imperative API (Chrome origin trial).
 * https://developer.chrome.com/docs/ai/webmcp/imperative-api
 */

interface ModelContextToolAnnotations {
  readOnlyHint?: boolean;
  untrustedContentHint?: boolean;
  consequentialHint?: boolean;
}

interface ModelContextTool {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
  annotations?: ModelContextToolAnnotations;
  execute: (input: Record<string, unknown>, options: { signal: AbortSignal }) => Promise<string>;
}

interface ModelContext {
  registerTool(tool: ModelContextTool, options?: { signal?: AbortSignal }): Promise<void>;
}

interface Document {
  readonly modelContext?: ModelContext;
}
