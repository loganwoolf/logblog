const fs = require("fs");
const { dashcase } = require("./utility.js");

const [, , postTitle, ...tags] = process.argv;

if (!postTitle) {
  console.error(
    `Generate a markdown file using the default layout and post tag. Extra arguments will add more tag names to the post.

Usage:

$ node generate "Remote Development on a VPS" linux vscode ssh "remote work"
`
  );

  process.exit();
}

const prepareFileContents = () => {
  let tagList = "";
  tags.forEach((tag) => {
    tagList = `${tagList}
  - ${tag}`;
  });

  let fileContents = `---
layout: main.liquid
title: ${postTitle}
tags:
  - post${tagList}
---

## ${postTitle}

`;

  return fileContents;
};

const writeFiles = () => {
  fs.writeFileSync(`./posts/${dashcase(postTitle)}.md`, prepareFileContents());
};

writeFiles();
