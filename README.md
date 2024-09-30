# hebrew
---
This library make it possible to show characters of Hebrew.
A fork from the Katakana extension.

#### Using these block requires the micro:bit V2 hardware

## Basic Usage
---
Import extension from https://github.com/shahart/heb-microbit

Method
```
hebrew.showString(text)
```

- text: characters to show

You can use the characters below and space.
```
 אבגדהוזחטיךכלםמןנסעףפץצקרשת-,.､｡!?｢｣[]()<>#$%&'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ^`_･*+ｰ=\\/:;@
```

## Example
---

```
hebrew.showString("Hello !")
hebrew.showString("שלום !")
```

## License
MIT

## Supported targets

* for PXT/micro:bit
