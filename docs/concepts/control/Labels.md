---
title: Labels
sidebar_position: 300
---

## Labels

A label in Loop is like: `<identifier>:`, it serves as a "jump point".

The syntax for the identifier for a label is the same as a
[variable](../variables). Examples of labels:

```loop
// Label 1
first:

// Label 2
second:
```

## Goto

The keyword "goto" is needed to jump to a label. The syntax is as follows:
`goto <label>`. When using a label, you need to reference a label.

```loop
if(true) {
    if (true) {
        // It will jump to the label: "label:"
        goto label:
    }
    if (true) {
        // This block will never be reached
    }
}
label:
```
