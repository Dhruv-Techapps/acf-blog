---
author: Dharmesh-Hemaram
date: '2021-10-21'
title: Auto Clicker Auto Fill 3.3.0
keywords:
  - attribute
  - class
  - auto fill
  - value
  - notification
  - discord
  - url
  - name
  - element finder
  - release
---

### New Features {class="my-3"}

- [Attribute](https://getautoclicker.com/docs/4.x/action/value/#attribute)
- [Class](https://getautoclicker.com/docs/4.x/action/value/#class)
- Discord Notifications

#### Attribute

Now its possible to update or remove attribute from element using Auto Clicker AutoFill

- <kbd>Attr::set::prop::value</kbd> syntax to update attribute e.g. Attr::set::target::\_blank -> to update links to open in new tab
- <kbd>Attr::remove::prop</kbd> syntax to remove attribute e.g. Attr::remove::disabled -> to remove disabled attribute from button and make it enable

#### Class

Now its possible to update / remove / replace / clear class from element using Auto Clicker AutoFill

- <kbd>Class::add::className</kbd> syntax to add attribute
- <kbd>Class::remove::className</kbd> syntax to remove attribute
- <kbd>Class::replace::className::className</kbd> syntax to replace attribute
- <kbd>Class::clear</kbd> syntax to clear attribute

#### Discord Notification

Now get notification on your mobile for any _Error/Completion_ of configuration on your system right from Auto Clicker AutoFill extension. In order to receive notification on mobile you need to
install [discord mobile app](https://discord.com/download) first. Create new account if you haven't created yet. join our server [Auto Clicker AutoFill](https://discord.gg/hArVQns). now open
[configuration page](https://dev.getautoclicker.com/) and login with same discord account. open settings and enable Discord Notifications. Its currently in DEV and under testing phase so you may face
some issue also we may move this feature in some other location(Action specific notification) based on your feedback.

## Important for Discord Notification

Below are steps how discord notifications work

- Auto Clicker AutoFill BOT is installed on secure google cloud which send message to you on Discord
- An Trigger is sent from extension installed on your system to service (Auto Clicker AutoFill BOT) when some event is occurred (_Error/Completion_ completed).
  - **Name** of configuration (for _Error/Completion_)
  - **URL** of configuration (for _Error/Completion_)
  - **Element** Finder of Action (for _Error_ only)
- Above three information is send from your extension to google cloud server which BOT process and send you Direct Message to your Discord Account

<hr>

> We are not storing any of above three information anywhere in our database not using same in any way. It's processed on the fly with BOT and send to you without even logging same.
