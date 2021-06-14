---
layout: blogs
title: "Auto Clicker Auto Fill 3.2.9"
date: 2021-06-14
tags:
  [
    "3.2.9",
    "attribute update",
    "attribute remove",
    "class add",
    "class replace",
    "class remove",
    "class clear",
    "auto fill",
    "value",
    "notification",
    "discord notification",
  ]
---

{{<img "icons/dev_icon48.png" "48px">}}


### New Features {class="my-3"}

- [Attribute](https://getautoclicker.com/docs/3.x/action/value/#attribute)
- [Class](https://getautoclicker.com/docs/3.x/action/value/#class)
- Discord Notifications

#### Attribute
Now its possible to update or remove attribute from element using Auto Clicker AutoFill
- <kbd>Attr::set::prop::value</kbd> syntax to update attribute e.g. Attr::set::target::_blank -> to update links to open in new tab 
- <kbd>Attr::remove::prop</kbd> syntax to remove attribute e.g. Attr::remove::disabled -> to remove disabled attribute from button and make it enable

#### Class
Now its possible to update / remove / replace / clear class from element using Auto Clicker AutoFill
- <kbd>Class::add::className</kbd> syntax to add attribute
- <kbd>Class::remove::className</kbd> syntax to remove attribute
- <kbd>Class::replace::className::className</kbd> syntax to replace attribute
- <kbd>Class::clear</kbd> syntax to clear attribute

#### Discord Notification
Now get notification on your mobile for any *Error/Completion* of configuration on your system right from Auto Clicker AutoFill extension. In order to receive notification on mobile you need to install [discord mobile app](https://discord.com/download) first. Create new account if you haven't created yet. join our server [Auto Clicker AutoFill](https://discord.gg/hArVQns). now open [configuration page](https://dev.getautoclicker.com/) and login with same discord account. open settings and enable Discord Notifications. Its currently in DEV and under testing phase so you may face some issue also we may move this feature in some other location(Action specific notification) based on your feedback.

{{<callout danger>}}
## Important for Discord Notification
Below are steps how discord notifications work
- Auto Clicker AutoFill BOT is installed on secure google cloud which send message to you on Discord
- An Trigger is sent from extension installed on your system to service (Auto Clicker AutoFill BOT) when some event is occurred (*Error/Completion* completed).
    - **Name** of configuration (for *Error/Completion*)
    - **URL** of configuration (for *Error/Completion*)
    - **Element** Finder of Action (for *Error* only)
- Above three information is send from your extension to google cloud server which BOT process and send you Direct Message to your Discord Account
<hr/>

#### We are not storing any of above three information anywhere in our database not using same in any way. It's processed on the fly with BOT and send to you without even logging same.

{{</callout>}}