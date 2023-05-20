const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./src/styles/tailwind.css");

  eleventyConfig.addPassthroughCopy({ "./src/_tmp/style.css": "./style.css" });

  eleventyConfig.addShortcode("version", () => now);

  return {
    dir: {
      input: "src",
    },
  };
};
