const { defineConfig } = require("eslint/config");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require('@typescript-eslint/parser');
const eslintJsPlugin = require("@eslint/js");
const globals = require("globals");

module.exports = defineConfig([
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin
    },
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      ...eslintJsPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      "quotes": ["error", "single"],
    },
  },
]);
