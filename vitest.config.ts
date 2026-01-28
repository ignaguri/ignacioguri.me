import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./components"),
      "@lib": path.resolve(__dirname, "./lib"),
      "@sections": path.resolve(__dirname, "./sections"),
      "@styles": path.resolve(__dirname, "./styles"),
    },
  },
});
