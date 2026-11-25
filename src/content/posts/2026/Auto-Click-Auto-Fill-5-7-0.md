---
author: dharmesh-hemaram
date: '2026-11-12'
title: Auto Clicker Auto Fill v5.7.0
slug: 5.7.0
keywords:
  - element not found
  - repair
  - status bar
  - target
  - retry
  - automations
---

## New in This Update

"Element not found" is the most common reason an automation stops, and until now the only way out was to open the automation editor and work out a new selector by hand. This update lets you fix the step right on the page in a couple of clicks, warns you about steps that cannot work before you ever run them, and stops treating "reload until it appears" as an error.

## Highlights

### 1) Fix a "Not Found" Step on the Page

When a step uses up its retries and still cannot find its element, the status bar now shows the error together with a **Select element again** button.

1. Click **Select element again**.
2. Move the mouse over the page; the element under the pointer is outlined.
3. Click the element the step should use.

The step's target is replaced with the element you picked, the change is saved to the automation, and the run continues from that step. The next time the page loads, the step simply works. Press **Esc** while picking to cancel without changing anything.

Clicking the error message itself still opens the failing step in the automation editor, exactly as before.

### 2) "Not on This Page" for Steps That Do Not Apply (PLUS)

Sometimes the step is fine and the page is the surprise: the automation's URL also matches pages where that element does not exist. On the PLUS plan the status bar adds a **Not on this page** button for that case. One click sets the step to be skipped whenever its element is missing, and the automation carries on with the next step, now and on every later run.

This is the same **Skip This Step** option found in Step Settings, set for you without leaving the page.

### 3) Undo

After either fix, an **Undo change** button stays in the status bar until you leave or reload the page. It puts the step back exactly as it was, so trying a fix is never a risk.

### 4) Warnings Before a Step Can Fail

The automation editor now tells you about steps that would stop the automation:

- A step with an empty **Target** shows a warning under the field.
- A **Target** that is not a valid XPath or selector shows a warning too, instead of failing later on the page.
- An automation with no steps shows a banner with an **Add Step** button, since it would run and do nothing.

These are warnings, not blocks. Half-finished steps still save, so you can keep building at your own pace.

### 5) "Refresh & Retry" Is Now a Waiting State

If you set a step to **Refresh & Retry**, a missing element is exactly what you expect: the page reloads and the automation looks again. The status bar now shows **Waiting for the element, reloading the page** with an ⏳ on the extension icon, instead of an error message and a ❌. Error notifications are no longer sent for every reload either, so a long wait no longer fills your desktop or Discord with alerts.

## Good to Know

- After a fix on the page, the automation finishes the remaining steps once. Loop repeats and the completion notification apply again from the next full run.
- The picker works in the page or embedded frame where the automation was running.
- The fix buttons need the status bar to be visible. If you turned it off in Additional Settings, turn it back on to use them.
- Userscript steps are not offered a fix, since they have no target to pick.

## Why This Matters

Websites change, and a selector that worked last month can quietly stop matching. That used to mean an error, a trip to the editor, and some trial and error. Now the fix is where the problem is: point at the right element and keep going. Together with the new editor warnings, fewer automations should fail in the first place, and the ones that do are quicker to put right.

See the [Fix Element Not Found docs](https://getautoclicker.com/docs/5.x/step/fix-not-found/) for the full walkthrough, and [Retry Attempts](https://getautoclicker.com/docs/5.x/settings/retry-attempts/) for how long a step keeps looking before it gives up.
