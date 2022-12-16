---
layout: blogs
title: "MV3"
slug: 3.4.10
date: 2022-12-16
tags: ["mv3"]
---


{{< callout info >}}
## We have updated our extension to manifest versions 3 and deployed on [DEV](https://dev.getautoclicker.com) environment.
{{</ callout >}}

Chrome is going to stop support for mv2 as per there [timeline](https://developer.chrome.com/docs/extensions/mv3/mv2-sunset/)

I request you all to import your configuration in [dev](https://dev.getautoclicker.com) version once and try out if it works seamlessly. As the same version is going to be deployed on [beta](https://beta.getautoclicker.com) and [stable](https://stable.getautoclicker.com) version soon. if you find any issues with MV3 versions, do create a issue on [Github](https://github.com/Dhruv-Techapps/auto-click-auto-fill/issues) and also add a tag of MV3.

Below are places where we have made changes which are related to MV3. If you find if you have used any of this, you need to test your configuration for same, we have created a separate thread for MV3 on our Discord channel as well. You can ping here directly also

## Changes
{{< bs-table >}}
| Feature	| Doc | 
| --- | --- |
|Record|	https://getautoclicker.com/docs/3.x/record/overview/|
|Icon|	https://getautoclicker.com/docs/3.x/extension/icon/|
|Notifications|	https://getautoclicker.com/docs/3.x/settings/show-notification/|
|Export	|https://getautoclicker.com/docs/3.x/configuration/export-import/|
|Import|	https://getautoclicker.com/docs/3.x/configuration/export-import/|
|Bulk Export|	https://getautoclicker.com/docs/3.x/config-list/bulk-export/|
|Bulk Import	|https://getautoclicker.com/docs/3.x/config-list/bulk-import/|
|Discord Notification|	https://getautoclicker.com/docs/3.x/settings/show-notification/|
|Copy	|https://getautoclicker.com/docs/3.x/action/value/#copy|
|Paste	|https://getautoclicker.com/docs/3.x/action/value/#paste|
|Data Entry|	https://getdataentry.com/|
{{< bs-table >}}

{{< callout danger >}}
## Important

with MV2 version we were storing all configuration on localStorage . With MV3 they deprecated localStorage and provided similar option which is chrome.storage.local. Because of this change we all must export our configuration from MV2 and import back in extension with MV3 version.

Even though MV3 do not support local storage it do not remove any data from local storage, its stored safe you can follow below steps to recover your configuration in case if you have not saved previously.
{{</ callout >}}

### Steps
- go to [chrome://extension](chrome://extension)
- enable developer mode from top right navbar
- Click on service worker link within extension card
- Devtools window opens
- navigate to Application tab
- left side sidebar you can navigate Storage -> Local Storage (expand)
- Click on chrome-extension://&lt;extension-id>
- You will see
  - configs
  - settings
- double click value field of both and copy its content and paste it in plain text file
- save it as [file name] with .json extension
- you can import this configuration file back into MV3 extension under Bulk import Configuration