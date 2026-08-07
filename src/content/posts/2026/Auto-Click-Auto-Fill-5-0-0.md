---
author: Dharmesh-Hemaram
date: "2026-07-23"
title: Auto Clicker Auto Fill v5.0.0 — A New Chapter
slug: 5.0.0
keywords:
  - subscription
  - plus
  - pro
  - freemium
  - dodo payments
  - release
  - milestone
  - ask ai
  - chat
  - qna
---

## Eight and a Half Years

December 31, 2017. That's when I pushed the very first version of Auto Clicker Auto Fill.

I remember it clearly — it was New Year's Eve, and instead of celebrating, I was sitting at my desk, debugging a Chrome extension I had built because I was tired of filling in the same web forms over and over. I didn't plan to share it publicly. I just wanted to solve my own problem. But I did share it, and a few people downloaded it, and that felt good.

So I kept going.

Eight and a half years later, I'm still going. And today, with version **5.0.0**, I'm turning a page. This post isn't just a list of what changed in the code. It's me telling you where I've been, why things are different now, and what I'm asking from you.

---

## The Reality of Maintaining a Free Extension

For most of those eight years, this extension was a hobby. I worked on it in the evenings, on weekends, during lunch breaks. Every feature request I could, I built. Every bug report I received, I investigated. Thousands of messages from users, and I read them all.

The extension grew. So did the user base. And so did the weight of maintaining it.

Here's something most users don't think about: the libraries and tools an extension depends on don't stand still. Every few months, a dependency gets outdated, a security vulnerability is discovered, or a browser update breaks an old API. When that happens, I have to act — not because I want to, but because leaving it unfixed means **your data could be at risk**.

There have been real-world incidents where popular browser extensions were compromised through outdated third-party libraries. Attackers injected malicious code, stole session cookies, or silently exfiltrated form data. The extensions looked the same to users. The damage was invisible — until it wasn't.

Keeping this extension safe means constant work. Not glamorous work. Not work that makes for exciting release notes. Just quiet, disciplined maintenance so that nothing bad happens to you.

---

## My Life Has Changed Too

When I started this project, I was single, had fewer responsibilities, and had a lot of free evenings. That's not my life anymore.

My family has grown. I have people who depend on me. The hours I once gave freely to this project now have to be balanced against everything else a life asks of you. I'm not complaining — I wouldn't trade it. But I have to be honest: I can't keep investing the same amount of time and energy into something that gives nothing back, indefinitely.

I've given a lot to this extension. And I've been genuinely happy to do it. But now, after more than eight years, I need to ask something in return.

---

## Introducing Plans: Free, Plus, and Pro

Starting with v5.0.0, Auto Clicker Auto Fill moves to a **freemium model**.

The core extension remains free — always. Unlimited automations, unlimited steps, the visual recorder, all value types. If the free version is all you need, nothing changes for you.

But for the features that take the most time to build and maintain — the advanced loops, the integrations, the AI features, the priority support — there are now two paid plans.

### 🆓 FREE — Forever

Everything you need to get started:

- Unlimited automations
- Unlimited steps per automation
- Repeat steps in a loop
- Visual step recorder
- All value types — no API required

### 🚀 PLUS

Everything in Free, plus:

- 🚫 Ad-free experience
- Automation loop — repeat entire automations
- Automation monitor — watch for changes and react
- Automation scheduler — run on a schedule
- Page guard — element-based gating before a run
- Step-level settings and overrides
- Step guard — conditional checks between steps

### 🔹 PRO

Everything in Plus, plus:

- Google Sheets integration
- Discord integration
- Captcha solver
- OpenAI integration
- Priority support via Discord
- Gmail integration *(coming soon)*

You can review the plans and subscribe from the **Subscription** section inside the extension's options page.

Payment is handled through **Dodo Payments**, backed by Stripe. Your payment details are processed securely and never stored by me.

---

## Ask AI

Right after talking about subscriptions, I want to point out something that isn't behind a paywall.

5.0.0 also introduces **Ask AI** — a chat-style assistant built directly into the Side Panel. Instead of digging through the docs or guessing why a step isn't matching, you can just ask.

You can open it three ways:

- Open the Side Panel and select the new `Ask` tab.
- Right-click on any page and choose **✨ Ask AI** — it opens the Side Panel straight to the `Ask` tab.
- Click the floating 🤖 button in the bottom corner of the extension's Configuration page.

Sign in once, then type a question — "What is a loop?", "Why isn't my step matching?" — and you'll get a plain-language answer, often with links back to the exact docs page it came from. Every answer has a quick 👍 / 👎 so I know which answers are actually helping.

Ask AI has no Pro gate and no usage limit. Free, Plus, and Pro users all get it, because good support shouldn't be something you have to pay for.

Full details are in the [Ask AI docs](https://getautoclicker.com/docs/5.x/side-panel/ask-ai/).

---

## What Else Changed in 5.0.0

Beyond the subscription model, this release includes several improvements:

**Performance fix in the options page.** There was a bottleneck causing the options page to slow down noticeably as the number of automations grew. That's been fixed.

**UI layout improvements.** The interface now makes better use of larger screen sizes, so if you're on a wider monitor you'll see more content and less wasted space.

**Dodo Payments replaces the previous payment provider.** The integration is cleaner, the checkout flow is smoother, and the Stripe backend gives you the payment security you'd expect.

**Dependency audit and security updates.** As always, a pass over all third-party libraries — updating anything outdated, removing anything unused. This is the quiet work that keeps you safe.

---

## Why I'm Telling You All This

I could have shipped this update with a short changelog and moved on. But you've been with me through years of this, and I think you deserve more than a bullet list.

I built this extension because I wanted to help people. I've kept building it because that goal hasn't changed. But tools that are worth using are worth paying for — not because I'm asking you to pay for something you used to get free, but because the only way I can keep making this better is if it's sustainable.

If the free plan serves you well, I'm glad. If you've gotten real value out of the advanced features over the years, now is a chance to give something back.

Subscribe if you can. If you can't, that's okay too — the core will stay free.

And either way: thank you. For the downloads, the bug reports, the feature requests, the kind messages. For eight and a half years of showing me that this was worth building.

Here's to whatever comes next.

— Dharmesh
