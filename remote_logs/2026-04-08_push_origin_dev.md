# Remote Change Control Record

- Created at: 2026-04-08 Asia/Shanghai
- Target remote: `origin`
- Target branch: `dev`
- Target repository: `https://github.com/ezercc/site`
- Environment scope: development branch, remote Git hosting only

## Intended Change

Push locally created commits to `origin/dev`:

- `ef60905` `docs: add effective input density copy`
- `9a84099` `feat: add effective input density demo`

## Expected Effect

- Publish the new Markdown copy document to the remote repository.
- Publish the effective input density demo implementation for the Chinese and English homepages.

## Rollback Method

- Revert the pushed commits on `dev`, or push compensating revert commits if rollback is required.

## Verification Plan

- Confirm local branch is ahead of upstream before push.
- Run `git push origin dev`.
- Confirm local branch is no longer ahead of upstream after push.
- Record the resulting remote update status in this file.

## Post-change Result

- Pending.
