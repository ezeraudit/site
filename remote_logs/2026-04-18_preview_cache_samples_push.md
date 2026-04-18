# Remote Change Control Record

- Created at: 2026-04-18 Asia/Shanghai
- Target remote: `origin`
- Target branch: `dev`
- Target repository: `https://github.com/ezercc/site`
- Environment scope: development branch, remote Git hosting only

## Intended Change

Push the preview-cache update for the check page:

- Use the Chinese frontend cache sample from `docs/frontend_cache_samples_20260418/zhongji_300308_sz_2026q1_zh_result_latest.json`.
- Use the English frontend cache sample from `docs/frontend_cache_samples_20260418/nvda_oq_2026fy_en_result_latest.json`.
- Route `/check/?preview=true` and `/en/check/?preview=true` through these localized sample streams instead of the old shared `sampleData`.

## Expected Effect

- Chinese preview renders from the Chinese cache sample.
- English preview renders from the English cache sample.
- Normal non-preview cache and backend-fetch behavior remains unchanged.

## Rollback Method

- Revert the preview-cache commit on `dev`, restoring `src/pages/api/check.ts` to import and stream the previous `sampleData`.

## Verification Plan

- User requested skipping local npm verification.
- Before push, confirm staged files only include the preview cache change, the two JSON cache samples, and this control record.
- After push, confirm local branch is synchronized with `origin/dev`.

## Post-change Result

- Completed.
- Pushed commit: `f717a6f` `feat: use localized preview cache samples`
- Push output confirmed update: `b2a48f2..f717a6f  dev -> dev`
- GitHub remote notice: repository moved to `https://github.com/ezercc/ezer-audit.git`; current `origin` push still succeeded through the existing remote URL.
- Local npm verification was skipped per user instruction.
- Remaining local uncommitted changes were not included in the push:
  - `src/i18n/ui.ts`
  - `src/pages/about.astro`
  - `src/pages/en/about.astro`
  - `src/pages/premium.astro`
  - `src/pages/en/premium.astro`
  - `docs/ezer_faq_v2_summary.docx`
  - `docs/ezer_faq_v2_summary.html`
