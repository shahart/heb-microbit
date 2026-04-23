# Repository Guidelines

## Project Structure & Module Organization
`main.ts` contains the extension logic, exported blocks, and the Hebrew glyph tables (`hs` and `arr`). `test.ts` is the lightweight MakeCode test harness entrypoint. Package metadata lives in `pxt.json`, and TypeScript compiler settings live in `tsconfig.json`. Hebrew block text and JSDoc translations are stored in `_locales/he/`. Generated output is written to `built/`; vendored MakeCode dependencies appear under `pxt_modules/` and should usually be left alone.

## Build, Test, and Development Commands
Use the PXT CLI rather than raw `tsc`.

```bash
npm i -g pxt
pxt target microbit
pxt install
pxt build --cloud
```

`pxt build --cloud` matches the GitHub Actions workflow. For local simulator work, run `pxt serve` and open the served MakeCode URL. Use `pxt test` when changing `test.ts` or behavior that needs quick verification.

## Coding Style & Naming Conventions
Follow the existing TypeScript style in `main.ts`: 4-space indentation, `const` by default, and concise exported APIs. Preserve all `//%` annotations and existing `blockId` values; changing them breaks the Blocks UI and project serialization. Keep glyph edits data-only when possible by updating `hs` and `arr` without reshaping the rendering logic. Use clear camelCase names for functions and variables.

## Testing Guidelines
Treat `test.ts` as the minimal regression check for display behavior. After changes, run `pxt build --cloud` and, when relevant, `pxt test`. For glyph or scrolling changes, also verify in the MakeCode simulator or on a micro:bit V2 device with examples such as `hebrew.showString("שלום !")`.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit subjects such as `Add icon`, `Review comments`, and `CI badge`. Keep commits focused and descriptive. PRs should explain the user-visible change, note any glyph or localization updates, and mention the commands you ran. If you change block text, tooltips, or JSDoc, update `_locales/he/*`. If releasing, bump `version` in `pxt.json`.

## Repository-Specific Notes
Avoid editing `pxt_modules/core` unless the PR explicitly documents a core fork. This package targets micro:bit V2 only, so hardware-specific display checks matter for final verification.
