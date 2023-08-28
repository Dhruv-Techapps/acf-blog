---
author: Dhruv-Tech-Apps
date: '2022-01-03'
title: Auto Clicker Auto Fill 3.4.3
slug: 3.4.3
keywords:
  - recording
  - copy
  - paste
  - random
  - value
  - auto save
  - release
---

### New Features {class="my-3"}

- [Recording](https://getautoclicker.com/docs/3.x/record/overview/) - now its even easier to configure action using our record option. Simple start the recording and perform all the operation like
  filling form and clicking any button, selecting dropdown value, or checking radio or checkbox all will be recorded and when the stop recording it will save directly into extension configuration.
- [Copy](https://getautoclicker.com/docs/3.x/action/value/#copy) - now you can copy some text from webpage and paste it into field you require. Copy is combined with regex which means while copying
  you can perform filter operation to exclude or include specific part of text from webpage.
- [Paste](https://getautoclicker.com/docs/3.x/action/value/#paste) - it's simple it paste back content which is last copied from webpage. paste do not work with clipboard it has access to only content
  which is copied from the webpage through extension only.
- [Random Value](https://getautoclicker.com/docs/3.x/action/value/#random-value) - This is some unique feature which we recently introduced in our extension with this you can generate random value of
  any type and of any length. It can also help you to generate partial random text for example below. random text can be combination of numbers words and symbol or anything user defined.
  - example`768`@gmail\.com
  - example`142`@gmail\.com
  - example`125`@gmail\.com

#### Auto Save

Auto save is back with validation within fields. Now you no need to click save just keep on type and configuration will auto save for you.

Behind the screen when you type and move out of field by clicking tab or clicking on any other field or simply clicking any where in page and move out of field first field is getting validated like
entered value is correct or not. If value is fine save is triggered which saved value to storage. If you change something in field and directly go and refresh page you may sometimes not see the
required action.

Do create issue on our github repo to let us know if you facing any issue with this auto save.
