<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Repo-specific Copilot instructions — heb-microbit

This file tells an AI coding assistant how to be immediately productive in this MakeCode/PXT TypeScript extension.

1. Purpose and high-level architecture
- This repo is a MakeCode (PXT) extension that provides Hebrew character support for micro:bit V2. See `pxt.json` (name/version/public/supportedTargets).
- The extension exposes blocks via `main.ts` using `//%` annotations (e.g. `//% blockId=hebrew_show_string`). Keep block metadata and jsdoc tags intact.
- Text rendering is data-driven: `hs` maps characters to positions and `arr` contains 5x5 LED patterns. Changes to glyphs require editing these arrays in `main.ts` consistently.

2. Key files and patterns to reference
- `pxt.json`: package metadata, `files` list, `supportedTargets`, and `disablesVariants`. Update `version` here when preparing releases.
- `main.ts`: primary source of blocks and runtime code. Example: `export function showString(text: string)` implements scrolling logic — preserve algorithmic intent when refactoring.
- `_locales/he/*.json`: localization strings and JSDoc translations. Keep encoding and string keys stable.
- `test.ts`: contains basic tests used by the MakeCode test harness. Use it for quick verification of behavior changes.
- `tsconfig.json`: compiler options (target ES5, `noImplicitAny`, `outDir: built`). Build tools rely on these settings.
- `pxt_modules/core/*`: vendored MakeCode core — avoid editing unless you intend to fork core behavior.

3. Build, run, and test workflows (what works locally)
- Requires PXT (MakeCode) CLI to build/serve. Typical commands (requires `pxt` in PATH):
```bash
# install pxt CLI (if missing)
npm i -g pxt

# build the package (produces built/ files per tsconfig)
cd /path/to/heb-microbit
pxt build

# serve locally for MakeCode web UI integration (if you want to load locally)
pxt serve
```
- The repository also uses TypeScript compiler settings in `tsconfig.json`; `pxt build` respects PXT toolchain and `pxt.json` packaging.

4. Project-specific coding conventions for the agent
- Preserve `//%` block annotations and blockId values in `main.ts` — these control the block UI and serialization.
- Keep functions short and side-effect explicit: block functions are often called from block UI and should not assume heavy environment setup.
- When changing glyph data, maintain the 5x5 matrix orientation used by `showString` (see loops and `led.plot`/`led.unplot` in `main.ts`). Validate visually with micro:bit simulator or device.
- Do not alter code inside `pxt_modules/core` unless necessary; prefer to extend in `main.ts` or add new files listed in `pxt.json` `files`.

5. Localization & strings
- Translational strings live in `_locales/he/hebrew-strings.json` and `_locales/he/hebrew-jsdoc-strings.json`. If adding block text or tooltips, update `_locales` for consistency.

6. Tests and verification
- `test.ts` is the place for small behavior checks. Use `pxt test` or the MakeCode web UI test harness where available. Manual verification on micro:bit V2 is recommended for display behavior.

7. Packaging & release notes
- Update `pxt.json` `version` and `description` for releases. `public: true` indicates the package is intended for publishing.

8. When making PRs
- Keep changes scoped: small data changes to glyphs or localized strings should be separate from algorithmic refactors.
- Include a short manual verification note: which characters were added/changed and a quick command to build and test locally (`pxt build` + simulator/device).

9. Examples the assistant can edit safely
- Small glyph tweaks in `main.ts` (change `arr` values) — keep matrix dimensions and indices intact.
- Add a small helper in `main.ts` to expose a utility (e.g., `export function showChar(chr: string)`) as a new block; include `//%` annotation and add to `pxt.json` `files` if adding new file.

10. What not to change
- Do not remove `//%` annotations or change block IDs without coordinating, as this will break block serialization and existing projects using the extension.
- Avoid modifying `pxt_modules/core` unless you reason clearly about a core-level fix.
