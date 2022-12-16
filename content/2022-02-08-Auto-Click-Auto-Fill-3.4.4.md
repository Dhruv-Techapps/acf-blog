---
layout: blogs
title: "Auto Clicker Auto Fill 3.4.4"
slug: 3.4.4
date: 2022-02-08
tags: ["duplicate", "addon", "date","condition","element finder","batch repeat","url"]
---

### New Features {class="my-3"}
- [Duplicate](https://getautoclicker.com/docs/3.x/configuration/duplicate/) new feature added into Auto Clicker AutoFill extension to duplicate existing configuration and alter part of it. It's similar to copying and pasting. You must change the [URL](https://getautoclicker.com/docs/3.x/configuration/url/) of the configuration once you duplicate it so that it does not get conflict with the existing configuration. As whenever our page loads and extension gets loaded in it. it picks the URL of the page and tries to find a matching configuration for it. If you have configured more than one configuration for a single URL. Extension chooses the first matching URL and leaves the other configurations
- Addon [Element Finder](https://getautoclicker.com/docs/3.x/addon/element-finder/) supports [`<batchRepeat>` ](https://getautoclicker.com/docs/3.x/batch/repeat/) into it. It can now check conditions row by row using the batch process.
- Addon [Element Finder](https://getautoclicker.com/docs/3.x/addon/element-finder/) also supports a new feature which is comparing against [data and time](https://getautoclicker.com/docs/3.x/addon/element-finder/#check-time) of the system. Conditions can be added for the action to be executed when the system date matches, exceeds or falls below the system date. Along with the system date, you can compare with the month, weekday, time, hours, minutes, and seconds.