---
author: Dharmesh-Hemaram
date: '2026-04-22'
title: Auto Clicker Auto Fill v5.0.5
slug: 5.0.5
keywords:
  - redesign
  - configuration-page
  - position-finder
  - migration-backup
  - page-guard
  - cloud-backup
  - monitor
  - major-version
---

## What's New in v5.0.5

Version 5 is the biggest structural leap since the extension moved to its current options‑page model. The headline is a complete redesign of the automation configuration screen, but the release also ships first‑class positional targeting, automatic pre‑migration snapshots, and a raft of quality improvements that make everyday automation building more reliable.

---

### Redesigned Automation Configuration Page

The configuration page has been rebuilt from the ground up. Every interaction is now inline and context‑aware instead of relying on separate modal dialogs.

**Inline name editing** — click the automation name field directly to rename it in place. No extra steps, no panel to open.

**Consolidated action menu** — a single dropdown next to the name exposes every operation you need:

| Action    | What it does                                              |
| --------- | --------------------------------------------------------- |
| Edit      | Expand the inline URL and Wait Before Start editor        |
| Export    | Download the automation as JSON                           |
| Schedule  | Set when it should run automatically                      |
| Loop      | Configure repeat count and interval                       |
| Monitor   | Watch for new page content and re‑run matching steps      |
| Duplicate | Clone the automation                                      |
| Disable   | Pause without deleting                                    |
| Remove    | Delete permanently                                        |

**Inline URL editing** — clicking the URL field or choosing Edit expands a section right inside the row. Edit the URL and Wait Before Start, then hit Save or Cancel without leaving the screen.

**Icon tooltips** — status icons for Wait, Schedule, Monitor, and Loop now show labelled tooltips on hover so you always know at a glance what is configured.

**Enable toggle** — flip the automation on or off directly from the row, no menu required.

---

### Position‑Based Element Finder

Steps can now target an element by its visual position on the page using `Position::x,y`.

- Useful when no good XPath, ID, or class exists — for example, canvas‑rendered apps or overlapping layers.
- Right‑click context menu support makes it easy to copy a position from the recording wizard.
- Combine with Page Guard to guard against layout shifts before acting.

---

### Automatic Migration Backup

Every time the extension applies a storage schema update, it now saves a local snapshot of your data **before** the migration runs.

Go to **Settings → Migration Backup** to:

- Browse available snapshots and inspect their JSON.
- **Download** a snapshot as a file for off‑device archiving.
- **Restore** a snapshot to roll back if something went wrong.
- **Delete** snapshots you no longer need.

The extension keeps the most recent snapshots and rotates older ones automatically.

---

### Page Guard: Browser Function Evaluation

Page Guard gained a `Func::` prefix that lets you evaluate any JavaScript expression instead of reading a DOM element.

```
Func::new Date().getHours()      → current hour (0–23)
Func::location.href              → current page URL
```

Use this to run steps only between certain hours, only on specific URL patterns, or based on any in‑browser value — without shipping a separate userscript.

> Only use `Func::` expressions you wrote yourself or fully understand.

---

### Cloud Backup via Google Drive

Settings now includes a **Cloud Backup** panel backed by Google Drive's App Data folder.

- The App Data scope is private to the extension — it does not touch the rest of your Drive.
- Set automatic backups to run **Daily**, **Weekly**, or **Monthly**, or trigger one immediately with **Backup Now**.
- **Restore** replaces your current local automations and settings with the latest Drive snapshot.

---

### Interval Range for Steps

Step delays and batch‑processing intervals now support a **range** in addition to a fixed value. Click the range button on any delay or interval field to set a minimum and maximum — the extension picks a random value in that range each time it runs. This reduces bot‑detection signatures on pages that inspect timing patterns.

---

### Monitor Improvements

The Monitor panel (previously called Watch) received a full configuration overhaul:

| Setting             | What it controls                                                     |
| ------------------- | -------------------------------------------------------------------- |
| Debounce            | Delay before processing new elements (100–5000 ms, default 500 ms)  |
| Monitor Root        | CSS selector to scope what the observer watches (default `body`)     |
| Monitor Attributes  | Comma‑separated attributes to watch in addition to child changes     |
| Timeout             | Maximum observer lifetime (1–180 minutes, default 30 minutes)        |
| Stop on URL Change  | Automatically halt the observer when the page address changes        |

---

### Settings Additions

**Additional Settings** consolidates three options that were previously scattered:

- **Search Inside Embedded Pages** — look inside `<iframe>` elements before falling back to the main document.
- **Refresh Page on Error** — reload automatically if the extension context is invalidated (e.g. after an extension update).
- **Status Bar** — choose the corner where the status bar appears, or hide it entirely.

---

### Under the Hood

- **Vite + Nx** powers the options‑page build, reducing cold build and incremental rebuild times.
- **Playwright E2E tests** now cover the settings, automations list, and core configuration flows, giving the project a regression safety net for the first time.
- **Language preference persistence** — your selected language is now saved to local storage and restored on next open.
- **Bootstrap Icons served via CDN** — smaller initial bundle.

---

### Why v5?

The move to a major version reflects the depth of this release: a rewritten configuration screen, a new element‑targeting strategy, automatic data‑safety backstops (migration backup and cloud sync), and a test layer that keeps future changes from quietly breaking things. If you've been on 4.x for a while, this is the update worth switching for.

**[Full Changelog ↗](https://github.com/Dhruv-Techapps/acf-docs/compare/v4.0.47...v5.0.5)**

---

Questions or issues with the new configuration screen? [Open a discussion](https://github.com/Dhruv-Techapps/acf-docs/discussions) and we'll help you out.
