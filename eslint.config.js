import js from "@eslint/js";
import plugin from "eslint-plugin-solid";
import stylex from "@stylexjs/eslint-plugin";
import globals from "globals";
import eslintImport from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  plugin.configs['flat/recommended'],
  {
    files: ["src/**/*.jsx", "src/**/*.js"],
    ignores: ["src-tauri/*", ".git/*", "**/dist/*", "node_modules/*", "**/target/*"],
    plugins: {
      "@stylexjs": stylex,
      import: eslintImport,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      }
    },
    rules: {
      //indent: ["warn", 2],
      "semi": ["warn", "always"],
      "solid/reactivity": "warn",
      "solid/no-destructure": "warn",
      "no-unused-vars": "warn",
      "@stylexjs/valid-styles": [
      "error",
      {
        "propLimits": {
          "animation": {
            "limit": "string",
            "reason": "only string allowed"
          },
        }
      }
    ]
    }
  }
];