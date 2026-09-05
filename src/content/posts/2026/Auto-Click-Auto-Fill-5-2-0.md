---
author: dharmesh-hemaram
date: '2026-08-29'
title: Auto Clicker Auto Fill v5.2.0
slug: 5.2.0
keywords:
  - automations
  - search
  - organize
  - filter
  - sidebar
  - plus
  - pro
  - bug fix
---

## New in This Update

Finding and organizing automations in a large list is a lot easier now — a new organize dropdown lets you filter the sidebar by status and group everything by status, domain, or active features, and a full-list search modal opens with one click. This update also fixes a bug that could block Plus and Pro subscribers from saving gated settings even though the UI showed those features as unlocked.

## Highlights

### 1) Organize the Sidebar

Select the sliders icon next to the sidebar search icon to open the new organize dropdown.

- **Status** filters the sidebar list — choose **All**, **Enabled**, or **Disabled**.
- **Group by** adds labeled sections to the sidebar and search results — choose **None**, **Status**, **Domain**, or **Features**. Grouping by Features sorts automations by their active feature combination (Loop, Schedule, Monitor, Published), with everything else under **No features**.

Your Status and Group by choices are remembered the next time you open the options page.

### 2) Quick Search

Select the search icon above the sidebar automation list to open a full-list search modal. It searches every automation by name, target URL, or ID — regardless of whatever Status filter the sidebar is currently set to — so you can always find what you're looking for without changing the sidebar filter first. Use the arrow keys to move between results and `Enter` to open one, or `Escape` to close the modal.

### 3) Clearer Sidebar Rows

Sidebar and search-result rows now use colored status dots instead of the old slash-circle icon, and long automation names or URLs truncate cleanly with a hover tooltip instead of stretching the row across several lines.

### 4) Fixed: Plus/Pro Save Failures on Gated Fields

Some Plus and Pro subscribers couldn't save Loop, Monitor, Schedule, Step Settings, Page Guard, or State Guard settings, even though those fields showed as unlocked for their plan. The save-time check has been rebuilt to use the same role check the rest of the UI already uses, so a field that shows unlocked now saves correctly. Clearing a previously-saved value in one of these fields still works for everyone, including Free users.

## Why This Matters

The organize dropdown and quick search are built to stay fast even with a large automation list, so sorting through hundreds of saved automations is no slower than sorting through a handful. And if you ran into the Plus/Pro save bug, this update resolves it — no workaround needed.

See the [Automations docs](https://getautoclicker.com/docs/5.x/automations/overview/) for the full rundown of search, organize, and the rest of the automations list.
