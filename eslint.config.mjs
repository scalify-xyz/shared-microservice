import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: {
      import: eslintPluginImport,
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        {
          accessibility: "explicit",
          overrides: {
            constructors: "explicit"
          }
        }
      ],
      "@typescript-eslint/parameter-properties": [
        "error",
        {
          "allow": ["private readonly"],
          prefer: "parameter-property"
        }
      ],
      "@typescript-eslint/no-extraneous-class": [
        "error",
        {
          allowConstructorOnly: false,
          allowStaticOnly: true
        }
      ],
      "prettier/prettier": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-empty-interface": "off",
      "comma-dangle": ["error", "always-multiline"],
      "arrow-parens": ["error", "always"],
      "@typescript-eslint/no-empty-interface": "off",
      "import/no-unresolved": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "@scalify/**",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@domain/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@application/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@infrastructure/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@interfaces/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@main/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "@shared/**",
              group: "internal",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
    ...prettierConfig,
    ignores: ["build/**/*", "!build/test.js"],
  },
];
