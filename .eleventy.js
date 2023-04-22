const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");

  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  eleventyConfig.addShortcode("version", () => now);
};
