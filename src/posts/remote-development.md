---
layout: main.liquid
title: Remote Development
tags:
  - post
  - tunnel
  - ssh
  - nginx
  - linux
  - server
  - vscode
---

## {{ title }}

### Setting up NGINX

### Accessing Your Server using SSH

### Forwarding Ports (aka Tunnelling)

#### Forwarding using command line

When accessing your server, you can pass an argument to SSH that will forward a port on the remote server to your local machine.

```bash
$ ssh -L localhost:8080:localhost:8080 logan@loganwoolf.dev
```

You can send multiple arguments for multiple ports

```bash
$ ssh \
> -L localhost:8080:localhost:8080 \
> -L localhost:3456:localhost:3456 \
> logan@loganwoolf.dev
```

#### Forwarding in VS Code

Once you have connected to your server, you will find a ports tab in your bottom panel. You can simply add a port by clicking "Add Port" and entering a port number.

### Common ports

- bigcommerce: 3000
- eleventy: 8080
- shopify: 3456 & 9292 (login and dev server, respectively)

### Final thoughts

This is easy!
