---
author: Dharmesh-Hemaram
date: "2026-05-05"
title: Auto Clicker Auto Fill v5.0.12
slug: 5.0.12
keywords:
  - automation
  - publish
  - explore
  - sharing
  - import
  - community
---

## New in This Update

This update introduces a full publish-and-discover workflow for automations.

You can now publish selected automations to a shared cloud feed, discover public automations from other users in a dedicated Explore screen, and import them into your own list in one click.

## Highlights

### 1) Publish from an Automation

Each automation now includes a **Publish** action in its menu.

Publishing supports metadata fields to make shared automations easier to discover:

- Title (required)
- Description (optional)
- Tags (optional, comma-separated)

If you already own a published automation, you can update metadata or unpublish it.

### 2) Ownership-Aware Safety Rules

The publish workflow enforces ownership boundaries:

- Only the owner can unpublish or update a published entry.
- If an automation is published by another user, you can duplicate it locally and publish your own copy.

This prevents accidental overwrites while keeping remix workflows simple.

### 3) New Explore Page

A new **Explore** route is available from the sidebar.

In Explore, you can:

- Search published automations
- Toggle tag and description visibility for compact browsing
- Load more results with pagination
- See author, source URL, and download counts
- Import a published automation directly into your account

### 4) Smoother Import Experience

Importing from Explore opens a confirmation step and then automatically migrates imported data to your current schema before opening it for editing.

## Why This Matters

Until now, automation sharing mostly depended on manual JSON export/import.

With publishing plus Explore, the workflow becomes:

1. Build locally.
2. Publish with metadata.
3. Discover from Explore.
4. Import and customize.

This reduces friction for power users and makes reusable automation patterns easier to distribute.

## PR Reference

These changes are part of PR #822 in the main extension repository.

[View PR #822](https://github.com/Dhruv-Techapps/auto-clicker-auto-fill/pull/822)
