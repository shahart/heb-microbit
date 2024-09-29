# pxt-hebrew
---
This library make it possible to show characters of Hebrew.
A fork from the Katakana extension.

#### Works with micro:bit V2

![works with micro:bit V2 only image](/v2-only.png)

Using these blocks requires the micro:bit V2 hardware. If you use any blocks that attempt access flash memory on a micro:bit v1 board, you will see the **927** error code on the screen.

## Basic Usage
---
Import extension from https://github.com/shahart/heb-microbit

Method
```
hebrew.showString(string)
הצג מחרוזת
```

- string: characters to show

the only argument is the characters to show. The default is blank. 

You can use the characters below and space.
```
 אבגדהוזחטיךכלםמןנסעףפץצקרשת-,.､｡!?｢｣[]()<>#$%&'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ^`_･*+ｰ=\\/:;@
```

## Example
---

It works.
```
hebrew.showString("שלום !")
```

## License
MIT

## Supported targets

* for PXT/micro:bit (v2 only)
