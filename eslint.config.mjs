import js from "@eslint/js";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import jest from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    extends: ["js/recommended", "jest/recommended", eslintConfigPrettier],
    plugins: { js, jest },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...jest.environments.globals.globals,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      semi: "warn",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
    },
  },
  globalIgnores(["dist/*", "node_modules/*", "coverage/*"]),
]);
