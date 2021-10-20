---
title: Introduction
sidebar_position: 0
---

A Plugin in Loop will be able to modify existing behavior of the language or
extend it with new behavior.

## Plugins vs Packages

There's a fundamental difference between plugins and packages in Loop. While a
Package can be created within the Loop Language and use existing components of
the language a Plugin can not. A plugin is written in
[Rust](https://www.rust-lang.org/) and needs to be compiled to a DLL before
being used within Loop.

A Plugin is also more powerful due to this. You can use any Rust functionality
and export it to be used within Loop.
