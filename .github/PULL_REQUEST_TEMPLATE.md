<!-- Short PR template with project-specific verification checklist -->
# Pull Request checklist

Please check the following before requesting review. These steps are specific to the MakeCode / PXT `heb-microbit` extension.

- [ ] I ran `pxt build` locally and verified the `built/` output updates (see `tsconfig.json` `outDir`).
- [ ] I ran `pxt test` (or validated via the MakeCode test harness) for changes to `test.ts`.
- [ ] If I changed block text, tooltips or JS Doc, I updated `_locales/he/*` accordingly.
- [ ] I preserved `//%` annotations and block IDs in `main.ts` (do not rename `blockId` values).
- [ ] I did not modify `pxt_modules/core` (unless the PR explicitly documents a core fork rationale).
- [ ] For glyph/data changes: I updated only the `hs` and `arr` arrays in `main.ts` and verified 5x5 matrix orientation in the simulator or device.
- [ ] If this is a release, I updated `pxt.json` `version` and `description`.

Manual verification steps (recommended):

1. Build the package:

```bash
npm i -g pxt         # if pxt not installed
cd /path/to/heb-microbit
pxt build
```

2. Serve locally and check in the MakeCode simulator (optional):

```bash
pxt serve
# open the served URL in a browser and test `hebrew.showString("שלום !")` in the simulator
```

3. For device testing: flash to a micro:bit V2 and confirm Hebrew glyphs render correctly on the LED matrix.

Reviewer notes:

- Pay attention to changes in `main.ts` data arrays (`hs` / `arr`) — small index shifts break glyph mapping.
- Ensure `//%` block annotations remain intact; they control the Blocks UI and serialization of projects using this package.
- If localization strings changed, confirm `_locales/he` has the updated keys and proper encoding.

If anything in this checklist isn't applicable to the PR, add a short note in the PR description explaining why.
