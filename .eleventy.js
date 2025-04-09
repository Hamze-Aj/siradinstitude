module.exports = function(eleventyConfig) {
  // Copy styles
  eleventyConfig.addPassthroughCopy("src/styles");

  // ✅ Copy admin folder for Netlify CMS
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create blog collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  // Add date filter (NEW)
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // Set template engines (NEW)
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
