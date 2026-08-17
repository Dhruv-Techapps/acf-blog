---
author: Dharmesh-Hemaram
date: "2026-08-17"
title: Auto Clicker Auto Fill v5.0.20
slug: 5.0.20
keywords:
  - ask ai
  - page context
  - element picker
  - chat
  - qna
  - selector
  - automation
---

## New in This Update

Ask AI can now see the page you're actually looking at.

Until now, Ask AI answered from the docs alone — great for "how do I configure a loop," less useful for "what's the Element Finder for this specific button." With this update, you can select one or more elements right on the page and attach them to your question, so the answer is built from the real element instead of a generic example.

## Highlights

### 1) Select Elements From the Page

Ask AI's sidebar now has a **Select elements** button. Click it, hover over the page to highlight elements as you go, and click one to attach it. No need to know a selector or open DevTools first.

### 2) Multi-Select, Stacked and Removable

Picking stays active after your first click, so you can attach several elements in a row — a button, a couple of form fields, a link — before asking your question. Each pick shows up as its own chip, stacked full-width in the sidebar, with a close button to remove it individually. Press <kbd>Esc</kbd>, or click the select button again, to stop picking.

### 3) Answers Built From the Real Page

With elements attached, Ask AI answers using their actual HTML rather than a generic docs example. Ask "what's the Element Finder for this?" and it suggests a real selector for that element — preferring a stable id or attribute over a fragile positional one, and correctly telling apart look-alike buttons or links that share styling but show different text.

### 4) Safe by Default

Only the elements you explicitly pick are sent — never the whole page. If a picked field is a password input, its value is stripped before anything leaves your browser.

## Why This Matters

Generic docs examples can only get you so far when your page's real markup doesn't match the sample. Now the workflow is:

1. Ask a question in the sidebar.
2. Click **Select elements** and pick what you're asking about.
3. Get an answer — and a working Element Finder — grounded in your actual page.

It turns Ask AI from a docs lookup into something closer to pair-programming your automation with your page open in front of it.

See the [Ask AI docs](https://getautoclicker.com/docs/5.x/side-panel/ask-ai/) for the full walkthrough, including how picking and multi-select work.
