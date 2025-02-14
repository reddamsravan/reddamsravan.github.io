const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("src/assets/css/syntax.css");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy({
    "node_modules/super-tiny-icons/images/svg/linkedin.svg":
      "assets/images/linkedin.svg",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/super-tiny-icons/images/svg/github.svg":
      "assets/images/github.svg",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/super-tiny-icons/images/svg/codepen.svg":
      "assets/images/codepen.svg",
  });
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
