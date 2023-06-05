---
layout: main.liquid
title: Using PM2 Node Process Manager
tags:
  - post
  - linux
  - node
  - pm2
  - deploy
  - server
---

## {{ title }}

PM2 is a great package for running node processes on a server. It supports saving its process list and running at system startup.

Get started with `npm i -g pm2` or `pnpm i -g pm2`


### Commands

#### `start`

Normally, you would run a process using the following syntax:
```bash
$ pm2 start npm -- start
```
where the `--` delineates the arguments to send to the process you are starting. This would be for if your regular start script was `npm start`. 

For other scripts using the `run` command, you would do
```bash
$ pm2 start npm -- run develop
```

#### `status`

You can then check your processes using 
```bash
$ pm2 status
```

#### `--name`

You can also set a process name using the `--name` flag


### basedir Error Workaround

Apparently there is an incompatibility between pm2 and pnpm where the following error occurs. If trying to run 
```bash
$ pm2 start pnpm -- develop
```
you would get the following error:
```bash
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")
          ^^^^^^^

SyntaxError: missing ) after argument list
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Object.<anonymous> (/home/logan/.local/share/pnpm/global/5/.pnpm/pm2@5.3.0/node_modules/pm2/lib/ProcessContainerFork.js:33:23)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
```

To get around this, I found that I could just call a script that would run the required commands for me. I like to keep these in a folder to save a bunch of `cd`-ing. 

```bash
pm2 start ~/launchers/my-job.sh
```

which contained this simple script

```bash
#!/bin/bash

cd ~/code/strapi-demo
pnpm develop
```

This solved the issue for me. Apparently this may depend on how you installed `pnpm` (`brew`, `asdf`, `npm`, `scoop`, native install script). I had installed via native script.
