---
author: Dhruv-Tech-Apps
date: '2025-08-29'
title: Auto Clicker Auto Fill v4.0.47
slug: 4.0.47
keywords:
  - automation
  - customization
  - performance
  - release
  - javascript
---

## What’s New in v4.0.47

Release 4.0.47 is a refinement-heavy update that focuses on giving power users more control while trimming visual noise and technical friction. It also clears the path for faster future iterations by
modernizing core tooling and architecture.

### Highlights

**Custom JavaScript Execution (Feature #483)**  
You can now inject bespoke JavaScript directly from your configuration, enabling advanced logic (dynamic field transforms, conditional flows, lightweight data extraction) without shipping a separate
addon. This opens the door to highly tailored automation scenarios.

**Cleaner Interface**  
Ads have been removed for role‑based configurations, keeping your workspace distraction‑free and faster to scan.

**Textarea Memory Fix (Feature #632)**  
Input/textarea elements now correctly retain both their detected type and height, eliminating repetitive manual adjustments when cycling configurations.

### Developer & Architecture Upgrades

| Area     | Improvement                       | Impact                                       |
| -------- | --------------------------------- | -------------------------------------------- |
| Icons    | Bootstrap icons served via CDN    | Smaller bundle, quicker cold loads           |
| Tooling  | Added Vitest + SWC                | Faster test runs & modern transform pipeline |
| Monorepo | Migrated to Nx                    | Clearer boundaries, scalable growth          |
| Types    | Widened interface usage & cleanup | Consistent contracts, easier refactors       |
| Regex    | Removed redundant pattern         | Fewer false positives & maintenance overhead |

### UX & Theme

Local Theme Context and dropdown refactor reduce prop drilling and improve isolation, making future theming and dark‑mode adjustments safer.

### Why It Matters

This release shifts the extension from incremental polish toward extensibility: bringing custom JavaScript closer to the core while tightening performance.

**[Full Changelog ↗](https://github.com/Dhruv-Techapps/auto-clicker-auto-fill/compare/v4.0.47.0...v4.0.47.2)**

---

Need an example of the new JavaScript hook? Open an issue and we’ll publish a snippet pack.
