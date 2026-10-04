# React + TypeScript + Vite

This project sets up React with TypeScript, Vite, HMR and some Oxlint rules, using
[SWC](https://swc.rs) as the transformer.

The JSX/TS transform is handled by
[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
(configured in `vite.config.ts`), which gives much faster Fast Refresh than Babel.

Caveats: SWC ignores Vite's `target` and `esbuild` options, and it does not resolve
`tsconfig.json` (other than the JSX-related flags). See
[the plugin caveats](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc/README.md#caveats).

## React Compiler

The React Compiler is **not** enabled here: it only works through Babel
(`@vitejs/plugin-react` + `babel-plugin-react-compiler`) or via the native Rust compiler
of `@vitejs/plugin-react` with `compiler: true`.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.