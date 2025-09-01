---
author: Dhruv-Tech-Apps
date: '2025-07-10'
title: Auto Clicker Auto Fill v4.0.46
slug: 4.0.46
keywords:
  - profile-sunset
  - history
  - privacy
  - codacy
  - tooling
---

## What’s New in v4.0.46

This cycle retires the legacy Public vs Private Profile sync feature, simplifies data ownership, and layers in quality, observability, and testing improvements.

### Feature Sunset: Profiles

The cloud profile system has been removed. Your configurations now remain local (and portable through export/import). Stored encrypted data can be deleted on request—transparency and user ownership
first.

### Added / Improved

- History command & enriched data list interactions for quicker recall of recent automation steps.
- Subscription modal redesigned with a unified header for clearer upgrade context.
- Codacy integration & Istanbul coverage tooling to keep regressions under control.
- Incremental Vitest instrumentation improves feedback loop speed.

### Behind the Scenes

| Change                          | Benefit                                 |
| ------------------------------- | --------------------------------------- |
| Test coverage stack refinements | Faster CI & reliable mutation detection |
| Code cleanup / type tightening  | Reduced cognitive load for contributors |
| UI polish rounds                | Consistent spacing & readable modals    |

**[Full Changelog ↗](https://github.com/Dhruv-Techapps/auto-clicker-auto-fill/compare/v4.0.46.4...v4.0.46.8)**

---

If you depended on cloud sync, set up a manual export routine (Settings → Export) until a future sync replacement is announced.
