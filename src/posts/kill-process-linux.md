---
layout: main.liquid
title: Killing Node Processes in Linux
tags:
  - post
  - linux
  - node
---

## {{ title }}

Let's get a list of all node processes.

```bash
$ ps aux | grep node
```

Wow that's quite a few, let's narrow it down a bit

```bash
$ ps aux | grep eleventy
```

That's a bit more managable. The 2nd column is the PID. Let's get rid of the one that kicked it off

```bash
$ kill -9 <PID>
```

It might be helpful to launch the command with a launcher. We shall see.
