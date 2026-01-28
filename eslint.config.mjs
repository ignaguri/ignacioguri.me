import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import prettierConfigRecommended from "eslint-plugin-prettier/recommended";

export default [
  // Base recommended configs
  js.configs.recommended,

  // TypeScript files configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: {
        React: true,
        JSX: true,
        // Browser globals
        window: true,
        document: true,
        localStorage: true,
        // Node.js globals
        process: true,
        global: true,
        Buffer: true,
        __dirname: true,
        __filename: true,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "import": importPlugin,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
    },
    rules: {
      "no-console": "warn",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external", "internal", "index", "object"],
            ["type"], // All type imports go after other imports
          ],
          "newlines-between": "always", // Add a new line between groups
          alphabetize: {
            order: "asc", // Sort in ascending order
            caseInsensitive: true,
          },
        },
      ],
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "simple-import-sort/exports": "warn",
    },
  },

  // Prettier configuration
  prettierConfigRecommended,

  // Ignore patterns
  {
    ignores: [
      ".next/*",
      "node_modules/*",
      "out/*",
      "build/*",
      "dist/*",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
];
